const bc = [
  { name: "Hvidevarer", link: "/hvidevarer" },
  { name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
  { name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },
];

document.querySelector("button").addEventListener("click", klik);

function klik() {
  let str = "";
  //  &nbsp;
  bc.forEach((elm, i) => {
    console.log("elm", elm.name);
    if (i < 2) {
      str += `<li><a href="">${elm.name}</a></li>`;
      str += ` / `;
    }
    if (i === 2) {
      str += `<li>${elm.name}</li>`;
    }
  });

  console.log(str);

  document.querySelector("ul").innerHTML = str;
}
