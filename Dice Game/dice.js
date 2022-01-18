var random_number1 = Math.floor(Math.random() * 6) + 1;
var random_number2 = Math.floor(Math.random() * 6) + 1;

var dice1 = document.getElementsByClassName("img1")[0];
var dice2 = document.getElementsByClassName("img2")[0];
dice1.src = "images/dice" + random_number1 + ".png";
dice2.src = "images/dice" + random_number2 + ".png";

if (random_number1 > random_number2)
    document.querySelector("h1").innerHTML = "Player 1 wins";

else if (random_number1 < random_number2)
    document.querySelector("h1").innerHTML = "Player 2 wins";

else
    document.querySelector("h1").innerHTML = "Draw";