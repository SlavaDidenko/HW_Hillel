import './style.scss'
const counterInput = document.querySelector('.counter__input')
const submitBtn = document.querySelector('.counter__btn');
const error = document.querySelector('.counter__error');
const inputTerm = document.getElementById('inputTerm')
const inputPrice = document.getElementById('inputPrice');
const partsPrice = document.getElementById('partsPrice');
const instantPrice = document.getElementById('instantPrice');
const rangeTerm = document.getElementById('rangeTerm');
const rangePrice = document.getElementById('rangePrice');

let max = 0

const pattern = /^\+380\d{3}\d{2}\d{2}\d{2}$/;

counterInput.addEventListener('input', (e) => {
  if (pattern.test(e.target.value)) {
    console.log('true')
    submitBtn.disabled = false;
    error.classList.remove('active')
  } else {
    console.log('f')
    submitBtn.disabled = true;
    error.classList.add('active')
  }
})

inputTerm.addEventListener('blur', (e) => {
  checkMinMaxMonths(e.target)
  renderSumm(inputPrice.value, e.target.value)
  rangeTerm.value = e.target.value
})
inputPrice.addEventListener('blur', (e) => {
  checkMinMaxPrice(e.target)
  renderSumm(e.target.value, inputTerm.value)
  rangePrice.value = e.target.value
})

document.forms.counterForm.addEventListener('submit', (e) => {
  e.preventDefault();
  max = createLimit(counterInput.value);
  inputPrice.value = max;
  inputTerm.value = 5;
  renderSumm(inputPrice.value);

  rangePrice.max = max;
  rangePrice.value = max;
  rangeTerm.value = 5;

  document.querySelector('.hidden').classList.add('hidden-unset')
})


rangePrice.addEventListener('input',(e) => {
  inputPrice.value = e.target.value 
})

rangeTerm.addEventListener('input',(e) => {
  inputTerm.value = e.target.value 
})

rangePrice.addEventListener('mouseup',(e) => {
  renderSumm(e.target.value, rangeTerm.value)
  console.log('sdfsdf')
})

rangeTerm.addEventListener('mouseup',(e) => {
  renderSumm( rangePrice.value, e.target.value)
})

function renderSumm(inputPrice , inputTerm = 5) {
  console.log(inputPrice / inputTerm)
  partsPrice.innerHTML = Math.floor(inputPrice / inputTerm);
  instantPrice.innerHTML = Math.floor(inputPrice / inputTerm + (16 * (inputPrice / inputTerm) / 100))
}


function createLimit(nubmer) {
  const limit = nubmer.split('').slice(1, 7).join('');
  return limit
}

function checkMinMaxPrice(element) {
  if (element.value > Number(max)) {
    element.value = max;
  }
  if (element.value < 300) {
    element.value = 300;
  }
}

function checkMinMaxMonths(element) {
  if (element.value > 20) {
    element.value = 20;
  }
  if (element.value < 5) {
    element.value = 5;
  }
}