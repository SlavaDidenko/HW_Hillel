const x = parseInt(prompt("Введіть ціле число Х:"));
const y = parseInt(prompt("Введіть ціле число Y:"));
let arr = [];
if (isNaN(x) || isNaN(y)) {
  alert(`Ну я ж казав число...`)
} else {
  for (let i = x; i <= y; i++ ){
  arr.push(i);
}
alert(`Х= ${x} Y=${y}, числа від Х до Y: ${arr}`);
}
