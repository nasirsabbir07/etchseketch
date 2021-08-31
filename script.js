const hexArr = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

const colorContainer = document.querySelector(".plate-container");

//*Create the grid board
function grid(rows, columns) {
  colorContainer.style.setProperty("--gridRows", rows);
  colorContainer.style.setProperty("--gridCols", columns);
  for (let r = 0; r < rows * columns; r++) {
    let row = document.createElement("div");
    colorContainer.appendChild(row).className = "grid-items";
  }
}

grid(16, 16);

//*single color mode
const colorMode = document.querySelector(".color-mode");

function singleMode() {
  let colorValue = document.querySelector("#favcolor").value;
  return colorValue;
}

colorMode.addEventListener("click", function () {
  brush();
});

function brush() {
  colorContainer.addEventListener("mouseover", function (e) {
    e.target.style.backgroundColor = singleMode(0);
  });
}

//*hexadecimal color mode
const hexMode = document.getElementById("hex");
const gridItem = document.querySelector(".grid-items");

function rainbowMode() {
  let hexValue = "#";
  let random;
  for (let i = 0; i < 6; i++) {
    random = Math.floor(Math.random() * hexArr.length);
    hexValue += hexArr[random];
  }

  return hexValue;

  //*change the square color of the 1st square just
  // gridItem.style.backgroundColor = hexValue;
}

//*need to select the hexadecimal color mode
hexMode.addEventListener("click", function () {
  hexBrush();
});

//*change colors of individual grid on mosue hover

function hexBrush() {
  colorContainer.addEventListener("mouseover", function (e) {
    e.target.style.backgroundColor = rainbowMode();
    // console.log(e.target);
  });
}

//*Erase the colors of the selected grid

const eraser = document.getElementById("eraser");

function erase() {
  colorContainer.addEventListener("mouseover", function (e) {
    e.target.style.backgroundColor = "blanchedalmond";
  });
}

eraser.addEventListener("click", function () {
  erase();
});

//*reset the colors of the grids
const clear = document.querySelector("#clear");
const gridItems = document.querySelectorAll(".grid-items");

clear.addEventListener("click", function () {
  gridItems.forEach(function (gridItem) {
    gridItem.style.backgroundColor = "blanchedalmond";
  });
});
