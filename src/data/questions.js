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
  },
  validation: {
    name: '🔒 Validation',
    emoji: '🔒'
  },
  models: {
    name: '📋 Models',
    emoji: '📋'
  },
  roles: {
    name: '👥 Roles',
    emoji: '👥'
  },
  webhooks: {
    name: '🔗 Webhooks',
    emoji: '🔗'
  },
  celery: {
    name: '⚙️ Celery',
    emoji: '⚙️'
  },
  platform: {
    name: '📱 Platform',
    emoji: '📱'
  },
  logging: {
    name: '📝 Logging',
    emoji: '📝'
  },
  exceptions: {
    name: '⚠️ Exceptions',
    emoji: '⚠️'
  },
  config: {
    name: '⚙️ Configuration',
    emoji: '⚙️'
  },
  db_sessions: {
    name: '🔌 DB Sessions',
    emoji: '🔌'
  },
  outbox: {
    name: '📤 Outbox Pattern',
    emoji: '📤'
  },
  debugging: {
    name: '🔧 Debugging Tools',
    emoji: '🔧'
  },
  api_docs: {
    name: '📖 API Documentation',
    emoji: '📖'
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
  },

  // ========================================
  // קטגוריה: validation - ולידציה ואבטחה
  // ========================================

  {
    id: 'val_1',
    category: 'validation',
    type: 'multiple',
    question: 'כיצד מוצג מספר טלפון בלוגים לאחר מיסוך עם `PhoneNumberValidator.mask()`?',
    options: ['+972****4567', '+97250123****', '050-***-4567', '****1234567'],
    correct: 1,
    explanation: 'הפונקציה mask() מסתירה את 4 הספרות האחרונות ומחליפה אותן בכוכביות. לדוגמה: +97250123****'
  },
  {
    id: 'val_2',
    category: 'validation',
    type: 'multiple',
    question: 'מה עושה `TextSanitizer.check_for_injection()`?',
    options: ['מנקה את הטקסט מתווים מסוכנים ומחזירה טקסט נקי', 'מחזירה tuple של (is_safe, pattern) - האם הקלט בטוח ואיזה דפוס זוהה', 'זורקת exception אם מזוהה ניסיון הזרקה', 'שולחת התרעה לאדמין על ניסיון הזרקה'],
    correct: 1,
    explanation: 'הפונקציה מחזירה tuple: (bool, Optional[str]) - האם הקלט בטוח, ואם לא - איזה דפוס מסוכן זוהה (SQL injection, XSS וכו\').'
  },
  {
    id: 'val_3',
    category: 'validation',
    type: 'multiple',
    question: 'מה האורך המקסימלי שמאפשר `AddressValidator`?',
    options: ['100 תווים', '150 תווים', '200 תווים', '500 תווים'],
    correct: 2,
    explanation: 'AddressValidator מגביל כתובות ל-200 תווים מקסימום ו-5 תווים מינימום.'
  },
  {
    id: 'val_4',
    category: 'validation',
    type: 'multiple',
    question: 'איזה מהדפוסים הבאים מזוהה כ-SQL Injection ע"י TextSanitizer?',
    options: ['SELECT name FROM users', 'OR 1=1', 'שני הנ"ל', 'אף אחד מהנ"ל'],
    correct: 2,
    explanation: 'TextSanitizer מזהה דפוסי SQL כמו OR 1=1, UNION SELECT, ;DROP, -- ועוד. גם SELECT וגם OR 1=1 הם דפוסים מסוכנים.'
  },
  {
    id: 'val_5',
    category: 'validation',
    type: 'multiple',
    question: 'מה עושה `AddressValidator.normalize()` עם הקיצור `רח\'`?',
    options: ['מוחק אותו', 'ממיר אותו ל-"רחוב"', 'משאיר אותו כמו שהוא', 'מחליף אותו ב-"כתובת"'],
    correct: 1,
    explanation: 'AddressValidator.normalize() ממיר קיצורים נפוצים למילים מלאות: רח\' → רחוב, ת.ד. → תא דואר.'
  },
  {
    id: 'val_6',
    category: 'validation',
    type: 'truefalse',
    question: 'AmountValidator מאפשר עד 3 ספרות אחרי הנקודה העשרונית.',
    correct: false,
    explanation: 'AmountValidator מאפשר מקסימום 2 ספרות אחרי הנקודה (מתאים למטבע). הטווח הוא 0.0 עד 100,000.0.'
  },
  {
    id: 'val_7',
    category: 'validation',
    type: 'truefalse',
    question: 'TextSanitizer.sanitize() מבצע גם HTML escaping לטקסט.',
    correct: false,
    explanation: 'sanitize() מבצע ניקוי בסיסי (trim, הסרת null bytes, כיווץ רווחים). ל-HTML escaping יש פונקציה נפרדת: sanitize_for_html().'
  },

  // ========================================
  // קטגוריה: models - מודלים ובסיס נתונים
  // ========================================

  {
    id: 'models_1',
    category: 'models',
    type: 'multiple',
    question: 'למה מודל User משתמש ב-BigInteger כ-Primary Key ולא ב-Integer רגיל?',
    options: ['כי זה מהיר יותר בשאילתות', 'כי מזהי משתמשים של Telegram יכולים לחרוג מטווח int32', 'כי PostgreSQL דורש BigInteger', 'כי זה מאפשר UUID'],
    correct: 1,
    explanation: 'מזהי משתמשים של Telegram (user IDs) יכולים לחרוג מטווח int32 (2^31), ולכן נדרש BigInteger כדי לתמוך בהם.'
  },
  {
    id: 'models_2',
    category: 'models',
    type: 'multiple',
    question: 'מה מונע חיוב כפול של שליח על אותה משלוח בטבלת wallet_ledger?',
    options: ['בדיקת if בקוד לפני הוספת רשומה', 'אילוץ UNIQUE על (courier_id, delivery_id, entry_type)', 'טריגר בבסיס הנתונים', 'נעילת שורה עם FOR UPDATE בלבד'],
    correct: 1,
    explanation: 'האילוץ UNIQUE על (courier_id, delivery_id, entry_type) מבטיח שלא יכול להיווצר חיוב כפול מאותו סוג על אותה משלוח.'
  },
  {
    id: 'models_3',
    category: 'models',
    type: 'multiple',
    question: 'מהם הסטטוסים האפשריים של משלוח (Delivery)?',
    options: ['NEW, ASSIGNED, DELIVERED, CLOSED', 'OPEN, CAPTURED, IN_PROGRESS, DELIVERED, CANCELLED', 'PENDING, ACTIVE, COMPLETED, FAILED', 'CREATED, ACCEPTED, PICKED_UP, DROPPED_OFF'],
    correct: 1,
    explanation: 'מחזור חיי המשלוח: OPEN (חדש) → CAPTURED (שליח תפס) → IN_PROGRESS (בדרך) → DELIVERED (הגיע) או CANCELLED (בוטל).'
  },
  {
    id: 'models_4',
    category: 'models',
    type: 'multiple',
    question: 'מה התפקיד של שדה `token` במודל Delivery?',
    options: ['אימות JWT עבור ה-API', 'טוקן בטוח לסמארט לינקים - מונע ניחוש ID סדרתי', 'מפתח הצפנה להודעות', 'מזהה סשן של המשתמש'],
    correct: 1,
    explanation: 'שדה token נוצר באמצעות secrets.token_urlsafe(16) ומאפשר לשליחים לתפוס משלוח דרך לינק בטוח, במקום לחשוף את ה-ID הסדרתי.'
  },
  {
    id: 'models_5',
    category: 'models',
    type: 'multiple',
    question: 'מהו ברירת המחדל של credit_limit בארנק שליח?',
    options: ['0 - אין אשראי', '-100 ₪', '-500 ₪', '-1000 ₪'],
    correct: 2,
    explanation: 'ברירת המחדל של credit_limit היא -500.0, כלומר השליח יכול להגיע ליתרה שלילית של עד 500₪ לפני שנחסם.'
  },
  {
    id: 'models_6',
    category: 'models',
    type: 'multiple',
    question: 'מה האילוץ על טבלת conversation_sessions שמבטיח שיחה אחת לכל משתמש בכל פלטפורמה?',
    options: ['Primary Key על user_id', 'UNIQUE על (user_id, platform)', 'Index על platform', 'Foreign Key על user_id'],
    correct: 1,
    explanation: 'האילוץ UNIQUE על (user_id, platform) מבטיח שלכל משתמש יש רשומת שיחה אחת בלבד לכל פלטפורמה (WhatsApp או Telegram).'
  },
  {
    id: 'models_7',
    category: 'models',
    type: 'truefalse',
    question: 'מודל StationBlacklist מאפשר לחסום שליח ביותר מתחנה אחת.',
    correct: true,
    explanation: 'האילוץ UNIQUE הוא על (station_id, courier_id), כלומר כל שילוב של תחנה+שליח הוא ייחודי, אבל אותו שליח יכול להיחסם בתחנות שונות.'
  },
  {
    id: 'models_8',
    category: 'models',
    type: 'truefalse',
    question: 'שדה balance_after ב-WalletLedger מחושב בזמן שליפה מבסיס הנתונים.',
    correct: false,
    explanation: 'balance_after נשמר כערך קבוע ברשומת הלדג\'ר בזמן הכתיבה. זה מאפשר מעקב היסטורי מדויק ללא צורך בחישוב מחדש.'
  },

  // ========================================
  // קטגוריה: roles - תפקידים וזרימות
  // ========================================

  {
    id: 'roles_1',
    category: 'roles',
    type: 'multiple',
    question: 'מהם ארבעת התפקידים (UserRole) במערכת?',
    options: ['USER, DRIVER, MANAGER, ADMIN', 'SENDER, COURIER, ADMIN, STATION_OWNER', 'CLIENT, COURIER, DISPATCHER, ADMIN', 'SENDER, DRIVER, STATION_OWNER, SUPER_ADMIN'],
    correct: 1,
    explanation: 'ארבעת התפקידים הם: SENDER (שולח), COURIER (שליח), ADMIN (מנהל), STATION_OWNER (בעל תחנה).'
  },
  {
    id: 'roles_2',
    category: 'roles',
    type: 'multiple',
    question: 'מהם הסטטוסים האפשריים לאישור שליח (approval_status)?',
    options: ['PENDING, APPROVED, DENIED', 'NEW, ACTIVE, INACTIVE', 'PENDING, APPROVED, REJECTED, BLOCKED', 'WAITING, CONFIRMED, CANCELLED'],
    correct: 2,
    explanation: 'שליח עובר: PENDING (ממתין לאישור) → APPROVED (מאושר) או REJECTED (נדחה). שליח מאושר יכול להיחסם (BLOCKED).'
  },
  {
    id: 'roles_3',
    category: 'roles',
    type: 'multiple',
    question: 'מה ההבדל בין Courier ל-Dispatcher?',
    options: ['Dispatcher הוא שליח עם הרשאות אדמין', 'Dispatcher הוא שליח שמשויך לתחנה ורואה תפריט משולב (שליח + תחנה)', 'Dispatcher הוא מנהל שיכול גם לשלוח משלוחים', 'אין הבדל - זה אותו תפקיד'],
    correct: 1,
    explanation: 'Dispatcher הוא שליח שקודם לתפקיד דרך רשומת StationDispatcher. הוא רואה תפריט משולב של שליח רגיל + ניהול תחנה.'
  },
  {
    id: 'roles_4',
    category: 'roles',
    type: 'truefalse',
    question: 'כשמוסיפים תפקיד חדש למערכת, חובה לעדכן את הפונקציה _route_to_role_menu().',
    correct: true,
    explanation: 'לפי הכללים בפרויקט, כל ניתוב איפוס (שורש, #, /start) עובר דרך _route_to_role_menu(), וחובה לעדכן אותה כשמוסיפים תפקיד חדש.'
  },
  {
    id: 'roles_5',
    category: 'roles',
    type: 'truefalse',
    question: 'בניתוב לפי תפקיד, מותר להשתמש ב-else גנרי במקום לטפל בכל תפקיד בנפרד.',
    correct: false,
    explanation: 'אסור! כל if role == חייב לטפל בכל UserRole במפורש. else גנרי עלול לתפוס תפקידים לא צפויים ולגרום לבאגים.'
  },

  // ========================================
  // קטגוריה: webhooks - טיפול בוובהוקים
  // ========================================

  {
    id: 'wh_1',
    category: 'webhooks',
    type: 'multiple',
    question: 'כמה זמן צריך לעבור לפני שהודעת webhook ב-processing נחשבת "stale" ומותר לעבד אותה מחדש?',
    options: ['30 שניות', '60 שניות', '120 שניות', '300 שניות'],
    correct: 2,
    explanation: 'אם הודעה נמצאת בסטטוס processing יותר מ-120 שניות (2 דקות), היא נחשבת stale ומותר לעבד אותה מחדש.'
  },
  {
    id: 'wh_2',
    category: 'webhooks',
    type: 'multiple',
    question: 'בטלגרם, כיצד מזהים את המשתמש שלחץ על כפתור בקבוצה?',
    options: ['לפי chat.id - מזהה הקבוצה', 'לפי message.id - מזהה ההודעה', 'לפי from_user.id - מי שלחץ', 'לפי callback_query.data - תוכן הכפתור'],
    correct: 2,
    explanation: 'תמיד לזהות לפי from_user.id (מי לחץ), לעולם לא לפי chat.id (איפה ההודעה). זה קריטי בקבוצות שבהן כמה משתמשים פעילים.'
  },
  {
    id: 'wh_3',
    category: 'webhooks',
    type: 'multiple',
    question: 'כיצד מתבצעת המרה מ-HTML לפורמט WhatsApp בהודעות?',
    options: ['<b> → **bold**, <i> → *italic*', '<b> → *bold*, <i> → _italic_, <s> → ~strikethrough~', '<strong> → [bold], <em> → [italic]', 'לא מתבצעת המרה - WhatsApp תומך ב-HTML'],
    correct: 1,
    explanation: 'המערכת ממירה תגיות HTML לפורמט WhatsApp: <b> → *bold*, <i> → _italic_, <s> → ~strikethrough~, <code> → `code`.'
  },
  {
    id: 'wh_4',
    category: 'webhooks',
    type: 'multiple',
    question: 'אילו מספרים מסוננים לפני שליחת הודעה אישית ב-WhatsApp?',
    options: ['מספרים שמתחילים ב-+972 בלבד', 'מספרים עם tg: (placeholder של טלגרם) ו-@g.us (מזהה קבוצה)', 'מספרים בינלאומיים שלא מתחילים ב-05', 'כל המספרים שלא אומתו במערכת'],
    correct: 1,
    explanation: 'לפני שליחת הודעה אישית, המערכת מסננת tg: (placeholder של משתמשי טלגרם) ו-@g.us (מזהי קבוצות WhatsApp).'
  },
  {
    id: 'wh_5',
    category: 'webhooks',
    type: 'truefalse',
    question: 'מנגנון ה-idempotency בוובהוקים משתמש בטבלת webhook_events עם message_id כ-Primary Key.',
    correct: true,
    explanation: 'בדיוק. כל הודעה נכנסת נרשמת בטבלה עם message_id כמפתח ראשי, מה שמונע עיבוד כפול של אותה הודעה.'
  },
  {
    id: 'wh_6',
    category: 'webhooks',
    type: 'truefalse',
    question: 'כפתורים (inline keyboards) עובדים בקבוצות WhatsApp כמו בצ\'אטים פרטיים.',
    correct: false,
    explanation: 'כפתורים לא עובדים בקבוצות. בכל fallback לקבוצה יש להגדיר keyboard=None ולספק הנחיות טקסטואליות במקום.'
  },

  // ========================================
  // קטגוריה: celery - משימות רקע ותורים
  // ========================================

  {
    id: 'celery_1',
    category: 'celery',
    type: 'multiple',
    question: 'כל כמה זמן Celery Beat מריץ את המשימה process_outbox_messages?',
    options: ['כל 5 שניות', 'כל 10 שניות', 'כל 30 שניות', 'כל דקה'],
    correct: 1,
    explanation: 'Celery Beat מתזמן את process_outbox_messages כל 10 שניות לעיבוד הודעות ממתינות בטבלת ה-outbox.'
  },
  {
    id: 'celery_2',
    category: 'celery',
    type: 'multiple',
    question: 'מה הנוסחה לחישוב backoff בין ניסיונות חוזרים בתור ה-outbox?',
    options: ['base_seconds + retry_count', 'base_seconds * retry_count', 'base_seconds * (2 ** retry_count) עם תקרה', 'base_seconds * (3 ** retry_count)'],
    correct: 2,
    explanation: 'הנוסחה היא exponential backoff: base_seconds * (2 ** retry_count), עם תקרה של max_backoff_seconds (ברירת מחדל: 3600 שניות = שעה).'
  },
  {
    id: 'celery_3',
    category: 'celery',
    type: 'multiple',
    question: 'למה prefetch_multiplier מוגדר ל-1 ב-Celery worker?',
    options: ['כדי לחסוך זיכרון', 'כדי שכל worker יעבד משימה אחת בכל פעם ולא "יחזיק" משימות', 'בגלל מגבלה של Redis', 'כדי למנוע deadlocks'],
    correct: 1,
    explanation: 'prefetch_multiplier=1 מבטיח שה-worker שולף משימה אחת בכל פעם מהתור, ולא "מחביא" משימות שworkers אחרים יכולים לעבד.'
  },
  {
    id: 'celery_4',
    category: 'celery',
    type: 'multiple',
    question: 'מה קורה כש-worker של Celery מת באמצע עיבוד משימה (עם ההגדרות הנוכחיות)?',
    options: ['המשימה אבודה לצמיתות', 'המשימה חוזרת לתור בזכות ack_late=True ו-reject_on_worker_lost=True', 'המשימה מועברת ל-dead letter queue', 'Redis שומר אותה אוטומטית'],
    correct: 1,
    explanation: 'ack_late=True אומר שהמשימה מאושרת רק אחרי ביצוע (לא לפני). reject_on_worker_lost=True מחזיר אותה לתור אם ה-worker נפל.'
  },
  {
    id: 'celery_5',
    category: 'celery',
    type: 'multiple',
    question: 'אילו קודי HTTP נחשבים transient errors בשליחה ל-WhatsApp Gateway?',
    options: ['400, 401, 403, 404', '500, 501, 502, 503', '502, 503, 504, 429', '408, 500, 502, 503'],
    correct: 2,
    explanation: 'קודים 502 (Bad Gateway), 503 (Service Unavailable), 504 (Gateway Timeout) ו-429 (Too Many Requests) נחשבים שגיאות זמניות שמצדיקות ניסיון חוזר.'
  },
  {
    id: 'celery_6',
    category: 'celery',
    type: 'truefalse',
    question: 'הגבול הזמני (time limit) למשימת Celery במערכת הוא 10 דקות.',
    correct: false,
    explanation: 'ה-time limit מוגדר ל-5 דקות (300 שניות). אם משימה חורגת מזמן זה, היא נהרגת.'
  },
  {
    id: 'celery_7',
    category: 'celery',
    type: 'truefalse',
    question: 'אזור הזמן של Celery Beat מוגדר ל-Asia/Jerusalem.',
    correct: true,
    explanation: 'timezone מוגדר ל-Asia/Jerusalem כדי שתזמון משימות (כמו ניקוי יומי) יתבצע לפי שעון ישראל.'
  },

  // ========================================
  // קטגוריה: platform - דו-פלטפורמיות
  // ========================================

  {
    id: 'plat_1',
    category: 'platform',
    type: 'multiple',
    question: 'איזה שירות מריץ את ה-WhatsApp Gateway?',
    options: ['FastAPI Python service', 'Node.js microservice (WPPConnect)', 'Go microservice', 'Java Spring Boot service'],
    correct: 1,
    explanation: 'ה-WhatsApp Gateway הוא מיקרו-שירות Node.js שמשתמש בספריית WPPConnect. הוא רץ בנפרד מהאפליקציה הראשית.'
  },
  {
    id: 'plat_2',
    category: 'platform',
    type: 'multiple',
    question: 'למה אסור להשתמש ב-asyncio.create_task() לשליחת הודעות רקע?',
    options: ['זה איטי מדי', 'זה לא עובד עם FastAPI', 'זה בולע exceptions - שגיאות נעלמות בלי התראה', 'זה יוצר memory leaks'],
    correct: 2,
    explanation: 'asyncio.create_task() בולע exceptions - אם שליחת הודעה נכשלת, השגיאה נעלמת. במקום זה, יש להשתמש ב-background_tasks.add_task() של FastAPI.'
  },
  {
    id: 'plat_3',
    category: 'platform',
    type: 'multiple',
    question: 'מה ה-parse mode שמשמש לשליחת הודעות בטלגרם?',
    options: ['Markdown', 'MarkdownV2', 'HTML', 'Plain text'],
    correct: 2,
    explanation: 'המערכת משתמשת ב-HTML parse mode לטלגרם, שתומך בתגיות כמו <b>, <i>, <a> לעיצוב הודעות.'
  },
  {
    id: 'plat_4',
    category: 'platform',
    type: 'multiple',
    question: 'מה ה-fallback הנכון לשם משתמש כשהשם לא זמין?',
    options: ['user.name or "אנונימי"', 'user.full_name or user.name or "לא צוין"', 'user.display_name or "משתמש"', 'str(user.id)'],
    correct: 1,
    explanation: 'לפי הכללים: תמיד user.full_name or user.name or "לא צוין" - שרשרת fallback שמבטיחה שתמיד יהיה ערך להצגה.'
  },
  {
    id: 'plat_5',
    category: 'platform',
    type: 'truefalse',
    question: 'לוגיקה חדשה חייבת לעבוד רק בטלגרם ואז אפשר להוסיף תמיכה ב-WhatsApp בהמשך.',
    correct: false,
    explanation: 'לפי הכללים: כל לוגיקה חדשה חייבת לעבוד זהה בשתי הפלטפורמות. אין לשכפל קוד אלא להוציא לשירות משותף.'
  },
  {
    id: 'plat_6',
    category: 'platform',
    type: 'truefalse',
    question: 'הודעות אדמין נשלחות לטלגרם ול-WhatsApp דרך אותו Circuit Breaker.',
    correct: false,
    explanation: 'יש Circuit Breakers נפרדים: אחד לטלגרם, אחד ל-WhatsApp, ואחד ל-WhatsApp Admin. כשל בערוץ אחד לא ישפיע על האחרים.'
  },

  // ========================================
  // קטגוריה: logging - לוגים ומוניטורינג
  // ========================================

  {
    id: 'log_1',
    category: 'logging',
    type: 'multiple',
    question: 'מה הפורמט של לוגים ב-production?',
    options: ['Plain text עם timestamp', 'CSV מופרד בפסיקים', 'JSON מובנה עם timestamp, level, logger, message, correlation_id ו-extra', 'Syslog standard format'],
    correct: 2,
    explanation: 'בפרודקשן, JSONFormatter מייצר לוגים מובנים עם כל השדות הנדרשים: timestamp, level, logger, message, correlation_id, ו-extra data.'
  },
  {
    id: 'log_2',
    category: 'logging',
    type: 'multiple',
    question: 'איך מעבירים נתונים נוספים ללוג בצורה הנכונה?',
    options: ['logger.info(f"User {user_id} did something")', 'logger.info("Something happened", extra_data={"user_id": 123})', 'logger.info("Something happened", user_id=123)', 'logger.info("Something happened").with_data(user_id=123)'],
    correct: 1,
    explanation: 'הדרך הנכונה היא להשתמש בפרמטר extra_data עם dictionary. זה מופיע בשדה extra בלוג ה-JSON ומאפשר חיפוש וסינון.'
  },
  {
    id: 'log_3',
    category: 'logging',
    type: 'truefalse',
    question: 'מותר להשתמש ב-print() לצורכי דיבוג זמני בפיתוח.',
    correct: false,
    explanation: 'לפי הכללים: אסור להשתמש ב-print() בשום מצב. תמיד להשתמש ב-logger, גם בפיתוח. logger.debug() זמין לצורכי דיבוג.'
  },

  // ========================================
  // קטגוריה: api - נקודות קצה ו-REST
  // ========================================

  {
    id: 'api_1',
    category: 'api',
    type: 'multiple',
    question: 'מהו ה-endpoint לתפיסת משלוח ע"י שליח?',
    options: ['PUT /api/deliveries/{id}/assign', 'POST /api/deliveries/{id}/capture', 'PATCH /api/deliveries/{id}/status', 'POST /api/deliveries/{id}/claim'],
    correct: 1,
    explanation: 'POST /api/deliveries/{id}/capture - מבצע תפיסת משלוח עם חיוב אטומי של ארנק השליח.'
  },
  {
    id: 'api_2',
    category: 'api',
    type: 'multiple',
    question: 'מה נדרש לכלול בכל endpoint חדש לפי כללי הפרויקט?',
    options: ['רק type hints', 'רק response_model', 'תיעוד OpenAPI מלא: response_model, summary, description, responses, tags', 'רק docstring'],
    correct: 2,
    explanation: 'כל endpoint חייב תיעוד OpenAPI מלא: response_model, summary, description, responses (כולל קודי שגיאה), ו-tags לקיבוץ.'
  },
  {
    id: 'api_3',
    category: 'api',
    type: 'multiple',
    question: 'מה מחזיר ה-endpoint GET /health?',
    options: ['{"status": "ok"}', '{"status": "healthy"}', '{"alive": true}', '200 OK ללא body'],
    correct: 1,
    explanation: 'ה-health check endpoint מחזיר {"status": "healthy"} - בדיקת תקינות בסיסית של האפליקציה.'
  },
  {
    id: 'api_4',
    category: 'api',
    type: 'truefalse',
    question: 'מותר ליצור endpoint ללא response_model אם הוא רק מבצע פעולה ולא מחזיר נתונים.',
    correct: false,
    explanation: 'לפי הכללים: כל endpoint חייב תיעוד OpenAPI מלא, כולל response_model. גם endpoints שמבצעים פעולות צריכים להחזיר תגובה מובנית.'
  },

  // ========================================
  // קטגוריה: exceptions - טיפול בשגיאות
  // ========================================

  {
    id: 'exc_1',
    category: 'exceptions',
    type: 'multiple',
    question: 'מה הבעיה עם `raise Exception("Delivery not found")`?',
    options: ['Exception לא עובד ב-async', 'חסר traceback', 'צריך להשתמש ב-exceptions מותאמים כמו DeliveryNotFoundError עם קוד שגיאה', 'צריך להשתמש ב-ValueError במקום'],
    correct: 2,
    explanation: 'לפי הכללים: אסור להשתמש ב-exceptions גנריים. יש להשתמש ב-exceptions מותאמים מ-app/core/exceptions.py שכוללים קודי שגיאה ומידע מובנה.'
  },
  {
    id: 'exc_2',
    category: 'exceptions',
    type: 'multiple',
    question: 'איזה exception זורקים כשלשליח אין מספיק אשראי לתפוס משלוח?',
    options: ['ValueError("Not enough credit")', 'InsufficientCreditError', 'WalletException', 'PaymentRequiredError'],
    correct: 1,
    explanation: 'InsufficientCreditError הוא exception מותאם שמוגדר ב-app/core/exceptions.py ומתאים בדיוק למצב של חוסר אשראי.'
  },

  // ========================================
  // קטגוריה: config - הגדרות וסביבה
  // ========================================

  {
    id: 'conf_1',
    category: 'config',
    type: 'multiple',
    question: 'מהו גודל הקובץ המקסימלי להעלאה (MAX_FILE_SIZE)?',
    options: ['1MB', '5MB', '10MB', '50MB'],
    correct: 2,
    explanation: 'MAX_FILE_SIZE מוגדר ל-10MB (10 * 1024 * 1024 bytes). משמש להגבלת קבצי KYC כמו תמונות תעודת זהות וסלפי.'
  },
  {
    id: 'conf_2',
    category: 'config',
    type: 'multiple',
    question: 'מה קורה בעת הפעלת האפליקציה (startup) לגבי מיגרציות?',
    options: ['מיגרציות רצות ידנית דרך CLI', 'מיגרציות רצות אוטומטית - הוספת enum values ו-columns/indexes', 'Alembic רץ אוטומטית', 'בסיס הנתונים נוצר מאפס'],
    correct: 1,
    explanation: 'ב-startup event של FastAPI, אם מדובר ב-PostgreSQL, המערכת מריצה אוטומטית add_enum_values ו-run_all_migrations (הוספת עמודות ואינדקסים).'
  },
  {
    id: 'conf_3',
    category: 'config',
    type: 'multiple',
    question: 'מה ה-backoff המקסימלי (תקרה) לניסיונות חוזרים ב-outbox?',
    options: ['5 דקות', '30 דקות', 'שעה (3600 שניות)', '24 שעות'],
    correct: 2,
    explanation: 'OUTBOX_MAX_BACKOFF_SECONDS = 3600, כלומר שעה. גם אם הנוסחה האקספוננציאלית נותנת ערך גבוה יותר, לא יחכו יותר משעה בין ניסיונות.'
  },
  {
    id: 'conf_4',
    category: 'config',
    type: 'truefalse',
    question: 'עמלת ברירת המחדל של תחנה (commission_rate) היא 15%.',
    correct: false,
    explanation: 'ברירת המחדל של commission_rate היא 0.10, כלומר 10% ולא 15%.'
  },

  // ========================================
  // קטגוריה: testing - בדיקות
  // ========================================

  {
    id: 'test_1',
    category: 'testing',
    type: 'multiple',
    question: 'איזה בסיס נתונים משמש בבדיקות?',
    options: ['PostgreSQL בקונטיינר Docker', 'SQLite in-memory לבדיקות מהירות', 'MongoDB mock', 'H2 Database'],
    correct: 1,
    explanation: 'הבדיקות משתמשות ב-SQLite in-memory לביצועים מהירים. כל בדיקה מקבלת session חדש עם rollback בסוף.'
  },
  {
    id: 'test_2',
    category: 'testing',
    type: 'multiple',
    question: 'איך עושים mock לשירות הטלגרם בבדיקות?',
    options: ['מריצים שרת טלגרם מקומי', 'משתמשים ב-Bot API test environment', 'עושים patch ל-httpx.AsyncClient.post עם mock שמחזיר 200', 'משתמשים ב-VCR לתיעוד תגובות'],
    correct: 2,
    explanation: 'ה-fixture mock_telegram עושה patch ל-httpx.AsyncClient.post ומחזיר AsyncMock עם status_code=200 ו-json={"ok": True}.'
  },
  {
    id: 'test_3',
    category: 'testing',
    type: 'truefalse',
    question: 'בבדיקות אסינכרוניות צריך לסמן כל פונקציה עם @pytest.mark.asyncio.',
    correct: false,
    explanation: 'הפרויקט משתמש ב-asyncio_mode=auto (pytest-asyncio 0.23+), כך שכל פונקציית בדיקה async מזוהה אוטומטית ללא צורך בסימון ידני.'
  },

  // ========================================
  // קטגוריה: db_sessions - ניהול סשנים
  // ========================================

  {
    id: 'db_1',
    category: 'db_sessions',
    type: 'multiple',
    question: 'מה ההבדל בין get_db() ל-get_task_session() בניהול חיבורי DB?',
    options: ['אין הבדל - שניהם עושים אותו דבר', 'get_db() לבקשות API (session מתוך pool), get_task_session() ל-Celery (engine חדש לכל משימה)', 'get_db() סינכרוני ו-get_task_session() אסינכרוני', 'get_db() ל-reads ו-get_task_session() ל-writes'],
    correct: 1,
    explanation: 'get_db() משתמש ב-AsyncSessionLocal (pool משותף) לבקשות API. get_task_session() יוצר engine חדש לכל משימת Celery ומשחרר אותו בסוף, כי Celery workers רצים בתהליכים נפרדים.'
  },
  {
    id: 'db_2',
    category: 'db_sessions',
    type: 'truefalse',
    question: 'משימות Celery משתמשות באותו connection pool כמו בקשות API.',
    correct: false,
    explanation: 'Celery workers רצים בתהליכים נפרדים ולכן יוצרים engine חדש לכל משימה דרך get_task_session(). שיתוף pool בין תהליכים יגרום לשגיאות "attached to different loop".'
  },

  // ========================================
  // קטגוריה: outbox - דפוס Outbox
  // ========================================

  {
    id: 'outbox_1',
    category: 'outbox',
    type: 'multiple',
    question: 'מהם הסטטוסים האפשריים של הודעה בטבלת outbox_messages?',
    options: ['NEW, SENDING, DONE, ERROR', 'PENDING, PROCESSING, SENT, FAILED', 'QUEUED, IN_PROGRESS, COMPLETED, REJECTED', 'DRAFT, SCHEDULED, DELIVERED, BOUNCED'],
    correct: 1,
    explanation: 'הסטטוסים: PENDING (ממתינה), PROCESSING (בעיבוד), SENT (נשלחה בהצלחה), FAILED (נכשלה אחרי כל הניסיונות).'
  },
  {
    id: 'outbox_2',
    category: 'outbox',
    type: 'multiple',
    question: 'כמה ניסיונות חוזרים (retries) מוגדרים לשליחת WhatsApp?',
    options: ['1', '3', '5', '10'],
    correct: 1,
    explanation: 'WHATSAPP_MAX_RETRIES מוגדר ל-3 ניסיונות חוזרים לשליחת הודעה דרך WhatsApp Gateway.'
  },
  {
    id: 'outbox_3',
    category: 'outbox',
    type: 'truefalse',
    question: 'הודעות outbox נשלחות סינכרונית כחלק מהטרנזקציה הראשית.',
    correct: false,
    explanation: 'ההודעות רק נשמרות בטבלת outbox באותה טרנזקציה. השליחה בפועל מתבצעת אסינכרונית ע"י Celery worker שמעבד את התור כל 10 שניות.'
  },

  // Debugging Tools - Multiple Choice
  {
    id: 'debug_1',
    category: 'debugging',
    type: 'multiple',
    question: 'מה ההבדל בין Liveness ל-Readiness probe?',
    options: [
      'Liveness בודק DB, Readiness בודק Redis',
      'Liveness בודק רק שהתהליך חי, Readiness בודק את כל התלויות',
      'Liveness לפרודקשן, Readiness לפיתוח',
      'אין הבדל - שניהם בודקים אותם דברים'
    ],
    correct: 1,
    explanation: 'Liveness (`/health`) רק מוודא שהתהליך חי, בעוד Readiness (`/health/ready`) בודק DB, Redis, WhatsApp Gateway ו-Celery'
  },
  {
    id: 'debug_2',
    category: 'debugging',
    type: 'multiple',
    question: 'באיזה סטטוס Circuit Breaker חוסם קריאות לשירות חיצוני?',
    options: [
      'closed',
      'open',
      'half_open',
      'disabled'
    ],
    correct: 1,
    explanation: 'במצב `open` ה-Circuit Breaker חוסם קריאות כי היו יותר מדי כשלונות'
  },
  {
    id: 'debug_3',
    category: 'debugging',
    type: 'multiple',
    question: 'איזה endpoint משמש לשליחה מחדש של הודעה כושלת?',
    options: [
      'POST /api/admin/debug/outbox/retry',
      'POST /api/admin/debug/outbox/messages/{id}/retry',
      'GET /api/admin/debug/outbox/messages?retry=true',
      'PATCH /api/admin/debug/outbox/{id}'
    ],
    correct: 1,
    explanation: 'הנתיב המדויק הוא `POST /api/admin/debug/outbox/messages/{message_id}/retry`'
  },
  {
    id: 'debug_4',
    category: 'debugging',
    type: 'multiple',
    question: 'כמה Circuit Breakers רשומים במערכת?',
    options: [
      '2 (Telegram, WhatsApp)',
      '3 (Telegram, WhatsApp, WhatsApp Admin)',
      '4 (Telegram, WhatsApp, Redis, DB)',
      '1 (משותף לכל השירותים)'
    ],
    correct: 1,
    explanation: 'יש 3 Circuit Breakers: telegram, whatsapp, ו-whatsapp_admin'
  },
  {
    id: 'debug_5',
    category: 'debugging',
    type: 'multiple',
    question: 'מה יקרה אם ננסה retry להודעת outbox בסטטוס `sent`?',
    options: [
      'ההודעה תישלח שוב',
      'תתקבל שגיאה 400',
      'הסטטוס יתאפס ל-pending',
      'ההודעה תימחק'
    ],
    correct: 1,
    explanation: 'Retry עובד רק על הודעות בסטטוס `failed` - אחרת מתקבלת שגיאה 400'
  },
  {
    id: 'debug_6',
    category: 'debugging',
    type: 'multiple',
    question: 'איזה פרמטר ב-force-state קובע אם למחוק את ה-context?',
    options: [
      'reset_context',
      'clear_context',
      'delete_data',
      'clean_state'
    ],
    correct: 1,
    explanation: 'הפרמטר `clear_context` (ברירת מחדל: true) קובע אם לנקות את נתוני ההקשר'
  },
  {
    id: 'debug_7',
    category: 'debugging',
    type: 'multiple',
    question: 'איזה כלי בודק thread safety של Circuit Breaker?',
    options: [
      'GET /api/admin/debug/circuit-breakers',
      'סקריפט health_check.py',
      'GET /health/ready',
      'pytest --concurrency'
    ],
    correct: 1,
    explanation: 'הסקריפט `health_check.py` בודק בין היתר thread safety ותאימות multi event-loop'
  },
  {
    id: 'debug_8',
    category: 'debugging',
    type: 'multiple',
    question: 'מה ברירת המחדל של limit ב-GET /api/admin/debug/outbox/messages?',
    options: [
      '10',
      '20',
      '50',
      '100'
    ],
    correct: 2,
    explanation: 'ברירת המחדל היא 50 הודעות (טווח: 1-200)'
  },

  // API Documentation - Multiple Choice
  {
    id: 'api_doc_1',
    category: 'api_docs',
    type: 'multiple',
    question: 'באיזה כתובת נמצא התיעוד האינטראקטיבי (Swagger)?',
    options: [
      '/api/docs',
      '/docs',
      '/swagger',
      '/api-docs'
    ],
    correct: 1,
    explanation: 'התיעוד של FastAPI נמצא ב-`/docs` (Swagger UI) וגם ב-`/redoc` (ReDoc)'
  },
  {
    id: 'api_doc_2',
    category: 'api_docs',
    type: 'multiple',
    question: 'כמה שיטות אימות קיימות במערכת?',
    options: [
      '1 (רק Admin API Key)',
      '2 (Admin API Key + JWT)',
      '3 (Admin API Key + JWT + OTP)',
      '4 (כולל Basic Auth)'
    ],
    correct: 2,
    explanation: 'יש 3 שיטות: Admin API Key, JWT Token, ו-OTP (לקבלת JWT)'
  },
  {
    id: 'api_doc_3',
    category: 'api_docs',
    type: 'multiple',
    question: 'מה קורה כש-verify-otp מוצא כמה תחנות למשתמש?',
    options: [
      'מחזיר שגיאה 400',
      'בוחר את התחנה הראשונה אוטומטית',
      'מחזיר רשימת תחנות לבחירה',
      'מבקש OTP נוסף'
    ],
    correct: 2,
    explanation: 'מוחזר `choose_station: true` עם רשימת תחנות, והמשתמש צריך לשלוח שוב עם station_id'
  },
  {
    id: 'api_doc_4',
    category: 'api_docs',
    type: 'multiple',
    question: 'מהו טווח הערכים המקסימלי של page_size במשלוחים?',
    options: [
      '1-50',
      '1-100',
      '1-200',
      'אין הגבלה'
    ],
    correct: 1,
    explanation: 'בפאנל, page_size יכול להיות בין 1 ל-100 (ברירת מחדל: 20)'
  },
  {
    id: 'api_doc_5',
    category: 'api_docs',
    type: 'multiple',
    question: 'מה קורה ל-refresh token אחרי שימוש?',
    options: [
      'נשאר תקף לשימוש נוסף',
      'נמחק (token rotation)',
      'תוקפו מתארך',
      'הופך ל-access token'
    ],
    correct: 1,
    explanation: 'המערכת משתמשת ב-token rotation - כל refresh token הוא חד-פעמי'
  },
  {
    id: 'api_doc_6',
    category: 'api_docs',
    type: 'multiple',
    question: 'כמה סדרנים מקסימום אפשר להוסיף בפעולה אחת ב-bulk?',
    options: [
      '10',
      '20',
      '50',
      '100'
    ],
    correct: 2,
    explanation: 'הוספה מרובה של סדרנים מוגבלת ל-50 בפעולה אחת'
  },
  {
    id: 'api_doc_7',
    category: 'api_docs',
    type: 'multiple',
    question: 'איזה endpoint מחזיר CSV עם BOM לתמיכה בעברית ב-Excel?',
    options: [
      'GET /api/panel/deliveries/history',
      'GET /api/panel/reports/collection/export',
      'GET /api/panel/wallet/ledger',
      'GET /api/panel/dashboard'
    ],
    correct: 1,
    explanation: 'דוח הגבייה מיוצא ל-CSV עם BOM לתצוגה נכונה בעברית ב-Excel'
  },
  {
    id: 'api_doc_8',
    category: 'api_docs',
    type: 'multiple',
    question: 'מה ההבדל בין Swagger UI ל-ReDoc?',
    options: [
      'Swagger מהיר יותר',
      'ReDoc תומך בעברית',
      'Swagger אינטראקטיבי, ReDoc נקי לקריאה',
      'אין הבדל - זה אותו דבר'
    ],
    correct: 2,
    explanation: 'Swagger UI מאפשר Try it out, ReDoc יותר נקי וטוב לקריאה של התיעוד'
  },

  // Debugging Tools - True/False
  {
    id: 'debug_tf_1',
    category: 'debugging',
    type: 'truefalse',
    question: 'Liveness probe בודק את החיבור ל-DB ו-Redis',
    correct: false,
    explanation: 'Liveness רק בודק שהתהליך חי - Readiness בודק תלויות חיצוניות'
  },
  {
    id: 'debug_tf_2',
    category: 'debugging',
    type: 'truefalse',
    question: 'כל endpoints של Admin Debug דורשים X-Admin-API-Key',
    correct: true,
    explanation: 'כל הנתיבים תחת /api/admin/debug/ דורשים אימות אדמין'
  },
  {
    id: 'debug_tf_3',
    category: 'debugging',
    type: 'truefalse',
    question: 'ניתן להריץ retry על הודעה בסטטוס `processing`',
    correct: false,
    explanation: 'Retry עובד רק על הודעות בסטטוס `failed`'
  },
  {
    id: 'debug_tf_4',
    category: 'debugging',
    type: 'truefalse',
    question: 'force-state עוקף את ולידציית המעברים במכונת המצבים',
    correct: true,
    explanation: 'זו בדיוק מטרתו - לאפשר איפוס חירום ללא בדיקת מעברים תקינים'
  },
  {
    id: 'debug_tf_5',
    category: 'debugging',
    type: 'truefalse',
    question: 'Circuit Breaker במצב `half_open` חוסם לחלוטין את כל הקריאות',
    correct: false,
    explanation: 'במצב half_open מאפשרים מספר מצומצם של קריאות לבדוק אם השירות התאושש'
  },
  {
    id: 'debug_tf_6',
    category: 'debugging',
    type: 'truefalse',
    question: 'הסקריפט health_check.py יכול לבדוק בדיקות ספציפיות בלבד',
    correct: true,
    explanation: 'ניתן להשתמש ב-`--only validation,circuit_breaker` לבדיקות ספציפיות'
  },
  {
    id: 'debug_tf_7',
    category: 'debugging',
    type: 'truefalse',
    question: 'GET /health/ready מחזיר 200 גם אם Redis לא זמין',
    correct: false,
    explanation: 'אם יש בעיה בתלות כלשהי, מוחזר 503 (Service Unavailable)'
  },

  // API Documentation - True/False
  {
    id: 'api_doc_tf_1',
    category: 'api_docs',
    type: 'truefalse',
    question: 'אפשר לנסות endpoints ישירות דרך Swagger UI',
    correct: true,
    explanation: 'זו אחת התכונות המרכזיות של Swagger - כפתור "Try it out"'
  },
  {
    id: 'api_doc_tf_2',
    category: 'api_docs',
    type: 'truefalse',
    question: 'כל מספרי טלפון בתגובות הפאנל מוסתרים באופן מלא',
    correct: false,
    explanation: 'מוסתרים רק 4 הספרות האחרונות (למשל: +97250123****)'
  },
  {
    id: 'api_doc_tf_3',
    category: 'api_docs',
    type: 'truefalse',
    question: 'מיגרציות רצות אוטומטית ב-startup על PostgreSQL',
    correct: true,
    explanation: 'המערכת מריצה את המיגרציות אוטומטית בהפעלה'
  },
  {
    id: 'api_doc_tf_4',
    category: 'api_docs',
    type: 'truefalse',
    question: 'אפשר להסיר את הבעלים האחרון של תחנה',
    correct: false,
    explanation: 'המערכת מונעת הסרה של הבעלים האחרון'
  },
  {
    id: 'api_doc_tf_5',
    category: 'api_docs',
    type: 'truefalse',
    question: 'בקשת OTP מחזירה הודעה שונה אם המספר לא קיים במערכת',
    correct: false,
    explanation: 'תשובה גנרית תמיד למניעת user enumeration'
  },
  {
    id: 'api_doc_tf_6',
    category: 'api_docs',
    type: 'truefalse',
    question: 'Try it out ב-Swagger שולח בקשות אמיתיות לשרת',
    correct: true,
    explanation: 'הבקשות הן אמיתיות - צריך להיזהר בשימוש בפרודקשן'
  },
  {
    id: 'api_doc_tf_7',
    category: 'api_docs',
    type: 'truefalse',
    question: 'שדה `fee` במשלוח הוא חובה בעת יצירה',
    correct: false,
    explanation: 'זה שדה אופציונלי עם ברירת מחדל של 10.0'
  },
  {
    id: 'api_doc_tf_8',
    category: 'api_docs',
    type: 'truefalse',
    question: 'capture מבצע גם בדיקת אשראי וגם ניכוי מהארנק באותה טרנזקציה',
    correct: true,
    explanation: 'זו פעולה אטומית שמבטיחה consistency'
  }
];
