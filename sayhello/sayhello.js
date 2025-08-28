"use strict";

sayHello("Rosalina", "Hundahl");
function sayHello(firstName, lastName) {
  console.log(`Hello ${firstName} ${lastName}`);
}

const firstName = "Rosalina";

presentPet(firstName, "cat", "Salo");
function presentPet(firstName, animalType, animalName) {
  console.log(`My name is ${firstName}, i have a ${animalType} called ${animalName}`);
}
