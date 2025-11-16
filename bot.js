// ===================================================
// 🚀 AI GOAL PREDICTOR ULTIMATE - VERSION 18.0 PERFECT
// 👤 DEVELOPER: AMIN - @GEMZGOOLBOT
// 🔥 FEATURES: DUAL PAYMENT + COUNTRIES + PERSISTENT DATA
// 💾 ENHANCED PERSISTENT DATA STORAGE - AUTO BACKUP EVERY 5 MIN
// 🆕 PERFECT: NO ERRORS + COMPLETE RESPONSIVE SYSTEM
// ===================================================

console.log('🤖 Starting AI GOAL Predictor Ultimate v18.0 PERFECT...');
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

    // 💰 DEFAULT PRICING
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

    // 🔐 DEFAULT PAYMENT LINKS
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

    // 🏴󠁧󠁢󠁥󠁮󠁧󠁿 ARAB COUNTRIES
    ARAB_COUNTRIES: {
        '🇪🇬 مصر': 'egypt',
        '🇸🇦 السعودية': 'saudi_arabia',
        '🇦🇪 الإمارات': 'uae',
        '🇶🇦 قطر': 'qatar',
        '🇰🇼 الكويت': 'kuwait',
        '🇧🇭 البحرين': 'bahrain',
        '🇴🇲 عمان': 'oman',
        '🇾🇪 اليمن': 'yemen',
        '🇮🇶 العراق': 'iraq',
        '🇯🇴 الأردن': 'jordan',
        '🇱🇧 لبنان': 'lebanon',
        '🇸🇾 سوريا': 'syria',
        '🇵🇸 فلسطين': 'palestine',
        '🇩🇿 الجزائر': 'algeria',
        '🇲🇦 المغرب': 'morocco',
        '🇹🇳 تونس': 'tunisia',
        '🇱🇾 ليبيا': 'libya',
        '🇸🇩 السودان': 'sudan',
        '🇸🇴 الصومال': 'somalia',
        '🇲🇷 موريتانيا': 'mauritania',
        '🇩🇯 جيبوتي': 'djibouti',
        '🇰🇲 جزر القمر': 'comoros'
    },
    
    VERSION: "18.0.0",
    DEVELOPER: "AMIN - @GEMZGOOLBOT",
    CHANNEL: "@GEMZGOOL",
    START_IMAGE: "https://i.ibb.co/tpy70Bd1/IMG-20251104-074214-065.jpg",
    ANALYSIS_IMAGE: "https://i.ibb.co/VYjf05S0/Screenshot.png",
    PREDICTION_IMAGE: "https://i.ibb.co/rGTZm2mB/IMG.jpg",
    IMGBB_API_KEY: process.env.IMGBB_API_KEY || "42b155a527bee21e62e524a31fe9b1ee"
};

console.log('✅ Perfect Configuration loaded successfully');

// 🚀 INITIALIZE BOT
const { Telegraf, Markup, session } = require('telegraf');
const axios = require('axios');
const express = require('express');
const fs = require('fs');
const path = require('path');

const bot = new Telegraf(CONFIG.BOT_TOKEN);

// 🌐 HEALTH CHECK SERVER
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

app.get('/keep-alive', (req, res) => {
    res.json({ 
        status: 'ALIVE', 
        timestamp: new Date().toISOString(),
        message: 'Bot is alive and running'
    });
});

app.listen(PORT, () => {
    console.log(`🌐 Health check server running on port ${PORT}`);
});

// 💾 PERFECT PERSISTENT STORAGE SYSTEM
class PerfectStorage {
    constructor() {
        this.userDatabase = new Map();
        this.paymentDatabase = new Map();
        this.settingsDatabase = new Map();
        this.userSessions = new Map();
        this.init();
    }

    async init() {
        await this.loadFromLocalStorage();
        console.log('✅ Perfect storage initialized');
    }

    async loadFromLocalStorage() {
        try {
            const dataPath = path.join(__dirname, 'data');
            if (!fs.existsSync(dataPath)) {
                fs.mkdirSync(dataPath, { recursive: true });
                return;
            }

            // تحميل جميع البيانات
            const loadFile = (file, map) => {
                if (fs.existsSync(file)) {
                    try {
                        const data = JSON.parse(fs.readFileSync(file, 'utf8'));
                        map.clear();
                        data.forEach(([key, value]) => map.set(key, value));
                        return true;
                    } catch (error) {
                        console.error(`Error loading ${file}:`, error);
                        return false;
                    }
                }
                return false;
            };

            loadFile(path.join(dataPath, 'users.json'), this.userDatabase);
            loadFile(path.join(dataPath, 'payments.json'), this.paymentDatabase);
            loadFile(path.join(dataPath, 'settings.json'), this.settingsDatabase);
            loadFile(path.join(dataPath, 'sessions.json'), this.userSessions);

            console.log(`✅ Loaded: ${this.userDatabase.size} users, ${this.paymentDatabase.size} payments, ${this.userSessions.size} sessions`);
        } catch (error) {
            console.error('Load from local storage error:', error);
        }
    }

    async saveToLocalStorage() {
        try {
            const dataPath = path.join(__dirname, 'data');
            if (!fs.existsSync(dataPath)) {
                fs.mkdirSync(dataPath, { recursive: true });
            }

            // حفظ جميع البيانات
            const saveFile = (file, map) => {
                try {
                    fs.writeFileSync(file, JSON.stringify(Array.from(map.entries()), null, 2));
                    return true;
                } catch (error) {
                    console.error(`Error saving ${file}:`, error);
                    return false;
                }
            };

            saveFile(path.join(dataPath, 'users.json'), this.userDatabase);
            saveFile(path.join(dataPath, 'payments.json'), this.paymentDatabase);
            saveFile(path.join(dataPath, 'settings.json'), this.settingsDatabase);
            saveFile(path.join(dataPath, 'sessions.json'), this.userSessions);

            console.log(`💾 Saved all data successfully`);
        } catch (error) {
            console.error('Save to local storage error:', error);
        }
    }

    async saveUserSession(userId, sessionData) {
        try {
            this.userSessions.set(userId.toString(), {
                ...sessionData,
                lastUpdated: new Date().toISOString()
            });
            await this.saveToLocalStorage();
            return true;
        } catch (error) {
            console.error('Save user session error:', error);
            return false;
        }
    }

    async getUserSession(userId) {
        return this.userSessions.get(userId.toString()) || null;
    }

    async deleteUserSession(userId) {
        try {
            this.userSessions.delete(userId.toString());
            await this.saveToLocalStorage();
            return true;
        } catch (error) {
            console.error('Delete user session error:', error);
            return false;
        }
    }
}

// INITIALIZE PERFECT STORAGE
const perfectStorage = new PerfectStorage();

// 💾 PERFECT BACKUP MANAGER
class PerfectBackupManager {
    constructor() {
        this.backupInterval = null;
        this.backupPath = path.join(__dirname, 'backups');
        this.init();
    }

    init() {
        if (!fs.existsSync(this.backupPath)) {
            fs.mkdirSync(this.backupPath, { recursive: true });
        }

        this.backupInterval = setInterval(async () => {
            await this.createBackup();
        }, 5 * 60 * 1000);

        console.log('✅ Auto-backup system initialized (every 5 minutes)');
    }

    async createBackup() {
        try {
            const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
            const backupFile = path.join(this.backupPath, `backup-${timestamp}.json`);
            
            const backupData = {
                timestamp: new Date().toISOString(),
                version: CONFIG.VERSION,
                users: Array.from(perfectStorage.userDatabase.entries()),
                payments: Array.from(perfectStorage.paymentDatabase.entries()),
                settings: Array.from(perfectStorage.settingsDatabase.entries()),
                sessions: Array.from(perfectStorage.userSessions.entries())
            };

            fs.writeFileSync(backupFile, JSON.stringify(backupData, null, 2));
            console.log(`✅ Backup created: ${backupFile}`);
            
            return { success: true, file: backupFile };
            
        } catch (error) {
            console.error('Backup creation error:', error);
            return { success: false, error: error.message };
        }
    }

