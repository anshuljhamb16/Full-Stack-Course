const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const axios = require('axios');

app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())
app.get("/", (req, res) => {

    res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {

    console.log();
    axios.get('https://api.openweathermap.org/data/2.5/weather?q=' + req.body.cityName mn + '&appid=e255d6a16f94a4760ff08c2b9c2552cf&units=Metric')
        .then(response => {
            res.write("Temperature is " + response.data.main.temp);
            res.send();
        })
        .catch(error => {
            console.log(error);
        });
});

app.listen(3000, () => {
    console.log("Server started 3000");
});