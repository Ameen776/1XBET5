# تعليمات النشر على Render

## 1. إعداد المستودع
- انشئ مستودع جديد على GitHub
- ارفع جميع الملفات إلى المستودع

## 2. إعداد متغيرات البيئة على Render
اذهب إلى Render.com وأنشئ خدمة Web Service جديدة من GitHub.

### متغيرات البيئة المطلوبة:
- `BOT_TOKEN`: توكن بوت التليجرام
- `ADMIN_ID`: آيدي حسابك على تليجرام (رقم)
- `FIREBASE_PRIVATE_KEY_ID`: من ملف service account
- `FIREBASE_PRIVATE_KEY`: المفتاح الخاص (انسخه كاملاً)
- `FIREBASE_CLIENT_ID`: من ملف service account
- `FIREBASE_CERT_URL`: من ملف service account
- `IMGBB_API_KEY`: مفتاح ImgBB API

## 3. إعداد Firebase
- تأكد أن قاعدة البيانات مفتوحة للقراءة والكتابة
- تأكد من صحة مفاتيح Service Account

## 4. تشغيل البوت
- بعد النشر، سيبدأ البوت تلقائياً
- تأكد من تفعيل webhook في إعدادات البوت

## 5. الاختبار
- أرسل /start للبوت
- تحقق من أن البيانات تُحفظ في Firebase