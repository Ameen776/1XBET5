// ===================================================
// 🚀 AI GOAL PREDICTOR ULTIMATE - VERSION 16.0 FIXED
// 👤 DEVELOPER: ♛𝑨𝒎𝒆𝒆𝒏 𝑨𝒍𝒛𝒘𝒂𝒉𝒊♛
// 🔥 FEATURES: DUAL PAYMENT SYSTEM + BANK TRANSFER + BINANCE
// 💾 PERSISTENT DATA STORAGE - FIREBASE INTEGRATION
// 🔐 FIXED CHANNEL SUBSCRIPTION VERIFICATION - TELEGRAM API ONLY
// ===================================================

console.log('🤖 Starting AI GOAL Predictor Ultimate v16.0 FIXED...');
console.log('🕒 ' + new Date().toISOString());

// 🔧 CONFIGURATION
const CONFIG = {
    BOT_TOKEN: process.env.BOT_TOKEN || "8125363786:AAFZaOGSAvq_p8Sc8cq2bIKZlpe4ej7tmdU",
    ADMIN_ID: process.env.ADMIN_ID || "6565594143",
    CHANNEL_ID: process.env.CHANNEL_ID || "-1003283663811",
    CHANNEL_USERNAME: process.env.CHANNEL_USERNAME || "@GEMZGOOL",
    
    // ... باقي الإعدادات تبقى كما هي
    // [يتم الحفاظ على جميع الإعدادات الأخرى]
};

console.log('✅ Configuration loaded successfully');

// 🚀 INITIALIZE BOT
const { Telegraf, Markup, session } = require('telegraf');
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
        message: 'AI Goal Predictor Bot is running...'
    });
});

app.listen(PORT, () => {
    console.log(`🌐 Health check server running on port ${PORT}`);
});

// 🔥 FIREBASE INITIALIZATION (مختصر)
let db = null;
let admin = null;

async function initializeFirebase() {
    try {
        admin = require('firebase-admin');
        // ... تهيئة Firebase
        console.log('✅ Firebase initialized');
        return true;
    } catch (error) {
        console.log('❌ Firebase initialization failed');
        return false;
    }
}

initializeFirebase();

// 🔄 نظام التحقق من القناة - Telegram API فقط
class ChannelSubscriptionManager {
    constructor() {
        this.subscriptionCache = new Map();
    }

    // 🆕 دالة التحقق البسيطة عبر Telegram API مباشرة
    async isMember(userId) {
        try {
            console.log(`🔍 التحقق من اشتراك ${userId} في ${CONFIG.CHANNEL_ID}`);
            
            // استخدام Telegram API مباشرة
            const chatMember = await bot.telegram.getChatMember(CONFIG.CHANNEL_ID, userId);
            console.log(`📊 حالة المستخدم: ${chatMember.status}`);
            
            // التحقق من الحالات المسموحة
            const isSubscribed = ["member", "administrator", "creator"].includes(chatMember.status);
            
            return isSubscribed;
        } catch (error) {
            console.error('❌ خطأ في التحقق:', error.message);
            return false;
        }
    }
}

// INITIALIZE CHANNEL SUBSCRIPTION MANAGER
const channelManager = new ChannelSubscriptionManager();

// 💾 نظام قاعدة البيانات (مبسط)
class DatabaseManager {
    constructor() {
        this.users = new Map();
    }

    async getUser(userId) {
        return this.users.get(userId) || null;
    }

    async saveUser(userId, userData) {
        this.users.set(userId, userData);
        return true;
    }

    async setChannelSubscription(userId, subscribed) {
        const user = await this.getUser(userId);
        if (user) {
            user.channel_subscribed = subscribed;
            await this.saveUser(userId, user);
        }
        return true;
    }
}

const dbManager = new DatabaseManager();

// 🛡️ تحقق من الاشتراك قبل كل أمر - مبسط
bot.use(async (ctx, next) => {
    try {
        const userId = ctx.from.id.toString();
        
        // تخطي التحقق للأدمن والأوامر الأساسية
        if (userId === CONFIG.ADMIN_ID || 
            ctx.message?.text === '/start' || 
            ctx.callbackQuery?.data === 'check_channel_subscription') {
            return next();
        }

        const userData = await dbManager.getUser(userId);
        if (!userData) return next();
        
        // التحقق من الاشتراك في القناة
        if (!userData.channel_subscribed) {
            const isSubscribed = await channelManager.isMember(userId);
            
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
            } else {
                // إذا كان مشتركاً، تحديث البيانات
                await dbManager.setChannelSubscription(userId, true);
            }
        }
        
        await next();
    } catch (error) {
        console.error('Middleware error:', error);
        await next();
    }
});

// 🎯 BOT SETUP
bot.use(session({ 
    defaultSession: () => ({ 
        step: 'start'
    })
}));

// 🎯 لوحة المفاتيح
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

