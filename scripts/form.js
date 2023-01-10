let range = document.getElementById("myRange");
let output = document.getElementById("rangeValue");
let inputDollar = document.getElementById("dollar")
let warning = document.getElementById("warning")

output.innerHTML = range.value;

range.oninput = function () {
  output.innerHTML = this.value;

  if (this.value === '25000') {
    output.innerHTML = ''
    warning.innerHTML = 'final project price is more than $ 25000'
    inputDollar.innerHTML = ''
    inputDollar.innerHTML = `More than $ ${this.value}`
  } else if (Number(this.value) < 500) {
    output.innerHTML = ''
    inputDollar.innerHTML = `$ ${this.value}`
    warning.innerHTML = 'start from $ 500'
  } else {
    output.innerHTML = ''
    warning.innerHTML = ''
    inputDollar.innerHTML = ''
    inputDollar.innerHTML = `$ ${this.value}`
  }

}

//changes range color depending on its value
range.addEventListener('input', function () {
  const valueWidth = this.value;
  this.style.background = `linear-gradient(to right, var(--whiteText) 0%, var(--whiteText) ${valueWidth / 250}%, rgba(255, 255, 255, 0) ${valueWidth / 250}%, rgba(255, 255, 255, 0) 100%)`
})