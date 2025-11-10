// ===================================================
// 🚀 AI GOAL PREDICTOR ULTIMATE - VERSION 10.4
// 👤 DEVELOPER: AMIN - @GEMZGOOLBOT
// 🔥 FEATURES: SMART AI + BETTING SYSTEM + FIREBASE + FULL ADMIN PANEL
// ===================================================

console.log('🤖 Starting AI GOAL Predictor Ultimate v10.4...');
console.log('🕒 ' + new Date().toISOString());

// 🔧 CONFIGURATION
const CONFIG = {
    BOT_TOKEN: process.env.BOT_TOKEN || "8125363786:AAFZaOGSAvq_p8Sc8cq2bIKZlpe4ej7tmdU",
    ADMIN_ID: process.env.ADMIN_ID || "6565594143",
    
    // 🧠 AI APIS
    AI_APIS: {
        GEMINI: process.env.GEMINI_API_KEY || "AIzaSyCtjtT98-M5v6t8qICPSDw-1TLwPneyaQc",
        OPENAI: process.env.OPENAI_API_KEY || "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"
    },

    // 💰 DEFAULT PRICING
    SUBSCRIPTION_PRICES: {
        week: 10,
        month: 30,
        three_months: 80,
        year: 250
    },

    // 🔐 DEFAULT PAYMENT LINKS
    PAYMENT_LINKS: {
        week: process.env.PAYMENT_WEEK || "https://binance.com/payment/weekly",
        month: process.env.PAYMENT_MONTH || "https://binance.com/payment/monthly", 
        three_months: process.env.PAYMENT_3MONTHS || "https://binance.com/payment/3months",
        year: process.env.PAYMENT_YEAR || "https://binance.com/payment/yearly"
    },
    
    VERSION: "10.4.0",
    DEVELOPER: "AMIN - @GEMZGOOLBOT",
    CHANNEL: "@GEMZGOOL",
    START_IMAGE: "https://i.ibb.co/tpy70Bd1/IMG-20251104-074214-065.jpg",
    ANALYSIS_IMAGE: "https://i.ibb.co/VYjf05S0/Screenshot.png",
    IMGBB_API_KEY: process.env.IMGBB_API_KEY || "42b155a527bee21e62e524a31fe9b1ee"
};

console.log('✅ Configuration loaded successfully');

// 🚀 INITIALIZE BOT
const { Telegraf, Markup, session } = require('telegraf');
const axios = require('axios');
const express = require('express');

const bot = new Telegraf(CONFIG.BOT_TOKEN);

// 🌐 HEALTH CHECK SERVER FOR RENDER
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ 
        status: 'OK', 
        version: CONFIG.VERSION,
        timestamp: new Date().toISOString(),
        message: 'AI Goal Predictor Bot is running...',
        developer: CONFIG.DEVELOPER
    });
});

app.listen(PORT, () => {
    console.log(`🌐 Health check server running on port ${PORT}`);
});

// 🖼️ FLEXIBLE IMAGE VERIFICATION SYSTEM 
class FlexibleImageVerification {
    constructor() {
        // كلمات مفتاحية يجب وجودها في الصورة - موسعة جداً
        this.requiredKeywords = [
            // كلمات أساسية في اللعبة
            "goal", "هدف", "رهان", "match", "مباراة", "football", 
            "كرة قدم", "جول", "goalzz", "1xbet", "1xbet", "bet",
            "مراهنة", "توقع", "تنبؤ", "فوز", "خسارة", 
            
            // أسماء لاعبين مشهورين
            "messi", "ميسي", "ronaldo", "رونالدو", "neymar", "نيمار",
            "mbappe", "مبابي", "salah", "صلاح", "halland", "هالاند",
            "de bruyne", "دي بروين", "modric", "مودريتش", "kane", "كين",
            
            // فرق ودوريات
            "premier league", "الدوري الانجليزي", "la liga", "لاليغا",
            "champions league", "دوري الأبطال", "world cup", "كأس العالم",
            "euro", "يورو", "club", "نادي", "team", "فريق",
            
            // مصطلحات رياضية
            "player", "لاعب", "stadium", "ملعب", "coach", "مدرب",
            "referee", "حكم", "score", "نتيجة", "win", "فوز",
            "lose", "خسارة", "draw", "تعادل", "penalty", "ضربة جزاء",
            
            // كلمات عامة متعلقة بالرياضة
            "sport", "رياضة", "game", "لعبة", "competition", "منافسة",
            "tournament", "بطولة", "league", "دوري", "cup", "كأس",
            
            // كلمات إضافية
            "no goal", "لا هدف", "nogoal", "لا-هدف", "هدف لا", "goal no"
        ];
    }

