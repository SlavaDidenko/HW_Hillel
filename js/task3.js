const number1 = prompt("Enter the first number:");
const number2 = prompt("Enter the second number:");
const number3 = prompt("Enter the third number:");
const number4 = prompt("Enter the fourth number:");
const min = Math.min(number1, number2, number3, number4);
const max = Math.max(number1, number2, number3, number4);
alert(
  "Задано: " +
    number1 +
    " , " +
    number2 +
    " , " +
    number3 +
    " , " +
    number4 +
    ". " +
    " Рішення: " +
    min +
    " * " +
    max +
    " = " +
    min * max +
    ". "
);
