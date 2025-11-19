// firebase.js
const admin = require('firebase-admin');

// Initialize Firebase
function initializeFirebase() {
    try {
        // الحصول على مفاتيح Firebase من متغيرات البيئة في Render
        const serviceAccount = {
            type: "service_account",
            project_id: process.env.FIREBASE_PROJECT_ID,
            private_key: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
            client_email: process.env.FIREBASE_CLIENT_EMAIL,
            client_id: process.env.FIREBASE_CLIENT_ID,
            auth_uri: "https://accounts.google.com/o/oauth2/auth",
            token_uri: "https://oauth2.googleapis.com/token",
            auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
            client_x509_cert_url: process.env.FIREBASE_CLIENT_CERT_URL
        };

        // التحقق من وجود جميع المتغيرات المطلوبة
        const requiredEnvVars = [
            'FIREBASE_PROJECT_ID',
            'FIREBASE_PRIVATE_KEY', 
            'FIREBASE_CLIENT_EMAIL'
        ];

        for (const envVar of requiredEnvVars) {
            if (!process.env[envVar]) {
                console.error(`❌ Missing required environment variable: ${envVar}`);
                throw new Error(`Missing ${envVar}`);
            }
        }

        console.log('🔧 Initializing Firebase with project:', process.env.FIREBASE_PROJECT_ID);

        if (!admin.apps.length) {
            admin.initializeApp({
                credential: admin.credential.cert(serviceAccount),
                databaseURL: `https://${process.env.FIREBASE_PROJECT_ID}-default-rtdb.firebaseio.com`,
                storageBucket: `${process.env.FIREBASE_PROJECT_ID}.appspot.com`
            });
            console.log('✅ Firebase initialized successfully');
        }
        
        const db = admin.firestore();
        const bucket = admin.storage().bucket();
        
        // اختبار الاتصال
        const testConnection = async () => {
            try {
                const testDoc = db.collection('connection_test').doc('render_startup');
                await testDoc.set({
                    timestamp: new Date().toISOString(),
                    status: 'connected',
                    platform: 'render',
                    version: '16.0'
                });
                console.log('✅ Firebase connection test passed');
                return true;
            } catch (error) {
                console.error('❌ Firebase connection test failed:', error.message);
                return false;
            }
        };

        // تشغيل اختبار الاتصال
        testConnection().then(success => {
            if (success) {
                console.log('🚀 Firebase is ready for use');
            } else {
                console.log('⚠️ Firebase connection has issues, but bot will continue');
            }
        });
        
        return { db, bucket, admin };
        
    } catch (error) {
        console.error('❌ Firebase initialization failed:', error.message);
        console.log('🔧 Continuing without Firebase - some features may not work');
        return null;
    }
}

// تصدير كائن Firebase المُهيأ
const firebaseApp = initializeFirebase();

module.exports = firebaseApp;