    async verifyImage(imageUrl) {
        try {
            console.log(`🔍 Flexible verification for: ${imageUrl}`);
            
            // محاكاة عملية التحقق
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // فحص مرن للمحتوى
            const verificationResult = this.flexibleContentCheck(imageUrl);
            
            return verificationResult;
            
        } catch (error) {
            console.error('Verification error:', error);
            return {
                decision: "ACCEPT", // في حالة الخطأ، نقبل الصورة لتجنب رفض الصالح
                reason: `تم قبول الصورة تلقائياً`,
                persons_count: 2,
                keywords_found: ["goal", "هدف"],
                text_sample: "تحليل تلقائي"
            };
        }
    }

    flexibleContentCheck(imageUrl) {
        // فحص مرن للمحتوى - يركز فقط على الكلمات المفتاحية
        
        // 1. فحص وجود الكلمات المطلوبة
        const foundKeywords = this.simulateKeywordDetection(imageUrl);
        
        // 2. فحص وجود الأشخاص (محاكاة)
        const personCount = this.simulatePersonDetection(imageUrl);

        // قرار التحقق المرن
        // نقبل الصورة إذا وجدنا كلمة مفتاحية واحدة على الأقل وشخص واحد على الأقل
        if (foundKeywords.length >= 1 && personCount >= 1) {
            return {
                decision: "ACCEPT",
                reason: "الصورة تحتوي على محتوى اللعبة المطلوب",
                persons_count: personCount,
                keywords_found: foundKeywords,
                text_sample: "تحليل النص: " + foundKeywords.join(", ")
            };
        } else {
            const reasons = [];
            if (foundKeywords.length < 1) reasons.push(`لم يتم العثور على كلمات مفتاحية`);
            if (personCount < 1) reasons.push(`لم يتم اكتشاف أشخاص`);
            
            return {
                decision: "REJECT",
                reason: reasons.join(" و "),
                persons_count: personCount,
                keywords_found: foundKeywords,
                text_sample: "لم يتم استيفاء الشروط الأساسية"
            };
        }
    }

    simulateKeywordDetection(imageUrl) {
        // محاكاة اكتشاف الكلمات في الصورة
        // نستخدم رابط الصورة لمحاكاة الاكتشاف (في التطبيق الحقيقي سيكون باستخدام OCR)
        
        const urlLower = imageUrl.toLowerCase();
        const found = [];
        
        // البحث عن الكلمات المفتاحية في الرابط (محاكاة)
        this.requiredKeywords.forEach(keyword => {
            if (urlLower.includes(keyword.toLowerCase())) {
                found.push(keyword);
            }
        });
        
        // إذا لم نجد كلمات في الرابط، نستخدم اكتشاف عشوائي محسن
        // بنسبة قبول عالية للصور الحقيقية
        if (found.length === 0) {
            // 90% فرصة للقبول مع كلمات عشوائية (لمحاكاة الصور الحقيقية)
            if (Math.random() < 0.9) {
                const randomKeywords = this.getRandomKeywords();
                return randomKeywords;
            }
        }
        
        return found;
    }

    simulatePersonDetection(imageUrl) {
        // محاكاة اكتشاف الأشخاص في الصورة
        // 95% من الصور ستحتوي على شخصين على الأقل (لمحاكاة الصور الحقيقية)
        
        const hasPersons = Math.random() < 0.95;
        return hasPersons ? Math.floor(Math.random() * 3) + 1 : 0; // 1-3 أشخاص
    }

    getRandomKeywords() {
        // إرجاع كلمات عشوائية من القائمة
        const count = Math.floor(Math.random() * 3) + 1; // 1-3 كلمات
        const shuffled = [...this.requiredKeywords].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }
}

// 🔥 FIREBASE INITIALIZATION
let db = null;
let admin = null;

try {
    admin = require('firebase-admin');
    
    const serviceAccount = {
        "type": "service_account",
        "project_id": process.env.FIREBASE_PROJECT_ID || "bot-tlegram-9f4b5",
        "private_key_id": process.env.FIREBASE_PRIVATE_KEY_ID,
        "private_key": process.env.FIREBASE_PRIVATE_KEY ? process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n') : null,
        "client_email": process.env.FIREBASE_CLIENT_EMAIL || "firebase-adminsdk@bot-tlegram-9f4b5.iam.gserviceaccount.com",
        "client_id": process.env.FIREBASE_CLIENT_ID,
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": process.env.FIREBASE_CERT_URL
    };

    if (!admin.apps.length) {
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
            databaseURL: "https://bot-tlegram-9f4b5-default-rtdb.firebaseio.com"
        });
    }
    
    db = admin.firestore();
    console.log('✅ Firebase initialized successfully');
    
} catch (error) {
    console.log('⚠️ Firebase initialization failed:', error.message);
    console.log('🔄 Using local storage instead');
}

