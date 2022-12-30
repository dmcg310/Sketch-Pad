const container = document.querySelector("#container");

let four = document.getElementById("four");
four.addEventListener("click", (event) => {
  fourGrid();
});

let eight = document.getElementById("eight");
eight.addEventListener("click", (event) => {
  eightGrid();
});

let sixteen = document.getElementById("sixteen");
sixteen.addEventListener("click", (event) => {
  sixteenGrid();
});

function fourGrid() {
  for (i = 0; i < 16; i++) {
    const div = document.createElement("div");
    div.setAttribute("style", "padding: 60px;");
    container.appendChild(div);
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);
    div.addEventListener(
      "mouseover",
      (e) => (e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`)
    );
    let reset = document.getElementById("reset");
    reset.addEventListener("click", (event) => {
      container.removeChild(div);
    });
  }
}

function eightGrid() {
  for (i = 0; i < 64; i++) {
    const div = document.createElement("div");
    div.setAttribute("style", "padding: 30px;");
    container.appendChild(div);
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);
    div.addEventListener(
      "mouseover",
      (e) => (e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`)
    );
    let reset = document.getElementById("reset");
    reset.addEventListener("click", (event) => {
      container.removeChild(div);
    });
  }
}

function sixteenGrid() {
  for (i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.setAttribute("style", "padding: 15px;");
    container.appendChild(div);
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);
    div.addEventListener(
      "mouseover",
      (e) => (e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`)
    );
    let reset = document.getElementById("reset");
    reset.addEventListener("click", (event) => {
      container.removeChild(div);
    });
  }
}
