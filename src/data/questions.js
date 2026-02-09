export const categories = {
  deployment: {
    name: '📦 Deployment & Files',
    emoji: '📦'
  },
  architecture: {
    name: '🏗️ Architecture',
    emoji: '🏗️'
  },
  database: {
    name: '💾 Database',
    emoji: '💾'
  },
  statemachine: {
    name: '🔄 State Machine',
    emoji: '🔄'
  },
  api: {
    name: '🌐 API & Webhooks',
    emoji: '🌐'
  },
  testing: {
    name: '🧪 Testing & Workers',
    emoji: '🧪'
  }
};

export const questions = [
  // Deployment & Files - Multiple Choice
  {
    id: 'deploy_1',
    category: 'deployment',
    type: 'multiple',
    question: 'מהי המטרה של הקובץ `requirements.txt`?',
    options: [
      'להגדיר את סכמת בסיס הנתונים',
      'להריץ את הבדיקות האוטומטיות',
      'להכיל רשימה של כל ספריות ה-Python החיצוניות',
      'להגדיר את התלויות של Node.js'
    ],
    correct: 2,
    explanation: 'הוא מכיל רשימה של כל ספריות ה-Python החיצוניות שהפרויקט תלוי בהן (כמו FastAPI, Pydantic וכו\')'
  },
  {
    id: 'deploy_2',
    category: 'deployment',
    type: 'multiple',
    question: 'איזה קובץ משמש כתבנית למשתני סביבה?',
    options: [
      'render.yaml',
      'requirements.txt',
      '.env.example',
      'mypy.ini'
    ],
    correct: 2,
    explanation: 'מפתחים חדשים צריכים להעתיק ולקנפג את `.env.example`'
  },
  {
    id: 'deploy_3',
    category: 'deployment',
    type: 'multiple',
    question: 'מה מגדיר הקובץ `render.yaml`?',
    options: [
      'הגדרת בסיס הנתונים',
      'תצורת Deploy עבור Render (web services, workers, DB)',
      'הגדרת תלויות Python',
      'תצורת בדיקות אוטומטיות'
    ],
    correct: 1,
    explanation: 'הוא מגדיר את תצורת ה-Deploy עבור שירות הענן Render, כולל הגדרת שירותי הווב, ה-workers, ובסיס הנתונים'
  },
  {
    id: 'deploy_4',
    category: 'deployment',
    type: 'multiple',
    question: 'מה תפקידו של הקובץ `app/main.py`?',
    options: [
      'הלוגיקה העסקית של יצירת משלוחים',
      'קובץ הכניסה הראשי - הגדרת FastAPI, middleware, CORS',
      'הגדרת Celery workers',
      'חיבור למסד הנתונים'
    ],
    correct: 1,
    explanation: 'זהו קובץ הכניסה הראשי של האפליקציה. הוא אחראי על הגדרת שרת ה-FastAPI, רישום ה-middleware, הגדרות CORS, וחיבור התיעוד האוטומטי (Swagger)'
  },
  {
    id: 'deploy_5',
    category: 'deployment',
    type: 'multiple',
    question: 'איזה קובץ מגדיר את כל השירותים להרצה מקומית (API, DB, Redis)?',
    options: [
      'schema.sql',
      'requirements.txt',
      'docker-compose.yml',
      'render.yaml'
    ],
    correct: 2,
    explanation: 'docker-compose.yml מגדיר ומריץ את כל השירותים הדרושים בסביבת פיתוח מקומית'
  },

  // Architecture - Multiple Choice
  {
    id: 'arch_1',
    category: 'architecture',
    type: 'multiple',
    question: 'איזו שכבה אחראית על לוגיקה עסקית?',
    options: [
      'app/api/routes/',
      'app/domain/services/',
      'app/core/',
      'app/db/models/'
    ],
    correct: 1,
    explanation: 'שכבת ה-Domain בתיקייה `app/domain/services/` אחראית על לוגיקה עסקית כמו יצירת משלוח או חיוב ארנק'
  },
  {
    id: 'arch_2',
    category: 'architecture',
    type: 'multiple',
    question: 'מה תפקידה של תיקיית `app/core/`?',
    options: [
      'מכילה את המודלים של בסיס הנתונים',
      'מכילה תשתיות וכלים רוחביים (config, logging, exceptions)',
      'מכילה את ה-API endpoints',
      'מכילה את Celery workers'
    ],
    correct: 1,
    explanation: 'היא מכילה תשתיות וכלים רוחביים שכל המערכת משתמשת בהם, כמו קונפיגורציה, לוגים, וטיפול בשגיאות'
  },
  {
    id: 'arch_3',
    category: 'architecture',
    type: 'multiple',
    question: 'איזה דפוס תכנון מיושם ב-`outbox_message.py`?',
    options: [
      'Singleton Pattern',
      'Factory Pattern',
      'Transactional Outbox Pattern',
      'Observer Pattern'
    ],
    correct: 2,
    explanation: 'דפוס Transactional Outbox מבטיח שהודעות יישלחו באופן אמין ואסינכרוני לאחר שהטרנזקציה בבסיס הנתונים הצליחה'
  },
  {
    id: 'arch_4',
    category: 'architecture',
    type: 'multiple',
    question: 'מה תפקידו של `circuit_breaker.py`?',
    options: [
      'הגנה על בסיס הנתונים מעומס',
      'הגנה מפני כשלים בקריאות לשירותים חיצוניים',
      'ניהול מצבי השיחה',
      'ולידציה של קלט משתמש'
    ],
    correct: 1,
    explanation: 'הוא מגן על המערכת מפני כשלים בקריאות לשירותים חיצוניים על ידי עצירת קריאות נוספות כשיש תקלות חוזרות'
  },
  {
    id: 'arch_5',
    category: 'architecture',
    type: 'multiple',
    question: 'מהי מטרת ה-middleware ב-`app/core/middleware.py`?',
    options: [
      'שליחת הודעות למשתמשים',
      'הוספת correlation ID לבקשות וטיפול גלובלי בשגיאות',
      'ניהול זיכרון cache',
      'ולידציה של נתונים'
    ],
    correct: 1,
    explanation: 'הוא מטפל בבקשות HTTP נכנסות, מוסיף להן מזהה ייחודי (correlation ID) לצורכי לוגים, ומטפל בשגיאות באופן גלובלי'
  },

  // Database - Multiple Choice
  {
    id: 'db_1',
    category: 'database',
    type: 'multiple',
    question: 'איזה מודל אחראי על היסטוריית תנועות כספיות בצורה immutable?',
    options: [
      'user.py',
      'delivery.py',
      'wallet_ledger.py',
      'outbox_message.py'
    ],
    correct: 2,
    explanation: '`wallet_ledger.py` שומר היסטוריית תנועות כספיות בצורה שלא ניתנת לשינוי'
  },
  {
    id: 'db_2',
    category: 'database',
    type: 'multiple',
    question: 'איזה קובץ מגדיר את החיבור האסינכרוני לבסיס הנתונים?',
    options: [
      'schema.sql',
      'app/core/config.py',
      'app/db/database.py',
      'app/db/migrations.py'
    ],
    correct: 2,
    explanation: '`app/db/database.py` מגדיר את החיבור האסינכרוני לבסיס הנתונים באמצעות SQLAlchemy'
  },
  {
    id: 'db_3',
    category: 'database',
    type: 'multiple',
    question: 'איזה מודל מונע עיבוד כפול של webhooks?',
    options: [
      'outbox_message.py',
      'conversation_session.py',
      'webhook_event.py',
      'delivery.py'
    ],
    correct: 2,
    explanation: 'טבלת `webhook_event` משמשת ל-Idempotency, שומרת את message_id ובודקת אם ההודעה כבר עובדה'
  },
  {
    id: 'db_4',
    category: 'database',
    type: 'multiple',
    question: 'מה תפקידו של `capture_service.py`?',
    options: [
      'שמירת הודעות ל-outbox',
      'תפיסת משלוח בצורה אטומית עם row-level locks',
      'ניהול ארנק השליח',
      'שליחת התראות למנהלים'
    ],
    correct: 1,
    explanation: 'הוא אחראי על תפיסת משלוח בצורה אטומית ומשתמש בנעילת שורות למניעת תפיסה כפולה'
  },
  {
    id: 'db_5',
    category: 'database',
    type: 'multiple',
    question: 'איזה מודל שומר את פרטי המשתמש ותפקידו?',
    options: [
      'user.py',
      'courier_wallet.py',
      'delivery.py',
      'conversation_session.py'
    ],
    correct: 0,
    explanation: '`user.py` שומר את פרטי המשתמש, כולל תפקידו (שולח/שליח) וסטטוס האישור'
  },

  // State Machine - Multiple Choice
  {
    id: 'sm_1',
    category: 'statemachine',
    type: 'multiple',
    question: 'היכן מוגדרים כל המצבים האפשריים בשיחה?',
    options: [
      'app/state_machine/manager.py',
      'app/state_machine/states.py',
      'app/state_machine/handlers.py',
      'app/api/webhooks/'
    ],
    correct: 1,
    explanation: 'בקובץ `app/state_machine/states.py` מוגדרים כל המצבים האפשריים באמצעות Enums'
  },
  {
    id: 'sm_2',
    category: 'statemachine',
    type: 'multiple',
    question: 'איזה קובץ מנהל מעברים בין מצבים ושומר הקשר?',
    options: [
      'app/state_machine/states.py',
      'app/state_machine/manager.py',
      'app/state_machine/handlers.py',
      'app/core/middleware.py'
    ],
    correct: 1,
    explanation: '`app/state_machine/manager.py` (ה-StateManager) מנהל מעברים ושומר הקשר'
  },
  {
    id: 'sm_3',
    category: 'statemachine',
    type: 'multiple',
    question: 'מה תפקידם של handlers.py במכונת המצבים?',
    options: [
      'הגדרת המצבים האפשריים',
      'לוגיקה ספציפית לטיפול בהודעות בכל מצב',
      'שמירת הסשן במסד הנתונים',
      'שליחת הודעות לשירותים חיצוניים'
    ],
    correct: 1,
    explanation: 'הם מכילים את הלוגיקה הספציפית לטיפול בהודעות בכל אחד ממצבי השיחה'
  },
  {
    id: 'sm_4',
    category: 'statemachine',
    type: 'multiple',
    question: 'איזה מודל שומר את המצב הנוכחי של השיחה?',
    options: [
      'user.py',
      'delivery.py',
      'conversation_session.py',
      'webhook_event.py'
    ],
    correct: 2,
    explanation: '`conversation_session.py` שומר את המצב הנוכחי של השיחה כולל נתוני ההקשר'
  },

  // API & Webhooks - Multiple Choice
  {
    id: 'api_1',
    category: 'api',
    type: 'multiple',
    question: 'תחת איזו תיקייה נמצאים ה-REST API endpoints?',
    options: [
      'app/api/routes/',
      'app/domain/services/',
      'app/api/webhooks/',
      'app/core/'
    ],
    correct: 0,
    explanation: '`app/api/routes/` מכיל את ה-endpoints של ה-REST API'
  },
  {
    id: 'api_2',
    category: 'api',
    type: 'multiple',
    question: 'מה תפקידו של webhook ב-`app/api/webhooks/whatsapp.py`?',
    options: [
      'שליחת הודעות לווטסאפ',
      'מקבל הודעות מ-WhatsApp ומפעיל את מכונת המצבים',
      'ניהול ארנקים',
      'יצירת משלוחים חדשים'
    ],
    correct: 1,
    explanation: 'הוא מקבל הודעות נכנסות מה-WhatsApp Gateway ומפעיל את מכונת המצבים לניהול השיחה'
  },
  {
    id: 'api_3',
    category: 'api',
    type: 'multiple',
    question: 'באיזה שירות חיצוני משתמשים לחיבור לווטסאפ?',
    options: [
      'Twilio',
      'WPPConnect',
      'Telegram Bot API',
      'SendGrid'
    ],
    correct: 1,
    explanation: 'WPPConnect רץ כשירות נפרד ב-Node.js בתיקיית `whatsapp_gateway/`'
  },
  {
    id: 'api_4',
    category: 'api',
    type: 'multiple',
    question: 'מהי מטרת דפוס ה-Transactional Outbox?',
    options: [
      'שמירת לוגים של בקשות API',
      'הבטחת שליחת הודעות רק אחרי הצלחת טרנזקציה ב-DB',
      'ניהול מצב השיחה',
      'בדיקת תקינות שירותים חיצוניים'
    ],
    correct: 1,
    explanation: 'מבטיח שהודעות אסינכרוניות יישלחו רק אחרי שהפעולה בבסיס הנתונים הושלמה בהצלחה'
  },
  {
    id: 'api_5',
    category: 'api',
    type: 'multiple',
    question: 'איזה קובץ מגדיר endpoints עבור ארנקי השליחים?',
    options: [
      'app/api/routes/users.py',
      'app/api/routes/deliveries.py',
      'app/api/routes/wallets.py',
      'app/domain/services/wallet_service.py'
    ],
    correct: 2,
    explanation: '`app/api/routes/wallets.py` מגדיר את ה-endpoints עבור בדיקת יתרה והיסטוריית עסקאות'
  },

  // Testing & Workers - Multiple Choice
  {
    id: 'test_1',
    category: 'testing',
    type: 'multiple',
    question: 'מה תפקידו של `celery_app.py`?',
    options: [
      'הגדרת משימות Celery',
      'הגדרת אפליקציית Celery ו-Beat scheduler',
      'הרצת FastAPI',
      'חיבור לווטסאפ'
    ],
    correct: 1,
    explanation: 'הוא מגדיר את אפליקציית Celery ואת ה-Beat scheduler למשימות מתוזמנות'
  },
  {
    id: 'test_2',
    category: 'testing',
    type: 'multiple',
    question: 'מה ההבדל בין test_api_deliveries.py לבין test_stages_1_2.py?',
    options: [
      'אין הבדל - שניהם בודקים API',
      'הראשון בודק API בנפרד, השני הוא מבחן אינטגרציה מלא',
      'הראשון לשליחים, השני לשולחים',
      'הראשון unit tests, השני e2e tests'
    ],
    correct: 1,
    explanation: 'test_api_deliveries בודק API מבודד, test_stages_1_2 בודק זרימה שלמה על פני מספר שלבים'
  },
  {
    id: 'test_3',
    category: 'testing',
    type: 'multiple',
    question: 'איזה קובץ מכיל fixtures מרכזיות לבדיקות?',
    options: [
      'pytest.ini',
      'conftest.py',
      'test_config.py',
      'setup.py'
    ],
    correct: 1,
    explanation: '`conftest.py` מכיל הגדרות מרכזיות ו-fixtures, כמו יצירת בסיס נתונים לבדיקה'
  },
  {
    id: 'test_4',
    category: 'testing',
    type: 'multiple',
    question: 'מהי מטרת הקובץ test_validation.py?',
    options: [
      'בדיקת API endpoints',
      'בדיקות יחידה לוולידטורים (טלפון, כתובת וכו\')',
      'בדיקת מכונת המצבים',
      'בדיקת Celery workers'
    ],
    correct: 1,
    explanation: 'הוא מכיל unit tests שמוודאים שהוולידטורים עובדים כצפוי'
  },

  // True/False Questions
  {
    id: 'tf_1',
    category: 'deployment',
    type: 'truefalse',
    question: 'הקובץ `app/main.py` אחראי על הלוגיקה העסקית של יצירת משלוחים',
    correct: false,
    explanation: '`app/main.py` הוא נקודת הכניסה של האפליקציה, בעוד שהלוגיקה העסקית נמצאת ב-`app/domain/services/delivery_service.py`'
  },
  {
    id: 'tf_2',
    category: 'architecture',
    type: 'truefalse',
    question: 'התיקייה `whatsapp_gateway/` מכילה קוד Python לחיבור לווטסאפ',
    correct: false,
    explanation: 'ה-`whatsapp_gateway` הוא מיקרו-שירות נפרד הכתוב ב-Node.js ו-Express, לא ב-Python'
  },
  {
    id: 'tf_3',
    category: 'database',
    type: 'truefalse',
    question: 'הקובץ `schema.sql` משמש להרצת מיגרציות באופן שוטף בייצור',
    correct: false,
    explanation: '`schema.sql` מכיל את הסכמה הראשונית. מיגרציות מתבצעות דרך `scripts/run_migrations.py`'
  },
  {
    id: 'tf_4',
    category: 'architecture',
    type: 'truefalse',
    question: 'דפוס ה-Transactional Outbox מבטיח שהודעות יישלחו רק אם הטרנזקציה ב-DB הצליחה',
    correct: true,
    explanation: 'זו בדיוק מטרת הדפוס: להבטיח אמינות בשליחת הודעות אסינכרוניות'
  },
  {
    id: 'tf_5',
    category: 'core',
    type: 'truefalse',
    question: 'הקובץ `app/core/config.py` קורא משתני סביבה ומנגיש אותם לאפליקציה',
    correct: true,
    explanation: 'הוא משתמש ב-Pydantic Settings לטעינה, אימות ושימוש בקונפיגורציה'
  },
  {
    id: 'tf_6',
    category: 'testing',
    type: 'truefalse',
    question: 'הקובץ `test_stages_1_2.py` הוא unit test שבודק פונקציה בודדת',
    correct: false,
    explanation: 'זהו מבחן אינטגרציה שבודק זרימה שלמה המערבת מספר רכיבים'
  },
  {
    id: 'tf_7',
    category: 'database',
    type: 'truefalse',
    question: 'כדי למנוע תפיסה כפולה של משלוח, המערכת משתמשת ב-Circuit Breaker',
    correct: false,
    explanation: 'המערכת משתמשת בנעילת שורות (row-level locks) ב-`capture_service.py`. Circuit Breaker נועד לשירותים חיצוניים'
  },
  {
    id: 'tf_8',
    category: 'statemachine',
    type: 'truefalse',
    question: 'הקובץ `app/state_machine/manager.py` אחראי על הלוגיקה הספציפית של כל מצב',
    correct: false,
    explanation: 'ה-manager מנהל מעברים ושומר סשן. הלוגיקה הספציפית נמצאת ב-`handlers.py`'
  },
  {
    id: 'tf_9',
    category: 'deployment',
    type: 'truefalse',
    question: 'ניתן להריץ את כל הפרויקט באמצעות פקודה אחת דרך `docker-compose.yml`',
    correct: true,
    explanation: 'זו אחת המטרות המרכזיות של Docker Compose - לתאם בין כל השירותים'
  },
  {
    id: 'tf_10',
    category: 'architecture',
    type: 'truefalse',
    question: 'הקובץ `CLAUDE.md` מכיל תיעוד טכני מפורט על סכמת בסיס הנתונים',
    correct: false,
    explanation: '`CLAUDE.md` מכיל הנחיות פיתוח וסטנדרטים. התיעוד על DB נמצא ב-`DATABASE.md`'
  },
  {
    id: 'tf_11',
    category: 'database',
    type: 'truefalse',
    question: 'המודל `wallet_ledger.py` מאפשר לעדכן ולמחוק רשומות כדי לתקן טעויות',
    correct: false,
    explanation: 'המודל immutable - תיקון טעות נעשה על ידי הוספת רשומה חדשה שמתקנת את הקודמת'
  },
  {
    id: 'tf_12',
    category: 'api',
    type: 'truefalse',
    question: 'הקובץ `app/api/webhooks/telegram.py` מקבל הודעות מטלגרם ומפעיל את מכונת המצבים',
    correct: true,
    explanation: 'זהו בדיוק תפקידו: לשמש כנקודת כניסה להודעות מטלגרם ולהתחיל עיבוד'
  },
  {
    id: 'tf_13',
    category: 'testing',
    type: 'truefalse',
    question: 'הקובץ `app/workers/tasks.py` מכיל משימות אסינכרוניות הרצות בנפרד מ-API',
    correct: true,
    explanation: 'קבצי tasks.py ב-Celery מכילים לוגיקה של משימות רקע'
  },
  {
    id: 'tf_14',
    category: 'architecture',
    type: 'truefalse',
    question: 'ה-Circuit Breaker נועד למנוע עומס יתר על בסיס הנתונים',
    correct: false,
    explanation: 'ה-Circuit Breaker נועד להגן מפני כשלים בשירותים חיצוניים, לא על DB פנימי'
  },
  {
    id: 'tf_15',
    category: 'database',
    type: 'truefalse',
    question: 'כדי להוסיף שדה חדש למודל `user`, מספיק לעדכן רק את `app/db/models/user.py`',
    correct: false,
    explanation: 'בנוסף לעדכון המודל, צריך ליצור/לעדכן קובץ מיגרציה להחלת השינוי על הסכמה'
  }
];
