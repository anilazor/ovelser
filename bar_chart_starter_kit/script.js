let bars = [];

const list = document.querySelector("ul");

setInterval(generateBar, 1000);

function generateBar() {
  console.log("generateBar");
  const li = document.createElement("li");
  let randoNum = Math.floor(Math.random() * 100);
  bars.push(randoNum);
  let barLength = bars.length;
  console.log(bars.length);
  console.log(bars);
  li.style.setProperty("--height", `${randoNum}`);
  list.appendChild(li);
  if (barLength == 21) {
    bars.shift();
    document.querySelector("li").remove();
  }
}

