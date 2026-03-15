```yaml
name: "Shipment Quiz Bot - בוט חידון לטלגרם"
repo: "https://github.com/amirbiron/shipment-quiz-bot"
status: "פעיל"

one_liner: "בוט טלגרם לתרגול ולמידה של פרויקט Shipment-bot באמצעות שאלות רב-ברירה ונכון/לא נכון, עם תמיכה בטעינת שאלות דינמית מ-GitHub Gist."

stack:
  - Node.js 18+
  - Telegraf 4.x
  - Google Generative AI (Gemini)
  - dotenv
  - ES Modules

key_features:
  - "6 קטגוריות שאלות: Deployment, Architecture, Database, State Machine, API, Testing"
  - "מצבי משחק: בחירת קטגוריה או שאלה רנדומלית"
  - "סטטיסטיקות ציונים בזמן אמת (בזיכרון)"
  - "הסברים מפורטים לכל תשובה"
  - "טעינת שאלות דינמית מ-GitHub Gist"
  - "תמיכה ב-Gemini AI להעשרת תוכן"
  - "ממשק מלא בעברית"
  - "תמיכה ב-webhook (ייצור) ו-polling (פיתוח)"

architecture:
  summary: |
    אפליקציית Node.js מבוססת Telegraf. נקודת כניסה אחת (index.js) שמנהלת
    את כל הלוגיקה של הבוט. השאלות נטענות מקובץ מקומי או מ-GitHub Gist.
    תמיכה ב-Gemini AI לעיבוד תוכן נוסף.
  entry_points:
    - "src/index.js - לוגיקת הבוט הראשית, handlers, webhook/polling"
    - "src/data/questions.js - מאגר השאלות והקטגוריות"
    - "src/data/gistLoader.js - טעינת שאלות דינמית מ-GitHub Gist"
    - "src/data/geminiHelper.js - אינטגרציה עם Google Gemini AI"

demo:
  live_url: "" # TODO: בדוק ידנית
  video_url: "" # TODO: בדוק ידנית

setup:
  quickstart: |
    1. git clone <repository-url> && cd shipment-quiz-bot
    2. npm install
    3. cp .env.example .env  # מלא BOT_TOKEN
    4. npm start  (או npm run dev למצב פיתוח)

your_role: "פיתוח מלא - ארכיטקטורה, לוגיקת חידון, אינטגרציה עם Telegram ו-Gemini AI"

tradeoffs:
  - "שמירת סטטיסטיקות בזיכרון - פשטות על חשבון פרסיסטנטיות"
  - "טעינת שאלות מ-Gist - גמישות עדכון בלי deploy חדש"
  - "ES Modules - תחביר מודרני אך דורש Node 18+"

metrics: {} # TODO: בדוק ידנית

faq:
  - q: "איך מוסיפים שאלות חדשות?"
    a: "עורכים את src/data/questions.js או מעדכנים את ה-GitHub Gist"
  - q: "מה ההבדל בין polling ל-webhook?"
    a: "polling לפיתוח מקומי, webhook לייצור (מזוהה אוטומטית לפי WEBHOOK_DOMAIN)"
```
