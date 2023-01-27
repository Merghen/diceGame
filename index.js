
var playerOne = Math.floor(Math.random() * 6) + 1;
var playerTwo = Math.floor(Math.random() * 6) + 1;


var dice1Source="images/dice"+playerOne+".png";
document.querySelector(".dive1").setAttribute("src",dice1Source);


var dice2Source="images/dice"+playerTwo+".png";
document.querySelector(".dive2").setAttribute("src",dice2Source);



if (playerOne > playerTwo) {
    document.querySelector(".header").textContent = "Player One Win!";
}
else if (playerTwo > playerOne) {
    document.querySelector(".header").textContent = "Player Two Win!";
}
else {
    document.querySelector(".header").textContent = "Draw!";
}


