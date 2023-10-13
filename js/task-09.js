function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const widget = document.querySelector(".widget");
const button = widget.querySelector(".change-color");
button.addEventListener("click", onButtonClick);

function onButtonClick() {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;

  const colorSpan = document.querySelector(".color");
  if (colorSpan !== null) {
    colorSpan.textContent = color;
  }
}
