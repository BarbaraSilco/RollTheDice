window.onload = function() {
    let button = document.getElementById("roll");
    button.addEventListener("click", rollTheDice);
}

function rollTheDice() {




var randomNumber1 = Math.floor(Math.random()*6)+1;

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomDiceImage;

 var image1 = document.querySelectorAll("img")[1];

 image1.setAttribute("src",randomImageSource);


 var randomNumber2 = Math.floor(Math.random()*6)+1;

 var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

 document.querySelectorAll("img")[2].setAttribute("src", randomImageSource2);

 
 
 if (randomNumber1 > randomNumber2) {
    document.querySelector("h3").innerHTML = "🡼 Winner is Player 1!";
 }

 else if (randomNumber2 > randomNumber1) {
    document.querySelector("h3").innerHTML = "Winner is Player 2! 🡽"
 }

 else {
    document.querySelector("h3").innerHTML = "Its a draw."
 }
}