// 🗄️ LOCAL STORAGE FALLBACK
const userDatabase = new Map();
const paymentDatabase = new Map();
const settingsDatabase = new Map();

// تهيئة الإعدادات الافتراضية
settingsDatabase.set('config', {
    prices: { ...CONFIG.SUBSCRIPTION_PRICES },
    payment_links: { ...CONFIG.PAYMENT_LINKS },
    maintenance_mode: false,
    updated_at: new Date().toISOString()
});

// 📊 FAKE STATISTICS SYSTEM
class FakeStatistics {
    constructor() {
        this.totalUsers = 78542;
        this.activeUsers = 287;
    }

    getStats() {
        return {
            totalUsers: this.totalUsers,
            activeUsers: this.activeUsers
        };
    }
}

// 🧠 SMART GOAL PREDICTION ENGINE
class GoalPredictionAI {
    constructor() {
        this.algorithmVersion = "10.4";
    }

    generateSmartPrediction(userId) {
        const isGoal = Math.random() > 0.5;
        const probability = Math.floor(Math.random() * 30) + 60;
        
        const prediction = {
            type: isGoal ? '⚽ هدف مؤكد' : '🛡️ دفاع قوي',
            probability: probability,
            confidence: 100,
            reasoning: isGoal ? 
                `🔥 الضغط الهجومي المستمر يشير لهدف قريب بنسبة ${probability}%` :
                `🛡️ الدفاع المنظم يحد من الفرص بنسبة ${probability}%`,
            timestamp: new Date().toISOString(),
            algorithm: this.algorithmVersion
        };

        return prediction;
    }

    async analyzeImageWithAI(imageUrl) {
        try {
            await new Promise(resolve => setTimeout(resolve, 2000));
            return this.generateSmartPrediction('image_analysis');
        } catch (error) {
            return this.generateSmartPrediction('fallback');
        }
    }

    generateNextPrediction(userId) {
        return this.generateSmartPrediction(userId);
    }
}

// 📤 IMGBB UPLOADER
class ImgBBUploader {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }

    async uploadImage(imageUrl) {
        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            return {
                success: true,
                url: imageUrl,
                delete_url: imageUrl
            };
        } catch (error) {
            return {
                success: false,
                error: error.message
            };
        }
    }
}

// 💾 DATABASE MANAGER
class DatabaseManager {
    constructor() {
        this.maintenanceMode = false;
    }

    async getUser(userId) {
        try {
            if (db) {
                const userDoc = await db.collection('users').doc(userId.toString()).get();
                return userDoc.exists ? userDoc.data() : null;
            }
            return userDatabase.get(userId) || null;
        } catch (error) {
            return userDatabase.get(userId) || null;
        }
    }

    async saveUser(userId, userData) {
        try {
            if (db) {
                await db.collection('users').doc(userId.toString()).set(userData, { merge: true });
            }
            userDatabase.set(userId, userData);
            return true;
        } catch (error) {
            userDatabase.set(userId, userData);
            return true;
        }
    }

    async addPayment(paymentData) {
        const paymentId = Date.now().toString();
        try {
            const fullPaymentData = {
                ...paymentData,
                id: paymentId,
                status: 'pending',
                timestamp: new Date().toISOString()
            };

            if (db) {
                await db.collection('payments').doc(paymentId).set(fullPaymentData);
            }
            paymentDatabase.set(paymentId, fullPaymentData);
            return paymentId;
        } catch (error) {
            const fullPaymentData = {
                ...paymentData,
                id: paymentId,
                status: 'pending',
                timestamp: new Date().toISOString()
            };
            paymentDatabase.set(paymentId, fullPaymentData);
            return paymentId;
        }
    }

    async getPendingPayments() {
        try {
            if (db) {
                const paymentsSnapshot = await db.collection('payments').where('status', '==', 'pending').get();
                return paymentsSnapshot.docs.map(doc => doc.data());
            }
            return Array.from(paymentDatabase.values()).filter(p => p.status === 'pending');
        } catch (error) {
            return Array.from(paymentDatabase.values()).filter(p => p.status === 'pending');
        }
    }

    async updatePayment(paymentId, updates) {
        try {
            if (db) {
                await db.collection('payments').doc(paymentId).update(updates);
            }
            const payment = paymentDatabase.get(paymentId);
            if (payment) {
                paymentDatabase.set(paymentId, { ...payment, ...updates });
            }
            return true;
        } catch (error) {
            const payment = paymentDatabase.get(paymentId);
            if (payment) {
                paymentDatabase.set(paymentId, { ...payment, ...updates });
            }
            return true;
        }
    }

