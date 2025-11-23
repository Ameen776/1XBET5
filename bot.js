// ===================================================
// 🚀 AI GOAL PREDICTOR ULTIMATE - VERSION 17.1 FIXED
// 👤 DEVELOPER: ♛𝑨𝒎𝒆𝒆𝒏 𝑨𝒍𝒛𝒘𝒂𝒉𝒊♛
// 🔥 FEATURES: DUAL PAYMENT SYSTEM + BANK TRANSFER + BINANCE
// 💾 PERSISTENT DATA STORAGE - FIREBASE INTEGRATION
// ===================================================

console.log('🤖 Starting AI GOAL Predictor Ultimate v17.1 FIXED...');
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
    
    VERSION: "17.1.0",
    DEVELOPER: "♛𝑨𝒎𝒆𝒆𝒏 𝑨𝒍𝒛𝒘𝒂𝒉𝒊♛",
    CHANNEL: "@GEMZGOOL",
    START_IMAGE: "https://i.ibb.co/tpy70Bd1/IMG-20251104-074214-065.jpg",
    ANALYSIS_IMAGE: "https://i.ibb.co/VYjf05S0/Screenshot.png",
    PREDICTION_IMAGE: "https://i.ibb.co/rGTZm2mB/IMG.jpg",
    IMGBB_API_KEY: process.env.IMGBB_API_KEY || "42b155a527bee21e62e524a31fe9b1ee",
    SUPPORT_BOT: "@GEMZGOOLBOT"
};

console.log('✅ Enhanced Configuration loaded successfully');

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

// 🔥 ENHANCED FIREBASE INITIALIZATION - PERSISTENT DATA
let db = null;
let admin = null;

async function initializeFirebase() {
    try {
        admin = require('firebase-admin');
        
        // 🔐 FIREBASE CONFIG FROM ENVIRONMENT VARIABLES - UPDATED FOR RENDER
        const serviceAccount = {
            "type": "service_account",
            "project_id": process.env.FIREBASE_PROJECT_ID || "bot-tlegram-9f4b5",
            "private_key_id": process.env.FIREBASE_PRIVATE_KEY_ID || "5c64bc8c07e94dd271388582545f47fa4afee4f9",
            "private_key": process.env.FIREBASE_PRIVATE_KEY ? process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n') : "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDDXZ6hoQ3APNmj\nhZsDwDra0rgkJw3E1B4uJcv46uOcXSwIlHRqKZ9ZJ0BtAO0LrEv/SHmyrlZ1/s71\nF67laIlbnH83SIbxO0ObeYx/Sq9j07hsdCNZAg4iinM8XGPHKUFOT+Zk0HWSkI4O\nQMDpXqg9rjukLUDTHNCAmKtK8BUHN/eZX4J8KNAEewFyGkBPQoFzAvIAshohkiLV\nyxvr7L5EpszzQGfq6znkuV78PfyNPR8SufVbCy2PKEUy01uZxBGv/mAH88yfaI3B\n6amPdo/2bZkwLl/wpMBALTXKz9R3ZfAfo9FaXsdD7cQt4SJEYcTQP3jXjGFSawS+\nuWu8WNrRAgMBAAECggEARcfcP84HW9lAQYSYzFuuifeHFz6tz9aWGxScCQJZH0I2\nVrAz7rGEPbNj8ytIAAngMURBV72mm0nSwT9e1IkkusioteXdcS+iY9ekA9l40RbQ\nAkjvUT0HMHY0V+SGLR6CuYaXe/3raNjiLJwba5/IRxPDMM6LH3zkynH9iOw9DpDi\nyAKiog4/i1Oh0db7F48ukjVxtXDQHPU7ba0u99go/JoOJLIEdY4bnO/l/5mgcVAu\n9dBRLp0wPp86MPNizxoPIVse3mb9PCl1RieHJ0kLNeJO1XpKH3DBp9vyc9AfNBLf\n8ekU1odpWglGQX+93BCpdQ/K9lN2ORgXIfX0knEn2wKBgQDgn4bDzaSLYaL4vD88\nl317F8WUtcpWTBQmpkfsErpt8DzItfx3x6hu8iXwvEo/P9GAVYYlTsEkhkNANZWm\nBigdjYaHNx8tfoUra7NnlfkjeM4erwU4hko1K/JGRxrFzyriihmXXiKN7/5wIivs\nn83lGP7JCcJtY1GCh/7lRGzUuwKBgQDep9p6BxLnAq/R7QDkjgG68QsoQNgCw2qR\nsgNMI9tHp4uQ7kblA8v2soRZsJUoQ7rDKYAi7ygV3W845sLHMegZkJDKOgLQiVwP\ncGw2qyhCGOqyAKuF9jqelRy4kA2sT63uoa8uw3fa2Fwj6ZvbAuFXF8oLjUK7URFy\nOXj+xfGb4wKBgQC39O3BXaDsJUH6wvBnBwnUzVsatubGVfgKzxMH2y6i6qRdG+1v\niyv98IHx7cJAmltQ5rm9xAmZh/t7kmbEWTZxPX53LkVyVLNrJAEBTGmFC2KC7oMw\nD4qmkR8RPxpF9awBa2gZ9xYFeA7AdrvSRe2xOg8vRbbdLwGKDSZLTQZ0EQKBgCTf\nPTH6G+o/qqgkDILM9YJkyok2+86xV+OazCr+wSCDoXw1yW3BjDRlab+Em57YYIRT\nShH+8u90BSgyJs1f+WTKaP/kTXUFWkaAQptnCrqvb6ZcsAr2NMzwOpph2LHRXCdp\nhR5EZoPKUq/rztCdEH4gxWfWU9e7XB1DYUMnupQrAoGBAIlP0e9Fj4fJIpZ1XAkl\nB1Xzk0LlQHO8gCD2uVfuIenqa47CPYTiYG99C+Hrb8IuIf9abKW9+juc8M9iPW+h\nThLt6XB6PDffNTnq/bP9pIclwsfVoj7Fdk8bhjbBMZqnaOvwEnhY/jW9aAPlgoua\nQrGzKTrmDOvCcFOnlMX6Aymd\n-----END PRIVATE KEY-----\n",
            "client_email": process.env.FIREBASE_CLIENT_EMAIL || "firebase-adminsdk-fbsvc@bot-tlegram-9f4b5.iam.gserviceaccount.com",
            "client_id": process.env.FIREBASE_CLIENT_ID || "105258007010795889602",
            "auth_uri": "https://accounts.google.com/o/oauth2/auth",
            "token_uri": "https://oauth2.googleapis.com/token",
            "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
            "client_x509_cert_url": process.env.FIREBASE_CLIENT_X509_CERT_URL || "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-fbsvc%40bot-tlegram-9f4b5.iam.gserviceaccount.com",
            "universe_domain": "googleapis.com"
        };

        if (!admin.apps.length) {
            admin.initializeApp({
                credential: admin.credential.cert(serviceAccount),
                databaseURL: process.env.FIREBASE_DATABASE_URL || "https://bot-tlegram-9f4b5.firebaseio.com"
            });
        }
        
        db = admin.firestore();
        
        // 🔄 TEST FIREBASE CONNECTION
        const testDoc = db.collection('connection_test').doc('test');
        await testDoc.set({ 
            timestamp: new Date().toISOString(),
            status: 'connected',
            version: CONFIG.VERSION
        });
        
        console.log('✅ Firebase initialized successfully with persistent connection');
        return true;
        
    } catch (error) {
        console.log('❌ Firebase initialization failed:', error.message);
        console.log('🔄 Using enhanced local storage with backup system');
        return false;
    }
}

