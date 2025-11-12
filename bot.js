// ===================================================
// 🚀 AI GOAL PREDICTOR ULTIMATE - VERSION 16.2
// 👤 DEVELOPER: AMIN - @GEMZGOOLBOT
// 🔥 FEATURES: SMART AI + DUAL PAYMENT SYSTEM + FIREBASE + FULL ADMIN PANEL
// ===================================================

console.log('🤖 Starting AI GOAL Predictor Ultimate v16.2...');
console.log('🕒 ' + new Date().toISOString());

// 🔧 CONFIGURATION
const CONFIG = {
    BOT_TOKEN: process.env.BOT_TOKEN || "8125363786:AAFZaOGSAvq_p8Sc8cq2bIKZlpe4ej7tmdU",
    ADMIN_ID: process.env.ADMIN_ID || "6565594143",
    CHANNEL_ID: process.env.CHANNEL_ID || "-1003283663811",
    CHANNEL_USERNAME: process.env.CHANNEL_USERNAME || "@GEMZGOOL",
    
    // 🧠 AI APIS
    AI_APIS: {
        GEMINI: process.env.GEMINI_API_KEY || "AIzaSyCtjtT98-M5v6t8qICPSDw-1TLwPneyaQc",
        OPENAI: process.env.OPENAI_API_KEY || "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"
    },

    // 💰 DEFAULT PRICING - DUAL PAYMENT SYSTEM
    SUBSCRIPTION_PRICES: {
        binance: {
            week: 10,
            month: 30,
            three_months: 80,
            year: 250
        },
        bank: {
            week: 10,
            month: 30,
            three_months: 80,
            year: 250
        }
    },

    // 🔐 DEFAULT PAYMENT METHODS - SEPARATED
    PAYMENT_METHODS: {
        binance: {
            week: process.env.PAYMENT_WEEK || "https://binance.com/payment/weekly",
            month: process.env.PAYMENT_MONTH || "https://binance.com/payment/monthly", 
            three_months: process.env.PAYMENT_3MONTHS || "https://binance.com/payment/3months",
            year: process.env.PAYMENT_YEAR || "https://binance.com/payment/yearly"
        },
        bank: {
            week: { 
                account: process.env.BANK_WEEK_ACCOUNT || "SA1234567890123456789012", 
                image: process.env.BANK_WEEK_IMAGE || "https://i.ibb.co/SwF1mfWK/f89eea1a421a.jpg" 
            },
            month: { 
                account: process.env.BANK_MONTH_ACCOUNT || "SA1234567890123456789012", 
                image: process.env.BANK_MONTH_IMAGE || "https://i.ibb.co/SwF1mfWK/f89eea1a421a.jpg" 
            },
            three_months: { 
                account: process.env.BANK_3MONTHS_ACCOUNT || "SA1234567890123456789012", 
                image: process.env.BANK_3MONTHS_IMAGE || "https://i.ibb.co/SwF1mfWK/f89eea1a421a.jpg" 
            },
            year: { 
                account: process.env.BANK_YEAR_ACCOUNT || "SA1234567890123456789012", 
                image: process.env.BANK_YEAR_IMAGE || "https://i.ibb.co/SwF1mfWK/f89eea1a421a.jpg" 
            }
        }
    },
    
    VERSION: "16.2.0",
    DEVELOPER: "AMIN - @GEMZGOOLBOT",
    CHANNEL: "@GEMZGOOL",
    START_IMAGE: "https://i.ibb.co/tpy70Bd1/IMG-20251104-074214-065.jpg",
    ANALYSIS_IMAGE: "https://i.ibb.co/VYjf05S0/Screenshot.png",
    PREDICTION_IMAGE: "https://i.ibb.co/rGTZm2mB/IMG.jpg",
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

// 🔄 KEEP ALIVE ENDPOINT FOR RENDER
app.get('/keep-alive', (req, res) => {
    res.json({ 
        status: 'ALIVE', 
        timestamp: new Date().toISOString(),
        message: 'Bot is alive and running'
    });
});

app.listen(PORT, () => {
    console.log(`🌐 Health check server running on port ${PORT}`);
    console.log(`🔄 Keep alive endpoint: http://localhost:${PORT}/keep-alive`);
});

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
    payment_methods: { ...CONFIG.PAYMENT_METHODS },
    maintenance_mode: false,
    updated_at: new Date().toISOString()
});

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

// 🧠 SMART GOAL PREDICTION ENGINE
class GoalPredictionAI {
    constructor() {
        this.algorithmVersion = "16.2";
    }

    // دالة الحصول على الوقت السعودي الحقيقي
    getSaudiTime() {
        const now = new Date();
        const saudiTime = new Date(now.getTime() + (3 * 60 * 60 * 1000)); // توقيت السعودية +3
        return saudiTime.toLocaleTimeString('ar-SA', { 
            hour: '2-digit', 
            minute: '2-digit',
            second: '2-digit',
            hour12: false 
        });
    }

    // دالة الحصول على التاريخ والوقت السعودي
    getSaudiDateTime() {
        const now = new Date();
        const saudiTime = new Date(now.getTime() + (3 * 60 * 60 * 1000));
        return saudiTime.toLocaleString('ar-SA', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        });
    }

    generateSmartPrediction(userId) {
        const isGoal = Math.random() > 0.5;
        const probability = Math.floor(Math.random() * 30) + 60;
        
        // استخدام الوقت السعودي الحقيقي
        const realTime = this.getSaudiTime();
        const realDateTime = this.getSaudiDateTime();
        
        const prediction = {
            type: isGoal ? '⚽ GOAL' : '🛑 NO GOAL',
            probability: probability,
            confidence: 100,
            reasoning: isGoal ? 
                `🔥 الضغط الهجومي المستمر يشير لهدف قريب بنسبة ${probability}%` :
                `🛡️ الدفاع المنظم يحد من الفرص بنسبة ${probability}%`,
            timestamp: realTime,
            datetime: realDateTime,
            algorithm: this.algorithmVersion
        };

        return prediction;
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

// 💾 DATABASE MANAGER - ENHANCED FOR PERSISTENCE
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
            // التأكد من وجود جميع الحقول المطلوبة
            const completeUserData = {
                user_id: userId,
                username: userData.username || 'Unknown',
                onexbet: userData.onexbet || '',
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
                channel_subscribed: userData.channel_subscribed || false
            };

            if (db) {
                await db.collection('users').doc(userId.toString()).set(completeUserData, { merge: true });
            }
            userDatabase.set(userId, completeUserData);
            return true;
        } catch (error) {
            console.error('Error saving user:', error);
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
            return settingsDatabase.get('config') || {
                prices: { ...CONFIG.SUBSCRIPTION_PRICES },
                payment_methods: { ...CONFIG.PAYMENT_METHODS },
                maintenance_mode: false,
                updated_at: new Date().toISOString()
            };
        } catch (error) {
            return settingsDatabase.get('config') || {
                prices: { ...CONFIG.SUBSCRIPTION_PRICES },
                payment_methods: { ...CONFIG.PAYMENT_METHODS },
                maintenance_mode: false,
                updated_at: new Date().toISOString()
            };
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
                (user.onexbet && user.onexbet.toString().includes(query))
            );
        } catch (error) {
            console.error('Search users error:', error);
            return [];
        }
    }

    // دالة جديدة لحفظ بيانات النسخ الاحتياطي
    async backupData() {
        try {
            const backupData = {
                users: await this.getAllUsers(),
                payments: await this.getAllPayments(),
                settings: await this.getSettings(),
                timestamp: new Date().toISOString()
            };
            
            if (db) {
                await db.collection('backups').doc(Date.now().toString()).set(backupData);
            }
            
            return backupData;
        } catch (error) {
            console.error('Backup error:', error);
            return null;
        }
    }

    // دالة جديدة للتحقق من اشتراك القناة
    async setChannelSubscription(userId, subscribed) {
        try {
            const user = await this.getUser(userId);
            if (user) {
                user.channel_subscribed = subscribed;
                await this.saveUser(userId, user);
            }
            return true;
        } catch (error) {
            console.error('Set channel subscription error:', error);
            return false;
        }
    }

    // دالة جديدة للحصول على جميع الإحصائيات
    async getAllStats() {
        try {
            const users = await this.getAllUsers();
            const payments = await this.getAllPayments();
            
            const activeUsers = users.filter(u => u.subscription_status === 'active');
            const freeUsers = users.filter(u => u.subscription_status === 'free');
            
            const totalPredictions = users.reduce((sum, user) => sum + (user.total_predictions || 0), 0);
            const totalProfit = users.reduce((sum, user) => sum + (user.total_profit || 0), 0);
            const totalBets = users.reduce((sum, user) => sum + (user.total_bets || 0), 0);
            
            return {
                totalUsers: users.length,
                activeUsers: activeUsers.length,
                freeUsers: freeUsers.length,
                totalPredictions,
                totalProfit,
                totalBets,
                totalPayments: payments.length,
                pendingPayments: payments.filter(p => p.status === 'pending').length
            };
        } catch (error) {
            console.error('Get all stats error:', error);
            return {
                totalUsers: 0,
                activeUsers: 0,
                freeUsers: 0,
                totalPredictions: 0,
                totalProfit: 0,
                totalBets: 0,
                totalPayments: 0,
                pendingPayments: 0
            };
        }
    }
}

