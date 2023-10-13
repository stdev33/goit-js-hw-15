const fontSizeControl = document.querySelector("#font-size-control");
fontSizeControl.addEventListener("input", onFontSizeControlInput);

console.log("fontSizeControl:.value: ", fontSizeControl.value);

function onFontSizeControlInput(event) {
  const text = document.getElementById("text");
  if (text !== null) {
    text.style.fontSize = `${event.currentTarget.value}px`;
  }
}
