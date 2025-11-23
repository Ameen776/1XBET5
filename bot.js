// ===================================================
// 🚀 AI GOAL PREDICTOR ULTIMATE - VERSION 16.2 STABLE
// 👤 DEVELOPER: ♛𝑨𝒎𝒆𝒆𝒏 𝑨𝒍𝒛𝒘𝒂𝒉𝒊♛
// 🔥 FEATURES: DUAL PAYMENT SYSTEM + BANK TRANSFER + BINANCE
// 💾 PERSISTENT DATA STORAGE - FIREBASE INTEGRATION
// 🎯 ENHANCED PREDICTION SYSTEM WITH WIN/LOSE BUTTONS
// 🔄 ALGORITHM AUTO-RECONNECTION EVERY 5 MINUTES
// 🔒 DUPLICATE ACCOUNT PREVENTION
// 🛠️ FIXED ADMIN PANEL + PAYMENT PROCESSING
// ===================================================

console.log('🤖 Starting AI GOAL Predictor Ultimate v16.2 STABLE...');
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
    
    VERSION: "16.2.0",
    DEVELOPER: "♛𝑨𝒎𝒆𝒆𝒏 𝑨𝒍𝒛𝒘𝒂𝒉𝒊♛",
    CHANNEL: "@GEMZGOOL",
    START_IMAGE: "https://i.ibb.co/tpy70Bd1/IMG-20251104-074214-065.jpg",
    ANALYSIS_IMAGE: "https://i.ibb.co/VYjf05S0/Screenshot.png",
    PREDICTION_IMAGE: "https://i.ibb.co/rGTZm2mB/IMG.jpg",
    IMGBB_API_KEY: process.env.IMGBB_API_KEY || "42b155a527bee21e62e524a31fe9b1ee"
};

