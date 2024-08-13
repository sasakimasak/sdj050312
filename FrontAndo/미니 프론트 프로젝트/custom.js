
let display = document.getElementById('screen');

function allclear() {
  display.value = '';
}

function calc(n) {
  display.value += n;
}
function result() {
  display.value = eval(display.value);
}

