const vehicles = [
  { type: "Bus", fuel: "Diesel", passengers: 45, stops: ["Nørrebrogade", "Elmegade"] },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 0, ownedBy: "Jonas", isElectric: true },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 2, ownedBy: "Vingegård", isTandem: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];
const tbodyPointer = document.querySelector("tbody");

showTheseVehicles(vehicles);

function showTheseVehicles(arr) {
  tbodyPointer.innerHTML = "";
  arr.forEach((each) => {
    tbodyPointer.innerHTML += `<tr>
      <td>${each.type}</td>
      <td>${each.fuel ?? "No"}</td>
      <td>${each.passengers}</td> 
      <td>${each.stops ? each.stops.join(", ") : "None"}</td>
      <td>${each.ownedBy ?? "None"}</td>
      <td>${each.isElectric === true ? "Yes" : "No"}</td>
      <td>${each.isTandem === true ? "Yes" : "No"}</td>
    </tr>`;
  });
}

// Button event listeners
const btn1 = document.querySelector(".button1");
btn1.addEventListener("click", klik1);

const btn2 = document.querySelector(".button2");
btn2.addEventListener("click", klik2);

const btn3 = document.querySelector(".button3");
btn3.addEventListener("click", klik3);

const btn4 = document.querySelector(".button4");
btn4.addEventListener("click", klik4);

const btnAll = document.querySelector(".buttonAll");
btnAll.addEventListener("click", klikAll);

// Filter functions
function klik1() {
  console.log("Elbiler");
  showTheseVehicles(
    vehicles.filter(function (vehicle) {
      return vehicle.isElectric;
    })
  );
}

function klik2() {
  console.log("Biler med 2+ sæder");
  showTheseVehicles(
    vehicles.filter(function (vehicle) {
      return vehicle.passengers >= 2;
    })
  );
}

function klik3() {
  console.log("Jonas' elektriske fartøjer");
  showTheseVehicles(
    vehicles.filter(function (vehicle) {
      if (vehicle.isElectric) {
        return vehicle.ownedBy === "Jonas";
      }
    })
  );
}

function klik4() {
  console.log("rugbrødsbiler");
  showTheseVehicles(
    vehicles.filter(function (vehicle) {
      if (vehicle.passengers >= 1) {
        return vehicle.fuel === "Rugbrød";
      }
    })
  );
}

function klikAll() {
  console.log("Alle biler");
  showTheseVehicles(vehicles);
}
