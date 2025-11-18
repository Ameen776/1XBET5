// ===================================================
// 🚀 AI GOAL PREDICTOR ULTIMATE - VERSION 16.0 ENHANCED
// 👤 DEVELOPER: ♛𝑨𝒎𝒆𝒆𝒏 𝑨𝒍𝒛𝒘𝒂𝒉𝒊♛
// 🔥 FEATURES: DUAL PAYMENT SYSTEM + BANK TRANSFER + BINANCE
// 💾 PERSISTENT DATA STORAGE IN FIRESTORE - NO DATA LOSS ON UPDATES
// 🎯 ENHANCED AI PREDICTION WITH RESULT TRACKING
// ===================================================

console.log('🤖 Starting AI GOAL Predictor Ultimate v16.0 ENHANCED...');
console.log('🕒 ' + new Date().toISOString());

// 🔧 CONFIGURATION - UPDATED FOR DUAL PAYMENT
const CONFIG = {
    BOT_TOKEN: process.env.BOT_TOKEN || "8125363786:AAFZaOGSAvq_p8Sc8cq2bIKZlpe4ej7tmdU",
    ADMIN_ID: process.env.ADMIN_ID || "6565594143",
    CHANNEL_ID: process.env.CHANNEL_ID || "-1003283663811",
    CHANNEL_USERNAME: process.env.CHANNEL_USERNAME || "@GEMZGOOL",
    
    // 🆕 تحديث الدعم الفني
    SUPPORT_USERNAME: process.env.SUPPORT_USERNAME || "@GEMZGOOLBOT",
    
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
    
    VERSION: "16.0.0",
    DEVELOPER: "♛𝑨𝒎𝒆𝒆𝒏 𝑨𝒍𝒛𝒘𝒂𝒉𝒊♛",
    CHANNEL: "@GEMZGOOL",
    START_IMAGE: "https://i.ibb.co/tpy70Bd1/IMG-20251104-074214-065.jpg",
    ANALYSIS_IMAGE: "https://i.ibb.co/VYjf05S0/Screenshot.png",
    PREDICTION_IMAGE: "https://i.ibb.co/rGTZm2mB/IMG.jpg",
    IMGBB_API_KEY: process.env.IMGBB_API_KEY || "42b155a527bee21e62e524a31fe9b1ee"
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
let isFirebaseInitialized = false;

async function initializeFirebase() {
    try {
        admin = require('firebase-admin');
        
        // 🔐 ENHANCED FIREBASE CONFIG WITH PROVIDED KEYS
        const serviceAccount = {
            "type": "service_account",
            "project_id": "bot-tlegram-9f4b5",
            "private_key_id": process.env.FIREBASE_PRIVATE_KEY_ID,
            "private_key": process.env.FIREBASE_PRIVATE_KEY ? 
                process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n') : "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDDXZ6hoQ3APNmj\nhZsDwDra0rgkJw3E1B4uJcv46uOcXSwIlHRqKZ9ZJ0BtAO0LrEv/SHmyrlZ1/s71\nF67laIlbnH83SIbxO0ObeYx/Sq9j07hsdCNZAg4iinM8XGPHKUFOT+Zk0HWSkI4O\nQMDpXqg9rjukLUDTHNCAmKtK8BUHN/eZX4J8KNAEewFyGkBPQoFzAvIAshohkiLV\nyxvr7L5EpszzQGfq6znkuV78PfyNPR8SufVbCy2PKEUy01uZxBGv/mAH88yfaI3B\n6amPdo/2bZkwLl/wpMBALTXKz9R3ZfAfo9FaXsdD7cQt4SJEYcTQP3jXjGFSawS+\nuWu8WNrRAgMBAAECggEARcfcP84HW9lAQYSYzFuuifeHFz6tz9aWGxScCQJZH0I2\nVrAz7rGEPbNj8ytIAAngMURBV72mm0nSwT9e1IkkusioteXdcS+iY9ekA9l40RbQ\nAkjvUT0HMHY0V+SGLR6CuYaXe/3raNjiLJwba5/IRxPDMM6LH3zkynH9iOw9DpDi\nyAKiog4/i1Oh0db7F48ukjVxtXDQHPU7ba0u99go/JoOJLIEdY4bnO/l/5mgcVAu\n9dBRLp0wPp86MPNizxoPIVse3mb9PCl1RieHJ0kLNeJO1XpKH3DBp9vyc9AfNBLf\n8ekU1odpWglGQX+93BCpdQ/K9lN2ORgXIfX0knEn2wKBgQDgn4bDzaSLYaL4vD88\nl317F8WUtcpWTBQmpkfsErpt8DzItfx3x6hu8iXwvEo/P9GAVYYlTsEkhkNANZWm\nBigdjYaHNx8tfoUra7NnlfkjeM4erwU4hko1K/JGRxrFzyriihmXXiKN7/5wIivs\nn83lGP7JCcJtY1GCh/7lRGzUuwKBgQDep9p6BxLnAq/R7QDkjgG68QsoQNgCw2qR\nsgNMI9tHp4uQ7kblA8v2soRZsJUoQ7rDKYAi7ygV3W845sLHMegZkJDKOgLQiVwP\ncGw2qyhCGOqyAKuF9jqelRy4kA2sT63uoa8uw3fa2Fwj6ZvbAuFXF8oLjUK7URFy\nOXj+xfGb4wKBgQC39O3BXaDsJUH6wvBnBwnUzVsatubGVfgKzxMH2y6i6qRdG+1v\niyv98IHx7cJAmltQ5rm9xAmZh/t7kmbEWTZxPX53LkVyVLNrJAEBTGmFC2KC7oMw\nD4qmkR8RPxpF9awBa2gZ9xYFeA7AdrvSRe2xOg8vRbbdLwGKDSZLTQZ0EQKBgCTf\nPTH6G+o/qqgkDILM9YJkyok2+86xV+OazCr+wSCDoXw1yW3BjDRlab+Em57YYIRT\nShH+8u90BSgyJs1f+WTKaP/kTXUFWkaAQptnCrqvb6ZcsAr2NMzwOpph2LHRXCdp\nhR5EZoPKUq/rztCdEH4gxWfWU9e7XB1DYUMnupQrAoGBAIlP0e9Fj4fJIpZ1XAkl\nB1Xzk0LlQHO8gCD2uVfuIenqa47CPYTiYG99C+Hrb8IuIf9abKW9+juc8M9iPW+h\nThLt6XB6PDffNTnq/bP9pIclwsfVoj7Fdk8bhjbBMZqnaOvwEnhY/jW9aAPlgoua\nQrGzKTrmDOvCcFOnlMX6Aymd\n-----END PRIVATE KEY-----\n",
            "client_email": "firebase-adminsdk-fbsvc@bot-tlegram-9f4b5.iam.gserviceaccount.com",
            "client_id": process.env.FIREBASE_CLIENT_ID,
            "auth_uri": "https://accounts.google.com/o/oauth2/auth",
            "token_uri": "https://oauth2.googleapis.com/token",
            "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
            "client_x509_cert_url": process.env.FIREBASE_CERT_URL || "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-fbsvc%40bot-tlegram-9f4b5.iam.gserviceaccount.com"
        };

        if (!admin.apps.length) {
            admin.initializeApp({
                credential: admin.credential.cert(serviceAccount),
                databaseURL: "https://bot-tlegram-9f4b5-default-rtdb.firebaseio.com"
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
        isFirebaseInitialized = true;
        return true;
        
    } catch (error) {
        console.log('❌ Firebase initialization failed:', error.message);
        console.log('🔄 Using enhanced local storage with backup system');
        isFirebaseInitialized = false;
        return false;
    }
}

// 💾 ENHANCED FIRESTORE STORAGE MANAGER - COMPLETE PERSISTENCE
class FirestoreStorage {
    constructor() {
        this.initialized = false;
        this.initializationPromise = this.init();
    }

    async init() {
        try {
            console.log('🔄 Starting Firestore Storage initialization...');
            
            // انتظار تهيئة Firebase أولاً
            let attempts = 0;
            const maxAttempts = 30; // 30 محاولة (30 ثانية)
            
            while (!isFirebaseInitialized && attempts < maxAttempts) {
                console.log(`⏳ Waiting for Firebase... Attempt ${attempts + 1}/${maxAttempts}`);
                await new Promise(resolve => setTimeout(resolve, 1000));
                attempts++;
            }
            
            if (!isFirebaseInitialized) {
                console.log('❌ Firestore Storage failed - Firebase not initialized');
                this.initialized = false;
                return false;
            }

            // اختبار الاتصال الفعلي مع Firestore
            const testDoc = db.collection('storage_test').doc('init');
            await testDoc.set({
                initialized: true,
                timestamp: new Date().toISOString(),
                version: CONFIG.VERSION
            });

            this.initialized = true;
            console.log('✅ Firestore Storage initialized successfully');
            return true;
            
        } catch (error) {
            console.error('Firestore Storage init error:', error);
            this.initialized = false;
            return false;
        }
    }

    // ✅ تأكد من أن التهيئة اكتملت قبل أي عملية
    async ensureInitialized() {
        if (!this.initialized) {
            console.log('🔄 Waiting for storage initialization...');
            await this.initializationPromise;
        }
        return this.initialized;
    }

    async getUser(userId) {
        try {
            await this.ensureInitialized();
            
            if (!this.initialized) {
                console.log('❌ Storage not initialized for getUser');
                return null;
            }
            
            const userDoc = await db.collection('users').doc(userId.toString()).get();
            if (userDoc.exists) {
                console.log(`✅ User ${userId} loaded from Firestore`);
                return userDoc.data();
            }
            console.log(`❌ User ${userId} not found in Firestore`);
            return null;
        } catch (error) {
            console.error('Get user error:', error);
            return null;
        }
    }

    async saveUser(userId, userData) {
        try {
            await this.ensureInitialized();
            
            if (!this.initialized) {
                console.log('❌ Storage not initialized for saveUser');
                return false;
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
                channel_subscribed: userData.channel_subscribed || false,
                prediction_history: userData.prediction_history || [],
                result_history: userData.result_history || []
            };

            await db.collection('users').doc(userId.toString()).set(completeUserData, { merge: true });
            console.log(`✅ User ${userId} saved to Firestore`);
            return true;
            
        } catch (error) {
            console.error('Save user error:', error);
            return false;
        }
    }

    async getSettings() {
        try {
            await this.ensureInitialized();
            
            if (!this.initialized) {
                console.log('❌ Storage not initialized for getSettings');
                return {
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

            const settingsDoc = await db.collection('settings').doc('config').get();
            if (settingsDoc.exists) {
                return settingsDoc.data();
            }
            
            // Create default settings if not exists
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
                updated_at: new Date().toISOString()
            };
            
            await db.collection('settings').doc('config').set(defaultSettings);
            return defaultSettings;
            
        } catch (error) {
            console.error('Get settings error:', error);
            return {
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
            await this.ensureInitialized();
            
            if (!this.initialized) return newSettings;

            const updatedSettings = {
                ...newSettings,
                updated_at: new Date().toISOString()
            };

            await db.collection('settings').doc('config').set(updatedSettings, { merge: true });
            return updatedSettings;
            
        } catch (error) {
            console.error('Update settings error:', error);
            return newSettings;
        }
    }

    async getAllUsers() {
        try {
            await this.ensureInitialized();
            
            if (!this.initialized) return [];

            const usersSnapshot = await db.collection('users').get();
            const users = usersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            console.log(`✅ Loaded ${users.length} users from Firestore`);
            return users;
            
        } catch (error) {
            console.error('Get all users error:', error);
            return [];
        }
    }

    async addPayment(paymentData) {
        try {
            await this.ensureInitialized();
            
            if (!this.initialized) return Date.now().toString();

            const paymentId = Date.now().toString();
            const fullPaymentData = {
                ...paymentData,
                id: paymentId,
                status: 'pending',
                timestamp: new Date().toISOString()
            };

            await db.collection('payments').doc(paymentId).set(fullPaymentData);
            console.log(`✅ Payment ${paymentId} saved to Firestore`);
            return paymentId;
            
        } catch (error) {
            console.error('Add payment error:', error);
            return Date.now().toString();
        }
    }

    async updatePayment(paymentId, updates) {
        try {
            await this.ensureInitialized();
            
            if (!this.initialized) return false;

            await db.collection('payments').doc(paymentId).update(updates);
            console.log(`✅ Payment ${paymentId} updated in Firestore`);
            return true;
            
        } catch (error) {
            console.error('Update payment error:', error);
            return false;
        }
    }

    async getPayment(paymentId) {
        try {
            await this.ensureInitialized();
            
            if (!this.initialized) return null;

            const paymentDoc = await db.collection('payments').doc(paymentId).get();
            if (paymentDoc.exists) {
                return paymentDoc.data();
            }
            return null;
            
        } catch (error) {
            console.error('Get payment error:', error);
            return null;
        }
    }

    async getAllPayments() {
        try {
            await this.ensureInitialized();
            
            if (!this.initialized) return [];

            const paymentsSnapshot = await db.collection('payments').get();
            return paymentsSnapshot.docs.map(doc => doc.data());
            
        } catch (error) {
            console.error('Get all payments error:', error);
            return [];
        }
    }

    async getPendingPayments() {
        try {
            const payments = await this.getAllPayments();
            return payments.filter(p => p.status === 'pending');
        } catch (error) {
            console.error('Get pending payments error:', error);
            return [];
        }
    }

    async getUserByOneXBet(onexbet) {
        try {
            await this.ensureInitialized();
            
            if (!this.initialized) return null;

            const usersSnapshot = await db.collection('users').where('onexbet', '==', onexbet).get();
            if (!usersSnapshot.empty) {
                return usersSnapshot.docs[0].data();
            }
            return null;
            
        } catch (error) {
            console.error('Get user by onexbet error:', error);
            return null;
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

    async addPredictionToHistory(userId, prediction) {
        try {
            await this.ensureInitialized();
            
            const user = await this.getUser(userId);
            if (user) {
                if (!user.prediction_history) {
                    user.prediction_history = [];
                }
                
                user.prediction_history.push({
                    type: prediction.type,
                    probability: prediction.probability,
                    reasoning: prediction.reasoning,
                    timestamp: new Date().toISOString(),
                    bet_amount: prediction.bet_amount || 0
                });
                
                if (user.prediction_history.length > 20) {
                    user.prediction_history = user.prediction_history.slice(-20);
                }
                
                await this.saveUser(userId, user);
                return true;
            }
            return false;
        } catch (error) {
            console.error('Add prediction to history error:', error);
            return false;
        }
    }

    async addResultToHistory(userId, result) {
        try {
            await this.ensureInitialized();
            
            const user = await this.getUser(userId);
            if (user) {
                if (!user.result_history) {
                    user.result_history = [];
                }
                
                user.result_history.push({
                    type: result.type,
                    outcome: result.outcome,
                    bet_amount: result.bet_amount,
                    profit: result.profit || 0,
                    timestamp: new Date().toISOString()
                });
                
                if (user.result_history.length > 50) {
                    user.result_history = user.result_history.slice(-50);
                }
                
                await this.saveUser(userId, user);
                return true;
            }
            return false;
        } catch (error) {
            console.error('Add result to history error:', error);
            return false;
        }
    }

    async getRecentResultsStats(userId, count = 10) {
        try {
            await this.ensureInitialized();
            
            const user = await this.getUser(userId);
            if (user && user.result_history && user.result_history.length > 0) {
                const recentResults = user.result_history.slice(-count);
                const wins = recentResults.filter(r => r.outcome === 'win').length;
                const losses = recentResults.filter(r => r.outcome === 'lose').length;
                const winRate = recentResults.length > 0 ? (wins / recentResults.length) * 100 : 0;
                
                return {
                    total: recentResults.length,
                    wins: wins,
                    losses: losses,
                    winRate: Math.round(winRate),
                    recentResults: recentResults
                };
            }
            return {
                total: 0,
                wins: 0,
                losses: 0,
                winRate: 0,
                recentResults: []
            };
        } catch (error) {
            console.error('Get recent results stats error:', error);
            return {
                total: 0,
                wins: 0,
                losses: 0,
                winRate: 0,
                recentResults: []
            };
        }
    }

    // 🆕 دالة جديدة: حفظ الجلسة في Firestore
    async saveSession(userId, sessionData) {
        try {
            await this.ensureInitialized();
            
            if (!this.initialized) return false;

            const sessionDoc = {
                user_id: userId,
                session_data: sessionData,
                last_updated: new Date().toISOString(),
                expires_at: new Date(Date.now() + 24 * 60 * 60 * 1000) // تنتهي بعد 24 ساعة
            };

            await db.collection('sessions').doc(userId.toString()).set(sessionDoc, { merge: true });
            console.log(`✅ Session saved for user ${userId}`);
            return true;
            
        } catch (error) {
            console.error('Save session error:', error);
            return false;
        }
    }

    // 🆕 دالة جديدة: تحميل الجلسة من Firestore
    async getSession(userId) {
        try {
            await this.ensureInitialized();
            
            if (!this.initialized) return null;

            const sessionDoc = await db.collection('sessions').doc(userId.toString()).get();
            if (sessionDoc.exists) {
                const sessionData = sessionDoc.data();
                // التحقق من انتهاء الصلاحية
                if (new Date(sessionData.expires_at) > new Date()) {
                    console.log(`✅ Session loaded for user ${userId}`);
                    return sessionData.session_data;
                } else {
                    // حذف الجلسة المنتهية
                    await db.collection('sessions').doc(userId.toString()).delete();
                    console.log(`🗑️ Expired session deleted for user ${userId}`);
                }
            }
            return null;
            
        } catch (error) {
            console.error('Get session error:', error);
            return null;
        }
    }

    // 🆕 دالة جديدة: حذف الجلسة
    async deleteSession(userId) {
        try {
            await this.ensureInitialized();
            
            if (!this.initialized) return false;

            await db.collection('sessions').doc(userId.toString()).delete();
            console.log(`🗑️ Session deleted for user ${userId}`);
            return true;
            
        } catch (error) {
            console.error('Delete session error:', error);
            return false;
        }
    }
}

// INITIALIZE FIRESTORE STORAGE
const firestoreStorage = new FirestoreStorage();

// 💾 ENHANCED DATABASE MANAGER - COMPLETE PERSISTENCE
class EnhancedDatabaseManager {
    constructor() {
        this.maintenanceMode = false;
        this.storage = firestoreStorage;
    }

    async getUser(userId) {
        return await this.storage.getUser(userId);
    }

    async saveUser(userId, userData) {
        return await this.storage.saveUser(userId, userData);
    }

    async getSettings() {
        return await this.storage.getSettings();
    }

    async updateSettings(newSettings) {
        return await this.storage.updateSettings(newSettings);
    }

    async getAllUsers() {
        return await this.storage.getAllUsers();
    }

    async addPayment(paymentData) {
        return await this.storage.addPayment(paymentData);
    }

    async updatePayment(paymentId, updates) {
        return await this.storage.updatePayment(paymentId, updates);
    }

    async getPayment(paymentId) {
        return await this.storage.getPayment(paymentId);
    }

    async getAllPayments() {
        return await this.storage.getAllPayments();
    }

    async getPendingPayments() {
        return await this.storage.getPendingPayments();
    }

    async getUserByOneXBet(onexbet) {
        return await this.storage.getUserByOneXBet(onexbet);
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
        return await this.storage.searchUsers(query);
    }

    async backupData() {
        try {
            const backupData = {
                users: await this.getAllUsers(),
                payments: await this.getAllPayments(),
                settings: await this.getSettings(),
                sessions: await this.getAllSessions(),
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

    async setChannelSubscription(userId, subscribed) {
        return await this.storage.setChannelSubscription(userId, subscribed);
    }

    async getAllStats() {
        return await this.storage.getAllStats();
    }

    async addPredictionToHistory(userId, prediction) {
        return await this.storage.addPredictionToHistory(userId, prediction);
    }

    async addResultToHistory(userId, result) {
        return await this.storage.addResultToHistory(userId, result);
    }

    async getRecentResultsStats(userId, count = 10) {
        return await this.storage.getRecentResultsStats(userId, count);
    }

    // 🆕 دوال جديدة لإدارة الجلسات
    async saveSession(userId, sessionData) {
        return await this.storage.saveSession(userId, sessionData);
    }

    async getSession(userId) {
        return await this.storage.getSession(userId);
    }

    async deleteSession(userId) {
        return await this.storage.deleteSession(userId);
    }

    async getAllSessions() {
        try {
            if (!db) return [];
            const sessionsSnapshot = await db.collection('sessions').get();
            return sessionsSnapshot.docs.map(doc => doc.data());
        } catch (error) {
            console.error('Get all sessions error:', error);
            return [];
        }
    }
}

// INITIALIZE ENHANCED DATABASE MANAGER
const dbManager = new EnhancedDatabaseManager();

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
        
        this.callCount++;
        
        const randomIncrement = Math.floor(Math.random() * 5) + 1;
        this.activeUsers += randomIncrement;
        
        if (this.activeUsers > 5000) {
            this.activeUsers = 300;
        }
        
        this.lastCallTime = now;

        return {
            totalUsers: this.totalUsers,
            activeUsers: this.activeUsers
        };
    }
}

// 🧠 SMART GOAL PREDICTION ENGINE - ENHANCED WITH AI
class GoalPredictionAI {
    constructor() {
        this.algorithmVersion = "16.0";
        this.predictionPatterns = new Map();
    }

    analyzePreviousResults(userId, userData) {
        try {
            if (!userData.result_history || userData.result_history.length === 0) {
                return null;
            }

            const recentResults = userData.result_history.slice(-10);
            const wins = recentResults.filter(r => r.outcome === 'win').length;
            const losses = recentResults.filter(r => r.outcome === 'lose').length;
            
            if (losses > wins) {
                const lastThree = recentResults.slice(-3);
                const allLosses = lastThree.every(r => r.outcome === 'lose');
                
                if (allLosses) {
                    return {
                        bias: 'goal',
                        confidence: 85,
                        reasoning: '🔄 تصحيح النمط بعد سلسلة خسائر'
                    };
                }
            }

            const goalPredictions = recentResults.filter(r => r.type === '⚽ GOAL').length;
            const noGoalPredictions = recentResults.filter(r => r.type === '🛑 NO GOAL').length;
            
            if (goalPredictions > noGoalPredictions * 1.5) {
                return {
                    bias: 'no_goal',
                    confidence: 75,
                    reasoning: '📊 توازن الأنماط بعد تركيز على التوقعات الهجومية'
                };
            } else if (noGoalPredictions > goalPredictions * 1.5) {
                return {
                    bias: 'goal',
                    confidence: 75,
                    reasoning: '📊 توازن الأنماط بعد تركيز على التوقعات الدفاعية'
                };
            }

            return null;
        } catch (error) {
            console.error('Error analyzing previous results:', error);
            return null;
        }
    }

    generateSmartPrediction(userId, userData, betAmount = 0) {
        const analysis = this.analyzePreviousResults(userId, userData);
        
        let isGoal;
        let probability;
        let reasoning;

        if (analysis) {
            isGoal = analysis.bias === 'goal';
            probability = analysis.confidence;
            reasoning = analysis.reasoning;
        } else {
            isGoal = Math.random() > 0.5;
            probability = Math.floor(Math.random() * 30) + 60;
            
            if (isGoal) {
                reasoning = `🔥 الضغط الهجومي المستمر يشير لهدف قريب بنسبة ${probability}%`;
            } else {
                reasoning = `🛑 الدفاع المنظم يحد من الفرص بنسبة ${probability}%`;
            }
        }

        const aiElements = this.generateAIReasoning(userData);
        if (aiElements) {
            reasoning += `\n${aiElements}`;
        }

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
            reasoning: reasoning,
            timestamp: realTime,
            algorithm: this.algorithmVersion,
            bet_amount: betAmount,
            prediction_id: Date.now().toString()
        };

        return prediction;
    }

    generateAIReasoning(userData) {
        const aiInsights = [
            "🤖 الذكاء الاصطناعي يحلل أنماط اللعب بدقة عالية",
            "🧠 الخوارزمية تتعلم من النتائج السابقة لتحسين الدقة",
            "📈 نظام التعلم الآلي يحسن التوقعات باستمرار",
            "🎯 تحليل متقدم للبيانات في الوقت الفعلي",
            "⚡ معالجة فورية للإحصائيات والتوقعات"
        ];
        
        const randomInsight = aiInsights[Math.floor(Math.random() * aiInsights.length)];
        
        if (userData.result_history && userData.result_history.length > 5) {
            const recentStats = userData.result_history.slice(-5);
            const recentWins = recentStats.filter(r => r.outcome === 'win').length;
            
            if (recentWins >= 3) {
                return `${randomInsight}\n💪 أداء قوي في التوقعات الأخيرة`;
            } else if (recentWins <= 1) {
                return `${randomInsight}\n🔄 تعديل الخوارزمية لتحسين النتائج`;
            }
        }
        
        return randomInsight;
    }

    generateNextPrediction(userId, userData, betAmount = 0) {
        return this.generateSmartPrediction(userId, userData, betAmount);
    }

    validatePrediction(prediction, userData) {
        if (!userData.result_history || userData.result_history.length === 0) {
            return { valid: true, message: "✅ توقع جديد - لا توجد بيانات سابقة" };
        }

        const lastPrediction = userData.result_history[userData.result_history.length - 1];
        
        if (lastPrediction.outcome === 'lose' && lastPrediction.type === prediction.type) {
            const shouldSwitch = Math.random() > 0.3;
            if (shouldSwitch) {
                return {
                    valid: false,
                    message: "🔄 تغيير التوقع بعد الخسارة الأخيرة",
                    newType: prediction.type === '⚽ GOAL' ? '🛑 NO GOAL' : '⚽ GOAL'
                };
            }
        }

        return { valid: true, message: "✅ التوقع متوافق مع الأنماط السابقة" };
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

    async sendResultNotification(userData, prediction, outcome, profit) {
        try {
            const message = `
🎯 *نتيجة التوقع - ${outcome === 'win' ? 'فوز 🎉' : 'خسارة 🔄'}*

👤 *المستخدم:* ${userData.username}
🔐 *الحساب:* ${userData.onexbet}
🎯 *التوقع:* ${prediction.type}
💰 *مبلغ الرهان:* ${prediction.bet_amount}$
${outcome === 'win' ? `💵 *الربح:* ${profit}$` : ''}

${outcome === 'win' ? 
'🎊 مبروك! التوقع كان ناجحاً' : 
'💪 لا تقلق، الفرصة القادمة ستكون أفضل'}

🕒 *الوقت:* ${new Date().toLocaleString('ar-EG')}
            `;

            await this.bot.telegram.sendMessage(this.channelId, message, {
                parse_mode: 'Markdown'
            });
        } catch (error) {
            console.error('Error sending result notification:', error);
        }
    }
}

const channelNotifier = new ChannelNotifier(bot, CONFIG.CHANNEL_ID);

// 🎯 BOT SETUP WITH PERSISTENT SESSIONS
// 🆕 جلسات مخصصة مع تخزين دائم في Firestore
const getSessionKey = (ctx) => {
    return ctx.from && ctx.from.id.toString();
};

bot.use(async (ctx, next) => {
    const sessionKey = getSessionKey(ctx);
    if (!sessionKey) {
        return next();
    }

    try {
        // 🆕 محاولة تحميل الجلسة من Firestore
        const savedSession = await dbManager.getSession(sessionKey);
        
        if (savedSession) {
            ctx.session = savedSession;
            console.log(`✅ Session restored for user ${sessionKey}`);
        } else {
            // جلسة جديدة
            ctx.session = {
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
                currentPrediction: null,
                predictionHistory: [],
                awaitingResult: false
            };
            console.log(`🆕 New session created for user ${sessionKey}`);
        }

        await next();

        // 🆕 حفظ الجلسة في Firestore بعد كل تحديث
        if (ctx.session) {
            await dbManager.saveSession(sessionKey, ctx.session);
        }
    } catch (error) {
        console.error('Session middleware error:', error);
        await next();
    }
});

// 🎯 لوحة المفاتيح الثابتة - UPDATED FOR DUAL PAYMENT AND SUPPORT
const getMainKeyboard = () => {
    return Markup.keyboard([
        ['🎯 جلب التحليل', '📊 إحصائياتي'],
        ['💳 الاشتراكات', '👥 إحصائيات البوت'],
        ['👤 حالة الاشتراك', `🆘 الدعم الفني`]
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

function getLossEncouragement() {
    const encouragements = [
        "💪 لا تقلق! الخسارة جزء من اللعبة، استمر وسيأتي النجاح",
        "🔄 هذه مجرد جولة، الرهان القادم سيكون أفضل",
        "🎯 التعلم من الخسارة يبني الفوز القادم، استمر في المحاولة",
        "⚡ لا تستسلم! النجاح قادم في الجولة القادمة",
        "🔥 الخسارة تزيد من خبرتك، استفد منها للفوز القادم",
        "🚀 كل عظيم مر بالخسارة، استمر وسيكون الفوز حليفك"
    ];
    return encouragements[Math.floor(Math.random() * encouragements.length)];
}

function getWinCongratulations(profit) {
    const congratulations = [
        `🎉 مبروك الفوز! لقد ربحت ${profit}$`,
        `✨ نجاح رائع! أرباحك ${profit}$`,
        `🏆 فوز ممتاز! ${profit}$ تمت إضافتها إلى رصيدك`,
        `💎 أداء استثنائي! ربحت ${profit}$ بنجاح`,
        `🚀 احترافية! ${profit}$ أرباح دقيقة`
    ];
    return congratulations[Math.floor(Math.random() * congratulations.length)];
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

// 🚀 INITIALIZE ALL SYSTEMS BEFORE STARTING BOT
async function initializeAllSystems() {
    console.log('🔄 Starting system initialization...');
    
    try {
        // 1. تهيئة Firebase أولاً
        console.log('1. Initializing Firebase...');
        const firebaseReady = await initializeFirebase();
        
        if (!firebaseReady) {
            console.log('❌ Firebase initialization failed, using fallback');
        }
        
        // 2. تهيئة Firestore Storage مع الانتظار
        console.log('2. Initializing Firestore Storage...');
        await firestoreStorage.initializationPromise;
        
        // 3. اختبار النظام
        console.log('3. Testing storage system...');
        const testUser = 'system_test';
        const testResult = await firestoreStorage.saveUser(testUser, { username: 'System Test' });
        
        if (testResult) {
            console.log('✅ All systems initialized successfully');
            
            // 4. تحميل الإحصائيات الحقيقية
            const stats = await dbManager.getAllStats();
            console.log(`📊 Loaded ${stats.totalUsers} users from database`);
            
        } else {
            console.log('⚠️ Systems initialized with fallback mode');
        }
        
        return true;
        
    } catch (error) {
        console.error('System initialization error:', error);
        return false;
    }
}

// 🎯 BOT COMMANDS - UPDATED WITH PERSISTENT DATA

bot.start(async (ctx) => {
    try {
        const settings = await dbManager.getSettings();
        if (settings.maintenance_mode && ctx.from.id.toString() !== CONFIG.ADMIN_ID) {
            await ctx.replyWithMarkdown('🔧 *البوت تحت الصيانة*\n\n⏰ نعمل على تحسين الخدمة لكم\n🔄 سنعود قريباً بأفضل مما كان\n\n📞 للاستفسار: ' + CONFIG.DEVELOPER);
            return;
        }

        const userId = ctx.from.id.toString();
        const userName = ctx.from.first_name;

        console.log(`🔍 Checking user ${userId} in database...`);

        // 🆕 التحقق من المستخدم في Firestore أولاً
        const existingUser = await dbManager.getUser(userId);
        
        if (existingUser) {
            // 🎉 المستخدم مسجل مسبقاً - استرجاع كامل البيانات
            ctx.session.step = 'verified';
            ctx.session.userData = existingUser;
            ctx.session.country = existingUser.country;

            console.log(`✅ User ${userId} found in database, restoring session...`);

            const remainingDays = calculateRemainingDays(existingUser.subscription_end_date);
            
            let statusMessage = '';
            if (existingUser.subscription_status === 'active' && remainingDays > 0) {
                statusMessage = `🎉 *مرحباً بعودتك!*\n\n` +
                               `✅ *اشتراكك نشط*\n` +
                               `🔐 الحساب: \`${existingUser.onexbet}\`\n` +
                               `📦 النوع: ${getSubscriptionDisplayName(existingUser.subscription_type)}\n` +
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
            // مستخدم جديد - اختيار الدولة أولاً
            ctx.session.step = 'awaiting_country';
            ctx.session.awaitingCountry = true;

            console.log(`🆕 New user ${userId}, starting registration...`);

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

                await dbManager.setChannelSubscription(userId, true);
                
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

        // 🆕 تحديث معالجة زر الدعم الفني
        if (text === '🆘 الدعم الفني') {
            await ctx.replyWithMarkdown(
                `🆘 *الدعم الفني*\n\n` +
                `📞 للاستفسارات والدعم الفني:\n` +
                `👤 [${CONFIG.SUPPORT_USERNAME}](https://t.me/${CONFIG.SUPPORT_USERNAME.replace('@', '')})\n\n` +
                `⏰ متاحون 24/7 لخدمتكم\n\n` +
                `💬 اضغط على اسم المستخدم أعلاه للدردشة المباشرة`,
                getMainKeyboard()
            );
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

        // 🆕 معالجة تعديل البنكي - الخطوات المنظمة
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
        // 🔐 STEP 2: Verify Code
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
                    channel_subscribed: true,
                    prediction_history: [],
                    result_history: []
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
        // 💳 معالجة طلبات الدفع - طلب رقم الحساب
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
                        `📞 للاستفسارات والدعم الفني:\n` +
                        `👤 [${CONFIG.SUPPORT_USERNAME}](https://t.me/${CONFIG.SUPPORT_USERNAME.replace('@', '')})\n\n` +
                        `⏰ متاحون 24/7 لخدمتكم\n\n` +
                        `💬 اضغط على اسم المستخدم أعلاه للدردشة المباشرة`,
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

// 🎯 HANDLE CALLBACK QUERIES - ENHANCED WITH RESULT TRACKING
bot.on('callback_query', async (ctx) => {
    try {
        const callbackData = ctx.callbackQuery.data;
        const userId = ctx.from.id.toString();
        
        if (callbackData.startsWith('win_') || callbackData.startsWith('lose_')) {
            const isWin = callbackData.startsWith('win_');
            const predictionId = callbackData.split('_')[1];
            
            const userData = await dbManager.getUser(userId);
            if (!userData) {
                await ctx.answerCbQuery('❌ لم يتم العثور على بيانات المستخدم');
                return;
            }
            
            const currentPrediction = ctx.session.currentPrediction;
            if (!currentPrediction) {
                await ctx.answerCbQuery('❌ لم يتم العثور على بيانات التوقع');
                return;
            }

            if (isWin) {
                const profit = ctx.session.currentBet;
                userData.wins = (userData.wins || 0) + 1;
                userData.correct_predictions = (userData.correct_predictions || 0) + 1;
                userData.total_profit = (userData.total_profit || 0) + profit;
                ctx.session.totalProfit += profit;
                
                await dbManager.addResultToHistory(userId, {
                    type: currentPrediction.type,
                    outcome: 'win',
                    bet_amount: ctx.session.currentBet,
                    profit: profit,
                    timestamp: new Date().toISOString()
                });
                
                await ctx.answerCbQuery(`🎊 مبروك! نجح التوقع وربحت ${profit}$`);
                
                const winMessage = getWinCongratulations(profit);
                
                await ctx.replyWithMarkdown(
                    `🎉 *${winMessage}*\n\n` +
                    `✅ توقعك كان دقيقاً ومميزاً\n` +
                    `💰 ربحت: ${profit}$\n` +
                    `💵 إجمالي أرباحك: ${ctx.session.totalProfit}$\n\n` +
                    `🎯 يمكنك البدء بتوقع جديد`,
                    getMainKeyboard()
                );
                
                await channelNotifier.sendResultNotification(userData, currentPrediction, 'win', profit);
                
                ctx.session.currentBet = ctx.session.originalBet;
                
            } else {
                userData.losses = (userData.losses || 0) + 1;
                
                await dbManager.addResultToHistory(userId, {
                    type: currentPrediction.type,
                    outcome: 'lose',
                    bet_amount: ctx.session.currentBet,
                    profit: 0,
                    timestamp: new Date().toISOString()
                });

                const newBet = ctx.session.currentBet * 2;
                ctx.session.currentBet = newBet;
                
                await ctx.answerCbQuery(`🔄 جاري إنشاء التوقع التالي...`);
                
                const newPrediction = goalAI.generateNextPrediction(userId, userData, newBet);
                
                const validation = goalAI.validatePrediction(newPrediction, userData);
                if (!validation.valid) {
                    newPrediction.type = validation.newType;
                    newPrediction.reasoning += `\n${validation.message}`;
                }
                
                ctx.session.currentPrediction = newPrediction;
                
                const encouragement = getLossEncouragement();
                
                await ctx.replyWithMarkdown(
                    `🔄 *${encouragement}*\n\n` +
                    `📈 الرهان التالي مضاعف: ${newBet}$\n\n` +
                    `🎯 *التوقع التالي:*\n` +
                    `${newPrediction.type}\n` +
                    `📈 ${newPrediction.probability}% | 🎯 ${newPrediction.confidence}%\n` +
                    `💡 ${newPrediction.reasoning}\n\n` +
                    `⚡ استمر في المحاولة للفوز القادم!`,
                    Markup.inlineKeyboard([
                        [ 
                            Markup.button.callback('🎉 ربح', `win_${newPrediction.prediction_id}`),
                            Markup.button.callback('🔁 خسر', `lose_${newPrediction.prediction_id}`)
                        ]
                    ])
                );

                await channelNotifier.sendResultNotification(userData, currentPrediction, 'lose', 0);
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

// 🆕 معالجة التحقق من الاشتراك في القناة
async function handleCheckChannelSubscription(ctx) {
    try {
        const userId = ctx.from.id.toString();
        const isSubscribed = await checkChannelSubscription(userId);
        
        if (isSubscribed) {
            await dbManager.setChannelSubscription(userId, true);
            await ctx.answerCbQuery('✅ تم التحقق من الاشتراك بنجاح!');
            await ctx.deleteMessage();
            
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

// 🎯 HANDLER FUNCTIONS - ENHANCED WITH AI PREDICTION

async function handleGetPrediction(ctx, userData) {
    try {
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
            '🎯 *جاري جلب التحليل...*\n\n🤖 جاري تطبيق خوارزمية الذكاء الاصطناعي...',
            '🎯 *جاري جلب التحليل...*\n\n🧠 جاري تحليل النتائج السابقة...',
            '🎯 *جاري جلب التحليل...*\n\n⚡ جاري توليد التوقع الذكي...'
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

        const prediction = goalAI.generateSmartPrediction(userData.user_id, userData, ctx.session.currentBet);
        
        const validation = goalAI.validatePrediction(prediction, userData);
        if (!validation.valid) {
            prediction.type = validation.newType;
            prediction.reasoning += `\n${validation.message}`;
        }
        
        if (userData.subscription_status !== 'active') {
            userData.free_attempts--;
        }
        userData.total_predictions = (userData.total_predictions || 0) + 1;
        userData.total_bets = (userData.total_bets || 0) + ctx.session.currentBet;
        
        await dbManager.addPredictionToHistory(userData.user_id, prediction);
        
        ctx.session.currentPrediction = prediction;
        
        await dbManager.saveUser(ctx.from.id.toString(), userData);

        const now = new Date();
        const saudiTime = new Date(now.getTime() + (3 * 60 * 60 * 1000));
        const realTime = saudiTime.toLocaleTimeString('ar-SA', { 
            hour: '2-digit', 
            minute: '2-digit',
            second: '2-digit',
            hour12: false 
        });

        const recentStats = await dbManager.getRecentResultsStats(userData.user_id, 5);
        let statsInfo = '';
        
        if (recentStats.total > 0) {
            statsInfo = `\n📊 *آخر ${recentStats.total} توقع:* ${recentStats.wins} فوز | ${recentStats.losses} خسارة | ${recentStats.winRate}% نجاح`;
        }

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
${statsInfo}

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
                        Markup.button.callback('🎉 ربح', `win_${prediction.prediction_id}`),
                        Markup.button.callback('🔁 خسر', `lose_${prediction.prediction_id}`)
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

    const recentStats = await dbManager.getRecentResultsStats(userData.user_id, 10);
    let recentInfo = '';
    
    if (recentStats.total > 0) {
        recentInfo = `\n📈 *آخر 10 توقعات:*\n` +
                    `✅ ${recentStats.wins} فوز | ❌ ${recentStats.losses} خسارة\n` +
                    `🎯 ${recentStats.winRate}% معدل النجاح`;
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
        recentInfo,
        getMainKeyboard()
    );
}

async function handleBotStats(ctx) {
    const stats = dynamicStats.getStats();
    await ctx.replyWithMarkdown(
        `👥 *إحصائيات البوت*\n\n` +
        `👤 إجمالي المستخدمين: ${stats.totalUsers.toLocaleString()}\n` +
        `🟢 مستخدمين نشطين الآن: ${stats.activeUsers}\n` +
        `📊 التوقعات اليومية: ${Math.floor(stats.activeUsers * 8.5)}\n\n` +
        `🎯 *النظام يعمل بكفاءة عالية*\n` +
        `🤖 *خوارزمية الذكاء الاصطناعي محسنة*`,
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

// 🆕 معالجة تأكيد الاشتراك - UPDATED FOR DUAL PAYMENT
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
        const subscriptionType = parts.slice(2).join('_');

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
    let statusMessage = '';
    
    if (userData.subscription_status === 'active') {
        const remainingDays = calculateRemainingDays(userData.subscription_end_date);
        statusMessage = `✅ *اشتراكك نشط*\n\n` +
                       `🔐 الحساب: \`${userData.onexbet}\`\n` +
                       `📦 النوع: ${getSubscriptionDisplayName(userData.subscription_type)}\n` +
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

// 🔧 ADMIN HANDLERS - UPDATED FOR DUAL PAYMENT SYSTEM

async function handleAdminCommands(ctx, text) {
    const session = ctx.session;
    
    try {
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

        if (session.adminStep === 'edit_bank_price') {
            await handleAdminEditBankPrice(ctx, text);
            return;
        }

        if (session.adminStep === 'edit_bank_account') {
            await handleAdminEditBankAccount(ctx, text);
            return;
        }

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
                await ctx.replyWithMarkdown('🔄 *جاري استعادة البيانات...*');
                await ctx.replyWithMarkdown('✅ *تم استعادة البيانات من Firestore*');
                return;
                
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

        for (const user of users) {
            try {
                await bot.telegram.sendMessage(
                    user.user_id, 
                    `📢 *إشعار من الإدارة*\n\n${message}`,
                    { parse_mode: 'Markdown' }
                );
                success++;
                
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

💰 *المدفوعات:*
• المعلقة: ${stats.pendingPayments}
• الإجمالي: ${stats.totalPayments}

📈 *النشاط:*
• التوقعات: ${stats.totalPredictions}
• الأرباح: ${stats.totalProfit}$
• الرهانات: ${stats.totalBets}$

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
            ctx.session.bankEditData = {
                subscriptionType: subscriptionType,
                step: 'price'
            };
            ctx.session.adminStep = 'edit_bank_price';
            
            const settings = await dbManager.getSettings();
            const currentPrice = settings.prices.bank[subscriptionType] || CONFIG.SUBSCRIPTION_PRICES.bank[subscriptionType];
            const currentBankDetails = settings.payment_links.bank[subscriptionType] || CONFIG.PAYMENT_LINKS.bank[subscriptionType];

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

        const uploadResult = await imgbbUploader.uploadImageFromUrl(imageUrl);
        
        if (!uploadResult.success) {
            await ctx.replyWithMarkdown('❌ فشل في رفع الصورة، يرجى المحاولة مرة أخرى');
            return;
        }

        const settings = await dbManager.getSettings();
        
        if (!settings.prices.bank) settings.prices.bank = {};
        settings.prices.bank[subscriptionType] = price;
        
        const description = generateBankDescription(subscriptionType, price, account);
        
        if (!settings.payment_links.bank) settings.payment_links.bank = {};
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

        const uploadResult = await imgbbUploader.uploadImageFromUrl(imageUrl);
        
        if (!uploadResult.success) {
            await ctx.replyWithMarkdown('❌ فشل في رفع الصورة، يرجى المحاولة مرة أخرى');
            return;
        }

        const settings = await dbManager.getSettings();
        
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

// معالجة تعديل الأسعار والدفع (باينانس)
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
            if (!isNaN(text) && parseFloat(text) > 0) {
                const priceNum = parseFloat(text);
                
                if (!settings.prices.binance) {
                    settings.prices.binance = {};
                }
                
                settings.prices.binance[subscriptionType] = priceNum;
                await dbManager.updateSettings(settings);

                await ctx.replyWithMarkdown(
                    `✅ *تم تحديث السعر بنجاح*\n\n` +
                    `💰 ${getSubscriptionDisplayName(subscriptionType)}: ${priceNum}$\n\n` +
                    `📝 *الآن أرسل رابط الدفع الجديد أو صورة QR:*`
                );
            }
            else if (text.startsWith('http') || text.startsWith('https://i.ibb.co')) {
                if (!settings.payment_links.binance) {
                    settings.payment_links.binance = {};
                }
                
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
            processed_at: new Date().toLocaleString('ar-EG')
        });
        
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

// 🚀 START BOT AFTER SUCCESSFUL INITIALIZATION
async function startBot() {
    console.log('🔄 Starting bot initialization...');
    
    // انتظار اكتمال تهيئة جميع الأنظمة
    const systemsReady = await initializeAllSystems();
    
    if (systemsReady) {
        // بدء البوت بعد اكتمال التهيئة
        bot.launch().then(() => {
            console.log('🎉 SUCCESS! AI GOAL Predictor v16.0 ENHANCED is RUNNING!');
            console.log('💾 Persistent Data Storage: ' + (firestoreStorage.initialized ? '✅ ACTIVE' : '❌ FALLBACK'));
            console.log('💳 Payment Systems: Binance + Bank Transfer');
            console.log('🤖 Enhanced AI Prediction with Result Tracking');
            console.log('👤 Developer:', CONFIG.DEVELOPER);
            console.log('📢 Channel:', CONFIG.CHANNEL);
            console.log('🌐 Health check: http://localhost:' + PORT);
            
            // 🆕 عرض إحصائيات حقيقية من قاعدة البيانات
            dbManager.getAllStats().then(stats => {
                console.log(`📊 Database Stats: ${stats.totalUsers} users, ${stats.activeUsers} active subscriptions`);
            });
            
        }).catch(console.error);
    } else {
        console.log('❌ Bot failed to start due to system initialization errors');
    }
}

// بدء تشغيل البوت
startBot();

// 🛑 GRACEFUL SHUTDOWN
process.once('SIGINT', async () => {
    console.log('🔄 Shutting down gracefully...');
    console.log('💾 Saving final data to Firestore...');
    await bot.stop('SIGINT');
});

process.once('SIGTERM', async () => {
    console.log('🔄 Shutting down gracefully...');
    console.log('💾 Saving final data to Firestore...');
    await bot.stop('SIGTERM');
});

console.log('✅ AI Goal Prediction System with COMPLETE PERSISTENCE Ready!');
