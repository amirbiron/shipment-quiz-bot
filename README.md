# 🎓 Shipment Bot Quiz

בוט טלגרם לתרגול ולמידה של הפרויקט [Shipment-bot](https://github.com/amirbiron/Shipment-bot).

הבוט מכיל שאלות רב-ברירה ונכון/לא נכון המבוססות על ארכיטקטורה, קבצים ומבנה הפרויקט.

## ✨ תכונות

- 📚 **6 קטגוריות**: Deployment, Architecture, Database, State Machine, API, Testing
- 🎲 **מצבי משחק**: בחירת קטגוריה או שאלה רנדומלית
- 📊 **סטטיסטיקות**: מעקב אחרי ציונים בזמן אמת (בזיכרון)
- 💡 **הסברים**: הסבר מפורט לכל תשובה
- 🇮🇱 **עברית**: ממשק מלא בעברית

## 🚀 התקנה מקומית

### דרישות מקדימות
- Node.js 18+
- חשבון טלגרם
- Bot Token מ-[@BotFather](https://t.me/BotFather)

### צעדים

1. **Clone הפרויקט**
```bash
git clone <repository-url>
cd shipment-quiz-bot
```

2. **התקנת תלויות**
```bash
npm install
```

3. **הגדרת משתני סביבה**
```bash
cp .env.example .env
```

ערוך את `.env` והוסף את ה-Bot Token:
```env
BOT_TOKEN=your_bot_token_here
```

4. **הרצת הבוט**
```bash
npm start
```

או במצב פיתוח (עם hot reload):
```bash
npm run dev
```

## 🌐 Deploy ל-Render

### צעדים

1. **צור Web Service חדש ב-Render**
   - Repository: החבר את הריפו שלך
   - Environment: Node
   - Build Command: `npm install`
   - Start Command: `npm start`

2. **הגדר משתני סביבה**
   - `BOT_TOKEN` - ה-token מ-BotFather
   - `WEBHOOK_DOMAIN` - ה-URL של השירות ב-Render (למשל: `https://your-app.onrender.com`)
   - `PORT` - 3000 (אוטומטי ב-Render)

3. **Deploy**
   - Render יעשה deploy אוטומטי
   - הבוט יעבור למצב webhook (יותר יציב לייצור)

### Webhook vs Polling

- **Polling** (פיתוח מקומי): הבוט שואל את טלגרם כל כמה שניות
- **Webhook** (ייצור): טלגרם שולח הודעות ישירות לשרת שלך

הבוט מזהה אוטומטית את המצב לפי משתנה הסביבה `WEBHOOK_DOMAIN`.

## 🎮 שימוש

### פקודות

- `/start` - התחלת הבוט והצגת תפריט ראשי
- `/category` - בחירת קטגוריה ספציפית
- `/random` - שאלה רנדומלית מכל הקטגוריות
- `/stats` - הצגת סטטיסטיקות (ציון נוכחי)
- `/reset` - איפוס הסטטיסטיקות

### מהלך משחק

1. התחל עם `/start` או `/category`
2. בחר קטגוריה או לחץ על "שאלה רנדומלית"
3. ענה על השאלה:
   - שאלות רב-ברירה: שלח מספר (1-4)
   - נכון/לא נכון: שלח "נכון" או "לא נכון"
4. קבל הסבר והמשך לשאלה הבאה

## 📚 קטגוריות

- 📦 **Deployment & Files** - קבצי קונפיגורציה, docker, render
- 🏗️ **Architecture** - שכבות, דפוסי תכנון, middleware
- 💾 **Database** - מודלים, migrations, SQLAlchemy
- 🔄 **State Machine** - ניהול שיחות, handlers
- 🌐 **API & Webhooks** - REST endpoints, WhatsApp, Telegram
- 🧪 **Testing & Workers** - pytest, Celery, fixtures

## 🛠️ מבנה הפרויקט

```
shipment-quiz-bot/
├── src/
│   ├── data/
│   │   └── questions.js      # כל השאלות והקטגוריות
│   └── index.js              # לוגיקת הבוט הראשית
├── .env.example              # תבנית למשתני סביבה
├── package.json
└── README.md
```

## 🔧 טכנולוגיות

- **Telegraf** - ספריית בוטים לטלגרם
- **Node.js** - runtime
- **dotenv** - ניהול משתני סביבה

## 📝 הוספת שאלות חדשות

ערוך את `src/data/questions.js`:

```javascript
{
  id: 'unique_id',
  category: 'deployment', // או קטגוריה אחרת
  type: 'multiple', // או 'truefalse'
  question: 'השאלה שלך?',
  options: ['תשובה 1', 'תשובה 2', 'תשובה 3', 'תשובה 4'], // רק ל-multiple
  correct: 2, // אינדקס התשובה הנכונה (0-3) או true/false
  explanation: 'הסבר מפורט'
}
```

## 🤝 תרומה

רוצה להוסיף שאלות או לשפר את הבוט? פתח PR!

## 📄 רישיון

MIT

---

**נוצר עבור לומדי Shipment-bot** 🚀
