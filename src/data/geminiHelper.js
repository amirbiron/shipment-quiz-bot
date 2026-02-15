import { GoogleGenerativeAI } from '@google/generative-ai';

// In-memory cache: questionId -> explanation text
const explanationCache = new Map();

let genAI = null;
let model = null;

function initGemini() {
  if (!process.env.GEMINI_API_KEY) {
    return false;
  }
  if (!genAI) {
    genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });
  }
  return true;
}

/**
 * Generate an explanation for a quiz question using Gemini.
 * Results are cached by question ID to avoid redundant API calls.
 */
export async function explainQuestion(question) {
  // Return cached result if available
  if (explanationCache.has(question.id)) {
    return explanationCache.get(question.id);
  }

  if (!initGemini()) {
    return null;
  }

  const correctAnswer = question.type === 'multiple'
    ? question.options[question.correct]
    : (question.correct ? 'נכון' : 'לא נכון');

  const prompt = `אתה עוזר טכני למתכנת מתחיל. השאלה שנשאלה בחידון היא:
"${question.question}"

התשובה הנכונה היא: "${correctAnswer}"

ההסבר המקורי: "${question.explanation}"

הסבר למשתמש בצורה פשוטה וברורה את הקונספט הטכני שעומד מאחורי השאלה. התמקד בהבנה אינטואיטיבית, תן דוגמאות אם רלוונטי, והשתמש בעברית. הסבר בקצרה (עד 5 משפטים).`;

  try {
    const result = await model.generateContent(prompt);
    const text = result.response.text();
    explanationCache.set(question.id, text);
    return text;
  } catch (err) {
    console.error('Gemini API error:', err.message);
    return null;
  }
}

export function isGeminiConfigured() {
  return !!process.env.GEMINI_API_KEY;
}
