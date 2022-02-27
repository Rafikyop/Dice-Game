// Player name
var player1 = "Player 1";
var player2 = "Player 2";

// Function to change the player name
function editNames() {
  player1 = prompt("Change Player1 name");
  player2 = prompt("Change player2 name");

  document.querySelector("p.Player1").innerHTML = player1;
  document.querySelector("p.Player2").innerHTML = player2;
}

// Function to roll the dice
let randomnumber1 = Math.floor(Math.random() * 6) + 1;

let randomDiceImage = "dice" + randomnumber1 + ".png";

let randomImageSource = "images/" + randomDiceImage;

let image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

// if a player wins

if (randomnumber1 > randomNumber2) {
  document.queryselector("h1").innerHTML = "Player 1 Wins";
} else if (randomNumber2 > randomnumber1) {
  document.queryselector("h2").innerHTML = "Player 2 Wins";
} else {
  document.queryselector("h3").innerHTML = "Draw!";
}
