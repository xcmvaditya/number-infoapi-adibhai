// Health check
export default function handler(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/json");
    return res.status(200).json({
        status: "ok",
        service: "Aditya Number Info API",
        developer: "Adibhai",
        youtube: "https://youtube.com/@geniushacker29",
        telegram: "https://t.me/geniushackerfreetools",
        time: new Date().toISOString()
    });
}
