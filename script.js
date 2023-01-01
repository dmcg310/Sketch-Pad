const newPad = document.getElementById("new-pad");
newPad.addEventListener("click", (event) => {
  let size = prompt(
    "Choose a size for the sketch pad (max 80).\nPlease note that the larger the number the longer the page will take to load."
  );

  const grid = document.getElementById("grid-container");

  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  grid.style.width = "500px";
  grid.style.height = "500px";
  grid.style.border = "#000000 3px solid";
  grid.style.backgroundColor = "white";

  if (size > 0 && size <= 80) {
    for (let i = 0; i < size * size; i++) {
      const gridElement = document.createElement("div");
      gridElement.classList.add("grid-element");
      grid.appendChild(gridElement);

      const R = Math.floor(Math.random() * 256);
      const G = Math.floor(Math.random() * 256);
      const B = Math.floor(Math.random() * 256);

      gridElement.addEventListener(
        "mouseover",
        (e) => (e.target.style.backgroundColor = "black")
      );

      let rainbow = document.getElementById("rainbow");
      rainbow.addEventListener("click", (event) => {
        gridElement.addEventListener(
          "mouseover",
          (e) => (e.target.style.backgroundColor = `rgb(${R}, ${G}, ${B})`)
        );
      });

      let red = document.getElementById("red");
      red.addEventListener("click", (event) => {
        gridElement.addEventListener(
          "mouseover",
          (e) => (e.target.style.backgroundColor = "red")
        );
      });

      let orange = document.getElementById("orange");
      orange.addEventListener("click", (event) => {
        gridElement.addEventListener(
          "mouseover",
          (e) => (e.target.style.backgroundColor = "darkorange")
        );
      });

      let yellow = document.getElementById("yellow");
      yellow.addEventListener("click", (event) => {
        gridElement.addEventListener(
          "mouseover",
          (e) => (e.target.style.backgroundColor = "yellow")
        );
      });

      let green = document.getElementById("green");
      green.addEventListener("click", (event) => {
        gridElement.addEventListener(
          "mouseover",
          (e) => (e.target.style.backgroundColor = "green")
        );
      });

      let blue = document.getElementById("blue");
      blue.addEventListener("click", (event) => {
        gridElement.addEventListener(
          "mouseover",
          (e) => (e.target.style.backgroundColor = "blue")
        );
      });

      let purple = document.getElementById("purple");
      purple.addEventListener("click", (event) => {
        gridElement.addEventListener(
          "mouseover",
          (e) => (e.target.style.backgroundColor = "purple")
        );
      });

      let eraser = document.getElementById("eraser");
      eraser.addEventListener("click", (event) => {
        gridElement.addEventListener(
          "mouseover",
          (e) => (e.target.style.backgroundColor = "white")
        );
      });

      let reset = document.getElementById("reset");
      reset.addEventListener("click", (event) => {
        gridElement.style.backgroundColor = "white";
      });
    }
  } else {
    alert("Please enter a value that is greater than 0 and less than 100.");
  }
});
