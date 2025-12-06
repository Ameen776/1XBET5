// ===================================================
// 🚀 AI GOAL PREDICTOR ULTIMATE - VERSION 16.0 ENHANCED
// 👤 DEVELOPER: ♛𝑨𝒎𝒆𝒆𝒏 𝑨𝒍𝒛𝒘𝒂𝒉𝒊♛
// 🔥 FEATURES: DUAL PAYMENT SYSTEM + BANK TRANSFER + BINANCE
// 💾 PERSISTENT DATA STORAGE - FIREBASE INTEGRATION
// 🎯 ENHANCED WITH REAL-TIME UPDATES & USER MANAGEMENT
// ⚡ OPTIMIZED FOR RENDER.COM DEPLOYMENT
// ===================================================

console.log('🤖 Starting AI GOAL Predictor Ultimate v16.0 ENHANCED...');
console.log('🕒 ' + new Date().toISOString());

// 🔧 تحقق من وجود جميع المتغيرات المطلوبة
const requiredEnvVars = [
    'BOT_TOKEN',
    'ADMIN_ID', 
    'CHANNEL_ID',
    'CHANNEL_USERNAME',
    'FIREBASE_PROJECT_ID',
    'FIREBASE_CLIENT_EMAIL',
    'FIREBASE_PRIVATE_KEY'
];

console.log('🔍 Checking required environment variables...');
const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);
if (missingVars.length > 0) {
    console.error('❌ Missing required environment variables:', missingVars);
    console.error('💡 Please add these variables in Render dashboard');
    process.exit(1);
}

console.log('✅ All required environment variables found');

// 🔥 FIREBASE ADMIN SDK INITIALIZATION - FIXED
const admin = require('firebase-admin');
let db = null; // تعريف متغير db

// 🔐 دالة محسنة لتهيئة Firebase
async function initializeFirebase() {
    try {
        console.log('🔄 Initializing Firebase...');
        
        // 🔧 الإصلاح الرئيسي هنا: معالجة المفتاح بشكل صحيح
        let privateKey = process.env.FIREBASE_PRIVATE_KEY || '';
        
        // إذا كان المفتاح يحتوي على \n النصي، نحوله لسطور حقيقية
        if (privateKey.includes('\\n')) {
            console.log('🔧 Converting \\n to actual newlines in private key');
            privateKey = privateKey.replace(/\\n/g, '\n');
        }
        
        const firebaseConfig = {
            projectId: process.env.FIREBASE_PROJECT_ID,
            clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
            privateKey: privateKey
        };

        console.log('✅ Firebase config loaded successfully');
        console.log('📝 Project ID:', firebaseConfig.projectId ? '✓' : '✗');
        console.log('📝 Client Email:', firebaseConfig.clientEmail ? '✓' : '✗');
        console.log('📝 Private Key Present:', firebaseConfig.privateKey ? '✓ (Length: ' + firebaseConfig.privateKey.length + ')' : '✗');

        admin.initializeApp({
            credential: admin.credential.cert(firebaseConfig)
        });
        // ... باقي الكود يبقى كما هو

        db = admin.firestore();
        
        // اختبار الاتصال
        await db.collection('connection_test').doc('startup').set({
            timestamp: new Date().toISOString(),
            status: 'connected',
            version: "16.0.1",
            environment: process.env.NODE_ENV || 'production',
            platform: 'Render.com'
        });
        
        console.log("🔥 Firebase connected successfully");
        console.log('✅ Firebase connection test passed');
        return true;
    } catch (error) {
        console.log('❌ Firebase initialization failed:', error.message);
        console.log('💡 Please check your Firebase environment variables in Render');
        return false;
    }
}

// 🔧 TION - UPDATED FOR DUAL PAYMENT (ENVIRONMENT VARIABLES ONLY)
// 🌐 EXPRESS SERVER FOR RENDER - START IMMEDIATELY
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ 
        status: 'OK', 
        timestamp: new Date().toISOString(),
        message: 'AI Goal Predictor Bot is starting...'
    });
});

app.get('/health', (req, res) => {
    res.json({
        status: 'starting',
        timestamp: new Date().toISOString(),
        firebase: db ? 'connected' : 'connecting'
    });
});

// Start server immediately
const server = app.listen(PORT, '0.0.0.0', () => {
    console.log(`🌐 Health check server running on port ${PORT}`);
    console.log(`🔍 Health check: http://0.0.0.0:${PORT}/health`);
});

// 🚀 تهيئة Firebase أولاً
(async () => {
    console.log('🔄 Starting Firebase initialization...');
    const firebaseReady = await initializeFirebase();
    
    if (!firebaseReady) {
        console.log('❌ Firebase initialization failed');
        console.log('⚠️ Bot will start without Firebase (limited functionality)');
    } else {
        console.log('✅ Firebase initialization completed successfully');
    }
})();

// الانتظار قليلاً قبل متابعة باقي الكود
setTimeout(() => {
    console.log('🔄 Proceeding with bot initialization...');
    // باقي كود البوت يبدأ من هنا
}, 2000);

// 🔧 CONFIGURATION - UPDATED FOR DUAL PAYMENT (ENVIRONMENT VARIABLES ONLY)  <--- هنا
const CONFIG = {
    BOT_TOKEN: process.env.BOT_TOKEN,
    // ... باقي الكود
    BOT_TOKEN: process.env.BOT_TOKEN,
    ADMIN_ID: process.env.ADMIN_ID,
    CHANNEL_ID: process.env.CHANNEL_ID,
    CHANNEL_USERNAME: process.env.CHANNEL_USERNAME,
    
    // 🧠 AI APIS
    AI_APIS: {
        GEMINI: process.env.GEMINI_API_KEY || '',
        OPENAI: process.env.OPENAI_API_KEY || ''
    },

    // 💰 DEFAULT PRICING - DUAL SYSTEM
    SUBSCRIPTION_PRICES: {
        binance: {
            week: parseInt(process.env.PRICE_BINANCE_WEEK) || 10,
            month: parseInt(process.env.PRICE_BINANCE_MONTH) || 30,
            three_months: parseInt(process.env.PRICE_BINANCE_3MONTHS) || 80,
            year: parseInt(process.env.PRICE_BINANCE_YEAR) || 250
        },
        bank: {
            week: parseInt(process.env.PRICE_BANK_WEEK) || 10,
            month: parseInt(process.env.PRICE_BANK_MONTH) || 30, 
            three_months: parseInt(process.env.PRICE_BANK_3MONTHS) || 80,
            year: parseInt(process.env.PRICE_BANK_YEAR) || 250
        }
    },

    // 🔐 DEFAULT PAYMENT LINKS - DUAL SYSTEM
    PAYMENT_LINKS: {
        binance: {
            week: process.env.PAYMENT_BINANCE_WEEK || "https://binance.com/payment/weekly",
            month: process.env.PAYMENT_BINANCE_MONTH || "https://binance.com/payment/monthly", 
            three_months: process.env.PAYMENT_BINANCE_3MONTHS || "https://binance.com/payment/3months",
            year: process.env.PAYMENT_BINANCE_YEAR || "https://binance.com/payment/yearly"
        },
        bank: {
            week: {
                account: process.env.BANK_ACCOUNT_WEEK || "1234567890",
                image: process.env.BANK_IMAGE_WEEK || "https://i.ibb.co/default-bank-week.jpg",
                description: process.env.BANK_DESC_WEEK || `🔹 تحويل بنكي - باقة أسبوعية\n💳 رقم الحساب: ${process.env.BANK_ACCOUNT_WEEK || '1234567890'}\n🏦 البنك: البنك الكريمي\n💰 المبلغ: ${parseInt(process.env.PRICE_BANK_WEEK) || 10}$\n💵 العملة: الدولار الأمريكي\n\n📋 الشروط:\n• يجب التحويل بالدولار الأمريكي\n• إرفاق صورة إثبات الدفع\n• كتابة رقم حساب 1xBet الخاص بك`
            },
            month: {
                account: process.env.BANK_ACCOUNT_MONTH || "1234567890",
                image: process.env.BANK_IMAGE_MONTH || "https://i.ibb.co/default-bank-month.jpg", 
                description: process.env.BANK_DESC_MONTH || `🔹 تحويل بنكي - باقة شهرية\n💳 رقم الحساب: ${process.env.BANK_ACCOUNT_MONTH || '1234567890'}\n🏦 البنك: البنك الكريمي\n💰 المبلغ: ${parseInt(process.env.PRICE_BANK_MONTH) || 30}$\n💵 العملة: الدولار الأمريكي\n\n📋 الشروط:\n• يجب التحويل بالدولار الأمريكي\n• إرفاق صورة إثبات الدفع\n• كتابة رقم حساب 1xBet الخاص بك`
            },
            three_months: {
                account: process.env.BANK_ACCOUNT_3MONTHS || "1234567890",
                image: process.env.BANK_IMAGE_3MONTHS || "https://i.ibb.co/default-bank-3months.jpg",
                description: process.env.BANK_DESC_3MONTHS || `🔹 تحويل بنكي - باقة 3 أشهر\n💳 رقم الحساب: ${process.env.BANK_ACCOUNT_3MONTHS || '1234567890'}\n🏦 البنك: البنك الكريمي\n💰 المبلغ: ${parseInt(process.env.PRICE_BANK_3MONTHS) || 80}$\n💵 العملة: الدولار الأمريكي\n\n📋 الشروط:\n• يجب التحويل بالدولار الأمريكي\n• إرفاق صورة إثبات الدفع\n• كتابة رقم حساب 1xBet الخاص بك`
            },
            year: {
                account: process.env.BANK_ACCOUNT_YEAR || "1234567890",
                image: process.env.BANK_IMAGE_YEAR || "https://i.ibb.co/default-bank-year.jpg",
                description: process.env.BANK_DESC_YEAR || `🔹 تحويل بنكي - باقة سنوية\n💳 رقم الحساب: ${process.env.BANK_ACCOUNT_YEAR || '1234567890'}\n🏦 البنك: البنك الكريمي\n💰 المبلغ: ${parseInt(process.env.PRICE_BANK_YEAR) || 250}$\n💵 العملة: الدولار الأمريكي\n\n📋 الشروط:\n• يجب التحويل بالدولار الأمريكي\n• إرفاق صورة إثبات الدفع\n• كتابة رقم حساب 1xBet الخاص بك`
            }
        }
    },
    
    VERSION: "16.0.1",
    DEVELOPER: "♛𝑨𝒎𝒆𝒆𝒏 𝑨𝒍𝒛𝒘𝒂𝒉𝒊♛",
    CHANNEL: process.env.CHANNEL_USERNAME || "@GEMZGOOL",
    START_IMAGE: process.env.START_IMAGE || "https://i.ibb.co/tpy70Bd1/IMG-20251104-074214-065.jpg",
    ANALYSIS_IMAGE: process.env.ANALYSIS_IMAGE || "https://i.ibb.co/VYjf05S0/Screenshot.png",
    PREDICTION_IMAGE: process.env.PREDICTION_IMAGE || "https://i.ibb.co/rGTZm2mB/IMG.jpg",
    IMGBB_API_KEY: process.env.IMGBB_API_KEY || ""
};

console.log('✅ tion loaded successfully from environment variables');
console.log('📊 Prices - Binance:', CONFIG.SUBSCRIPTION_PRICES.binance);
console.log('📊 Prices - Bank:', CONFIG.SUBSCRIPTION_PRICES.bank);

// 🚀 تهيئة Firebase أولاً
(async () => {
    console.log('🔄 جاري تهيئة Firebase...');
    const firebaseReady = await initializeFirebase();
    
    if (!firebaseReady) {
        console.log('❌ فشل تهيئة Firebase، إيقاف البوت');
        console.log('💡 Please check Firebase tion in Render Environment Variables');
        process.exit(1);
    }
    
    console.log('✅ Firebase initialization completed successfully');
})();

// 🚀 INITIALIZE BOT
const { Telegraf, Markup, session } = require('telegraf');
const axios = require('axios');
const express = require('express');

// التحقق من وجود توكن البوت
if (!CONFIG.BOT_TOKEN) {
    console.error('❌ BOT_TOKEN is required! Please set it in Render Environment Variables');
    process.exit(1);
}

const bot = new Telegraf(CONFIG.BOT_TOKEN);

// 🌐 HEALTH CHECK SERVER FOR RENDER
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Middleware للتحقق من صحة الطلبات
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path} - ${new Date().toISOString()}`);
    next();
});

app.get('/', (req, res) => {
    res.json({ 
        status: 'OK', 
        version: CONFIG.VERSION,
        timestamp: new Date().toISOString(),
        message: 'AI Goal Predictor Bot is running...',
        developer: CONFIG.DEVELOPER,
        environment: process.env.NODE_ENV || 'production',
        uptime: process.uptime()
    });
});

// 🔄 KEEP ALIVE ENDPOINT FOR RENDER
app.get('/keep-alive', (req, res) => {
    res.json({ 
        status: 'ALIVE', 
        timestamp: new Date().toISOString(),
        message: 'Bot is alive and running',
        uptime: process.uptime(),
        memory: process.memoryUsage()
    });
});

// 🔍 Health check endpoint for Render
app.get('/health', (req, res) => {
    const healthStatus = {
        status: 'healthy',
        timestamp: new Date().toISOString(),
        bot: bot != null ? 'running' : 'stopped',
        firebase: db != null ? 'connected' : 'disconnected',
        version: CONFIG.VERSION
    };
    res.json(healthStatus);
});

// 🔧 Ping endpoint
app.get('/ping', (req, res) => {
    res.send('pong');
});

// 🛑 Error handling middleware
app.use((err, req, res, next) => {
    console.error('Server error:', err);
    res.status(500).json({ error: 'Internal server error' });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

const server = app.listen(PORT, '0.0.0.0', () => {
    console.log(`🌐 Health check server running on port ${PORT}`);
    console.log(`🔄 Keep alive endpoint: http://0.0.0.0:${PORT}/keep-alive`);
    console.log(`🔍 Health check: http://0.0.0.0:${PORT}/health`);
});

// 🕒 REAL-TIME CLOCK MANAGEMENT SYSTEM - NEW
class RealTimeClock {
    constructor() {
        this.lastUpdate = Date.now();
        this.updateInterval = 1000; // تحديث كل ثانية
        this.startClock();
    }

    // 🆕 دالة للحصول على الوقت الحقيقي بصيغة 12 ساعة
    getCurrentTime() {
        const now = new Date();
        const saudiTime = new Date(now.getTime() + (3 * 60 * 60 * 1000)); // توقيت السعودية +3
        
        let hours = saudiTime.getHours();
        let minutes = saudiTime.getMinutes();
        let seconds = saudiTime.getSeconds();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        
        // تحويل إلى 12 ساعة
        hours = hours % 12;
        hours = hours ? hours : 12; // الساعة 0 تصبح 12
        
        // إضافة صفر أمام الأرقام المفردة
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        
        return `${hours}:${minutes}:${seconds} ${ampm}`;
    }

    // 🆕 دالة للحصول على الوقت مع التاريخ
    getCurrentDateTime() {
        const now = new Date();
        const saudiTime = new Date(now.getTime() + (3 * 60 * 60 * 1000));
        
        const date = saudiTime.toLocaleDateString('ar-SA');
        const time = this.getCurrentTime();
        
        return `${date} - ${time}`;
    }

    startClock() {
        setInterval(() => {
            this.lastUpdate = Date.now();
        }, this.updateInterval);
    }
}

// 🔄 DYNAMIC ALGORITHM MANAGEMENT SYSTEM - NEW
class DynamicAlgorithm {
    constructor() {
        this.algorithmPatterns = [
            {
                name: "النمط الهجومي",
                goalThreshold: 0.4,
                reasoning: "الهجوم المركز والضغط المستمر يشيران إلى فرص تهديفية عالية"
            },
            {
                name: "النمط الدفاعي", 
                goalThreshold: 0.7,
                reasoning: "التركيز الدفاعي والتنظيم التكتيكي يحدان من الفرص التهديفية"
            },
            {
                name: "النمط المتوازن",
                goalThreshold: 0.55,
                reasoning: "التوازن بين الهجوم والدفاع يخلق فرصاً محدودة ولكنها عالية الجودة"
            },
            {
                name: "النمط السريع",
                goalThreshold: 0.45,
                reasoning: "التحولات السريعة والهجمات المرتدة تزيد من فرص التسجيل"
            },
            {
                name: "النمط التكتيكي",
                goalThreshold: 0.6,
                reasoning: "التركيز على التمريرات القصيرة والتحكم في rhythm المباراة"
            }
        ];
        
        this.currentPatternIndex = 0;
        this.patternChangeInterval = 20000; // تغيير كل 20 ثانية
        this.startPatternRotation();
    }

    startPatternRotation() {
        setInterval(() => {
            this.currentPatternIndex = (this.currentPatternIndex + 1) % this.algorithmPatterns.length;
            console.log(`🔄 تغيير النمط الخوارزمي إلى: ${this.algorithmPatterns[this.currentPatternIndex].name}`);
        }, this.patternChangeInterval);
    }

    getCurrentPattern() {
        return this.algorithmPatterns[this.currentPatternIndex];
    }

    generatePrediction(userId) {
        const pattern = this.getCurrentPattern();
        const randomValue = Math.random();
        const isGoal = randomValue > pattern.goalThreshold;
        
        // حساب الاحتمالية بناءً على النمط الحالي
        const baseProbability = isGoal ? 
            Math.floor((1 - randomValue) * 40) + 60 : // 60%-99% للهدف
            Math.floor(randomValue * 40) + 60; // 60%-99% لعدم الهدف
        
        const realTimeClock = new RealTimeClock();
        
        return {
            type: isGoal ? '⚽ GOAL' : '🛑 NO GOAL',
            probability: baseProbability,
            confidence: Math.floor(Math.random() * 20) + 80, // 80%-99%
            reasoning: isGoal ? 
                `🔥 ${pattern.reasoning} بنسبة ${baseProbability}%` :
                `🛡️ ${pattern.reasoning} بنسبة ${baseProbability}%`,
            timestamp: realTimeClock.getCurrentTime(),
            algorithm: `v${CONFIG.VERSION} - ${pattern.name}`,
            pattern: pattern.name
        };
    }
}

// 🔥 ENHANCED FIREBASE MANAGER - COMPLETELY UPDATED
class FirebaseManager {
    constructor() {
        this.db = db; // استخدام db الخارجي
        this.initialized = false;
    }

    async init() {
        try {
            // الانتظار للتأكد من اتصال Firebase
            if (!this.db) {
                console.log('⚠️ جاري انتظار اتصال Firebase...');
                await new Promise(resolve => setTimeout(resolve, 2000));
            }

            // اختبار الاتصال
            await this.db.collection('system').doc('status').set({
                started_at: new Date().toISOString(),
                version: CONFIG.VERSION,
                status: 'running',
                environment: process.env.NODE_ENV || 'production'
            });
            
            this.initialized = true;
            console.log('✅ Firebase Manager initialized successfully');
        } catch (error) {
            console.log('❌ Firebase Manager initialization failed:', error.message);
            this.initialized = false;
        }
    }

    // 🔄 دوال إدارة المستخدمين في Firestore
    async getUser(userId) {
        try {
            if (!this.initialized) {
                console.log('⚠️ جاري انتظار تهيئة Firebase Manager...');
                await this.init();
            }
            
            const userDoc = await this.db.collection('users').doc(userId.toString()).get();
            if (userDoc.exists) {
                return userDoc.data();
            }
            return null;
        } catch (error) {
            console.error('Get user error:', error);
            throw error;
        }
    }

    async saveUser(userId, userData) {
        try {
            if (!this.initialized) {
                await this.init();
            }

            const completeUserData = {
                user_id: userId,
                username: userData.username || 'Unknown',
                onexbet: userData.onexbet || '',
                country: userData.country || '',
                free_attempts: userData.free_attempts || 0,
                subscription_status: userData.subscription_status || 'free',
                subscription_type: userData.subscription_type || 'none',
                subscription_start_date: userData.subscription_start_date || null,
                subscription_end_date: userData.subscription_end_date || null,
                joined_at: userData.joined_at || new Date().toISOString(),
                total_predictions: userData.total_predictions || 0,
                correct_predictions: userData.correct_predictions || 0,
                wins: userData.wins || 0,
                losses: userData.losses || 0,
                total_bets: userData.total_bets || 0,
                total_profit: userData.total_profit || 0,
                last_updated: new Date().toISOString(),
                algorithm_linked: userData.algorithm_linked || true,
                last_algorithm_check: userData.last_algorithm_check || new Date().toISOString(),
                // 🆕 حقول جديدة لإدارة الجلسات
                active_session: true,
                last_login: new Date().toISOString(),
                login_count: (userData.login_count || 0) + 1,
                environment: process.env.NODE_ENV || 'production'
            };

            await this.db.collection('users').doc(userId.toString()).set(completeUserData, { merge: true });
            console.log(`✅ User ${userId} saved to Firebase`);
            return true;
        } catch (error) {
            console.error('Save user error:', error);
            throw error;
        }
    }

    async getUserByOneXBet(onexbet) {
        try {
            if (!this.initialized) {
                await this.init();
            }
            
            const usersSnapshot = await this.db.collection('users')
                .where('onexbet', '==', onexbet)
                .limit(1)
                .get();
            
            if (!usersSnapshot.empty) {
                return usersSnapshot.docs[0].data();
            }
            return null;
        } catch (error) {
            console.error('Get user by onexbet error:', error);
            throw error;
        }
    }

