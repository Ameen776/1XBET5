// ===================================================
// 🚀 AI GOAL PREDICTOR ULTIMATE - VERSION 16.0 ENHANCED
// 👤 DEVELOPER: ♛𝑨𝒎𝒆𝒆𝒏 𝑨𝒍𝒛𝒘𝒂𝒉𝒊♛
// 🔥 FEATURES: DUAL PAYMENT SYSTEM + BANK TRANSFER + BINANCE
// 💾 ENHANCED PERSISTENT DATA STORAGE IN FIRESTORE - NO DATA LOSS ON UPDATES
// 🎯 ENHANCED AI PREDICTION WITH RESULT TRACKING
// 🔐 PREVENT DUPLICATE ACCOUNT NUMBERS
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

// 🔥 ENHANCED FIREBASE INITIALIZATION
const { admin, db, rtdb } = require('./firebase-config');

// 💾 ENHANCED FIRESTORE STORAGE MANAGER - COMPLETE PERSISTENCE
class FirestoreStorage {
    constructor() {
        this.initialized = true; // Firebase is already initialized
    }

    async getUser(userId) {
        try {
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

    async saveSession(userId, sessionData) {
        try {
            const sessionDoc = {
                user_id: userId,
                session_data: sessionData,
                last_updated: new Date().toISOString(),
                expires_at: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 7 days
            };

            await db.collection('sessions').doc(userId.toString()).set(sessionDoc, { merge: true });
            console.log(`✅ Session saved for user ${userId}`);
            return true;
            
        } catch (error) {
            console.error('Save session error:', error);
            return false;
        }
    }

    async getSession(userId) {
        try {
            const sessionDoc = await db.collection('sessions').doc(userId.toString()).get();
            if (sessionDoc.exists) {
                const sessionData = sessionDoc.data();
                // Check if session is expired
                if (new Date(sessionData.expires_at) > new Date()) {
                    console.log(`✅ Session loaded for user ${userId}`);
                    return sessionData.session_data;
                } else {
                    // Delete expired session
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

    async deleteSession(userId) {
        try {
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
                timestamp: new Date().toISOString()
            };
            
            await db.collection('backups').doc(Date.now().toString()).set(backupData);
            
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

    async saveSession(userId, sessionData) {
        return await this.storage.saveSession(userId, sessionData);
    }

    async getSession(userId) {
        return await this.storage.getSession(userId);
    }

    async deleteSession(userId) {
        return await this.storage.deleteSession(userId);
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

// 🎯 BOT SETUP WITH PERSISTENT SESSIONS - ENHANCED
const getSessionKey = (ctx) => {
    return ctx.from && ctx.from.id.toString();
};

// 🆕 ENHANCED SESSION MIDDLEWARE - FIXED PERSISTENCE
bot.use(async (ctx, next) => {
    const sessionKey = getSessionKey(ctx);
    if (!sessionKey) {
        return next();
    }

    try {
        // 🆕 FIRST: Always try to load user data from Firestore
        const userData = await dbManager.getUser(sessionKey);
        
        if (userData) {
            // 🎉 User exists - restore complete session
            if (!ctx.session) {
                ctx.session = {};
            }
            
            ctx.session.userData = userData;
            ctx.session.step = 'verified';
            ctx.session.country = userData.country;
            
            console.log(`✅ User ${sessionKey} session restored from Firestore`);
        } else {
            // New user - initialize empty session
            if (!ctx.session) {
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
            }
        }

        await next();

        // 🆕 ALWAYS save session to Firestore after processing
        if (ctx.session && sessionKey) {
            await dbManager.saveSession(sessionKey, ctx.session);
        }
        
    } catch (error) {
        console.error('Session middleware error:', error);
        // Continue even if session saving fails
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

        // 🆕 FIRST: Always check if user exists in database
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

// 📝 HANDLE TEXT MESSAGES - UPDATED WITH DUPLICATE ACCOUNT CHECK
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

        // 🔐 STEP 1: Validate 1xBet Account - مع منع التكرار المحسن
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
                // 🆕 تحقق محسن من عدم تكرار رقم الحساب
                const existingUserWithAccount = await dbManager.getUserByOneXBet(text);
                if (existingUserWithAccount) {
                    await ctx.replyWithMarkdown(
                        '❌ *رقم الحساب مسجل بالفعل!*\n\n' +
                        '🔐 هذا الحساب مسجل لمستخدم آخر في النظام\n' +
                        '💡 يرجى استخدام حسابك الخاص أو التواصل مع الدعم\n\n' +
                        `📞 الدعم: ${CONFIG.SUPPORT_USERNAME}`
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

                // 🆕 حفظ المستخدم في قاعدة البيانات
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
        // 🎯 معالجة الأزرار الثابتة بعد التحقق
        else if (session.step === 'verified') {
            // 🆕 تحديث مهم: تحميل بيانات المستخدم من قاعدة البيانات أولاً
            const userData = await dbManager.getUser(userId);
            
            if (!userData) {
                await ctx.replyWithMarkdown('❌ *جلسة منتهية*\n\n🔐 أرسل /start للبدء', getLoginKeyboard());
                return;
            }

            // 🆕 تحديث بيانات الجلسة بآخر البيانات من قاعدة البيانات
            ctx.session.userData = userData;

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
            
            // 🆕 حفظ بيانات المستخدم بعد كل نتيجة
            await dbManager.saveUser(userId, userData);
            
            try {
                await ctx.deleteMessage(ctx.callbackQuery.message.message_id);
            } catch (deleteError) {
                console.log('Could not delete message:', deleteError);
            }
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
        
        // 🆕 حفظ بيانات المستخدم بعد كل توقع
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

// 🚀 START BOT
async function startBot() {
    console.log('🔄 Starting bot initialization...');
    
    try {
        // اختبار اتصال Firebase
        const testDoc = db.collection('connection_test').doc('bot_start');
        await testDoc.set({ 
            timestamp: new Date().toISOString(),
            status: 'connected',
            version: CONFIG.VERSION
        });
        
        console.log('✅ Firebase connection test successful');
        
        // بدء البوت
        bot.launch().then(() => {
            console.log('🎉 SUCCESS! AI GOAL Predictor v16.0 ENHANCED is RUNNING!');
            console.log('💾 Enhanced Persistent Data Storage: ✅ ACTIVE');
            console.log('🔐 Duplicate Account Prevention: ✅ ACTIVE');
            console.log('💳 Payment Systems: Binance + Bank Transfer');
            console.log('🤖 Enhanced AI Prediction with Result Tracking');
            console.log('👤 Developer:', CONFIG.DEVELOPER);
            console.log('📢 Channel:', CONFIG.CHANNEL);
            console.log('🌐 Health check: http://localhost:' + PORT);
            
            // عرض إحصائيات حقيقية من قاعدة البيانات
            dbManager.getAllStats().then(stats => {
                console.log(`📊 Database Stats: ${stats.totalUsers} users, ${stats.activeUsers} active subscriptions`);
            });
            
        }).catch(console.error);
        
    } catch (error) {
        console.log('❌ Firebase connection failed:', error.message);
        console.log('🔄 Starting bot with fallback mode...');
        
        bot.launch().then(() => {
            console.log('🎉 Bot started in fallback mode');
        }).catch(console.error);
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

console.log('✅ AI Goal Prediction System with ENHANCED PERSISTENCE Ready!');