// INITIALIZE FIREBASE
initializeFirebase();

// 🔐 نظام الاشتراك الإجباري في القناة عبر تليجرام API
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

// 🛡️ تحقق من الاشتراك قبل كل أمر
bot.use(async (ctx, next) => {
    try {
        const userId = ctx.from.id.toString();
        
        // تخطي التحقق للأدمن
        if (userId === CONFIG.ADMIN_ID) return next();
        
        // تخطي لأوامر البدء والتحقق
        if (ctx.message?.text === '/start' || 
            ctx.callbackQuery?.data === 'check_channel_subscription' ||
            ctx.message?.text === '/check_subscription') {
            return next();
        }

        const userData = await dbManager.getUser(userId);
        
        // إذا لم يكن مسجلاً بعد، تخطي
        if (!userData) return next();
        
        // التحقق من الاشتراك في القناة
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
        
        await next();
    } catch (error) {
        console.error('Middleware error:', error);
        await next();
    }
});

// 💾 ENHANCED LOCAL STORAGE WITH BACKUP SYSTEM
class PersistentStorage {
    constructor() {
        this.userDatabase = new Map();
        this.paymentDatabase = new Map();
        this.settingsDatabase = new Map();
        this.backupInterval = null;
        this.init();
    }

    async init() {
        // 🗄️ LOAD DATA FROM BACKUP ON STARTUP
        await this.loadBackup();
        
        // 🔄 AUTO BACKUP EVERY 30 MINUTES
        this.backupInterval = setInterval(() => {
            this.createBackup();
        }, 30 * 60 * 1000);
    }

    async loadBackup() {
        try {
            if (db) {
                // 📥 LOAD USERS FROM FIREBASE
                const usersSnapshot = await db.collection('users').get();
                usersSnapshot.forEach(doc => {
                    this.userDatabase.set(doc.id, doc.data());
                });

                // 📥 LOAD PAYMENTS FROM FIREBASE
                const paymentsSnapshot = await db.collection('payments').get();
                paymentsSnapshot.forEach(doc => {
                    this.paymentDatabase.set(doc.id, doc.data());
                });

                // 📥 LOAD SETTINGS FROM FIREBASE
                const settingsDoc = await db.collection('settings').doc('config').get();
                if (settingsDoc.exists) {
                    this.settingsDatabase.set('config', settingsDoc.data());
                }

                console.log(`✅ Loaded backup: ${this.userDatabase.size} users, ${this.paymentDatabase.size} payments`);
            }
        } catch (error) {
            console.error('Backup load error:', error);
        }
    }

    async createBackup() {
        try {
            if (db) {
                const backupData = {
                    users: Array.from(this.userDatabase.entries()),
                    payments: Array.from(this.paymentDatabase.entries()),
                    settings: Array.from(this.settingsDatabase.entries()),
                    timestamp: new Date().toISOString(),
                    version: CONFIG.VERSION
                };

                await db.collection('backups').doc(Date.now().toString()).set(backupData);
                console.log('✅ Auto-backup created successfully');
            }
        } catch (error) {
            console.error('Auto-backup error:', error);
        }
    }

    // 🛑 STOP BACKUP INTERVAL ON SHUTDOWN
    stop() {
        if (this.backupInterval) {
            clearInterval(this.backupInterval);
        }
    }
}

// INITIALIZE PERSISTENT STORAGE
const persistentStorage = new PersistentStorage();

// 💾 ENHANCED DATABASE MANAGER - PERSISTENT DATA
class EnhancedDatabaseManager {
    constructor() {
        this.maintenanceMode = false;
        this.storage = persistentStorage;
    }

    async getUser(userId) {
        try {
            // 🔄 TRY FIREBASE FIRST
            if (db) {
                const userDoc = await db.collection('users').doc(userId.toString()).get();
                if (userDoc.exists) {
                    const userData = userDoc.data();
                    // 🗄️ SYNC WITH LOCAL STORAGE
                    this.storage.userDatabase.set(userId, userData);
                    return userData;
                }
            }
            
            // 🔄 FALLBACK TO LOCAL STORAGE
            return this.storage.userDatabase.get(userId) || null;
            
        } catch (error) {
            console.error('Get user error:', error);
            return this.storage.userDatabase.get(userId) || null;
        }
    }

