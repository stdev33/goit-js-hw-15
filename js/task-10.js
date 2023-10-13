function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const initialBoxSize = 30;
const boxSizeStep = 10;

const controls = document.querySelector("#controls");

const createButton = controls.querySelector("[data-create]");
createButton.addEventListener("click", onCreateButtonClick);

const destroyButton = controls.querySelector("[data-destroy]");
destroyButton.addEventListener("click", onDestroyButtonClick);

const input = controls.querySelector("input");

function onCreateButtonClick() {
  destroyBoxes();

  let amount = parseInt(input.value, 10);
  if (Number.isNaN(amount)) {
    if (input.hasAttribute("min")) {
      input.value = input.getAttribute("min");
      amount = parseInt(input.value, 10);
    } else {
      amount = 1;
    }
  }

  createBoxes(amount);
}

function onDestroyButtonClick() {
  destroyBoxes();
}

function createBoxes(amount) {
  const boxes = [];
  let size = initialBoxSize;

  for (let index = 0; index < amount; index += 1) {
    boxes.push(
      `<div style="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()};"></div>`
    );

    size += boxSizeStep;
  }

  const container = document.querySelector("#boxes");
  container.insertAdjacentHTML("beforeend", boxes.join(""));
}

function destroyBoxes() {
  const container = document.querySelector("#boxes");
  container.innerHTML = "";
}