// INITIALIZE SYSTEMS
const goalAI = new GoalPredictionAI();
const dbManager = new DatabaseManager();
const dynamicStats = new DynamicStatistics();
const imgbbUploader = new ImgBBUploader(CONFIG.IMGBB_API_KEY);

// 📢 CHANNEL NOTIFICATION SYSTEM
class ChannelNotifier {
    constructor(bot, channelId) {
        this.bot = bot;
        this.channelId = channelId;
    }

    async sendSubscriptionNotification(userData, subscriptionType, amount, paymentMethod) {
        try {
            const saudiTime = goalAI.getSaudiDateTime();
            
            const message = `
🎉 *اشتراك جديد في البوت*

👤 *المستخدم:* ${userData.username}
🔐 *الحساب:* ${userData.onexbet}
📦 *الباقة:* ${subscriptionType}
💰 *المبلغ:* ${amount}$
💳 *طريقة الدفع:* ${paymentMethod === 'binance' ? 'Binance' : 'البنك الكريمي'}

🕒 *الوقت:* ${saudiTime}
            `;

            await this.bot.telegram.sendMessage(this.channelId, message, {
                parse_mode: 'Markdown'
            });
        } catch (error) {
            console.error('Error sending subscription notification:', error);
        }
    }

    async sendPredictionNotification(userData, prediction, betAmount) {
        try {
            const saudiTime = goalAI.getSaudiDateTime();
            
            const message = `
🎯 *توقع جديد في البوت*

👤 *المستخدم:* ${userData.username}
🔐 *الحساب:* ${userData.onexbet}
🎯 *التوقع:* ${prediction.type}
📈 *الاحتمالية:* ${prediction.probability}%
💰 *مبلغ الرهان:* ${betAmount}$

💡 *التحليل:*
${prediction.reasoning}

🕒 *الوقت:* ${saudiTime}
            `;

            await this.bot.telegram.sendMessage(this.channelId, message, {
                parse_mode: 'Markdown'
            });
        } catch (error) {
            console.error('Error sending prediction notification:', error);
        }
    }
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
        paymentMethod: null,
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
        editingPaymentMethod: null,
        editingBankAccount: null,
        editingBankPrice: null,
        checkingChannel: false,
        // جلسات جديدة للتحكم في التعديلات المنفصلة
        adminEditStep: null,
        adminEditPrice: null,
        adminEditAccount: null,
        adminEditImage: null
    })
}));

// 🎯 لوحة المفاتيح الثابتة
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

const getSubscriptionKeyboard = () => {
    return Markup.keyboard([
        ['💳 Binance', '🏦 البنك الكريمي'],
        ['🔙 الرجوع للقائمة']
    ]).resize();
};

const getPaymentMethodKeyboard = (paymentMethod) => {
    return Markup.keyboard([
        ['💰 أسبوعي', '💰 شهري'],
        ['💰 3 أشهر', '💰 سنوي'],
        ['🔙 رجوع للاشتراكات']
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
        ['💰 تعديل الأسعار والدفع', '⚙️ الإعدادات العامة'],
        ['🔄 إعادة التعيين', '🔙 رجوع']
    ]).resize();
};

const getAdminPaymentMethodsKeyboard = () => {
    return Markup.keyboard([
        ['💳 تعديل Binance', '🏦 تعديل البنك الكريمي'],
        ['🔙 رجوع']
    ]).resize();
};

