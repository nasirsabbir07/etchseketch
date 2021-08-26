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

grid(29, 29);

//*single color mode

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
  rainbowMode(0);
});

//*change colors of individual grid on mosue hover
colorContainer.addEventListener("mouseover", function (e) {
  e.target.style.backgroundColor = rainbowMode();
  // console.log(e.target);
});

//*Erase the colors of the selected grid
const eraser = document.getElementById("eraser");

eraser.addEventListener("click", function (e) {
  e.addEventListener("mouseover", function (event) {
    event.target.style.backgroundColor = "blanchedalmond";
  });
});

//*reset the colors of the grids
const clear = document.querySelector("#clear");
const gridItems = document.querySelectorAll(".grid-items");

clear.addEventListener("click", function () {
  gridItems.forEach(function (gridItem) {
    gridItem.style.backgroundColor = "blanchedalmond";
  });
});
