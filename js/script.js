const input = document.querySelector(".form__input");
const clear = document.querySelector('.form__clear-btn');
const previous = document.querySelector('.form__previous-btn');
const next = document.querySelector('.form__next-btn');
const parent = document.querySelector('.form__parent-btn');
const first = document.querySelector('.form__first-btn');
const last = document.querySelector('.form__last-btn');
const btns = document.querySelectorAll('.btn');
const form = document.querySelector('.form');


document.querySelector('.header__burger').onclick = () => {
  document.getElementsByTagName('body')[0].classList.add('hidden');
  document.querySelector('.header__menu-wrapper').classList.add('active-menu');
  document.querySelector('.header').classList.add('back');
}
document.querySelector('.header__close-btn').onclick = () => {
  document.querySelector('.header__menu-wrapper').classList.remove('active-menu');
  document.getElementsByTagName('body')[0].classList.remove('hidden');
  document.querySelector('.header').classList.remove('back');
}

/////////////////////////////////////////////////
function reset() {
  let elements = document.querySelectorAll('.active');
  elements.forEach(element => element.classList.remove('active'));
  
  input.value = '';

  btnDisabled();
}
///////////////////////////////////////////////////
function btnDisabled() {
  btns.forEach(btn => {
    if (btn.classList.contains('form__clear-btn')) return;
    btn.disabled = true;
  });
}
///////////////////////////////////////////////////
function checkSelector() {
  let selector = document.querySelector(input.value);

  selector.classList.add('active');

  btnDisabled();

  checkBtns(selector);
}
///////////////////////////////////////////////////
function checkBtns(selector) {

  if (selector.parentElement) {
    parent.disabled = false;
  }

  if (selector.previousElementSibling) {
    previous.disabled = false;
  }

  if (selector.nextElementSibling) {
    next.disabled = false;
  }
  
  if (selector.firstElementChild) {
    first.disabled = false;
  }

  if (selector.lastElementChild) {
    last.disabled = false;
  }
}
///////////////////////////////////////////////////
function replacePrev() {
  btnDisabled();

  let selector = document.querySelector('.active');

  selector.classList.remove('active');
  
  selector.previousElementSibling.classList.add('active');
  checkBtns(selector.previousElementSibling);
}
///////////////////////////////////////////////////
function replaceNext() {
  btnDisabled();

  let selector = document.querySelector('.active');

  selector.classList.remove('active');

  selector.nextElementSibling.classList.add('active');
  checkBtns(selector.nextElementSibling);
}
///////////////////////////////////////////////////
function replaceFirst() {
  btnDisabled();

  let selector = document.querySelector('.active');

  selector.classList.remove('active');

  selector.firstElementChild.classList.add('active');
  checkBtns(selector.firstElementChild);
}
///////////////////////////////////////////////////
function replaceLast() {
  btnDisabled();

  let selector = document.querySelector('.active');

  selector.classList.remove('active');

  selector.lastElementChild.classList.add('active');
  checkBtns(selector.lastElementChild);
}
///////////////////////////////////////////////////
function replaceParent() {
  btnDisabled();

  let selector = document.querySelector('.active');

  selector.classList.remove('active');

  selector.parentElement.classList.add('active');
  checkBtns(selector.parentElement);
}


form.addEventListener('click', (event) => {
  if (event.target.closest('.btn')) {
    event.preventDefault();
  }
})
input.addEventListener('input', _.debounce( checkSelector,1000))
clear.addEventListener('click', reset)
previous.addEventListener('click', replacePrev);
next.addEventListener('click', replaceNext);
first.addEventListener('click', replaceFirst);
last.addEventListener('click', replaceLast);
parent.addEventListener('click', replaceParent);