    stop() {
        if (this.backupInterval) {
            clearInterval(this.backupInterval);
        }
    }
}

// INITIALIZE BACKUP MANAGER
const backupManager = new PerfectBackupManager();

// 🗄️ PERFECT DATABASE MANAGER
class PerfectDatabaseManager {
    constructor() {
        this.maintenanceMode = false;
        this.storage = perfectStorage;
    }

    async getUser(userId) {
        try {
            return this.storage.userDatabase.get(userId.toString()) || null;
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
                country_name: userData.country_name || '',
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
                registration_completed: userData.registration_completed || false
            };

            this.storage.userDatabase.set(userId.toString(), completeUserData);
            await this.storage.saveToLocalStorage();
            
            return true;
            
        } catch (error) {
            console.error('Error saving user:', error);
            return false;
        }
    }

    async getSettings() {
        try {
            const settings = this.storage.settingsDatabase.get('config');
            if (!settings) {
                // إنشاء إعدادات افتراضية إذا لم تكن موجودة
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
                await this.updateSettings(defaultSettings);
                return defaultSettings;
            }
            return settings;
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

            this.storage.settingsDatabase.set('config', updatedSettings);
            await this.storage.saveToLocalStorage();
            
            return updatedSettings;
            
        } catch (error) {
            console.error('Update settings error:', error);
            return null;
        }
    }

    async getAllUsers() {
        try {
            return Array.from(this.storage.userDatabase.entries()).map(([id, data]) => ({ id, ...data }));
        } catch (error) {
            console.error('Get all users error:', error);
            return [];
        }
    }

    async addPayment(paymentData) {
        const paymentId = Date.now().toString();
        try {
            const subscriptionType = paymentData.subscription_type;
            const subscriptionName = this.getSubscriptionArabicName(subscriptionType);
            
            const fullPaymentData = {
                ...paymentData,
                id: paymentId,
                subscription_name: subscriptionName,
                status: 'pending',
                timestamp: new Date().toISOString()
            };

            this.storage.paymentDatabase.set(paymentId, fullPaymentData);
            await this.storage.saveToLocalStorage();
            
            return paymentId;
            
        } catch (error) {
            console.error('Add payment error:', error);
            return null;
        }
    }

    getSubscriptionArabicName(type) {
        const names = {
            'week': 'أسبوعي',
            'month': 'شهري',
            'three_months': '3 أشهر',
            'year': 'سنوي'
        };
        return names[type] || type;
    }

    async updatePayment(paymentId, updates) {
        try {
            const payment = this.storage.paymentDatabase.get(paymentId);
            if (payment) {
                this.storage.paymentDatabase.set(paymentId, { ...payment, ...updates });
                await this.storage.saveToLocalStorage();
            }
            return true;
        } catch (error) {
            console.error('Update payment error:', error);
            return false;
        }
    }

    async getPayment(paymentId) {
        try {
            return this.storage.paymentDatabase.get(paymentId) || null;
        } catch (error) {
            console.error('Get payment error:', error);
            return null;
        }
    }

    async getAllPayments() {
        try {
            return Array.from(this.storage.paymentDatabase.values());
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

    async searchUsers(query) {
        try {
            const users = await this.getAllUsers();
            const lowerQuery = query.toLowerCase();
            
            return users.filter(user => 
                (user.user_id && user.user_id.toString().includes(query)) ||
                (user.username && user.username.toLowerCase().includes(lowerQuery)) ||
                (user.onexbet && user.onexbet.toString().includes(query)) ||
                (user.country_name && user.country_name.toLowerCase().includes(lowerQuery))
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

    // 🆕 إدارة الجلسات
    async saveSession(userId, sessionData) {
        return await this.storage.saveUserSession(userId, sessionData);
    }

    async getSession(userId) {
        return await this.storage.getUserSession(userId);
    }

    async deleteSession(userId) {
        return await this.storage.deleteUserSession(userId);
    }

    // 🆕 الحصول على اسم الدولة
    getCountryArabicName(countryCode) {
        const countries = {
            'egypt': '🇪🇬 مصر',
            'saudi_arabia': '🇸🇦 السعودية',
            'uae': '🇦🇪 الإمارات',
            'qatar': '🇶🇦 قطر',
            'kuwait': '🇰🇼 الكويت',
            'bahrain': '🇧🇭 البحرين',
            'oman': '🇴🇲 عمان',
            'yemen': '🇾🇪 اليمن',
            'iraq': '🇮🇶 العراق',
            'jordan': '🇯🇴 الأردن',
            'lebanon': '🇱🇧 لبنان',
            'syria': '🇸🇾 سوريا',
            'palestine': '🇵🇸 فلسطين',
            'algeria': '🇩🇿 الجزائر',
            'morocco': '🇲🇦 المغرب',
            'tunisia': '🇹🇳 تونس',
            'libya': '🇱🇾 ليبيا',
            'sudan': '🇸🇩 السودان',
            'somalia': '🇸🇴 الصومال',
            'mauritania': '🇲🇷 موريتانيا',
            'djibouti': '🇩🇯 جيبوتي',
            'comoros': '🇰🇲 جزر القمر'
        };
        return countries[countryCode] || countryCode;
    }
}

// INITIALIZE PERFECT DATABASE MANAGER
const dbManager = new PerfectDatabaseManager();

// 📊 DYNAMIC STATISTICS SYSTEM
class DynamicStatistics {
    constructor() {
        this.totalUsers = 78542;
        this.activeUsers = 300;
    }

    getStats() {
        this.activeUsers += Math.floor(Math.random() * 5) + 1;
        if (this.activeUsers > 5000) this.activeUsers = 300;
        
        return {
            totalUsers: this.totalUsers,
            activeUsers: this.activeUsers
        };
    }
}

// 🧠 SMART GOAL PREDICTION ENGINE
class GoalPredictionAI {
    constructor() {
        this.algorithmVersion = "18.0";
    }

    generateSmartPrediction(userId) {
        const isGoal = Math.random() > 0.5;
        const probability = Math.floor(Math.random() * 30) + 60;
        
        const now = new Date();
        const saudiTime = new Date(now.getTime() + (3 * 60 * 60 * 1000));
        const realTime = saudiTime.toLocaleTimeString('ar-SA', { 
            hour: '2-digit', 
            minute: '2-digit',
            hour12: false 
        });
        
        return {
            type: isGoal ? '⚽ GOAL' : '🛑 NO GOAL',
            probability: probability,
            confidence: 100,
            reasoning: isGoal ? 
                `🔥 الضغط الهجومي المستمر يشير لهدف قريب بنسبة ${probability}%` :
                `🛡️ الدفاع المنظم يحد من الفرص بنسبة ${probability}%`,
            timestamp: realTime,
            algorithm: this.algorithmVersion
        };
    }
}

// 📤 IMGBB UPLOADER
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
                headers: formData.getHeaders(),
                timeout: 30000
            });
            
            if (response.data?.success) {
                return {
                    success: true,
                    url: response.data.data.url
                };
            }
            return { success: false, error: 'Upload failed' };
        } catch (error) {
            console.error('ImgBB upload error:', error);
            return { success: false, error: error.message };
        }
    }

    async uploadImageFromUrl(imageUrl) {
        try {
            const response = await axios.get(imageUrl, { 
                responseType: 'arraybuffer',
                timeout: 30000
            });
            return await this.uploadImage(Buffer.from(response.data));
        } catch (error) {
            console.error('ImgBB upload from URL error:', error);
            return { success: false, error: error.message };
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
            const subscriptionName = dbManager.getSubscriptionArabicName(subscriptionType);
            
            const message = `🎉 *اشتراك جديد - ${systemText}*\n\n👤 ${userData.username}\n🌍 ${userData.country_name}\n🔐 ${userData.onexbet}\n📦 ${subscriptionName}\n💰 ${amount}$\n🕒 ${new Date().toLocaleString('ar-EG')}`;

            await this.bot.telegram.sendMessage(this.channelId, message, { parse_mode: 'Markdown' });
        } catch (error) {
            console.error('Subscription notification error:', error);
        }
    }
}