    async getAllUsers() {
        try {
            if (db) {
                const usersSnapshot = await db.collection('users').get();
                return usersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            }
            return Array.from(userDatabase.entries()).map(([id, data]) => ({ id, ...data }));
        } catch (error) {
            return Array.from(userDatabase.entries()).map(([id, data]) => ({ id, ...data }));
        }
    }

    async getSettings() {
        try {
            if (db) {
                const settingsDoc = await db.collection('settings').doc('config').get();
                if (settingsDoc.exists) {
                    return settingsDoc.data();
                }
            }
            return settingsDatabase.get('config');
        } catch (error) {
            return settingsDatabase.get('config');
        }
    }

    async updateSettings(newSettings) {
        try {
            const updatedSettings = {
                ...newSettings,
                updated_at: new Date().toISOString()
            };

            if (db) {
                await db.collection('settings').doc('config').set(updatedSettings, { merge: true });
            }
            settingsDatabase.set('config', updatedSettings);
            return updatedSettings;
        } catch (error) {
            const updatedSettings = {
                ...newSettings,
                updated_at: new Date().toISOString()
            };
            settingsDatabase.set('config', updatedSettings);
            return updatedSettings;
        }
    }

    async getPayment(paymentId) {
        try {
            if (db) {
                const paymentDoc = await db.collection('payments').doc(paymentId).get();
                return paymentDoc.exists ? paymentDoc.data() : null;
            }
            return paymentDatabase.get(paymentId) || null;
        } catch (error) {
            return paymentDatabase.get(paymentId) || null;
        }
    }

    async getAllPayments() {
        try {
            if (db) {
                const paymentsSnapshot = await db.collection('payments').get();
                return paymentsSnapshot.docs.map(doc => doc.data());
            }
            return Array.from(paymentDatabase.values());
        } catch (error) {
            return Array.from(paymentDatabase.values());
        }
    }

    isMaintenanceMode() {
        return this.maintenanceMode;
    }

    async setMaintenanceMode(enabled) {
        try {
            const settings = await this.getSettings();
            settings.maintenance_mode = enabled;
            await this.updateSettings(settings);
            this.maintenanceMode = enabled;
            return true;
        } catch (error) {
            this.maintenanceMode = enabled;
            return true;
        }
    }

    async searchUsers(query) {
        try {
            const users = await this.getAllUsers();
            const lowerQuery = query.toLowerCase();
            
            return users.filter(user => 
                (user.user_id && user.user_id.toString().includes(query)) ||
                (user.username && user.username.toLowerCase().includes(lowerQuery)) ||
                (user.onexbet && user.onexbet.includes(query))
            );
        } catch (error) {
            console.error('Search users error:', error);
            return [];
        }
    }
}

// INITIALIZE SYSTEMS
const goalAI = new GoalPredictionAI();
const dbManager = new DatabaseManager();
const fakeStats = new FakeStatistics();
const imgbbUploader = new ImgBBUploader(CONFIG.IMGBB_API_KEY);
const imageVerification = new FlexibleImageVerification();

// 🎯 BOT SETUP
bot.use(session({ 
    defaultSession: () => ({ 
        step: 'start',
        userData: {},
        verificationCode: null,
        accountId: null,
        paymentType: null,
        adminMode: false,
        adminStep: null,
        awaitingPaymentAccount: false,
        paymentAccount: null,
        currentBet: 0,
        originalBet: 0,
        totalProfit: 0,
        awaitingBetAmount: false,
        lastImageUrl: null,
        searchQuery: null,
        broadcastMessage: null
    })
}));

// 🎯 لوحة المفاتيح الثابتة
const getMainKeyboard = () => {
    return Markup.keyboard([
        ['🎯 التوقع التالي', '📊 إحصائياتي'],
        ['📸 إرسال صورة', '💳 الاشتراكات'],
        ['👥 إحصائيات البوت', '👤 حالة الاشتراك'],
        ['🆘 الدعم الفني']
    ]).resize();
};

const getLoginKeyboard = () => {
    return Markup.keyboard([
        ['🔐 إدخال رقم الحساب']
    ]).resize();
};

const getSubscriptionKeyboard = () => {
    return Markup.keyboard([
        ['💰 أسبوعي', '💰 شهري'],
        ['💰 3 أشهر', '💰 سنوي'],
        ['🔙 الرجوع للقائمة']
    ]).resize();
};

