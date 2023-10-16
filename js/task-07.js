const fontSizeControl = document.querySelector("#font-size-control");
fontSizeControl.addEventListener("input", onFontSizeControlInput);

console.log("fontSizeControl:.value: ", fontSizeControl.value);
setTextFontSize(fontSizeControl.value);

function onFontSizeControlInput(event) {
  setTextFontSize(event.currentTarget.value);
}

function setTextFontSize(size) {
  const text = document.getElementById("text");
  if (text !== null) {
    text.style.fontSize = `${size}px`;
  }
}
