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

// ... (بقية الكود الأساسي يبقى كما هو حتى جزء الإعدادات)

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

// ... (بقية الكود الأساسي يبقى كما هو حتى جزء DatabaseManager)

// 💾 DATABASE MANAGER - UPDATED FOR DUAL PAYMENT
class DatabaseManager {
    constructor() {
        this.maintenanceMode = false;
    }

    // ... (جميع الدوال السابقة تبقى كما هي)

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

    // ... (بقية الدوال تبقى كما هي)
}

// ... (بقية الكود الأساسي يبقى كما هو حتى جزء لوحات المفاتيح)

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

// ... (بقية الكود الأساسي يبقى كما هو حتى جزء معالجة النصوص)

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

        // ... (بقية كود الإدمن يبقى كما هو)

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

        // ... (بقية الكود يبقى كما هو)

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

        // ... (بقية الكود يبقى كما هو)

    } catch (error) {
        console.error('Text handler error:', error);
        await ctx.replyWithMarkdown('❌ حدث خطأ غير متوقع', getMainKeyboard());
    }
});

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

// 🆕 تحديث معالجة Callback Queries
bot.on('callback_query', async (ctx) => {
    try {
        const callbackData = ctx.callbackQuery.data;
        const userId = ctx.from.id.toString();
        
        if (callbackData.startsWith('win_') || callbackData.startsWith('lose_')) {
            // ... (كود التوقعات يبقى كما هو)
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

// 🆕 تحديث معالجة الصور في الإدمن
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

// 🆕 تحديث معالجة الأوامر في الإدمن
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

            // ... (بقية الأوامر تبقى كما هي)
        }
    } catch (error) {
        console.error('Admin commands error:', error);
        await ctx.replyWithMarkdown('❌ حدث خطأ في معالجة الأمر', getAdminMainKeyboard());
    }
}

// ... (بقية الكود الأساسي يبقى كما هو)

console.log('✅ Dual Payment System Integrated Successfully!');

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
