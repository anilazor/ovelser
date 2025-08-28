let userGuess;
let computerGuess;

const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");

const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");

addEventListenersToButtons();
function addEventListenersToButtons() {
  rockBtn.addEventListener("click", rockSelect);
  paperBtn.addEventListener("click", paperSelect);
  scissorsBtn.addEventListener("click", scissorsSelect);
}

function rockSelect() {
  console.log("user: ROCK");
  userGuess = "rock";
  computerSelect();
}
function paperSelect() {
  console.log("user: PAPER");
  userGuess = "paper";
  computerSelect();
}
function scissorsSelect() {
  console.log("user: SCISSORS");
  userGuess = "scissors";
  computerSelect();
}

function computerSelect() {
  const selection_arr = ["rock", "paper", "scissors"];
  const randomNum = Math.floor(Math.random() * 3);

  computerGuess = selection_arr[randomNum];
  console.log("computer:", computerGuess);

  animationStart();
}

function animationStart() {
  console.log("Animation start");
  win.classList.add("hidden");
  lose.classList.add("hidden");
  draw.classList.add("hidden");
  player1.classList.add("shake");
  player2.classList.add("shake");

  setTimeout(animationEnd, 1900);
}

function animationEnd() {
  console.log("Animation end");
  player1.classList.remove("shake");
  player2.classList.remove("shake");

  player1.classList.remove("rock", "paper", "scissors");
  player2.classList.remove("rock", "paper", "scissors");

  player1.classList.add(userGuess);
  player2.classList.add(computerGuess);

  setTimeout(showResult, 100);
}

const lose = document.querySelector("#lose");

const win = document.querySelector("#win");

const draw = document.querySelector("#draw");

function gameWon() {
  win.classList.remove("hidden");
  console.log("Game won!");
}

function gameLost() {
  lose.classList.remove("hidden");
  console.log("Game lost!");
}

function gameDraw() {
  draw.classList.remove("hidden");
  console.log("Game draw!");
}

function showResult() {
  if (userGuess === "rock" && computerGuess === "scissors") {
    gameWon();
  } else if (userGuess === "paper" && computerGuess === "rock") {
    gameWon();
  } else if (userGuess === "scissors" && computerGuess === "paper") {
    gameWon();
  } else if (userGuess === "rock" && computerGuess === "paper") {
    gameLost();
  } else if (userGuess === "paper" && computerGuess === "scissors") {
    gameLost();
  } else if (userGuess === "scissors" && computerGuess === "rock") {
    gameLost();
  } else if (userGuess === computerGuess) {
    gameDraw();
  }
}
