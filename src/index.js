import { Telegraf, Markup } from 'telegraf';
import dotenv from 'dotenv';
import { categories as shipmentCategories, questions as shipmentQuestions } from './data/questions.js';
import { loadQuestionsFromGist } from './data/gistLoader.js';
import { explainQuestion, isGeminiConfigured } from './data/geminiHelper.js';

dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN);

// ============================================================
// Multi-repo registry
// ============================================================
// Each repo entry has: name, categories, questions.
// The 'shipment' repo is loaded from the local file.
// Additional repos are loaded from gists on startup.
const repos = {
  shipment: {
    name: '📦 Shipment Bot',
    categories: shipmentCategories,
    questions: shipmentQuestions
  }
};

// Gist-based repos to load on startup
const gistRepos = [
  { key: 'codebot', name: '🤖 CodeBot', gistId: '01dbd8d9de54cb4cccf6a5cb646e523c' }
];

async function loadGistRepos() {
  for (const { key, name, gistId } of gistRepos) {
    try {
      const data = await loadQuestionsFromGist(gistId);
      repos[key] = { name, categories: data.categories, questions: data.questions };
      console.log(`✅ Loaded repo "${name}" from gist (${data.questions.length} questions)`);
    } catch (err) {
      console.error(`❌ Failed to load repo "${name}" from gist ${gistId}:`, err.message);
    }
  }
}

