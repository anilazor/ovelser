"use strict";

const selectElm = document.querySelector("#themes");
const body = document.querySelector("body");
body.dataset.theme = "light";

selectElm.addEventListener("change", (evt) => {
  console.log(evt);

  body.dataset.theme = evt.target.value;
});
