const container = document.querySelector("#container");

for (i = 0; i < 256; i++) {
  const div = document.createElement("div");
  div.setAttribute(
    "style",
    "border: 1px solid black; border-radius: 3px; padding: 15px;"
  );
  container.appendChild(div);
  div.addEventListener("mouseover", (e) => e.target.classList.add("my-color-class"));
}