// ============================================================
// HTML escaping - fixes TelegramError for tags in question text
// ============================================================
function escapeHTML(text) {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

// ============================================================
// In-memory session storage
// ============================================================
const sessions = new Map();

function getSession(userId) {
  if (!sessions.has(userId)) {
    sessions.set(userId, {
      currentQuestion: null,
      score: 0,
      answered: 0,
      category: null,
      questionIndex: -1,
      repo: null // selected repo key
    });
  }
  return sessions.get(userId);
}

function resetSession(userId) {
  sessions.delete(userId);
}

// ============================================================
// Quiz helpers (repo-aware)
// ============================================================
function getRepoData(session) {
  const key = session.repo || 'shipment';
  return repos[key] || repos.shipment;
}

function getNextQuestion(repoData, category = null, currentIndex = -1) {
  const filtered = category
    ? repoData.questions.filter(q => q.category === category)
    : repoData.questions;

  if (filtered.length === 0) return null;

  const nextIndex = (currentIndex + 1) % filtered.length;
  return { question: filtered[nextIndex], nextIndex };
}

function formatQuestion(question) {
  let text = `📝 <b>שאלה:</b>\n${escapeHTML(question.question)}\n\n`;

  if (question.type === 'multiple') {
    question.options.forEach((opt, idx) => {
      text += `${idx + 1}. ${escapeHTML(opt)}\n`;
    });
    text += '\n💡 שלח מספר (1-4)';
  } else if (question.type === 'truefalse') {
    text += '✅ נכון\n❌ לא נכון\n\n';
    text += '💡 שלח "נכון" או "לא נכון"';
  }

  return text;
}

// ============================================================
// Helper: question inline keyboard (with explain button)
// ============================================================
function questionKeyboard(session) {
  if (!isGeminiConfigured()) return undefined;
  const repoKey = session.repo || 'shipment';
  const repoData = repos[repoKey];
  const qIndex = repoData.questions.indexOf(session.currentQuestion);
  return Markup.inlineKeyboard([
    [Markup.button.callback('💡 הסבר לי', `exp:${repoKey}:${qIndex}`)]
  ]);
}

// ============================================================
// Helper: show repo selection keyboard
// ============================================================
function repoSelectionKeyboard() {
  const buttons = Object.keys(repos).map(key => (
    [Markup.button.callback(repos[key].name, `repo_${key}`)]
  ));
  return Markup.inlineKeyboard(buttons);
}

// ============================================================
// Helper: show category keyboard for current repo
// ============================================================
function categoryKeyboard(session) {
  const repoData = getRepoData(session);
  const keyboard = Object.keys(repoData.categories).map(key => {
    const cat = repoData.categories[key];
    return [Markup.button.callback(cat.name, `cat_${key}`)];
  });
  keyboard.push([Markup.button.callback('🎲 שאלה רנדומלית', 'random')]);
  keyboard.push([Markup.button.callback('🔀 החלף ריפו', 'select_repo')]);
  return Markup.inlineKeyboard(keyboard);
}

// ============================================================
// Commands
// ============================================================
bot.command('start', (ctx) => {
  resetSession(ctx.from.id);

  if (Object.keys(repos).length === 1) {
    // Only one repo available - go straight to quiz
    const session = getSession(ctx.from.id);
    session.repo = Object.keys(repos)[0];
    const repoData = getRepoData(session);

    const welcomeText = `
🎓 <b>ברוכים הבאים לבוט החידון של ${escapeHTML(repoData.name)}!</b>

בוט זה עוזר לך ללמוד את המבנה והארכיטקטורה של הפרויקט.

🎯 <b>פקודות זמינות:</b>
/category - בחר קטגוריה
/random - שאלה רנדומלית
/stats - סטטיסטיקות (סשן נוכחי)
/reset - אפס סטטיסטיקות

📚 <b>קטגוריות:</b>
${Object.values(repoData.categories).map(c => c.name).join('\n')}

בהצלחה! 🚀
    `;
    ctx.replyWithHTML(welcomeText);
  } else {
    // Multiple repos - let user choose
    const welcomeText = `
🎓 <b>ברוכים הבאים לבוט החידון!</b>

בוט זה עוזר לך ללמוד את המבנה והארכיטקטורה של פרויקטים שונים.

🎯 <b>פקודות זמינות:</b>
/repo - בחר פרויקט
/category - בחר קטגוריה
/random - שאלה רנדומלית
/stats - סטטיסטיקות (סשן נוכחי)
/reset - אפס סטטיסטיקות

📂 בחר פרויקט כדי להתחיל:
    `;
    ctx.replyWithHTML(welcomeText, repoSelectionKeyboard());
  }
});

bot.command('repo', (ctx) => {
  if (Object.keys(repos).length <= 1) {
    ctx.reply('📦 יש רק פרויקט אחד זמין כרגע.');
    return;
  }
  ctx.reply('📂 בחר פרויקט:', repoSelectionKeyboard());
});

bot.command('category', (ctx) => {
  const session = getSession(ctx.from.id);

  if (!session.repo) {
    if (Object.keys(repos).length === 1) {
      session.repo = Object.keys(repos)[0];
    } else {
      ctx.reply('📂 בחר פרויקט קודם:', repoSelectionKeyboard());
      return;
    }
  }

  ctx.reply('📚 בחר קטגוריה:', categoryKeyboard(session));
});

bot.command('random', (ctx) => {
  const session = getSession(ctx.from.id);

  if (!session.repo) {
    if (Object.keys(repos).length === 1) {
      session.repo = Object.keys(repos)[0];
    } else {
      ctx.reply('📂 בחר פרויקט קודם:', repoSelectionKeyboard());
      return;
    }
  }

  if (session.category !== null) {
    session.questionIndex = -1;
    session.category = null;
  }

  const repoData = getRepoData(session);
  const result = getNextQuestion(repoData, null, session.questionIndex);
  if (!result) {
    ctx.reply('⚠️ אין שאלות זמינות.');
    return;
  }
  session.currentQuestion = result.question;
  session.questionIndex = result.nextIndex;

  ctx.replyWithHTML(formatQuestion(result.question), questionKeyboard(session));
});

bot.command('stats', (ctx) => {
  const session = getSession(ctx.from.id);
  const repoData = getRepoData(session);

  const percentage = session.answered > 0
    ? Math.round((session.score / session.answered) * 100)
    : 0;

  const repoLabel = session.repo ? `\n📂 פרויקט: ${escapeHTML(repoData.name)}` : '';

  const statsText = `
📊 <b>הסטטיסטיקות שלך:</b>${repoLabel}

✅ נכונות: ${session.score}
📝 סה"כ שאלות: ${session.answered}
📈 אחוז הצלחה: ${percentage}%

💡 הסטטיסטיקות נשמרות רק לסשן הנוכחי
  `;

  ctx.replyWithHTML(statsText);
});

bot.command('reset', (ctx) => {
  resetSession(ctx.from.id);
  ctx.reply('🔄 הסטטיסטיקות אופסו בהצלחה!');
});

// ============================================================
// Repo selection action
// ============================================================
bot.action(/^repo_(.+)$/, (ctx) => {
  const repoKey = ctx.match[1];
  if (!repos[repoKey]) {
    ctx.answerCbQuery('פרויקט לא נמצא');
    return;
  }

  const session = getSession(ctx.from.id);
  const previousRepo = session.repo;

  // Reset quiz progress when switching repos
  if (previousRepo !== repoKey) {
    session.category = null;
    session.questionIndex = -1;
    session.currentQuestion = null;
  }
  session.repo = repoKey;

  const repoData = repos[repoKey];

  ctx.answerCbQuery();
  ctx.replyWithHTML(
    `📂 <b>פרויקט: ${escapeHTML(repoData.name)}</b>\n\n📚 בחר קטגוריה:`,
    categoryKeyboard(session)
  );
});

bot.action('select_repo', (ctx) => {
  ctx.answerCbQuery();
  ctx.reply('📂 בחר פרויקט:', repoSelectionKeyboard());
});

// ============================================================
// Category selection handlers
// ============================================================
bot.action(/^cat_(.+)$/, (ctx) => {
  const category = ctx.match[1];
  const session = getSession(ctx.from.id);

  if (!session.repo) {
    if (Object.keys(repos).length === 1) {
      session.repo = Object.keys(repos)[0];
    } else {
      ctx.answerCbQuery();
      ctx.reply('📂 בחר פרויקט קודם:', repoSelectionKeyboard());
      return;
    }
  }

  if (session.category !== category) {
    session.questionIndex = -1;
  }

  session.category = category;

  const repoData = getRepoData(session);
  const result = getNextQuestion(repoData, category, session.questionIndex);
  if (!result) {
    ctx.answerCbQuery();
    ctx.reply('⚠️ אין שאלות בקטגוריה זו.');
    return;
  }
  session.currentQuestion = result.question;
  session.questionIndex = result.nextIndex;

  ctx.answerCbQuery();
  ctx.replyWithHTML(formatQuestion(result.question), questionKeyboard(session));
});

bot.action('random', (ctx) => {
  const session = getSession(ctx.from.id);

  if (!session.repo) {
    if (Object.keys(repos).length === 1) {
      session.repo = Object.keys(repos)[0];
    } else {
      ctx.answerCbQuery();
      ctx.reply('📂 בחר פרויקט קודם:', repoSelectionKeyboard());
      return;
    }
  }

  if (session.category !== null) {
    session.questionIndex = -1;
    session.category = null;
  }

  const repoData = getRepoData(session);
  const result = getNextQuestion(repoData, null, session.questionIndex);
  if (!result) {
    ctx.answerCbQuery();
    ctx.reply('⚠️ אין שאלות זמינות.');
    return;
  }
  session.currentQuestion = result.question;
  session.questionIndex = result.nextIndex;

  ctx.answerCbQuery();
  ctx.replyWithHTML(formatQuestion(result.question), questionKeyboard(session));
});

// ============================================================
// Explain with Gemini handler (compact callback: exp:repoKey:qIndex)
// ============================================================
bot.action(/^exp:(.+):(\d+)$/, async (ctx) => {
  const repoKey = ctx.match[1];
  const qIndex = parseInt(ctx.match[2]);

  const repoData = repos[repoKey];
  if (!repoData || !repoData.questions[qIndex]) {
    ctx.answerCbQuery('שאלה לא נמצאה');
    return;
  }

  ctx.answerCbQuery('⏳ מייצר הסבר...');

  const question = repoData.questions[qIndex];
  const explanation = await explainQuestion(question);
  if (!explanation) {
    ctx.reply('⚠️ לא הצלחתי לייצר הסבר. ודא שמפתח GEMINI_API_KEY מוגדר.');
    return;
  }

  ctx.replyWithHTML(`🤖 <b>הסבר מ-Gemini:</b>\n\n${escapeHTML(explanation)}`);
});

// ============================================================
// Answer handling
// ============================================================
bot.on('text', (ctx) => {
  const session = getSession(ctx.from.id);

  if (!session.currentQuestion) {
    ctx.reply('❓ אין שאלה פעילה. השתמש ב-/random או /category כדי להתחיל');
    return;
  }

  const question = session.currentQuestion;
  const answer = ctx.message.text.trim();
  let isCorrect = false;

  if (question.type === 'multiple') {
    const answerNum = parseInt(answer);
    if (answerNum >= 1 && answerNum <= question.options.length) {
      isCorrect = (answerNum - 1) === question.correct;
    } else {
      ctx.reply('⚠️ אנא שלח מספר תקין (1-4)');
      return;
    }
  } else if (question.type === 'truefalse') {
    const normalized = answer.toLowerCase();
    if (normalized === 'נכון' || normalized === 'true') {
      isCorrect = question.correct === true;
    } else if (normalized === 'לא נכון' || normalized === 'false') {
      isCorrect = question.correct === false;
    } else {
      ctx.reply('⚠️ אנא שלח "נכון" או "לא נכון"');
      return;
    }
  }

  // Update stats
  session.answered++;
  if (isCorrect) {
    session.score++;
  }

  // Build response (escape dynamic content that may contain HTML chars)
  let response = isCorrect
    ? '✅ <b>תשובה נכונה!</b>\n\n'
    : '❌ <b>תשובה שגויה</b>\n\n';

  if (question.type === 'multiple' && !isCorrect) {
    response += `התשובה הנכונה: ${escapeHTML(question.options[question.correct])}\n\n`;
  } else if (question.type === 'truefalse' && !isCorrect) {
    response += `התשובה הנכונה: ${question.correct ? 'נכון' : 'לא נכון'}\n\n`;
  }

  response += `💡 <b>הסבר:</b>\n${escapeHTML(question.explanation)}\n\n`;
  response += `📊 ציון נוכחי: ${session.score}/${session.answered}`;

  // Send response with next question button
  const nextAction = session.category ? `cat_${session.category}` : 'random';
  const keyboard = Markup.inlineKeyboard([
    [Markup.button.callback('➡️ שאלה הבאה', nextAction)],
    [Markup.button.callback('📚 שנה קטגוריה', 'change_category')],
    ...(Object.keys(repos).length > 1 ? [[Markup.button.callback('🔀 החלף ריפו', 'select_repo')]] : [])
  ]);

  ctx.replyWithHTML(response, keyboard);

  // Clear current question
  session.currentQuestion = null;
});

bot.action('change_category', (ctx) => {
  const session = getSession(ctx.from.id);
  ctx.answerCbQuery();
  ctx.reply('📚 בחר קטגוריה:', categoryKeyboard(session));
});

// ============================================================
// Error handling
// ============================================================
bot.catch((err, ctx) => {
  console.error('Bot error:', err);
  ctx.reply('⚠️ אירעה שגיאה. נסה שוב מאוחר יותר.');
});

// ============================================================
// Launch
// ============================================================
const PORT = process.env.PORT || 3000;

async function start() {
  // Load gist-based repos before starting the bot
  await loadGistRepos();

  if (process.env.WEBHOOK_DOMAIN) {
    bot.launch({
      webhook: {
        domain: process.env.WEBHOOK_DOMAIN,
        port: PORT
      }
    });
    console.log(`🤖 Bot started in webhook mode on port ${PORT}`);
  } else {
    bot.launch();
    console.log('🤖 Bot started in polling mode');
  }

  console.log(`📚 Available repos: ${Object.keys(repos).join(', ')}`);
}

start().catch(err => {
  console.error('Failed to start bot:', err);
  process.exit(1);
});

// Graceful shutdown
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
