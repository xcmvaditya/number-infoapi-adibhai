// Aditya Number Info API
// Developed by Adibhai
// YouTube: https://youtube.com/@geniushacker29
// Telegram: https://t.me/geniushackerfreetools

const UPSTREAM = process.env.UPSTREAM_URL ||
    "https://astha-9vd8.onrender.com/tapi-3a74390dd9a68a862b9d697124bb9e04";

const API_KEY = process.env.API_KEY || "";

// ===== BRANDING =====
const DEVELOPER = "Adibhai";
const YOUTUBE = "https://youtube.com/@geniushacker29";
const TELEGRAM = "https://t.me/geniushackerfreetools";
const API_NAME = "Aditya Number Info API";

// unwanted keys — har jagah se hatao
const JUNK_KEYS = [
    "id", "credit", "username", "channel", "telegram",
    "api_info", "provider", "remaining",
    "tabbo", "source", "credits", "creator", "owner",
    "user", "handle", "reference", "ref"
];

// deep clean — recursively strip junk
function deepClean(obj) {
    if (Array.isArray(obj)) return obj.map(deepClean);
    if (obj && typeof obj === "object") {
        for (const k of JUNK_KEYS) delete obj[k];
        for (const k of Object.keys(obj)) {
            obj[k] = deepClean(obj[k]);
        }
    }
    return obj;
}

// clean record fields (email/address fix)
function cleanRecord(rec) {
    if (!rec || typeof rec !== "object") return rec;

    if (rec.email && typeof rec.email === "string"
        && !rec.email.includes("@") && rec.email.includes(" ")) {
        rec.email = rec.email.replace(" ", "@");
    }

    if (rec.address && typeof rec.address === "string" && rec.address.includes("!")) {
        rec.address = rec.address.split("!")
            .map(s => s.trim())
            .filter(Boolean)
            .join(", ");
    }

    return rec;
}

export default async function handler(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, X-API-Key");
    res.setHeader("Content-Type", "application/json");

    if (req.method === "OPTIONS") return res.status(200).end();

    // auth (agar API_KEY set hai)
    if (API_KEY) {
        const provided = req.query.key || req.headers["x-api-key"];
        if (provided !== API_KEY) {
            return res.status(401).json({
                status: "error",
                message: "Invalid or missing API key",
                developer: DEVELOPER,
                youtube: YOUTUBE,
                telegram: TELEGRAM
            });
        }
    }

    const number = String(req.query.number || req.query.num || req.query.q || "")
        .replace(/[^0-9]/g, "");

    if (!number || number.length < 10 || number.length > 15) {
        return res.status(400).json({
            status: "error",
            message: "Valid 10-15 digit number required",
            example: "/api/number?number=9876543210",
            developer: DEVELOPER,
            youtube: YOUTUBE,
            telegram: TELEGRAM
        });
    }

    const clean = number.length > 10 ? number.slice(-10) : number;

    try {
        const url = `${UPSTREAM}?Astha=${encodeURIComponent(clean)}`;
        const r = await fetch(url, { timeout: 25000 });

        if (!r.ok) {
            return res.status(502).json({
                status: "error",
                message: `Upstream error: ${r.status}`,
                developer: DEVELOPER,
                youtube: YOUTUBE,
                telegram: TELEGRAM
            });
        }

        let raw = await r.json();
        raw = deepClean(raw);

        if (raw.status !== "success") {
            return res.status(404).json({
                status: "error",
                message: raw.message || "No data found",
                number: clean,
                developer: DEVELOPER,
                youtube: YOUTUBE,
                telegram: TELEGRAM
            });
        }

        const rec = cleanRecord(raw.data || {});

        return res.status(200).json({
            status: "success",
            number: clean,
            data: rec,
            developer: DEVELOPER,
            youtube: YOUTUBE,
            telegram: TELEGRAM,
            timestamp: new Date().toISOString()
        });

    } catch (e) {
        return res.status(500).json({
            status: "error",
            message: e.message,
            developer: DEVELOPER,
            youtube: YOUTUBE,
            telegram: TELEGRAM
        });
    }
}
