import { Telegraf, Markup } from 'telegraf';
import dotenv from 'dotenv';
import { categories, questions } from './data/questions.js';

dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN);

// In-memory session storage (לא צריך DB)
const sessions = new Map();

// Helper functions
function getSession(userId) {
  if (!sessions.has(userId)) {
    sessions.set(userId, {
      currentQuestion: null,
      score: 0,
      answered: 0,
      category: null,
      questionIndex: -1
    });
  }
  return sessions.get(userId);
}

function resetSession(userId) {
  sessions.delete(userId);
}

function getNextQuestion(category = null, currentIndex = -1) {
  const filtered = category
    ? questions.filter(q => q.category === category)
    : questions;

  // Get next index in sequence
  const nextIndex = (currentIndex + 1) % filtered.length;

  return {
    question: filtered[nextIndex],
    nextIndex: nextIndex
  };
}

function formatQuestion(question) {
  let text = `📝 *שאלה:*\n${question.question}\n\n`;
  
  if (question.type === 'multiple') {
    question.options.forEach((opt, idx) => {
      text += `${idx + 1}. ${opt}\n`;
    });
    text += '\n💡 שלח מספר (1-4)';
  } else if (question.type === 'truefalse') {
    text += '✅ נכון\n❌ לא נכון\n\n';
    text += '💡 שלח "נכון" או "לא נכון"';
  }
  
  return text;
}

// Commands
bot.command('start', (ctx) => {
  resetSession(ctx.from.id);
  
  const welcomeText = `
🎓 *ברוכים הבאים לבוט החידון של Shipment Bot!*

בוט זה עוזר לך ללמוד את המבנה והארכיטקטורה של הפרויקט.

🎯 *פקודות זמינות:*
/category - בחר קטגוריה
/random - שאלה רנדומלית
/stats - סטטיסטיקות (סשן נוכחי)
/reset - אפס סטטיסטיקות

📚 *קטגוריות:*
${Object.values(categories).map(c => `${c.emoji} ${c.name}`).join('\n')}

בהצלחה! 🚀
  `;
  
  ctx.replyWithMarkdown(welcomeText);
});

bot.command('category', (ctx) => {
  const keyboard = Object.keys(categories).map(key => {
    const cat = categories[key];
    return [Markup.button.callback(cat.name, `cat_${key}`)];
  });
  
  keyboard.push([Markup.button.callback('🎲 שאלה רנדומלית', 'random')]);
  
  ctx.reply(
    '📚 בחר קטגוריה:',
    Markup.inlineKeyboard(keyboard)
  );
});

bot.command('random', (ctx) => {
  const session = getSession(ctx.from.id);

  // Reset index when switching to random mode
  if (session.category !== null) {
    session.questionIndex = -1;
    session.category = null;
  }

  const result = getNextQuestion(null, session.questionIndex);
  session.currentQuestion = result.question;
  session.questionIndex = result.nextIndex;

  ctx.replyWithMarkdown(formatQuestion(result.question));
});

bot.command('stats', (ctx) => {
  const session = getSession(ctx.from.id);
  
  const percentage = session.answered > 0 
    ? Math.round((session.score / session.answered) * 100)
    : 0;
  
  const statsText = `
📊 *הסטטיסטיקות שלך:*

✅ נכונות: ${session.score}
📝 סה"כ שאלות: ${session.answered}
📈 אחוז הצלחה: ${percentage}%

💡 הסטטיסטיקות נשמרות רק לסשן הנוכחי
  `;
  
  ctx.replyWithMarkdown(statsText);
});

bot.command('reset', (ctx) => {
  resetSession(ctx.from.id);
  ctx.reply('🔄 הסטטיסטיקות אופסו בהצלחה!');
});

// Category selection handlers
bot.action(/^cat_(.+)$/, (ctx) => {
  const category = ctx.match[1];
  const session = getSession(ctx.from.id);

  // Reset index when switching category
  if (session.category !== category) {
    session.questionIndex = -1;
  }

  session.category = category;

  const result = getNextQuestion(category, session.questionIndex);
  session.currentQuestion = result.question;
  session.questionIndex = result.nextIndex;

  ctx.answerCbQuery();
  ctx.replyWithMarkdown(formatQuestion(result.question));
});

bot.action('random', (ctx) => {
  const session = getSession(ctx.from.id);

  // Reset index when switching to random mode
  if (session.category !== null) {
    session.questionIndex = -1;
    session.category = null;
  }

  const result = getNextQuestion(null, session.questionIndex);
  session.currentQuestion = result.question;
  session.questionIndex = result.nextIndex;

  ctx.answerCbQuery();
  ctx.replyWithMarkdown(formatQuestion(result.question));
});

// Answer handling
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
  
  // Build response
  let response = isCorrect 
    ? '✅ *תשובה נכונה!*\n\n'
    : '❌ *תשובה שגויה*\n\n';
  
  if (question.type === 'multiple' && !isCorrect) {
    response += `התשובה הנכונה: ${question.options[question.correct]}\n\n`;
  } else if (question.type === 'truefalse' && !isCorrect) {
    response += `התשובה הנכונה: ${question.correct ? 'נכון' : 'לא נכון'}\n\n`;
  }
  
  response += `💡 *הסבר:*\n${question.explanation}\n\n`;
  response += `📊 ציון נוכחי: ${session.score}/${session.answered}`;
  
  // Send response with next question button
  const keyboard = Markup.inlineKeyboard([
    [Markup.button.callback('➡️ שאלה הבאה', session.category ? `cat_${session.category}` : 'random')],
    [Markup.button.callback('📚 שנה קטגוריה', 'change_category')]
  ]);
  
  ctx.replyWithMarkdown(response, keyboard);
  
  // Clear current question
  session.currentQuestion = null;
});

bot.action('change_category', (ctx) => {
  const keyboard = Object.keys(categories).map(key => {
    const cat = categories[key];
    return [Markup.button.callback(cat.name, `cat_${key}`)];
  });
  
  keyboard.push([Markup.button.callback('🎲 שאלה רנדומלית', 'random')]);
  
  ctx.answerCbQuery();
  ctx.reply(
    '📚 בחר קטגוריה:',
    Markup.inlineKeyboard(keyboard)
  );
});

// Error handling
bot.catch((err, ctx) => {
  console.error('Bot error:', err);
  ctx.reply('⚠️ אירעה שגיאה. נסה שוב מאוחר יותר.');
});

// Launch
const PORT = process.env.PORT || 3000;

if (process.env.WEBHOOK_DOMAIN) {
  // Webhook mode for Render
  bot.launch({
    webhook: {
      domain: process.env.WEBHOOK_DOMAIN,
      port: PORT
    }
  });
  console.log(`🤖 Bot started in webhook mode on port ${PORT}`);
} else {
  // Polling mode for local development
  bot.launch();
  console.log('🤖 Bot started in polling mode');
}

// Graceful shutdown
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