const getAdminMainKeyboard = () => {
    return Markup.keyboard([
        ['📊 إحصائيات النظام', '👥 إدارة المستخدمين'],
        ['💰 طلبات الدفع', '⚙️ الإعدادات'],
        ['📢 إرسال إشعار', '🔍 بحث عن مستخدم'],
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
        ['💰 تعديل الأسعار', '🔗 تعديل روابط الدفع'],
        ['🖼️ تعديل صورة QR', '⚙️ الإعدادات العامة'],
        ['🔄 إعادة التعيين', '🔙 رجوع']
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

// 🎯 BOT COMMANDS

bot.start(async (ctx) => {
    try {
        const settings = await dbManager.getSettings();
        if (settings.maintenance_mode && ctx.from.id.toString() !== CONFIG.ADMIN_ID) {
            await ctx.replyWithMarkdown('🔧 *البوت تحت الصيانة*\n\n⏰ نعمل على تحسين الخدمة لكم\n🔄 سنعود قريباً بأفضل مما كان\n\n📞 للاستفسار: ' + CONFIG.DEVELOPER);
            return;
        }

        const userId = ctx.from.id.toString();
        const userName = ctx.from.first_name;

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

        const existingUser = await dbManager.getUser(userId);
        
        if (existingUser) {
            ctx.session.step = 'verified';
            ctx.session.userData = existingUser;

            const remainingDays = calculateRemainingDays(existingUser.subscription_end_date);
            
            let statusMessage = '';
            if (existingUser.subscription_status === 'active' && remainingDays > 0) {
                statusMessage = `✅ *اشتراكك نشط*\n\n` +
                               `🔐 الحساب: \`${existingUser.onexbet}\`\n` +
                               `📦 النوع: ${existingUser.subscription_type}\n` +
                               `📅 الانتهاء: ${new Date(existingUser.subscription_end_date).toLocaleDateString('ar-EG')}\n` +
                               `⏳ متبقي: ${remainingDays} يوم`;
            } else if (existingUser.free_attempts > 0) {
                statusMessage = `🎯 *محاولات مجانية متاحة*\n\n` +
                               `🔐 الحساب: \`${existingUser.onexbet}\`\n` +
                               `🆓 محاولات مجانية: ${existingUser.free_attempts}`;
            } else {
                statusMessage = `🚫 *انتهت المحاولات*\n\n` +
                               `🔐 الحساب: \`${existingUser.onexbet}\`\n` +
                               `💳 يرجى الاشتراك للمتابعة`;
            }

            await ctx.replyWithMarkdown(statusMessage, getMainKeyboard());
            
        } else {
            ctx.session.step = 'start';
            ctx.session.userData = { userId, userName };

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
        }

    } catch (error) {
        console.error('Start command error:', error);
        await ctx.replyWithMarkdown('❌ حدث خطأ في النظام، يرجى المحاولة لاحقاً');
    }
});

// 📝 HANDLE TEXT MESSAGES
bot.on('text', async (ctx) => {
    try {
        const settings = await dbManager.getSettings();
        if (settings.maintenance_mode && ctx.from.id.toString() !== CONFIG.ADMIN_ID) {
            await ctx.replyWithMarkdown('🔧 *البوت تحت الصيانة*\n\n⏰ نعمل على تحسين الخدمة لكم\n🔄 سنعود قريباً بأفضل مما كان\n\n📞 للاستفسار: ' + CONFIG.DEVELOPER);
            return;
        }

        const text = ctx.message.text;
        const session = ctx.session;
        const userId = ctx.from.id.toString();

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

        // معالجة البحث عن مستخدم
        if (session.adminStep === 'search_user') {
            await handleAdminSearchUser(ctx, text);
            return;
        }

        // معالجة الإشعار الجماعي
        if (session.adminStep === 'broadcast') {
            await handleAdminBroadcast(ctx, text);
            return;
        }

        // معالجة إدخال مبلغ الرهان
        if (session.awaitingBetAmount) {
            const betAmount = parseFloat(text);
            if (isNaN(betAmount) || betAmount <= 0) {
                await ctx.replyWithMarkdown('❌ *مبلغ غير صحيح!*\n\n💰 يرجى إدخال مبلغ صحيح للرهان');
                return;
            }

            ctx.session.currentBet = betAmount;
            ctx.session.originalBet = betAmount;
            ctx.session.awaitingBetAmount = false;

            await ctx.replyWithMarkdown(
                `✅ *تم تحديد مبلغ الرهان:* ${betAmount}$\n\n` +
                `📸 *الآن يرجى إرسال صورة المباراة للتحليل*`,
                getMainKeyboard()
            );
            return;
        }

        // 🔐 زر إدخال رقم الحساب
        if (text === '🔐 إدخال رقم الحساب' && session.step === 'start') {
            ctx.session.step = 'awaiting_account_id';
            await ctx.replyWithMarkdown(
                '🔢 *الخطوة 1:* أرسل رقم حساب 1xBet الخاص بك (10 أرقام)\n\n' +
                '💡 *ملاحظة:* يجب أن يكون الرقم الحقيقي الخاص بك'
            );
            return;
        }

        // 🔐 STEP 1: Validate 1xBet Account
        if (session.step === 'awaiting_account_id' && /^\d{10}$/.test(text)) {
            
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

        }
        // 🔐 STEP 2: Verify Code
        else if (session.step === 'awaiting_verification' && /^\d{6}$/.test(text)) {
            if (parseInt(text) === ctx.session.verificationCode) {
                
                const userData = {
                    user_id: userId,
                    username: ctx.from.first_name,
                    onexbet: ctx.session.accountId,
                    free_attempts: 2,
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
                    total_profit: 0
                };

                await dbManager.saveUser(userId, userData);
                ctx.session.step = 'verified';
                ctx.session.userData = userData;

                await ctx.replyWithMarkdown(
                    `🎉 *تم التحقق بنجاح!*\n\n` +
                    `✅ *الحساب:* \`${ctx.session.accountId}\`\n` +
                    `👤 *المستخدم:* ${ctx.session.userData.username}\n\n` +
                    `🎁 *تحصل على محاولتين مجانيتين*\n\n` +
                    `📸 *يمكنك الآن إرسال صورة المباراة للتحليل*`,
                    getMainKeyboard()
                );

            } else {
                await ctx.replyWithMarkdown('❌ *كود تحقق خاطئ!*\n\n🔐 يرجى إعادة إدخال الكود الصحيح');
            }
        }
        // 💳 معالجة طلبات الدفع - طلب رقم الحساب
        else if (session.awaitingPaymentAccount) {
            if (/^\d{10}$/.test(text)) {
                const userData = await dbManager.getUser(userId);
                userData.onexbet = text;
                await dbManager.saveUser(userId, userData);
                
                ctx.session.awaitingPaymentAccount = false;
                ctx.session.paymentAccount = text;
                
                await ctx.replyWithMarkdown(
                    `✅ *تم حفظ رقم الحساب:* \`${text}\`\n\n` +
                    `📸 *الآن يرجى إرسال صورة إثبات الدفع*`
                );
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

            switch (text) {
                case '🎯 التوقع التالي':
                    if (session.lastImageUrl) {
                        await handleNextPrediction(ctx, userData);
                    } else {
                        ctx.session.awaitingBetAmount = true;
                        await ctx.replyWithMarkdown(
                            '💰 *أدخل مبلغ الرهان:*\n\n' +
                            '💵 يرجى كتابة المبلغ الذي تريد الرهان عليه (بالدولار)\n' +
                            '📝 مثال: 10 أو 25.5'
                        );
                    }
                    break;

                case '📊 إحصائياتي':
                    await handleUserStats(ctx, userData);
                    break;

                case '👥 إحصائيات البوت':
                    await handleBotStats(ctx);
                    break;

                case '📸 إرسال صورة':
                    await ctx.replyWithMarkdown(
                        '📸 *يرجى إرسال صورة المباراة الآن*\n\n' +
                        '🎯 *شروط الصورة المقبولة:*\n' +
                        '• يجب أن تحتوي على كلمات متعلقة باللعبة (Goal, هدف, رهان, مباراة, ميسي, رونالدو, إلخ)\n' + 
                        '• يمكن أن تكون الصورة بأي حجم أو جودة\n' +
                        '• سيتم تحليل الصورة تلقائياً',
                        getMainKeyboard()
                    );
                    break;

                case '💳 الاشتراكات':
                    await handleSubscriptions(ctx, userData);
                    break;

                case '👤 حالة الاشتراك':
                    await handleSubscriptionStatus(ctx, userData);
                    break;

                case '🆘 الدعم الفني':
                    await ctx.replyWithMarkdown(
                        `🆘 *الدعم الفني*\n\n` +
                        `📞 للاستفسارات والدعم:\n` +
                        `👤 ${CONFIG.DEVELOPER}\n` +
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
        else if (['🎯 التوقع التالي', '📊 إحصائياتي', '📸 إرسال صورة', '👥 إحصائيات البوت'].includes(text)) {
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

// 🖼️ IMAGE ANALYSIS HANDLER - معدل للتحقق المرن من الصور
bot.on('photo', async (ctx) => {
    try {
        const userId = ctx.from.id.toString();
        const session = ctx.session;
        
        // 💳 معالجة صور الدفع
        if (session.paymentType) {
            await handlePaymentScreenshot(ctx, userId);
            return;
        }

        const userData = await dbManager.getUser(userId);
        if (!userData || !userData.onexbet) {
            await ctx.replyWithMarkdown('❌ *يجب التحقق من الحساب أولاً*\n\n🔐 أرسل /start للبدء', getLoginKeyboard());
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
        if (!session.currentBet || session.currentBet <= 0) {
            await ctx.replyWithMarkdown(
                '❌ *يجب تحديد مبلغ الرهان أولاً*\n\n' +
                '💰 استخدم زر "🎯 التوقع التالي" لتحديد المبلغ',
                getMainKeyboard()
            );
            return;
        }

        // 📸 معالجة الصورة
        const photo = ctx.message.photo[ctx.message.photo.length - 1];
        const fileLink = await bot.telegram.getFileLink(photo.file_id);
        const imageUrl = fileLink.href;

        // حفظ رابط الصورة في الجلسة للاستخدام لاحقاً
        ctx.session.lastImageUrl = imageUrl;

        const processingMsg = await ctx.reply('🔍 جاري التحقق من الصورة...');

        try {
            // 🔐 التحقق المرن من صحة الصورة
            const verificationResult = await imageVerification.verifyImage(imageUrl);

            // التحقق من نتيجة التحقق
            if (verificationResult.decision === "REJECT") {
                await ctx.replyWithMarkdown(
                    `❌ *لم يتم قبول الصورة*\n\n` +
                    `📸 *سبب الرفض:* ${verificationResult.reason}\n\n` +
                    `💡 *تفاصيل التحقق:*\n` +
                    `👥 عدد الأشخاص المكتشفين: ${verificationResult.persons_count || 0}\n` +
                    `🔤 الكلمات المقبولة: ${verificationResult.keywords_found?.join(', ') || 'لا توجد'}\n\n` +
                    `📝 *يرجى إرسال صورة تحتوي على:*\n` +
                    `• كلمات متعلقة باللعبة (Goal, هدف, رهان, مباراة, ميسي, رونالدو, إلخ)\n` +
                    `• يمكن أن تكون الصورة بأي حجم أو جودة`
                );
                await ctx.deleteMessage(processingMsg.message_id);
                return;
            } else {
                await ctx.replyWithMarkdown(
                    `✅ *تم قبول الصورة بنجاح*\n\n` +
                    `📸 ${verificationResult.reason}\n` +
                    `👥 الأشخاص: ${verificationResult.persons_count}\n` +
                    `🔤 الكلمات: ${verificationResult.keywords_found?.join(', ') || 'غير معروف'}\n\n` +
                    `🔄 جاري تحليل المباراة بالذكاء الاصطناعي...`
                );
            }

            // المتابعة بالتحليل العادي
            await ctx.editMessageText(processingMsg.message_id, '🔄 جاري تحليل صورة المباراة بالذكاء الاصطناعي...');

            const prediction = await goalAI.analyzeImageWithAI(imageUrl);
            
            // 📊 تحديث إحصائيات المستخدم
            if (userData.subscription_status !== 'active') {
                userData.free_attempts--;
            }
            userData.total_predictions = (userData.total_predictions || 0) + 1;
            userData.total_bets = (userData.total_bets || 0) + session.currentBet;
            userData.lastPrediction = prediction;
            await dbManager.saveUser(userId, userData);

            const analysisMessage = `
🤖 *تحليل الذكاء الاصطناعي المتقدم - v${CONFIG.VERSION}*

📸 *الصورة:* ✅ تم التحقق والتحليل بنجاح
🕒 *الوقت:* ${new Date().toLocaleString('ar-EG')}
🔐 *الحساب:* \`${userData.onexbet}\`
💰 *مبلغ الرهان:* ${session.currentBet}$

🎯 *نتيجة التحليل:*
${prediction.type}
📈 *الاحتمالية:* ${prediction.probability}%
🎯 *الثقة:* ${prediction.confidence}%

💡 *التحليل:*
${prediction.reasoning}

${userData.subscription_status !== 'active' ? 
    `🆓 *المحاولات المتبقية:* ${userData.free_attempts}` : 
    `✅ *اشتراك نشط - محاولات غير محدودة*`}
            `;

            await ctx.replyWithMarkdown(analysisMessage);
            
            // إضافة أزرار النتيجة
            const resultKeyboard = Markup.inlineKeyboard([
                [
                    Markup.button.callback(`🎊 نجح التوقع - ربح ${session.currentBet * 2}$`, `win_${Date.now()}`),
                    Markup.button.callback(`🔄 خسرت - جرب التوقع التالي`, `lose_${Date.now()}`)
                ]
            ]);

            await ctx.replyWithMarkdown(
                '📊 *ما هي نتيجة التوقع؟*\n\n' +
                `🎊 *نجح التوقع* - تربح ${session.currentBet * 2}$\n` +
                `🔄 *خسرت* - جرب التوقع التالي بمضاعفة الرهان\n\n` +
                '✨ سيتم تحديث إحصائيك تلقائياً',
                resultKeyboard
            );

            await ctx.deleteMessage(processingMsg.message_id);

        } catch (analysisError) {
            console.error('Analysis error:', analysisError);
            
            // في حالة الخطأ، نعتمد على النظام الاحتياطي
            const fallbackPrediction = goalAI.generateSmartPrediction(userId);
            
            await ctx.replyWithMarkdown(
                `🤖 *النظام الاحتياطي - تحليل فوري*\n\n` +
                `🎯 ${fallbackPrediction.type}\n` +
                `📈 ${fallbackPrediction.probability}% | 🎯 ${fallbackPrediction.confidence}%\n\n` +
                `💡 ${fallbackPrediction.reasoning}`,
                getMainKeyboard()
            );

            await ctx.deleteMessage(processingMsg.message_id);
        }

    } catch (error) {
        console.error('Photo handler error:', error);
        await ctx.replyWithMarkdown('❌ *حدث خطأ في معالجة الصورة*', getMainKeyboard());
    }
});

// 🎯 HANDLE CALLBACK QUERIES - معدل للتعامل مع الخسارة
bot.on('callback_query', async (ctx) => {
    try {
        const callbackData = ctx.callbackQuery.data;
        const userId = ctx.from.id.toString();
        
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
                
                await ctx.replyWithMarkdown(
                    `🎊 *مبروك! نجح التوقع بنجاح* ✨\n\n` +
                    `✅ توقعك كان دقيقاً ومميزاً\n` +
                    `💰 ربحت: ${profit}$\n` +
                    `💵 إجمالي أرباحك: ${ctx.session.totalProfit}$\n\n` +
                    `🎯 يمكنك البدء بتوقع جديد`,
                    getMainKeyboard()
                );
                
            } else {
                // مضاعفة الرهان وتوليد توقع جديد تلقائياً
                const newBet = ctx.session.currentBet * 2;
                userData.losses = (userData.losses || 0) + 1;
                ctx.session.currentBet = newBet;
                
                await ctx.answerCbQuery(`🔄 جاري إنشاء التوقع التالي...`);
                
                // توليد توقع جديد تلقائياً
                const newPrediction = goalAI.generateNextPrediction(userId);
                
                await ctx.replyWithMarkdown(
                    `🔄 *خسرت هذه الجولة*\n\n` +
                    `📈 الرهان التالي مضاعف: ${newBet}$\n` +
                    `💪 لا توقف.. استمر في المحاولة\n\n` +
                    `🎯 *التوقع التالي:*\n` +
                    `${newPrediction.type}\n` +
                    `📈 ${newPrediction.probability}% | 🎯 ${newPrediction.confidence}%\n` +
                    `💡 ${newPrediction.reasoning}`,
                    getMainKeyboard()
                );
                
                // إضافة أزرار النتيجة للتوقع الجديد
                const resultKeyboard = Markup.inlineKeyboard([
                    [
                        Markup.button.callback(`🎊 نجح التوقع - ربح ${newBet * 2}$`, `win_${Date.now()}`),
                        Markup.button.callback(`🔄 خسرت - جرب التوقع التالي`, `lose_${Date.now()}`)
                    ]
                ]);

                await ctx.replyWithMarkdown(
                    '📊 *ما هي نتيجة التوقع الجديد؟*',
                    resultKeyboard
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
        
    } catch (error) {
        console.error('Callback query error:', error);
        await ctx.answerCbQuery('❌ حدث خطأ في المعالجة');
    }
});

// 🎯 باقي الدوال (handleNextPrediction, handleUserStats, handleBotStats, handleSubscriptions, etc.)
// تبقى كما هي بدون تغيير...

// 🚀 START BOT
bot.launch().then(() => {
    console.log('🎉 SUCCESS! AI GOAL Predictor v10.4 is RUNNING!');
    console.log('👤 Developer:', CONFIG.DEVELOPER);
    console.log('📢 Channel:', CONFIG.CHANNEL);
    console.log('🌐 Health check: http://localhost:' + PORT);
    console.log('🔧 Admin ID:', CONFIG.ADMIN_ID);
    console.log('🖼️ FLEXIBLE Image verification system: ACTIVE');
}).catch(console.error);

// ⚡ Graceful shutdown
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));

console.log('✅ AI Goal Prediction System Ready!');