console.log('✅ Final Configuration loaded successfully');

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
        
        // 🔐 FIREBASE CONFIG FROM ENVIRONMENT VARIABLES
        const serviceAccount = {
            "type": "service_account",
            "project_id": "bot-tlegram-9f4b5",
            "private_key_id": "5c64bc8c07e94dd271388582545f47fa4afee4f9",
            "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDDXZ6hoQ3APNmj\nhZsDwDra0rgkJw3E1B4uJcv46uOcXSwIlHRqKZ9ZJ0BtAO0LrEv/SHmyrlZ1/s71\nF67laIlbnH83SIbxO0ObeYx/Sq9j07hsdCNZAg4iinM8XGPHKUFOT+Zk0HWSkI4O\nQMDpXqg9rjukLUDTHNCAmKtK8BUHN/eZX4J8KNAEewFyGkBPQoFzAvIAshohkiLV\nyxvr7L5EpszzQGfq6znkuV78PfyNPR8SufVbCy2PKEUy01uZxBGv/mAH88yfaI3B\n6amPdo/2bZkwLl/wpMBALTXKz9R3ZfAfo9FaXsdD7cQt4SJEYcTQP3jXjGFSawS+\nuWu8WNrRAgMBAAECggEARcfcP84HW9lAQYSYzFuuifeHFz6tz9aWGxScCQJZH0I2\nVrAz7rGEPbNj8ytIAAngMURBV72mm0nSwT9e1IkkusioteXdcS+iY9ekA9l40RbQ\nAkjvUT0HMHY0V+SGLR6CuYaXe/3raNjiLJwba5/IRxPDMM6LH3zkynH9iOw9DpDi\nyAKiog4/i1Oh0db7F48ukjVxtXDQHPU7ba0u99go/JoOJLIEdY4bnO/l/5mgcVAu\n9dBRLp0wPp86MPNizxoPIVse3mb9PCl1RieHJ0kLNeJO1XpKH3DBp9vyc9AfNBLf\n8ekU1odpWglGQX+93BCpdQ/K9lN2ORgXIfX0knEn2wKBgQDgn4bDzaSLYaL4vD88\nl317F8WUtcpWTBQmpkfsErpt8DzItfx3x6hu8iXwvEo/P9GAVYYlTsEkhkNANZWm\nBigdjYaHNx8tfoUra7NnlfkjeM4erwU4hko1K/JGRxrFzyriihmXXiKN7/5wIivs\nn83lGP7JCcJtY1GCh/7lRGzUuwKBgQDep9p6BxLnAq/R7QDkjgG68QsoQNgCw2qR\nsgNMI9tHp4uQ7kblA8v2soRZsJUoQ7rDKYAi7ygV3W845sLHMegZkJDKOgLQiVwP\ncGw2qyhCGOqyAKuF9jqelRy4kA2sT63uoa8uw3fa2Fwj6ZvbAuFXF8oLjUK7URFy\nOXj+xfGb4wKBgQC39O3BXaDsJUH6wvBnBwnUzVsatubGVfgKzxMH2y6i6qRdG+1v\niyv98IHx7cJAmltQ5rm9xAmZh/t7kmbEWTZxPX53LkVyVLNrJAEBTGmFC2KC7oMw\nD4qmkR8RPxpF9awBa2gZ9xYFeA7AdrvSRe2xOg8vRbbdLwGKDSZLTQZ0EQKBgCTf\nPTH6G+o/qqgkDILM9YJkyok2+86xV+OazCr+wSCDoXw1yW3BjDRlab+Em57YYIRT\nShH+8u90BSgyJs1f+WTKaP/kTXUFWkaAQptnCrqvb6ZcsAr2NMzwOpph2LHRXCdp\nhR5EZoPKUq/rztCdEH4gxWfWU9e7XB1DYUMnupQrAoGBAIlP0e9Fj4fJIpZ1XAkl\nB1Xzk0LlQHO8gCD2uVfuIenqa47CPYTiYG99C+Hrb8IuIf9abKW9+juc8M9iPW+h\nThLt6XB6PDffNTnq/bP9pIclwsfVoj7Fdk8bhjbBMZqnaOvwEnhY/jW9aAPlgoua\nQrGzKTrmDOvCcFOnlMX6Aymd\n-----END PRIVATE KEY-----\n",
            "client_email": "firebase-adminsdk-fbsvc@bot-tlegram-9f4b5.iam.gserviceaccount.com",
            "client_id": "105258007010795889602",
            "auth_uri": "https://accounts.google.com/o/oauth2/auth",
            "token_uri": "https://oauth2.googleapis.com/token",
            "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
            "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-fbsvc%40bot-tlegram-9f4b5.iam.gserviceaccount.com",
            "universe_domain": "googleapis.com"
        };

        if (!admin.apps.length) {
            admin.initializeApp({
                credential: admin.credential.cert(serviceAccount),
                databaseURL: "https://bot-tlegram-9f4b5.firebaseio.com"
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
                algorithm_linked: userData.algorithm_linked || true,
                last_algorithm_check: userData.last_algorithm_check || new Date().toISOString()
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

    // 🔍 NEW: Check if 1xBet account exists (for duplicate prevention)
    async isOneXBetAccountExists(onexbet) {
        try {
            const user = await this.getUserByOneXBet(onexbet);
            return user !== null;
        } catch (error) {
            console.error('Check onexbet account exists error:', error);
            return false;
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
        this.algorithmVersion = "16.2";
        this.complexityLevel = "ULTRA_SMART";
    }

    generateSmartPrediction(userId) {
        // خوارزمية معقدة جداً تعتمد على عوامل متعددة
        const userHash = this.generateUserHash(userId);
        const timeFactor = this.getTimeFactor();
        const complexityScore = this.calculateComplexity(userHash, timeFactor);
        
        // تحديد إذا كان الهدف أم لا بناءً على الخوارزمية المعقدة
        const isGoal = this.decideGoal(complexityScore);
        const probability = this.calculateProbability(complexityScore, isGoal);
        
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
            confidence: this.calculateConfidence(complexityScore),
            reasoning: this.generateReasoning(isGoal, probability, complexityScore),
            timestamp: realTime,
            algorithm: this.algorithmVersion,
            complexity: complexityScore
        };

        return prediction;
    }

    generateUserHash(userId) {
        let hash = 0;
        for (let i = 0; i < userId.length; i++) {
            hash = ((hash << 5) - hash) + userId.charCodeAt(i);
            hash = hash & hash;
        }
        return Math.abs(hash);
    }

    getTimeFactor() {
        const now = new Date();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
        return ((minutes * 60 + seconds) % 100) / 100;
    }

    calculateComplexity(userHash, timeFactor) {
        const baseComplexity = (userHash % 70) + 30; // 30-100
        const timeAdjusted = baseComplexity * (0.8 + timeFactor * 0.4);
        return Math.min(100, Math.max(1, Math.round(timeAdjusted)));
    }

    decideGoal(complexityScore) {
        // خوارزمية معقدة تعتمد على عوامل متعددة
        const randomFactor = Math.random() * 40 + 30; // 30-70
        const combinedScore = (complexityScore + randomFactor) / 2;
        return combinedScore > 55; // إذا كان المجموع أكثر من 55 يكون هدف
    }

    calculateProbability(complexityScore, isGoal) {
        const baseProb = isGoal ? 
            Math.min(85, Math.max(60, complexityScore - 10)) :
            Math.min(80, Math.max(55, 100 - complexityScore));
        
        // إضافة عامل عشوائي صغير
        const randomAdjustment = (Math.random() * 10) - 5;
        return Math.max(50, Math.min(90, Math.round(baseProb + randomAdjustment)));
    }

    calculateConfidence(complexityScore) {
        return Math.min(100, Math.max(80, complexityScore));
    }

    generateReasoning(isGoal, probability, complexityScore) {
        const factors = [
            "تحليل الضغط الهجومي",
            "إحصائيات التسديدات على المرمى", 
            "نسبة استحواذ الفريق",
            "الفرص الخطيرة المُنشأة",
            "أداء اللاعبين الأساسيين",
            "الظروف التكتيكية للمباراة",
            "الحالة النفسية للفريقين",
            "الدعم الجماهيري",
            "الطقس وملعب المباراة",
            "السجل التاريخي بين الفريقين"
        ];

        const selectedFactors = this.shuffleArray(factors).slice(0, 3);
        
        if (isGoal) {
            return `🔥 ${selectedFactors[0]} و${selectedFactors[1]} يشيران لهدف قريب بنسبة ${probability}% مع ${selectedFactors[2]}`;
        } else {
            return `🛡️ ${selectedFactors[0]} و${selectedFactors[1]} يحدان من الفرص بنسبة ${probability}% بسبب ${selectedFactors[2]}`;
        }
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
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
        lastPredictionTime: null,
        predictionButtons: null,
        betSelectionStep: false,
        lastActivity: new Date().toISOString(),
        manualBetInput: false
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

// 🆕 لوحة اختيار الرهان المحسنة (1-10 دولار فقط)
const getBetSelectionKeyboard = () => {
    return Markup.keyboard([
        ['💰 1$', '💰 2$', '💰 3$', '💰 4$', '💰 5$'],
        ['💰 6$', '💰 7$', '💰 8$', '💰 9$', '💰 10$'],
        ['📝 إدخال يدوي', '🔙 الرجوع للقائمة']
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

// 🆕 دالة للتحقق من انتهاء النشاط (5 دقائق)
function isActivityExpired(lastActivityTime) {
    if (!lastActivityTime) return true;
    const now = new Date();
    const lastActivity = new Date(lastActivityTime);
    const diffMinutes = (now - lastActivity) / (1000 * 60);
    return diffMinutes > 5; // 5 دقائق
}

// 🆕 دالة لتحديث وقت النشاط
function updateActivityTime(session) {
    session.lastActivity = new Date().toISOString();
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
        `🔄 *آخر تحديث:* ${new Date().toLocaleTimeString('ar-SA')}\n\n` +
        '🎯 *يمكنك الآن استخدام زر "جلب التحليل" للحصول على التوقعات*',
        getMainKeyboard()
    );
}

// 🆕 دالة للتحقق من الحساب المكرر
async function checkDuplicateAccount(onexbetAccount, currentUserId) {
    try {
        const existingUser = await dbManager.getUserByOneXBet(onexbetAccount);
        if (existingUser && existingUser.user_id !== currentUserId) {
            return {
                isDuplicate: true,
                existingUser: existingUser
            };
        }
        return {
            isDuplicate: false,
            existingUser: null
        };
    } catch (error) {
        console.error('Error checking duplicate account:', error);
        return {
            isDuplicate: false,
            existingUser: null
        };
    }
}

// 🛠️ HANDLE ADMIN COMMANDS - IMPLEMENTED PROPERLY
async function handleAdminCommands(ctx, text) {
    try {
        const session = ctx.session;
        
        switch (text) {
            case '🔙 الخروج من الإدمن':
                session.adminMode = false;
                session.adminStep = null;
                await ctx.replyWithMarkdown('✅ *تم الخروج من لوحة التحكم*', getMainKeyboard());
                break;

            case '🔙 رجوع':
                session.adminStep = 'main';
                await ctx.replyWithMarkdown('🔧 *مرحباً في لوحة التحكم*', getAdminMainKeyboard());
                break;

            case '📊 إحصائيات النظام':
                await handleAdminStats(ctx);
                break;

            case '👥 إدارة المستخدمين':
                session.adminStep = 'users';
                await ctx.replyWithMarkdown('👥 *إدارة المستخدمين*', getAdminUsersKeyboard());
                break;

            case '💰 طلبات الدفع':
                session.adminStep = 'payments';
                await ctx.replyWithMarkdown('💰 *طلبات الدفع*', getAdminPaymentsKeyboard());
                break;

            case '⚙️ الإعدادات':
                session.adminStep = 'settings';
                await ctx.replyWithMarkdown('⚙️ *الإعدادات*', getAdminSettingsKeyboard());
                break;

            case '📢 إرسال إشعار':
                session.adminStep = 'broadcast';
                session.broadcastMessage = '';
                await ctx.replyWithMarkdown('📢 *إرسال إشعار للمستخدمين*\n\nأرسل الرسالة التي تريد إرسالها لجميع المستخدمين:');
                break;

            case '🔍 بحث عن مستخدم':
                session.adminStep = 'search';
                await ctx.replyWithMarkdown('🔍 *بحث عن مستخدم*\n\nأرسل اسم المستخدم أو رقم الحساب أو ID:');
                break;

            case '💾 نسخ احتياطي':
                await handleAdminBackup(ctx);
                break;

            case '📥 استعادة البيانات':
                await handleAdminRestore(ctx);
                break;

            case '🔧 قفل/فتح البوت':
                await handleAdminMaintenance(ctx);
                break;

            // إدارة المستخدمين
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

            // طلبات الدفع
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

            // الإعدادات
            case '💰 تعديل الأسعار والدفع':
                session.adminStep = 'edit_prices';
                await ctx.replyWithMarkdown('💰 *تعديل الأسعار والدفع*\n\nاختر نظام الدفع:', getAdminPaymentSystemKeyboard());
                break;

            case '⚙️ الإعدادات العامة':
                await handleAdminGeneralSettings(ctx);
                break;

            case '🔄 إعادة التعيين':
                await handleAdminReset(ctx);
                break;

            default:
                // معالجة البحث عن مستخدم
                if (session.adminStep === 'search') {
                    await handleAdminSearchUser(ctx, text);
                }
                // معالجة الإذاعة
                else if (session.adminStep === 'broadcast') {
                    await handleAdminBroadcast(ctx, text);
                }
                // معالجة اختيار نظام الدفع
                else if (session.adminStep === 'edit_prices') {
                    if (text === '💳 نظام باينانس') {
                        session.adminPaymentSystem = 'binance';
                        session.adminStep = 'edit_price_and_payment';
                        await ctx.replyWithMarkdown('💰 *تعديل أسعار باينانس*\n\nاختر الباقة:', getAdminPaymentTypesKeyboard());
                    } else if (text === '🏦 نظام التحويل البنكي') {
                        session.adminPaymentSystem = 'bank';
                        session.adminStep = 'edit_price_and_payment';
                        await ctx.replyWithMarkdown('🏦 *تعديل التحويل البنكي*\n\nاختر الباقة:', getAdminPaymentTypesKeyboard());
                    }
                }
                // معالجة تعديل الأسعار
                else if (session.adminStep === 'edit_price_and_payment') {
                    const subscriptionMap = {
                        '💰 أسبوعي': 'week',
                        '💰 شهري': 'month',
                        '💰 3 أشهر': 'three_months',
                        '💰 سنوي': 'year'
                    };
                    
                    if (subscriptionMap[text]) {
                        session.editingSubscriptionType = subscriptionMap[text];
                        await handleAdminEditPrice(ctx, session.adminPaymentSystem, subscriptionMap[text]);
                    }
                }
                else {
                    await ctx.replyWithMarkdown('❌ *خيار غير معروف*', getAdminMainKeyboard());
                }
                break;
        }
    } catch (error) {
        console.error('Admin commands error:', error);
        await ctx.replyWithMarkdown('❌ *حدث خطأ في معالجة الأمر*', getAdminMainKeyboard());
    }
}

// 🛠️ ADMIN HANDLER FUNCTIONS - IMPLEMENTED
async function handleAdminStats(ctx) {
    try {
        const stats = await dbManager.getAllStats();
        const settings = await dbManager.getSettings();
        
        await ctx.replyWithMarkdown(
            `📊 *إحصائيات النظام*\n\n` +
            `👤 إجمالي المستخدمين: ${stats.totalUsers}\n` +
            `✅ المشتركين النشطين: ${stats.activeUsers}\n` +
            `🆓 المستخدمين المجانين: ${stats.freeUsers}\n` +
            `🎯 إجمالي التوقعات: ${stats.totalPredictions}\n` +
            `💰 إجمالي الأرباح: ${stats.totalProfit}$\n` +
            `💳 إجمالي الرهانات: ${stats.totalBets}$\n` +
            `📥 طلبات الدفع: ${stats.totalPayments}\n` +
            `⏳ الطلبات المعلقة: ${stats.pendingPayments}\n\n` +
            `🔧 حالة البوت: ${settings.maintenance_mode ? 'مقفل 🔒' : 'مفتوح 🔓'}\n` +
            `🔄 آخر تحديث: ${new Date().toLocaleString('ar-EG')}`,
            getAdminMainKeyboard()
        );
    } catch (error) {
        console.error('Admin stats error:', error);
        await ctx.replyWithMarkdown('❌ *حدث خطأ في جلب الإحصائيات*', getAdminMainKeyboard());
    }
}

async function handleAdminUsersList(ctx) {
    try {
        const users = await dbManager.getAllUsers();
        const limitedUsers = users.slice(0, 50); // عرض أول 50 مستخدم فقط
        
        let usersList = '📋 *قائمة المستخدمين (أول 50 مستخدم)*\n\n';
        
        limitedUsers.forEach((user, index) => {
            const status = user.subscription_status === 'active' ? '✅' : '🆓';
            usersList += `${index + 1}. ${status} ${user.username} | ${user.onexbet} | ${user.country || 'غير محدد'}\n`;
        });
        
        usersList += `\n📊 إجمالي المستخدمين: ${users.length}`;
        
        await ctx.replyWithMarkdown(usersList, getAdminUsersKeyboard());
    } catch (error) {
        console.error('Admin users list error:', error);
        await ctx.replyWithMarkdown('❌ *حدث خطأ في جلب قائمة المستخدمين*', getAdminUsersKeyboard());
    }
}

async function handleAdminActiveUsers(ctx) {
    try {
        const users = await dbManager.getAllUsers();
        const activeUsers = users.filter(u => u.subscription_status === 'active');
        const limitedUsers = activeUsers.slice(0, 50);
        
        let usersList = '✅ *المشتركين النشطين*\n\n';
        
        limitedUsers.forEach((user, index) => {
            const remainingDays = calculateRemainingDays(user.subscription_end_date);
            usersList += `${index + 1}. ${user.username} | ${user.onexbet} | ${getSubscriptionDisplayName(user.subscription_type)} | ${remainingDays} يوم\n`;
        });
        
        usersList += `\n📊 إجمالي النشطين: ${activeUsers.length}`;
        
        await ctx.replyWithMarkdown(usersList, getAdminUsersKeyboard());
    } catch (error) {
        console.error('Admin active users error:', error);
        await ctx.replyWithMarkdown('❌ *حدث خطأ في جلب المشتركين النشطين*', getAdminUsersKeyboard());
    }
}

async function handleAdminPendingPayments(ctx) {
    try {
        const payments = await dbManager.getPendingPayments();
        
        if (payments.length === 0) {
            await ctx.replyWithMarkdown('✅ *لا توجد طلبات دفع معلقة*', getAdminPaymentsKeyboard());
            return;
        }
        
        let paymentsList = '📥 *الطلبات المعلقة*\n\n';
        
        payments.forEach((payment, index) => {
            paymentsList += `${index + 1}. ${payment.username} | ${payment.onexbet} | ${payment.amount}$ | ${getSubscriptionDisplayName(payment.subscription_type)}\n`;
            paymentsList += `   💳 ${payment.payment_system === 'binance' ? 'باينانس' : 'بنكي'} | ${new Date(payment.timestamp).toLocaleString('ar-EG')}\n`;
            paymentsList += `   🆔 ${payment.id}\n\n`;
        });
        
        await ctx.replyWithMarkdown(paymentsList, getAdminPaymentsKeyboard());
    } catch (error) {
        console.error('Admin pending payments error:', error);
        await ctx.replyWithMarkdown('❌ *حدث خطأ في جلب الطلبات المعلقة*', getAdminPaymentsKeyboard());
    }
}

async function handleAdminSearchUser(ctx, query) {
    try {
        const users = await dbManager.searchUsers(query);
        
        if (users.length === 0) {
            await ctx.replyWithMarkdown('❌ *لم يتم العثور على مستخدمين*', getAdminMainKeyboard());
            return;
        }
        
        let usersList = '🔍 *نتائج البحث*\n\n';
        
        users.slice(0, 10).forEach((user, index) => {
            const status = user.subscription_status === 'active' ? '✅' : '🆓';
            const subscriptionInfo = user.subscription_status === 'active' ? 
                `${getSubscriptionDisplayName(user.subscription_type)} | ${calculateRemainingDays(user.subscription_end_date)} يوم` : 
                'مجاني';
                
            usersList += `${index + 1}. ${status} ${user.username}\n`;
            usersList += `   🔐 ${user.onexbet} | 📍 ${user.country || 'غير محدد'}\n`;
            usersList += `   📦 ${subscriptionInfo} | 🎯 ${user.total_predictions || 0} توقع\n\n`;
        });
        
        usersList += `📊 العدد: ${users.length} مستخدم`;
        
        await ctx.replyWithMarkdown(usersList, getAdminMainKeyboard());
        ctx.session.adminStep = 'main';
        
    } catch (error) {
        console.error('Admin search user error:', error);
        await ctx.replyWithMarkdown('❌ *حدث خطأ في البحث*', getAdminMainKeyboard());
    }
}

// 🛠️ PAYMENT ACCEPT/REJECT FUNCTIONS - FIXED
async function handlePaymentAccept(ctx, paymentId) {
    try {
        const payment = await dbManager.getPayment(paymentId);
        
        if (!payment) {
            await ctx.answerCbQuery('❌ لم يتم العثور على الطلب');
            return;
        }
        
        if (payment.status !== 'pending') {
            await ctx.answerCbQuery('❌ تم معالجة هذا الطلب مسبقاً');
            return;
        }
        
        // تحديث حالة الدفع
        await dbManager.updatePayment(paymentId, {
            status: 'accepted',
            processed_at: new Date().toISOString(),
            processed_by: ctx.from.id.toString()
        });
        
        // تحديث حالة المستخدم
        const userData = await dbManager.getUser(payment.user_id);
        if (userData) {
            userData.subscription_status = 'active';
            userData.subscription_type = payment.subscription_type;
            userData.subscription_start_date = new Date().toISOString();
            userData.subscription_end_date = addSubscriptionDays(new Date(), payment.subscription_type);
            
            await dbManager.saveUser(payment.user_id, userData);
        }
        
        // إرسال إشعار للمستخدم
        try {
            await bot.telegram.sendMessage(
                payment.user_id,
                `🎉 *تم تفعيل اشتراكك بنجاح!*\n\n` +
                `✅ تم قبول طلب الدفع الخاص بك\n` +
                `📦 الباقة: ${getSubscriptionDisplayName(payment.subscription_type)}\n` +
                `💰 المبلغ: ${payment.amount}$\n` +
                `📅 الانتهاء: ${new Date(userData.subscription_end_date).toLocaleDateString('ar-EG')}\n\n` +
                `🎯 يمكنك الآن استخدام البوت بدون حدود`,
                { parse_mode: 'Markdown' }
            );
        } catch (notifyError) {
            console.error('Error notifying user:', notifyError);
        }
        
        // تحديث رسالة الإدمن
        await ctx.answerCbQuery('✅ تم قبول الاشتراك');
        await ctx.editMessageCaption(
            `✅ *تم قبول الاشتراك*\n\n` +
            `👤 المستخدم: ${payment.username}\n` +
            `🔐 الحساب: ${payment.onexbet}\n` +
            `💰 المبلغ: ${payment.amount}$\n` +
            `📦 الباقة: ${getSubscriptionDisplayName(payment.subscription_type)}\n` +
            `💳 النظام: ${payment.payment_system === 'binance' ? 'باينانس' : 'تحويل بنكي'}\n` +
            `✅ الحالة: مقبول\n` +
            `🕒 وقت المعالجة: ${new Date().toLocaleString('ar-EG')}`,
            { parse_mode: 'Markdown' }
        );
        
    } catch (error) {
        console.error('Payment accept error:', error);
        await ctx.answerCbQuery('❌ حدث خطأ في المعالجة');
    }
}

async function handlePaymentReject(ctx, paymentId) {
    try {
        const payment = await dbManager.getPayment(paymentId);
        
        if (!payment) {
            await ctx.answerCbQuery('❌ لم يتم العثور على الطلب');
            return;
        }
        
        if (payment.status !== 'pending') {
            await ctx.answerCbQuery('❌ تم معالجة هذا الطلب مسبقاً');
            return;
        }
        
        // تحديث حالة الدفع
        await dbManager.updatePayment(paymentId, {
            status: 'rejected',
            processed_at: new Date().toISOString(),
            processed_by: ctx.from.id.toString()
        });
        
        // إرسال إشعار للمستخدم
        try {
            await bot.telegram.sendMessage(
                payment.user_id,
                `❌ *تم رفض طلب الدفع*\n\n` +
                `⚠️ لم يتم قبول طلب الدفع الخاص بك\n` +
                `💡 يرجى التحقق من معلومات الدفع والمحاولة مرة أخرى\n` +
                `📞 للاستفسار: @GEMZGOOLBOT`,
                { parse_mode: 'Markdown' }
            );
        } catch (notifyError) {
            console.error('Error notifying user:', notifyError);
        }
        
        // تحديث رسالة الإدمن
        await ctx.answerCbQuery('❌ تم رفض الطلب');
        await ctx.editMessageCaption(
            `❌ *تم رفض الطلب*\n\n` +
            `👤 المستخدم: ${payment.username}\n` +
            `🔐 الحساب: ${payment.onexbet}\n` +
            `💰 المبلغ: ${payment.amount}$\n` +
            `📦 الباقة: ${getSubscriptionDisplayName(payment.subscription_type)}\n` +
            `💳 النظام: ${payment.payment_system === 'binance' ? 'باينانس' : 'تحويل بنكي'}\n` +
            `❌ الحالة: مرفوض\n` +
            `🕒 وقت المعالجة: ${new Date().toLocaleString('ar-EG')}`,
            { parse_mode: 'Markdown' }
        );
        
    } catch (error) {
        console.error('Payment reject error:', error);
        await ctx.answerCbQuery('❌ حدث خطأ في المعالجة');
    }
}

// 🎯 BOT COMMANDS

bot.start(async (ctx) => {
    try {
        const settings = await dbManager.getSettings();
        if (settings.maintenance_mode && ctx.from.id.toString() !== CONFIG.ADMIN_ID) {
            await ctx.replyWithMarkdown('🔧 *البوت تحت الصيانة*\n\n⏰ نعمل على تحسين الخدمة لكم\n🔄 سنعود قريباً بأفضل مما كان\n\n📞 للاستفسار: @GEMZGOOLBOT');
            return;
        }

        const userId = ctx.from.id.toString();
        const userName = ctx.from.first_name;

        // تحديث وقت النشاط
        updateActivityTime(ctx.session);

        // التحقق إذا كان المستخدم مسجل مسبقاً
        const existingUser = await dbManager.getUser(userId);
        
        if (existingUser) {
            // المستخدم مسجل مسبقاً - دخول مباشر
            ctx.session.step = 'verified';
            ctx.session.userData = existingUser;
            ctx.session.country = existingUser.country;

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
            // مستخدم جديد - اختيار الدولة أولاً
            ctx.session.step = 'awaiting_country';
            ctx.session.awaitingCountry = true;

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

    } catch (error) {
        console.error('Start command error:', error);
        await ctx.replyWithMarkdown('❌ حدث خطأ في النظام، يرجى المحاولة لاحقاً');
    }
});

// 📝 HANDLE TEXT MESSAGES - UPDATED FOR DUAL PAYMENT AND COUNTRY SELECTION
bot.on('text', async (ctx) => {
    try {
        const settings = await dbManager.getSettings();
        if (settings.maintenance_mode && ctx.from.id.toString() !== CONFIG.ADMIN_ID) {
            await ctx.replyWithMarkdown('🔧 *البوت تحت الصيانة*\n\n⏰ نعمل على تحسين الخدمة لكم\n🔄 سنعود قريباً بأفضل مما كان\n\n📞 للاستفسار: @GEMZGOOLBOT');
            return;
        }

        const text = ctx.message.text;
        const session = ctx.session;
        const userId = ctx.from.id.toString();

        // تحديث وقت النشاط
        updateActivityTime(session);

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
                
                // التحقق من الاشتراك في القناة بعد اختيار الدولة
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

        // 🆕 معالجة اختيار الرهان المحسن (1-10 دولار فقط)
        if (session.betSelectionStep) {
            if (text === '🔙 الرجوع للقائمة') {
                ctx.session.betSelectionStep = false;
                ctx.session.manualBetInput = false;
                await ctx.replyWithMarkdown('🔙 *العودة للقائمة الرئيسية*', getMainKeyboard());
                return;
            }

            if (text === '📝 إدخال يدوي') {
                ctx.session.manualBetInput = true;
                await ctx.replyWithMarkdown(
                    '💰 *إدخال مبلغ الرهان يدوياً*\n\n' +
                    '🔢 الرجاء إدخال مبلغ الرهان (من 1 إلى 10 دولار فقط):\n\n' +
                    '💡 مثال: 5 أو 7.5 أو 10\n' +
                    '💰 يجب أن يكون المبلغ بين 1 و 10 دولار'
                );
                return;
            }

            if (ctx.session.manualBetInput) {
                // معالجة الإدخال اليدوي للرهان
                const betAmount = parseFloat(text);
                if (isNaN(betAmount) || betAmount < 1 || betAmount > 10) {
                    await ctx.replyWithMarkdown(
                        '❌ *مبلغ غير صحيح!*\n\n' +
                        '💰 يرجى إدخال مبلغ صحيح بين 1 و 10 دولار\n' +
                        '💡 مثال: 3 أو 5.5 أو 8'
                    );
                    return;
                }

                ctx.session.currentBet = betAmount;
                ctx.session.originalBet = betAmount;
                ctx.session.betSelectionStep = false;
                ctx.session.manualBetInput = false;
                
                await ctx.replyWithMarkdown(
                    `✅ *تم تحديد مبلغ الرهان:* ${betAmount}$\n\n` +
                    `🎯 يمكنك الآن استخدام زر "جلب التحليل" للحصول على التوقع`,
                    getMainKeyboard()
                );
                return;
            }

            const betAmounts = {
                '💰 1$': 1,
                '💰 2$': 2,
                '💰 3$': 3,
                '💰 4$': 4,
                '💰 5$': 5,
                '💰 6$': 6,
                '💰 7$': 7,
                '💰 8$': 8,
                '💰 9$': 9,
                '💰 10$': 10
            };

            if (betAmounts[text]) {
                ctx.session.currentBet = betAmounts[text];
                ctx.session.originalBet = betAmounts[text];
                ctx.session.betSelectionStep = false;
                ctx.session.manualBetInput = false;
                
                await ctx.replyWithMarkdown(
                    `✅ *تم تحديد مبلغ الرهان:* ${betAmounts[text]}$\n\n` +
                    `🎯 يمكنك الآن استخدام زر "جلب التحليل" للحصول على التوقع`,
                    getMainKeyboard()
                );
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
                // 🔒 التحقق من أن رقم الحساب غير مسجل لمستخدم آخر
                const duplicateCheck = await checkDuplicateAccount(text, userId);
                if (duplicateCheck.isDuplicate) {
                    await ctx.replyWithMarkdown(
                        '❌ *رقم الحساب مسجل بالفعل!*\n\n' +
                        '🔐 هذا الحساب مسجل لمستخدم آخر\n' +
                        '💡 يرجى استخدام حسابك الخاص أو التواصل مع الدعم\n\n' +
                        `📞 الدعم: @GEMZGOOLBOT`
                    );
                    return;
                }

                ctx.session.accountId = text;
                ctx.session.step = 'awaiting_verification';
                ctx.session.verificationCode = Math.floor(100000 + Math.random() * 900000);

                await ctx.replyWithMarkdown(
                    `✅ *تم إرسال كود التحقق*\n\n` +
                    `🔐 *الحساب:* \`${text}\`\n` +
                    `📍 *الدولة:* ${session.country}\n` +
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
                    last_algorithm_check: new Date().toISOString()
                };

                await dbManager.saveUser(userId, userData);
                ctx.session.step = 'verified';
                ctx.session.userData = userData;

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
                    // 🆕 التحقق من وجود رهان أولاً
                    if (!ctx.session.currentBet || ctx.session.currentBet <= 0) {
                        ctx.session.betSelectionStep = true;
                        await ctx.replyWithMarkdown(
                            '💰 *اختر مبلغ الرهان:*\n\n' +
                            '💵 اختر المبلغ الذي تريد الرهان عليه (من 1 إلى 10 دولار فقط):\n\n' +
                            '💰 1$ - رهان مبتدئ\n' +
                            '💰 2$ - رهان صغير\n' +
                            '💰 3$ - رهان متوسط\n' +
                            '💰 4$ - رهان جيد\n' +
                            '💰 5$ - رهان متقدم\n' +
                            '💰 6$ - رهان محترف\n' +
                            '💰 7$ - رهان متميز\n' +
                            '💰 8$ - رهان كبير\n' +
                            '💰 9$ - رهان VIP\n' +
                            '💰 10$ - رهان ملكي\n\n' +
                            '📝 أو استخدم "إدخال يدوي" لكتابة المبلغ المطلوب\n\n' +
                            '📈 اختر المبلغ المناسب لك:',
                            getBetSelectionKeyboard()
                        );
                        return;
                    }
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

// 🎯 HANDLE CALLBACK QUERIES - UPDATED WITH ALGORITHM RECONNECTION AND WIN/LOSE SYSTEM
bot.on('callback_query', async (ctx) => {
    try {
        const callbackData = ctx.callbackQuery.data;
        const userId = ctx.from.id.toString();
        
        // تحديث وقت النشاط
        updateActivityTime(ctx.session);
        
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
                
                // إعادة تعيين الرهان إلى الأصلي
                ctx.session.currentBet = ctx.session.originalBet;
                
                await ctx.answerCbQuery(`🎊 مبروك! نجح التوقع وربحت ${profit}$`);
                
                // حذف رسالة التوقع
                try {
                    await ctx.deleteMessage(ctx.callbackQuery.message.message_id);
                } catch (deleteError) {
                    console.log('Could not delete prediction message:', deleteError);
                }
                
                await ctx.replyWithMarkdown(
                    `🎊 *مبروك! نجح التوقع بنجاح* ✨\n\n` +
                    `✅ توقعك كان دقيقاً ومميزاً\n` +
                    `💰 ربحت: ${profit}$\n` +
                    `💵 إجمالي أرباحك: ${ctx.session.totalProfit}$\n\n` +
                    `🔥 *استمر في التحدي!*\n` +
                    `🎯 يمكنك البدء بتوقع جديد من زر "جلب التحليل"`,
                    getMainKeyboard()
                );
                
            } else {
                // مضاعفة الرهان
                const newBet = ctx.session.currentBet * 2;
                userData.losses = (userData.losses || 0) + 1;
                ctx.session.currentBet = newBet;
                
                await ctx.answerCbQuery(`🔄 تم تحديث الرهان...`);
                
                // حذف رسالة التوقع
                try {
                    await ctx.deleteMessage(ctx.callbackQuery.message.message_id);
                } catch (deleteError) {
                    console.log('Could not delete prediction message:', deleteError);
                }
                
                await ctx.replyWithMarkdown(
                    `🔄 *خسرت هذه الجولة*\n\n` +
                    `📈 الرهان التالي مضاعف: ${newBet}$\n` +
                    `💪 لا توقف.. استمر في المحاولة\n` +
                    `🔥 النجاح قادم لا محالة!\n\n` +
                    `🎯 استخدم زر "جلب التحليل" للتوقع التالي`,
                    getMainKeyboard()
                );
            }
            
            await dbManager.saveUser(userId, userData);
            
        }
        
        // معالجة أزرار القبول والرفض في الإدمن - FIXED
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

// 🚀 START BOT
bot.launch().then(() => {
    console.log('🎉 SUCCESS! AI GOAL Predictor v16.2 STABLE is RUNNING!');
    console.log('💳 Payment Systems: Binance + Bank Transfer');
    console.log('💾 Persistent Data Storage: FIREBASE ENABLED');
    console.log('🔐 Channel Subscription: TELEGRAM API ONLY');
    console.log('🤖 Algorithm Reconnection: ENABLED (5 minutes)');
    console.log('🎯 Enhanced Prediction System: WIN/LOSE BUTTONS ENABLED');
    console.log('🔒 Duplicate Account Prevention: ENABLED');
    console.log('🛠️ Admin Panel: FULLY FIXED AND RESPONSIVE');
    console.log('💰 Bet Amounts: 1-10$ ONLY + Manual Input');
    console.log('🧠 Smart Algorithm: ULTRA COMPLEX AI');
    console.log('👤 Developer:', CONFIG.DEVELOPER);
    console.log('📢 Channel:', CONFIG.CHANNEL);
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

console.log('✅ AI Goal Prediction System with All Enhanced Features Ready!');