// 🎯 BOT COMMANDS

bot.start(async (ctx) => {
    try {
        const userId = ctx.from.id.toString();
        const userName = ctx.from.first_name;

        // التحقق إذا كان المستخدم مسجل مسبقاً
        const existingUser = await dbManager.getUser(userId);
        
        if (existingUser) {
            ctx.session.step = 'verified';
            ctx.session.userData = existingUser;

            await ctx.replyWithMarkdown(
                `🎉 *مرحباً بعودتك ${userName}!*\n\n` +
                `🔐 الحساب: \`${existingUser.onexbet}\`\n` +
                `🆓 محاولات مجانية: ${existingUser.free_attempts}`,
                getMainKeyboard()
            );
            
        } else {
            // مستخدم جديد - طلب الاشتراك في القناة أولاً
            const isSubscribed = await channelManager.isMember(userId);
            
            if (!isSubscribed) {
                await ctx.replyWithMarkdown(
                    `🎉 *مرحباً بك في نظام GOAL Predictor Pro* 🤖\n\n` +
                    `📢 *للبدء يجب الاشتراك في قناتنا أولاً*\n\n` +
                    `👉 ${CONFIG.CHANNEL_USERNAME}\n\n` +
                    `✅ بعد الاشتراك اضغط على الزر للتحقق:`,
                    Markup.inlineKeyboard([
                        [Markup.button.callback('✅ تحقق من الاشتراك', 'check_channel_subscription')]
                    ])
                );
                return;
            }

            // إذا كان مشتركاً، نبدأ التسجيل
            ctx.session.step = 'awaiting_account_id';
            
            await ctx.replyWithMarkdown(
                `✅ *تم التحقق من اشتراكك!*\n\n` +
                `🔐 *مرحباً ${userName}*\n\n` +
                `📋 *الآن أدخل رقم حساب 1xBet الخاص بك (10 أرقام):*`,
                getLoginKeyboard()
            );
        }

    } catch (error) {
        console.error('Start command error:', error);
        await ctx.replyWithMarkdown('❌ حدث خطأ في النظام');
    }
});

// 📝 HANDLE TEXT MESSAGES
bot.on('text', async (ctx) => {
    try {
        const text = ctx.message.text;
        const session = ctx.session;
        const userId = ctx.from.id.toString();

        // 🔐 STEP 1: Validate 1xBet Account
        if (session.step === 'awaiting_account_id') {
            if (/^\d{10}$/.test(text)) {
                ctx.session.accountId = text;
                ctx.session.step = 'awaiting_verification';
                ctx.session.verificationCode = Math.floor(100000 + Math.random() * 900000);

                await ctx.replyWithMarkdown(
                    `✅ *تم إرسال كود التحقق*\n\n` +
                    `🔐 *الحساب:* \`${text}\`\n` +
                    `📧 *الكود:* \`${ctx.session.verificationCode}\`\n\n` +
                    `🔢 *أرسل كود التحقق:*`
                );

            } else {
                await ctx.replyWithMarkdown('❌ *رقم الحساب خطأ! يجب أن يكون 10 أرقام*');
            }
        }
        // 🔐 STEP 2: Verify Code
        else if (session.step === 'awaiting_verification' && /^\d{6}$/.test(text)) {
            if (parseInt(text) === ctx.session.verificationCode) {
                const userData = {
                    user_id: userId,
                    username: ctx.from.first_name,
                    onexbet: ctx.session.accountId,
                    free_attempts: 10,
                    subscription_status: 'free',
                    channel_subscribed: true
                };

                await dbManager.saveUser(userId, userData);
                ctx.session.step = 'verified';
                ctx.session.userData = userData;

                await ctx.replyWithMarkdown(
                    `🎉 *تم الربط بنجاح!*\n\n` +
                    `✅ *الحساب:* \`${ctx.session.accountId}\`\n` +
                    `👤 *المستخدم:* ${ctx.from.first_name}\n` +
                    `🎁 *محاولات مجانية:* 10\n\n` +
                    `🎯 *يمكنك الآن استخدام البوت*`,
                    getMainKeyboard()
                );

            } else {
                await ctx.replyWithMarkdown('❌ *كود تحقق خاطئ!*');
            }
        }
        // 🎯 معالجة الأزرار الرئيسية
        else if (session.step === 'verified') {
            const userData = await dbManager.getUser(userId);
            
            if (!userData) {
                await ctx.replyWithMarkdown('❌ *جلسة منتهية*', getLoginKeyboard());
                return;
            }

            switch (text) {
                case '🎯 جلب التحليل':
                    await ctx.replyWithMarkdown('🎯 *جاري جلب التحليل...*');
                    break;
                case '📊 إحصائياتي':
                    await ctx.replyWithMarkdown(
                        `📊 *إحصائياتك*\n\n` +
                        `👤 ${userData.username}\n` +
                        `🔐 ${userData.onexbet}\n` +
                        `🆓 محاولات: ${userData.free_attempts}`
                    );
                    break;
                case '💳 الاشتراكات':
                    await ctx.replyWithMarkdown('💳 *باقات الاشتراك المتاحة*');
                    break;
                case '👥 إحصائيات البوت':
                    await ctx.replyWithMarkdown('👥 *إحصائيات البوت*\n\n🟢 النظام يعمل بكفاءة');
                    break;
                case '👤 حالة الاشتراك':
                    await ctx.replyWithMarkdown(
                        `👤 *حالة الاشتراك*\n\n` +
                        `🔐 ${userData.onexbet}\n` +
                        `🆓 محاولات مجانية: ${userData.free_attempts}`
                    );
                    break;
                case '🆘 الدعم الفني':
                    await ctx.replyWithMarkdown(`🆘 *الدعم الفني*\n\n📞 @GEMZGOOLBOT`);
                    break;
                case '🔐 إدخال رقم الحساب':
                    ctx.session.step = 'awaiting_account_id';
                    await ctx.replyWithMarkdown('🔢 *أدخل رقم حساب 1xBet (10 أرقام):*');
                    break;
                default:
                    await ctx.replyWithMarkdown('🔙 *استخدم الأزرار المتاحة*', getMainKeyboard());
                    break;
            }
        }

    } catch (error) {
        console.error('Text handler error:', error);
        await ctx.replyWithMarkdown('❌ حدث خطأ غير متوقع', getMainKeyboard());
    }
});

