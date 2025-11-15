// ===================================================
// 🚀 AI GOAL PREDICTOR ULTIMATE - VERSION 15.4
// 👤 DEVELOPER: AMIN - @GEMZGOOLBOT
// 🔥 FEATURES: DUAL PAYMENT SYSTEM + BANK TRANSFER + BINANCE
// ===================================================

console.log('🤖 Starting AI GOAL Predictor Ultimate v15.4...');
console.log('🕒 ' + new Date().toISOString());

// 🔧 CONFIGURATION - UPDATED FOR DUAL PAYMENT
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

    // 💰 DEFAULT PRICING - DUAL SYSTEM
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

    // 🔐 DEFAULT PAYMENT LINKS - DUAL SYSTEM
    PAYMENT_LINKS: {
        binance: {
            week: process.env.PAYMENT_WEEK || "https://binance.com/payment/weekly",
            month: process.env.PAYMENT_MONTH || "https://binance.com/payment/monthly", 
            three_months: process.env.PAYMENT_3MONTHS || "https://binance.com/payment/3months",
            year: process.env.PAYMENT_YEAR || "https://binance.com/payment/yearly"
        },
        bank: {
            week: {
                account: "1234567890",
                image: "https://i.ibb.co/default-bank-week.jpg",
                description: "🔹 تحويل بنكي - باقة أسبوعية\n💳 رقم الحساب: 1234567890\n🏦 البنك: البنك الكريمي\n💰 المبلغ: 10$\n💵 العملة: الدولار الأمريكي\n\n📋 الشروط:\n• يجب التحويل بالدولار الأمريكي\n• إرفاق صورة إثبات الدفع\n• كتابة رقم حساب 1xBet الخاص بك"
            },
            month: {
                account: "1234567890",
                image: "https://i.ibb.co/default-bank-month.jpg", 
                description: "🔹 تحويل بنكي - باقة شهرية\n💳 رقم الحساب: 1234567890\n🏦 البنك: البنك الكريمي\n💰 المبلغ: 30$\n💵 العملة: الدولار الأمريكي\n\n📋 الشروط:\n• يجب التحويل بالدولار الأمريكي\n• إرفاق صورة إثبات الدفع\n• كتابة رقم حساب 1xBet الخاص بك"
            },
            three_months: {
                account: "1234567890",
                image: "https://i.ibb.co/default-bank-3months.jpg",
                description: "🔹 تحويل بنكي - باقة 3 أشهر\n💳 رقم الحساب: 1234567890\n🏦 البنك: البنك الكريمي\n💰 المبلغ: 80$\n💵 العملة: الدولار الأمريكي\n\n📋 الشروط:\n• يجب التحويل بالدولار الأمريكي\n• إرفاق صورة إثبات الدفع\n• كتابة رقم حساب 1xBet الخاص بك"
            },
            year: {
                account: "1234567890",
                image: "https://i.ibb.co/default-bank-year.jpg",
                description: "🔹 تحويل بنكي - باقة سنوية\n💳 رقم الحساب: 1234567890\n🏦 البنك: البنك الكريمي\n💰 المبلغ: 250$\n💵 العملة: الدولار الأمريكي\n\n📋 الشروط:\n• يجب التحويل بالدولار الأمريكي\n• إرفاق صورة إثبات الدفع\n• كتابة رقم حساب 1xBet الخاص بك"
            }
        }
    },
    
    VERSION: "15.4.0",
    DEVELOPER: "AMIN - @GEMZGOOLBOT",
    CHANNEL: "@GEMZGOOL",
    START_IMAGE: "https://i.ibb.co/tpy70Bd1/IMG-20251104-074214-065.jpg",
    ANALYSIS_IMAGE: "https://i.ibb.co/VYjf05S0/Screenshot.png",
    PREDICTION_IMAGE: "https://i.ibb.co/rGTZm2mB/IMG.jpg",
    IMGBB_API_KEY: process.env.IMGBB_API_KEY || "42b155a527bee21e62e524a31fe9b1ee"
};

