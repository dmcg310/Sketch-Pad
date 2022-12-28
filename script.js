const container = document.querySelector("#container");

for (i = 0; i < 256; i++) {
  const div = document.createElement("div");
  div.setAttribute("style", "border: 1px solid black; padding: 10px;");
  container.appendChild(div);
}