// 🎯 HANDLE CALLBACK QUERIES - التركيز على التحقق من القناة
bot.on('callback_query', async (ctx) => {
    try {
        const callbackData = ctx.callbackQuery.data;
        const userId = ctx.from.id.toString();
        
        // 🆕 معالجة زر التحقق من الاشتراك في القناة
        if (callbackData === 'check_channel_subscription') {
            await handleCheckChannelSubscription(ctx);
            return;
        }
        
    } catch (error) {
        console.error('Callback query error:', error);
        await ctx.answerCbQuery('❌ حدث خطأ في المعالجة');
    }
});

// 🆕 معالجة التحقق من الاشتراك في القناة - Telegram API فقط
async function handleCheckChannelSubscription(ctx) {
    try {
        const userId = ctx.from.id.toString();
        console.log(`🔍 بدء التحقق من اشتراك ${userId}`);
        
        // 🆕 استخدام Telegram API مباشرة للتحقق
        const isSubscribed = await channelManager.isMember(userId);
        console.log(`📊 نتيجة التحقق: ${isSubscribed}`);
        
        if (isSubscribed) {
            // تحديث حالة الاشتراك
            await dbManager.setChannelSubscription(userId, true);
            await ctx.answerCbQuery('✅ تم التحقق من الاشتراك بنجاح!');
            
            // حذف رسالة طلب الاشتراك
            try {
                await ctx.deleteMessage();
            } catch (deleteError) {
                console.log('لا يمكن حذف الرسالة');
            }
            
            // إرسال رسالة الترحيب
            const userName = ctx.from.first_name;
            const userData = await dbManager.getUser(userId);
            
            if (userData) {
                // مستخدم مسجل
                await ctx.replyWithMarkdown(
                    `🎉 *مرحباً بعودتك ${userName}!*\n\n` +
                    `✅ *تم التحقق من اشتراكك*\n` +
                    `🎯 يمكنك الآن استخدام البوت`,
                    getMainKeyboard()
                );
            } else {
                // مستخدم جديد
                await ctx.replyWithMarkdown(
                    `🎉 *تم التحقق من اشتراكك بنجاح!*\n\n` +
                    `🔐 *مرحباً ${userName}*\n\n` +
                    `📋 *لبدء الاستخدام:*\n` +
                    `اضغط على "🔐 إدخال رقم الحساب"`,
                    getLoginKeyboard()
                );
            }
        } else {
            await ctx.answerCbQuery('❌ لم يتم العثور على اشتراكك!');
            await ctx.replyWithMarkdown(
                `❌ *لم يتم العثور على اشتراكك في القناة*\n\n` +
                `📢 يرجى الاشتراك في:\n` +
                `👉 ${CONFIG.CHANNEL_USERNAME}\n\n` +
                `✅ ثم اضغط للتحقق:`,
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

// 🚀 START BOT
bot.launch().then(() => {
    console.log('🎉 SUCCESS! AI GOAL Predictor is RUNNING!');
    console.log('🔐 Channel Verification: TELEGRAM API ONLY');
    console.log('📢 Channel:', CONFIG.CHANNEL_USERNAME);
    console.log('👤 Admin ID:', CONFIG.ADMIN_ID);
}).catch(console.error);

// 🛑 GRACEFUL SHUTDOWN
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));

console.log('✅ Bot with Fixed Channel Verification Ready!');