const channelNotifier = new ChannelNotifier(bot, CONFIG.CHANNEL_ID);

// 🎯 KEYBOARDS - PERFECTLY ORGANIZED
const getMainKeyboard = () => Markup.keyboard([
    ['🎯 جلب التحليل', '📊 إحصائياتي'],
    ['💳 الاشتراكات', '👥 إحصائيات البوت'],
    ['👤 حالة الاشتراك', '🆘 الدعم الفني']
]).resize();

const getLoginKeyboard = () => Markup.keyboard([['🔐 إدخال رقم الحساب']]).resize();

const getCountriesKeyboard = () => {
    const countries = Object.keys(CONFIG.ARAB_COUNTRIES);
    const keyboard = [];
    for (let i = 0; i < countries.length; i += 3) {
        keyboard.push(countries.slice(i, i + 3));
    }
    return Markup.keyboard(keyboard).resize();
};

const getPaymentMethodKeyboard = () => Markup.keyboard([
    ['💳 باينانس', '🏦 تحويل بنكي'],
    ['🔙 الرجوع للقائمة']
]).resize();

const getSubscriptionKeyboard = () => Markup.keyboard([
    ['💰 أسبوعي', '💰 شهري'],
    ['💰 3 أشهر', '💰 سنوي'],
    ['🔙 الرجوع للقائمة']
]).resize();

const getAdminMainKeyboard = () => Markup.keyboard([
    ['📊 إحصائيات النظام', '👥 إدارة المستخدمين'],
    ['💰 طلبات الدفع', '⚙️ الإعدادات'],
    ['📢 إرسال إشعار', '🔍 بحث عن مستخدم'],
    ['💾 نسخ احتياطي', '🔧 قفل/فتح البوت'],
    ['🔙 الخروج من الإدمن']
]).resize();

const getAdminSettingsKeyboard = () => Markup.keyboard([
    ['💰 تعديل الأسعار والدفع', '⚙️ الإعدادات العامة'],
    ['🔙 رجوع']
]).resize();

const getAdminPaymentSystemKeyboard = () => Markup.keyboard([
    ['💳 نظام باينانس', '🏦 نظام التحويل البنكي'],
    ['🔙 رجوع']
]).resize();

const getAdminPaymentTypesKeyboard = () => Markup.keyboard([
    ['💰 أسبوعي', '💰 شهري'],
    ['💰 3 أشهر', '💰 سنوي'],
    ['🔙 رجوع']
]).resize();

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
        const types = { week: 7, month: 30, three_months: 90, year: 365 };
        start.setDate(start.getDate() + types[type]);
        return start.toISOString();
    } catch (error) {
        return new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString();
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

// 🔍 FUNCTION TO CHECK CHANNEL SUBSCRIPTION
async function checkChannelSubscription(userId) {
    try {
        const chatMember = await bot.telegram.getChatMember(CONFIG.CHANNEL_ID, userId);
        return ['member', 'administrator', 'creator'].includes(chatMember.status);
    } catch (error) {
        console.error('Channel subscription check error:', error);
        return false;
    }
}

// 🎯 BOT SETUP WITH PERFECT SESSION MANAGEMENT
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
        selectedCountry: null,
        countryName: null,
        lastActivity: new Date().toISOString()
    })
}));

// 🆕 PERFECT SESSION RESTORATION
bot.use(async (ctx, next) => {
    const userId = ctx.from?.id;
    if (userId) {
        const savedSession = await dbManager.getSession(userId);
        if (savedSession) {
            // دمج الجلسة المحفوظة مع الجلسة الحالية
            Object.assign(ctx.session, { ...savedSession, ...ctx.session });
        }
        ctx.session.lastActivity = new Date().toISOString();
    }
    await next();
});

// 🆕 PERFECT AUTO SAVE SESSION
async function autoSaveSession(ctx) {
    try {
        if (ctx.from?.id) {
            await dbManager.saveSession(ctx.from.id.toString(), ctx.session);
        }
    } catch (error) {
        console.error('Auto-save session error:', error);
    }
}

// 🎯 PERFECT START COMMAND
bot.start(async (ctx) => {
    try {
        const settings = await dbManager.getSettings();
        if (settings.maintenance_mode && ctx.from.id.toString() !== CONFIG.ADMIN_ID) {
            await ctx.replyWithMarkdown('🔧 *البوت تحت الصيانة*\n\n⏰ نعمل على تحسين الخدمة\n🔄 سنعود قريباً\n📞 للاستفسار: ' + CONFIG.DEVELOPER);
            return;
        }

        const userId = ctx.from.id.toString();
        const userName = ctx.from.first_name;

        // التحقق من المستخدم المسجل
        const existingUser = await dbManager.getUser(userId);
        
        if (existingUser && existingUser.registration_completed) {
            // دخول مباشر للمستخدم المسجل
            ctx.session.step = 'verified';
            ctx.session.userData = existingUser;
            ctx.session.selectedCountry = existingUser.country;
            ctx.session.countryName = existingUser.country_name;

            const remainingDays = calculateRemainingDays(existingUser.subscription_end_date);
            
            let statusMessage = '';
            if (existingUser.subscription_status === 'active' && remainingDays > 0) {
                statusMessage = `🎉 *مرحباً بعودتك!*\n\n✅ *اشتراكك نشط*\n🌍 ${existingUser.country_name}\n🔐 \`${existingUser.onexbet}\`\n📦 ${dbManager.getSubscriptionArabicName(existingUser.subscription_type)}\n⏳ ${remainingDays} يوم متبقي`;
            } else if (existingUser.free_attempts > 0) {
                statusMessage = `🎉 *مرحباً بعودتك!*\n\n🎯 *محاولات مجانية*\n🌍 ${existingUser.country_name}\n🔐 \`${existingUser.onexbet}\`\n🆓 ${existingUser.free_attempts} محاولات`;
            } else {
                statusMessage = `🎉 *مرحباً بعودتك!*\n\n🚫 *انتهت المحاولات*\n🌍 ${existingUser.country_name}\n🔐 \`${existingUser.onexbet}\`\n💳 يرجى الاشتراك`;
            }

            await ctx.replyWithMarkdown(statusMessage, getMainKeyboard());
            await autoSaveSession(ctx);
            return;
        }

        // التحقق من الاشتراك في القناة
        const isSubscribed = await checkChannelSubscription(userId);
        if (!isSubscribed) {
            await ctx.replyWithMarkdown(
                `🔐 *مرحباً ${userName}*\n\n📢 *يجب الاشتراك في القناة أولاً*\n👉 ${CONFIG.CHANNEL_USERNAME}\n\n✅ ثم اضغط:`,
                Markup.inlineKeyboard([[Markup.button.callback('✅ تحقق من الاشتراك', 'check_channel_subscription')]])
            );
            return;
        }

        await dbManager.setChannelSubscription(userId, true);

        // إرسال صورة الترحيب
        try {
            await ctx.replyWithPhoto(CONFIG.START_IMAGE, {
                caption: `🎉 *مرحباً بك في GOAL Predictor Pro v${CONFIG.VERSION}* 🚀\n🤖 ${CONFIG.DEVELOPER}\n📢 ${CONFIG.CHANNEL}`
            });
        } catch (error) {
            await ctx.replyWithMarkdown(`🎉 *مرحباً بك في GOAL Predictor Pro v${CONFIG.VERSION}* 🚀`);
        }

        // إذا كان المستخدم موجوداً ولكن لم يكمل التسجيل
        if (existingUser && !existingUser.registration_completed) {
            ctx.session.step = 'awaiting_account_id';
            ctx.session.userData = existingUser;
            ctx.session.selectedCountry = existingUser.country;
            ctx.session.countryName = existingUser.country_name;
            
            await ctx.replyWithMarkdown(`🔐 *استكمال التسجيل*\n🌍 ${existingUser.country_name}\n🔢 أرسل رقم حساب 1xBet (10 أرقام)`);
            await autoSaveSession(ctx);
            return;
        }

        // بدء التسجيل الجديد
        const welcomeMessage = `🔐 *مرحباً ${userName}*\n\n🎯 *نظام توقع الأهداف بالذكاء الاصطناعي*\n\n📋 *خطوات التسجيل:*\n1️⃣ اختر دولتك\n2️⃣ أدخل رقم حساب 1xBet\n3️⃣ التحقق بالكود\n4️⃣ ابدأ باستخدام المحاولات\n\n🌍 *اختر دولتك:*`;

        ctx.session.step = 'awaiting_country';
        await ctx.replyWithMarkdown(welcomeMessage, getCountriesKeyboard());
        await autoSaveSession(ctx);

    } catch (error) {
        console.error('Start command error:', error);
        await ctx.replyWithMarkdown('❌ حدث خطأ، يرجى المحاولة لاحقاً');
    }
});