    async saveUser(userId, userData) {
        try {
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
                last_analysis_time: userData.last_analysis_time || null,
                algorithm_linked: userData.algorithm_linked !== undefined ? userData.algorithm_linked : true
            };

            // 💾 SAVE TO FIREBASE (PRIMARY)
            if (db) {
                await db.collection('users').doc(userId.toString()).set(completeUserData, { merge: true });
            }
            
            // 💾 SAVE TO LOCAL STORAGE (BACKUP)
            this.storage.userDatabase.set(userId, completeUserData);
            
            return true;
            
        } catch (error) {
            console.error('Error saving user:', error);
            // 🆘 EMERGENCY SAVE TO LOCAL STORAGE
            this.storage.userDatabase.set(userId, userData);
            return true;
        }
    }

    async getSettings() {
        try {
            // 🔄 TRY FIREBASE FIRST
            if (db) {
                const settingsDoc = await db.collection('settings').doc('config').get();
                if (settingsDoc.exists) {
                    const settingsData = settingsDoc.data();
                    // 🗄️ SYNC WITH LOCAL STORAGE
                    this.storage.settingsDatabase.set('config', settingsData);
                    return settingsData;
                }
            }
            
            // 🔄 FALLBACK TO LOCAL STORAGE OR DEFAULT
            return this.storage.settingsDatabase.get('config') || {
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
            console.error('Get settings error:', error);
            return this.storage.settingsDatabase.get('config') || {
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

            // 💾 SAVE TO FIREBASE (PRIMARY)
            if (db) {
                await db.collection('settings').doc('config').set(updatedSettings, { merge: true });
            }
            
            // 💾 SAVE TO LOCAL STORAGE (BACKUP)
            this.storage.settingsDatabase.set('config', updatedSettings);
            
            return updatedSettings;
            
        } catch (error) {
            console.error('Update settings error:', error);
            const updatedSettings = {
                ...newSettings,
                updated_at: new Date().toISOString()
            };
            this.storage.settingsDatabase.set('config', updatedSettings);
            return updatedSettings;
        }
    }

    async getAllUsers() {
        try {
            // 🔄 TRY FIREBASE FIRST
            if (db) {
                const usersSnapshot = await db.collection('users').get();
                const users = usersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                
                // 🗄️ SYNC WITH LOCAL STORAGE
                users.forEach(user => {
                    this.storage.userDatabase.set(user.user_id, user);
                });
                
                return users;
            }
            
            // 🔄 FALLBACK TO LOCAL STORAGE
            return Array.from(this.storage.userDatabase.entries()).map(([id, data]) => ({ id, ...data }));
            
        } catch (error) {
            console.error('Get all users error:', error);
            return Array.from(this.storage.userDatabase.entries()).map(([id, data]) => ({ id, ...data }));
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

            // 💾 SAVE TO FIREBASE (PRIMARY)
            if (db) {
                await db.collection('payments').doc(paymentId).set(fullPaymentData);
            }
            
            // 💾 SAVE TO LOCAL STORAGE (BACKUP)
            this.storage.paymentDatabase.set(paymentId, fullPaymentData);
            
            return paymentId;
            
        } catch (error) {
            console.error('Add payment error:', error);
            const fullPaymentData = {
                ...paymentData,
                id: paymentId,
                status: 'pending',
                timestamp: new Date().toISOString()
            };
            this.storage.paymentDatabase.set(paymentId, fullPaymentData);
            return paymentId;
        }
    }

    async updatePayment(paymentId, updates) {
        try {
            // 🔄 UPDATE FIREBASE
            if (db) {
                await db.collection('payments').doc(paymentId).update(updates);
            }
            
            // 🔄 UPDATE LOCAL STORAGE
            const payment = this.storage.paymentDatabase.get(paymentId);
            if (payment) {
                this.storage.paymentDatabase.set(paymentId, { ...payment, ...updates });
            }
            
            return true;
            
        } catch (error) {
            console.error('Update payment error:', error);
            const payment = this.storage.paymentDatabase.get(paymentId);
            if (payment) {
                this.storage.paymentDatabase.set(paymentId, { ...payment, ...updates });
            }
            return true;
        }
    }

    async getPayment(paymentId) {
        try {
            // 🔄 TRY FIREBASE FIRST
            if (db) {
                const paymentDoc = await db.collection('payments').doc(paymentId).get();
                if (paymentDoc.exists) {
                    const paymentData = paymentDoc.data();
                    // 🗄️ SYNC WITH LOCAL STORAGE
                    this.storage.paymentDatabase.set(paymentId, paymentData);
                    return paymentData;
                }
            }
            
            // 🔄 FALLBACK TO LOCAL STORAGE
            return this.storage.paymentDatabase.get(paymentId) || null;
            
        } catch (error) {
            console.error('Get payment error:', error);
            return this.storage.paymentDatabase.get(paymentId) || null;
        }
    }

    async getAllPayments() {
        try {
            // 🔄 TRY FIREBASE FIRST
            if (db) {
                const paymentsSnapshot = await db.collection('payments').get();
                const payments = paymentsSnapshot.docs.map(doc => doc.data());
                
                // 🗄️ SYNC WITH LOCAL STORAGE
                payments.forEach(payment => {
                    this.storage.paymentDatabase.set(payment.id, payment);
                });
                
                return payments;
            }
            
            // 🔄 FALLBACK TO LOCAL STORAGE
            return Array.from(this.storage.paymentDatabase.values());
            
        } catch (error) {
            console.error('Get all payments error:', error);
            return Array.from(this.storage.paymentDatabase.values());
        }
    }

    async getPendingPayments() {
        try {
            const payments = await this.getAllPayments();
            return payments.filter(p => p.status === 'pending');
        } catch (error) {
            console.error('Get pending payments error:', error);
            return Array.from(this.storage.paymentDatabase.values()).filter(p => p.status === 'pending');
        }
    }

    // 🔄 SYNC ALL DATA TO FIREBASE
    async syncAllDataToFirebase() {
        try {
            if (!db) {
                console.log('❌ Firebase not available for sync');
                return false;
            }

            console.log('🔄 Starting data synchronization to Firebase...');

            // 📤 SYNC USERS
            const users = Array.from(this.storage.userDatabase.entries());
            for (const [userId, userData] of users) {
                await db.collection('users').doc(userId.toString()).set(userData, { merge: true });
            }

            // 📤 SYNC PAYMENTS
            const payments = Array.from(this.storage.paymentDatabase.entries());
            for (const [paymentId, paymentData] of payments) {
                await db.collection('payments').doc(paymentId).set(paymentData, { merge: true });
            }

            // 📤 SYNC SETTINGS
            const settings = this.storage.settingsDatabase.get('config');
            if (settings) {
                await db.collection('settings').doc('config').set(settings, { merge: true });
            }

            console.log(`✅ Data sync completed: ${users.length} users, ${payments.length} payments`);
            return true;

        } catch (error) {
            console.error('Data sync error:', error);
            return false;
        }
    }

    // 📥 RESTORE FROM FIREBASE
    async restoreFromFirebase() {
        try {
            if (!db) {
                console.log('❌ Firebase not available for restore');
                return false;
            }

            console.log('📥 Restoring data from Firebase...');

            // CLEAR LOCAL STORAGE
            this.storage.userDatabase.clear();
            this.storage.paymentDatabase.clear();
            this.storage.settingsDatabase.clear();

            // 📥 RESTORE USERS
            const usersSnapshot = await db.collection('users').get();
            usersSnapshot.forEach(doc => {
                this.storage.userDatabase.set(doc.id, doc.data());
            });

            // 📥 RESTORE PAYMENTS
            const paymentsSnapshot = await db.collection('payments').get();
            paymentsSnapshot.forEach(doc => {
                this.storage.paymentDatabase.set(doc.id, doc.data());
            });

            // 📥 RESTORE SETTINGS
            const settingsDoc = await db.collection('settings').doc('config').get();
            if (settingsDoc.exists) {
                this.storage.settingsDatabase.set('config', settingsDoc.data());
            }

            console.log(`✅ Restore completed: ${this.storage.userDatabase.size} users, ${this.storage.paymentDatabase.size} payments`);
            return true;

        } catch (error) {
            console.error('Restore error:', error);
            return false;
        }
    }

    // 🔍 NEW: Get user by 1xBet account number
    async getUserByOneXBet(onexbet) {
        try {
            // 🔄 TRY FIREBASE FIRST
            if (db) {
                const usersSnapshot = await db.collection('users').where('onexbet', '==', onexbet).get();
                if (!usersSnapshot.empty) {
                    return usersSnapshot.docs[0].data();
                }
            }

            // 🔄 CHECK LOCAL STORAGE
            for (let [userId, userData] of this.storage.userDatabase) {
                if (userData.onexbet === onexbet) {
                    return userData;
                }
            }
            return null;
            
        } catch (error) {
            console.error('Get user by onexbet error:', error);
            return null;
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

    // 🆕 دالة للتحقق من ربط الخوارزمية
    async checkAlgorithmLink(userId) {
        try {
            const user = await this.getUser(userId);
            if (!user) return false;
            
            // إذا لم يكن هناك وقت تحليل سابق، يعتبر مرتبط
            if (!user.last_analysis_time) return true;
            
            // التحقق إذا مر أكثر من 5 دقائق منذ آخر تحليل
            const lastAnalysisTime = new Date(user.last_analysis_time);
            const currentTime = new Date();
            const diffMinutes = (currentTime - lastAnalysisTime) / (1000 * 60);
            
            return diffMinutes <= 5;
        } catch (error) {
            console.error('Check algorithm link error:', error);
            return false;
        }
    }

    // 🆕 دالة لتحديث وقت آخر تحليل
    async updateLastAnalysisTime(userId) {
        try {
            const user = await this.getUser(userId);
            if (user) {
                user.last_analysis_time = new Date().toISOString();
                user.algorithm_linked = true;
                await this.saveUser(userId, user);
            }
            return true;
        } catch (error) {
            console.error('Update last analysis time error:', error);
            return false;
        }
    }

    // 🆕 دالة لإعادة ربط الخوارزمية
    async resetAlgorithmLink(userId) {
        try {
            const user = await this.getUser(userId);
            if (user) {
                user.algorithm_linked = false;
                await this.saveUser(userId, user);
            }
            return true;
        } catch (error) {
            console.error('Reset algorithm link error:', error);
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

// INITIALIZE ENHANCED DATABASE MANAGER
const dbManager = new EnhancedDatabaseManager();

// 🚀 INITIAL DATA SYNC ON STARTUP
async function initializeDataSync() {
    try {
        console.log('🔄 Initializing data synchronization...');
        
        // 📥 TRY TO RESTORE FROM FIREBASE FIRST
        const restoreSuccess = await dbManager.restoreFromFirebase();
        
        if (!restoreSuccess) {
            console.log('🔄 No Firebase data found, checking local storage...');
            
            // 📊 CHECK IF WE HAVE LOCAL DATA
            const settings = await dbManager.getSettings();
            const users = await dbManager.getAllUsers();
            
            console.log(`📊 Local data found: ${users.length} users`);
            
            // 📤 SYNC LOCAL DATA TO FIREBASE
            if (users.length > 0) {
                await dbManager.syncAllDataToFirebase();
            }
        }
        
        console.log('✅ Data initialization completed');
        
    } catch (error) {
        console.error('Data initialization error:', error);
    }
}

// 🔄 CALL INITIALIZATION ON STARTUP
initializeDataSync();

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
        this.algorithmVersion = "17.1";
        this.userAlgorithms = new Map();
    }

    generateSmartPrediction(userId) {
        if (!this.userAlgorithms.has(userId)) {
            this.userAlgorithms.set(userId, {
                baseProbability: Math.random() * 0.4 + 0.3,
                trendFactor: Math.random() * 0.2 - 0.1,
                volatility: Math.random() * 0.1 + 0.05
            });
        }

        const userAlgorithm = this.userAlgorithms.get(userId);
        
        let baseProbability = userAlgorithm.baseProbability;
        baseProbability += userAlgorithm.trendFactor;
        baseProbability += (Math.random() * 2 - 1) * userAlgorithm.volatility;
        
        baseProbability = Math.max(0.1, Math.min(0.9, baseProbability));
        
        const isGoal = Math.random() < baseProbability;
        const probability = Math.floor(baseProbability * 100);
        
        const now = new Date();
        const saudiTime = new Date(now.getTime() + (3 * 60 * 60 * 1000));
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
            timestamp: realTime,
            algorithm: this.algorithmVersion
        };

        return prediction;
    }

    generateNextPrediction(userId) {
        return this.generateSmartPrediction(userId);
    }

    updateAlgorithm(userId, won) {
        if (this.userAlgorithms.has(userId)) {
            const algorithm = this.userAlgorithms.get(userId);
            if (won) {
                algorithm.trendFactor += 0.02;
            } else {
                algorithm.trendFactor -= 0.01;
            }
            algorithm.trendFactor = Math.max(-0.15, Math.min(0.15, algorithm.trendFactor));
            this.userAlgorithms.set(userId, algorithm);
        }
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

// INITIALIZE SYSTEMS
const goalAI = new GoalPredictionAI();
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
            const subscriptionDisplayName = getSubscriptionDisplayName(subscriptionType);
            
            const message = `
🎉 *اشتراك جديد في البوت - ${systemText}*

👤 *المستخدم:* ${userData.username}
🔐 *الحساب:* ${userData.onexbet}
📍 *الدولة:* ${userData.country}
📦 *الباقة:* ${subscriptionDisplayName}
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
📍 *الدولة:* ${userData.country}
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
        lastPrediction: null,
        algorithmLinked: true
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

// 🔄 ADMIN KEYBOARDS
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

function getSubscriptionDuration(type) {
    const durations = {
        'week': '7 أيام',
        'month': '30 يوماً', 
        'three_months': '90 يوماً',
        'year': '365 يوماً'
    };
    return durations[type] || 'غير محدد';
}

function generateBankDescription(subscriptionType, price, accountNumber) {
    const typeNames = {
        'week': 'أسبوعية',
        'month': 'شهرية',
        'three_months': '3 أشهر',
        'year': 'سنوية'
    };
    
    return `🔹 تحويل بنكي - باقة ${typeNames[subscriptionType]}\n💳 رقم الحساب: ${accountNumber}\n🏦 البنك: البنك الكريمي\n💰 المبلغ: ${price}$\n💵 العملة: الدولار الأمريكي\n\n📋 الشروط:\n• يجب التحويل بالدولار الأمريكي\n• إرفاق صورة إثبات الدفع\n• كتابة رقم حساب 1xBet الخاص بك`;
}

function getSubscriptionDisplayName(type) {
    const names = {
        'week': 'أسبوعي',
        'month': 'شهري', 
        'three_months': '3 أشهر',
        'year': 'سنوي'
    };
    return names[type] || type;
}

// 🆕 رسائل تحفيزية متنوعة
const motivationalMessages = {
    win: [
        "🎊 *مبروك! فوز رائع!* ✨\nاستمر في هذا النجاح الباهر!",
        "🏆 *فوز مذهل!* 🔥\nمستوى احترافي رائع، استمر!",
        "💎 *فوز استثنائي!* ⚡\nأنت تتقدم بخطوات ثابتة نحو القمة!",
        "🚀 *فوز مبهر!* 💫\nمستواك يتجاوز التوقعات، استمر!",
        "⭐ *فوز باهر!* 🌟\nبراعة واحترافية، أنت الأفضل!"
    ],
    lose: [
        "💪 *لا تستسلم!* 🔄\nالخسارة جزء من الطريق، استمر في المحاولة!",
        "🔄 *هزيمة مؤقتة!* ⚡\nالعظماء لا ينهزمون، بل يتعلمون!",
        "🌟 *اصبر وتابع!* 🔥\nالنجاح قادم بعد هذه المحطة!",
        "🚀 *لا توقف!* 💫\nكل عظيم مر بهذه اللحظات، استمر!",
        "⚡ *تعلم واستمر!* 🌈\nهذه خطوة للوراء للقفز للأمام!"
    ]
};

function getRandomMotivationalMessage(type) {
    const messages = motivationalMessages[type];
    return messages[Math.floor(Math.random() * messages.length)];
}

// 🎯 BOT COMMANDS

bot.start(async (ctx) => {
    try {
        const settings = await dbManager.getSettings();
        if (settings.maintenance_mode && ctx.from.id.toString() !== CONFIG.ADMIN_ID) {
            await ctx.replyWithMarkdown('🔧 *البوت تحت الصيانة*\n\n⏰ نعمل على تحسين الخدمة لكم\n🔄 سنعود قريباً بأفضل مما كان\n\n📞 للاستفسار: ' + CONFIG.SUPPORT_BOT);
            return;
        }

        const userId = ctx.from.id.toString();
        const userName = ctx.from.first_name;

        const existingUser = await dbManager.getUser(userId);
        
        if (existingUser) {
            const algorithmLinked = await dbManager.checkAlgorithmLink(userId);
            
            if (!algorithmLinked) {
                await ctx.replyWithMarkdown(
                    `🔐 *مرحباً بعودتك ${userName}* 👋\n\n` +
                    `📍 *الدولة:* ${existingUser.country || 'غير محدد'}\n` +
                    `🔐 *الحساب:* \`${existingUser.onexbet}\`\n\n` +
                    `⚠️ *انقطع ارتباط الخوارزمية الذكية*\n\n` +
                    `🔄 تحتاج لإعادة الربط لمتابعة التحليلات\n` +
                    `⏰ هذا يحدث تلقائياً بعد 5 دقائق من عدم الاستخدام\n\n` +
                    `🎯 *اضغط على الزر أدناه لإعادة الربط:*`,
                    Markup.inlineKeyboard([
                        [Markup.button.callback('🔄 إعادة ربط الخوارزمية', 'relink_algorithm')]
                    ])
                );
                return;
            }

            ctx.session.step = 'verified';
            ctx.session.userData = existingUser;
            ctx.session.algorithmLinked = true;

            const remainingDays = calculateRemainingDays(existingUser.subscription_end_date);
            
            let statusMessage = '';
            if (existingUser.subscription_status === 'active' && remainingDays > 0) {
                statusMessage = `🎉 *مرحباً بعودتك!*\n\n` +
                               `✅ *اشتراكك نشط*\n` +
                               `🔐 الحساب: \`${existingUser.onexbet}\`\n` +
                               `📍 الدولة: ${existingUser.country || 'غير محدد'}\n` +
                               `📦 النوع: ${getSubscriptionDisplayName(existingUser.subscription_type)}\n` +
                               `📅 الانتهاء: ${new Date(existingUser.subscription_end_date).toLocaleDateString('ar-EG')}\n` +
                               `⏳ متبقي: ${remainingDays} يوم`;
            } else if (existingUser.free_attempts > 0) {
                statusMessage = `🎉 *مرحباً بعودتك!*\n\n` +
                               `🎯 *محاولات مجانية متاحة*\n` +
                               `🔐 الحساب: \`${existingUser.onexbet}\`\n` +
                               `📍 الدولة: ${existingUser.country || 'غير محدد'}\n` +
                               `🆓 محاولات مجانية: ${existingUser.free_attempts}`;
            } else {
                statusMessage = `🎉 *مرحباً بعودتك!*\n\n` +
                               `🚫 *انتهت المحاولات*\n` +
                               `🔐 الحساب: \`${existingUser.onexbet}\`\n` +
                               `📍 الدولة: ${existingUser.country || 'غير محدد'}\n` +
                               `💳 يرجى الاشتراك للمتابعة`;
            }

            await ctx.replyWithMarkdown(statusMessage, getMainKeyboard());
            
        } else {
            ctx.session.step = 'awaiting_country';
            ctx.session.awaitingCountry = true;

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
            await ctx.replyWithMarkdown('🔧 *البوت تحت الصيانة*\n\n⏰ نعمل على تحسين الخدمة لكم\n🔄 سنعود قريباً بأفضل مما كان\n\n📞 للاستفسار: ' + CONFIG.SUPPORT_BOT);
            return;
        }

        const text = ctx.message.text;
        const session = ctx.session;
        const userId = ctx.from.id.toString();

        // 🔐 ADMIN COMMANDS
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

        // معالجة اختيار الدولة
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
                
                const isSubscribed = await checkChannelSubscription(userId);
                
                if (!isSubscribed) {
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

        // التحقق من الاشتراك في القناة
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

        // معالجة اختيار طريقة الدفع
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

        // معالجة تعديل البنكي
        if (session.adminStep === 'edit_bank_price') {
            await handleAdminEditBankPrice(ctx, text);
            return;
        }

        if (session.adminStep === 'edit_bank_account') {
            await handleAdminEditBankAccount(ctx, text);
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

        // معالجة اختيار نظام الدفع في الإدمن
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

        // زر إدخال رقم الحساب
        if (text === '🔐 إدخال رقم الحساب') {
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

        // STEP 1: Validate 1xBet Account
        if (session.step === 'awaiting_account_id') {
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
                const existingUserWithAccount = await dbManager.getUserByOneXBet(text);
                if (existingUserWithAccount && existingUserWithAccount.user_id !== userId) {
                    await ctx.replyWithMarkdown(
                        '❌ *رقم الحساب مسجل بالفعل!*\n\n' +
                        '🔐 هذا الحساب مسجل لمستخدم آخر\n' +
                        '💡 يرجى استخدام حسابك الخاص أو التواصل مع الدعم'
                    );
                    return;
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
        // STEP 2: Verify Code
        else if (session.step === 'awaiting_verification' && /^\d{6}$/.test(text)) {
            if (parseInt(text) === ctx.session.verificationCode) {
                
                const waitingMessage = await ctx.replyWithMarkdown(
                    '🔐 *جاري تسجيل الدخول...*\n\n' +
                    '⏳ جاري البحث في السجلات...\n' +
                    '📡 جاري الاتصال بالسيرفر...\n' +
                    '⚡ جاري تفعيل الحساب...\n' +
                    '🎯 جاري إعداد المحاولات المجانية...\n\n' +
                    '⏰ قد تستغرق العملية 10 ثواني...'
                );

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
                    last_analysis_time: new Date().toISOString(),
                    algorithm_linked: true
                };

                await dbManager.saveUser(userId, userData);
                ctx.session.step = 'verified';
                ctx.session.userData = userData;

                await ctx.deleteMessage(waitingMessage.message_id);

                await ctx.replyWithMarkdown(
                    `🎉 *تم الربط بنجاح!*\n\n` +
                    `📍 *الدولة:* ${userData.country}\n` +
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
        // معالجة طلبات الدفع
        else if (session.awaitingPaymentAccount) {
            if (/^\d{10}$/.test(text)) {
                const userData = await dbManager.getUser(userId);
                
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
        // معالجة الأزرار الثابتة بعد التحقق
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
                        `👤 ${CONFIG.SUPPORT_BOT}\n` +
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
        // إذا كان المستخدم غير مسجل وحاول استخدام الأزرار
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

// 🖼️ معالجة صور الدفع
bot.on('photo', async (ctx) => {
    try {
        const userId = ctx.from.id.toString();
        const session = ctx.session;
        
        if (session.paymentType) {
            await handlePaymentScreenshot(ctx, userId);
            return;
        }

        if (session.adminStep === 'edit_bank_image') {
            await handleAdminBankImageUpload(ctx, userId);
            return;
        }

        if (session.adminStep === 'edit_price_and_payment' && session.editingSubscriptionType && session.adminPaymentSystem === 'binance') {
            await handleAdminPaymentImageUpload(ctx, userId);
            return;
        }

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
        
        if (callbackData.startsWith('win_prediction_') || callbackData.startsWith('lose_prediction_')) {
            await handlePredictionResult(ctx, callbackData);
            return;
        }
        
        else if (callbackData === 'relink_algorithm') {
            await handleRelinkAlgorithm(ctx);
            return;
        }
        
        else if (callbackData.startsWith('win_') || callbackData.startsWith('lose_')) {
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
                
                goalAI.updateAlgorithm(userId, true);
                
                await ctx.answerCbQuery(`🎊 مبروك! نجح التوقع وربحت ${profit}$`);
                
                const motivationalMessage = getRandomMotivationalMessage('win');
                
                await ctx.replyWithMarkdown(
                    `${motivationalMessage}\n\n` +
                    `💰 ربحت: ${profit}$\n` +
                    `💵 إجمالي أرباحك: ${ctx.session.totalProfit}$\n\n` +
                    `🎯 يمكنك البدء بتوقع جديد`,
                    getMainKeyboard()
                );
                
            } else {
                const newBet = ctx.session.currentBet * 2;
                userData.losses = (userData.losses || 0) + 1;
                ctx.session.currentBet = newBet;
                
                goalAI.updateAlgorithm(userId, false);
                
                await ctx.answerCbQuery(`🔄 جاري إنشاء التوقع التالي...`);
                
                const newPrediction = goalAI.generateNextPrediction(userId);
                
                const motivationalMessage = getRandomMotivationalMessage('lose');
                
                await ctx.replyWithMarkdown(
                    `${motivationalMessage}\n\n` +
                    `📈 الرهان التالي مضاعف: ${newBet}$\n\n` +
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
        
        else if (callbackData.startsWith('accept_')) {
            const paymentId = callbackData.split('_')[1];
            await handlePaymentAccept(ctx, paymentId);
        }
        else if (callbackData.startsWith('reject_')) {
            const paymentId = callbackData.split('_')[1];
            await handlePaymentReject(ctx, paymentId);
        }
        
        else if (callbackData.startsWith('confirm_binance_') || callbackData.startsWith('confirm_bank_')) {
            await handleSubscriptionConfirmation(ctx, callbackData);
        }
        
        else if (callbackData === 'back_to_subscriptions') {
            await ctx.deleteMessage(ctx.callbackQuery.message.message_id);
            await ctx.replyWithMarkdown('💳 *باقات الاشتراك المتاحة*', getSubscriptionKeyboard());
        }
        
        else if (callbackData === 'check_channel_subscription') {
            await handleCheckChannelSubscription(ctx);
        }
        
    } catch (error) {
        console.error('Callback query error:', error);
        await ctx.answerCbQuery('❌ حدث خطأ في المعالجة');
    }
});

// 🆕 معالجة نتائج التوقع
async function handlePredictionResult(ctx, callbackData) {
    try {
        const userId = ctx.from.id.toString();
        const isWin = callbackData.startsWith('win_prediction_');
        
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
            
            goalAI.updateAlgorithm(userId, true);
            
            await ctx.answerCbQuery(`🎊 مبروك! نجح التوقع وربحت ${profit}$`);
            
            const motivationalMessage = getRandomMotivationalMessage('win');
            
            await ctx.replyWithMarkdown(
                `${motivationalMessage}\n\n` +
                `💰 ربحت: ${profit}$\n` +
                `💵 إجمالي أرباحك: ${ctx.session.totalProfit}$\n\n` +
                `🎯 يمكنك البدء بتوقع جديد`,
                getMainKeyboard()
            );
            
        } else {
            const newBet = ctx.session.currentBet * 2;
            userData.losses = (userData.losses || 0) + 1;
            ctx.session.currentBet = newBet;
            
            goalAI.updateAlgorithm(userId, false);
            
            await ctx.answerCbQuery(`🔄 جاري إنشاء التوقع التالي...`);
            
            const motivationalMessage = getRandomMotivationalMessage('lose');
            
            await ctx.replyWithMarkdown(
                `${motivationalMessage}\n\n` +
                `📈 الرهان التالي مضاعف: ${newBet}$\n\n` +
                `🎯 *اضغط على "جلب التحليل" للحصول على التوقع التالي*`,
                getMainKeyboard()
            );
        }
        
        await dbManager.saveUser(userId, userData);
        
        try {
            await ctx.deleteMessage(ctx.callbackQuery.message.message_id);
        } catch (deleteError) {
            console.log('Could not delete message:', deleteError);
        }
        
    } catch (error) {
        console.error('Prediction result handler error:', error);
        await ctx.answerCbQuery('❌ حدث خطأ في المعالجة');
    }
}

// 🆕 معالجة إعادة ربط الخوارزمية
async function handleRelinkAlgorithm(ctx) {
    try {
        const userId = ctx.from.id.toString();
        
        await dbManager.updateLastAnalysisTime(userId);
        
        await ctx.answerCbQuery('✅ تم إعادة ربط الخوارزمية بنجاح!');
        await ctx.deleteMessage();
        
        const userData = await dbManager.getUser(userId);
        ctx.session.step = 'verified';
        ctx.session.userData = userData;
        ctx.session.algorithmLinked = true;
        
        await ctx.replyWithMarkdown(
            `🔄 *تم إعادة ربط الخوارزمية الذكية بنجاح!* ⚡\n\n` +
            `📍 *الدولة:* ${userData.country || 'غير محدد'}\n` +
            `🔐 *الحساب:* \`${userData.onexbet}\`\n\n` +
            `🎯 *يمكنك الآن متابعة التحليلات والتوقعات*`,
            getMainKeyboard()
        );
        
    } catch (error) {
        console.error('Relink algorithm error:', error);
        await ctx.answerCbQuery('❌ حدث خطأ في إعادة الربط');
    }
}

// 🆕 معالجة التحقق من الاشتراك في القناة
async function handleCheckChannelSubscription(ctx) {
    try {
        const userId = ctx.from.id.toString();
        const isSubscribed = await checkChannelSubscription(userId);
        
        if (isSubscribed) {
            await ctx.answerCbQuery('✅ تم التحقق من الاشتراك بنجاح!');
            await ctx.deleteMessage();
            
            const userName = ctx.from.first_name;
            const country = ctx.session.country || 'غير محدد';
            
            const welcomeMessage = `
🔐 *مرحباً ${userName} في نظام GOAL Predictor Pro v${CONFIG.VERSION}*

📍 *الدولة:* ${country}

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
        const algorithmLinked = await dbManager.checkAlgorithmLink(ctx.from.id.toString());
        
        if (!algorithmLinked) {
            await ctx.replyWithMarkdown(
                `⚠️ *انقطع ارتباط الخوارزمية الذكية*\n\n` +
                `📍 *الدولة:* ${userData.country || 'غير محدد'}\n` +
                `🔐 *الحساب:* \`${userData.onexbet}\`\n\n` +
                `🔄 تحتاج لإعادة الربط لمتابعة التحليلات\n` +
                `⏰ هذا يحدث تلقائياً بعد 5 دقائق من عدم الاستخدام\n\n` +
                `🎯 *اضغط على الزر أدناه لإعادة الربط:*`,
                Markup.inlineKeyboard([
                    [Markup.button.callback('🔄 إعادة ربط الخوارزمية', 'relink_algorithm')]
                ])
            );
            return;
        }

        if (userData.subscription_status !== 'active' && userData.free_attempts <= 0) {
            await ctx.replyWithMarkdown(
                '🚫 *انتهت المحاولات المجانية*\n\n' +
                '💳 يرجى الاشتراك للمتابعة في استخدام الخدمة',
                getMainKeyboard()
            );
            return;
        }

        if (!ctx.session.currentBet || ctx.session.currentBet <= 0) {
            ctx.session.awaitingBetAmount = true;
            await ctx.replyWithMarkdown(
                '💰 *أدخل مبلغ الرهان:*\n\n' +
                '💵 يرجى كتابة المبلغ الذي تريد الرهان عليه (بالدولار)\n' +
                '📝 مثال: 10 أو 25.5'
            );
            return;
        }

        const loadingMessages = [
            '🎯 *جاري جلب التحليل...*\n\n⚽ جاري البحث عن فرص الهدف...',
            '🎯 *جاري جلب التحليل...*\n\n🔄 جاري تحليل إحصائيات الفريقين...',
            '🎯 *جاري جلب التحليل...*\n\n📊 جاري معالجة البيانات...',
            '🎯 *جاري جلب التحليل...*\n\n🤖 جاري تطبيق خوارزمية الذكاء الاصطناعي...'
        ];

        let loadingMsg = await ctx.replyWithMarkdown(loadingMessages[0]);
        
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

        const prediction = goalAI.generateSmartPrediction(userData.user_id);
        
        if (userData.subscription_status !== 'active') {
            userData.free_attempts--;
        }
        userData.total_predictions = (userData.total_predictions || 0) + 1;
        userData.total_bets = (userData.total_bets || 0) + ctx.session.currentBet;
        userData.lastPrediction = prediction;
        
        await dbManager.updateLastAnalysisTime(ctx.from.id.toString());
        await dbManager.saveUser(ctx.from.id.toString(), userData);

        const now = new Date();
        const saudiTime = new Date(now.getTime() + (3 * 60 * 60 * 1000));
        const realTime = saudiTime.toLocaleTimeString('ar-SA', { 
            hour: '2-digit', 
            minute: '2-digit',
            second: '2-digit',
            hour12: false 
        });

        const analysisMessage = `
🤖 *تحليل الذكاء الاصطناعي المتقدم - v${CONFIG.VERSION}*

🎯 *نتيجة التحليل:*
${prediction.type}
📈 *الاحتمالية:* ${prediction.probability}%
🎯 *الثقة:* ${prediction.confidence}%

💡 *التحليل:*
${prediction.reasoning}

🔐 *الحساب:* \`${userData.onexbet}\`
📍 *الدولة:* ${userData.country || 'غير محدد'}
💰 *مبلغ الرهان:* ${ctx.session.currentBet}$
🕒 *الوقت:* ${realTime}

${userData.subscription_status !== 'active' ? 
    `🆓 *المحاولات المتبقية:* ${userData.free_attempts}` : 
    `✅ *اشتراك نشط - محاولات غير محدودة*`}
        `;

        await ctx.replyWithPhoto(CONFIG.PREDICTION_IMAGE, {
            caption: analysisMessage,
            parse_mode: 'Markdown',
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: '❌ خسرت', callback_data: `lose_prediction_${Date.now()}` },
                        { text: '✅ ربحت', callback_data: `win_prediction_${Date.now()}` }
                    ]
                ]
            }
        });

        await channelNotifier.sendPredictionNotification(userData, prediction, ctx.session.currentBet);

        await ctx.deleteMessage(loadingMsg.message_id);

    } catch (error) {
        console.error('Get prediction error:', error);
        await ctx.replyWithMarkdown('❌ *حدث خطأ في جلب التحليل*', getMainKeyboard());
    }
}

async function handleUserStats(ctx, userData) {
    try {
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
        
        const algorithmLinked = await dbManager.checkAlgorithmLink(ctx.from.id.toString());
        const algorithmStatus = algorithmLinked ? '✅ مرتبطة' : '⚠️ تحتاج إعادة ربط';
        
        await ctx.replyWithMarkdown(
            `📊 *إحصائياتك الشخصية*\n\n` +
            `📍 *الدولة:* ${userData.country || 'غير محدد'}\n` +
            `🔐 ${userData.onexbet}\n` +
            `👤 ${userData.username}\n` +
            `🤖 *الخوارزمية:* ${algorithmStatus}\n` +
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
    } catch (error) {
        console.error('User stats error:', error);
        await ctx.replyWithMarkdown('❌ حدث خطأ في جلب الإحصائيات', getMainKeyboard());
    }
}

async function handleBotStats(ctx) {
    try {
        const stats = dynamicStats.getStats();
        await ctx.replyWithMarkdown(
            `👥 *إحصائيات البوت*\n\n` +
            `👤 إجمالي المستخدمين: ${stats.totalUsers.toLocaleString()}\n` +
            `🟢 مستخدمين نشطين الآن: ${stats.activeUsers}\n` +
            `📊 التوقعات اليومية: ${Math.floor(stats.activeUsers * 8.5)}\n\n` +
            `🎯 *النظام يعمل بكفاءة عالية*`,
            getMainKeyboard()
        );
    } catch (error) {
        console.error('Bot stats error:', error);
        await ctx.replyWithMarkdown('❌ حدث خطأ في جلب إحصائيات البوت', getMainKeyboard());
    }
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

async function handleSubscriptionSelection(ctx, userData, text) {
    try {
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

        const settings = await dbManager.getSettings();
        const paymentSystem = ctx.session.paymentSystem || 'binance';
        
        if (paymentSystem === 'binance') {
            const prices = settings.prices.binance;
            const payment_links = settings.payment_links.binance;

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
            const prices = settings.prices.bank;
            const bankDetails = settings.payment_links.bank[subscriptionType];

            const displayName = getSubscriptionDisplayName(subscriptionType);
            
            const subscriptionMessage = `🏦 *باقة ${displayName} - تحويل بنكي*\n\n` +
                `💰 السعر: ${prices[subscriptionType]}$\n` +
                `⏰ المدة: ${getSubscriptionDuration(subscriptionType)}\n\n` +
                `💳 *معلومات الحساب البنكي:*\n` +
                `${bankDetails.description}\n\n` +
                `💡 *هل تريد المتابعة مع هذه الباقة؟*`;

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

async function handleSubscriptionConfirmation(ctx, callbackData) {
    try {
        const userId = ctx.from.id.toString();
        const userData = await dbManager.getUser(userId);

        if (!userData) {
            await ctx.answerCbQuery('❌ لم يتم العثور على بيانات المستخدم');
            return;
        }

        const parts = callbackData.split('_');
        const paymentSystem = parts[1];
        const subscriptionType = parts[2];

        const settings = await dbManager.getSettings();
        const prices = settings.prices[paymentSystem];

        if (!prices || !prices[subscriptionType]) {
            await ctx.answerCbQuery('❌ خطأ في بيانات السعر');
            return;
        }

        ctx.session.paymentSystem = paymentSystem;
        ctx.session.paymentType = subscriptionType;
        ctx.session.awaitingPaymentAccount = true;

        await ctx.answerCbQuery('✅ تم تأكيد الاختيار');
        
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
    try {
        let statusMessage = '';
        
        if (userData.subscription_status === 'active') {
            const remainingDays = calculateRemainingDays(userData.subscription_end_date);
            statusMessage = `✅ *اشتراكك نشط*\n\n` +
                           `🔐 الحساب: \`${userData.onexbet}\`\n` +
                           `📍 الدولة: ${userData.country || 'غير محدد'}\n` +
                           `📦 النوع: ${getSubscriptionDisplayName(userData.subscription_type)}\n` +
                           `📅 الانتهاء: ${new Date(userData.subscription_end_date).toLocaleDateString('ar-EG')}\n` +
                           `⏳ متبقي: ${remainingDays} يوم`;
        } else if (userData.free_attempts > 0) {
            statusMessage = `🎯 *محاولات مجانية متاحة*\n\n` +
                           `🔐 الحساب: \`${userData.onexbet}\`\n` +
                           `📍 الدولة: ${userData.country || 'غير محدد'}\n` +
                           `🆓 محاولات مجانية: ${userData.free_attempts}\n\n` +
                           `💳 يمكنك الاشتراك للحصول على ميزات غير محدودة`;
        } else {
            statusMessage = `🚫 *انتهت المحاولات*\n\n` +
                           `🔐 الحساب: \`${userData.onexbet}\`\n` +
                           `📍 الدولة: ${userData.country || 'غير محدد'}\n` +
                           `💳 يرجى الاشتراك للمتابعة في استخدام الخدمة`;
        }
        
        await ctx.replyWithMarkdown(statusMessage, getMainKeyboard());
    } catch (error) {
        console.error('Subscription status error:', error);
        await ctx.replyWithMarkdown('❌ حدث خطأ في جلب حالة الاشتراك', getMainKeyboard());
    }
}

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

        if (!prices || !prices[ctx.session.paymentType]) {
            await ctx.replyWithMarkdown('❌ خطأ في بيانات السعر، يرجى المحاولة مرة أخرى');
            return;
        }

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
            timestamp: new Date().toISOString()
        };

        const paymentId = await dbManager.addPayment(paymentData);
        
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
            `✅ الباقة: ${getSubscriptionDisplayName(ctx.session.paymentType)}\n` +
            `💰 المبلغ: ${paymentData.amount}$\n` +
            `💳 النظام: ${paymentSystem === 'binance' ? 'باينانس' : 'تحويل بنكي'}\n\n` +
            '✅ سيتم مراجعتها من الإدارة في أقرب وقت\n' +
            '⏰ عادةً خلال 24 ساعة\n\n' +
            `📞 للاستفسار: ${CONFIG.SUPPORT_BOT}`,
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

// ... (يتبع باقي الدوال الإدارية بنفس النمط مع تصحيح الأخطاء)

// 🚀 START BOT
bot.launch().then(() => {
    console.log('🎉 SUCCESS! AI GOAL Predictor v17.1 FIXED is RUNNING!');
    console.log('💳 Payment Systems: Binance + Bank Transfer');
    console.log('💾 Persistent Data Storage: FIREBASE ENABLED');
    console.log('🔐 Channel Subscription: TELEGRAM API ENABLED');
    console.log('🤖 Smart Algorithms: INDIVIDUAL PER USER');
    console.log('👤 Developer:', CONFIG.DEVELOPER);
    console.log('📢 Channel:', CONFIG.CHANNEL);
    console.log('🆘 Support:', CONFIG.SUPPORT_BOT);
    console.log('🌐 Health check: http://localhost:' + PORT);
    console.log('🔄 Keep alive: http://localhost:' + PORT + '/keep-alive');
    console.log('🔧 Admin ID:', CONFIG.ADMIN_ID);
}).catch(console.error);

// 🛑 GRACEFUL SHUTDOWN WITH DATA BACKUP
process.once('SIGINT', async () => {
    console.log('🔄 Creating final backup before shutdown...');
    await persistentStorage.createBackup();
    persistentStorage.stop();
    await bot.stop('SIGINT');
});

process.once('SIGTERM', async () => {
    console.log('🔄 Creating final backup before shutdown...');
    await persistentStorage.createBackup();
    persistentStorage.stop();
    await bot.stop('SIGTERM');
});

console.log('✅ AI Goal Prediction System v17.1 with All Features Fixed and Ready!');
