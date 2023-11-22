const colors = [
  "#ff0000",
  "#00ff00",
  "#0000ff",
  "#ffff00",
  "#ff00ff",
  "#00ffff",
];

function addText(id, text) {
  let elem = document.getElementById(id);
  let pos = 0;

  function addLetter() {
    pos++;
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    elem.innerHTML = `<span style="color:${randomColor}">${text.substring(
      0,
      pos
    )}</span>`;

    if (pos >= text.length) {
      clearInterval(timer);
    }
  }

  let timer = setInterval(addLetter, 1000);
}

function addRandomWord() {
  let words = ["Apple", "Banana", "Orange", "Grapes", "Pineapple"];
  let randomWord = words[Math.floor(Math.random() * words.length)];
  addText("block", randomWord);
}

function removeText(id) {
  let elem = document.getElementById(id);
  elem.innerHTML = "";
}
