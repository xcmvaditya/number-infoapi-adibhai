// API Info endpoint
export default function handler(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/json");
    return res.status(200).json({
        name: "Aditya Number Info API",
        version: "1.0.0",
        developer: "Adibhai",
        youtube: "https://youtube.com/@geniushacker29",
        telegram: "https://t.me/geniushackerfreetools",
        endpoints: {
            number: "/api/number?number=9876543210",
            health: "/api/health",
            info: "/api/info"
        },
        usage: {
            method: "GET",
            params: {
                number: "10-15 digit mobile number",
                key: "optional API key if enabled"
            }
        },
        example: "/api/number?number=9876543210"
    });
}
