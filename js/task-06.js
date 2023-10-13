const inputElement = document.querySelector("#validation-input");
inputElement.addEventListener("blur", handlerInputUnfocus);

function handlerInputUnfocus(event) {
  const targetInput = event.currentTarget;
  const controlDataLength = parseInt(targetInput.dataset.length, 10);

  if (targetInput.value.length === controlDataLength) {
    targetInput.classList.add("valid");
    targetInput.classList.remove("invalid");
  } else {
    targetInput.classList.add("invalid");
    targetInput.classList.remove("valid");
  }
}
