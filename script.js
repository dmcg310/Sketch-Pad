const container = document.querySelector("#grid-container");

const defaultSize = 16;
const defaultColor = "#233142";
const grid = document.getElementById("grid-container");

grid.style.gridTemplateColumns = `repeat(${defaultSize}, 1fr)`;
grid.style.gridTemplateRows = `repeat(${defaultSize}, 1fr)`;
grid.style.width = "500px";
grid.style.height = "500px";
grid.style.border = "#f95959 5px solid";

for (let i = 0; i < defaultSize * defaultSize; i++) {
  const gridElement = document.createElement("div");
  gridElement.style.border = "0.75px solid black";
  gridElement.classList.add("grid-element");
  grid.appendChild(gridElement);
}

// let four = document.getElementById("four");
// four.addEventListener("click", (event) => {
//   fourGrid();
// });

// let eight = document.getElementById("eight");
// eight.addEventListener("click", (event) => {
//   eightGrid();
// });

// let sixteen = document.getElementById("sixteen");
// sixteen.addEventListener("click", (event) => {
//   sixteenGrid();
// });

// function fourGrid() {
//   for (i = 0; i < 16; i++) {
//     const div = document.createElement("div");
//     div.setAttribute("style", "padding: 60px;");
//     container.appendChild(div);
//     const randomR = Math.floor(Math.random() * 256);
//     const randomG = Math.floor(Math.random() * 256);
//     const randomB = Math.floor(Math.random() * 256);
//     div.addEventListener(
//       "mouseover",
//       (e) => (e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`)
//     );
//     let reset = document.getElementById("reset");
//     reset.addEventListener("click", (event) => {
//       container.removeChild(div);
//     });
//   }
// }

// function eightGrid() {
//   for (i = 0; i < 64; i++) {
//     const div = document.createElement("div");
//     div.setAttribute("style", "padding: 30px;");
//     container.appendChild(div);
//     const randomR = Math.floor(Math.random() * 256);
//     const randomG = Math.floor(Math.random() * 256);
//     const randomB = Math.floor(Math.random() * 256);
//     div.addEventListener(
//       "mouseover",
//       (e) => (e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`)
//     );
//     let reset = document.getElementById("reset");
//     reset.addEventListener("click", (event) => {
//       container.removeChild(div);
//     });
//   }
// }

// function sixteenGrid() {
//   for (i = 0; i < 256; i++) {
//     const div = document.createElement("div");
//     div.setAttribute("style", "padding: 15px;");
//     container.appendChild(div);
//     const randomR = Math.floor(Math.random() * 256);
//     const randomG = Math.floor(Math.random() * 256);
//     const randomB = Math.floor(Math.random() * 256);
//     div.addEventListener(
//       "mouseover",
//       (e) => (e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`)
//     );
//     let reset = document.getElementById("reset");
//     reset.addEventListener("click", (event) => {
//       container.removeChild(div);
//     });
//   }
// }