    async getAllUsers() {
        try {
            if (!this.initialized) {
                await this.init();
            }
            
            const usersSnapshot = await this.db.collection('users').get();
            return usersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        } catch (error) {
            console.error('Get all users error:', error);
            throw error;
        }
    }

    async searchUsers(query) {
        try {
            if (!this.initialized) {
                await this.init();
            }
            
            const users = await this.getAllUsers();
            const lowerQuery = query.toLowerCase();
            
            return users.filter(user => 
                (user.user_id && user.user_id.toString().includes(query)) ||
                (user.username && user.username.toLowerCase().includes(lowerQuery)) ||
                (user.onexbet && user.onexbet.toString().includes(query))
            );
        } catch (error) {
            console.error('Search users error:', error);
            throw error;
        }
    }

    // 🆕 دالة جديدة: البحث عن المستخدمين النشطين
    async getActiveUsers() {
        try {
            if (!this.initialized) {
                await this.init();
            }
            
            const users = await this.getAllUsers();
            return users.filter(user => user.active_session === true);
        } catch (error) {
            console.error('Get active users error:', error);
            throw error;
        }
    }

    // 🆕 دالة جديدة: تحديث حالة الجلسة
    async updateUserSession(userId, active) {
        try {
            if (!this.initialized) {
                await this.init();
            }
            
            await this.db.collection('users').doc(userId.toString()).update({
                active_session: active,
                last_login: active ? new Date().toISOString() : null
            });
            return true;
        } catch (error) {
            console.error('Update user session error:', error);
            throw error;
        }
    }

    // 🔄 دوال إدارة الإعدادات
    async getSettings() {
        try {
            // 🔧 الإصلاح: الانتظار إذا لم تكتمل التهيئة
            if (!this.initialized) {
                console.log('⏳ جاري انتظار تهيئة Firebase Manager...');
                await this.init(); // انتظر التهيئة أولاً
            }
            
            if (!this.initialized) {
                throw new Error('Firebase not initialized');
            }
            
            const settingsDoc = await this.db.collection('settings').doc('config').get();
            if (settingsDoc.exists) {
                return settingsDoc.data();
            }
            
            // الإعدادات الافتراضية من CONFIG
            const defaultSettings = {
                prices: { 
                    binance: { ...CONFIG.SUBSCRIPTION_PRICES.binance },
                    bank: { ...CONFIG.SUBSCRIPTION_PRICES.bank }
                },
                payment_links: { 
                    binance: { ...CONFIG.PAYMENT_LINKS.binance },
                    bank: { ...CONFIG.PAYMENT_LINKS.bank }
                },
                maintenance_mode: false,
                updated_at: new Date().toISOString(),
                environment: process.env.NODE_ENV || 'production'
            };
            
            await this.db.collection('settings').doc('config').set(defaultSettings);
            return defaultSettings;
        } catch (error) {
            console.error('Get settings error:', error);
            throw error;
        }
    }

    async updateSettings(newSettings) {
        try {
            if (!this.initialized) {
                await this.init();
            }
            
            const updatedSettings = {
                ...newSettings,
                updated_at: new Date().toISOString(),
                environment: process.env.NODE_ENV || 'production'
            };

            await this.db.collection('settings').doc('config').set(updatedSettings, { merge: true });
            return updatedSettings;
        } catch (error) {
            console.error('Update settings error:', error);
            throw error;
        }
    }

    async setMaintenanceMode(enabled) {
        try {
            const settings = await this.getSettings();
            settings.maintenance_mode = enabled;
            await this.updateSettings(settings);
            return true;
        } catch (error) {
            console.error('Set maintenance mode error:', error);
            throw error;
        }
    }

    // 🔄 دوال إدارة المدفوعات
    async addPayment(paymentData) {
        try {
            if (!this.initialized) {
                await this.init();
            }
            
            const paymentId = Date.now().toString();
            const fullPaymentData = {
                ...paymentData,
                id: paymentId,
                status: 'pending',
                timestamp: new Date().toISOString(),
                environment: process.env.NODE_ENV || 'production'
            };

            await this.db.collection('payments').doc(paymentId).set(fullPaymentData);
            return paymentId;
        } catch (error) {
            console.error('Add payment error:', error);
            throw error;
        }
    }

    async getPayment(paymentId) {
        try {
            if (!this.initialized) {
                await this.init();
            }
            
            const paymentDoc = await this.db.collection('payments').doc(paymentId).get();
            if (paymentDoc.exists) {
                return paymentDoc.data();
            }
            return null;
        } catch (error) {
            console.error('Get payment error:', error);
            throw error;
        }
    }

    async updatePayment(paymentId, updates) {
        try {
            if (!this.initialized) {
                await this.init();
            }
            
            await this.db.collection('payments').doc(paymentId).update(updates);
            return true;
        } catch (error) {
            console.error('Update payment error:', error);
            throw error;
        }
    }

    async getAllPayments() {
        try {
            if (!this.initialized) {
                await this.init();
            }
            
            const paymentsSnapshot = await this.db.collection('payments').get();
            return paymentsSnapshot.docs.map(doc => doc.data());
        } catch (error) {
            console.error('Get all payments error:', error);
            throw error;
        }
    }

    async getPendingPayments() {
        try {
            const payments = await this.getAllPayments();
            return payments.filter(p => p.status === 'pending');
        } catch (error) {
            console.error('Get pending payments error:', error);
            throw error;
        }
    }

    // 🔄 دوال الإحصائيات
    async getAllStats() {
        try {
            if (!this.initialized) {
                await this.init();
            }
            
            const users = await this.getAllUsers();
            const payments = await this.getAllPayments();
            
            const activeUsers = users.filter(u => u.subscription_status === 'active');
            const freeUsers = users.filter(u => u.subscription_status === 'free');
            const onlineUsers = users.filter(u => u.active_session === true);
            
            const totalPredictions = users.reduce((sum, user) => sum + (user.total_predictions || 0), 0);
            const totalProfit = users.reduce((sum, user) => sum + (user.total_profit || 0), 0);
            const totalBets = users.reduce((sum, user) => sum + (user.total_bets || 0), 0);
            
            return {
                totalUsers: users.length,
                activeUsers: activeUsers.length,
                freeUsers: freeUsers.length,
                onlineUsers: onlineUsers.length,
                totalPredictions,
                totalProfit,
                totalBets,
                totalPayments: payments.length,
                pendingPayments: payments.filter(p => p.status === 'pending').length,
                environment: process.env.NODE_ENV || 'production'
            };
        } catch (error) {
            console.error('Get all stats error:', error);
            throw error;
        }
    }

    // 🔄 دالة النسخ الاحتياطي
    async backupData() {
        try {
            if (!this.initialized) {
                await this.init();
            }
            
            const backupData = {
                users: await this.getAllUsers(),
                payments: await this.getAllPayments(),
                settings: await this.getSettings(),
                timestamp: new Date().toISOString(),
                environment: process.env.NODE_ENV || 'production'
            };
            
            await this.db.collection('backups').doc(Date.now().toString()).set(backupData);
            return backupData;
        } catch (error) {
            console.error('Backup error:', error);
            throw error;
        }
    }
}

// INITIALIZE FIREBASE MANAGER بعد تأخير بسيط
let firebaseManager;
setTimeout(async () => {
    console.log('🔄 جاري تهيئة Firebase Manager...');
    firebaseManager = new FirebaseManager();
    await firebaseManager.init();
    console.log('✅ Firebase Manager ready');
}, 3000);

// 🔐 نظام التحقق من الاشتراك في القناة عبر Telegram API فقط
async function checkChannelSubscription(userId) {
    try {
        const chatMember = await bot.telegram.getChatMember(CONFIG.CHANNEL_ID, userId);
        const isSubscribed = chatMember.status === 'member' || 
                           chatMember.status === 'administrator' || 
                           chatMember.status === 'creator';
        
        return isSubscribed;
    } catch (error) {
        console.error('Error checking channel subscription:', error);
        return false;
    }
}

// 💾 ENHANCED DATABASE MANAGER - USING FIREBASE ONLY
class EnhancedDatabaseManager {
    constructor() {
        this.maintenanceMode = false;
        this.firebaseManager = null;
    }

    async init() {
        try {
            // الانتظار قليلاً قبل محاولة جلب الإعدادات
            await new Promise(resolve => setTimeout(resolve, 4000));
            
            // تأكد من أن firebaseManager جاهز
            if (!firebaseManager) {
                firebaseManager = new FirebaseManager();
                await firebaseManager.init();
            }
            
            this.firebaseManager = firebaseManager;
            const settings = await this.firebaseManager.getSettings();
            this.maintenanceMode = settings.maintenance_mode || false;
            console.log(`✅ Database Manager initialized with Firebase`);
        } catch (error) {
            console.log('❌ Database Manager initialization failed:', error.message);
            // لا توقف البرنامج، فقط حاول لاحقاً
        }
    }

    async getUser(userId) {
        if (!this.firebaseManager) {
            await this.init();
        }
        return await this.firebaseManager.getUser(userId);
    }

    async saveUser(userId, userData) {
        if (!this.firebaseManager) {
            await this.init();
        }
        return await this.firebaseManager.saveUser(userId, userData);
    }

    async getSettings() {
        if (!this.firebaseManager) {
            await this.init();
        }
        return await this.firebaseManager.getSettings();
    }

    async updateSettings(newSettings) {
        if (!this.firebaseManager) {
            await this.init();
        }
        return await this.firebaseManager.updateSettings(newSettings);
    }

    async getAllUsers() {
        if (!this.firebaseManager) {
            await this.init();
        }
        return await this.firebaseManager.getAllUsers();
    }

    async addPayment(paymentData) {
        if (!this.firebaseManager) {
            await this.init();
        }
        return await this.firebaseManager.addPayment(paymentData);
    }

    async updatePayment(paymentId, updates) {
        if (!this.firebaseManager) {
            await this.init();
        }
        return await this.firebaseManager.updatePayment(paymentId, updates);
    }

    async getPayment(paymentId) {
        if (!this.firebaseManager) {
            await this.init();
        }
        return await this.firebaseManager.getPayment(paymentId);
    }

    async getAllPayments() {
        if (!this.firebaseManager) {
            await this.init();
        }
        return await this.firebaseManager.getAllPayments();
    }

    async getPendingPayments() {
        if (!this.firebaseManager) {
            await this.init();
        }
        return await this.firebaseManager.getPendingPayments();
    }

    async getUserByOneXBet(onexbet) {
        if (!this.firebaseManager) {
            await this.init();
        }
        return await this.firebaseManager.getUserByOneXBet(onexbet);
    }

    // 🆕 دوال جديدة لإدارة الجلسات
    async getActiveUsers() {
        if (!this.firebaseManager) {
            await this.init();
        }
        return await this.firebaseManager.getActiveUsers();
    }

    async updateUserSession(userId, active) {
        if (!this.firebaseManager) {
            await this.init();
        }
        return await this.firebaseManager.updateUserSession(userId, active);
    }

    isMaintenanceMode() {
        return this.maintenanceMode;
    }

    async setMaintenanceMode(enabled) {
        if (!this.firebaseManager) {
            await this.init();
        }
        await this.firebaseManager.setMaintenanceMode(enabled);
        this.maintenanceMode = enabled;
        return true;
    }

    async searchUsers(query) {
        if (!this.firebaseManager) {
            await this.init();
        }
        return await this.firebaseManager.searchUsers(query);
    }

    async backupData() {
        if (!this.firebaseManager) {
            await this.init();
        }
        return await this.firebaseManager.backupData();
    }

    async getAllStats() {
        if (!this.firebaseManager) {
            await this.init();
        }
        return await this.firebaseManager.getAllStats();
    }
}

// INITIALIZE ENHANCED DATABASE MANAGER بعد تأخير إضافي
let dbManager;
setTimeout(async () => {
    console.log('🔄 جاري تهيئة Database Manager...');
    dbManager = new EnhancedDatabaseManager();
    await dbManager.init();
    console.log('✅ Database Manager ready');
}, 5000);

// 📊 DYNAMIC STATISTICS SYSTEM
class DynamicStatistics {
    constructor() {
        this.totalUsers = 78542;
        this.activeUsers = 300;
        this.lastCallTime = Date.now();
        this.callCount = 0;
    }

    getStats() {
        const now = Date.now();
        
        // زيادة عدد المستخدمين النشطين عند كل طلب مباشرة
        this.callCount++;
        
        // زيادة عشوائية بين 1-5 عند كل طلب
        const randomIncrement = Math.floor(Math.random() * 5) + 1;
        this.activeUsers += randomIncrement;
        
        // الحد الأقصى 5000 ثم العودة لـ 300
        if (this.activeUsers > 5000) {
            this.activeUsers = 300;
        }
        
        // تحديث الوقت عند كل طلب
        this.lastCallTime = now;

        return {
            totalUsers: this.totalUsers,
            activeUsers: this.activeUsers
        };
    }
}

// 🧠 SMART GOAL PREDICTION ENGINE - UPDATED WITH DYNAMIC ALGORITHM
class GoalPredictionAI {
    constructor() {
        this.algorithmVersion = "16.1";
        this.dynamicAlgorithm = new DynamicAlgorithm();
        this.realTimeClock = new RealTimeClock();
    }

    generateSmartPrediction(userId) {
        return this.dynamicAlgorithm.generatePrediction(userId);
    }

    generateNextPrediction(userId) {
        return this.generateSmartPrediction(userId);
    }
}

// 📤 IMGBB UPLOADER - ENHANCED
class ImgBBUploader {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = 'https://api.imgbb.com/1/upload';
    }

    async uploadImage(imageBuffer) {
        try {
            const FormData = require('form-data');
            const formData = new FormData();
            
            formData.append('key', this.apiKey);
            formData.append('image', imageBuffer.toString('base64'));
            
            const response = await axios.post(this.baseUrl, formData, {
                headers: {
                    ...formData.getHeaders()
                },
                timeout: 30000
            });
            
            if (response.data && response.data.success) {
                return {
                    success: true,
                    url: response.data.data.url,
                    display_url: response.data.data.display_url,
                    thumb_url: response.data.data.thumb?.url || response.data.data.url,
                    delete_url: response.data.data.delete_url
                };
            } else {
                return {
                    success: false,
                    error: 'Upload failed'
                };
            }
        } catch (error) {
            console.error('ImgBB upload error:', error);
            return {
                success: false,
                error: error.message
            };
        }
    }

    async uploadImageFromUrl(imageUrl) {
        try {
            const response = await axios.get(imageUrl, { 
                responseType: 'arraybuffer',
                timeout: 30000
            });
            const imageBuffer = Buffer.from(response.data);
            return await this.uploadImage(imageBuffer);
        } catch (error) {
            console.error('ImgBB upload from URL error:', error);
            return {
                success: false,
                error: error.message
            };
        }
    }
}

// INITIALIZE SYSTEMS بعد التأكد من اكتمال التهيئة
let goalAI, dynamicStats, imgbbUploader, realTimeClock;

setTimeout(() => {
    goalAI = new GoalPredictionAI();
    dynamicStats = new DynamicStatistics();
    imgbbUploader = new ImgBBUploader(CONFIG.IMGBB_API_KEY);
    realTimeClock = new RealTimeClock();
    console.log('✅ All systems initialized successfully');
}, 6000);

// 📢 CHANNEL NOTIFICATION SYSTEM - MODIFIED TO ONLY SEND SUBSCRIPTIONS
class ChannelNotifier {
    constructor(bot, channelId) {
        this.bot = bot;
        this.channelId = channelId;
    }

    async sendSubscriptionNotification(userData, subscriptionType, amount, paymentSystem) {
        try {
            const systemText = paymentSystem === 'binance' ? 'باينانس' : 'تحويل بنكي';
            const subscriptionDisplayName = getSubscriptionDisplayName(subscriptionType);
            
            const message = `
🎉 *اشتراك جديد في البوت - ${systemText}*

👤 *المستخدم:* ${userData.username}
🔐 *الحساب:* ${userData.onexbet}
📦 *الباقة:* ${subscriptionDisplayName}
💰 *المبلغ:* ${amount}$
💳 *النظام:* ${systemText}
            `;

            await this.bot.telegram.sendMessage(this.channelId, message, {
                parse_mode: 'Markdown'
            });
        } catch (error) {
            console.error('Error sending subscription notification:', error);
        }
    }

    // ❌ REMOVED PREDICTION NOTIFICATION METHOD - NO ANALYTICS TO CHANNEL
}

const channelNotifier = new ChannelNotifier(bot, CONFIG.CHANNEL_ID);

// 🎯 BOT SETUP
bot.use(session({ 
    defaultSession: () => ({ 
        step: 'start',
        userData: {},
        verificationCode: null,
        accountId: null,
        paymentType: null,
        paymentSystem: null,
        adminMode: false,
        adminStep: null,
        awaitingPaymentAccount: false,
        paymentAccount: null,
        currentBet: 0,
        originalBet: 0,
        totalProfit: 0,
        awaitingBetAmount: false,
        searchQuery: null,
        broadcastMessage: null,
        adminSettingsStep: null,
        selectedPaymentType: null,
        editingSubscriptionType: null,
        adminPaymentSystem: null,
        awaitingBankImage: false,
        editingBankStep: null,
        bankEditData: {},
        checkingChannel: false,
        country: null,
        awaitingCountry: false,
        lastPredictionTime: null,
        predictionButtons: null,
        // 🆕 حقول جديدة لإدارة الجلسات
        userLoggedOut: false,
        newAccountFlow: false
    })
}));

// 🎯 لوحة المفاتيح الثابتة - UPDATED FOR DUAL PAYMENT
const getMainKeyboard = () => {
    return Markup.keyboard([
        ['🎯 جلب التحليل', '📊 إحصائياتي'],
        ['💳 الاشتراكات', '👥 إحصائيات البوت'],
        ['👤 حالة الاشتراك', '🆘 الدعم الفني']
    ]).resize();
};

const getLoginKeyboard = () => {
    return Markup.keyboard([
        ['🔐 إدخال رقم الحساب']
    ]).resize();
};

// 🆕 لوحة اختيار طريقة الدفع الجديدة
const getPaymentMethodKeyboard = () => {
    return Markup.keyboard([
        ['💳 باينانس', '🏦 تحويل بنكي'],
        ['🔙 الرجوع للقائمة']
    ]).resize();
};

const getSubscriptionKeyboard = () => {
    return Markup.keyboard([
        ['💰 أسبوعي', '💰 شهري'],
        ['💰 3 أشهر', '💰 سنوي'],
        ['🔙 الرجوع للقائمة']
    ]).resize();
};

// 🆕 لوحة اختيار الدول العربية
const getCountriesKeyboard = () => {
    return Markup.keyboard([
        ['🇸🇦 السعودية', '🇦🇪 الإمارات', '🇶🇦 قطر'],
        ['🇰🇼 الكويت', '🇧🇭 البحرين', '🇴🇲 عمان'],
        ['🇾🇪 اليمن', '🇮🇶 العراق', '🇸🇾 سوريا'],
        ['🇯🇴 الأردن', '🇱🇧 لبنان', '🇪🇬 مصر'],
        ['🇩🇿 الجزائر', '🇲🇦 المغرب', '🇹🇳 تونس'],
        ['🇱🇾 ليبيا', '🇸🇩 السودان', '🇸🇸 جنوب السودان'],
        ['🇵🇸 فلسطين', '🇲🇷 موريتانيا', '🇩🇯 جيبوتي'],
        ['🇸🇴 الصومال', '🇰🇲 جزر القمر']
    ]).resize();
};

// 🆕 لوحة الخيارات الإضافية
const getAdditionalOptionsKeyboard = () => {
    return Markup.keyboard([
        ['🔓 فتح حساب جديد', '🚪 الخروج من الحساب'],
        ['🔙 الرجوع للقائمة']
    ]).resize();
};

// 🔄 UPDATE ADMIN KEYBOARD WITH DATA MANAGEMENT
const getAdminMainKeyboard = () => {
    return Markup.keyboard([
        ['📊 إحصائيات النظام', '👥 إدارة المستخدمين'],
        ['💰 طلبات الدفع', '⚙️ الإعدادات'],
        ['📢 إرسال إشعار', '🔍 بحث عن مستخدم'],
        ['💾 نسخ احتياطي', '📥 استعادة البيانات'],
        ['🔧 قفل/فتح البوت', '🔙 الخروج من الإدمن']
    ]).resize();
};

const getAdminUsersKeyboard = () => {
    return Markup.keyboard([
        ['📋 قائمة المستخدمين', '✅ المشتركين النشطين'],
        ['🆓 المستخدمين المجانين', '📈 إحصائيات المستخدمين'],
        ['🔙 رجوع']
    ]).resize();
};

const getAdminPaymentsKeyboard = () => {
    return Markup.keyboard([
        ['📥 الطلبات المعلقة', '✅ الطلبات المقبولة'],
        ['❌ الطلبات المرفوضة', '📋 كل الطلبات'],
        ['🔙 رجوع']
    ]).resize();
};

const getAdminSettingsKeyboard = () => {
    return Markup.keyboard([
        ['💰 تعديل الأسعار والدفع', '⚙️ الإعدادات العامة'],
        ['🔄 إعادة التعيين', '🔙 رجوع']
    ]).resize();
};

const getAdminPaymentTypesKeyboard = () => {
    return Markup.keyboard([
        ['💰 أسبوعي', '💰 شهري'],
        ['💰 3 أشهر', '💰 سنوي'],
        ['🔙 رجوع']
    ]).resize();
};

