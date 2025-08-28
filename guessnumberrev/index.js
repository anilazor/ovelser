"use strict";
const btnStart = document.querySelector("#start-btn");
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const sucess = document.querySelector("#sucess");

btnStart.addEventListener("click", startSpil);
btn1.addEventListener("click", forLav);
btn2.addEventListener("click", forHoej);
btn3.addEventListener("click", rigtig);

let lowNum = 0;
let highNum = 100;
const computerGuess = document.querySelector("#computer-guess");

let guess;

function startSpil() {
  lowNum = 0;
  highNum = 100;
  makeComputerGuess();
  succes.classList.add("hidden");
  btn1.classList.remove("hidden");
  btn2.classList.remove("hidden");
  btn3.classList.remove("hidden");
}

function makeComputerGuess() {
  guess = Math.round((highNum + lowNum) / 2);
  console.log(guess);
  computerGuess.innerText = guess;
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
  succes.innerText = "Succes!";
  succes.classList.remove("hidden");
  btn1.classList.add("hidden");
  btn2.classList.add("hidden");
  btn3.classList.add("hidden");
}
