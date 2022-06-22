const number1 = Number(prompt("Введіть першу цифру:"));
const number2 = Number(prompt("Введіть дургу цифру:"));
const number3 = Number(prompt("Введіть третю цифру:"));
const number4 = Number(prompt("Введіть четверту цифру:"));

if (isNaN(number1) || isNaN(number2) || isNaN(number3) || isNaN(number4)) {
  alert(`Лише цифри...`)
}
else {
  const min = Math.min(number1, number2, number3, number4);
  const max = Math.max(number1, number2, number3, number4);
  const result = min * max;
  const set = "Задано: " + number1 + " , " + number2 + " , " + number3 + " , " + number4 + ". ";
  const solution = " Рішення: " + min + " * " + max + " = ";

  alert(set + solution + result + ". ");
}
