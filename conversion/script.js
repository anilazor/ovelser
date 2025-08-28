"use strict";

let number = Math.floor(Math.random() * 100);

console.log("random number: " + number);

const randomNumber = document.getElementById("random-number");
randomNumber.innerText = number;

const svar = document.getElementById("svar");
const submit = document.getElementById("game").addEventListener("submit", myFunction);

let otherNumber = Math.floor(Math.random() * 100);
console.log("random number 2: " + otherNumber);

const popUp = document.getElementById("result");

const cat = document.getElementById("cat");
const wow = document.getElementById("wow");

function myFunction(evt) {
  evt.preventDefault();
  popUp.classList.remove("hidden");
  popUp.classList.add("visible");

  if (Number(svar.value) === otherNumber) {
    popUp.innerText = " Yeyyy! <3 Det er korrekt B)";
    cat.classList.remove("hidden");
    cat.classList.add("visible");
    wow.classList.remove("hidden");
    wow.classList.add("visible");
    const win = true;
    if (win === true) {
      submit.addEventListener("submit");
      cat.classList.remove("visible");
      cat.classList.add("hidden");
      wow.classList.remove("visible");
      wow.classList.add("hidden");
    }
  }

  if (Number(svar.value) < otherNumber) {
    popUp.innerText = " Miv... </3 Tallet var for lavt :(";
  }

  if (Number(svar.value) > otherNumber) {
    popUp.innerText = " Miv... </3 Tallet var for højt :(";
  }
}
