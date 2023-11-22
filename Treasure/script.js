let treasure = {
  x: Math.floor(Math.random() * 700),
  y: Math.floor(Math.random() * 500),
};

let map = document.getElementById("map");
let wrap = document.getElementById("wrap");
let coords = document.getElementById("coords");
let hintBtn = document.getElementById("hintBtn");

map.onload = function () {
  wrap.style.width = `${map.width}px`;
};

wrap.style.height = "570px";
wrap.style.position = "relative";

map.onmousemove = function (event) {
  let x = event.offsetX;
  let y = event.offsetY;
  coords.value = `Coords: ${x} : ${y}`;

  if (
    Math.abs(event.offsetX - treasure.x) < 60 &&
    Math.abs(event.offsetY - treasure.y) < 60
  ) {
    showTreasureHint();
    alert("Скарб тут!");
  }
};

function showTreasureHint() {
  let treasureCircle = document.createElement("div");
  treasureCircle.style.border = "2px solid red";
  treasureCircle.style.width = "100px";
  treasureCircle.style.height = "100px";
  treasureCircle.style.borderRadius = "50%";
  treasureCircle.style.position = "absolute";
  treasureCircle.style.top = `${treasure.y - 60}px`;
  treasureCircle.style.left = `${treasure.x - 60}px`;
  wrap.appendChild(treasureCircle);
}

hintBtn.addEventListener("click", function () {
  showTreasureHint();
});
