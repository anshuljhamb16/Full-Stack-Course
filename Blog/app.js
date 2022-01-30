const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

var posts = [];
var postTitle = "title1";
var post = "A blog is a discussion or informational w typicallyonological order, so that the most recent post appears first, at the top of the web page";
var arr = {};
arr[postTitle] = post;

posts.push(arr);

app.get("/", function(req, res) {
    res.render("index", { posts: posts });
});

app.get("/posts/:id", (req, res) => {
    var title = req.params.id;

    for (var i = 0; i < posts.length; i++) {
        for (var key in posts[i]) {
            if (title == key) {
                var content = posts[i][key];
                res.render("post", { key: title, content: content });
            }
        }
    }
});

app.get("/search", (req, res) => {
    res.send("Hrooo ");
});

app.get("/newpost", (req, res) => {
    res.render("newpost");
});

app.post("/newpost", (req, res) => {
    var title = req.body.title;
    var content = req.body.text;
    var arr = {};
    arr[title] = content;

    posts.push(arr);
    res.redirect("/");
    console.log(posts);

});

app.listen(3000, function() {
    console.log("Server started on port 3000");
})