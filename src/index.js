var randomNumber1 = Math.floor((Math.random() * 6) + 1);

var randomImgSrc = "imgs/dice" + randomNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomImgSrc);

var randomNumber2 = Math.floor((Math.random() * 6) + 1);

var randomImgSrc2 = "imgs/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImgSrc2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins! 🏆";
}

else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 wins! 🏆";
}

if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw 🤨";
}