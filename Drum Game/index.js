for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        onPressKey(this.innerHTML);
    })
}

window.addEventListener("keypress", function(event) {
    onPressKey(event.key);
});

function onPressKey(element) {
    document.querySelector("." + element).classList.add("pressed");
    setTimeout(function() {
        document.querySelector("." + element).classList.remove("pressed")
    }, 100);
    audio = new Audio("sounds/" + element + ".mp3");
    audio.play();
}