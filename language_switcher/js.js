"use strict";
const superiorTexts = {
  de: {
    texts: [
      { text: "Das Bot", location: ".header" },
      { text: "Das Ro-Bot", location: ".footer" },
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: ".header" },
      { text: "Robotten", location: ".footer" },
    ],
  },
};
let locale = "da";

const selectElement = document.querySelector(".language");
const header = document.querySelector(".header");
const footer = document.querySelector(".footer");
// header.textContent = superiorTexts.da.texts[0].text;
// footer.textContent = superiorTexts.da.texts[1].text;

selectElement.addEventListener("change", (event) => {
  console.log("selct value", event.target.value);

  chooseLang(event.target.value);
});
chooseLang("da");
function chooseLang(locale) {
  superiorTexts[locale].texts.forEach((each) => {
    // console.log("text", each.text);
    // console.log("location", each.location);
    // console.log("************");
    document.querySelector(each.location).textContent = each.text;
  });
}