const getAdminPaymentTypesKeyboard = () => {
    return Markup.keyboard([
        ['💰 أسبوعي', '💰 شهري'],
        ['💰 3 أشهر', '💰 سنوي'],
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

// 🔍 FUNCTION TO CHECK CHANNEL SUBSCRIPTION
async function checkChannelSubscription(userId) {
    try {
        const chatMember = await bot.telegram.getChatMember(CONFIG.CHANNEL_ID, userId);
        return chatMember.status === 'member' || chatMember.status === 'administrator' || chatMember.status === 'creator';
    } catch (error) {
        console.error('Error checking channel subscription:', error);
        return false;
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

        // التحقق إذا كان المستخدم مسجل مسبقاً
        const existingUser = await dbManager.getUser(userId);
        
        if (existingUser) {
            // المستخدم مسجل مسبقاً - دخول مباشر
            ctx.session.step = 'verified';
            ctx.session.userData = existingUser;

            const remainingDays = calculateRemainingDays(existingUser.subscription_end_date);
            const saudiTime = goalAI.getSaudiDateTime();
            
            let statusMessage = '';
            if (existingUser.subscription_status === 'active' && remainingDays > 0) {
                statusMessage = `🎉 *مرحباً بعودتك!*\n\n` +
                               `✅ *اشتراكك نشط*\n` +
                               `🔐 الحساب: \`${existingUser.onexbet}\`\n` +
                               `📦 النوع: ${existingUser.subscription_type}\n` +
                               `📅 الانتهاء: ${new Date(existingUser.subscription_end_date).toLocaleDateString('ar-EG')}\n` +
                               `⏳ متبقي: ${remainingDays} يوم\n` +
                               `🕒 الوقت: ${saudiTime}`;
            } else if (existingUser.free_attempts > 0) {
                statusMessage = `🎉 *مرحباً بعودتك!*\n\n` +
                               `🎯 *محاولات مجانية متاحة*\n` +
                               `🔐 الحساب: \`${existingUser.onexbet}\`\n` +
                               `🆓 محاولات مجانية: ${existingUser.free_attempts}\n` +
                               `🕒 الوقت: ${saudiTime}`;
            } else {
                statusMessage = `🎉 *مرحباً بعودتك!*\n\n` +
                               `🚫 *انتهت المحاولات*\n` +
                               `🔐 الحساب: \`${existingUser.onexbet}\`\n` +
                               `💳 يرجى الاشتراك للمتابعة\n` +
                               `🕒 الوقت: ${saudiTime}`;
            }

            await ctx.replyWithMarkdown(statusMessage, getMainKeyboard());
            
        } else {
            // مستخدم جديد - التحقق من الاشتراك في القناة أولاً
            const isSubscribed = await checkChannelSubscription(userId);
            
            if (!isSubscribed) {
                // إرسال رسالة طلب الاشتراك في القناة
                await ctx.replyWithMarkdown(
                    `🔐 *مرحباً ${userName} في نظام GOAL Predictor Pro v${CONFIG.VERSION}*\n\n` +
                    `📢 *للاستخدام البوت يجب الاشتراك في قناتنا أولاً*\n\n` +
                    `👉 ${CONFIG.CHANNEL_USERNAME}\n\n` +
                    `✅ بعد الاشتراك اضغط على الزر أدناه للتحقق:`,
                    Markup.inlineKeyboard([
                        [Markup.button.callback('✅ تحقق من الاشتراك', 'check_channel_subscription')]
                    ])
                );
                return;
            }

            // إذا كان مشتركاً في القناة، نكمل عملية التسجيل
            await dbManager.setChannelSubscription(userId, true);
            
            // إرسال الصورة أولاً
            try {
                await ctx.replyWithPhoto(CONFIG.START_IMAGE, {
                    caption: `🎉 *مرحباً بك في نظام GOAL Predictor Pro v${CONFIG.VERSION}* 🚀\n\n` +
                            `🤖 *أقوى نظام لتوقع الأهداف بالذكاء الاصطناعي*\n` +
                            `💎 *المطور:* ${CONFIG.DEVELOPER}\n` +
                            `📢 *القناة:* ${CONFIG.CHANNEL}\n` +
                            `🕒 *الوقت:* ${goalAI.getSaudiDateTime()}`
                });
            } catch (photoError) {
                await ctx.replyWithMarkdown(`🎉 *مرحباً بك في نظام GOAL Predictor Pro v${CONFIG.VERSION}* 🚀\n🕒 *الوقت:* ${goalAI.getSaudiDateTime()}`);
            }

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
🕒 *الوقت:* ${goalAI.getSaudiDateTime()}

🔢 *الآن اضغط على "🔐 إدخال رقم الحساب" لبدء التسجيل*
            `;

            await ctx.replyWithMarkdown(welcomeMessage, getLoginKeyboard());
        }

    } catch (error) {
        console.error('Start command error:', error);
        await ctx.replyWithMarkdown('❌ حدث خطأ في النظام، يرجى المحاولة لاحقاً');
    }
});

// 🔗 معالجة زر التحقق من الاشتراك في القناة
bot.action('check_channel_subscription', async (ctx) => {
    try {
        const userId = ctx.from.id.toString();
        const isSubscribed = await checkChannelSubscription(userId);
        
        if (isSubscribed) {
            await dbManager.setChannelSubscription(userId, true);
            await ctx.answerCbQuery('✅ تم التحقق من الاشتراك بنجاح!');
            await ctx.deleteMessage();
            
            // إرسال رسالة الترحيب بعد التحقق
            const userName = ctx.from.first_name;
            
            // إرسال الصورة أولاً
            try {
                await ctx.replyWithPhoto(CONFIG.START_IMAGE, {
                    caption: `🎉 *مرحباً بك في نظام GOAL Predictor Pro v${CONFIG.VERSION}* 🚀\n\n` +
                            `🤖 *أقوى نظام لتوقع الأهداف بالذكاء الاصطناعي*\n` +
                            `💎 *المطور:* ${CONFIG.DEVELOPER}\n` +
                            `📢 *القناة:* ${CONFIG.CHANNEL}\n` +
                            `🕒 *الوقت:* ${goalAI.getSaudiDateTime()}`
                });
            } catch (photoError) {
                await ctx.replyWithMarkdown(`🎉 *مرحباً بك في نظام GOAL Predictor Pro v${CONFIG.VERSION}* 🚀\n🕒 *الوقت:* ${goalAI.getSaudiDateTime()}`);
            }

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
🕒 *الوقت:* ${goalAI.getSaudiDateTime()}

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

        // التحقق من الاشتراك في القناة للمستخدمين الجدد
        const existingUser = await dbManager.getUser(userId);
        if (!existingUser && session.step !== 'awaiting_verification' && session.step !== 'awaiting_account_id') {
            const isSubscribed = await checkChannelSubscription(userId);
            if (!isSubscribed) {
                await ctx.replyWithMarkdown(
                    `❌ *يجب الاشتراك في القناة أولاً*\n\n` +
                    `📢 يرجى الاشتراك في القناة:\n` +
                    `👉 ${CONFIG.CHANNEL_USERNAME}\n\n` +
                    `✅ ثم اضغط على /start للبدء`,
                    Markup.inlineKeyboard([
                        [Markup.button.callback('✅ تحقق من الاشتراك', 'check_channel_subscription')]
                    ])
                );
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
                `🎯 *الآن اضغط على "جلب التحليل" للحصول على التوقع*`,
                getMainKeyboard()
            );
            return;
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

        // 🔐 STEP 1: Validate 1xBet Account - التحقق المحسن
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
            if (parseInt(text) === ctx.session.verificationCode) {
                
                // إرسال رسالة الانتظار المتحركة
                const waitingMessage = await ctx.replyWithMarkdown(
                    '🔐 *جاري تسجيل الدخول...*\n\n' +
                    '⏳ جاري البحث في السجلات...\n' +
                    '📡 جاري الاتصال بالسيرفر...\n' +
                    '⚡ جاري تفعيل الحساب...\n' +
                    '🎯 جاري إعداد المحاولات المجانية...\n\n' +
                    '⏰ قد تستغرق العملية بضع ثوان...'
                );

                // محاكاة الانتظار لمدة 10 ثواني
                await new Promise(resolve => setTimeout(resolve, 10000));

                const userData = {
                    user_id: userId,
                    username: ctx.from.first_name,
                    onexbet: ctx.session.accountId,
                    free_attempts: 10, // 10 محاولات مجانية
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
                    channel_subscribed: true
                };

                await dbManager.saveUser(userId, userData);
                ctx.session.step = 'verified';
                ctx.session.userData = userData;

                // حذف رسالة الانتظار
                await ctx.deleteMessage(waitingMessage.message_id);

                await ctx.replyWithMarkdown(
                    `🎉 *تم التحقق بنجاح!*\n\n` +
                    `✅ *الحساب:* \`${ctx.session.accountId}\`\n` +
                    `👤 *المستخدم:* ${ctx.session.userData.username}\n` +
                    `🕒 *الوقت:* ${goalAI.getSaudiDateTime()}\n\n` +
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
            if (/^\d{10}$/.test(text)) {
                const userData = await dbManager.getUser(userId);
                
                // 🔒 التحقق من تطابق رقم الحساب مع المسجل
                if (text !== userData.onexbet) {
                    await ctx.replyWithMarkdown(
                        '❌ *رقم الحساب لا يتطابق!*\n\n' +
                        `🔐 حسابك المسجل: \`${userData.onexbet}\`\n` +
                        `🔢 الرقم المرسل: \`${text}\`\n\n` +
                        '💡 يرجى إعادة عملية الدفع بإدخال رقم حسابك الصحيح',
                        getMainKeyboard()
                    );
                    
                    ctx.session.paymentType = null;
                    ctx.session.paymentMethod = null;
                    ctx.session.awaitingPaymentAccount = false;
                    ctx.session.paymentAccount = null;
                    return;
                }
                
                ctx.session.awaitingPaymentAccount = false;
                ctx.session.paymentAccount = text;
                
                await ctx.replyWithMarkdown(
                    `✅ *تم التحقق من رقم الحساب:* \`${text}\`\n\n` +
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
                        `⏰ متاحون 24/7 لخدمتكم\n` +
                        `🕒 الوقت: ${goalAI.getSaudiDateTime()}`,
                        getMainKeyboard()
                    );
                    break;

                case '🔙 الرجوع للقائمة':
                    await ctx.replyWithMarkdown('🔙 *العودة للقائمة الرئيسية*', getMainKeyboard());
                    break;

                case '💳 Binance':
                case '🏦 البنك الكريمي':
                    await handlePaymentMethodSelection(ctx, userData, text);
                    break;

                case '🔙 رجوع للاشتراكات':
                    await handleSubscriptions(ctx, userData);
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

// 🖼️ معالجة صور الدفع فقط
bot.on('photo', async (ctx) => {
    try {
        const userId = ctx.from.id.toString();
        const session = ctx.session;
        
        // 💳 معالجة صور الدفع من المستخدمين فقط
        if (session.paymentType) {
            await handlePaymentScreenshot(ctx, userId);
            return;
        }

        // 🖼️ معالجة رفع صورة للدفع في الإدمن - النظام الجديد
        if (session.adminEditStep === 'awaiting_bank_image') {
            await handleAdminBankImageUpload(ctx, userId);
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

// 🎯 HANDLE CALLBACK QUERIES
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
                    `💵 إجمالي أرباحك: ${ctx.session.totalProfit}$\n` +
                    `🕒 الوقت: ${goalAI.getSaudiDateTime()}\n\n` +
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
                    `💪 لا توقف.. استمر في المحاولة\n` +
                    `🕒 الوقت: ${goalAI.getSaudiDateTime()}\n\n` +
                    `🎯 *التوقع التالي:*\n` +
                    `${newPrediction.type}\n` +
                    `📈 ${newPrediction.probability}% | 🎯 ${newPrediction.confidence}%\n` +
                    `💡 ${newPrediction.reasoning}`,
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
        
        // معالجة زر المتابعة للاشتراك
        else if (callbackData.startsWith('confirm_')) {
            const parts = callbackData.split('_');
            const paymentMethod = parts[1];
            const subscriptionType = parts[2];
            await handleSubscriptionConfirmation(ctx, subscriptionType, paymentMethod);
        }
        
        // معالجة زر الرجوع للاشتراكات
        else if (callbackData === 'back_to_subscriptions') {
            await ctx.deleteMessage(ctx.callbackQuery.message.message_id);
            await ctx.replyWithMarkdown('💳 *باقات الاشتراك المتاحة*', getSubscriptionKeyboard());
        }
        
        // معالجة زر الرجوع لطرق الدفع
        else if (callbackData === 'back_to_payment_methods') {
            await ctx.deleteMessage(ctx.callbackQuery.message.message_id);
            await ctx.replyWithMarkdown('💳 *اختر طريقة الدفع*', getSubscriptionKeyboard());
        }
        
    } catch (error) {
        console.error('Callback query error:', error);
        await ctx.answerCbQuery('❌ حدث خطأ في المعالجة');
    }
});

// 🎯 HANDLER FUNCTIONS

async function handleGetPrediction(ctx, userData) {
    try {
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
🕒 *الوقت:* ${prediction.timestamp}
📅 *التاريخ:* ${prediction.datetime}

${userData.subscription_status !== 'active' ? 
    `🆓 *المحاولات المتبقية:* ${userData.free_attempts}` : 
    `✅ *اشتراك نشط - محاولات غير محدودة*`}
        `;

        // إرسال الصورة مع التوقع في رسالة واحدة
        await ctx.replyWithPhoto(CONFIG.PREDICTION_IMAGE, {
            caption: analysisMessage,
            parse_mode: 'Markdown'
        });

        // إرسال الإشعار للقناة
        await channelNotifier.sendPredictionNotification(userData, prediction, ctx.session.currentBet);

        // حذف رسالة الانتظار
        await ctx.deleteMessage(loadingMsg.message_id);

    } catch (error) {
        console.error('Get prediction error:', error);
        await ctx.replyWithMarkdown('❌ *حدث خطأ في جلب التحليل*', getMainKeyboard());
    }
}

async function handleUserStats(ctx, userData) {
    const accuracy = userData.correct_predictions > 0 ? 
        Math.round((userData.correct_predictions / (userData.total_predictions || 1)) * 100) : 0;
    
    let subscriptionInfo = '';
    if (userData.subscription_status === 'active') {
        const remainingDays = calculateRemainingDays(userData.subscription_end_date);
        subscriptionInfo = `\n📦 *الاشتراك:* ${userData.subscription_type}\n` +
                          `⏳ *متبقي:* ${remainingDays} يوم`;
    } else {
        subscriptionInfo = `\n🆓 *محاولات مجانية:* ${userData.free_attempts}`;
    }
    
    await ctx.replyWithMarkdown(
        `📊 *إحصائياتك الشخصية*\n\n` +
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
        `\n🕒 الوقت: ${goalAI.getSaudiDateTime()}`,
        getMainKeyboard()
    );
}

async function handleBotStats(ctx) {
    const stats = dynamicStats.getStats(); // تحديث الإحصائيات عند كل طلب
    await ctx.replyWithMarkdown(
        `👥 *إحصائيات البوت*\n\n` +
        `👤 إجمالي المستخدمين: ${stats.totalUsers.toLocaleString()}\n` +
        `🟢 مستخدمين نشطين الآن: ${stats.activeUsers}\n` +
        `📊 التوقعات اليومية: ${Math.floor(stats.activeUsers * 8.5)}\n` +
        `🕒 الوقت: ${goalAI.getSaudiDateTime()}\n\n` +
        `🎯 *النظام يعمل بكفاءة عالية*`,
        getMainKeyboard()
    );
}

async function handleSubscriptions(ctx, userData) {
    try {
        await ctx.replyWithMarkdown(
            '💳 *باقات الاشتراك المتاحة*\n\n' +
            '📦 اختر طريقة الدفع المناسبة:\n\n' +
            '💳 *Binance* - الدفع عبر منصة Binance\n' +
            '🏦 *البنك الكريمي* - التحويل البنكي المباشر\n\n' +
            '💡 اضغط على الطريقة التي تفضل الدفع بها\n' +
            `🕒 الوقت: ${goalAI.getSaudiDateTime()}`,
            getSubscriptionKeyboard()
        );
    } catch (error) {
        console.error('Subscriptions error:', error);
        await ctx.replyWithMarkdown('❌ *حدث خطأ في جلب معلومات الاشتراكات*', getMainKeyboard());
    }
}

async function handlePaymentMethodSelection(ctx, userData, text) {
    const paymentMethod = text === '💳 Binance' ? 'binance' : 'bank';
    const paymentMethodName = paymentMethod === 'binance' ? 'Binance' : 'البنك الكريمي';
    
    try {
        const settings = await dbManager.getSettings();
        const prices = settings.prices[paymentMethod];

        let message = `💳 *باقات الاشتراك - ${paymentMethodName}*\n\n`;
        
        const subscriptionTypes = [
            { key: 'week', name: 'أسبوعي', emoji: '💰' },
            { key: 'month', name: 'شهري', emoji: '💰' },
            { key: 'three_months', name: '3 أشهر', emoji: '💰' },
            { key: 'year', name: 'سنوي', emoji: '💰' }
        ];

        subscriptionTypes.forEach(sub => {
            message += `${sub.emoji} *${sub.name}* - ${prices[sub.key]}$\n`;
        });

        message += `\n💡 اختر الباقة المناسبة\n🕒 الوقت: ${goalAI.getSaudiDateTime()}`;

        await ctx.replyWithMarkdown(message, getPaymentMethodKeyboard(paymentMethod));
        
    } catch (error) {
        console.error('Payment method selection error:', error);
        await ctx.replyWithMarkdown('❌ *حدث خطأ في معالجة الطلب*', getMainKeyboard());
    }
}

async function handleSubscriptionSelection(ctx, userData, text) {
    const subscriptionTypeMap = {
        '💰 أسبوعي': 'week',
        '💰 شهري': 'month', 
        '💰 3 أشهر': 'three_months',
        '💰 سنوي': 'year'
    };

    const subscriptionType = subscriptionTypeMap[text];
    if (!subscriptionType) {
        await ctx.replyWithMarkdown('❌ *اختيار غير صحيح*', getPaymentMethodKeyboard(ctx.session.paymentMethod));
        return;
    }

    try {
        const settings = await dbManager.getSettings();
        const paymentMethod = ctx.session.paymentMethod || 'binance';
        const prices = settings.prices[paymentMethod];
        const paymentMethods = settings.payment_methods[paymentMethod];

        const displayName = text.replace('💰 ', '');
        const paymentMethodName = paymentMethod === 'binance' ? 'Binance' : 'البنك الكريمي';
        
        if (paymentMethod === 'binance') {
            // معالجة الدفع عبر Binance
            const paymentLink = paymentMethods[subscriptionType];
            const isImage = paymentLink && (paymentLink.includes('.jpg') || paymentLink.includes('.png') || paymentLink.includes('.jpeg') || paymentLink.includes('.gif') || paymentLink.includes('imgbb') || paymentLink.includes('i.ibb.co') || paymentLink.startsWith('https://i.ibb.co'));

            if (isImage) {
                // إذا كانت صورة، نرسل الصورة مع النص في رسالة واحدة
                const subscriptionMessage = `💳 *باقة ${displayName} - ${paymentMethodName}*\n\n` +
                    `💰 السعر: ${prices[subscriptionType]}$\n` +
                    `⏰ المدة: ${subscriptionType === 'week' ? '7 أيام' : subscriptionType === 'month' ? '30 يوماً' : subscriptionType === 'three_months' ? '90 يوماً' : '365 يوماً'}\n\n` +
                    `📋 *طريقة الدفع:*\n` +
                    `💳 ادفع بالمسح عبر الكاميرا\n` +
                    `📱 أو امسح الكود لمواصلة الدفع\n\n` +
                    `🕒 الوقت: ${goalAI.getSaudiDateTime()}\n\n` +
                    `💡 *هل تريد المتابعة مع هذه الباقة؟*`;

                try {
                    await ctx.replyWithPhoto(paymentLink, {
                        caption: subscriptionMessage,
                        parse_mode: 'Markdown',
                        reply_markup: {
                            inline_keyboard: [
                                [ { text: '✅ نعم، المتابعة', callback_data: `confirm_${paymentMethod}_${subscriptionType}` } ],
                                [ { text: '🔙 رجوع', callback_data: 'back_to_payment_methods' } ]
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
                                    [ { text: '✅ نعم، المتابعة', callback_data: `confirm_${paymentMethod}_${subscriptionType}` } ],
                                    [ { text: '🔙 رجوع', callback_data: 'back_to_payment_methods' } ]
                                ]
                            }
                        }
                    );
                }
            } else {
                // إذا كان رابط عادي
                const subscriptionMessage = `💳 *باقة ${displayName} - ${paymentMethodName}*\n\n` +
                    `💰 السعر: ${prices[subscriptionType]}$\n` +
                    `⏰ المدة: ${subscriptionType === 'week' ? '7 أيام' : subscriptionType === 'month' ? '30 يوماً' : subscriptionType === 'three_months' ? '90 يوماً' : '365 يوماً'}\n\n` +
                    `🔗 *رابط الدفع:* ${paymentLink}\n\n` +
                    `📋 *طريقة الدفع:*\n` +
                    `1. ادفع عبر الرابط أعلاه\n` +
                    `2. أرسل رقم حساب 1xBet (10 أرقام)\n` +
                    `3. أرسل صورة إثبات الدفع\n` +
                    `4. انتظر التفعيل من الإدارة\n\n` +
                    `🕒 الوقت: ${goalAI.getSaudiDateTime()}\n\n` +
                    `💡 *هل تريد المتابعة مع هذه الباقة؟*`;

                await ctx.replyWithMarkdown(subscriptionMessage, {
                    reply_markup: {
                        inline_keyboard: [
                            [ { text: '✅ نعم، المتابعة', callback_data: `confirm_${paymentMethod}_${subscriptionType}` } ],
                            [ { text: '🔙 رجوع', callback_data: 'back_to_payment_methods' } ]
                        ]
                    }
                });
            }
        } else {
            // معالجة الدفع عبر البنك الكريمي - محدثة لإرسال الصورة مع النص في رسالة واحدة
            const paymentInfo = paymentMethods[subscriptionType];
            
            const subscriptionMessage = `💳 *باقة ${displayName} - ${paymentMethodName}*\n\n` +
                `💰 السعر: ${prices[subscriptionType]}$\n` +
                `⏰ المدة: ${subscriptionType === 'week' ? '7 أيام' : subscriptionType === 'month' ? '30 يوماً' : subscriptionType === 'three_months' ? '90 يوماً' : '365 يوماً'}\n\n` +
                `🏦 *معلومات الدفع:*\n` +
                `📊 *رقم الحساب:* \`${paymentInfo.account}\`\n\n` +
                `📋 *طريقة الدفع:*\n` +
                `1. قم بالتحويل إلى الرقم أعلاه\n` +
                `2. أرسل رقم حساب 1xBet (10 أرقام)\n` +
                `3. أرسل صورة إثبات التحويل\n` +
                `4. انتظر التفعيل من الإدارة\n\n` +
                `🕒 الوقت: ${goalAI.getSaudiDateTime()}\n\n` +
                `💡 *هل تريد المتابعة مع هذه الباقة؟*`;

            // إرسال الصورة مع النص في رسالة واحدة
            if (paymentInfo.image) {
                try {
                    await ctx.replyWithPhoto(paymentInfo.image, {
                        caption: subscriptionMessage,
                        parse_mode: 'Markdown',
                        reply_markup: {
                            inline_keyboard: [
                                [ { text: '✅ نعم، المتابعة', callback_data: `confirm_${paymentMethod}_${subscriptionType}` } ],
                                [ { text: '🔙 رجوع', callback_data: 'back_to_payment_methods' } ]
                            ]
                        }
                    });
                } catch (photoError) {
                    console.error('Error sending bank payment image:', photoError);
                    // إذا فشل إرسال الصورة، نرسل النص فقط
                    await ctx.replyWithMarkdown(subscriptionMessage, {
                        reply_markup: {
                            inline_keyboard: [
                                [ { text: '✅ نعم، المتابعة', callback_data: `confirm_${paymentMethod}_${subscriptionType}` } ],
                                [ { text: '🔙 رجوع', callback_data: 'back_to_payment_methods' } ]
                            ]
                        }
                    });
                }
            } else {
                await ctx.replyWithMarkdown(subscriptionMessage, {
                    reply_markup: {
                        inline_keyboard: [
                            [ { text: '✅ نعم، المتابعة', callback_data: `confirm_${paymentMethod}_${subscriptionType}` } ],
                            [ { text: '🔙 رجوع', callback_data: 'back_to_payment_methods' } ]
                        ]
                    }
                });
            }
        }

    } catch (error) {
        console.error('Subscription selection error:', error);
        await ctx.replyWithMarkdown('❌ *حدث خطأ في معالجة طلب الاشتراك*', getPaymentMethodKeyboard(ctx.session.paymentMethod));
    }
}

// معالجة تأكيد الاشتراك - محدثة لدعم طرق الدفع المزدوجة
async function handleSubscriptionConfirmation(ctx, subscriptionType, paymentMethod) {
    try {
        const userId = ctx.from.id.toString();
        const userData = await dbManager.getUser(userId);

        if (!userData) {
            await ctx.answerCbQuery('❌ لم يتم العثور على بيانات المستخدم');
            return;
        }

        const settings = await dbManager.getSettings();
        const prices = settings.prices[paymentMethod];

        ctx.session.paymentType = subscriptionType;
        ctx.session.paymentMethod = paymentMethod;
        ctx.session.awaitingPaymentAccount = true;

        await ctx.answerCbQuery('✅ تم تأكيد الاختيار');
        
        // حذف الرسالة السابقة
        await ctx.deleteMessage(ctx.callbackQuery.message.message_id);

        const paymentMethodName = paymentMethod === 'binance' ? 'Binance' : 'البنك الكريمي';

        await ctx.replyWithMarkdown(
            `💳 *باقة ${subscriptionType} - ${paymentMethodName}*\n\n` +
            `💰 السعر: ${prices[subscriptionType]}$\n\n` +
            `🔐 *رقم حسابك المسجل:* \`${userData.onexbet}\`\n\n` +
            `🔢 *الآن أرسل رقم حساب 1xBet للتأكد:*\n` +
            `🕒 الوقت: ${goalAI.getSaudiDateTime()}`
        );

    } catch (error) {
        console.error('Subscription confirmation error:', error);
        await ctx.answerCbQuery('❌ حدث خطأ في المعالجة');
    }
}

async function handleSubscriptionStatus(ctx, userData) {
    const saudiTime = goalAI.getSaudiDateTime();
    
    let statusMessage = '';
    if (userData.subscription_status === 'active') {
        const remainingDays = calculateRemainingDays(userData.subscription_end_date);
        statusMessage = `✅ *اشتراكك نشط*\n\n` +
                       `🔐 الحساب: \`${userData.onexbet}\`\n` +
                       `📦 النوع: ${userData.subscription_type}\n` +
                       `📅 الانتهاء: ${new Date(userData.subscription_end_date).toLocaleDateString('ar-EG')}\n` +
                       `⏳ متبقي: ${remainingDays} يوم\n` +
                       `🕒 الوقت: ${saudiTime}`;
    } else if (userData.free_attempts > 0) {
        statusMessage = `🎯 *محاولات مجانية متاحة*\n\n` +
                       `🔐 الحساب: \`${userData.onexbet}\`\n` +
                       `🆓 محاولات مجانية: ${userData.free_attempts}\n` +
                       `🕒 الوقت: ${saudiTime}\n\n` +
                       `💳 يمكنك الاشتراك للحصول على ميزات غير محدودة`;
    } else {
        statusMessage = `🚫 *انتهت المحاولات*\n\n` +
                       `🔐 الحساب: \`${userData.onexbet}\`\n` +
                       `🕒 الوقت: ${saudiTime}\n\n` +
                       `💳 يرجى الاشتراك للمتابعة في استخدام الخدمة`;
    }
    
    await ctx.replyWithMarkdown(statusMessage, getMainKeyboard());
}

async function handlePaymentScreenshot(ctx, userId) {
    try {
        const userData = await dbManager.getUser(userId);
        const photo = ctx.message.photo[ctx.message.photo.length - 1];
        const fileLink = await bot.telegram.getFileLink(photo.file_id);
        const imageUrl = fileLink.href;

        const settings = await dbManager.getSettings();
        const paymentMethod = ctx.session.paymentMethod || 'binance';
        const prices = settings.prices[paymentMethod];

        const accountNumber = ctx.session.paymentAccount || userData.onexbet;

        // التحقق النهائي من تطابق رقم الحساب مع المسجل
        if (accountNumber !== userData.onexbet) {
            await ctx.replyWithMarkdown(
                '❌ *رقم الحساب لا يتطابق!*\n\n' +
                `🔐 حسابك المسجل: \`${userData.onexbet}\`\n` +
                `🔢 الرقم المرسل: \`${accountNumber}\`\n\n` +
                '💡 يرجى إعادة عملية الدفع بإدخال رقم حسابك الصحيح',
                getMainKeyboard()
            );
            
            ctx.session.paymentType = null;
            ctx.session.paymentMethod = null;
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
            payment_method: paymentMethod, // حفظ طريقة الدفع
            username: userData.username,
            timestamp: new Date().toISOString()
        };

        const paymentId = await dbManager.addPayment(paymentData);
        
        // إرسال الإشعار للإدارة مع الصورة
        try {
            const paymentMethodName = paymentMethod === 'binance' ? 'Binance' : 'البنك الكريمي';
            
            await bot.telegram.sendPhoto(
                CONFIG.ADMIN_ID,
                uploadResult.url,
                {
                    caption: `🆕 *طلب دفع جديد*\n\n` +
                    `👤 المستخدم: ${userData.username}\n` +
                    `🔐 الحساب: ${accountNumber}\n` +
                    `💰 المبلغ: ${paymentData.amount}$\n` +
                    `📦 الباقة: ${ctx.session.paymentType}\n` +
                    `💳 طريقة الدفع: ${paymentMethodName}\n` +
                    `🆔 الرقم: ${paymentId}\n` +
                    `📅 الوقت: ${goalAI.getSaudiDateTime()}`,
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

        const paymentMethodName = paymentMethod === 'binance' ? 'Binance' : 'البنك الكريمي';

        await ctx.replyWithMarkdown(
            '📩 *تم استلام صورة الدفع بنجاح*\n\n' +
            `✅ الحساب: \`${accountNumber}\`\n` +
            `✅ الباقة: ${ctx.session.paymentType}\n` +
            `💳 طريقة الدفع: ${paymentMethodName}\n` +
            `💰 المبلغ: ${paymentData.amount}$\n\n` +
            '✅ سيتم مراجعتها من الإدارة في أقرب وقت\n' +
            '⏰ عادةً خلال 24 ساعة\n\n' +
            `📞 للاستفسار: ${CONFIG.DEVELOPER}\n` +
            `🕒 الوقت: ${goalAI.getSaudiDateTime()}`,
            getMainKeyboard()
        );

        ctx.session.paymentType = null;
        ctx.session.paymentMethod = null;
        ctx.session.awaitingPaymentAccount = false;
        ctx.session.paymentAccount = null;
    } catch (error) {
        console.error('Payment screenshot error:', error);
        await ctx.replyWithMarkdown('❌ *حدث خطأ في معالجة صورة الدفع*', getMainKeyboard());
    }
}

// 🔧 ADMIN HANDLERS - UPDATED FOR COMPLETE SEPARATION
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

        // SECOND: Handle navigation and main commands
        switch (text) {
            case '📊 إحصائيات النظام':
                await handleAdminStats(ctx);
                break;
                
            case '👥 إدارة المستخدمين':
                ctx.session.adminStep = 'users';
                await ctx.replyWithMarkdown('👥 *إدارة المستخدمين*', getAdminUsersKeyboard());
                break;
                
            case '💰 طلبات الدفع':
                ctx.session.adminStep = 'payments';
                await ctx.replyWithMarkdown('💰 *إدارة طلبات الدفع*', getAdminPaymentsKeyboard());
                break;
                
            case '⚙️ الإعدادات':
                ctx.session.adminStep = 'settings';
                await ctx.replyWithMarkdown('⚙️ *الإعدادات العامة*', getAdminSettingsKeyboard());
                break;

            case '📢 إرسال إشعار':
                ctx.session.adminStep = 'broadcast';
                await ctx.replyWithMarkdown(
                    '📢 *إرسال إشعار جماعي*\n\n' +
                    '✍️ الرجاء كتابة الرسالة التي تريد إرسالها لجميع المستخدمين:'
                );
                break;

            case '🔍 بحث عن مستخدم':
                ctx.session.adminStep = 'search_user';
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
                
            case '🔄 إعادة التعيين':
                await handleAdminReset(ctx);
                break;

            case '🔙 رجوع':
                ctx.session.adminStep = 'main';
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
                ctx.session.adminMode = false;
                ctx.session.adminStep = null;
                await ctx.replyWithMarkdown('🔒 *تم الخروج من وضع الإدمن*', { 
                    reply_markup: { remove_keyboard: true } 
                });
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
                    `📢 *إشعار من الإدارة*\n\n${message}\n\n🕒 الوقت: ${goalAI.getSaudiDateTime()}`,
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
            `👥 الإجمالي: ${users.length} مستخدم\n` +
            `🕒 الوقت: ${goalAI.getSaudiDateTime()}`,
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
        const users = await dbManager.getAllUsers();
        const payments = await dbManager.getAllPayments();
        const pendingPayments = payments.filter(p => p.status === 'pending');
        
        const activeUsers = users.filter(u => u.subscription_status === 'active');
        const freeUsers = users.filter(u => u.subscription_status === 'free');
        
        const totalPredictions = users.reduce((sum, user) => sum + (user.total_predictions || 0), 0);
        const totalProfit = users.reduce((sum, user) => sum + (user.total_profit || 0), 0);
        
        const statsMessage = `
📊 *إحصائيات النظام*

👥 *المستخدمين:*
• الإجمالي: ${users.length}
• نشطين: ${activeUsers.length}
• مجانين: ${freeUsers.length}

💰 *المدفوعات:*
• المعلقة: ${pendingPayments.length}
• الإجمالي: ${payments.length}

📈 *النشاط:*
• التوقعات: ${totalPredictions}
• الأرباح: ${totalProfit}$

🔧 *حالة البوت:* ${dbManager.isMaintenanceMode() ? '🔒 مقفل' : '🔓 مفتوح'}
🕒 *الوقت:* ${goalAI.getSaudiDateTime()}
        `;
        
        await ctx.replyWithMarkdown(statsMessage, getAdminMainKeyboard());
    } catch (error) {
        console.error('Admin stats error:', error);
        await ctx.replyWithMarkdown('❌ حدث خطأ في جلب الإحصائيات', getAdminMainKeyboard());
    }
}

async function handleAdminUsers(ctx, text) {
    try {
        switch (text) {
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
                
            case '🔙 رجوع':
                ctx.session.adminStep = 'main';
                await ctx.replyWithMarkdown('🔙 *العودة للقائمة الرئيسية*', getAdminMainKeyboard());
                break;
                
            default:
                await ctx.replyWithMarkdown('❌ *خيار غير معروف*', getAdminUsersKeyboard());
                break;
        }
    } catch (error) {
        console.error('Admin users error:', error);
        await ctx.replyWithMarkdown('❌ حدث خطأ في معالجة الأمر', getAdminUsersKeyboard());
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
            message += `   📦 ${user.subscription_type} | ⏳ ${remainingDays} يوم\n\n`;
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
        const users = await dbManager.getAllUsers();
        const activeUsers = users.filter(u => u.subscription_status === 'active');
        const freeUsers = users.filter(u => u.subscription_status === 'free');
        
        const totalPredictions = users.reduce((sum, user) => sum + (user.total_predictions || 0), 0);
        const totalProfit = users.reduce((sum, user) => sum + (user.total_profit || 0), 0);
        const totalBets = users.reduce((sum, user) => sum + (user.total_bets || 0), 0);
        
        const message = `
📈 *إحصائيات المستخدمين*

👥 الإجمالي: ${users.length}
✅ نشطين: ${activeUsers.length}
🆓 مجانين: ${freeUsers.length}

📊 إجمالي التوقعات: ${totalPredictions}
💰 إجمالي الرهانات: ${totalBets}$
💵 إجمالي الأرباح: ${totalProfit}$
🕒 الوقت: ${goalAI.getSaudiDateTime()}
        `;
        
        await ctx.replyWithMarkdown(message, getAdminUsersKeyboard());
    } catch (error) {
        console.error('Admin users stats error:', error);
        await ctx.replyWithMarkdown('❌ حدث خطأ في جلب إحصائيات المستخدمين', getAdminUsersKeyboard());
    }
}

async function handleAdminPayments(ctx, text) {
    try {
        switch (text) {
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
                
            case '🔙 رجوع':
                ctx.session.adminStep = 'main';
                await ctx.replyWithMarkdown('🔙 *العودة للقائمة الرئيسية*', getAdminMainKeyboard());
                break;
                
            default:
                await ctx.replyWithMarkdown('❌ *خيار غير معروف*', getAdminPaymentsKeyboard());
                break;
        }
    } catch (error) {
        console.error('Admin payments error:', error);
        await ctx.replyWithMarkdown('❌ حدث خطأ في معالجة الأمر', getAdminPaymentsKeyboard());
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
            const paymentMethodName = payment.payment_method === 'binance' ? 'Binance' : 'البنك الكريمي';
            
            await ctx.replyWithPhoto(
                payment.screenshot_url,
                {
                    caption: `📥 *طلب دفع معلق #${payment.id}*\n\n` +
                    `👤 المستخدم: ${payment.username}\n` +
                    `🔐 الحساب: ${payment.onexbet}\n` +
                    `💰 المبلغ: ${payment.amount}$\n` +
                    `📦 الباقة: ${payment.subscription_type}\n` +
                    `💳 طريقة الدفع: ${paymentMethodName}\n` +
                    `📅 التاريخ: ${new Date(payment.timestamp).toLocaleString('ar-EG')}\n` +
                    `🕒 الوقت: ${goalAI.getSaudiDateTime()}`,
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
            const paymentMethodName = payment.payment_method === 'binance' ? 'Binance' : 'البنك';
            message += `${index + 1}. ${payment.username} | ${payment.onexbet}\n`;
            message += `   💰 ${payment.amount}$ | 📦 ${payment.subscription_type} | 💳 ${paymentMethodName}\n\n`;
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
            const paymentMethodName = payment.payment_method === 'binance' ? 'Binance' : 'البنك';
            message += `${index + 1}. ${payment.username} | ${payment.onexbet}\n`;
            message += `   💰 ${payment.amount}$ | 📦 ${payment.subscription_type} | 💳 ${paymentMethodName}\n\n`;
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
        
        const message = `
📋 *جميع طلبات الدفع*

📥 المعلقة: ${pending}
✅ المقبولة: ${accepted}
❌ المرفوضة: ${rejected}
💰 الإجمالي: ${payments.length}
🕒 الوقت: ${goalAI.getSaudiDateTime()}
        `;
        
        await ctx.replyWithMarkdown(message, getAdminPaymentsKeyboard());
    } catch (error) {
        console.error('Admin all payments error:', error);
        await ctx.replyWithMarkdown('❌ حدث خطأ في جلب جميع الطلبات', getAdminPaymentsKeyboard());
    }
}

// 🔧 SYSTEM UPDATED - نظام الدفع المزدوج المنفصل بالكامل
async function handleAdminPriceAndPaymentSettings(ctx) {
    try {
        await ctx.replyWithMarkdown(
            '💰 *تعديل الأسعار ومعلومات الدفع*\n\n' +
            '📝 اختر طريقة الدفع التي تريد تعديلها:',
            getAdminPaymentMethodsKeyboard()
        );
        ctx.session.adminStep = 'select_payment_method_edit';
    } catch (error) {
        console.error('Admin price and payment settings error:', error);
        await ctx.replyWithMarkdown('❌ حدث خطأ في بدء التعديل', getAdminSettingsKeyboard());
    }
}

// معالجة اختيار طريقة الدفع للتعديل - محدثة للفصل الكامل
async function handleAdminSelectPaymentMethodEdit(ctx, text) {
    try {
        if (text === '🔙 رجوع') {
            ctx.session.adminStep = 'settings';
            await ctx.replyWithMarkdown('🔙 *العودة للإعدادات*', getAdminSettingsKeyboard());
            return;
        }

        const paymentMethodMap = {
            '💳 تعديل Binance': 'binance',
            '🏦 تعديل البنك الكريمي': 'bank'
        };

        const paymentMethod = paymentMethodMap[text];
        if (!paymentMethod) {
            await ctx.replyWithMarkdown('❌ *اختيار غير صحيح*', getAdminPaymentMethodsKeyboard());
            return;
        }

        ctx.session.editingPaymentMethod = paymentMethod;
        ctx.session.adminStep = 'select_subscription_edit';

        const paymentMethodName = paymentMethod === 'binance' ? 'Binance' : 'البنك الكريمي';

        await ctx.replyWithMarkdown(
            `🔧 *تعديل ${paymentMethodName}*\n\n` +
            '📝 اختر نوع الاشتراك الذي تريد تعديله:',
            getAdminPaymentTypesKeyboard()
        );

    } catch (error) {
        console.error('Admin select payment method edit error:', error);
        await ctx.replyWithMarkdown('❌ حدث خطأ', getAdminSettingsKeyboard());
    }
}

// معالجة اختيار نوع الاشتراك للتعديل - محدثة للفصل الكامل
async function handleAdminSelectSubscriptionEdit(ctx, text) {
    try {
        const subscriptionTypeMap = {
            '💰 أسبوعي': 'week',
            '💰 شهري': 'month', 
            '💰 3 أشهر': 'three_months',
            '💰 سنوي': 'year'
        };

        if (text === '🔙 رجوع') {
            ctx.session.adminStep = 'select_payment_method_edit';
            await ctx.replyWithMarkdown('🔙 *العودة لاختيار طريقة الدفع*', getAdminPaymentMethodsKeyboard());
            return;
        }

        const subscriptionType = subscriptionTypeMap[text];
        if (!subscriptionType) {
            await ctx.replyWithMarkdown('❌ *اختيار غير صحيح*', getAdminPaymentTypesKeyboard());
            return;
        }

        ctx.session.editingSubscriptionType = subscriptionType;
        
        // نظام جديد: فصل كامل بين Binance والبنك الكريمي
        if (ctx.session.editingPaymentMethod === 'binance') {
            await handleAdminBinanceEditFlow(ctx, subscriptionType);
        } else {
            await handleAdminBankEditFlow(ctx, subscriptionType);
        }

    } catch (error) {
        console.error('Admin select subscription edit error:', error);
        await ctx.replyWithMarkdown('❌ حدث خطأ', getAdminSettingsKeyboard());
    }
}

// نظام تحرير Binance الجديد
async function handleAdminBinanceEditFlow(ctx, subscriptionType) {
    try {
        const settings = await dbManager.getSettings();
        const currentPrice = settings.prices.binance[subscriptionType];
        const currentPaymentMethod = settings.payment_methods.binance[subscriptionType];
        
        const displayName = Object.entries({
            'week': 'أسبوعي',
            'month': 'شهري', 
            'three_months': '3 أشهر',
            'year': 'سنوي'
        }).find(([key, value]) => key === subscriptionType)?.[1] || subscriptionType;

        ctx.session.adminEditStep = 'awaiting_binance_price';
        ctx.session.editingSubscriptionType = subscriptionType;

        await ctx.replyWithMarkdown(
            `🔧 *تعديل Binance - ${displayName}*\n\n` +
            `💰 السعر الحالي: ${currentPrice}$\n` +
            `📎 رابط/صورة الدفع الحالي: ${currentPaymentMethod.startsWith('https://i.ibb.co') ? '[صورة]' : currentPaymentMethod}\n\n` +
            `💵 *الخطوة 1: أرسل السعر الجديد*\n` +
            `📝 مثال: 15 أو 20.5\n\n` +
            `💡 أو اكتب "إلغاء" للرجوع`
        );

    } catch (error) {
        console.error('Admin Binance edit flow error:', error);
        await ctx.replyWithMarkdown('❌ حدث خطأ في بدء التعديل', getAdminSettingsKeyboard());
    }
}

// نظام تحرير البنك الكريمي الجديد
async function handleAdminBankEditFlow(ctx, subscriptionType) {
    try {
        const settings = await dbManager.getSettings();
        const currentPrice = settings.prices.bank[subscriptionType];
        const currentPaymentInfo = settings.payment_methods.bank[subscriptionType];
        
        const displayName = Object.entries({
            'week': 'أسبوعي',
            'month': 'شهري', 
            'three_months': '3 أشهر',
            'year': 'سنوي'
        }).find(([key, value]) => key === subscriptionType)?.[1] || subscriptionType;

        ctx.session.adminEditStep = 'awaiting_bank_price';
        ctx.session.editingSubscriptionType = subscriptionType;

        await ctx.replyWithMarkdown(
            `🔧 *تعديل البنك الكريمي - ${displayName}*\n\n` +
            `💰 السعر الحالي: ${currentPrice}$\n` +
            `🏦 رقم الحساب الحالي: ${currentPaymentInfo.account}\n` +
            `🖼️ صورة الدفع: ${currentPaymentInfo.image ? '[موجودة]' : '[غير موجودة]'}\n\n` +
            `💵 *الخطوة 1: أرسل السعر الجديد*\n` +
            `📝 مثال: 15 أو 20.5\n\n` +
            `💡 أو اكتب "إلغاء" للرجوع`
        );

    } catch (error) {
        console.error('Admin Bank edit flow error:', error);
        await ctx.replyWithMarkdown('❌ حدث خطأ في بدء التعديل', getAdminSettingsKeyboard());
    }
}

// معالجة التعديلات من الإدمن - النظام الجديد
async function handleAdminEditPriceAndPayment(ctx, text) {
    try {
        if (text === 'إلغاء') {
            ctx.session.adminStep = 'select_subscription_edit';
            ctx.session.editingSubscriptionType = null;
            ctx.session.adminEditStep = null;
            await ctx.replyWithMarkdown('🔙 *تم الإلغاء*', getAdminPaymentTypesKeyboard());
            return;
        }

        const subscriptionType = ctx.session.editingSubscriptionType;
        const paymentMethod = ctx.session.editingPaymentMethod;
        
        if (!subscriptionType || !paymentMethod) {
            await ctx.replyWithMarkdown('❌ لم يتم اختيار نوع الاشتراك أو طريقة الدفع', getAdminSettingsKeyboard());
            return;
        }

        const settings = await dbManager.getSettings();

        // معالجة Binance
        if (paymentMethod === 'binance') {
            if (ctx.session.adminEditStep === 'awaiting_binance_price') {
                // الخطوة 1: تحديث السعر
                if (!isNaN(text) && parseFloat(text) > 0) {
                    const priceNum = parseFloat(text);
                    settings.prices.binance[subscriptionType] = priceNum;
                    await dbManager.updateSettings(settings);
                    
                    ctx.session.adminEditPrice = priceNum;
                    ctx.session.adminEditStep = 'awaiting_binance_link';
                    
                    await ctx.replyWithMarkdown(
                        `✅ *تم تحديث السعر إلى:* ${priceNum}$\n\n` +
                        `🔗 *الخطوة 2: أرسل رابط الدفع أو الصورة الجديدة*\n` +
                        `💡 يمكنك إرسال:\n` +
                        `• رابط Binance\n` +
                        `• أو صورة QR Code\n\n` +
                        `📝 أو اكتب "إلغاء" للرجوع`
                    );
                } else {
                    await ctx.replyWithMarkdown('❌ *سعر غير صحيح!*\n\n💵 يرجى إرسال سعر صحيح (رقم)');
                }
            }
            else if (ctx.session.adminEditStep === 'awaiting_binance_link') {
                // الخطوة 2: تحديث رابط/صورة الدفع
                if (text.startsWith('http') || text === 'إلغاء') {
                    if (text !== 'إلغاء') {
                        settings.payment_methods.binance[subscriptionType] = text;
                        await dbManager.updateSettings(settings);
                    }
                    
                    const displayName = Object.entries({
                        'week': 'أسبوعي',
                        'month': 'شهري', 
                        'three_months': '3 أشهر',
                        'year': 'سنوي'
                    }).find(([key, value]) => key === subscriptionType)?.[1] || subscriptionType;

                    await ctx.replyWithMarkdown(
                        `✅ *تم التحديث بنجاح!*\n\n` +
                        `📦 ${displayName} - Binance\n` +
                        `💰 السعر: ${ctx.session.adminEditPrice}$\n` +
                        `📎 ${text.startsWith('https://i.ibb.co') ? 'صورة الدفع' : 'رابط الدفع'}: ${text !== 'إلغاء' ? (text.startsWith('https://i.ibb.co') ? '[صورة]' : text) : '[لم يتم التغيير]'}\n\n` +
                        `🔄 تم حفظ التغييرات في النظام`,
                        getAdminSettingsKeyboard()
                    );

                    // إعادة تعيين الجلسة
                    ctx.session.adminStep = 'settings';
                    ctx.session.editingSubscriptionType = null;
                    ctx.session.editingPaymentMethod = null;
                    ctx.session.adminEditStep = null;
                    ctx.session.adminEditPrice = null;
                } else {
                    await ctx.replyWithMarkdown('❌ *رابط غير صحيح!*\n\n🔗 يرجى إرسال رابط يبدأ بـ http أو https');
                }
            }
        }
        // معالجة البنك الكريمي
        else if (paymentMethod === 'bank') {
            if (ctx.session.adminEditStep === 'awaiting_bank_price') {
                // الخطوة 1: تحديث السعر
                if (!isNaN(text) && parseFloat(text) > 0) {
                    const priceNum = parseFloat(text);
                    settings.prices.bank[subscriptionType] = priceNum;
                    await dbManager.updateSettings(settings);
                    
                    ctx.session.adminEditPrice = priceNum;
                    ctx.session.adminEditStep = 'awaiting_bank_account';
                    
                    await ctx.replyWithMarkdown(
                        `✅ *تم تحديث السعر إلى:* ${priceNum}$\n\n` +
                        `🏦 *الخطوة 2: أرسل رقم الحساب البنكي الجديد*\n` +
                        `📝 مثال: SA1234567890123456789012\n\n` +
                        `💡 أو اكتب "إلغاء" للرجوع`
                    );
                } else {
                    await ctx.replyWithMarkdown('❌ *سعر غير صحيح!*\n\n💵 يرجى إرسال سعر صحيح (رقم)');
                }
            }
            else if (ctx.session.adminEditStep === 'awaiting_bank_account') {
                // الخطوة 2: تحديث رقم الحساب
                if (text.trim() !== '' && text !== 'إلغاء') {
                    settings.payment_methods.bank[subscriptionType].account = text;
                    await dbManager.updateSettings(settings);
                    
                    ctx.session.adminEditAccount = text;
                    ctx.session.adminEditStep = 'awaiting_bank_image';
                    
                    await ctx.replyWithMarkdown(
                        `✅ *تم تحديث رقم الحساب إلى:* ${text}\n\n` +
                        `🖼️ *الخطوة 3: أرسل صورة الدفع الجديدة*\n` +
                        `📸 يمكنك:\n` +
                        `• إرسال صورة جديدة\n` +
                        `• أو كتابة "تخطي" للحفاظ على الصورة الحالية\n` +
                        `• أو كتابة "إلغاء" للرجوع\n\n` +
                        `💡 الصورة اختيارية ولكن مستحسنة`
                    );
                } else if (text === 'إلغاء') {
                    ctx.session.adminStep = 'select_subscription_edit';
                    ctx.session.editingSubscriptionType = null;
                    ctx.session.adminEditStep = null;
                    await ctx.replyWithMarkdown('🔙 *تم الإلغاء*', getAdminPaymentTypesKeyboard());
                } else {
                    await ctx.replyWithMarkdown('❌ *رقم حساب غير صحيح!*\n\n🏦 يرجى إرسال رقم حساب صحيح');
                }
            }
            else if (ctx.session.adminEditStep === 'awaiting_bank_image') {
                // الخطوة 3: معالجة الصورة أو التخطي
                if (text === 'تخطي') {
                    const displayName = Object.entries({
                        'week': 'أسبوعي',
                        'month': 'شهري', 
                        'three_months': '3 أشهر',
                        'year': 'سنوي'
                    }).find(([key, value]) => key === subscriptionType)?.[1] || subscriptionType;

                    await ctx.replyWithMarkdown(
                        `✅ *تم التحديث بنجاح!*\n\n` +
                        `📦 ${displayName} - البنك الكريمي\n` +
                        `💰 السعر: ${ctx.session.adminEditPrice}$\n` +
                        `🏦 رقم الحساب: ${ctx.session.adminEditAccount}\n` +
                        `🖼️ تم الحفاظ على الصورة الحالية\n\n` +
                        `🔄 تم حفظ التغييرات في النظام`,
                        getAdminSettingsKeyboard()
                    );

                    // إعادة تعيين الجلسة
                    ctx.session.adminStep = 'settings';
                    ctx.session.editingSubscriptionType = null;
                    ctx.session.editingPaymentMethod = null;
                    ctx.session.adminEditStep = null;
                    ctx.session.adminEditPrice = null;
                    ctx.session.adminEditAccount = null;
                } else if (text === 'إلغاء') {
                    ctx.session.adminStep = 'select_subscription_edit';
                    ctx.session.editingSubscriptionType = null;
                    ctx.session.adminEditStep = null;
                    await ctx.replyWithMarkdown('🔙 *تم الإلغاء*', getAdminPaymentTypesKeyboard());
                } else {
                    await ctx.replyWithMarkdown('❌ *إدخال غير صحيح!*\n\n📝 يرجى إرسال صورة أو كتابة "تخطي" أو "إلغاء"');
                }
            }
        }
    } catch (error) {
        console.error('Admin edit price and payment error:', error);
        await ctx.replyWithMarkdown('❌ حدث خطأ في التعديل', getAdminSettingsKeyboard());
    }
}

// معالجة رفع صورة البنك الكريمي من الإدمن - النظام الجديد
async function handleAdminBankImageUpload(ctx, userId) {
    try {
        const subscriptionType = ctx.session.editingSubscriptionType;
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
        settings.payment_methods.bank[subscriptionType].image = uploadResult.url;
        await dbManager.updateSettings(settings);

        const displayName = Object.entries({
            'week': 'أسبوعي',
            'month': 'شهري', 
            'three_months': '3 أشهر',
            'year': 'سنوي'
        }).find(([key, value]) => key === subscriptionType)?.[1] || subscriptionType;

        await ctx.replyWithMarkdown(
            `✅ *تم التحديث بنجاح!*\n\n` +
            `📦 ${displayName} - البنك الكريمي\n` +
            `💰 السعر: ${ctx.session.adminEditPrice}$\n` +
            `🏦 رقم الحساب: ${ctx.session.adminEditAccount}\n` +
            `🖼️ تم حفظ صورة الدفع بنجاح\n\n` +
            `🔄 تم حفظ جميع التغييرات في النظام`,
            getAdminSettingsKeyboard()
        );

        // إعادة تعيين الجلسة
        ctx.session.adminStep = 'settings';
        ctx.session.editingSubscriptionType = null;
        ctx.session.editingPaymentMethod = null;
        ctx.session.adminEditStep = null;
        ctx.session.adminEditPrice = null;
        ctx.session.adminEditAccount = null;
        
    } catch (error) {
        console.error('Admin bank image upload error:', error);
        await ctx.replyWithMarkdown('❌ حدث خطأ في رفع الصورة', getAdminSettingsKeyboard());
    }
}

async function handleAdminGeneralSettings(ctx) {
    try {
        const settings = await dbManager.getSettings();
        
        const generalMessage = `
⚙️ *الإعدادات العامة*

🔧 حالة البوت: ${settings.maintenance_mode ? '🔒 مقفل' : '🔓 مفتوح'}
🕒 آخر تحديث: ${new Date(settings.updated_at).toLocaleString('ar-EG')}
⏰ الوقت الحالي: ${goalAI.getSaudiDateTime()}

💰 *الأسعار الحالية - Binance:*
• أسبوعي: ${settings.prices.binance.week}$
• شهري: ${settings.prices.binance.month}$
• 3 أشهر: ${settings.prices.binance.three_months}$ 
• سنوي: ${settings.prices.binance.year}$

💰 *الأسعار الحالية - البنك الكريمي:*
• أسبوعي: ${settings.prices.bank.week}$
• شهري: ${settings.prices.bank.month}$
• 3 أشهر: ${settings.prices.bank.three_months}$ 
• سنوي: ${settings.prices.bank.year}$

🔗 *معلومات الدفع - Binance:*
• أسبوعي: ${settings.payment_methods.binance.week.startsWith('https://i.ibb.co') ? '[صورة]' : settings.payment_methods.binance.week}
• شهري: ${settings.payment_methods.binance.month.startsWith('https://i.ibb.co') ? '[صورة]' : settings.payment_methods.binance.month}
• 3 أشهر: ${settings.payment_methods.binance.three_months.startsWith('https://i.ibb.co') ? '[صورة]' : settings.payment_methods.binance.three_months}
• سنوي: ${settings.payment_methods.binance.year.startsWith('https://i.ibb.co') ? '[صورة]' : settings.payment_methods.binance.year}

🏦 *معلومات الدفع - البنك الكريمي:*
• أسبوعي: ${settings.payment_methods.bank.week.account} ${settings.payment_methods.bank.week.image ? '[🖼️]' : ''}
• شهري: ${settings.payment_methods.bank.month.account} ${settings.payment_methods.bank.month.image ? '[🖼️]' : ''}
• 3 أشهر: ${settings.payment_methods.bank.three_months.account} ${settings.payment_methods.bank.three_months.image ? '[🖼️]' : ''}
• سنوي: ${settings.payment_methods.bank.year.account} ${settings.payment_methods.bank.year.image ? '[🖼️]' : ''}
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
            const paymentMethodName = payment.payment_method === 'binance' ? 'Binance' : 'البنك الكريمي';
            
            await bot.telegram.sendMessage(
                payment.user_id,
                `🎉 *تم تفعيل اشتراكك بنجاح!*\n\n` +
                `✅ ${payment.subscription_type}\n` +
                `💰 ${payment.amount}$\n` +
                `💳 ${paymentMethodName}\n` +
                `📅 الانتهاء: ${new Date(endDate).toLocaleDateString('ar-EG')}\n` +
                `⏳ المتبقي: ${calculateRemainingDays(endDate)} يوم\n` +
                `🕒 الوقت: ${goalAI.getSaudiDateTime()}\n\n` +
                `🎯 يمكنك الآن استخدام الخدمة بدون حدود`,
                { parse_mode: 'Markdown' }
            );
        } catch (error) {
            console.error('Error notifying user:', error);
        }

        // إرسال الإشعار للقناة
        await channelNotifier.sendSubscriptionNotification(userData, payment.subscription_type, payment.amount, payment.payment_method);
        
        await ctx.answerCbQuery('✅ تم تفعيل الاشتراك');
        
        try {
            const paymentMethodName = payment.payment_method === 'binance' ? 'Binance' : 'البنك الكريمي';
            
            await ctx.editMessageCaption(
                `✅ *تم تفعيل الاشتراك بنجاح*\n\n` +
                `👤 ${userData.username}\n` +
                `🔐 ${userData.onexbet}\n` +
                `📦 ${payment.subscription_type}\n` +
                `💰 ${payment.amount}$\n` +
                `💳 ${paymentMethodName}\n\n` +
                `🕒 ${goalAI.getSaudiDateTime()}`,
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
            processed_at: new Date().toISOString()
        });
        
        // إشعار المستخدم
        try {
            await bot.telegram.sendMessage(
                payment.user_id,
                `❌ *تم رفض طلب الدفع*\n\n` +
                `💳 يرجى التحقق من صورة الدفع والمحاولة مرة أخرى\n\n` +
                `📞 للاستفسار: ${CONFIG.DEVELOPER}\n` +
                `🕒 الوقت: ${goalAI.getSaudiDateTime()}`,
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
                `🔐 ${payment.onexbet}\n\n` +
                `🕒 ${goalAI.getSaudiDateTime()}`,
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

// 🚀 START BOT
bot.launch().then(() => {
    console.log('🎉 SUCCESS! AI GOAL Predictor v16.2 is RUNNING!');
    console.log('👤 Developer:', CONFIG.DEVELOPER);
    console.log('📢 Channel:', CONFIG.CHANNEL);
    console.log('🕒 Started at:', new Date().toISOString());
}).catch((error) => {
    console.error('❌ FAILED to start bot:', error);
});

// 🔧 HANDLE PROCESS TERMINATION
process.once('SIGINT', () => {
    console.log('🛑 Received SIGINT, stopping bot...');
    bot.stop('SIGINT');
});

process.once('SIGTERM', () => {
    console.log('🛑 Received SIGTERM, stopping bot...');
    bot.stop('SIGTERM');
});
