import express from "express";
import { Telegraf } from "telegraf";
import dotenv from "dotenv";

dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN);
const app = express();
app.use(express.json());

// استقبال Webhook
app.post(`/bot${process.env.BOT_TOKEN}`, (req, res) => {
    bot.handleUpdate(req.body);
    res.sendStatus(200);
});

// تشغيل ملف البوت
import("./bot.js").then(() => {
    console.log("Bot loaded.");
});

// تشغيل السيرفر
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
    console.log("Server running on port", PORT);

    // تفعيل Webhook
    const url = process.env.RENDER_EXTERNAL_URL;
    if (url) {
        bot.telegram.setWebhook(`${url}/bot${process.env.BOT_TOKEN}`);
        console.log("Webhook set:", `${url}/bot${process.env.BOT_TOKEN}`);
    }
});