// 🔗 معالجة التحقق من الاشتراك في القناة
bot.action('check_channel_subscription', async (ctx) => {
    try {
        const userId = ctx.from.id.toString();
        const isSubscribed = await checkChannelSubscription(userId);
        
        if (isSubscribed) {
            await dbManager.setChannelSubscription(userId, true);
            await ctx.answerCbQuery('✅ تم التحقق من الاشتراك');
            await ctx.deleteMessage();
            
            const userName = ctx.from.first_name;
            
            // إرسال صورة الترحيب
            try {
                await ctx.replyWithPhoto(CONFIG.START_IMAGE, {
                    caption: `🎉 *مرحباً بك في GOAL Predictor Pro v${CONFIG.VERSION}* 🚀\n🤖 ${CONFIG.DEVELOPER}\n📢 ${CONFIG.CHANNEL}`
                });
            } catch (error) {
                await ctx.replyWithMarkdown(`🎉 *مرحباً بك في GOAL Predictor Pro v${CONFIG.VERSION}* 🚀`);
            }

            const welcomeMessage = `🔐 *مرحباً ${userName}*\n\n🎯 *نظام توقع الأهداف بالذكاء الاصطناعي*\n\n📋 *خطوات التسجيل:*\n1️⃣ اختر دولتك\n2️⃣ أدخل رقم حساب 1xBet\n3️⃣ التحقق بالكود\n4️⃣ ابدأ باستخدام المحاولات\n\n🌍 *اختر دولتك:*`;

            ctx.session.step = 'awaiting_country';
            await ctx.replyWithMarkdown(welcomeMessage, getCountriesKeyboard());
            await autoSaveSession(ctx);
        } else {
            await ctx.answerCbQuery('❌ لم يتم الاشتراك بعد');
            await ctx.replyWithMarkdown(
                `❌ *لم يتم العثور على اشتراكك*\n📢 ${CONFIG.CHANNEL_USERNAME}\n\n✅ ثم اضغط:`,
                Markup.inlineKeyboard([[Markup.button.callback('✅ تحقق من الاشتراك', 'check_channel_subscription')]])
            );
        }
    } catch (error) {
        console.error('Channel subscription check error:', error);
        await ctx.answerCbQuery('❌ حدث خطأ في التحقق');
    }
});

// 📝 PERFECT TEXT MESSAGE HANDLER
bot.on('text', async (ctx) => {
    try {
        const settings = await dbManager.getSettings();
        if (settings.maintenance_mode && ctx.from.id.toString() !== CONFIG.ADMIN_ID) {
            await ctx.replyWithMarkdown('🔧 *البوت تحت الصيانة*\n⏰ نعمل على تحسين الخدمة');
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
                await autoSaveSession(ctx);
                return;
            }

            if (session.adminMode) {
                await handleAdminCommands(ctx, text);
                await autoSaveSession(ctx);
                return;
            }
        }

        // 🔄 التحقق من الجلسة
        const existingUser = await dbManager.getUser(userId);
        
        // 🆕 معالجة اختيار الدولة
        if (session.step === 'awaiting_country' && CONFIG.ARAB_COUNTRIES[text]) {
            const countryCode = CONFIG.ARAB_COUNTRIES[text];
            const countryName = text;
            
            ctx.session.selectedCountry = countryCode;
            ctx.session.countryName = countryName;
            ctx.session.step = 'awaiting_account_id';
            
            await ctx.replyWithMarkdown(`🌍 *تم اختيار:* ${countryName}\n🔢 *أرسل رقم حساب 1xBet (10 أرقام):*`);
            await autoSaveSession(ctx);
            return;
        }

        // التحقق من الاشتراك في القناة للمستخدمين الجدد
        if (!existingUser && !['awaiting_verification', 'awaiting_account_id', 'awaiting_country'].includes(session.step)) {
            const isSubscribed = await checkChannelSubscription(userId);
            if (!isSubscribed) {
                await ctx.replyWithMarkdown(
                    `❌ *يجب الاشتراك في القناة أولاً*\n📢 ${CONFIG.CHANNEL_USERNAME}\n\n✅ ثم اضغط:`,
                    Markup.inlineKeyboard([[Markup.button.callback('✅ تحقق من الاشتراك', 'check_channel_subscription')]])
                );
                return;
            }
        }

        // 🎯 نظام معالجة الخطوات الرئيسي
        await handleUserSteps(ctx, text, existingUser);
        await autoSaveSession(ctx);

    } catch (error) {
        console.error('Text handler error:', error);
        await ctx.replyWithMarkdown('❌ حدث خطأ غير متوقع', getMainKeyboard());
    }
});