// 🆕 لوحة اختيار نظام الدفع في الإدمن
const getAdminPaymentSystemKeyboard = () => {
    return Markup.keyboard([
        ['💳 نظام باينانس', '🏦 نظام التحويل البنكي'],
        ['🔙 رجوع']
    ]).resize();
};

// 🛠️ UTILITY FUNCTIONS
function calculateRemainingDays(endDate) {
    try {
        const end = new Date(endDate);
        const now = new Date();
        const diffTime = end - now;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays > 0 ? diffDays : 0;
    } catch (error) {
        return 0;
    }
}

function addSubscriptionDays(startDate, type) {
    try {
        const start = new Date(startDate);
        const types = {
            week: 7,
            month: 30,
            three_months: 90,
            year: 365
        };
        start.setDate(start.getDate() + types[type]);
        return start.toISOString();
    } catch (error) {
        const newDate = new Date();
        newDate.setDate(newDate.getDate() + 30);
        return newDate.toISOString();
    }
}

// 🆕 دالة مساعدة للحصول على مدة الاشتراك
function getSubscriptionDuration(type) {
    const durations = {
        'week': '7 أيام',
        'month': '30 يوماً', 
        'three_months': '90 يوماً',
        'year': '365 يوماً'
    };
    return durations[type] || 'غير محدد';
}

// 🆕 دالة لإنشاء وصف البنك تلقائياً
function generateBankDescription(subscriptionType, price, accountNumber) {
    const typeNames = {
        'week': 'أسبوعية',
        'month': 'شهرية',
        'three_months': '3 أشهر',
        'year': 'سنوية'
    };
    
    return `🔹 تحويل بنكي - باقة ${typeNames[subscriptionType]}\n💳 رقم الحساب: ${accountNumber}\n🏦 البنك: البنك الكريمي\n💰 المبلغ: ${price}$\n💵 العملة: الدولار الأمريكي\n\n📋 الشروط:\n• يجب التحويل بالدولار الأمريكي\n• إرفاق صورة إثبات الدفع\n• كتابة رقم حساب 1xBet الخاص بك`;
}

// 🆕 دالة للحصول على اسم العرض للباقة - الإصلاح الرئيسي هنا
function getSubscriptionDisplayName(type) {
    const names = {
        'week': 'أسبوعي',
        'month': 'شهري', 
        'three_months': '3 أشهر',
        'year': 'سنوي'
    };
    return names[type] || type;
}

// 🆕 دالة للتحقق من انتهاء الخوارزمية (5 دقائق)
function isAlgorithmExpired(lastCheckTime) {
    if (!lastCheckTime) return true;
    const now = new Date();
    const lastCheck = new Date(lastCheckTime);
    const diffMinutes = (now - lastCheck) / (1000 * 60);
    return diffMinutes > 5; // 5 دقائق
}

// 🆕 دالة لإعادة ربط الخوارزمية
async function reconnectAlgorithm(ctx, userData) {
    const userId = ctx.from.id.toString();
    
    // تحديث وقت الربط
    userData.algorithm_linked = true;
    userData.last_algorithm_check = new Date().toISOString();
    await dbManager.saveUser(userId, userData);
    
    // إرسال رسالة إعادة الربط مع إيموجي متحرك
    const reconnectingMessage = await ctx.replyWithMarkdown(
        '🔄 *جاري إعادة ربط الخوارزمية...*\n\n' +
        '⚡ جاري تفعيل نظام الذكاء الاصطناعي...\n' +
        '🔗 جاري إعادة الاتصال بالسيرفر...\n' +
        '🎯 جاري تحميل بيانات التحليل...\n\n' +
        '⏳ قد تستغرق العملية بضع ثواني...'
    );

    // محاكاة الانتظار مع رسائل متحركة
    const loadingEmojis = ['🔄', '⚡', '🔗', '🎯', '🤖'];
    for (let i = 0; i < 5; i++) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        try {
            await ctx.telegram.editMessageText(
                ctx.chat.id,
                reconnectingMessage.message_id,
                null,
                `${loadingEmojis[i]} *جاري إعادة ربط الخوارزمية...*\n\n` +
                '⚡ جاري تفعيل نظام الذكاء الاصطناعي...\n' +
                '🔗 جاري إعادة الاتصال بالسيرفر...\n' +
                '🎯 جاري تحميل بيانات التحليل...\n\n' +
                `📍 *الدولة:* ${userData.country || 'غير محدد'}\n` +
                `🔐 *الحساب:* \`${userData.onexbet}\``,
                { parse_mode: 'Markdown' }
            );
        } catch (editError) {
            console.log('Error editing reconnection message:', editError);
        }
    }

    // حذف رسالة الانتظار
    await ctx.deleteMessage(reconnectingMessage.message_id);
    
    // إرسال رسالة التأكيد
    await ctx.replyWithMarkdown(
        '✅ *تم إعادة ربط الخوارزمية بنجاح!*\n\n' +
        `📍 *الدولة:* ${userData.country || 'غير محدد'}\n` +
        `🔐 *الحساب:* \`${userData.onexbet}\`\n` +
        `🔄 *آخر تحديث:* ${realTimeClock.getCurrentTime()}\n\n` +
        '🎯 *يمكنك الآن استخدام زر "جلب التحليل" للحصول على التوقعات*',
        getMainKeyboard()
    );
}

// 🆕 دالة جديدة: إدارة خروج المستخدم من حسابه
async function handleUserLogout(ctx) {
    try {
        const userId = ctx.from.id.toString();
        const userData = await dbManager.getUser(userId);
        
        if (!userData) {
            await ctx.replyWithMarkdown('❌ *لا يوجد حساب مسجل*', getLoginKeyboard());
            return;
        }

        // تحديث حالة الجلسة في قاعدة البيانات
        await dbManager.updateUserSession(userId, false);
        
        // تحديث الجلسة الحالية
        ctx.session.step = 'start';
        ctx.session.userData = {};
        ctx.session.userLoggedOut = true;
        
        await ctx.replyWithMarkdown(
            '🚪 *تم تسجيل الخروج بنجاح*\n\n' +
            '🔓 يمكنك الآن:\n' +
            '• فتح حساب جديد\n' +
            '• إعادة تسجيل الدخول بحسابك السابق\n' +
            '• أو الخروج من البوت\n\n' +
            '💡 اختر الخيار المناسب:',
            Markup.keyboard([
                ['🔓 فتح حساب جديد', '🔐 إعادة تسجيل الدخول'],
                ['🔙 الرجوع للقائمة']
            ]).resize()
        );
        
    } catch (error) {
        console.error('User logout error:', error);
        await ctx.replyWithMarkdown('❌ *حدث خطأ أثناء تسجيل الخروج*', getMainKeyboard());
    }
}

// 🆕 دالة جديدة: البحث عن الحسابات السابقة للمستخدم
async function findPreviousAccounts(userId) {
    try {
        const allUsers = await dbManager.getAllUsers();
        const currentUser = await dbManager.getUser(userId);
        
        if (!currentUser) return [];
        
        // البحث عن حسابات بنفس رقم الهاتف أو معلومات مشابهة
        const previousAccounts = allUsers.filter(user => 
            user.user_id !== userId && 
            (
                user.username === currentUser.username ||
                (user.onexbet && currentUser.onexbet && user.onexbet === currentUser.onexbet)
            )
        );
        
        return previousAccounts;
    } catch (error) {
        console.error('Find previous accounts error:', error);
        return [];
    }
}

// 🔐 نظام فحص الاشتراك المستمر - NEW FUNCTION
async function requireChannelSubscription(ctx, next) {
    try {
        const userId = ctx.from.id.toString();
        const isSubscribed = await checkChannelSubscription(userId);
        
        if (!isSubscribed) {
            // منع المستخدم من الاستمرار
            await ctx.replyWithMarkdown(
                `❌ *يجب الاشتراك في القناة أولاً*\n\n` +
                `📢 يرجى الاشتراك في القناة:\n` +
                `👉 ${CONFIG.CHANNEL_USERNAME}\n\n` +
                `✅ بعد الاشتراك اضغط على /start للبدء`,
                Markup.inlineKeyboard([
                    [Markup.button.callback('✅ تحقق من الاشتراك', 'check_channel_subscription')]
                ])
            );
            return; // إوقف التنفيذ هنا
        }
        
        // إذا كان مشتركاً، استمر في التنفيذ
        if (next) await next();
    } catch (error) {
        console.error('Channel subscription check error:', error);
    }
}

// 🎯 BOT COMMANDS

bot.start(async (ctx) => {
    try {
        // تأكد من أن dbManager جاهز
        if (!dbManager) {
            dbManager = new EnhancedDatabaseManager();
            await dbManager.init();
        }
        
        const settings = await dbManager.getSettings();
        if (settings.maintenance_mode && ctx.from.id.toString() !== CONFIG.ADMIN_ID) {
            await ctx.replyWithMarkdown('🔧 *البوت تحت الصيانة*\n\n⏰ نعمل على تحسين الخدمة لكم\n🔄 سنعود قريباً بأفضل مما كان\n\n📞 للاستفسار: @GEMZGOOLBOT');
            return;
        }

        const userId = ctx.from.id.toString();
        const userName = ctx.from.first_name;

        // 🔐 فحص الاشتراك في القناة أولاً
        const isSubscribed = await checkChannelSubscription(userId);
        if (!isSubscribed) {
            await ctx.replyWithMarkdown(
                `🔐 *مرحباً ${userName}*\n\n` +
                `📢 *للاستخدام البوت يجب الاشتراك في قناتنا أولاً*\n\n` +
                `👉 ${CONFIG.CHANNEL_USERNAME}\n\n` +
                `✅ بعد الاشتراك اضغط على الزر أدناه للتحقق:`,
                Markup.inlineKeyboard([
                    [Markup.button.callback('✅ تحقق من الاشتراك', 'check_channel_subscription')]
                ])
            );
            return;
        }

        // 🆕 التحقق من وجود جلسة سابقة أو حساب مسجل
        const existingUser = await dbManager.getUser(userId);
        const previousAccounts = await findPreviousAccounts(userId);
        
        if (existingUser && !ctx.session.userLoggedOut) {
            // 🔐 فحص الاشتراك مرة أخرى للتأكد
            const isStillSubscribed = await checkChannelSubscription(userId);
            if (!isStillSubscribed) {
                await ctx.replyWithMarkdown(
                    `❌ *تم إلغاء الاشتراك في القناة*\n\n` +
                    `📢 يرجى الاشتراك مرة أخرى في القناة:\n` +
                    `👉 ${CONFIG.CHANNEL_USERNAME}\n\n` +
                    `✅ بعد الاشتراك اضغط على الزر أدناه للتحقق:`,
                    Markup.inlineKeyboard([
                        [Markup.button.callback('✅ تحقق من الاشتراك', 'check_channel_subscription')]
                    ])
                );
                return;
            }

            // المستخدم مسجل مسبقاً - دخول مباشر
            ctx.session.step = 'verified';
            ctx.session.userData = existingUser;

            // تحديث حالة الجلسة
            await dbManager.updateUserSession(userId, true);

            // التحقق من انتهاء الخوارزمية
            if (isAlgorithmExpired(existingUser.last_algorithm_check)) {
                await ctx.replyWithMarkdown(
                    '🔐 *مرحباً بعودتك!*\n\n' +
                    '⚠️ *انتهت جلسة الخوارزمية*\n\n' +
                    '🔄 تحتاج إلى إعادة ربط الخوارزمية لمتابعة التحليلات\n' +
                    `📍 *الدولة:* ${existingUser.country || 'غير محدد'}\n` +
                    `🔐 *الحساب:* \`${existingUser.onexbet}\`\n\n` +
                    '💡 اضغط على الزر أدناه لإعادة الربط:',
                    Markup.inlineKeyboard([
                        [Markup.button.callback('🔄 إعادة ربط الخوارزمية', 'reconnect_algorithm')]
                    ])
                );
                return;
            }

            const remainingDays = calculateRemainingDays(existingUser.subscription_end_date);
            
            let statusMessage = '';
            if (existingUser.subscription_status === 'active' && remainingDays > 0) {
                statusMessage = `🎉 *مرحباً بعودتك!*\n\n` +
                               `✅ *اشتراكك نشط*\n` +
                               `📍 *الدولة:* ${existingUser.country || 'غير محدد'}\n` +
                               `🔐 الحساب: \`${existingUser.onexbet}\`\n` +
                               `📦 النوع: ${getSubscriptionDisplayName(existingUser.subscription_type)}\n` +
                               `📅 الانتهاء: ${new Date(existingUser.subscription_end_date).toLocaleDateString('ar-EG')}\n` +
                               `⏳ متبقي: ${remainingDays} يوم\n` +
                               `🔄 *آخر تحديث للخوارزمية:* ${new Date(existingUser.last_algorithm_check).toLocaleTimeString('ar-SA')}`;
            } else if (existingUser.free_attempts > 0) {
                statusMessage = `🎉 *مرحباً بعودتك!*\n\n` +
                               `🎯 *محاولات مجانية متاحة*\n` +
                               `📍 *الدولة:* ${existingUser.country || 'غير محدد'}\n` +
                               `🔐 الحساب: \`${existingUser.onexbet}\`\n` +
                               `🆓 محاولات مجانية: ${existingUser.free_attempts}\n` +
                               `🔄 *آخر تحديث للخوارزمية:* ${new Date(existingUser.last_algorithm_check).toLocaleTimeString('ar-SA')}`;
            } else {
                statusMessage = `🎉 *مرحباً بعودتك!*\n\n` +
                               `🚫 *انتهت المحاولات*\n` +
                               `📍 *الدولة:* ${existingUser.country || 'غير محدد'}\n` +
                               `🔐 الحساب: \`${existingUser.onexbet}\`\n` +
                               `💳 يرجى الاشتراك للمتابعة\n` +
                               `🔄 *آخر تحديث للخوارزمية:* ${new Date(existingUser.last_algorithm_check).toLocaleTimeString('ar-SA')}`;
            }

            await ctx.replyWithMarkdown(statusMessage, getMainKeyboard());
            
        } else {
            // 🆕 مستخدم جديد أو مستخدم خرج من حسابه
            if (previousAccounts.length > 0 && !ctx.session.newAccountFlow) {
                // عرض خيار استعادة الحساب السابق
                ctx.session.step = 'account_recovery';
                await ctx.replyWithMarkdown(
                    `🔍 *عثرنا على حساب سابق لك!*\n\n` +
                    `📋 *الحسابات السابقة:*\n` +
                    previousAccounts.map(acc => 
                        `🔐 ${acc.onexbet} - 📍 ${acc.country} - 📅 ${new Date(acc.joined_at).toLocaleDateString('ar-EG')}`
                    ).join('\n') + `\n\n` +
                    `💡 *هل تريد استعادة أحد هذه الحسابات؟*`,
                    Markup.keyboard([
                        ['✅ نعم، استعادة الحساب', '🔓 لا، فتح حساب جديد'],
                        ['🔙 الرجوع للقائمة']
                    ]).resize()
                );
            } else {
                // بدء عملية تسجيل جديدة
                ctx.session.step = 'awaiting_country';
                ctx.session.awaitingCountry = true;
                ctx.session.newAccountFlow = true;

                // إرسال الصورة أولاً
                try {
                    await ctx.replyWithPhoto(CONFIG.START_IMAGE, {
                        caption: `🎉 *مرحباً بك في نظام GOAL Predictor Pro v${CONFIG.VERSION}* 🚀\n\n` +
                                `🤖 *أقوى نظام لتوقع الأهداف بالذكاء الاصطناعي*\n` +
                                `💎 *المطور:* ${CONFIG.DEVELOPER}\n` +
                                `📢 *القناة:* ${CONFIG.CHANNEL}`
                    });
                } catch (photoError) {
                    await ctx.replyWithMarkdown(`🎉 *مرحباً بك في نظام GOAL Predictor Pro v${CONFIG.VERSION}* 🚀`);
                }

                const countryMessage = `
🌍 *اختر دولتك*

🔰 *لربط خوارزمية الذكاء الاصطناعي بحسابك*

📋 *يرجى اختيار دولتك من القائمة:*

🇸🇦 السعودية - 🇦🇪 الإمارات - 🇶🇦 قطر
🇰🇼 الكويت - 🇧🇭 البحرين - 🇴🇲 عمان
🇾🇪 اليمن - 🇮🇶 العراق - 🇸🇾 سوريا
🇯🇴 الأردن - 🇱🇧 لبنان - 🇪🇬 مصر
🇩🇿 الجزائر - 🇲🇦 المغرب - 🇹🇳 تونس
🇱🇾 ليبيا - 🇸🇩 السودان - 🇸🇸 جنوب السودان
🇵🇸 فلسطين - 🇲🇷 موريتانيا - 🇩🇯 جيبوتي
🇸🇴 الصومال - 🇰🇲 جزر القمر

📍 *اختر دولتك للاستمرار:*
                `;

                await ctx.replyWithMarkdown(countryMessage, getCountriesKeyboard());
            }
        }

    } catch (error) {
        console.error('Start command error:', error);
        await ctx.replyWithMarkdown('❌ حدث خطأ في النظام، يرجى المحاولة لاحقاً');
    }
});

