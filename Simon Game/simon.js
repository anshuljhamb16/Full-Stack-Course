var colors = ["red", "green", "blue", "yellow"];
var userTiles = [];
var gameTiles = [];
var level = 0;

document.addEventListener("keypress", function(event) {
    if (event.key == "s") {
        startGame();
    }
})

function startGame() {
    nextSequence();
    for (var i = 0; i < 4; i++) {
        document.querySelectorAll("button")[i].addEventListener("click", function() {
            console.log(this.innerHTML);
            var element = document.querySelector("." + this.innerHTML);
            element.classList.add("hover");
            setTimeout(function() {
                element.classList.remove("hover")
            }, 100);
            userTiles.push(this.innerHTML);
            checkAnswer(userTiles.length - 1);
        });
    }
}

function nextSequence() {
    userTiles = [];
    level++;
    document.querySelector("h1").innerHTML = "Level " + level;
    console.log("hey");
    var randomNumber = Math.floor(Math.random() * 4);
    gameTiles.push([colors[randomNumber]]);
    document.querySelector("." + colors[randomNumber]).classList.add("selected");
    setTimeout(function() {
        document.querySelector("." + colors[randomNumber]).classList.remove("selected")
    }, 500);
    console.log("removed");
}

function checkAnswer(count) {
    if (userTiles[count] == gameTiles[count]) {

        if (userTiles.length == gameTiles.length) {
            setTimeout(function() {
                nextSequence();
            }, 1000);
        }
    } else {
        console.log("gameover");
        document.querySelector("h1").innerHTML = "Game Over";

        document.addEventListener("keypress", function() {
            level = 0;
            setTimeout(function() {
                startGame();
            }, 3000);
        })
    }
}