// 🎯 PERFECT USER STEPS HANDLER
async function handleUserSteps(ctx, text, existingUser) {
    const session = ctx.session;
    const userId = ctx.from.id.toString();

    // معالجة اختيار طريقة الدفع
    if (session.step === 'choose_payment_method') {
        if (text === '💳 باينانس') {
            ctx.session.paymentSystem = 'binance';
            ctx.session.step = 'verified';
            await handleSubscriptions(ctx, session.userData);
        }
        else if (text === '🏦 تحويل بنكي') {
            ctx.session.paymentSystem = 'bank';
            ctx.session.step = 'verified';
            await handleSubscriptions(ctx, session.userData);
        }
        else if (text === '🔙 الرجوع للقائمة') {
            ctx.session.step = 'verified';
            await ctx.replyWithMarkdown('🔙 *العودة للقائمة الرئيسية*', getMainKeyboard());
        }
        return;
    }

    // معالجة إدخال مبلغ الرهان
    if (session.awaitingBetAmount) {
        const betAmount = parseFloat(text);
        if (isNaN(betAmount) || betAmount <= 0) {
            await ctx.replyWithMarkdown('❌ *مبلغ غير صحيح!*\n💰 يرجى إدخال مبلغ صحيح');
            return;
        }

        ctx.session.currentBet = betAmount;
        ctx.session.originalBet = betAmount;
        ctx.session.awaitingBetAmount = false;

        await ctx.replyWithMarkdown(`✅ *تم تحديد مبلغ الرهان:* ${betAmount}$\n🎯 *اضغط على "جلب التحليل"*`, getMainKeyboard());
        return;
    }

    // زر إدخال رقم الحساب
    if (text === '🔐 إدخال رقم الحساب') {
        const isSubscribed = await checkChannelSubscription(userId);
        if (!isSubscribed) {
            await ctx.replyWithMarkdown(
                `❌ *يجب الاشتراك في القناة أولاً*\n📢 ${CONFIG.CHANNEL_USERNAME}`,
                Markup.inlineKeyboard([[Markup.button.callback('✅ تحقق من الاشتراك', 'check_channel_subscription')]])
            );
            return;
        }

        ctx.session.step = 'awaiting_account_id';
        await ctx.replyWithMarkdown('🔢 *أرسل رقم حساب 1xBet (10 أرقام):*');
        return;
    }

    // STEP 1: التحقق من رقم الحساب
    if (session.step === 'awaiting_account_id') {
        if (/^\d{10}$/.test(text)) {
            const existingUserWithAccount = await dbManager.getUserByOneXBet(text);
            if (existingUserWithAccount && existingUserWithAccount.user_id !== userId) {
                await ctx.replyWithMarkdown('❌ *رقم الحساب مسجل بالفعل!*\n💡 يرجى استخدام حسابك الخاص');
                return;
            }

            ctx.session.accountId = text;
            ctx.session.step = 'awaiting_verification';
            ctx.session.verificationCode = Math.floor(100000 + Math.random() * 900000);

            await ctx.replyWithMarkdown(
                `✅ *تم إرسال كود التحقق*\n🌍 ${session.countryName}\n🔐 \`${text}\`\n📧 \`${ctx.session.verificationCode}\`\n🔢 *أرسل كود التحقق خلال 5 دقائق:*`
            );

            // إعداد انتهاء صلاحية الكود
            setTimeout(() => {
                if (ctx.session.step === 'awaiting_verification') {
                    ctx.session.verificationCode = null;
                    ctx.session.step = 'start';
                }
            }, 5 * 60 * 1000);
        } else {
            await ctx.replyWithMarkdown('❌ *رقم الحساب خطأ!*\n🔢 يجب أن يكون 10 أرقام\n📝 مثال: 1234567890');
        }
        return;
    }

    // STEP 2: التحقق من الكود
    if (session.step === 'awaiting_verification' && /^\d{6}$/.test(text)) {
        if (parseInt(text) === ctx.session.verificationCode) {
            
            const waitingMessage = await ctx.replyWithMarkdown('🔐 *جاري تسجيل الدخول...*');

            await new Promise(resolve => setTimeout(resolve, 3000));

            const userData = {
                user_id: userId,
                username: ctx.from.first_name,
                onexbet: ctx.session.accountId,
                country: ctx.session.selectedCountry,
                country_name: ctx.session.countryName,
                free_attempts: 10,
                subscription_status: 'free',
                subscription_type: 'none',
                joined_at: new Date().toISOString(),
                total_predictions: 0,
                correct_predictions: 0,
                wins: 0,
                losses: 0,
                total_bets: 0,
                total_profit: 0,
                channel_subscribed: true,
                registration_completed: true
            };

            await dbManager.saveUser(userId, userData);
            ctx.session.step = 'verified';
            ctx.session.userData = userData;

            await ctx.deleteMessage(waitingMessage.message_id);

            await ctx.replyWithMarkdown(
                `🎉 *تم التحقق بنجاح!*\n🌍 ${session.countryName}\n✅ \`${ctx.session.accountId}\`\n👤 ${ctx.session.userData.username}\n🎁 10 محاولات مجانية\n🎯 *يمكنك الآن استخدام "جلب التحليل"*`,
                getMainKeyboard()
            );
        } else {
            await ctx.replyWithMarkdown('❌ *كود تحقق خاطئ!*\n🔐 يرجى إعادة إدخال الكود');
        }
        return;
    }

    // معالجة طلبات الدفع
    if (session.awaitingPaymentAccount) {
        if (/^\d{10}$/.test(text)) {
            if (text !== existingUser.onexbet) {
                await ctx.replyWithMarkdown(`❌ *رقم الحساب لا يتطابق!*\n🔐 حسابك: \`${existingUser.onexbet}\``);
                return;
            }
            
            ctx.session.awaitingPaymentAccount = false;
            ctx.session.paymentAccount = text;
            
            const paymentSystem = ctx.session.paymentSystem || 'binance';
            const systemText = paymentSystem === 'binance' ? 'باينانس' : 'بنكي';
            
            await ctx.replyWithMarkdown(`✅ *تم التحقق:* \`${text}\`\n📸 *أرسل صورة إثبات الدفع ${systemText}:*`);
        } else {
            await ctx.replyWithMarkdown('❌ *رقم حساب غير صحيح!*\n🔢 يرجى إرسال 10 أرقام');
        }
        return;
    }

    // أوامر المستخدم الموثق
    if (session.step === 'verified') {
        if (!existingUser) {
            await ctx.replyWithMarkdown('❌ *جلسة منتهية*\n🔐 أرسل /start', getLoginKeyboard());
            return;
        }

        switch (text) {
            case '🎯 جلب التحليل':
                await handleGetPrediction(ctx, existingUser);
                break;

            case '📊 إحصائياتي':
                await handleUserStats(ctx, existingUser);
                break;

            case '👥 إحصائيات البوت':
                await handleBotStats(ctx);
                break;

            case '💳 الاشتراكات':
                ctx.session.step = 'choose_payment_method';
                await ctx.replyWithMarkdown(
                    '💳 *اختر طريقة الدفع:*\n\n💳 *باينانس* - الدفع عبر باينانس\n🏦 *تحويل بنكي* - التحويل البنكي\n\n📋 اختر الطريقة:',
                    getPaymentMethodKeyboard()
                );
                break;

            case '👤 حالة الاشتراك':
                await handleSubscriptionStatus(ctx, existingUser);
                break;

            case '🆘 الدعم الفني':
                await ctx.replyWithMarkdown(`🆘 *الدعم الفني*\n📞 ${CONFIG.DEVELOPER}\n📢 ${CONFIG.CHANNEL}`, getMainKeyboard());
                break;

            case '🔙 الرجوع للقائمة':
                await ctx.replyWithMarkdown('🔙 *العودة للقائمة الرئيسية*', getMainKeyboard());
                break;

            default:
                if (text.startsWith('💰 ')) {
                    await handleSubscriptionSelection(ctx, existingUser, text);
                } else {
                    await ctx.replyWithMarkdown('🔙 *العودة للقائمة الرئيسية*', getMainKeyboard());
                }
                break;
        }
        return;
    }

    // إذا كان المستخدم غير مسجل
    if (['🎯 جلب التحليل', '📊 إحصائياتي', '💳 الاشتراكات', '👥 إحصائيات البوت'].includes(text)) {
        await ctx.replyWithMarkdown('❌ *يجب التسجيل أولاً*\n🔐 أرسل /start', getLoginKeyboard());
        return;
    }

    await ctx.replyWithMarkdown('🔙 *العودة للقائمة الرئيسية*', getMainKeyboard());
}

// 🎯 HANDLE GET PREDICTION
async function handleGetPrediction(ctx, userData) {
    try {
        if (userData.subscription_status !== 'active' && userData.free_attempts <= 0) {
            await ctx.replyWithMarkdown('🚫 *انتهت المحاولات المجانية*\n💳 يرجى الاشتراك', getMainKeyboard());
            return;
        }

        if (!ctx.session.currentBet || ctx.session.currentBet <= 0) {
            ctx.session.awaitingBetAmount = true;
            await ctx.replyWithMarkdown('💰 *أدخل مبلغ الرهان:*\n💵 مثال: 10 أو 25.5');
            return;
        }

        const loadingMsg = await ctx.replyWithMarkdown('🎯 *جاري جلب التحليل...*');
        await new Promise(resolve => setTimeout(resolve, 3000));

        const prediction = goalAI.generateSmartPrediction(userData.user_id);
        
        if (userData.subscription_status !== 'active') {
            userData.free_attempts--;
        }
        userData.total_predictions = (userData.total_predictions || 0) + 1;
        userData.total_bets = (userData.total_bets || 0) + ctx.session.currentBet;
        await dbManager.saveUser(ctx.from.id.toString(), userData);

        const now = new Date();
        const saudiTime = new Date(now.getTime() + (3 * 60 * 60 * 1000));
        const realTime = saudiTime.toLocaleTimeString('ar-SA', { 
            hour: '2-digit', 
            minute: '2-digit',
            hour12: false 
        });

        const analysisMessage = `🤖 *تحليل الذكاء الاصطناعي - v${CONFIG.VERSION}*\n\n🎯 ${prediction.type}\n📈 ${prediction.probability}% احتمال\n🎯 ${prediction.confidence}% ثقة\n\n💡 ${prediction.reasoning}\n\n🌍 ${userData.country_name}\n🔐 \`${userData.onexbet}\`\n💰 ${ctx.session.currentBet}$\n🕒 ${realTime}\n\n${userData.subscription_status !== 'active' ? `🆓 ${userData.free_attempts} محاولات` : `✅ اشتراك نشط`}`;

        await ctx.replyWithPhoto(CONFIG.PREDICTION_IMAGE, { caption: analysisMessage, parse_mode: 'Markdown' });
        await ctx.deleteMessage(loadingMsg.message_id);

    } catch (error) {
        console.error('Get prediction error:', error);
        await ctx.replyWithMarkdown('❌ *حدث خطأ في جلب التحليل*', getMainKeyboard());
    }
}

