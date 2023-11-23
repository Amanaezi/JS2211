const colors = [
  "#ff0000",
  "#00ff00",
  "#0000ff",
  "#ffff00",
  "#ff00ff",
  "#00ffff",
];

let timer = null;

function addText(id, text) {
  clearInterval(timer);
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

  timer = setInterval(addLetter, 100);
}

function addRandomWord() {
  let words = ["Apple", "Banana", "Orange", "Grapes", "Pineapple"];
  let randomWord = words[Math.floor(Math.random() * words.length)];
  addText("block", randomWord);
}

function removeText(id) {
  clearInterval(timer);
  let elem = document.getElementById(id);
  elem.innerHTML = "";
}
