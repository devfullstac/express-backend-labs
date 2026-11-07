const express = require('express');
const app = express();
const PORT = 3000;


const requestTimer = function (req, res, next) {
    const exactTime = new Date().toISOString();
    console.log("[" + exactTime + "] " + req.method + " request to " + req.url);
    next();
};
app.use(requestTimer);


const requireApiKey = function (req, res, next) {
    const apiKey = req.headers['x-api-key'];
    if (apiKey === "secret123") {
        next();
    } else {
        res.status(401).json({ error: "Unauthorized: Invalid or missing API Key." });
    }
};

app.get('/api/secure-data', requireApiKey, function (req, res) {
    res.json({ message: "Welcome to the secret vault, Alice!" });
});

app.listen(PORT, function () {
    console.log("Server is running on port " + PORT);
});