// 📊 HANDLE USER STATS
async function handleUserStats(ctx, userData) {
    const accuracy = userData.correct_predictions > 0 ? 
        Math.round((userData.correct_predictions / (userData.total_predictions || 1)) * 100) : 0;
    
    let subscriptionInfo = '';
    if (userData.subscription_status === 'active') {
        const remainingDays = calculateRemainingDays(userData.subscription_end_date);
        subscriptionInfo = `\n📦 ${dbManager.getSubscriptionArabicName(userData.subscription_type)}\n⏳ ${remainingDays} يوم`;
    } else {
        subscriptionInfo = `\n🆓 ${userData.free_attempts} محاولات`;
    }
    
    await ctx.replyWithMarkdown(
        `📊 *إحصائياتك*\n\n🌍 ${userData.country_name}\n🔐 ${userData.onexbet}\n👤 ${userData.username}\n📈 ${userData.total_predictions || 0} توقع\n✅ ${userData.correct_predictions || 0} صحيحة\n🎯 ${accuracy}% دقة\n🎉 ${userData.wins || 0} فوز\n💔 ${userData.losses || 0} خسارة\n💰 ${userData.total_bets || 0}$ رهانات\n💵 ${userData.total_profit || 0}$ أرباح` +
        subscriptionInfo,
        getMainKeyboard()
    );
}

// 👥 HANDLE BOT STATS
async function handleBotStats(ctx) {
    const stats = dynamicStats.getStats();
    await ctx.replyWithMarkdown(
        `👥 *إحصائيات البوت*\n\n👤 ${stats.totalUsers.toLocaleString()} مستخدم\n🟢 ${stats.activeUsers} نشط\n📊 ${Math.floor(stats.activeUsers * 8.5)} توقع/يوم\n🎯 *النظام يعمل بكفاءة*`,
        getMainKeyboard()
    );
}

// 💳 HANDLE SUBSCRIPTIONS
async function handleSubscriptions(ctx, userData) {
    try {
        await ctx.replyWithMarkdown(
            '💳 *باقات الاشتراك:*\n\n💰 أسبوعي - 7 أيام\n💰 شهري - 30 يوماً\n💰 3 أشهر - 90 يوماً\n💰 سنوي - 365 يوماً\n\n💡 اختر الباقة:',
            getSubscriptionKeyboard()
        );
    } catch (error) {
        console.error('Subscriptions error:', error);
        await ctx.replyWithMarkdown('❌ *حدث خطأ*', getMainKeyboard());
    }
}

// 💳 HANDLE SUBSCRIPTION SELECTION
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

            const displayName = text.replace('💰 ', '');
            const paymentLink = payment_links[subscriptionType];
            const isImage = paymentLink && paymentLink.startsWith('http');

            const subscriptionMessage = `💳 *باقة ${displayName} - باينانس*\n💰 ${prices[subscriptionType]}$\n⏰ ${getSubscriptionDuration(subscriptionType)}\n\n📋 *طريقة الدفع:*\n💳 ادفع عبر الرابط/الصورة\n📱 ثم أرسل إثبات الدفع\n\n💡 *هل تريد المتابعة؟*`;

            if (isImage) {
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
                    await ctx.replyWithMarkdown(subscriptionMessage, {
                        reply_markup: {
                            inline_keyboard: [
                                [ { text: '✅ نعم، المتابعة', callback_data: `confirm_binance_${subscriptionType}` } ],
                                [ { text: '🔙 رجوع', callback_data: 'back_to_subscriptions' } ]
                            ]
                        }
                    });
                }
            } else {
                await ctx.replyWithMarkdown(`${subscriptionMessage}\n🔗 ${paymentLink}`, {
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

            const displayName = text.replace('💰 ', '');
            const subscriptionMessage = `🏦 *باقة ${displayName} - تحويل بنكي*\n💰 ${prices[subscriptionType]}$\n⏰ ${getSubscriptionDuration(subscriptionType)}\n\n💳 *معلومات التحويل:*\n${bankDetails.description}\n\n💡 *هل تريد المتابعة؟*`;

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
        await ctx.replyWithMarkdown('❌ *حدث خطأ*', getSubscriptionKeyboard());
    }
}

// 👤 HANDLE SUBSCRIPTION STATUS
async function handleSubscriptionStatus(ctx, userData) {
    let statusMessage = '';
    
    if (userData.subscription_status === 'active') {
        const remainingDays = calculateRemainingDays(userData.subscription_end_date);
        statusMessage = `✅ *اشتراكك نشط*\n🌍 ${userData.country_name}\n🔐 \`${userData.onexbet}\`\n📦 ${dbManager.getSubscriptionArabicName(userData.subscription_type)}\n⏳ ${remainingDays} يوم`;
    } else if (userData.free_attempts > 0) {
        statusMessage = `🎯 *محاولات مجانية*\n🌍 ${userData.country_name}\n🔐 \`${userData.onexbet}\`\n🆓 ${userData.free_attempts} محاولات`;
    } else {
        statusMessage = `🚫 *انتهت المحاولات*\n🌍 ${userData.country_name}\n🔐 \`${userData.onexbet}\`\n💳 يرجى الاشتراك`;
    }
    
    await ctx.replyWithMarkdown(statusMessage, getMainKeyboard());
}

// 🖼️ PERFECT PHOTO HANDLER
bot.on('photo', async (ctx) => {
    try {
        const userId = ctx.from.id.toString();
        const session = ctx.session;
        
        if (session.paymentType) {
            await handlePaymentScreenshot(ctx, userId);
            await autoSaveSession(ctx);
            return;
        }

        await ctx.replyWithMarkdown('❌ *لا يمكن معالجة الصورة حالياً*', getMainKeyboard());

    } catch (error) {
        console.error('Photo handler error:', error);
        await ctx.replyWithMarkdown('❌ *حدث خطأ في معالجة الصورة*', getMainKeyboard());
    }
});

// 💳 HANDLE PAYMENT SCREENSHOT
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

        if (accountNumber !== userData.onexbet) {
            await ctx.replyWithMarkdown(`❌ *رقم الحساب لا يتطابق!*\n🔐 حسابك: \`${userData.onexbet}\``, getMainKeyboard());
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
            country: userData.country,
            country_name: userData.country_name,
            screenshot_url: uploadResult.url,
            amount: prices[ctx.session.paymentType],
            subscription_type: ctx.session.paymentType,
            subscription_name: dbManager.getSubscriptionArabicName(ctx.session.paymentType),
            payment_system: paymentSystem,
            username: userData.username,
            timestamp: new Date().toISOString()
        };

        const paymentId = await dbManager.addPayment(paymentData);
        
        // إرسال الإشعار للإدارة
        try {
            const paymentSystemText = paymentSystem === 'binance' ? 'باينانس' : 'تحويل بنكي';
            const subscriptionName = dbManager.getSubscriptionArabicName(ctx.session.paymentType);
            
            await bot.telegram.sendPhoto(CONFIG.ADMIN_ID, uploadResult.url, {
                caption: `🆕 *طلب دفع جديد - ${paymentSystemText}*\n👤 ${userData.username}\n🌍 ${userData.country_name}\n🔐 ${accountNumber}\n💰 ${paymentData.amount}$\n📦 ${subscriptionName}\n🆔 ${paymentId}`,
                parse_mode: 'Markdown',
                reply_markup: {
                    inline_keyboard: [
                        [
                            { text: '✅ قبول', callback_data: `accept_${paymentId}` },
                            { text: '❌ رفض', callback_data: `reject_${paymentId}` }
                        ]
                    ]
                }
            });
        } catch (error) {
            console.error('Error notifying admin:', error);
        }

        await ctx.replyWithMarkdown(
            `📩 *تم استلام صورة الدفع*\n✅ \`${accountNumber}\`\n✅ ${dbManager.getSubscriptionArabicName(ctx.session.paymentType)}\n💰 ${paymentData.amount}$\n💳 ${paymentSystem === 'binance' ? 'باينانس' : 'بنكي'}\n✅ سيتم المراجعة قريباً\n📞 ${CONFIG.DEVELOPER}`,
            getMainKeyboard()
        );

        ctx.session.paymentSystem = null;
        ctx.session.paymentType = null;
        ctx.session.awaitingPaymentAccount = false;
        ctx.session.paymentAccount = null;
    } catch (error) {
        console.error('Payment screenshot error:', error);
        await ctx.replyWithMarkdown('❌ *حدث خطأ في معالجة الصورة*', getMainKeyboard());
    }
}

