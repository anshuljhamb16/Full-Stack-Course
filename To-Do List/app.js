const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let items = ["buy food", "eat food"];
var url = "about"

app.get("/", function(req, res) {

    let day = date.getDate();
    res.render("list", { listTitle: day, newListItems: items });

});


app.post("/", function(req, res) {
    var newItem = req.body.input;
    items.push([newItem]);
    res.redirect("/");

});

app.get("/about", function(req, res) {
    res.render("about");
})

app.listen(3000, function() {
    console.log("Server started on port 3000");
})