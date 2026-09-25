https://number-infoapi-adibhai-npue.vercel.app/api/number?number=9876543210

Number info api WORKNG
https://number-infoapi-adibhai-npue.vercel.app/

# 🔍 Aditya Number Info API
👑 Developed by Adibhai

Number lookup API — Vercel deploy. Astha upstream ko wrap karta hai.

📺 [YouTube](https://youtube.com/@geniushacker29)
✈️ [Telegram](https://t.me/geniushackerfreetools)

---

## Deploy to Vercel

### Method 1 — Vercel CLI

```bash
git clone https://github.com/YOUR_USERNAME/aditya-number-api.git
cd aditya-number-api
npm i -g vercel
vercel login
vercel --prod
```

URL milega: `https://aditya-number-api.vercel.app`

### Method 2 — GitHub + Vercel Dashboard

1. GitHub pe repo push karo
2. `vercel.com` → New Project → GitHub repo select
3. Framework preset: **Other**
4. Deploy

### Env Variables (optional)

Vercel dashboard → Settings → Environment Variables:

| Key | Value |
|---|---|
| `API_KEY` | (khali chhodo, ya apni key) |
| `UPSTREAM_URL` | `https://astha-9vd8.onrender.com/tapi-3a74390dd9a68a862b9d697124bb9e04` |

---

## Endpoints

| Method | URL | Description |
|---|---|---|
| GET | `/` | Landing page |
| GET | `/api/number?number=9876543210` | Number info |
| GET | `/api/health` | Health check |
| GET | `/api/info` | API info |

Alias routes: `/number`, `/health`, `/info`

---

## Example

**Request:**
```
GET /api/number?number=9876543210
```

**Response:**
```json
{
  "status": "success",
  "number": "9876543210",
  "data": {
    "mobile": "9876543210",
    "name": "Dev Jyoti Roy",
    "fname": "Salil Kumar Roy",
    "address": "Tower 9 Flat 1506, Lotus Boulevard, Noida...",
    "circle": "AIRTEL DELHI",
    "email": "devjroy@gmail.com"
  },
  "developer": "Adibhai",
  "youtube": "https://youtube.com/@geniushacker29",
  "telegram": "https://t.me/geniushackerfreetools",
  "timestamp": "2026-09-23T07:55:00.000Z"
}
```

---

## Features

- ✅ Astha upstream wrap
- ✅ Auto data cleaning (credit, username, channel strip)
- ✅ Email fix (space → @)
- ✅ Address fix (! separator → comma)
- ✅ CORS enabled
- ✅ Optional API key
- ✅ Live test UI (landing page)
- ✅ Matrix animation
- ✅ Branding: Developed by Adibhai

---

## Usage

### cURL

```bash
curl "https://aditya-number-api.vercel.app/api/number?number=9876543210"
```

### JavaScript

```javascript
const r = await fetch("https://aditya-number-api.vercel.app/api/number?number=9876543210");
const data = await r.json();
console.log(data);
```

### Python

```python
import requests
r = requests.get("https://aditya-number-api.vercel.app/api/number", params={"number": "9876543210"})
print(r.json())
```

---

## Links

- 📺 YouTube: [@geniushacker29](https://youtube.com/@geniushacker29)
- ✈️ Telegram: [@geniushackerfreetools](https://t.me/geniushackerfreetools)

**Developed by Adibhai**
