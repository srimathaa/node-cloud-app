const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send(`
    <h1>Hello from the Srimatha 💖</h1>
    <p>Server running on Node.js</p>
    <p>Time: ${new Date()}</p>
  `);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server running on port", PORT);
});