// 📝 HANDLE TEXT MESSAGES - UPDATED FOR DUAL PAYMENT AND COUNTRY SELECTION
bot.on('text', async (ctx) => {
    try {
        // تأكد من أن dbManager جاهز
        if (!dbManager) {
            dbManager = new EnhancedDatabaseManager();
            await dbManager.init();
        }
        
        const settings = await dbManager.getSettings();
        if (settings.maintenance_mode && ctx.from.id.toString() !== CONFIG.ADMIN_ID) {
            await ctx.replyWithMarkdown('🔧 *البوت تحت الصيانة*\n\n⏰ نعمل على تحسين الخدمة لكم\n🔄 سنعود قريباً بأفضل مما كان\n\n📞 للاستفسار: @GEMZGOOLBOT');
            return;
        }

        const text = ctx.message.text;
        const session = ctx.session;
        const userId = ctx.from.id.toString();

        // 🆕 معالجة استعادة الحساب السابق
        if (session.step === 'account_recovery') {
            if (text === '✅ نعم، استعادة الحساب') {
                const previousAccounts = await findPreviousAccounts(userId);
                if (previousAccounts.length > 0) {
                    // استعادة أول حساب سابق
                    const previousAccount = previousAccounts[0];
                    
                    // تحديث بيانات المستخدم الحالي
                    previousAccount.user_id = userId;
                    previousAccount.active_session = true;
                    previousAccount.last_login = new Date().toISOString();
                    previousAccount.login_count = (previousAccount.login_count || 0) + 1;
                    
                    await dbManager.saveUser(userId, previousAccount);
                    
                    ctx.session.step = 'verified';
                    ctx.session.userData = previousAccount;
                    ctx.session.userLoggedOut = false;
                    
                    await ctx.replyWithMarkdown(
                        `✅ *تم استعادة حسابك السابق بنجاح!*\n\n` +
                        `🔐 *الحساب:* \`${previousAccount.onexbet}\`\n` +
                        `📍 *الدولة:* ${previousAccount.country}\n` +
                        `📦 *الاشتراك:* ${previousAccount.subscription_status === 'active' ? 'نشط' : 'مجاني'}\n\n` +
                        `🎯 *مرحباً بعودتك!*`,
                        getMainKeyboard()
                    );
                }
                return;
            }
            else if (text === '🔓 لا، فتح حساب جديد') {
                ctx.session.step = 'awaiting_country';
                ctx.session.awaitingCountry = true;
                ctx.session.newAccountFlow = true;
                
                await ctx.replyWithMarkdown(
                    '🌍 *مرحباً بك في عملية فتح حساب جديد*\n\n' +
                    '📍 *الرجاء اختيار دولتك من القائمة:*',
                    getCountriesKeyboard()
                );
                return;
            }
        }

        // 🆕 معالجة خيارات إدارة الحساب
        if (text === '🚪 الخروج من الحساب') {
            await handleUserLogout(ctx);
            return;
        }

        if (text === '🔓 فتح حساب جديد') {
            ctx.session.step = 'awaiting_country';
            ctx.session.awaitingCountry = true;
            ctx.session.newAccountFlow = true;
            ctx.session.userLoggedOut = false;
            
            await ctx.replyWithMarkdown(
                '🌍 *فتح حساب جديد*\n\n' +
                '📍 *الرجاء اختيار دولتك من القائمة:*',
                getCountriesKeyboard()
            );
            return;
        }

        if (text === '🔐 إعادة تسجيل الدخول') {
            const existingUser = await dbManager.getUser(userId);
            if (existingUser) {
                ctx.session.step = 'verified';
                ctx.session.userData = existingUser;
                ctx.session.userLoggedOut = false;
                
                await dbManager.updateUserSession(userId, true);
                
                await ctx.replyWithMarkdown(
                    `✅ *تم إعادة تسجيل الدخول بنجاح!*\n\n` +
                    `🔐 *مرحباً بعودتك*\n` +
                    `📍 *الدولة:* ${existingUser.country || 'غير محدد'}\n` +
                    `💳 *الحساب:* \`${existingUser.onexbet}\``,
                    getMainKeyboard()
                );
            } else {
                await ctx.replyWithMarkdown(
                    '❌ *لا يوجد حساب مسجل*\n\n' +
                    '🔓 يرجى فتح حساب جديد',
                    getLoginKeyboard()
                );
            }
            return;
        }

        // 🔐 ADMIN COMMANDS - للإدمن فقط
        if (userId === CONFIG.ADMIN_ID) {
            if (text === '/admin' || text === '🔐 لوحة التحكم') {
                ctx.session.adminMode = true;
                ctx.session.adminStep = 'main';
                await ctx.replyWithMarkdown('🔧 *مرحباً في لوحة التحكم*', getAdminMainKeyboard());
                return;
            }

            if (session.adminMode) {
                await handleAdminCommands(ctx, text);
                return;
            }
        }

        // 🔐 فحص الاشتراك في القناة لأي أمر رئيسي
        const mainCommands = ['🎯 جلب التحليل', '📊 إحصائياتي', '💳 الاشتراكات', '👥 إحصائيات البوت', '👤 حالة الاشتراك', '🆘 الدعم الفني'];
        if (mainCommands.includes(text)) {
            const isSubscribed = await checkChannelSubscription(userId);
            if (!isSubscribed) {
                await ctx.replyWithMarkdown(
                    `❌ *يجب الاشتراك في القناة أولاً*\n\n` +
                    `📢 يرجى الاشتراك في القناة:\n` +
                    `👉 ${CONFIG.CHANNEL_USERNAME}\n\n` +
                    `✅ بعد الاشتراك اضغط على /start للبدء`,
                    Markup.inlineKeyboard([
                        [Markup.button.callback('✅ تحقق من الاشتراك', 'check_channel_subscription')]
                    ])
                );
                return;
            }
        }

        // 🆕 معالجة اختيار الدولة
        if (session.step === 'awaiting_country' && session.awaitingCountry) {
            const arabCountries = [
                '🇸🇦 السعودية', '🇦🇪 الإمارات', '🇶🇦 قطر', '🇰🇼 الكويت', '🇧🇭 البحرين',
                '🇴🇲 عمان', '🇾🇪 اليمن', '🇮🇶 العراق', '🇸🇾 سوريا', '🇯🇴 الأردن',
                '🇱🇧 لبنان', '🇪🇬 مصر', '🇩🇿 الجزائر', '🇲🇦 المغرب', '🇹🇳 تونس',
                '🇱🇾 ليبيا', '🇸🇩 السودان', '🇸🇸 جنوب السودان', '🇵🇸 فلسطين',
                '🇲🇷 موريتانيا', '🇩🇯 جيبوتي', '🇸🇴 الصومال', '🇰🇲 جزر القمر'
            ];

            if (arabCountries.includes(text)) {
                ctx.session.country = text;
                ctx.session.awaitingCountry = false;
                
                // 🔐 التحقق من الاشتراك في القناة بعد اختيار الدولة
                const isSubscribed = await checkChannelSubscription(userId);
                
                if (!isSubscribed) {
                    // إرسال رسالة طلب الاشتراك في القناة
                    await ctx.replyWithMarkdown(
                        `🔐 *مرحباً ${ctx.from.first_name}*\n\n` +
                        `📍 *الدولة:* ${text}\n\n` +
                        `📢 *للاستخدام البوت يجب الاشتراك في قناتنا أولاً*\n\n` +
                        `👉 ${CONFIG.CHANNEL_USERNAME}\n\n` +
                        `✅ بعد الاشتراك اضغط على الزر أدناه للتحقق:`,
                        Markup.inlineKeyboard([
                            [Markup.button.callback('✅ تحقق من الاشتراك', 'check_channel_subscription')]
                        ])
                    );
                    return;
                }

                const welcomeMessage = `
🔐 *مرحباً ${ctx.from.first_name} في نظام GOAL Predictor Pro v${CONFIG.VERSION}*

📍 *الدولة:* ${text}

🎯 *النظام المتقدم لتوقع الأهداف في المباريات*
🤖 *خوارزمية ذكية مخفية تحلل المباريات بدقة عالية*

📋 *خطوات الدخول:*
1️⃣ أدخل رقم حساب 1xBet (10 أرقام)
2️⃣ استلم كود التحقق (6 أرقام)  
3️⃣ أدخل كود التحقق
4️⃣ ابدأ باستخدام المحاولات المجانية

💎 *المطور:* ${CONFIG.DEVELOPER}
📢 *القناة:* ${CONFIG.CHANNEL}

🔢 *الآن اضغط على "🔐 إدخال رقم الحساب" لبدء التسجيل*
                `;

                await ctx.replyWithMarkdown(welcomeMessage, getLoginKeyboard());
                
            } else {
                await ctx.replyWithMarkdown('❌ *يرجى اختيار دولة من القائمة*', getCountriesKeyboard());
            }
            return;
        }

        // 🆕 معالجة إدخال مبلغ الرهان - الإصلاح الرئيسي هنا
        if (session.awaitingBetAmount) {
            // 🔐 فحص الاشتراك أولاً
            const isSubscribed = await checkChannelSubscription(userId);
            if (!isSubscribed) {
                await ctx.replyWithMarkdown(
                    `❌ *تم إلغاء الاشتراك في القناة*\n\n` +
                    `📢 يرجى الاشتراك مرة أخرى في القناة:\n` +
                    `👉 ${CONFIG.CHANNEL_USERNAME}\n\n` +
                    `✅ بعد الاشتراك اضغط على /start للبدء`,
                    Markup.inlineKeyboard([
                        [Markup.button.callback('✅ تحقق من الاشتراك', 'check_channel_subscription')]
                    ])
                );
                return;
            }

            const betAmount = parseFloat(text);
            if (isNaN(betAmount) || betAmount <= 0) {
                await ctx.replyWithMarkdown('❌ *مبلغ غير صحيح!*\n\nيرجى إدخال مبلغ صحيح (أرقام فقط)');
                return;
            }

            // حفظ مبلغ الرهان في الجلسة
            ctx.session.currentBet = betAmount;
            ctx.session.originalBet = betAmount;
            ctx.session.awaitingBetAmount = false;

            // الآن ننتقل إلى جلب التحليل
            const userData = await dbManager.getUser(userId);
            if (!userData) {
                await ctx.replyWithMarkdown('❌ *جلسة منتهية*\n\n🔐 أرسل /start للبدء', getLoginKeyboard());
                return;
            }

            await handleGetPrediction(ctx, userData);
            return;
        }

        // 🆕 معالجة اختيار طريقة الدفع
        if (session.step === 'choose_payment_method') {
            // 🔐 فحص الاشتراك أولاً
            const isSubscribed = await checkChannelSubscription(userId);
            if (!isSubscribed) {
                await ctx.replyWithMarkdown(
                    `❌ *تم إلغاء الاشتراك في القناة*\n\n` +
                    `📢 يرجى الاشتراك مرة أخرى في القناة:\n` +
                    `👉 ${CONFIG.CHANNEL_USERNAME}\n\n` +
                    `✅ بعد الاشتراك اضغط على /start للبدء`,
                    Markup.inlineKeyboard([
                        [Markup.button.callback('✅ تحقق من الاشتراك', 'check_channel_subscription')]
                    ])
                );
                return;
            }

            if (text === '💳 باينانس') {
                ctx.session.paymentSystem = 'binance';
                ctx.session.step = 'verified';
                await handleSubscriptions(ctx, session.userData);
                return;
            }
            else if (text === '🏦 تحويل بنكي') {
                ctx.session.paymentSystem = 'bank';
                ctx.session.step = 'verified';
                await handleSubscriptions(ctx, session.userData);
                return;
            }
            else if (text === '🔙 الرجوع للقائمة') {
                ctx.session.step = 'verified';
                await ctx.replyWithMarkdown('🔙 *العودة للقائمة الرئيسية*', getMainKeyboard());
                return;
            }
        }

        // 🔐 زر إدخال رقم الحساب - التحقق من الاشتراك أولاً
        if (text === '🔐 إدخال رقم الحساب') {
            // التحقق من الاشتراك في القناة أولاً
            const isSubscribed = await checkChannelSubscription(userId);
            if (!isSubscribed) {
                await ctx.replyWithMarkdown(
                    `❌ *يجب الاشتراك في القناة أولاً*\n\n` +
                    `📢 يرجى الاشتراك في القناة:\n` +
                    `👉 ${CONFIG.CHANNEL_USERNAME}\n\n` +
                    `✅ ثم اضغط على الزر أدناه للتحقق:`,
                    Markup.inlineKeyboard([
                        [Markup.button.callback('✅ تحقق من الاشتراك', 'check_channel_subscription')]
                    ])
                );
                return;
            }

            ctx.session.step = 'awaiting_account_id';
            await ctx.replyWithMarkdown(
                '🔢 *الخطوة 1:* أرسل رقم حساب 1xBet الخاص بك (10 أرقام)\n\n' +
                '💡 *ملاحظة:* يجب أن يكون الرقم الحقيقي الخاص بك'
            );
            return;
        }

        // 🔐 STEP 1: Validate 1xBet Account - التحقق المحسن مع منع التكرار
        if (session.step === 'awaiting_account_id') {
            // التحقق من الاشتراك في القناة أولاً
            const isSubscribed = await checkChannelSubscription(userId);
            if (!isSubscribed) {
                await ctx.replyWithMarkdown(
                    `❌ *يجب الاشتراك في القناة أولاً*\n\n` +
                    `📢 يرجى الاشتراك في القناة:\n` +
                    `👉 ${CONFIG.CHANNEL_USERNAME}\n\n` +
                    `✅ ثم اضغط على الزر أدناه للتحقق:`,
                    Markup.inlineKeyboard([
                        [Markup.button.callback('✅ تحقق من الاشتراك', 'check_channel_subscription')]
                    ])
                );
                return;
            }

            if (/^\d{10}$/.test(text)) {
                // 🔒 التحقق من أن رقم الحساب غير مسجل لمستخدم آخر - تحسين النظام
                const existingUserWithAccount = await dbManager.getUserByOneXBet(text);
                if (existingUserWithAccount) {
                    if (existingUserWithAccount.user_id === userId) {
                        // نفس المستخدم يحاول إعادة التسجيل بنفس الحساب
                        await ctx.replyWithMarkdown(
                            '⚠️ *هذا الحساب مسجل لك بالفعل!*\n\n' +
                            '🔐 يمكنك استخدام البوت مباشرة\n' +
                            '💡 اضغط على /start للدخول بحسابك'
                        );
                        return;
                    } else {
                        // حساب مسجل لمستخدم آخر
                        await ctx.replyWithMarkdown(
                            '❌ *رقم الحساب مسجل بالفعل!*\n\n' +
                            '🔐 هذا الحساب مسجل لمستخدم آخر\n' +
                            '💡 يرجى استخدام حسابك الخاص أو التواصل مع الدعم\n\n' +
                            '📞 للاستفسار: @GEMZGOOLBOT'
                        );
                        return;
                    }
                }

                ctx.session.accountId = text;
                ctx.session.step = 'awaiting_verification';
                ctx.session.verificationCode = Math.floor(100000 + Math.random() * 900000);

                await ctx.replyWithMarkdown(
                    `✅ *تم إرسال كود التحقق*\n\n` +
                    `🔐 *الحساب:* \`${text}\`\n` +
                    `📧 *الكود:* \`${ctx.session.verificationCode}\`\n\n` +
                    `🔢 *الخطوة 2:* أرسل كود التحقق خلال 5 دقائق`
                );

                setTimeout(() => {
                    if (ctx.session.step === 'awaiting_verification') {
                        ctx.session.verificationCode = null;
                        ctx.session.step = 'start';
                    }
                }, 5 * 60 * 1000);
            } else {
                await ctx.replyWithMarkdown(
                    '❌ *رقم الحساب خطأ!*\n\n' +
                    '🔢 يجب أن يكون رقم حساب 1xBet مكون من 10 أرقام فقط\n' +
                    '📝 مثال: 1234567890\n\n' +
                    '💡 يرجى إعادة إدخال الرقم بشكل صحيح'
                );
                return;
            }
        }
        // 🔐 STEP 2: Verify Code
        else if (session.step === 'awaiting_verification' && /^\d{6}$/.test(text)) {
            // 🔐 فحص الاشتراك أولاً
            const isSubscribed = await checkChannelSubscription(userId);
            if (!isSubscribed) {
                await ctx.replyWithMarkdown(
                    `❌ *تم إلغاء الاشتراك في القناة*\n\n` +
                    `📢 يرجى الاشتراك مرة أخرى في القناة:\n` +
                    `👉 ${CONFIG.CHANNEL_USERNAME}\n\n` +
                    `✅ بعد الاشتراك اضغط على /start للبدء`,
                    Markup.inlineKeyboard([
                        [Markup.button.callback('✅ تحقق من الاشتراك', 'check_channel_subscription')]
                    ])
                );
                return;
            }

            if (parseInt(text) === ctx.session.verificationCode) {
                
                // إرسال رسالة الانتظار المتحركة
                const waitingMessage = await ctx.replyWithMarkdown(
                    '🔐 *جاري تسجيل الدخول...*\n\n' +
                    '⏳ جاري البحث في السجلات...\n' +
                    '📡 جاري الاتصال بالسيرفر...\n' +
                    '⚡ جاري تفعيل الحساب...\n' +
                    '🎯 جاري إعداد المحاولات المجانية...\n\n' +
                    '⏰ قد تستغرق العملية 10 ثواني...'
                );

                // محاكاة الانتظار لمدة 10 ثواني مع تحديث الرسالة
                for (let i = 1; i <= 10; i++) {
                    await new Promise(resolve => setTimeout(resolve, 1000));
                    try {
                        await ctx.telegram.editMessageText(
                            ctx.chat.id,
                            waitingMessage.message_id,
                            null,
                            `🔐 *جاري تسجيل الدخول...*\n\n` +
                            `⏳ جاري البحث في السجلات... ${i}/10\n` +
                            `📡 جاري الاتصال بالسيرفر...\n` +
                            `⚡ جاري تفعيل الحساب...\n` +
                            `🎯 جاري إعداد المحاولات المجانية...`,
                            { parse_mode: 'Markdown' }
                        );
                    } catch (editError) {
                        console.log('Error editing waiting message:', editError);
                    }
                }

                const userData = {
                    user_id: userId,
                    username: ctx.from.first_name,
                    onexbet: ctx.session.accountId,
                    country: ctx.session.country || 'غير محدد',
                    free_attempts: 10,
                    subscription_status: 'free',
                    subscription_type: 'none',
                    subscription_start_date: null,
                    subscription_end_date: null,
                    joined_at: new Date().toISOString(),
                    total_predictions: 0,
                    correct_predictions: 0,
                    wins: 0,
                    losses: 0,
                    total_bets: 0,
                    total_profit: 0,
                    algorithm_linked: true,
                    last_algorithm_check: new Date().toISOString(),
                    // 🆕 حقول جديدة
                    active_session: true,
                    last_login: new Date().toISOString(),
                    login_count: 1,
                    environment: process.env.NODE_ENV || 'production'
                };

                await dbManager.saveUser(userId, userData);
                ctx.session.step = 'verified';
                ctx.session.userData = userData;
                ctx.session.userLoggedOut = false;
                ctx.session.newAccountFlow = false;

                // حذف رسالة الانتظار
                await ctx.deleteMessage(waitingMessage.message_id);

                await ctx.replyWithMarkdown(
                    `🎉 *تم الربط بنجاح!*\n\n` +
                    `📍 *الدولة:* ${userData.country}\n` +
                    `✅ *الحساب:* \`${ctx.session.accountId}\`\n` +
                    `👤 *المستخدم:* ${ctx.session.userData.username}\n` +
                    `🔄 *تم ربط الخوارزمية بنجاح*\n\n` +
                    `🎁 *تحصل على 10 محاولات مجانية*\n\n` +
                    `🎯 *يمكنك الآن استخدام زر "جلب التحليل" للحصول على التوقعات*`,
                    getMainKeyboard()
                );

            } else {
                await ctx.replyWithMarkdown('❌ *كود تحقق خاطئ!*\n\n🔐 يرجى إعادة إدخال الكود الصحيح');
            }
        }
        // 💳 معالجة طلبات الدفع - طلب رقم الحساب
        else if (session.awaitingPaymentAccount) {
            // 🔐 فحص الاشتراك أولاً
            const isSubscribed = await checkChannelSubscription(userId);
            if (!isSubscribed) {
                await ctx.replyWithMarkdown(
                    `❌ *تم إلغاء الاشتراك في القناة*\n\n` +
                    `📢 يرجى الاشتراك مرة أخرى في القناة:\n` +
                    `👉 ${CONFIG.CHANNEL_USERNAME}\n\n` +
                    `✅ بعد الاشتراك اضغط على /start للبدء`,
                    Markup.inlineKeyboard([
                        [Markup.button.callback('✅ تحقق من الاشتراك', 'check_channel_subscription')]
                    ])
                );
                return;
            }

            if (/^\d{10}$/.test(text)) {
                const userData = await dbManager.getUser(userId);
                
                // 🔒 التحقق من تطابق رقم الحساب مع المسجل
                if (text !== userData.onexbet) {
                    await ctx.replyWithMarkdown(
                        '❌ *رقم الحساب لا يتطابق!*\n\n' +
                        `🔐 رقم حسابك المسجل: \`${userData.onexbet}\`\n` +
                        '💡 يرجى إدخال رقم حسابك الصحيح المسجل في النظام'
                    );
                    return;
                }
                
                ctx.session.awaitingPaymentAccount = false;
                ctx.session.paymentAccount = text;
                
                const paymentSystem = ctx.session.paymentSystem || 'binance';
                
                if (paymentSystem === 'binance') {
                    await ctx.replyWithMarkdown(
                        `✅ *تم التحقق من رقم الحساب:* \`${text}\`\n\n` +
                        `📸 *الآن يرجى إرسال صورة إثبات الدفع من باينانس*`
                    );
                } else if (paymentSystem === 'bank') {
                    await ctx.replyWithMarkdown(
                        `✅ *تم التحقق من رقم الحساب:* \`${text}\`\n\n` +
                        `📸 *الآن يرجى إرسال صورة إثبات التحويل البنكي*`
                    );
                }
            } else {
                await ctx.replyWithMarkdown('❌ *رقم حساب غير صحيح!*\n\n🔢 يرجى إرسال رقم حساب 1xBet مكون من 10 أرقام');
            }
            return;
        }
        // 🎯 معالجة الأزرار الثابتة بعد التحقق
        else if (session.step === 'verified') {
            const userData = await dbManager.getUser(userId);
            
            if (!userData) {
                await ctx.replyWithMarkdown('❌ *جلسة منتهية*\n\n🔐 أرسل /start للبدء', getLoginKeyboard());
                return;
            }

            // 🔐 فحص الاشتراك في القناة لأي أمر
            const isSubscribed = await checkChannelSubscription(userId);
            if (!isSubscribed) {
                await ctx.replyWithMarkdown(
                    `❌ *تم إلغاء الاشتراك في القناة*\n\n` +
                    `📢 يرجى الاشتراك مرة أخرى في القناة:\n` +
                    `👉 ${CONFIG.CHANNEL_USERNAME}\n\n` +
                    `✅ بعد الاشتراك اضغط على /start للبدء`,
                    Markup.inlineKeyboard([
                        [Markup.button.callback('✅ تحقق من الاشتراك', 'check_channel_subscription')]
                    ])
                );
                return;
            }

            switch (text) {
                case '🎯 جلب التحليل':
                    await handleGetPrediction(ctx, userData);
                    break;

                case '📊 إحصائياتي':
                    await handleUserStats(ctx, userData);
                    break;

                case '👥 إحصائيات البوت':
                    await handleBotStats(ctx);
                    break;

                case '💳 الاشتراكات':
                    // 🆕 اختيار طريقة الدفع أولاً
                    ctx.session.step = 'choose_payment_method';
                    await ctx.replyWithMarkdown(
                        '💳 *اختر طريقة الدفع*\n\n' +
                        '🔹 اختر الطريقة المناسبة للدفع:\n\n' +
                        '💳 *باينانس* - الدفع عبر منصة باينانس\n' +
                        '🏦 *تحويل بنكي* - التحويل عبر البنك الكريمي\n\n' +
                        '📋 اختر الطريقة التي تناسبك:',
                        getPaymentMethodKeyboard()
                    );
                    break;

                case '👤 حالة الاشتراك':
                    await handleSubscriptionStatus(ctx, userData);
                    break;

                case '🆘 الدعم الفني':
                    await ctx.replyWithMarkdown(
                        `🆘 *الدعم الفني*\n\n` +
                        `📞 للاستفسارات والدعم:\n` +
                        `👤 @GEMZGOOLBOT\n` +
                        `📢 ${CONFIG.CHANNEL}\n\n` +
                        `⏰ متاحون 24/7 لخدمتكم`,
                        getMainKeyboard()
                    );
                    break;

                case '🔙 الرجوع للقائمة':
                    await ctx.replyWithMarkdown('🔙 *العودة للقائمة الرئيسية*', getMainKeyboard());
                    break;

                default:
                    if (text.startsWith('💰 ')) {
                        await handleSubscriptionSelection(ctx, userData, text);
                    } else {
                        await ctx.replyWithMarkdown('🔙 *العودة للقائمة الرئيسية*', getMainKeyboard());
                    }
                    break;
            }
        }
        // 🔐 إذا كان المستخدم غير مسجل وحاول استخدام الأزرار
        else if (['🎯 جلب التحليل', '📊 إحصائياتي', '💳 الاشتراكات', '👥 إحصائيات البوت'].includes(text)) {
            await ctx.replyWithMarkdown(
                '❌ *يجب التسجيل أولاً*\n\n' +
                '🔐 أرسل /start لتسجيل الدخول',
                getLoginKeyboard()
            );
        } else {
            await ctx.replyWithMarkdown('🔙 *العودة للقائمة الرئيسية*', getMainKeyboard());
        }

    } catch (error) {
        console.error('Text handler error:', error);
        await ctx.replyWithMarkdown('❌ حدث خطأ غير متوقع', getMainKeyboard());
    }
});

