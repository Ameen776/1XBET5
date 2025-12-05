# نشر البوت على Render

## الخطوات:
1. ارفع كل الملفات إلى GitHub:
   - bot.js
   - package.json
   - Procfile
   - render.yaml
   - .env.example

2. ادخل إلى Render > New Web Service.

3. اربط المستودع من GitHub.

4. ضع:
   - Build Command: npm install
   - Start Command: node bot.js

5. أضف جميع المتغيرات من `.env.example` داخل Environment Variables.

6. اضغط Deploy وانتظر 1–2 دقائق.

## ملاحظات:
- Firebase private key يجب أن يحتوي أسطر \n.
- إذا ظهر لك خطأ في Render logs أرسله لي وسأصلحه.