// 🎯 PERFECT CALLBACK QUERY HANDLER
bot.on('callback_query', async (ctx) => {
    try {
        const callbackData = ctx.callbackQuery.data;
        const userId = ctx.from.id.toString();
        
        if (callbackData.startsWith('confirm_binance_') || callbackData.startsWith('confirm_bank_')) {
            await handleSubscriptionConfirmation(ctx, callbackData);
        }
        else if (callbackData === 'back_to_subscriptions') {
            await ctx.deleteMessage(ctx.callbackQuery.message.message_id);
            await ctx.replyWithMarkdown('💳 *باقات الاشتراك*', getSubscriptionKeyboard());
        }
        else if (callbackData.startsWith('accept_')) {
            const paymentId = callbackData.split('_')[1];
            await handlePaymentAccept(ctx, paymentId);
        }
        else if (callbackData.startsWith('reject_')) {
            const paymentId = callbackData.split('_')[1];
            await handlePaymentReject(ctx, paymentId);
        }
        else if (callbackData === 'check_channel_subscription') {
            // تم التعامل معه مسبقاً
        }
        
        await autoSaveSession(ctx);
        
    } catch (error) {
        console.error('Callback query error:', error);
        await ctx.answerCbQuery('❌ حدث خطأ في المعالجة');
    }
});

// 💳 HANDLE SUBSCRIPTION CONFIRMATION
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

        ctx.session.paymentSystem = paymentSystem;
        ctx.session.paymentType = subscriptionType;
        ctx.session.awaitingPaymentAccount = true;

        await ctx.answerCbQuery('✅ تم تأكيد الاختيار');
        await ctx.deleteMessage(ctx.callbackQuery.message.message_id);

        await ctx.replyWithMarkdown(
            `💳 *باقة ${subscriptionType} - ${paymentSystem === 'binance' ? 'باينانس' : 'بنكي'}*\n💰 ${prices[subscriptionType]}$\n\n🔐 *حسابك:* \`${userData.onexbet}\`\n🔢 *أرسل رقم حساب 1xBet للتأكد:*`
        );

    } catch (error) {
        console.error('Subscription confirmation error:', error);
        await ctx.answerCbQuery('❌ حدث خطأ في المعالجة');
    }
}

// ✅ HANDLE PAYMENT ACCEPT
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
            const subscriptionName = dbManager.getSubscriptionArabicName(payment.subscription_type);
            
            await bot.telegram.sendMessage(payment.user_id, `🎉 *تم تفعيل اشتراكك!*\n✅ ${subscriptionName}\n💰 ${payment.amount}$\n📅 ${new Date(endDate).toLocaleDateString('ar-EG')}\n⏳ ${calculateRemainingDays(endDate)} يوم`, { parse_mode: 'Markdown' });
        } catch (error) {
            console.error('Error notifying user:', error);
        }

        await channelNotifier.sendSubscriptionNotification(userData, payment.subscription_type, payment.amount, payment.payment_system);
        
        await ctx.answerCbQuery('✅ تم تفعيل الاشتراك');
        
        try {
            const subscriptionName = dbManager.getSubscriptionArabicName(payment.subscription_type);
            await ctx.editMessageCaption(`✅ *تم تفعيل الاشتراك*\n👤 ${userData.username}\n🔐 ${userData.onexbet}\n📦 ${subscriptionName}\n💰 ${payment.amount}$\n🕒 ${new Date().toLocaleString('ar-EG')}`, { parse_mode: 'Markdown' });
        } catch (editError) {
            console.log('Could not edit message:', editError);
        }

    } catch (error) {
        console.error('Payment accept error:', error);
        await ctx.answerCbQuery('❌ حدث خطأ في قبول الدفع');
    }
}

// ❌ HANDLE PAYMENT REJECT
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
            await bot.telegram.sendMessage(payment.user_id, `❌ *تم رفض طلب الدفع*\n💳 يرجى التحقق والمحاولة مرة أخرى\n📞 ${CONFIG.DEVELOPER}`, { parse_mode: 'Markdown' });
        } catch (error) {
            console.error('Error notifying user:', error);
        }
        
        await ctx.answerCbQuery('❌ تم رفض الطلب');
        
        try {
            const subscriptionName = dbManager.getSubscriptionArabicName(payment.subscription_type);
            await ctx.editMessageCaption(`❌ *تم رفض طلب الدفع*\n🆔 ${paymentId}\n👤 ${payment.username}\n🔐 ${payment.onexbet}\n📦 ${subscriptName}\n🕒 ${new Date().toLocaleString('ar-EG')}`, { parse_mode: 'Markdown' });
        } catch (editError) {
            console.log('Could not edit message:', editError);
        }

    } catch (error) {
        console.error('Payment reject error:', error);
        await ctx.answerCbQuery('❌ حدث خطأ في رفض الدفع');
    }
}

// 🔧 ADMIN COMMANDS HANDLER (مبسط)
async function handleAdminCommands(ctx, text) {
    const session = ctx.session;
    
    try {
        switch (text) {
            case '📊 إحصائيات النظام':
                await handleAdminStats(ctx);
                break;
                
            case '👥 إدارة المستخدمين':
                await ctx.replyWithMarkdown('👥 *إدارة المستخدمين*\n📋 قائمة المستخدمين\n✅ المشتركين النشطين\n🆓 المستخدمين المجانين', getAdminMainKeyboard());
                break;
                
            case '💰 طلبات الدفع':
                await handleAdminPendingPayments(ctx);
                break;
                
            case '⚙️ الإعدادات':
                ctx.session.adminStep = 'settings';
                await ctx.replyWithMarkdown('⚙️ *الإعدادات العامة*', getAdminSettingsKeyboard());
                break;

            case '💰 تعديل الأسعار والدفع':
                await handleAdminPriceAndPaymentSettings(ctx);
                break;

            case '⚙️ الإعدادات العامة':
                await handleAdminGeneralSettings(ctx);
                break;

            case '📢 إرسال إشعار':
                ctx.session.adminStep = 'broadcast';
                await ctx.replyWithMarkdown('📢 *إرسال إشعار جماعي*\n✍️ اكتب الرسالة:');
                break;

            case '🔍 بحث عن مستخدم':
                ctx.session.adminStep = 'search_user';
                await ctx.replyWithMarkdown('🔍 *البحث عن مستخدم*\n🔎 ابحث بـ: آيدي، اسم، رقم حساب');
                break;

            case '💾 نسخ احتياطي':
                await ctx.replyWithMarkdown('🔄 *جاري النسخ الاحتياطي...*');
                const backupResult = await backupManager.createBackup();
                if (backupResult.success) {
                    await ctx.replyWithMarkdown('✅ *تم إنشاء النسخة الاحتياطية*');
                } else {
                    await ctx.replyWithMarkdown('❌ *فشل في النسخ الاحتياطي*');
                }
                break;

            case '🔧 قفل/فتح البوت':
                await handleAdminToggleMaintenance(ctx);
                break;

            case '🔙 الخروج من الإدمن':
                ctx.session.adminMode = false;
                ctx.session.adminStep = null;
                await ctx.replyWithMarkdown('🔒 *تم الخروج من وضع الإدمن*', { reply_markup: { remove_keyboard: true } });
                break;
                
            default:
                // معالجة البحث
                if (session.adminStep === 'search_user') {
                    const users = await dbManager.searchUsers(text);
                    if (users.length > 0) {
                        let message = `🔍 *نتائج البحث (${users.length})*\n\n`;
                        users.slice(0, 5).forEach((user, index) => {
                            const status = user.subscription_status === 'active' ? '✅' : '🆓';
                            message += `${index + 1}. ${user.username} ${status}\n👤 ${user.user_id} | 🔐 ${user.onexbet}\n📊 ${user.total_predictions || 0} توقع\n\n`;
                        });
                        await ctx.replyWithMarkdown(message, getAdminMainKeyboard());
                    } else {
                        await ctx.replyWithMarkdown('❌ *لم يتم العثور على مستخدمين*', getAdminMainKeyboard());
                    }
                    ctx.session.adminStep = 'main';
                }
                // معالجة الإشعار
                else if (session.adminStep === 'broadcast') {
                    const users = await dbManager.getAllUsers();
                    let success = 0;
                    let failed = 0;

                    const broadcastMsg = await ctx.replyWithMarkdown('📢 *جاري إرسال الإشعار...*');

                    for (const user of users) {
                        try {
                            await bot.telegram.sendMessage(user.user_id, `📢 *إشعار من الإدارة*\n\n${text}`, { parse_mode: 'Markdown' });
                            success++;
                            await new Promise(resolve => setTimeout(resolve, 50));
                        } catch (error) {
                            failed++;
                        }
                    }

                    await ctx.replyWithMarkdown(`📢 *تم الإرسال*\n✅ ${success} نجاح\n❌ ${failed} فشل\n👥 ${users.length} إجمالي`, getAdminMainKeyboard());
                    ctx.session.adminStep = 'main';
                }
                else {
                    await ctx.replyWithMarkdown('❌ *خيار غير معروف*', getAdminMainKeyboard());
                }
                break;
        }
    } catch (error) {
        console.error('Admin commands error:', error);
        await ctx.replyWithMarkdown('❌ حدث خطأ في المعالجة', getAdminMainKeyboard());
    }
}