// 🖼️ معالجة صور الدفع - UPDATED FOR DUAL PAYMENT
bot.on('photo', async (ctx) => {
    try {
        const userId = ctx.from.id.toString();
        const session = ctx.session;
        
        // 🔐 فحص الاشتراك أولاً لأي صورة دفع
        const isSubscribed = await checkChannelSubscription(userId);
        if (!isSubscribed) {
            await ctx.replyWithMarkdown(
                `❌ *تم إلغاء الاشتراك في القناة*\n\n` +
                `📢 يرجى الاشتراك مرة أخرى في القناة:\n` +
                `👉 ${CONFIG.CHANNEL_USERNAME}\n\n` +
                `✅ بعد الاشتراك اضغط على /start للبدء`,
                Markup.inlineKeyboard([
                    [Markup.button.callback('✅ تحقق من الاشتراك', 'check_channel_subscription')]
                ])
            );
            return;
        }
        
        // 💳 معالجة صور الدفع من المستخدمين فقط
        if (session.paymentType) {
            await handlePaymentScreenshot(ctx, userId);
            return;
        }

        // 🖼️ معالجة رفع صورة للدفع في الإدمن
        if (session.adminStep === 'edit_bank_image') {
            await handleAdminBankImageUpload(ctx, userId);
            return;
        }

        // 🖼️ معالجة رفع صورة للدفع في الإدمن (باينانس)
        if (session.adminStep === 'edit_price_and_payment' && session.editingSubscriptionType && session.adminPaymentSystem === 'binance') {
            await handleAdminPaymentImageUpload(ctx, userId);
            return;
        }

        // إذا لم يكن هناك سياق للصورة، نرسل رسالة توضيحية
        await ctx.replyWithMarkdown(
            '❌ *لا يمكن معالجة الصورة حالياً*\n\n' +
            '💡 يرجى استخدام الأزرار المتاحة في القائمة',
            getMainKeyboard()
        );

    } catch (error) {
        console.error('Photo handler error:', error);
        await ctx.replyWithMarkdown('❌ *حدث خطأ في معالجة الصورة*', getMainKeyboard());
    }
});

// 🎯 HANDLE CALLBACK QUERIES - UPDATED WITH NEW BUTTON LOGIC
bot.on('callback_query', async (ctx) => {
    try {
        const callbackData = ctx.callbackQuery.data;
        const userId = ctx.from.id.toString();
        
        // 🔐 فحص الاشتراك لأي زر يضغطه المستخدم
        const isSubscribed = await checkChannelSubscription(userId);
        if (!isSubscribed && !callbackData.includes('check_channel_subscription')) {
            await ctx.answerCbQuery('❌ يجب الاشتراك في القناة أولاً');
            await ctx.replyWithMarkdown(
                `❌ *تم إلغاء الاشتراك في القناة*\n\n` +
                `📢 يرجى الاشتراك مرة أخرى في القناة:\n` +
                `👉 ${CONFIG.CHANNEL_USERNAME}\n\n` +
                `✅ بعد الاشتراك اضغط على /start للبدء`,
                Markup.inlineKeyboard([
                    [Markup.button.callback('✅ تحقق من الاشتراك', 'check_channel_subscription')]
                ])
            );
            return;
        }
        
        if (callbackData.startsWith('win_') || callbackData.startsWith('lose_')) {
            const isWin = callbackData.startsWith('win_');
            
            const userData = await dbManager.getUser(userId);
            if (!userData) {
                await ctx.answerCbQuery('❌ لم يتم العثور على بيانات المستخدم');
                return;
            }
            
            if (isWin) {
                const profit = ctx.session.currentBet;
                userData.wins = (userData.wins || 0) + 1;
                userData.correct_predictions = (userData.correct_predictions || 0) + 1;
                userData.total_profit = (userData.total_profit || 0) + profit;
                ctx.session.totalProfit += profit;
                
                await ctx.answerCbQuery(`🎊 مبروك! نجح التوقع وربحت ${profit}$`);
                
                // قائمة رسائل التهنئة المتنوعة
                const winMessages = [
                    `🎊 *مبروك! التوقع كان صحيح!* ✨\n\n💰 ربحت: ${profit}$\n💵 إجمالي أرباحك: ${ctx.session.totalProfit}$`,
                    `🎉 *ممتاز! التوقع كان صحيح!* 🎯\n\n💰 ربحت: ${profit}$\n💵 إجمالي أرباحك: ${ctx.session.totalProfit}$`,
                    `🔥 *أداء رائع! استمر يا بطل.* 💪\n\n💰 ربحت: ${profit}$\n💵 إجمالي أرباحك: ${ctx.session.totalProfit}$`,
                    `✅ *مبروك! توقع ناجح من جديد.* 🏆\n\n💰 ربحت: ${profit}$\n💵 إجمالي أرباحك: ${ctx.session.totalProfit}$`
                ];
                
                // اختيار رسالة عشوائية
                const randomWinMessage = winMessages[Math.floor(Math.random() * winMessages.length)];
                
                await ctx.replyWithMarkdown(
                    randomWinMessage,
                    getMainKeyboard()
                );
                
            } else {
                userData.losses = (userData.losses || 0) + 1;
                
                await ctx.answerCbQuery(`💔 خسارة هذه الجولة`);
                
                // قائمة الرسائل التشجيعية المتنوعة
                const loseMessages = [
                    `💔 *لا تيأس، القادم أفضل!* 🌟\n\n🔁 استمر في المحاولة ولا تستسلم`,
                    `📉 *المهم تكمل الطريق، المحاولة القادمة أفضل.* 💪\n\n🔥 استمر وسوف تنجح`,
                    `🔄 *خسارة بسيطة، وبتعوضها قريب.* 🎯\n\n💫 لا تفقد الأمل واستمر`,
                    `🌧️ *وراء كل عاصفة شمس.* ☀️\n\n🚀 استمر في المحاولة وستحقق النجاح`
                ];
                
                // اختيار رسالة عشوائية
                const randomLoseMessage = loseMessages[Math.floor(Math.random() * loseMessages.length)];
                
                await ctx.replyWithMarkdown(
                    randomLoseMessage,
                    getMainKeyboard()
                );
            }
            
            await dbManager.saveUser(userId, userData);
            
            try {
                await ctx.deleteMessage(ctx.callbackQuery.message.message_id);
            } catch (deleteError) {
                console.log('Could not delete message:', deleteError);
            }
        }
        
        // معالجة أزرار القبول والرفض في الإدمن
        else if (callbackData.startsWith('accept_')) {
            const paymentId = callbackData.split('_')[1];
            await handlePaymentAccept(ctx, paymentId);
        }
        else if (callbackData.startsWith('reject_')) {
            const paymentId = callbackData.split('_')[1];
            await handlePaymentReject(ctx, paymentId);
        }
        
        // 🆕 معالجة تأكيد الاشتراك للنظام المزدوج
        else if (callbackData.startsWith('confirm_binance_') || callbackData.startsWith('confirm_bank_')) {
            await handleSubscriptionConfirmation(ctx, callbackData);
        }
        
        // معالجة زر الرجوع للاشتراكات
        else if (callbackData === 'back_to_subscriptions') {
            await ctx.deleteMessage(ctx.callbackQuery.message.message_id);
            await ctx.replyWithMarkdown('💳 *باقات الاشتراك المتاحة*', getSubscriptionKeyboard());
        }
        
        // 🆕 معالجة زر التحقق من الاشتراك في القناة
        else if (callbackData === 'check_channel_subscription') {
            await handleCheckChannelSubscription(ctx);
        }
        
        // 🆕 معالجة إعادة ربط الخوارزمية
        else if (callbackData === 'reconnect_algorithm') {
            const userData = await dbManager.getUser(userId);
            if (userData) {
                await reconnectAlgorithm(ctx, userData);
            } else {
                await ctx.answerCbQuery('❌ لم يتم العثور على بيانات المستخدم');
            }
        }
        
    } catch (error) {
        console.error('Callback query error:', error);
        await ctx.answerCbQuery('❌ حدث خطأ في المعالجة');
    }
});

// 🆕 معالجة التحقق من الاشتراك في القناة
async function handleCheckChannelSubscription(ctx) {
    try {
        const userId = ctx.from.id.toString();
        const isSubscribed = await checkChannelSubscription(userId);
        
        if (isSubscribed) {
            await ctx.answerCbQuery('✅ تم التحقق من الاشتراك بنجاح!');
            await ctx.deleteMessage();
            
            // إرسال رسالة الترحيب بعد التحقق
            const userName = ctx.from.first_name;
            
            const welcomeMessage = `
🔐 *مرحباً ${userName} في نظام GOAL Predictor Pro v${CONFIG.VERSION}*

🎯 *النظام المتقدم لتوقع الأهداف في المباريات*
🤖 *خوارزمية ذكية مخفية تحلل المباريات بدقة عالية*

📋 *خطوات الدخول:*
1️⃣ أدخل رقم حساب 1xBet (10 أرقام)
2️⃣ استلم كود التحقق (6 أرقام)  
3️⃣ أدخل كود التحقق
4️⃣ ابدأ باستخدام المحاولات المجانية

💎 *المطور:* ${CONFIG.DEVELOPER}
📢 *القناة:* ${CONFIG.CHANNEL}

🔢 *الآن اضغط على "🔐 إدخال رقم الحساب" لبدء التسجيل*
            `;

            await ctx.replyWithMarkdown(welcomeMessage, getLoginKeyboard());
        } else {
            await ctx.answerCbQuery('❌ لم يتم الاشتراك بعد!');
            await ctx.replyWithMarkdown(
                `❌ *لم يتم العثور على اشتراكك في القناة*\n\n` +
                `📢 يرجى الاشتراك في القناة أولاً:\n` +
                `👉 ${CONFIG.CHANNEL_USERNAME}\n\n` +
                `✅ ثم اضغط على الزر أدناه للتحقق:`,
                Markup.inlineKeyboard([
                    [Markup.button.callback('✅ تحقق من الاشتراك', 'check_channel_subscription')]
                ])
            );
        }
    } catch (error) {
        console.error('Channel subscription check error:', error);
        await ctx.answerCbQuery('❌ حدث خطأ في التحقق');
    }
}

// 🎯 HANDLER FUNCTIONS

async function handleGetPrediction(ctx, userData) {
    try {
        // 🔐 التحقق من الاشتراك في القناة أولاً
        const isSubscribed = await checkChannelSubscription(ctx.from.id.toString());
        if (!isSubscribed) {
            await ctx.replyWithMarkdown(
                `❌ *تم إلغاء الاشتراك في القناة*\n\n` +
                `📢 يرجى الاشتراك مرة أخرى في القناة:\n` +
                `👉 ${CONFIG.CHANNEL_USERNAME}\n\n` +
                `✅ بعد الاشتراك اضغط على /start للبدء`,
                Markup.inlineKeyboard([
                    [Markup.button.callback('✅ تحقق من الاشتراك', 'check_channel_subscription')]
                ])
            );
            return;
        }

        // 🔐 التحقق من انتهاء الخوارزمية أولاً
        if (isAlgorithmExpired(userData.last_algorithm_check)) {
            await ctx.replyWithMarkdown(
                '⚠️ *انتهت جلسة الخوارزمية*\n\n' +
                '🔄 تحتاج إلى إعادة ربط الخوارزمية لمتابعة التحليلات\n' +
                `📍 *الدولة:* ${userData.country || 'غير محدد'}\n` +
                `🔐 *الحساب:* \`${userData.onexbet}\`\n\n` +
                '💡 اضغط على الزر أدناه لإعادة الربط:',
                Markup.inlineKeyboard([
                    [Markup.button.callback('🔄 إعادة ربط الخوارزمية', 'reconnect_algorithm')]
                ])
            );
            return;
        }

        // 🔐 التحقق من المحاولات المجانية أو الاشتراك
        if (userData.subscription_status !== 'active' && userData.free_attempts <= 0) {
            await ctx.replyWithMarkdown(
                '🚫 *انتهت المحاولات المجانية*\n\n' +
                '💳 يرجى الاشتراك للمتابعة في استخدام الخدمة',
                getMainKeyboard()
            );
            return;
        }

        // التحقق من وجود مبلغ الرهان
        if (!ctx.session.currentBet || ctx.session.currentBet <= 0) {
            ctx.session.awaitingBetAmount = true;
            await ctx.replyWithMarkdown(
                '💰 *أدخل مبلغ الرهان:*\n\n' +
                '💵 يرجى كتابة المبلغ الذي تريد الرهان عليه (بالدولار)\n' +
                '📝 مثال: 10 أو 25.5'
            );
            return;
        }

        // إرسال رسالة الانتظار المتحركة مع كرة متحركة
        const loadingMessages = [
            '🎯 *جاري جلب التحليل...*\n\n⚽ جاري البحث عن فرص الهدف...',
            '🎯 *جاري جلب التحليل...*\n\n🔄 جاري تحليل إحصائيات الفريقين...',
            '🎯 *جاري جلب التحليل...*\n\n📊 جاري معالجة البيانات...',
            '🎯 *جاري جلب التحليل...*\n\n🤖 جاري تطبيق خوارزمية الذكاء الاصطناعي...'
        ];

        let loadingMsg = await ctx.replyWithMarkdown(loadingMessages[0]);
        
        // محاكاة الانتظار المتحرك لمدة 4 ثواني
        for (let i = 1; i < loadingMessages.length; i++) {
            await new Promise(resolve => setTimeout(resolve, 1000));
            try {
                await ctx.telegram.editMessageText(
                    ctx.chat.id,
                    loadingMsg.message_id,
                    null,
                    loadingMessages[i],
                    { parse_mode: 'Markdown' }
                );
            } catch (editError) {
                console.log('Error editing loading message:', editError);
            }
        }

        // توليد التوقع
        const prediction = goalAI.generateSmartPrediction(userData.user_id);
        
        // 📊 تحديث إحصائيات المستخدم
        if (userData.subscription_status !== 'active') {
            userData.free_attempts--;
        }
        userData.total_predictions = (userData.total_predictions || 0) + 1;
        userData.total_bets = (userData.total_bets || 0) + ctx.session.currentBet;
        userData.lastPrediction = prediction;
        await dbManager.saveUser(ctx.from.id.toString(), userData);

        // 🕒 استخدام الوقت الحقيقي الحالي بصيغة 12 ساعة
        const currentTime = realTimeClock.getCurrentTime();

        // إرسال التوقع مع الصورة - مدمج في رسالة واحدة
        const analysisMessage = `
🤖 *تحليل الذكاء الاصطناعي المتقدم - v${CONFIG.VERSION}*

🎯 *نتيجة التحليل:*
${prediction.type}
📈 *الاحتمالية:* ${prediction.probability}%
🎯 *الثقة:* ${prediction.confidence}%

💡 *التحليل:*
${prediction.reasoning}

🔐 *الحساب:* \`${userData.onexbet}\`
💰 *مبلغ الرهان:* ${ctx.session.currentBet}$
🕒 *الوقت:* ${currentTime}

${userData.subscription_status !== 'active' ? 
    `🆓 *المحاولات المتبقية:* ${userData.free_attempts}` : 
    `✅ *اشتراك نشط - محاولات غير محدودة*`}
        `;

        // حفظ الأزرار في الجلسة
        ctx.session.predictionButtons = Markup.inlineKeyboard([
            [Markup.button.callback('✅ ربحت', `win_${Date.now()}`)],
            [Markup.button.callback('❌ خسرت', `lose_${Date.now()}`)]
        ]);

        // إرسال الصورة مع التوقع في رسالة واحدة
        await ctx.replyWithPhoto(CONFIG.PREDICTION_IMAGE, {
            caption: analysisMessage,
            parse_mode: 'Markdown',
            reply_markup: ctx.session.predictionButtons.reply_markup
        });

        // ❌ REMOVED: إرسال الإشعار للقناة - لا نرسل تحليلات للتوقعات

        // حذف رسالة الانتظار
        await ctx.deleteMessage(loadingMsg.message_id);

    } catch (error) {
        console.error('Get prediction error:', error);
        await ctx.replyWithMarkdown('❌ *حدث خطأ في جلب التحليل*', getMainKeyboard());
    }
}

async function handleUserStats(ctx, userData) {
    // 🔐 فحص الاشتراك أولاً
    const isSubscribed = await checkChannelSubscription(ctx.from.id.toString());
    if (!isSubscribed) {
        await ctx.replyWithMarkdown(
            `❌ *تم إلغاء الاشتراك في القناة*\n\n` +
            `📢 يرجى الاشتراك مرة أخرى في القناة:\n` +
            `👉 ${CONFIG.CHANNEL_USERNAME}\n\n` +
            `✅ بعد الاشتراك اضغط على /start للبدء`,
            Markup.inlineKeyboard([
                [Markup.button.callback('✅ تحقق من الاشتراك', 'check_channel_subscription')]
            ])
        );
        return;
    }

    const accuracy = userData.correct_predictions > 0 ? 
        Math.round((userData.correct_predictions / (userData.total_predictions || 1)) * 100) : 0;
    
    let subscriptionInfo = '';
    if (userData.subscription_status === 'active') {
        const remainingDays = calculateRemainingDays(userData.subscription_end_date);
        subscriptionInfo = `\n📦 *الاشتراك:* ${getSubscriptionDisplayName(userData.subscription_type)}\n` +
                          `⏳ *متبقي:* ${remainingDays} يوم`;
    } else {
        subscriptionInfo = `\n🆓 *محاولات مجانية:* ${userData.free_attempts}`;
    }
    
    await ctx.replyWithMarkdown(
        `📊 *إحصائياتك الشخصية*\n\n` +
        `📍 *الدولة:* ${userData.country || 'غير محدد'}\n` +
        `🔐 ${userData.onexbet}\n` +
        `👤 ${userData.username}\n` +
        `📈 ${userData.total_predictions || 0} توقع\n` +
        `✅ ${userData.correct_predictions || 0} صحيحة\n` +
        `🎯 ${accuracy}% دقة\n` +
        `🎉 ${userData.wins || 0} فوز\n` +
        `💔 ${userData.losses || 0} خسارة\n` +
        `💰 إجمالي الرهانات: ${userData.total_bets || 0}$\n` +
        `💵 إجمالي الأرباح: ${userData.total_profit || 0}$` +
        subscriptionInfo +
        `\n🔄 *آخر تحديث للخوارزمية:* ${new Date(userData.last_algorithm_check).toLocaleTimeString('ar-SA')}`,
        getMainKeyboard()
    );
}

async function handleBotStats(ctx) {
    // 🔐 فحص الاشتراك أولاً
    const isSubscribed = await checkChannelSubscription(ctx.from.id.toString());
    if (!isSubscribed) {
        await ctx.replyWithMarkdown(
            `❌ *تم إلغاء الاشتراك في القناة*\n\n` +
            `📢 يرجى الاشتراك مرة أخرى في القناة:\n` +
            `👉 ${CONFIG.CHANNEL_USERNAME}\n\n` +
            `✅ بعد الاشتراك اضغط على /start للبدء`,
            Markup.inlineKeyboard([
                [Markup.button.callback('✅ تحقق من الاشتراك', 'check_channel_subscription')]
            ])
        );
        return;
    }

    const stats = dynamicStats.getStats();
    await ctx.replyWithMarkdown(
        `👥 *إحصائيات البوت*\n\n` +
        `👤 إجمالي المستخدمين: ${stats.totalUsers.toLocaleString()}\n` +
        `🟢 مستخدمين نشطين الآن: ${stats.activeUsers}\n` +
        `📊 التوقعات اليومية: ${Math.floor(stats.activeUsers * 8.5)}\n\n` +
        `🎯 *النظام يعمل بكفاءة عالية*`,
        getMainKeyboard()
    );
}

async function handleSubscriptions(ctx, userData) {
    try {
        // 🔐 فحص الاشتراك أولاً
        const isSubscribed = await checkChannelSubscription(ctx.from.id.toString());
        if (!isSubscribed) {
            await ctx.replyWithMarkdown(
                `❌ *تم إلغاء الاشتراك في القناة*\n\n` +
                `📢 يرجى الاشتراك مرة أخرى في القناة:\n` +
                `👉 ${CONFIG.CHANNEL_USERNAME}\n\n` +
                `✅ بعد الاشتراك اضغط على /start للبدء`,
                Markup.inlineKeyboard([
                    [Markup.button.callback('✅ تحقق من الاشتراك', 'check_channel_subscription')]
                ])
            );
            return;
        }

        await ctx.replyWithMarkdown(
            '💳 *باقات الاشتراك المتاحة*\n\n' +
            '📦 اختر الباقة المناسبة لك:\n\n' +
            '💰 أسبوعي - 7 أيام\n' +
            '💰 شهري - 30 يوماً\n' +
            '💰 3 أشهر - 90 يوماً\n' +
            '💰 سنوي - 365 يوماً\n\n' +
            '💡 اضغط على الزر المناسب لعرض التفاصيل',
            getSubscriptionKeyboard()
        );
    } catch (error) {
        console.error('Subscriptions error:', error);
        await ctx.replyWithMarkdown('❌ *حدث خطأ في جلب معلومات الاشتراكات*', getMainKeyboard());
    }
}

