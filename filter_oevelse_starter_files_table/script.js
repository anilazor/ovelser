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

// showTheseVehicles(vehicles);

function showTheseVehicles(arr) {
  arr.forEach((each) => {
    tbodyPointer.innerHTML += `<tr>
  <td>${each.type}</td>
  <td>${each.fuel}</td>
  <td>${each.passengers}</td> 
  <td>${each.stops}</td>
  <td>${each.ownedBy}</td>
  <td>${each.isElectric}</td>
  <td>${each.isTandem}</td>
</tr>`;
  });
}

//Vis eldrevne fartøjer
function isElec(vehicle) {
  if (vehicle.isElectric) {
    return true;
  }
}

const onlyElec = vehicles.filter(isElec);
console.log("OnlyElec", onlyElec);

showTheseVehicles(onlyElec);

//electrics
const btn1 = document.querySelector("button1");
btn1.addEventListener("click", klik1);
function klik1() {}
//seats
const btn2 = document.querySelector("button2");
btn1.addEventListener("click", klik2);
//jonas
const btn3 = document.querySelector("button3");
btn1.addEventListener("click", klik3);
//rugbrød
const btn4 = document.querySelector("button4");
btn1.addEventListener("click", klik4);
//alle vehicles
const btnAll = document.querySelector("buttonAll");
btn1.addEventListener("click", klikAll);
