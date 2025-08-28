"use strict";
const btnStart = document.querySelector("#start-btn");
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const sucess = document.querySelector("#sucess");
const loader = document.querySelector("loader");

btnStart.addEventListener("click", startSpil);
btn1.addEventListener("click", forLav);
btn2.addEventListener("click", forHoej);
btn3.addEventListener("click", rigtig);

let lowNum = 0;
let highNum = 100;
const computerGuess = document.querySelector("#computer-guess h3");

let guess;

function startSpil() {
  lowNum = 0;
  highNum = 100;
  makeComputerGuess();
  succes.classList.add("hidden");
  computerGuess.classList.remove("glow");
  computerGuess.classList.remove("scale-up");
  btn1.classList.remove("hidden");
  btn2.classList.remove("hidden");
  btn3.classList.remove("hidden");
  computerGuess.classList.remove("fade-in");
  void computerGuess.offsetWidth; // Force reflow
  computerGuess.classList.add("fade-in");
}
// ...existing code...
function makeComputerGuess() {
  guess = Math.round((highNum + lowNum) / 2);
  console.log(guess);
  computerGuess.innerText = guess;
  computerGuess.classList.remove("fade-in"); // Reset animation
  void computerGuess.offsetWidth; // Force reflow
  computerGuess.classList.add("fade-in");
}

function forLav() {
  lowNum = guess;
  makeComputerGuess();
}

function forHoej() {
  highNum = guess;
  makeComputerGuess();
}

function rigtig() {
  succes.innerText = "Succes!(ෆ˙ᵕ˙ෆ)♡";
  succes.classList.remove("hidden");
  computerGuess.classList.add("glow");
  computerGuess.classList.add("scale-up");
  loader.classList.add("speed");
  btn1.classList.add("hidden");
  btn2.classList.add("hidden");
  btn3.classList.add("hidden");
}