// 🆕 HANDLE SUBSCRIPTION SELECTION - UPDATED FOR DUAL PAYMENT
async function handleSubscriptionSelection(ctx, userData, text) {
    // 🔐 فحص الاشتراك أولاً
    const isSubscribed = await checkChannelSubscription(ctx.from.id.toString());
    if (!isSubscribed) {
        await ctx.replyWithMarkdown(
            `❌ *تم إلغاء الاشتراك في القناة*\n\n` +
            `📢 يرجى الاشتراك مرة أخرى في القناة:\n` +
            `👉 ${CONFIG.CHANNEL_USERNAME}\n\n` +
            `✅ بعد الاشتراك اضغط على /start للبدء`,
            Markup.inlineKeyboard([
                [Markup.button.callback('✅ تحقق من الاشتراك', 'check_channel_subscription')]
            ])
        );
        return;
    }

    const subscriptionTypeMap = {
        '💰 أسبوعي': 'week',
        '💰 شهري': 'month', 
        '💰 3 أشهر': 'three_months',
        '💰 سنوي': 'year'
    };

    const subscriptionType = subscriptionTypeMap[text];
    if (!subscriptionType) {
        await ctx.replyWithMarkdown('❌ *اختيار غير صحيح*', getSubscriptionKeyboard());
        return;
    }

    try {
        const settings = await dbManager.getSettings();
        const paymentSystem = ctx.session.paymentSystem || 'binance';
        
        if (paymentSystem === 'binance') {
            // نظام باينانس
            const prices = settings.prices.binance;
            const payment_links = settings.payment_links.binance;

            // 🔧 FIX: التحقق من وجود السعر لباقة 3 أشهر
            if (!prices || !prices[subscriptionType]) {
                await ctx.replyWithMarkdown('❌ *خطأ في جلب السعر للباقة المطلوبة*', getSubscriptionKeyboard());
                return;
            }

            const displayName = getSubscriptionDisplayName(subscriptionType);
            
            const paymentLink = payment_links[subscriptionType];
            const isImage = paymentLink && (paymentLink.includes('.jpg') || paymentLink.includes('.png') || paymentLink.includes('.jpeg') || paymentLink.includes('.gif') || paymentLink.includes('imgbb') || paymentLink.includes('i.ibb.co') || paymentLink.startsWith('https://i.ibb.co'));

            if (isImage) {
                const subscriptionMessage = `💳 *باقة ${displayName} - باينانس*\n\n` +
                    `💰 السعر: ${prices[subscriptionType]}$\n` +
                    `⏰ المدة: ${getSubscriptionDuration(subscriptionType)}\n\n` +
                    `📋 *طريقة الدفع:*\n` +
                    `💳 ادفع بالمسح عبر الكاميرا\n` +
                    `📱 أو امسح الكود لمواصلة الدفع\n\n` +
                    `💡 *هل تريد المتابعة مع هذه الباقة؟*`;

                try {
                    await ctx.replyWithPhoto(paymentLink, {
                        caption: subscriptionMessage,
                        parse_mode: 'Markdown',
                        reply_markup: {
                            inline_keyboard: [
                                [ { text: '✅ نعم، المتابعة', callback_data: `confirm_binance_${subscriptionType}` } ],
                                [ { text: '🔙 رجوع', callback_data: 'back_to_subscriptions' } ]
                            ]
                        }
                    });
                } catch (photoError) {
                    console.error('Error sending payment image:', photoError);
                    await ctx.replyWithMarkdown(
                        `❌ *تعذر تحميل صورة الدفع*\n\n${subscriptionMessage}`,
                        {
                            reply_markup: {
                                inline_keyboard: [
                                    [ { text: '✅ نعم، المتابعة', callback_data: `confirm_binance_${subscriptionType}` } ],
                                    [ { text: '🔙 رجوع', callback_data: 'back_to_subscriptions' } ]
                                ]
                            }
                        }
                    );
                }
            } else {
                const subscriptionMessage = `💳 *باقة ${displayName} - باينانس*\n\n` +
                    `💰 السعر: ${prices[subscriptionType]}$\n` +
                    `⏰ المدة: ${getSubscriptionDuration(subscriptionType)}\n\n` +
                    `🔗 *رابط الدفع:* ${paymentLink}\n\n` +
                    `📋 *طريقة الدفع:*\n` +
                    `1. ادفع عبر الرابط أعلاه\n` +
                    `2. أرسل رقم حساب 1xBet (10 أرقام)\n` +
                    `3. أرسل صورة إثبات الدفع\n` +
                    `4. انتظر التفعيل من الإدارة\n\n` +
                    `💡 *هل تريد المتابعة مع هذه الباقة؟*`;

                await ctx.replyWithMarkdown(subscriptionMessage, {
                    reply_markup: {
                        inline_keyboard: [
                            [ { text: '✅ نعم، المتابعة', callback_data: `confirm_binance_${subscriptionType}` } ],
                            [ { text: '🔙 رجوع', callback_data: 'back_to_subscriptions' } ]
                        ]
                    }
                });
            }
        } 
        else if (paymentSystem === 'bank') {
            // 🆕 نظام التحويل البنكي الجديد
            const prices = settings.prices.bank;
            const bankDetails = settings.payment_links.bank[subscriptionType];

            // 🔧 FIX: التحقق من وجود السعر لباقة 3 أشهر
            if (!prices || !prices[subscriptionType]) {
                await ctx.replyWithMarkdown('❌ *خطأ في جلب السعر للباقة المطلوبة*', getSubscriptionKeyboard());
                return;
            }

            const displayName = getSubscriptionDisplayName(subscriptionType);
            
            const subscriptionMessage = `🏦 *باقة ${displayName} - تحويل بنكي*\n\n` +
                `💰 السعر: ${prices[subscriptionType]}$\n` +
                `⏰ المدة: ${getSubscriptionDuration(subscriptionType)}\n\n` +
                `💳 *معلومات الحساب البنكي:*\n` +
                `${bankDetails.description}\n\n` +
                `💡 *هل تريد المتابعة مع هذه الباقة؟*`;

            // إرسال صورة البنك إذا موجودة
            if (bankDetails.image && bankDetails.image.startsWith('http')) {
                try {
                    await ctx.replyWithPhoto(bankDetails.image, {
                        caption: subscriptionMessage,
                        parse_mode: 'Markdown',
                        reply_markup: {
                            inline_keyboard: [
                                [ { text: '✅ نعم، المتابعة', callback_data: `confirm_bank_${subscriptionType}` } ],
                                [ { text: '🔙 رجوع', callback_data: 'back_to_subscriptions' } ]
                            ]
                        }
                    });
                } catch (photoError) {
                    console.error('Error sending bank image:', photoError);
                    await ctx.replyWithMarkdown(subscriptionMessage, {
                        reply_markup: {
                            inline_keyboard: [
                                [ { text: '✅ نعم، المتابعة', callback_data: `confirm_bank_${subscriptionType}` } ],
                                [ { text: '🔙 رجوع', callback_data: 'back_to_subscriptions' } ]
                            ]
                        }
                    });
                }
            } else {
                await ctx.replyWithMarkdown(subscriptionMessage, {
                    reply_markup: {
                        inline_keyboard: [
                            [ { text: '✅ نعم، المتابعة', callback_data: `confirm_bank_${subscriptionType}` } ],
                            [ { text: '🔙 رجوع', callback_data: 'back_to_subscriptions' } ]
                        ]
                    }
                );
            }
        }

    } catch (error) {
        console.error('Subscription selection error:', error);
        await ctx.replyWithMarkdown('❌ *حدث خطأ في معالجة طلب الاشتراك*', getSubscriptionKeyboard());
    }
}

// 🆕 معالجة تأكيد الاشتراك - UPDATED FOR DUAL PAYMENT
async function handleSubscriptionConfirmation(ctx, callbackData) {
    try {
        const userId = ctx.from.id.toString();
        const userData = await dbManager.getUser(userId);

        if (!userData) {
            await ctx.answerCbQuery('❌ لم يتم العثور على بيانات المستخدم');
            return;
        }

        // 🔐 فحص الاشتراك أولاً
        const isSubscribed = await checkChannelSubscription(userId);
        if (!isSubscribed) {
            await ctx.answerCbQuery('❌ يجب الاشتراك في القناة أولاً');
            await ctx.replyWithMarkdown(
                `❌ *تم إلغاء الاشتراك في القناة*\n\n` +
                `📢 يرجى الاشتراك مرة أخرى في القناة:\n` +
                `👉 ${CONFIG.CHANNEL_USERNAME}\n\n` +
                `✅ بعد الاشتراك اضغط على /start للبدء`,
                Markup.inlineKeyboard([
                    [Markup.button.callback('✅ تحقق من الاشتراك', 'check_channel_subscription')]
                ])
            );
            return;
        }

        // فصل بيانات الكallback
        const parts = callbackData.split('_');
        const paymentSystem = parts[1];
        const subscriptionType = parts.slice(2).join('_');

        const settings = await dbManager.getSettings();
        const prices = settings.prices[paymentSystem];

        // 🔧 FIX: التحقق من وجود السعر
        if (!prices || !prices[subscriptionType]) {
            await ctx.answerCbQuery('❌ خطأ في بيانات السعر');
            return;
        }

        ctx.session.paymentSystem = paymentSystem;
        ctx.session.paymentType = subscriptionType;
        ctx.session.awaitingPaymentAccount = true;

        await ctx.answerCbQuery('✅ تم تأكيد الاختيار');
        
        // حذف الرسالة السابقة
        await ctx.deleteMessage(ctx.callbackQuery.message.message_id);

        if (paymentSystem === 'binance') {
            await ctx.replyWithMarkdown(
                `💳 *باقة ${getSubscriptionDisplayName(subscriptionType)} - باينانس*\n\n` +
                `💰 السعر: ${prices[subscriptionType]}$\n\n` +
                `🔐 *رقم حسابك المسجل:* \`${userData.onexbet}\`\n\n` +
                `🔢 *الآن أرسل رقم حساب 1xBet للتأكد:*`
            );
        } 
        else if (paymentSystem === 'bank') {
            const bankDetails = settings.payment_links.bank[subscriptionType];
            
            await ctx.replyWithMarkdown(
                `🏦 *باقة ${getSubscriptionDisplayName(subscriptionType)} - تحويل بنكي*\n\n` +
                `💰 السعر: ${prices[subscriptionType]}$\n\n` +
                `💳 *معلومات التحويل:*\n` +
                `${bankDetails.description}\n\n` +
                `🔐 *رقم حسابك المسجل:* \`${userData.onexbet}\`\n\n` +
                `🔢 *الآن أرسل رقم حساب 1xBet للتأكد:*`
            );
        }

    } catch (error) {
        console.error('Subscription confirmation error:', error);
        await ctx.answerCbQuery('❌ حدث خطأ في المعالجة');
    }
}

async function handleSubscriptionStatus(ctx, userData) {
    // 🔐 فحص الاشتراك أولاً
    const isSubscribed = await checkChannelSubscription(ctx.from.id.toString());
    if (!isSubscribed) {
        await ctx.replyWithMarkdown(
            `❌ *تم إلغاء الاشتراك في القناة*\n\n` +
            `📢 يرجى الاشتراك مرة أخرى في القناة:\n` +
            `👉 ${CONFIG.CHANNEL_USERNAME}\n\n` +
            `✅ بعد الاشتراك اضغط على /start للبدء`,
            Markup.inlineKeyboard([
                [Markup.button.callback('✅ تحقق من الاشتراك', 'check_channel_subscription')]
            ])
        );
        return;
    }

    let statusMessage = '';
    
    if (userData.subscription_status === 'active') {
        const remainingDays = calculateRemainingDays(userData.subscription_end_date);
        statusMessage = `✅ *اشتراكك نشط*\n\n` +
                       `📍 *الدولة:* ${userData.country || 'غير محدد'}\n` +
                       `🔐 الحساب: \`${userData.onexbet}\`\n` +
                       `📦 النوع: ${getSubscriptionDisplayName(userData.subscription_type)}\n` +
                       `📅 الانتهاء: ${new Date(userData.subscription_end_date).toLocaleDateString('ar-EG')}\n` +
                       `⏳ متبقي: ${remainingDays} يوم\n` +
                       `🔄 *آخر تحديث للخوارزمية:* ${new Date(userData.last_algorithm_check).toLocaleTimeString('ar-SA')}`;
    } else if (userData.free_attempts > 0) {
        statusMessage = `🎯 *محاولات مجانية متاحة*\n\n` +
                       `📍 *الدولة:* ${userData.country || 'غير محدد'}\n` +
                       `🔐 الحساب: \`${userData.onexbet}\`\n` +
                       `🆓 محاولات مجانية: ${userData.free_attempts}\n` +
                       `🔄 *آخر تحديث للخوارزمية:* ${new Date(userData.last_algorithm_check).toLocaleTimeString('ar-SA')}\n\n` +
                       `💳 يمكنك الاشتراك للحصول على ميزات غير محدودة`;
    } else {
        statusMessage = `🚫 *انتهت المحاولات*\n\n` +
                       `📍 *الدولة:* ${userData.country || 'غير محدد'}\n` +
                       `🔐 الحساب: \`${userData.onexbet}\`\n` +
                       `🔄 *آخر تحديث للخوارزمية:* ${new Date(userData.last_algorithm_check).toLocaleTimeString('ar-SA')}\n\n` +
                       `💳 يرجى الاشتراك للمتابعة في استخدام الخدمة`;
    }
    
    await ctx.replyWithMarkdown(statusMessage, getMainKeyboard());
}

// 🆕 تحديث معالجة صور الدفع لتشمل النظام المزدوج
async function handlePaymentScreenshot(ctx, userId) {
    try {
        const userData = await dbManager.getUser(userId);
        const photo = ctx.message.photo[ctx.message.photo.length - 1];
        const fileLink = await bot.telegram.getFileLink(photo.file_id);
        const imageUrl = fileLink.href;

        const settings = await dbManager.getSettings();
        const paymentSystem = ctx.session.paymentSystem || 'binance';
        const prices = settings.prices[paymentSystem];

        const accountNumber = ctx.session.paymentAccount || userData.onexbet;

        // 🔧 FIX: التحقق من وجود السعر والبيانات
        if (!prices || !prices[ctx.session.paymentType]) {
            await ctx.replyWithMarkdown('❌ خطأ في بيانات السعر، يرجى المحاولة مرة أخرى');
            return;
        }

        // التحقق النهائي من تطابق رقم الحساب
        if (accountNumber !== userData.onexbet) {
            await ctx.replyWithMarkdown(
                '❌ *رقم الحساب لا يتطابق مع المسجل!*\n\n' +
                `🔐 حسابك المسجل: \`${userData.onexbet}\`\n` +
                `🔢 الرقم المرسل: \`${accountNumber}\`\n\n` +
                '💡 يرجى إعادة عملية الدفع بإدخال رقم حسابك الصحيح',
                getMainKeyboard()
            );
            
            ctx.session.paymentSystem = null;
            ctx.session.paymentType = null;
            ctx.session.awaitingPaymentAccount = false;
            ctx.session.paymentAccount = null;
            return;
        }

        // رفع الصورة إلى imgbb
        const uploadResult = await imgbbUploader.uploadImageFromUrl(imageUrl);
        
        if (!uploadResult.success) {
            await ctx.replyWithMarkdown('❌ فشل في رفع الصورة، يرجى المحاولة مرة أخرى');
            return;
        }

        const paymentData = {
            user_id: userId,
            onexbet: accountNumber,
            screenshot_url: uploadResult.url,
            amount: prices[ctx.session.paymentType],
            subscription_type: ctx.session.paymentType,
            payment_system: paymentSystem,
            username: userData.username,
            timestamp: new Date().toISOString(),
            environment: process.env.NODE_ENV || 'production'
        };

        const paymentId = await dbManager.addPayment(paymentData);
        
        // إرسال الإشعار للإدارة مع الصورة
        try {
            const paymentSystemText = paymentSystem === 'binance' ? 'باينانس' : 'تحويل بنكي';
            const subscriptionDisplayName = getSubscriptionDisplayName(ctx.session.paymentType);
            
            await bot.telegram.sendPhoto(
                CONFIG.ADMIN_ID,
                uploadResult.url,
                {
                    caption: `🆕 *طلب دفع جديد - ${paymentSystemText}*\n\n` +
                    `👤 المستخدم: ${userData.username}\n` +
                    `🔐 الحساب: ${accountNumber}\n` +
                    `💰 المبلغ: ${paymentData.amount}$\n` +
                    `📦 الباقة: ${subscriptionDisplayName}\n` +
                    `💳 النظام: ${paymentSystemText}\n` +
                    `🆔 الرقم: ${paymentId}\n` +
                    `📅 الوقت: ${realTimeClock.getCurrentDateTime()}`,
                    parse_mode: 'Markdown',
                    reply_markup: {
                        inline_keyboard: [
                            [
                                { text: '✅ قبول الاشتراك', callback_data: `accept_${paymentId}` },
                                { text: '❌ رفض الطلب', callback_data: `reject_${paymentId}` }
                            ]
                        ]
                    }
                }
            );
        } catch (error) {
            console.error('Error notifying admin:', error);
        }

        await ctx.replyWithMarkdown(
            '📩 *تم استلام صورة الدفع بنجاح*\n\n' +
            `✅ الحساب: \`${accountNumber}\`\n` +
            `✅ الباقة: ${getSubscriptionDisplayName(ctx.session.paymentType)}\n` +
            `💰 المبلغ: ${paymentData.amount}$\n` +
            `💳 النظام: ${paymentSystem === 'binance' ? 'باينانس' : 'تحويل بنكي'}\n\n` +
            '✅ سيتم مراجعتها من الإدارة في أقرب وقت\n' +
            '⏰ عادةً خلال 24 ساعة\n\n' +
            `📞 للاستفسار: @GEMZGOOLBOT`,
            getMainKeyboard()
        );

        ctx.session.paymentSystem = null;
        ctx.session.paymentType = null;
        ctx.session.awaitingPaymentAccount = false;
        ctx.session.paymentAccount = null;
    } catch (error) {
        console.error('Payment screenshot error:', error);
        await ctx.replyWithMarkdown('❌ *حدث خطأ في معالجة صورة الدفع*', getMainKeyboard());
    }
}

// 🆕 🔧 ADMIN HANDLERS - UPDATED FOR DUAL PAYMENT SYSTEM

async function handleAdminCommands(ctx, text) {
    const session = ctx.session;
    
    try {
        // FIRST: Handle all specific admin steps
        if (session.adminStep === 'search_user') {
            await handleAdminSearchUser(ctx, text);
            return;
        }

        if (session.adminStep === 'broadcast') {
            await handleAdminBroadcast(ctx, text);
            return;
        }

        if (session.adminStep === 'select_payment_system') {
            await handleAdminSelectPaymentSystem(ctx, text);
            return;
        }

        if (session.adminStep === 'edit_price_and_payment') {
            await handleAdminEditPriceAndPayment(ctx, text);
            return;
        }

        if (session.adminStep === 'select_subscription_edit') {
            await handleAdminSelectSubscriptionEdit(ctx, text);
            return;
        }

        // 🆕 معالجة خطوات تعديل البنكي المنظمة
        if (session.adminStep === 'edit_bank_price') {
            await handleAdminEditBankPrice(ctx, text);
            return;
        }

        if (session.adminStep === 'edit_bank_account') {
            await handleAdminEditBankAccount(ctx, text);
            return;
        }

        // SECOND: Handle navigation and main commands
        switch (text) {
            case '📊 إحصائيات النظام':
                await handleAdminStats(ctx);
                break;
                
            case '👥 إدارة المستخدمين':
                session.adminStep = 'users';
                await ctx.replyWithMarkdown('👥 *إدارة المستخدمين*', getAdminUsersKeyboard());
                break;
                
            case '💰 طلبات الدفع':
                session.adminStep = 'payments';
                await ctx.replyWithMarkdown('💰 *إدارة طلبات الدفع*', getAdminPaymentsKeyboard());
                break;
                
            case '⚙️ الإعدادات':
                session.adminStep = 'settings';
                await ctx.replyWithMarkdown('⚙️ *الإعدادات العامة*', getAdminSettingsKeyboard());
                break;

            case '📢 إرسال إشعار':
                session.adminStep = 'broadcast';
                await ctx.replyWithMarkdown(
                    '📢 *إرسال إشعار جماعي*\n\n' +
                    '✍️ الرجاء كتابة الرسالة التي تريد إرسالها لجميع المستخدمين:'
                );
                break;

            case '🔍 بحث عن مستخدم':
                session.adminStep = 'search_user';
                await ctx.replyWithMarkdown(
                    '🔍 *البحث عن مستخدم*\n\n' +
                    'يمكنك البحث باستخدام:\n' +
                    '• آيدي المستخدم\n' +
                    '• اسم المستخدم\n' +
                    '• رقم حساب 1xBet\n\n' +
                    '🔎 الرجاء إدخال كلمة البحث:'
                );
                break;

            case '🔧 قفل/فتح البوت':
                await handleAdminToggleMaintenance(ctx);
                break;

            case '💰 تعديل الأسعار والدفع':
                await handleAdminPriceAndPaymentSettings(ctx);
                break;
                
            case '⚙️ الإعدادات العامة':
                await handleAdminGeneralSettings(ctx);
                break;

            case '💾 نسخ احتياطي':
                await ctx.replyWithMarkdown('🔄 *جاري إنشاء نسخة احتياطية...*');
                const backupSuccess = await dbManager.backupData();
                if (backupSuccess) {
                    await ctx.replyWithMarkdown('✅ *تم إنشاء النسخة الاحتياطية بنجاح*');
                } else {
                    await ctx.replyWithMarkdown('❌ *فشل في إنشاء النسخة الاحتياطية*');
                }
                return;

            case '📥 استعادة البيانات':
                await ctx.replyWithMarkdown('✅ *البيانات مستعادة تلقائياً من Firebase*');
                return;
                
            case '🔄 إعادة التعيين':
                await handleAdminReset(ctx);
                break;

            case '🔙 رجوع':
                session.adminStep = 'main';
                await ctx.replyWithMarkdown('🔙 *العودة للقائمة الرئيسية*', getAdminMainKeyboard());
                break;

            case '📋 قائمة المستخدمين':
                await handleAdminUsersList(ctx);
                break;
                
            case '✅ المشتركين النشطين':
                await handleAdminActiveUsers(ctx);
                break;
                
            case '🆓 المستخدمين المجانين':
                await handleAdminFreeUsers(ctx);
                break;
                
            case '📈 إحصائيات المستخدمين':
                await handleAdminUsersStats(ctx);
                break;

            case '📥 الطلبات المعلقة':
                await handleAdminPendingPayments(ctx);
                break;
                
            case '✅ الطلبات المقبولة':
                await handleAdminAcceptedPayments(ctx);
                break;
                
            case '❌ الطلبات المرفوضة':
                await handleAdminRejectedPayments(ctx);
                break;
                
            case '📋 كل الطلبات':
                await handleAdminAllPayments(ctx);
                break;
                
            case '🔙 الخروج من الإدمن':
                session.adminMode = false;
                session.adminStep = null;
                // 🆕 التعديل: العودة مباشرة إلى القائمة الرئيسية بدلاً من البقاء ثابت
                await ctx.replyWithMarkdown('🔒 *تم الخروج من وضع الإدمن*\n\n🎯 *العودة للقائمة الرئيسية*', getMainKeyboard());
                break;
                
            default:
                await ctx.replyWithMarkdown('❌ *خيار غير معروف*', getAdminMainKeyboard());
                break;
        }
    } catch (error) {
        console.error('Admin commands error:', error);
        await ctx.replyWithMarkdown('❌ حدث خطأ في معالجة الأمر', getAdminMainKeyboard());
    }
}

// البحث عن مستخدم
async function handleAdminSearchUser(ctx, query) {
    try {
        console.log('🔍 Searching for users with query:', query);
        
        const users = await dbManager.searchUsers(query);
        
        if (users.length === 0) {
            await ctx.replyWithMarkdown('❌ *لم يتم العثور على مستخدمين*', getAdminMainKeyboard());
            ctx.session.adminStep = 'main';
            return;
        }

        let message = `🔍 *نتائج البحث (${users.length})*\n\n`;
        
        users.slice(0, 10).forEach((user, index) => {
            const status = user.subscription_status === 'active' ? '✅' : '🆓';
            const username = user.username || 'بدون اسم';
            const onexbet = user.onexbet || 'غير محدد';
            const predictions = user.total_predictions || 0;
            const profit = user.total_profit || 0;
            
            message += `${index + 1}. ${username} ${status}\n`;
            message += `   👤 ${user.user_id} | 🔐 ${onexbet}\n`;
            message += `   📊 ${predictions} توقع | 💰 ${profit}$\n\n`;
        });

        if (users.length > 10) {
            message += `... و ${users.length - 10} مستخدم آخر`;
        }

        await ctx.replyWithMarkdown(message, getAdminMainKeyboard());
        ctx.session.adminStep = 'main';
        
    } catch (error) {
        console.error('Admin search user error:', error);
        await ctx.replyWithMarkdown('❌ حدث خطأ في البحث', getAdminMainKeyboard());
        ctx.session.adminStep = 'main';
    }
}

// الإشعار الجماعي
async function handleAdminBroadcast(ctx, message) {
    try {
        console.log('📢 Starting broadcast to all users');
        
        const users = await dbManager.getAllUsers();
        let success = 0;
        let failed = 0;

        const broadcastMsg = await ctx.replyWithMarkdown('📢 *جاري إرسال الإشعار لجميع المستخدمين...*');

        // إرسال الرسالة لكل مستخدم
        for (const user of users) {
            try {
                await bot.telegram.sendMessage(
                    user.user_id, 
                    `📢 *إشعار من الإدارة*\n\n${message}`,
                    { parse_mode: 'Markdown' }
                );
                success++;
                
                // تأخير بسيط لتجنب حظر التليجرام
                await new Promise(resolve => setTimeout(resolve, 50));
                
            } catch (error) {
                console.log(`❌ Failed to send to user ${user.user_id}:`, error.message);
                failed++;
            }
        }

        await ctx.replyWithMarkdown(
            `📢 *تم إرسال الإشعار بنجاح*\n\n` +
            `✅ تم الإرسال بنجاح: ${success} مستخدم\n` +
            `❌ فشل في الإرسال: ${failed} مستخدم\n` +
            `👥 الإجمالي: ${users.length} مستخدم`,
            getAdminMainKeyboard()
        );

        ctx.session.adminStep = 'main';
        
    } catch (error) {
        console.error('Admin broadcast error:', error);
        await ctx.replyWithMarkdown('❌ حدث خطأ في إرسال الإشعار', getAdminMainKeyboard());
        ctx.session.adminStep = 'main';
    }
}

async function handleAdminToggleMaintenance(ctx) {
    try {
        const settings = await dbManager.getSettings();
        const newStatus = !settings.maintenance_mode;
        
        await dbManager.setMaintenanceMode(newStatus);
        
        if (newStatus) {
            await ctx.replyWithMarkdown('🔒 *تم قفل البوت للمستخدمين*', getAdminMainKeyboard());
        } else {
            await ctx.replyWithMarkdown('🔓 *تم فتح البوت للمستخدمين*', getAdminMainKeyboard());
        }
    } catch (error) {
        console.error('Toggle maintenance error:', error);
        await ctx.replyWithMarkdown('❌ حدث خطأ في تغيير حالة البوت', getAdminMainKeyboard());
    }
}

async function handleAdminStats(ctx) {
    try {
        const stats = await dbManager.getAllStats();
        
        const statsMessage = `
📊 *إحصائيات النظام*

👥 *المستخدمين:*
• الإجمالي: ${stats.totalUsers}
• نشطين: ${stats.activeUsers}
• مجانين: ${stats.freeUsers}
• متصلين الآن: ${stats.onlineUsers}

💰 *المدفوعات:*
• المعلقة: ${stats.pendingPayments}
• الإجمالي: ${stats.totalPayments}

📈 *النشاط:*
• التوقعات: ${stats.totalPredictions}
• الأرباح: ${stats.totalProfit}$
• الرهانات: ${stats.totalBets}$

🔧 *حالة البوت:* ${dbManager.isMaintenanceMode() ? '🔒 مقفل' : '🔓 مفتوح'}
🕒 *الوقت الحالي:* ${realTimeClock.getCurrentDateTime()}
        `;
        
        await ctx.replyWithMarkdown(statsMessage, getAdminMainKeyboard());
    } catch (error) {
        console.error('Admin stats error:', error);
        await ctx.replyWithMarkdown('❌ حدث خطأ في جلب الإحصائيات', getAdminMainKeyboard());
    }
}

async function handleAdminUsersList(ctx) {
    try {
        const users = await dbManager.getAllUsers();
        
        let message = `📋 *قائمة المستخدمين (${users.length})*\n\n`;
        
        users.slice(0, 10).forEach((user, index) => {
            const status = user.subscription_status === 'active' ? '✅' : '🆓';
            message += `${index + 1}. ${user.username || 'بدون اسم'} ${status}\n`;
            message += `   👤 ${user.user_id} | 🔐 ${user.onexbet}\n\n`;
        });
        
        if (users.length > 10) {
            message += `... و ${users.length - 10} مستخدم آخر`;
        }
        
        await ctx.replyWithMarkdown(message, getAdminUsersKeyboard());
    } catch (error) {
        console.error('Admin users list error:', error);
        await ctx.replyWithMarkdown('❌ حدث خطأ في جلب قائمة المستخدمين', getAdminUsersKeyboard());
    }
}

async function handleAdminActiveUsers(ctx) {
    try {
        const users = await dbManager.getAllUsers();
        const activeUsers = users.filter(u => u.subscription_status === 'active');
        
        let message = `✅ *المشتركين النشطين (${activeUsers.length})*\n\n`;
        
        activeUsers.slice(0, 10).forEach((user, index) => {
            const remainingDays = calculateRemainingDays(user.subscription_end_date);
            message += `${index + 1}. ${user.username || 'بدون اسم'}\n`;
            message += `   📦 ${getSubscriptionDisplayName(user.subscription_type)} | ⏳ ${remainingDays} يوم\n\n`;
        });
        
        await ctx.replyWithMarkdown(message, getAdminUsersKeyboard());
    } catch (error) {
        console.error('Admin active users error:', error);
        await ctx.replyWithMarkdown('❌ حدث خطأ في جلب المشتركين النشطين', getAdminUsersKeyboard());
    }
}

async function handleAdminFreeUsers(ctx) {
    try {
        const users = await dbManager.getAllUsers();
        const freeUsers = users.filter(u => u.subscription_status === 'free');
        
        let message = `🆓 *المستخدمين المجانين (${freeUsers.length})*\n\n`;
        
        freeUsers.slice(0, 10).forEach((user, index) => {
            message += `${index + 1}. ${user.username || 'بدون اسم'}\n`;
            message += `   🆓 محاولات: ${user.free_attempts}\n\n`;
        });
        
        await ctx.replyWithMarkdown(message, getAdminUsersKeyboard());
    } catch (error) {
        console.error('Admin free users error:', error);
        await ctx.replyWithMarkdown('❌ حدث خطأ في جلب المستخدمين المجانين', getAdminUsersKeyboard());
    }
}

async function handleAdminUsersStats(ctx) {
    try {
        const stats = await dbManager.getAllStats();
        
        const message = `
📈 *إحصائيات المستخدمين*

👥 الإجمالي: ${stats.totalUsers}
✅ نشطين: ${stats.activeUsers}
🆓 مجانين: ${stats.freeUsers}
🟢 متصلين: ${stats.onlineUsers}

📊 إجمالي التوقعات: ${stats.totalPredictions}
💰 إجمالي الرهانات: ${stats.totalBets}$
💵 إجمالي الأرباح: ${stats.totalProfit}$
        `;
        
        await ctx.replyWithMarkdown(message, getAdminUsersKeyboard());
    } catch (error) {
        console.error('Admin users stats error:', error);
        await ctx.replyWithMarkdown('❌ حدث خطأ في جلب إحصائيات المستخدمين', getAdminUsersKeyboard());
    }
}

async function handleAdminPendingPayments(ctx) {
    try {
        const payments = await dbManager.getPendingPayments();
        
        if (payments.length === 0) {
            await ctx.replyWithMarkdown('✅ *لا توجد طلبات دفع معلقة*', getAdminPaymentsKeyboard());
            return;
        }
        
        for (const payment of payments) {
            await ctx.replyWithPhoto(
                payment.screenshot_url,
                {
                    caption: `📥 *طلب دفع معلق #${payment.id}*\n\n` +
                    `👤 المستخدم: ${payment.username}\n` +
                    `🔐 الحساب: ${payment.onexbet}\n` +
                    `💰 المبلغ: ${payment.amount}$\n` +
                    `📦 الباقة: ${getSubscriptionDisplayName(payment.subscription_type)}\n` +
                    `💳 النظام: ${payment.payment_system === 'binance' ? 'باينانس' : 'تحويل بنكي'}\n` +
                    `📅 التاريخ: ${realTimeClock.getCurrentDateTime()}`,
                    reply_markup: {
                        inline_keyboard: [
                            [
                                { text: '✅ قبول الاشتراك', callback_data: `accept_${payment.id}` },
                                { text: '❌ رفض الطلب', callback_data: `reject_${payment.id}` }
                            ]
                        ]
                    }
                }
            );
        }
    } catch (error) {
        console.error('Admin pending payments error:', error);
        await ctx.replyWithMarkdown('❌ حدث خطأ في جلب الطلبات المعلقة', getAdminPaymentsKeyboard());
    }
}

async function handleAdminAcceptedPayments(ctx) {
    try {
        const payments = await dbManager.getAllPayments();
        const acceptedPayments = payments.filter(p => p.status === 'accepted');
        
        if (acceptedPayments.length === 0) {
            await ctx.replyWithMarkdown('✅ *لا توجد طلبات دفع مقبولة*', getAdminPaymentsKeyboard());
            return;
        }
        
        let message = `✅ *الطلبات المقبولة (${acceptedPayments.length})*\n\n`;
        
        acceptedPayments.slice(0, 10).forEach((payment, index) => {
            message += `${index + 1}. ${payment.username} | ${payment.onexbet}\n`;
            message += `   💰 ${payment.amount}$ | 📦 ${getSubscriptionDisplayName(payment.subscription_type)} | 💳 ${payment.payment_system === 'binance' ? 'باينانس' : 'بنكي'}\n\n`;
        });
        
        await ctx.replyWithMarkdown(message, getAdminPaymentsKeyboard());
    } catch (error) {
        console.error('Admin accepted payments error:', error);
        await ctx.replyWithMarkdown('❌ حدث خطأ في جلب الطلبات المقبولة', getAdminPaymentsKeyboard());
    }
}

async function handleAdminRejectedPayments(ctx) {
    try {
        const payments = await dbManager.getAllPayments();
        const rejectedPayments = payments.filter(p => p.status === 'rejected');
        
        if (rejectedPayments.length === 0) {
            await ctx.replyWithMarkdown('✅ *لا توجد طلبات دفع مرفوضة*', getAdminPaymentsKeyboard());
            return;
        }
        
        let message = `❌ *الطلبات المرفوضة (${rejectedPayments.length})*\n\n`;
        
        rejectedPayments.slice(0, 10).forEach((payment, index) => {
            message += `${index + 1}. ${payment.username} | ${payment.onexbet}\n`;
            message += `   💰 ${payment.amount}$ | 📦 ${getSubscriptionDisplayName(payment.subscription_type)} | 💳 ${payment.payment_system === 'binance' ? 'باينانس' : 'بنكي'}\n\n`;
        });
        
        await ctx.replyWithMarkdown(message, getAdminPaymentsKeyboard());
    } catch (error) {
        console.error('Admin rejected payments error:', error);
        await ctx.replyWithMarkdown('❌ حدث خطأ في جلب الطلبات المرفوضة', getAdminPaymentsKeyboard());
    }
}

async function handleAdminAllPayments(ctx) {
    try {
        const payments = await dbManager.getAllPayments();
        
        if (payments.length === 0) {
            await ctx.replyWithMarkdown('✅ *لا توجد طلبات دفع*', getAdminPaymentsKeyboard());
            return;
        }
        
        const pending = payments.filter(p => p.status === 'pending').length;
        const accepted = payments.filter(p => p.status === 'accepted').length;
        const rejected = payments.filter(p => p.status === 'rejected').length;
        const binancePayments = payments.filter(p => p.payment_system === 'binance').length;
        const bankPayments = payments.filter(p => p.payment_system === 'bank').length;
        
        const message = `
📋 *جميع طلبات الدفع*

📥 المعلقة: ${pending}
✅ المقبولة: ${accepted}
❌ المرفوضة: ${rejected}
💳 باينانس: ${binancePayments}
🏦 بنكي: ${bankPayments}
💰 الإجمالي: ${payments.length}
        `;
        
        await ctx.replyWithMarkdown(message, getAdminPaymentsKeyboard());
    } catch (error) {
        console.error('Admin all payments error:', error);
        await ctx.replyWithMarkdown('❌ حدث خطأ في جلب جميع الطلبات', getAdminPaymentsKeyboard());
    }
}

// 🆕 🔧 ADMIN PAYMENT SYSTEM - UPDATED FOR DUAL PAYMENT

async function handleAdminPriceAndPaymentSettings(ctx) {
    try {
        await ctx.replyWithMarkdown(
            '💰 *تعديل الأسعار ومعلومات الدفع*\n\n' +
            '📝 اختر نظام الدفع الذي تريد تعديله:',
            getAdminPaymentSystemKeyboard()
        );
        ctx.session.adminStep = 'select_payment_system';
    } catch (error) {
        console.error('Admin price and payment settings error:', error);
        await ctx.replyWithMarkdown('❌ حدث خطأ في بدء التعديل', getAdminSettingsKeyboard());
    }
}

// 🆕 معالجة اختيار نظام الدفع في الإدمن
async function handleAdminSelectPaymentSystem(ctx, text) {
    try {
        if (text === '🔙 رجوع') {
            ctx.session.adminStep = 'settings';
            await ctx.replyWithMarkdown('🔙 *العودة للإعدادات*', getAdminSettingsKeyboard());
            return;
        }

        const paymentSystemMap = {
            '💳 نظام باينانس': 'binance',
            '🏦 نظام التحويل البنكي': 'bank'
        };

        const paymentSystem = paymentSystemMap[text];
        if (!paymentSystem) {
            await ctx.replyWithMarkdown('❌ *اختيار غير صحيح*', getAdminPaymentSystemKeyboard());
            return;
        }

        ctx.session.adminPaymentSystem = paymentSystem;
        ctx.session.adminStep = 'select_subscription_edit';

        await ctx.replyWithMarkdown(
            `🔧 *تعديل ${text}*\n\n` +
            '📝 اختر نوع الاشتراك الذي تريد تعديله:',
            getAdminPaymentTypesKeyboard()
        );

    } catch (error) {
        console.error('Admin select payment system error:', error);
        await ctx.replyWithMarkdown('❌ حدث خطأ', getAdminSettingsKeyboard());
    }
}

// 🆕 تحديث معالجة تعديل الأسعار والدفع للنظام المزدوج
async function handleAdminSelectSubscriptionEdit(ctx, text) {
    try {
        const subscriptionTypeMap = {
            '💰 أسبوعي': 'week',
            '💰 شهري': 'month', 
            '💰 3 أشهر': 'three_months',
            '💰 سنوي': 'year'
        };

        if (text === '🔙 رجوع') {
            ctx.session.adminStep = 'select_payment_system';
            await ctx.replyWithMarkdown('🔙 *العودة لاختيار نظام الدفع*', getAdminPaymentSystemKeyboard());
            return;
        }

        const subscriptionType = subscriptionTypeMap[text];
        if (!subscriptionType) {
            await ctx.replyWithMarkdown('❌ *اختيار غير صحيح*', getAdminPaymentTypesKeyboard());
            return;
        }

        ctx.session.editingSubscriptionType = subscriptionType;

        const paymentSystem = ctx.session.adminPaymentSystem;

        if (paymentSystem === 'binance') {
            ctx.session.adminStep = 'edit_price_and_payment';
            const settings = await dbManager.getSettings();
            
            // 🔧 FIX: التحقق من وجود الأسعار والروابط
            const currentPrice = settings.prices?.binance?.[subscriptionType] || CONFIG.SUBSCRIPTION_PRICES.binance[subscriptionType];
            const currentLink = settings.payment_links?.binance?.[subscriptionType] || 'غير محدد';

            await ctx.replyWithMarkdown(
                `🔧 *تعديل ${text} - باينانس*\n\n` +
                `💰 السعر الحالي: ${currentPrice}$\n` +
                `📎 رابط/صورة الدفع الحالي: ${currentLink}\n\n` +
                `📝 *الآن يمكنك:*\n` +
                `• إرسال السعر الجديد (مثال: 15)\n` +
                `• أو إرسال رابط دفع جديد\n` +
                `• أو إرسال صورة QR\n` +
                `• أو كتابة "إلغاء" للرجوع\n\n` +
                `💡 *أرسل السعر الجديد أولاً:*`
            );
        } 
        else if (paymentSystem === 'bank') {
            // 🆕 نظام تعديل البنكي المنظم
            ctx.session.bankEditData = {
                subscriptionType: subscriptionType,
                step: 'price'
            };
            ctx.session.adminStep = 'edit_bank_price';
            
            const settings = await dbManager.getSettings();
            
            // 🔧 FIX: التحقق من وجود الأسعار والتفاصيل
            const currentPrice = settings.prices?.bank?.[subscriptionType] || CONFIG.SUBSCRIPTION_PRICES.bank[subscriptionType];
            const currentBankDetails = settings.payment_links?.bank?.[subscriptionType] || CONFIG.PAYMENT_LINKS.bank[subscriptionType];

            await ctx.replyWithMarkdown(
                `🔧 *تعديل ${text} - تحويل بنكي*\n\n` +
                `💰 *السعر الحالي:* ${currentPrice}$\n` +
                `💳 *رقم الحساب الحالي:* ${currentBankDetails.account}\n` +
                `📋 *الوصف الحالي:*\n${currentBankDetails.description}\n\n` +
                `📝 *الآن أرسل السعر الجديد للباقة (بالدولار):*`
            );
        }

    } catch (error) {
        console.error('Admin select subscription edit error:', error);
        await ctx.replyWithMarkdown('❌ حدث خطأ', getAdminSettingsKeyboard());
    }
}

// 🆕 معالجة تعديل سعر البنكي
async function handleAdminEditBankPrice(ctx, text) {
    try {
        if (text === 'إلغاء') {
            ctx.session.adminStep = 'settings';
            ctx.session.editingSubscriptionType = null;
            ctx.session.adminPaymentSystem = null;
            ctx.session.bankEditData = {};
            await ctx.replyWithMarkdown('🔙 *تم الإلغاء*', getAdminSettingsKeyboard());
            return;
        }

        if (!isNaN(text) && parseFloat(text) > 0) {
            const priceNum = parseFloat(text);
            const subscriptionType = ctx.session.bankEditData.subscriptionType;
            
            // حفظ السعر مؤقتاً
            ctx.session.bankEditData.price = priceNum;
            ctx.session.bankEditData.step = 'account';
            ctx.session.adminStep = 'edit_bank_account';

            await ctx.replyWithMarkdown(
                `✅ *تم حفظ السعر:* ${priceNum}$\n\n` +
                `📝 *الآن أرسل رقم الحساب البنكي الجديد:*`
            );
        } else {
            await ctx.replyWithMarkdown('❌ *إدخال غير صحيح!*\n\nيرجى إرسال سعر صحيح (مثال: 15)');
        }

    } catch (error) {
        console.error('Admin edit bank price error:', error);
        await ctx.replyWithMarkdown('❌ حدث خطأ في التعديل');
    }
}

// 🆕 معالجة تعديل رقم حساب البنكي
async function handleAdminEditBankAccount(ctx, text) {
    try {
        if (text === 'إلغاء') {
            ctx.session.adminStep = 'settings';
            ctx.session.editingSubscriptionType = null;
            ctx.session.adminPaymentSystem = null;
            ctx.session.bankEditData = {};
            await ctx.replyWithMarkdown('🔙 *تم الإلغاء*', getAdminSettingsKeyboard());
            return;
        }

        if (text.length > 5) {
            const subscriptionType = ctx.session.bankEditData.subscriptionType;
            
            // حفظ رقم الحساب مؤقتاً
            ctx.session.bankEditData.account = text;
            ctx.session.bankEditData.step = 'image';
            ctx.session.adminStep = 'edit_bank_image';

            await ctx.replyWithMarkdown(
                `✅ *تم حفظ رقم الحساب:* ${text}\n\n` +
                `🖼️ *الآن أرسل صورة الحساب البنكي:*\n\n` +
                `💡 *ملاحظة:* هذه الصورة ستظهر للمستخدمين عند اختيار الباقة`
            );
        } else {
            await ctx.replyWithMarkdown('❌ *إدخال غير صحيح!*\n\nيرجى إرسال رقم حساب بنكي صحيح');
        }

    } catch (error) {
        console.error('Admin edit bank account error:', error);
        await ctx.replyWithMarkdown('❌ حدث خطأ في التعديل');
    }
}

// 🆕 معالجة رفع صورة البنك من الإدمن
async function handleAdminBankImageUpload(ctx, userId) {
    try {
        const subscriptionType = ctx.session.bankEditData.subscriptionType;
        const price = ctx.session.bankEditData.price;
        const account = ctx.session.bankEditData.account;
        
        if (!subscriptionType) {
            await ctx.replyWithMarkdown('❌ لم يتم اختيار نوع الاشتراك', getAdminSettingsKeyboard());
            return;
        }

        const photo = ctx.message.photo[ctx.message.photo.length - 1];
        const fileLink = await bot.telegram.getFileLink(photo.file_id);
        const imageUrl = fileLink.href;

        // رفع الصورة إلى imgbb
        const uploadResult = await imgbbUploader.uploadImageFromUrl(imageUrl);
        
        if (!uploadResult.success) {
            await ctx.replyWithMarkdown('❌ فشل في رفع الصورة، يرجى المحاولة مرة أخرى');
            return;
        }

        const settings = await dbManager.getSettings();
        
        // 🔧 FIX: التأكد من وجود الكائنات
        if (!settings.prices) settings.prices = {};
        if (!settings.prices.bank) settings.prices.bank = {};
        if (!settings.payment_links) settings.payment_links = {};
        if (!settings.payment_links.bank) settings.payment_links.bank = {};
        
        // تحديث السعر
        settings.prices.bank[subscriptionType] = price;
        
        // 🆕 إنشاء الوصف تلقائياً
        const description = generateBankDescription(subscriptionType, price, account);
        
        // تحديث بيانات البنك
        settings.payment_links.bank[subscriptionType] = {
            account: account,
            image: uploadResult.url,
            description: description
        };
        
        await dbManager.updateSettings(settings);

        await ctx.replyWithMarkdown(
            `🎉 *تم التحديث بنجاح!*\n\n` +
            `📦 *${getSubscriptionDisplayName(subscriptionType)} - تحويل بنكي*\n\n` +
            `💰 السعر: ${price}$\n` +
            `💳 رقم الحساب: ${account}\n` +
            `🖼️ تم رفع صورة الحساب\n` +
            `📋 تم إنشاء الوصف تلقائياً\n\n` +
            `✅ *تم حفظ جميع التغييرات في النظام*`,
            getAdminSettingsKeyboard()
        );

        // تنظيف الجلسة
        ctx.session.adminStep = 'settings';
        ctx.session.editingSubscriptionType = null;
        ctx.session.adminPaymentSystem = null;
        ctx.session.bankEditData = {};

    } catch (error) {
        console.error('Admin bank image upload error:', error);
        await ctx.replyWithMarkdown('❌ حدث خطأ في رفع الصورة', getAdminSettingsKeyboard());
    }
}

// 🆕 معالجة رفع صورة الدفع من الإدمن (باينانس)
async function handleAdminPaymentImageUpload(ctx, userId) {
    try {
        const subscriptionType = ctx.session.editingSubscriptionType;
        const paymentSystem = ctx.session.adminPaymentSystem;
        
        if (!subscriptionType || paymentSystem !== 'binance') {
            await ctx.replyWithMarkdown('❌ لم يتم اختيار نوع الاشتراك أو ليس نظام باينانس', getAdminSettingsKeyboard());
            return;
        }

        const photo = ctx.message.photo[ctx.message.photo.length - 1];
        const fileLink = await bot.telegram.getFileLink(photo.file_id);
        const imageUrl = fileLink.href;

        // رفع الصورة إلى imgbb
        const uploadResult = await imgbbUploader.uploadImageFromUrl(imageUrl);
        
        if (!uploadResult.success) {
            await ctx.replyWithMarkdown('❌ فشل في رفع الصورة، يرجى المحاولة مرة أخرى');
            return;
        }

        const settings = await dbManager.getSettings();
        
        // 🔧 FIX: التأكد من وجود الكائنات
        if (!settings.payment_links) settings.payment_links = {};
        if (!settings.payment_links.binance) settings.payment_links.binance = {};
        
        settings.payment_links.binance[subscriptionType] = uploadResult.url;
        await dbManager.updateSettings(settings);

        await ctx.replyWithMarkdown(
            `✅ *تم التحديث بنجاح!*\n\n` +
            `📦 ${getSubscriptionDisplayName(subscriptionType)} - باينانس\n` +
            `💰 السعر: ${settings.prices.binance[subscriptionType]}$\n` +
            `🖼️ تم تحديث صورة الدفع\n\n` +
            `🔄 تم حفظ التغييرات في النظام`,
            getAdminSettingsKeyboard()
        );

        ctx.session.adminStep = 'settings';
        ctx.session.editingSubscriptionType = null;
        ctx.session.adminPaymentSystem = null;
    } catch (error) {
        console.error('Admin payment image upload error:', error);
        await ctx.replyWithMarkdown('❌ حدث خطأ في رفع الصورة', getAdminSettingsKeyboard());
    }
}

// 🛠️ الإصلاح الرئيسي: معالجة تعديل الأسعار والدفع (باينانس) - FIXED FOR three_months
async function handleAdminEditPriceAndPayment(ctx, text) {
    try {
        if (text === 'إلغاء') {
            ctx.session.adminStep = 'settings';
            ctx.session.editingSubscriptionType = null;
            ctx.session.adminPaymentSystem = null;
            await ctx.replyWithMarkdown('🔙 *تم الإلغاء*', getAdminSettingsKeyboard());
            return;
        }

        const subscriptionType = ctx.session.editingSubscriptionType;
        const paymentSystem = ctx.session.adminPaymentSystem;
        
        if (!subscriptionType || !paymentSystem) {
            await ctx.replyWithMarkdown('❌ لم يتم اختيار نوع الاشتراك أو نظام الدفع', getAdminSettingsKeyboard());
            return;
        }

        const settings = await dbManager.getSettings();

        if (paymentSystem === 'binance') {
            // نظام باينانس
            if (!isNaN(text) && parseFloat(text) > 0) {
                const priceNum = parseFloat(text);
                
                // 🔧 FIX: Ensure the prices object exists
                if (!settings.prices) settings.prices = {};
                if (!settings.prices.binance) settings.prices.binance = {};
                
                settings.prices.binance[subscriptionType] = priceNum;
                await dbManager.updateSettings(settings);

                await ctx.replyWithMarkdown(
                    `✅ *تم تحديث السعر بنجاح*\n\n` +
                    `💰 ${getSubscriptionDisplayName(subscriptionType)}: ${priceNum}$\n\n` +
                    `📝 *الآن أرسل رابط الدفع الجديد أو صورة QR:*`
                );
            }
            else if (text.startsWith('http') || text.startsWith('https://i.ibb.co')) {
                // 🔧 FIX: Ensure the payment_links object exists
                if (!settings.payment_links) settings.payment_links = {};
                if (!settings.payment_links.binance) settings.payment_links.binance = {};
                
                settings.payment_links.binance[subscriptionType] = text;
                await dbManager.updateSettings(settings);

                await ctx.replyWithMarkdown(
                    `✅ *تم التحديث بنجاح!*\n\n` +
                    `📦 ${getSubscriptionDisplayName(subscriptionType)} - باينانس\n` +
                    `💰 السعر: ${settings.prices.binance[subscriptionType]}$\n` +
                    `📎 تم حفظ ${text.startsWith('https://i.ibb.co') ? 'صورة الدفع' : 'رابط الدفع'} بنجاح\n\n` +
                    `🔄 تم حفظ التغييرات في النظام`,
                    getAdminSettingsKeyboard()
                );

                ctx.session.adminStep = 'settings';
                ctx.session.editingSubscriptionType = null;
                ctx.session.adminPaymentSystem = null;
            } else {
                await ctx.replyWithMarkdown('❌ *إدخال غير صحيح!*\n\nيرجى إرسال سعر صحيح أو رابط يبدأ بـ http أو https://i.ibb.co');
            }
        }

    } catch (error) {
        console.error('Admin edit price and payment error:', error);
        await ctx.replyWithMarkdown('❌ حدث خطأ في التعديل: ' + error.message);
    }
}

// 🆕 تحديث الإعدادات العامة لعرض النظام المزدوج
async function handleAdminGeneralSettings(ctx) {
    try {
        const settings = await dbManager.getSettings();
        
        // 🔧 FIX: التحقق من وجود جميع الكائنات
        const binancePrices = settings.prices?.binance || CONFIG.SUBSCRIPTION_PRICES.binance;
        const bankPrices = settings.prices?.bank || CONFIG.SUBSCRIPTION_PRICES.bank;
        const binanceLinks = settings.payment_links?.binance || CONFIG.PAYMENT_LINKS.binance;
        const bankLinks = settings.payment_links?.bank || CONFIG.PAYMENT_LINKS.bank;
        
        const generalMessage = `
⚙️ *الإعدادات العامة*

🔧 حالة البوت: ${settings.maintenance_mode ? '🔒 مقفل' : '🔓 مفتوح'}
🕒 آخر تحديث: ${new Date(settings.updated_at).toLocaleString('ar-EG')}
⏰ الوقت الحالي: ${realTimeClock.getCurrentDateTime()}

💳 *أسعار باينانس:*
• أسبوعي: ${binancePrices.week}$
• شهري: ${binancePrices.month}$
• 3 أشهر: ${binancePrices.three_months}$ 
• سنوي: ${binancePrices.year}$

🏦 *أسعار التحويل البنكي:*
• أسبوعي: ${bankPrices.week}$
• شهري: ${bankPrices.month}$
• 3 أشهر: ${bankPrices.three_months}$ 
• سنوي: ${bankPrices.year}$

🔗 *معلومات باينانس:*
• أسبوعي: ${binanceLinks.week.startsWith('https://i.ibb.co') ? '[صورة]' : binanceLinks.week}
• شهري: ${binanceLinks.month.startsWith('https://i.ibb.co') ? '[صورة]' : binanceLinks.month}
• 3 أشهر: ${binanceLinks.three_months.startsWith('https://i.ibb.co') ? '[صورة]' : binanceLinks.three_months}
• سنوي: ${binanceLinks.year.startsWith('https://i.ibb.co') ? '[صورة]' : binanceLinks.year}

💳 *معلومات البنك:*
• أسبوعي: ${bankLinks.week?.account || 'غير محدد'}
• شهري: ${bankLinks.month?.account || 'غير محدد'}
• 3 أشهر: ${bankLinks.three_months?.account || 'غير محدد'}
• سنوي: ${bankLinks.year?.account || 'غير محدد'}
        `;
        
        await ctx.replyWithMarkdown(generalMessage, getAdminSettingsKeyboard());
    } catch (error) {
        console.error('Admin general settings error:', error);
        await ctx.replyWithMarkdown('❌ حدث خطأ في جلب الإعدادات العامة', getAdminSettingsKeyboard());
    }
}

async function handleAdminReset(ctx) {
    try {
        const resetKeyboard = Markup.inlineKeyboard([
            [
                Markup.button.callback('✅ نعم، إعادة التعيين', 'confirm_reset'),
                Markup.button.callback('❌ إلغاء', 'cancel_reset')
            ]
        ]);

        await ctx.replyWithMarkdown(
            '⚠️ *تحذير: إعادة التعيين*\n\n' +
            'هذا الإجراء سيعيد جميع الإعدادات إلى القيم الافتراضية.\n\n' +
            '❌ *سيتم حذف:*\n' +
            '• جميع إعدادات الأسعار\n' +
            '• جميع روابط الدفع\n' +
            '• إعدادات الصور\n\n' +
            '✅ *لن يتم حذف:*\n' +
            '• بيانات المستخدمين\n' +
            '• طلبات الدفع\n\n' +
            '⚠️ *هل أنت متأكد من المتابعة؟*',
            resetKeyboard
        );
    } catch (error) {
        console.error('Admin reset error:', error);
        await ctx.replyWithMarkdown('❌ حدث خطأ في إعداد إعادة التعيين', getAdminSettingsKeyboard());
    }
}

async function handlePaymentAccept(ctx, paymentId) {
    try {
        const payment = await dbManager.getPayment(paymentId);
        if (!payment) {
            await ctx.answerCbQuery('❌ طلب الدفع غير موجود');
            return;
        }
        
        const userData = await dbManager.getUser(payment.user_id);
        if (!userData) {
            await ctx.answerCbQuery('❌ المستخدم غير موجود');
            return;
        }
        
        const startDate = new Date().toISOString();
        const endDate = addSubscriptionDays(startDate, payment.subscription_type);
        
        userData.subscription_status = 'active';
        userData.subscription_type = payment.subscription_type;
        userData.subscription_start_date = startDate;
        userData.subscription_end_date = endDate;
        userData.free_attempts = 0;
        
        await dbManager.saveUser(payment.user_id, userData);
        await dbManager.updatePayment(paymentId, { 
            status: 'accepted',
            processed_at: new Date().toISOString()
        });
        
        // إشعار المستخدم
        try {
            await bot.telegram.sendMessage(
                payment.user_id,
                `🎉 *تم تفعيل اشتراكك بنجاح!*\n\n` +
                `✅ ${getSubscriptionDisplayName(payment.subscription_type)}\n` +
                `💰 ${payment.amount}$\n` +
                `💳 ${payment.payment_system === 'binance' ? 'باينانس' : 'تحويل بنكي'}\n` +
                `📅 الانتهاء: ${new Date(endDate).toLocaleDateString('ar-EG')}\n` +
                `⏳ المتبقي: ${calculateRemainingDays(endDate)} يوم\n\n` +
                `🎯 يمكنك الآن استخدام الخدمة بدون حدود`,
                { parse_mode: 'Markdown' }
            );
        } catch (error) {
            console.error('Error notifying user:', error);
        }

        // إرسال الإشعار للقناة
        await channelNotifier.sendSubscriptionNotification(userData, payment.subscription_type, payment.amount, payment.payment_system);
        
        await ctx.answerCbQuery('✅ تم تفعيل الاشتراك');
        
        try {
            await ctx.editMessageCaption(
                `✅ *تم تفعيل الاشتراك بنجاح*\n\n` +
                `👤 ${userData.username}\n` +
                `🔐 ${userData.onexbet}\n` +
                `📦 ${getSubscriptionDisplayName(payment.subscription_type)}\n` +
                `💰 ${payment.amount}$\n` +
                `💳 ${payment.payment_system === 'binance' ? 'باينانس' : 'تحويل بنكي'}\n\n` +
                `🕒 ${realTimeClock.getCurrentDateTime()}`,
                { parse_mode: 'Markdown' }
            );
        } catch (editError) {
            console.log('Could not edit message:', editError);
        }

    } catch (error) {
        console.error('Payment accept error:', error);
        await ctx.answerCbQuery('❌ حدث خطأ في قبول الدفع');
    }
}

async function handlePaymentReject(ctx, paymentId) {
    try {
        const payment = await dbManager.getPayment(paymentId);
        if (!payment) {
            await ctx.answerCbQuery('❌ طلب الدفع غير موجود');
            return;
        }
        
        await dbManager.updatePayment(paymentId, { 
            status: 'rejected',
            processed_at: new Date().toLocaleString('ar-EG')
        });
        
        // إشعار المستخدم
        try {
            await bot.telegram.sendMessage(
                payment.user_id,
                `❌ *تم رفض طلب الدفع*\n\n` +
                `💳 يرجى التحقق من معلومات الدفع والمحاولة مرة أخرى\n\n` +
                `📞 للاستفسار: @GEMZGOOLBOT`,
                { parse_mode: 'Markdown' }
            );
        } catch (error) {
            console.error('Error notifying user:', error);
        }
        
        await ctx.answerCbQuery('❌ تم رفض الطلب');
        
        try {
            await ctx.editMessageCaption(
                `❌ *تم رفض طلب الدفع*\n\n` +
                `🆔 ${paymentId}\n` +
                `👤 ${payment.username}\n` +
                `🔐 ${payment.onexbet}\n` +
                `💳 ${payment.payment_system === 'binance' ? 'باينانس' : 'تحويل بنكي'}\n\n` +
                `🕒 ${realTimeClock.getCurrentDateTime()}`,
                { parse_mode: 'Markdown' }
            );
        } catch (editError) {
            console.log('Could not edit message:', editError);
        }

    } catch (error) {
        console.error('Payment reject error:', error);
        await ctx.answerCbQuery('❌ حدث خطأ في رفض الدفع');
    }
}

// 🚀 START BOT بعد التأكد من اكتمال كل التهيئات
setTimeout(() => {
    bot.launch().then(() => {
        console.log('🎉 SUCCESS! AI GOAL Predictor v16.0 ENHANCED is RUNNING!');
        console.log('💳 Payment Systems: Binance + Bank Transfer');
        console.log('💾 Persistent Data Storage: FIREBASE ENABLED');
        console.log('🔐 Channel Subscription: TELEGRAM API ONLY');
        console.log('🤖 Algorithm Reconnection: ENABLED (5 minutes)');
        console.log('🕒 Real-time Clock: 12-HOUR FORMAT ENABLED');
        console.log('🔄 Dynamic Algorithm: PATTERN CHANGE EVERY 20 SECONDS');
        console.log('👤 User Session Management: ENABLED');
        console.log('👤 Developer:', CONFIG.DEVELOPER);
        console.log('📢 Channel:', CONFIG.CHANNEL);
        console.log('🌐 Health check: http://localhost:' + PORT);
        console.log('🔄 Keep alive: http://localhost:' + PORT + '/keep-alive');
        console.log('🔧 Admin ID:', CONFIG.ADMIN_ID);
        console.log('⚡ Environment:', process.env.NODE_ENV || 'production');
        console.log('🚀 Bot is fully operational!');
    }).catch(console.error);
}, 7000);

// 🛑 GRACEFUL SHUTDOWN
process.once('SIGINT', async () => {
    console.log('🔄 Creating final backup before shutdown...');
    if (dbManager) {
        await dbManager.backupData();
    }
    await bot.stop('SIGINT');
    server.close(() => {
        console.log('👋 Server closed');
        process.exit(0);
    });
});

process.once('SIGTERM', async () => {
    console.log('🔄 Creating final backup before shutdown...');
    if (dbManager) {
        await dbManager.backupData();
    }
    await bot.stop('SIGTERM');
    server.close(() => {
        console.log('👋 Server closed');
        process.exit(0);
    });
});

// ❤️ Keep alive for Render
setInterval(() => {
    console.log('❤️ Bot is alive and running...');
}, 60000); // Log every minute

console.log('✅ AI Goal Prediction System with Enhanced Features Ready!');
console.log('📁 Waiting for Firebase initialization...');
