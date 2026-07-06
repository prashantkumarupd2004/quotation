# 🚀 Deployment Guide — AWS + CyberPanel par QuotationMaker deploy karna

Ye guide **Next.js 15** app ko **AWS EC2** server par (jisme **CyberPanel / OpenLiteSpeed** installed hai) live karne ke poore steps deti hai.

> **Approach:** Next.js app ek **Node.js process** ki tarah PM2 se chalegi (port `3000`), aur OpenLiteSpeed ek **Reverse Proxy** ki tarah aapke domain ka traffic us process tak bhejega. SSL CyberPanel se free (Let's Encrypt) lagega.

Jahan bhi `yourdomain.com` likha hai, wahan apna asli domain daal dena.

---

## ✅ Zaroori cheezein (Prerequisites)

- Ek **AWS EC2 instance** (Ubuntu 22.04 recommended) jisme **CyberPanel already installed** ho.
  - Agar CyberPanel install nahi hai: SSH karke `sh <(curl https://cyberpanel.net/install.sh || wget -O - https://cyberpanel.net/install.sh)` chalayein, "OpenLiteSpeed" wala option chunein.
- Ek **domain** (jaise `yourdomain.com`) jiska **A record** aapke EC2 ke **Public IP** par point kar raha ho.
- **Minimum 2GB RAM** (t3.small ya upar). Agar 1GB (t2.micro/t3.micro) hai to niche **Step 6 (Swap)** zaroor karein warna `npm run build` memory kam padne se fail ho jayega.

---

## 1️⃣ AWS Security Group — Ports khol do

AWS Console → EC2 → apne instance ka **Security Group** → **Inbound rules** me ye ports allow karein:

| Port | Kaam |
|------|------|
| 22   | SSH |
| 80   | HTTP |
| 443  | HTTPS |
| 8090 | CyberPanel dashboard |

(7080 OpenLiteSpeed admin ke liye optional hai.)

---

## 2️⃣ CyberPanel me Website create karo

1. Browser me kholo: `https://<EC2-PUBLIC-IP>:8090`
2. Login karo (username `admin`, password jo install ke waqt mila tha).
3. **Websites → Create Website**
   - **Select Package:** Default
   - **Domain Name:** `yourdomain.com`
   - **Email:** apni email
   - **Select PHP:** koi bhi (hum PHP use nahi karenge, par field zaroori hai)
   - **Create Website** dabao.

Isse `/home/yourdomain.com/public_html` folder ban jayega — yahi hamari app ka ghar hoga.

---

## 3️⃣ Server me SSH se connect karo

Apne computer se (Git Bash / terminal):

```bash
ssh -i your-key.pem ubuntu@<EC2-PUBLIC-IP>
# phir root ban jao:
sudo su -
```

---

## 4️⃣ Node.js 20 + PM2 install karo

```bash
# Node.js 20 LTS (Next.js 15 ke liye Node 18.18+ chahiye)
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt-get install -y nodejs

# Versions check
node -v      # v20.x.x aana chahiye
npm -v

# PM2 (app ko background me chalane aur reboot par auto-start ke liye)
npm install -g pm2
```

---

## 5️⃣ (Sirf 1GB RAM wale server par) Swap banao

Chhote instance par build crash na ho isliye 2GB swap:

```bash
fallocate -l 2G /swapfile
chmod 600 /swapfile
mkswap /swapfile
swapon /swapfile
echo '/swapfile none swap sw 0 0' >> /etc/fstab
free -h    # Swap 2Gi dikhna chahiye
```

> 2GB+ RAM hai to ye step skip kar sakte ho.

---

## 6️⃣ App ka code server par lao

**Option A — GitHub se (recommended):**

```bash
cd /home/yourdomain.com/public_html
# folder khaali karo (default files hata do)
rm -rf * .* 2>/dev/null || true

git clone https://github.com/<aapka-username>/<repo-name>.git .
```

**Option B — Apne PC se direct upload (bina GitHub):**

Apne local computer par (project folder me), `node_modules` aur `.next` ko **chhod kar** upload karo:

```bash
# apne LOCAL PC se chalao (server par nahi):
rsync -avz --exclude node_modules --exclude .next \
  -e "ssh -i your-key.pem" \
  ./ ubuntu@<EC2-PUBLIC-IP>:/home/yourdomain.com/public_html/
```

(Ya FileZilla/WinSCP se SFTP upload — bas `node_modules` aur `.next` mat bhejo.)

---

## 7️⃣ Domain update karo (SEO ke liye zaroori)

```bash
cd /home/yourdomain.com/public_html
nano src/lib/site.ts
```

`url` aur `contactEmail` apne domain se badlo:

```ts
url: 'https://yourdomain.com',
contactEmail: 'hello@yourdomain.com',
```

Save: `Ctrl+O` → `Enter` → `Ctrl+X`.

---

## 8️⃣ Install + Production Build

```bash
cd /home/yourdomain.com/public_html
npm install
npm run build
```

Build safal hone par route list dikhegi. Koi error aaye to niche **Troubleshooting** dekho.

---

## 9️⃣ PM2 se app chalu karo

```bash
cd /home/yourdomain.com/public_html

# app ko port 3000 par background me chalao
pm2 start npm --name "quotation" -- start

# reboot ke baad auto-start
pm2 startup systemd
# ↑ ye ek command print karega — usko copy karke chalao
pm2 save

# status dekho
pm2 status
pm2 logs quotation    # live logs (nikalne ke liye Ctrl+C)
```

Test karo ki Node app chal rahi hai:

```bash
curl -I http://127.0.0.1:3000    # HTTP/1.1 200 OK aana chahiye
```

---

## 🔟 OpenLiteSpeed Reverse Proxy setup

Ab domain ka traffic port 3000 par bhejna hai.

1. CyberPanel dashboard → **Websites → List Websites → yourdomain.com ke aage "Manage"**.
2. Niche scroll karke **"vHost Conf"** (ya "Configurations") tab kholo.
3. Jo content hai usko **poora hata kar** ye paste karo:

```
docRoot                   $VH_ROOT/public_html
enableGzip                1

errorlog $VH_ROOT/logs/error.log {
  useServer               0
  logLevel                ERROR
  rollingSize             10M
}

accesslog $VH_ROOT/logs/access.log {
  useServer               0
  rollingSize             10M
  keepDays                10
}

extprocessor nextjs {
  type                    proxy
  address                 127.0.0.1:3000
  maxConns                100
  initTimeout             60
  retryTimeout            0
  respBuffer              0
}

context / {
  type                    proxy
  handler                 nextjs
  addDefaultCharset       off
}
```

4. **Save** dabao.
5. Upar right me **"Restart"** (ya Server → **Restart LiteSpeed**) se OpenLiteSpeed restart karo.

Ab browser me `http://yourdomain.com` kholo — site aa jani chahiye. 🎉

---

## 1️⃣1️⃣ Free SSL (HTTPS) lagao

1. CyberPanel → **SSL → Manage SSL**
2. Website `yourdomain.com` select karo → **Issue SSL** (Let's Encrypt).
3. Ho jane par `https://yourdomain.com` khol kar 🔒 verify karo.

> SSL ke baad OpenLiteSpeed khud HTTP ko HTTPS par redirect kar deta hai. Reverse proxy dono par kaam karega.

---

## ✅ Live checklist

- [ ] `http://yourdomain.com` khulti hai
- [ ] `https://yourdomain.com` par 🔒 SSL lag gaya
- [ ] `https://yourdomain.com/sitemap.xml` khulta hai
- [ ] `https://yourdomain.com/robots.txt` khulta hai
- [ ] PNG/PDF download chal raha hai
- [ ] `pm2 status` me quotation **online** hai

---

## 🔄 Aage code update karne ka tareeka (redeploy)

Jab bhi naya change deploy karna ho:

```bash
cd /home/yourdomain.com/public_html
git pull                 # (Option A wale) — ya dubara rsync/SFTP se upload
npm install              # naye package hon to
npm run build
pm2 restart quotation
```

Bas — website update ho jayegi.

---

## 🌐 Google me jaldi index karane ke liye (SEO)

1. [Google Search Console](https://search.google.com/search-console) me apni site add karo.
2. Verification ke liye: Search Console se jo **HTML tag** token mile, usko `src/lib/site.ts` me `googleSiteVerification: '...'` me paste karo → phir `npm run build` + `pm2 restart quotation`.
3. Search Console → **Sitemaps** me `https://yourdomain.com/sitemap.xml` submit karo.

---

## 🛠️ Troubleshooting

**Build "killed" / memory error:**
Step 5 (Swap) karo, phir `npm run build` dubara.

**502 Bad Gateway aata hai:**
Node app band hai. Chalao:
```bash
pm2 status
pm2 restart quotation
curl -I http://127.0.0.1:3000
```

**Site update nahi ho rahi (purani dikh rahi):**
Build + restart karo: `npm run build && pm2 restart quotation`. Browser me hard refresh (`Ctrl+Shift+R`).

**Port 3000 already in use:**
```bash
pm2 delete quotation
pm2 start npm --name quotation -- start
```

**CSS/JS load nahi ho raha (site tooti dikh rahi):**
vHost Conf me `context /` proxy sahi hai ya nahi check karo, phir LiteSpeed restart karo.

**PM2 logs dekhne ke liye:**
```bash
pm2 logs quotation --lines 100
```

---

## 📌 Zaroori paths (yaad rahe)

| Cheez | Path / Command |
|-------|----------------|
| App folder | `/home/yourdomain.com/public_html` |
| vHost config | CyberPanel → Manage → vHost Conf |
| App restart | `pm2 restart quotation` |
| App logs | `pm2 logs quotation` |
| LiteSpeed restart | CyberPanel → Restart LiteSpeed |

---

Bas itna hi! Koi step atke to `pm2 logs quotation` aur OpenLiteSpeed error log (`/home/yourdomain.com/logs/error.log`) sabse pehle check karna.