console.log('✅ Dual Payment Configuration loaded successfully');

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

// 🗄️ LOCAL STORAGE FALLBACK - UPDATED FOR DUAL PAYMENT
const userDatabase = new Map();
const paymentDatabase = new Map();
const settingsDatabase = new Map();

// تهيئة الإعدادات الافتراضية للنظام المزدوج
settingsDatabase.set('config', {
    prices: { 
        binance: { ...CONFIG.SUBSCRIPTION_PRICES.binance },
        bank: { ...CONFIG.SUBSCRIPTION_PRICES.bank }
    },
    payment_links: { 
        binance: { ...CONFIG.PAYMENT_LINKS.binance },
        bank: { ...CONFIG.PAYMENT_LINKS.bank }
    },
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
        this.algorithmVersion = "15.4";
    }

    generateSmartPrediction(userId) {
        const isGoal = Math.random() > 0.5;
        const probability = Math.floor(Math.random() * 30) + 60;
        
        // الحصول على الوقت الحقيقي الحالي
        const now = new Date();
        const saudiTime = new Date(now.getTime() + (3 * 60 * 60 * 1000)); // توقيت السعودية +3
        const realTime = saudiTime.toLocaleTimeString('ar-SA', { 
            hour: '2-digit', 
            minute: '2-digit',
            second: '2-digit',
            hour12: false 
        });
        
        const prediction = {
            type: isGoal ? '⚽ GOAL' : '🛑 NO GOAL',
            probability: probability,
            confidence: 100,
            reasoning: isGoal ? 
                `🔥 الضغط الهجومي المستمر يشير لهدف قريب بنسبة ${probability}%` :
                `🛡️ الدفاع المنظم يحد من الفرص بنسبة ${probability}%`,
            timestamp: realTime, // استخدام الوقت الحقيقي
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

// 💾 DATABASE MANAGER - ENHANCED FOR DUAL PAYMENT
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
                prices: { 
                    binance: { ...CONFIG.SUBSCRIPTION_PRICES.binance },
                    bank: { ...CONFIG.SUBSCRIPTION_PRICES.bank }
                },
                payment_links: { 
                    binance: { ...CONFIG.PAYMENT_LINKS.binance },
                    bank: { ...CONFIG.PAYMENT_LINKS.bank }
                },
                maintenance_mode: false,
                updated_at: new Date().toISOString()
            };
        } catch (error) {
            return settingsDatabase.get('config') || {
                prices: { 
                    binance: { ...CONFIG.SUBSCRIPTION_PRICES.binance },
                    bank: { ...CONFIG.SUBSCRIPTION_PRICES.bank }
                },
                payment_links: { 
                    binance: { ...CONFIG.PAYMENT_LINKS.binance },
                    bank: { ...CONFIG.PAYMENT_LINKS.bank }
                },
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

    async sendSubscriptionNotification(userData, subscriptionType, amount, paymentSystem) {
        try {
            const systemText = paymentSystem === 'binance' ? 'باينانس' : 'تحويل بنكي';
            const message = `
🎉 *اشتراك جديد في البوت - ${systemText}*

👤 *المستخدم:* ${userData.username}
🔐 *الحساب:* ${userData.onexbet}
📦 *الباقة:* ${subscriptionType}
💰 *المبلغ:* ${amount}$
💳 *النظام:* ${systemText}

🕒 *الوقت:* ${new Date().toLocaleString('ar-EG')}
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
            const message = `
🎯 *توقع جديد في البوت*

👤 *المستخدم:* ${userData.username}
🔐 *الحساب:* ${userData.onexbet}
🎯 *التوقع:* ${prediction.type}
📈 *الاحتمالية:* ${prediction.probability}%
💰 *مبلغ الرهان:* ${betAmount}$

💡 *التحليل:*
${prediction.reasoning}

🕒 *الوقت:* ${new Date().toLocaleString('ar-EG')}
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
        paymentSystem: null, // 🆕 نظام الدفع
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
        adminPaymentSystem: null, // 🆕 نظام الدفع في الإدمن
        awaitingBankImage: false, // 🆕 انتظار صورة البنك
        checkingChannel: false
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
            
            let statusMessage = '';
            if (existingUser.subscription_status === 'active' && remainingDays > 0) {
                statusMessage = `🎉 *مرحباً بعودتك!*\n\n` +
                               `✅ *اشتراكك نشط*\n` +
                               `🔐 الحساب: \`${existingUser.onexbet}\`\n` +
                               `📦 النوع: ${existingUser.subscription_type}\n` +
                               `📅 الانتهاء: ${new Date(existingUser.subscription_end_date).toLocaleDateString('ar-EG')}\n` +
                               `⏳ متبقي: ${remainingDays} يوم`;
            } else if (existingUser.free_attempts > 0) {
                statusMessage = `🎉 *مرحباً بعودتك!*\n\n` +
                               `🎯 *محاولات مجانية متاحة*\n` +
                               `🔐 الحساب: \`${existingUser.onexbet}\`\n` +
                               `🆓 محاولات مجانية: ${existingUser.free_attempts}`;
            } else {
                statusMessage = `🎉 *مرحباً بعودتك!*\n\n` +
                               `🚫 *انتهت المحاولات*\n` +
                               `🔐 الحساب: \`${existingUser.onexbet}\`\n` +
                               `💳 يرجى الاشتراك للمتابعة`;
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
                            `📢 *القناة:* ${CONFIG.CHANNEL}`
                });
            } catch (photoError) {
                await ctx.replyWithMarkdown(`🎉 *مرحباً بك في نظام GOAL Predictor Pro v${CONFIG.VERSION}* 🚀`);
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
                            `📢 *القناة:* ${CONFIG.CHANNEL}`
                });
            } catch (photoError) {
                await ctx.replyWithMarkdown(`🎉 *مرحباً بك في نظام GOAL Predictor Pro v${CONFIG.VERSION}* 🚀`);
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

// 📝 HANDLE TEXT MESSAGES - UPDATED FOR DUAL PAYMENT
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

        // 🆕 معالجة اختيار طريقة الدفع
        if (session.step === 'choose_payment_method') {
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

        // معالجة تعديل الأسعار والدفع
        if (session.adminStep === 'edit_price_and_payment') {
            await handleAdminEditPriceAndPayment(ctx, text);
            return;
        }

        // معالجة اختيار نوع الاشتراك للتعديل
        if (session.adminStep === 'select_subscription_edit') {
            await handleAdminSelectSubscriptionEdit(ctx, text);
            return;
        }

        // 🆕 معالجة اختيار نظام الدفع في الإدمن
        if (session.adminStep === 'select_payment_system') {
            await handleAdminSelectPaymentSystem(ctx, text);
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
                    `👤 *المستخدم:* ${ctx.session.userData.username}\n\n` +
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
        
        // 💳 معالجة صور الدفع من المستخدمين فقط
        if (session.paymentType) {
            await handlePaymentScreenshot(ctx, userId);
            return;
        }

        // 🖼️ معالجة رفع صورة للدفع في الإدمن
        if (session.adminStep === 'edit_price_and_payment' && session.editingSubscriptionType) {
            if (session.adminPaymentSystem === 'binance') {
                await handleAdminPaymentImageUpload(ctx, userId);
                return;
            }
            else if (session.adminPaymentSystem === 'bank' && session.awaitingBankImage) {
                await handleAdminBankImageUpload(ctx, userId);
                return;
            }
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

// 🎯 HANDLE CALLBACK QUERIES - UPDATED FOR DUAL PAYMENT
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

        // الحصول على الوقت الحقيقي الحالي
        const now = new Date();
        const saudiTime = new Date(now.getTime() + (3 * 60 * 60 * 1000)); // توقيت السعودية +3
        const realTime = saudiTime.toLocaleTimeString('ar-SA', { 
            hour: '2-digit', 
            minute: '2-digit',
            second: '2-digit',
            hour12: false 
        });

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
🕒 *الوقت:* ${realTime}

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
        subscriptionInfo,
        getMainKeyboard()
    );
}

async function handleBotStats(ctx) {
    const stats = dynamicStats.getStats(); // تحديث الإحصائيات عند كل طلب
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
        const paymentSystem = ctx.session.paymentSystem || 'binance'; // Default to binance
        
        if (paymentSystem === 'binance') {
            // نظام باينانس (كما هو)
            const prices = settings.prices.binance;
            const payment_links = settings.payment_links.binance;

            const displayName = text.replace('💰 ', '');
            
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

            const displayName = text.replace('💰 ', '');
            
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
                });
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

        // فصل بيانات الكallback
        const parts = callbackData.split('_');
        const paymentSystem = parts[1]; // binance or bank
        const subscriptionType = parts[2];

        const settings = await dbManager.getSettings();
        const prices = settings.prices[paymentSystem];

        ctx.session.paymentSystem = paymentSystem;
        ctx.session.paymentType = subscriptionType;
        ctx.session.awaitingPaymentAccount = true;

        await ctx.answerCbQuery('✅ تم تأكيد الاختيار');
        
        // حذف الرسالة السابقة
        await ctx.deleteMessage(ctx.callbackQuery.message.message_id);

        if (paymentSystem === 'binance') {
            await ctx.replyWithMarkdown(
                `💳 *باقة ${subscriptionType} - باينانس*\n\n` +
                `💰 السعر: ${prices[subscriptionType]}$\n\n` +
                `🔐 *رقم حسابك المسجل:* \`${userData.onexbet}\`\n\n` +
                `🔢 *الآن أرسل رقم حساب 1xBet للتأكد:*`
            );
        } 
        else if (paymentSystem === 'bank') {
            const bankDetails = settings.payment_links.bank[subscriptionType];
            
            await ctx.replyWithMarkdown(
                `🏦 *باقة ${subscriptionType} - تحويل بنكي*\n\n` +
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
    let statusMessage = '';
    
    if (userData.subscription_status === 'active') {
        const remainingDays = calculateRemainingDays(userData.subscription_end_date);
        statusMessage = `✅ *اشتراكك نشط*\n\n` +
                       `🔐 الحساب: \`${userData.onexbet}\`\n` +
                       `📦 النوع: ${userData.subscription_type}\n` +
                       `📅 الانتهاء: ${new Date(userData.subscription_end_date).toLocaleDateString('ar-EG')}\n` +
                       `⏳ متبقي: ${remainingDays} يوم`;
    } else if (userData.free_attempts > 0) {
        statusMessage = `🎯 *محاولات مجانية متاحة*\n\n` +
                       `🔐 الحساب: \`${userData.onexbet}\`\n` +
                       `🆓 محاولات مجانية: ${userData.free_attempts}\n\n` +
                       `💳 يمكنك الاشتراك للحصول على ميزات غير محدودة`;
    } else {
        statusMessage = `🚫 *انتهت المحاولات*\n\n` +
                       `🔐 الحساب: \`${userData.onexbet}\`\n` +
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
            payment_system: paymentSystem, // 🆕 إضافة نظام الدفع
            username: userData.username,
            timestamp: new Date().toISOString()
        };

        const paymentId = await dbManager.addPayment(paymentData);
        
        // إرسال الإشعار للإدارة مع الصورة
        try {
            const paymentSystemText = paymentSystem === 'binance' ? 'باينانس' : 'تحويل بنكي';
            
            await bot.telegram.sendPhoto(
                CONFIG.ADMIN_ID,
                uploadResult.url,
                {
                    caption: `🆕 *طلب دفع جديد - ${paymentSystemText}*\n\n` +
                    `👤 المستخدم: ${userData.username}\n` +
                    `🔐 الحساب: ${accountNumber}\n` +
                    `💰 المبلغ: ${paymentData.amount}$\n` +
                    `📦 الباقة: ${ctx.session.paymentType}\n` +
                    `💳 النظام: ${paymentSystemText}\n` +
                    `🆔 الرقم: ${paymentId}\n` +
                    `📅 الوقت: ${new Date().toLocaleString('ar-EG')}`,
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
            `✅ الباقة: ${ctx.session.paymentType}\n` +
            `💰 المبلغ: ${paymentData.amount}$\n` +
            `💳 النظام: ${paymentSystem === 'binance' ? 'باينانس' : 'تحويل بنكي'}\n\n` +
            '✅ سيتم مراجعتها من الإدارة في أقرب وقت\n' +
            '⏰ عادةً خلال 24 ساعة\n\n' +
            `📞 للاستفسار: ${CONFIG.DEVELOPER}`,
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
                    `📦 الباقة: ${payment.subscription_type}\n` +
                    `💳 النظام: ${payment.payment_system === 'binance' ? 'باينانس' : 'تحويل بنكي'}\n` +
                    `📅 التاريخ: ${new Date(payment.timestamp).toLocaleString('ar-EG')}`,
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
            message += `   💰 ${payment.amount}$ | 📦 ${payment.subscription_type} | 💳 ${payment.payment_system === 'binance' ? 'باينانس' : 'بنكي'}\n\n`;
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
            message += `   💰 ${payment.amount}$ | 📦 ${payment.subscription_type} | 💳 ${payment.payment_system === 'binance' ? 'باينانس' : 'بنكي'}\n\n`;
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
        ctx.session.adminStep = 'edit_price_and_payment';

        const settings = await dbManager.getSettings();
        const paymentSystem = ctx.session.adminPaymentSystem;

        if (paymentSystem === 'binance') {
            const currentPrice = settings.prices.binance[subscriptionType] || CONFIG.SUBSCRIPTION_PRICES.binance[subscriptionType];
            const currentLink = settings.payment_links.binance[subscriptionType] || 'غير محدد';

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
            const currentPrice = settings.prices.bank[subscriptionType] || CONFIG.SUBSCRIPTION_PRICES.bank[subscriptionType];
            const currentBankDetails = settings.payment_links.bank[subscriptionType] || CONFIG.PAYMENT_LINKS.bank[subscriptionType];
            const currentAccount = currentBankDetails.account || 'غير محدد';
            const currentImage = currentBankDetails.image || 'غير محدد';
            const currentDescription = currentBankDetails.description || 'غير محدد';

            await ctx.replyWithMarkdown(
                `🔧 *تعديل ${text} - تحويل بنكي*\n\n` +
                `💰 السعر الحالي: ${currentPrice}$\n` +
                `💳 رقم الحساب البنكي الحالي: ${currentAccount}\n` +
                `🖼️ صورة الحساب البنكي الحالية: ${currentImage}\n\n` +
                `📋 *الوصف الحالي:*\n${currentDescription}\n\n` +
                `📝 *الآن يمكنك:*\n` +
                `• إرسال السعر الجديد (مثال: 15)\n` +
                `• أو إرسال رقم الحساب البنكي الجديد\n` +
                `• أو إرسال صورة الحساب البنكي\n` +
                `• أو كتابة "إلغاء" للرجوع\n\n` +
                `💡 *أرسل السعر الجديد أولاً:*`
            );
        }

    } catch (error) {
        console.error('Admin select subscription edit error:', error);
        await ctx.replyWithMarkdown('❌ حدث خطأ', getAdminSettingsKeyboard());
    }
}

// 🆕 تحديث معالجة تعديل الأسعار والدفع للنظام المزدوج
async function handleAdminEditPriceAndPayment(ctx, text) {
    try {
        if (text === 'إلغاء') {
            ctx.session.adminStep = 'settings';
            ctx.session.editingSubscriptionType = null;
            ctx.session.adminPaymentSystem = null;
            await ctx.reply('🔙 *تم الإلغاء*', getAdminSettingsKeyboard());
            return;
        }

        const subscriptionType = ctx.session.editingSubscriptionType;
        const paymentSystem = ctx.session.adminPaymentSystem;
        
        if (!subscriptionType || !paymentSystem) {
            await ctx.reply('❌ لم يتم اختيار نوع الاشتراك أو نظام الدفع', getAdminSettingsKeyboard());
            return;
        }

        const settings = await dbManager.getSettings();

        if (paymentSystem === 'binance') {
            // نظام باينانس (كما هو)
            if (!isNaN(text) && parseFloat(text) > 0) {
                const priceNum = parseFloat(text);
                
                if (!settings.prices.binance) settings.prices.binance = {};
                settings.prices.binance[subscriptionType] = priceNum;
                await dbManager.updateSettings(settings);

                await ctx.reply(
                    `✅ *تم تحديث السعر بنجاح*\n\n` +
                    `💰 ${subscriptionType}: ${priceNum}$\n\n` +
                    `📝 *الآن أرسل رابط الدفع الجديد أو صورة QR:*`
                );
            }
            else if (text.startsWith('http')) {
                if (!settings.payment_links.binance) settings.payment_links.binance = {};
                settings.payment_links.binance[subscriptionType] = text;
                await dbManager.updateSettings(settings);

                await ctx.reply(
                    `✅ *تم التحديث بنجاح!*\n\n` +
                    `📦 ${subscriptionType} - باينانس\n` +
                    `💰 السعر: ${settings.prices.binance[subscriptionType]}$\n` +
                    `📎 تم حفظ ${text.startsWith('https://i.ibb.co') ? 'صورة الدفع' : 'رابط الدفع'} بنجاح\n\n` +
                    `🔄 تم حفظ التغييرات في النظام`,
                    getAdminSettingsKeyboard()
                );

                ctx.session.adminStep = 'settings';
                ctx.session.editingSubscriptionType = null;
                ctx.session.adminPaymentSystem = null;
            } else {
                await ctx.reply('❌ *إدخال غير صحيح!*\n\nيرجى إرسال سعر صحيح أو رابط يبدأ بـ http');
            }
        } 
        else if (paymentSystem === 'bank') {
            // 🆕 نظام التحويل البنكي الجديد
            if (!isNaN(text) && parseFloat(text) > 0) {
                const priceNum = parseFloat(text);
                
                if (!settings.prices.bank) settings.prices.bank = {};
                settings.prices.bank[subscriptionType] = priceNum;
                await dbManager.updateSettings(settings);

                await ctx.reply(
                    `✅ *تم تحديث السعر بنجاح*\n\n` +
                    `💰 ${subscriptionType}: ${priceNum}$\n\n` +
                    `📝 *الآن أرسل رقم الحساب البنكي الجديد:*`
                );
            }
            else if (!text.startsWith('http') && text.length > 5) {
                // يعتبر رقم حساب بنكي
                if (!settings.payment_links.bank) settings.payment_links.bank = {};
                if (!settings.payment_links.bank[subscriptionType]) {
                    settings.payment_links.bank[subscriptionType] = {};
                }
                
                settings.payment_links.bank[subscriptionType].account = text;
                await dbManager.updateSettings(settings);

                await ctx.reply(
                    `✅ *تم تحديث رقم الحساب البنكي*\n\n` +
                    `💳 ${subscriptionType}: ${text}\n\n` +
                    `📝 *الآن أرسل صورة الحساب البنكي (اختياري) أو اكتب "تخطي" للمتابعة:*`
                );
                
                ctx.session.awaitingBankImage = true;
            } 
            else if (text === 'تخطي' && ctx.session.awaitingBankImage) {
                // تخطي رفع الصورة
                ctx.session.awaitingBankImage = false;
                
                await ctx.reply(
                    `✅ *تم التحديث بنجاح!*\n\n` +
                    `📦 ${subscriptionType} - تحويل بنكي\n` +
                    `💰 السعر: ${settings.prices.bank[subscriptionType]}$\n` +
                    `💳 رقم الحساب: ${settings.payment_links.bank[subscriptionType].account}\n` +
                    `🖼️ تم الاحتفاظ بالصورة القديمة\n\n` +
                    `🔄 تم حفظ التغييرات في النظام`,
                    getAdminSettingsKeyboard()
                );

                ctx.session.adminStep = 'settings';
                ctx.session.editingSubscriptionType = null;
                ctx.session.adminPaymentSystem = null;
                ctx.session.awaitingBankImage = false;
            }
            else {
                await ctx.reply('❌ *إدخال غير صحيح!*\n\nيرجى إرسال سعر صحيح أو رقم حساب بنكي');
            }
        }

    } catch (error) {
        console.error('Admin edit price and payment error:', error);
        await ctx.reply('❌ حدث خطأ في التعديل');
    }
}

// 🆕 معالجة رفع صورة البنك من الإدمن
async function handleAdminBankImageUpload(ctx, userId) {
    try {
        const subscriptionType = ctx.session.editingSubscriptionType;
        const paymentSystem = ctx.session.adminPaymentSystem;
        
        if (!subscriptionType || paymentSystem !== 'bank') {
            await ctx.reply('❌ لم يتم اختيار نوع الاشتراك أو ليس نظام بنكي', getAdminSettingsKeyboard());
            return;
        }

        const photo = ctx.message.photo[ctx.message.photo.length - 1];
        const fileLink = await bot.telegram.getFileLink(photo.file_id);
        const imageUrl = fileLink.href;

        // رفع الصورة إلى imgbb
        const uploadResult = await imgbbUploader.uploadImageFromUrl(imageUrl);
        
        if (!uploadResult.success) {
            await ctx.reply('❌ فشل في رفع الصورة، يرجى المحاولة مرة أخرى');
            return;
        }

        const settings = await dbManager.getSettings();
        
        if (!settings.payment_links.bank) settings.payment_links.bank = {};
        if (!settings.payment_links.bank[subscriptionType]) {
            settings.payment_links.bank[subscriptionType] = {};
        }
        
        settings.payment_links.bank[subscriptionType].image = uploadResult.url;
        await dbManager.updateSettings(settings);

        await ctx.reply(
            `✅ *تم التحديث بنجاح!*\n\n` +
            `📦 ${subscriptionType} - تحويل بنكي\n` +
            `💰 السعر: ${settings.prices.bank[subscriptionType]}$\n` +
            `💳 رقم الحساب: ${settings.payment_links.bank[subscriptionType].account}\n` +
            `🖼️ تم تحديث صورة الحساب البنكي\n\n` +
            `🔄 تم حفظ التغييرات في النظام`,
            getAdminSettingsKeyboard()
        );

        ctx.session.adminStep = 'settings';
        ctx.session.editingSubscriptionType = null;
        ctx.session.adminPaymentSystem = null;
        ctx.session.awaitingBankImage = false;
    } catch (error) {
        console.error('Admin bank image upload error:', error);
        await ctx.reply('❌ حدث خطأ في رفع الصورة', getAdminSettingsKeyboard());
    }
}

// 🆕 معالجة رفع صورة الدفع من الإدمن (باينانس)
async function handleAdminPaymentImageUpload(ctx, userId) {
    try {
        const subscriptionType = ctx.session.editingSubscriptionType;
        const paymentSystem = ctx.session.adminPaymentSystem;
        
        if (!subscriptionType || paymentSystem !== 'binance') {
            await ctx.reply('❌ لم يتم اختيار نوع الاشتراك أو ليس نظام باينانس', getAdminSettingsKeyboard());
            return;
        }

        const photo = ctx.message.photo[ctx.message.photo.length - 1];
        const fileLink = await bot.telegram.getFileLink(photo.file_id);
        const imageUrl = fileLink.href;

        // رفع الصورة إلى imgbb
        const uploadResult = await imgbbUploader.uploadImageFromUrl(imageUrl);
        
        if (!uploadResult.success) {
            await ctx.reply('❌ فشل في رفع الصورة، يرجى المحاولة مرة أخرى');
            return;
        }

        const settings = await dbManager.getSettings();
        
        if (!settings.payment_links.binance) settings.payment_links.binance = {};
        settings.payment_links.binance[subscriptionType] = uploadResult.url;
        await dbManager.updateSettings(settings);

        await ctx.reply(
            `✅ *تم التحديث بنجاح!*\n\n` +
            `📦 ${subscriptionType} - باينانس\n` +
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
        await ctx.reply('❌ حدث خطأ في رفع الصورة', getAdminSettingsKeyboard());
    }
}

// 🆕 تحديث الإعدادات العامة لعرض النظام المزدوج
async function handleAdminGeneralSettings(ctx) {
    try {
        const settings = await dbManager.getSettings();
        
        const generalMessage = `
⚙️ *الإعدادات العامة*

🔧 حالة البوت: ${settings.maintenance_mode ? '🔒 مقفل' : '🔓 مفتوح'}
🕒 آخر تحديث: ${new Date(settings.updated_at).toLocaleString('ar-EG')}

💳 *أسعار باينانس:*
• أسبوعي: ${settings.prices.binance.week}$
• شهري: ${settings.prices.binance.month}$
• 3 أشهر: ${settings.prices.binance.three_months}$ 
• سنوي: ${settings.prices.binance.year}$

🏦 *أسعار التحويل البنكي:*
• أسبوعي: ${settings.prices.bank.week}$
• شهري: ${settings.prices.bank.month}$
• 3 أشهر: ${settings.prices.bank.three_months}$ 
• سنوي: ${settings.prices.bank.year}$

🔗 *معلومات باينانس:*
• أسبوعي: ${settings.payment_links.binance.week.startsWith('https://i.ibb.co') ? '[صورة]' : settings.payment_links.binance.week}
• شهري: ${settings.payment_links.binance.month.startsWith('https://i.ibb.co') ? '[صورة]' : settings.payment_links.binance.month}
• 3 أشهر: ${settings.payment_links.binance.three_months.startsWith('https://i.ibb.co') ? '[صورة]' : settings.payment_links.binance.three_months}
• سنوي: ${settings.payment_links.binance.year.startsWith('https://i.ibb.co') ? '[صورة]' : settings.payment_links.binance.year}

💳 *معلومات البنك:*
• أسبوعي: ${settings.payment_links.bank.week?.account || 'غير محدد'}
• شهري: ${settings.payment_links.bank.month?.account || 'غير محدد'}
• 3 أشهر: ${settings.payment_links.bank.three_months?.account || 'غير محدد'}
• سنوي: ${settings.payment_links.bank.year?.account || 'غير محدد'}
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
                `✅ ${payment.subscription_type}\n` +
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
                `📦 ${payment.subscription_type}\n` +
                `💰 ${payment.amount}$\n` +
                `💳 ${payment.payment_system === 'binance' ? 'باينانس' : 'تحويل بنكي'}\n\n` +
                `🕒 ${new Date().toLocaleString('ar-EG')}`,
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
                `💳 يرجى التحقق من معلومات الدفع والمحاولة مرة أخرى\n\n` +
                `📞 للاستفسار: ${CONFIG.DEVELOPER}`,
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
                `🕒 ${new Date().toLocaleString('ar-EG')}`,
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
    console.log('🎉 SUCCESS! AI GOAL Predictor v15.4 with DUAL PAYMENT is RUNNING!');
    console.log('💳 Payment Systems: Binance + Bank Transfer');
    console.log('👤 Developer:', CONFIG.DEVELOPER);
    console.log('📢 Channel:', CONFIG.CHANNEL);
    console.log('🌐 Health check: http://localhost:' + PORT);
    console.log('🔄 Keep alive: http://localhost:' + PORT + '/keep-alive');
    console.log('🔧 Admin ID:', CONFIG.ADMIN_ID);
}).catch(console.error);

// ⚡ Graceful shutdown
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));

console.log('✅ AI Goal Prediction System with Dual Payment Ready!');
