const express = require('express');
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.sendFile(__dirname + "index.html");
});

app.get("/contact", (req, res) => {
    res.send("jhambanshul@gmail.com");
});

app.get("/about", (req, res) => {
    res.send("Anshul Jhamb");
});

app.listen(port, () => {
    console.log("Server startedn 3000");
});