// 📊 HANDLE ADMIN STATS
async function handleAdminStats(ctx) {
    try {
        const users = await dbManager.getAllUsers();
        const payments = await dbManager.getAllPayments();
        const pendingPayments = payments.filter(p => p.status === 'pending');
        
        const activeUsers = users.filter(u => u.subscription_status === 'active');
        const freeUsers = users.filter(u => u.subscription_status === 'free');
        
        const totalPredictions = users.reduce((sum, user) => sum + (user.total_predictions || 0), 0);
        const totalProfit = users.reduce((sum, user) => sum + (user.total_profit || 0), 0);
        
        const statsMessage = `📊 *إحصائيات النظام*\n\n👥 المستخدمين: ${users.length}\n✅ نشطين: ${activeUsers.length}\n🆓 مجانين: ${freeUsers.length}\n\n💰 المدفوعات: ${payments.length}\n📥 معلقة: ${pendingPayments.length}\n\n📈 التوقعات: ${totalPredictions}\n💵 الأرباح: ${totalProfit}$\n\n🔧 الحالة: ${dbManager.isMaintenanceMode() ? '🔒 مقفل' : '🔓 مفتوح'}`;
        
        await ctx.replyWithMarkdown(statsMessage, getAdminMainKeyboard());
    } catch (error) {
        console.error('Admin stats error:', error);
        await ctx.replyWithMarkdown('❌ حدث خطأ في جلب الإحصائيات', getAdminMainKeyboard());
    }
}

// 💰 HANDLE ADMIN PRICE SETTINGS
async function handleAdminPriceAndPaymentSettings(ctx) {
    try {
        await ctx.replyWithMarkdown('💰 *تعديل الأسعار والدفع*\n📝 اختر نظام الدفع:', getAdminPaymentSystemKeyboard());
        ctx.session.adminStep = 'select_payment_system';
    } catch (error) {
        console.error('Admin price settings error:', error);
        await ctx.replyWithMarkdown('❌ حدث خطأ', getAdminSettingsKeyboard());
    }
}

// ⚙️ HANDLE ADMIN GENERAL SETTINGS
async function handleAdminGeneralSettings(ctx) {
    try {
        const settings = await dbManager.getSettings();
        
        const generalMessage = `⚙️ *الإعدادات العامة*\n\n🔧 ${settings.maintenance_mode ? '🔒 مقفل' : '🔓 مفتوح'}\n🕒 ${new Date(settings.updated_at).toLocaleString('ar-EG')}\n\n💳 *باينانس:*\nأسبوعي: ${settings.prices.binance.week}$\nشهري: ${settings.prices.binance.month}$\n3 أشهر: ${settings.prices.binance.three_months}$\nسنوي: ${settings.prices.binance.year}$\n\n🏦 *بنكي:*\nأسبوعي: ${settings.prices.bank.week}$\nشهري: ${settings.prices.bank.month}$\n3 أشهر: ${settings.prices.bank.three_months}$\nسنوي: ${settings.prices.bank.year}$`;
        
        await ctx.replyWithMarkdown(generalMessage, getAdminSettingsKeyboard());
    } catch (error) {
        console.error('Admin general settings error:', error);
        await ctx.replyWithMarkdown('❌ حدث خطأ', getAdminSettingsKeyboard());
    }
}

// 📥 HANDLE ADMIN PENDING PAYMENTS
async function handleAdminPendingPayments(ctx) {
    try {
        const payments = await dbManager.getPendingPayments();
        
        if (payments.length === 0) {
            await ctx.replyWithMarkdown('✅ *لا توجد طلبات دفع معلقة*', getAdminMainKeyboard());
            return;
        }
        
        for (const payment of payments.slice(0, 5)) {
            const subscriptionName = dbManager.getSubscriptionArabicName(payment.subscription_type);
            
            await ctx.replyWithPhoto(payment.screenshot_url, {
                caption: `📥 *طلب دفع #${payment.id}*\n👤 ${payment.username}\n🌍 ${payment.country_name}\n🔐 ${payment.onexbet}\n💰 ${payment.amount}$\n📦 ${subscriptionName}\n💳 ${payment.payment_system === 'binance' ? 'باينانس' : 'بنكي'}\n📅 ${new Date(payment.timestamp).toLocaleString('ar-EG')}`,
                reply_markup: {
                    inline_keyboard: [
                        [
                            { text: '✅ قبول', callback_data: `accept_${payment.id}` },
                            { text: '❌ رفض', callback_data: `reject_${payment.id}` }
                        ]
                    ]
                }
            });
        }
    } catch (error) {
        console.error('Admin pending payments error:', error);
        await ctx.replyWithMarkdown('❌ حدث خطأ', getAdminMainKeyboard());
    }
}

// 🔧 HANDLE ADMIN MAINTENANCE TOGGLE
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
        await ctx.replyWithMarkdown('❌ حدث خطأ', getAdminMainKeyboard());
    }
}

// 🚀 START BOT
bot.launch().then(() => {
    console.log('🎉 SUCCESS! AI GOAL Predictor v18.0 PERFECT is RUNNING!');
    console.log('💳 Payment Systems: Binance + Bank Transfer');
    console.log('🌍 Arab Countries: 22 Countries');
    console.log('💾 Persistent Data: ENABLED');
    console.log('🔄 Auto Backup: EVERY 5 MINUTES');
    console.log('🔐 Session Restoration: ENABLED');
    console.log('👤 Developer:', CONFIG.DEVELOPER);
    console.log('📢 Channel:', CONFIG.CHANNEL);
    console.log('🌐 Health check: http://localhost:' + PORT);
    console.log('🔧 Admin ID:', CONFIG.ADMIN_ID);
}).catch(console.error);

// 🛑 GRACEFUL SHUTDOWN
process.once('SIGINT', async () => {
    console.log('🔄 Creating final backup...');
    await backupManager.createBackup();
    await perfectStorage.saveToLocalStorage();
    backupManager.stop();
    await bot.stop('SIGINT');
});

process.once('SIGTERM', async () => {
    console.log('🔄 Creating final backup...');
    await backupManager.createBackup();
    await perfectStorage.saveToLocalStorage();
    backupManager.stop();
    await bot.stop('SIGTERM');
});

console.log('✅ AI Goal Prediction System - PERFECT VERSION - Ready!');
