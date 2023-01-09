let range = document.getElementById("myRange");
let output = document.getElementById("rangeValue");
output.innerHTML = range.value;

range.oninput = function () {
  output.innerHTML = this.value;
}

const progress = document.querySelector('.myRange');

progress.addEventListener('input', function () {
  const value = this.value;
  this.style.background = `linear-gradient(to right, #82CFD0 0%, #82CFD0 ${value / 250}%, #fff ${value / 250}%, white 100%)`
})
