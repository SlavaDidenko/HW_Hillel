const lengthArr = parseInt(prompt("Введіть розмір масиву:"));
let arr = [];
let min;
let max;
for (i = 0; i < lengthArr; i++){
  let number = parseInt(prompt("Введіть число масиву:"));
  arr.push(number);
}
alert(`Масив =${arr}.`);
min = Math.min(...arr);
max = Math.max(...arr)
idexMin = arr.indexOf(min);
indexMax = arr.indexOf(max);
clonMin = arr[idexMin];
arr[idexMin] = arr[indexMax];
arr[indexMax] = clonMin;
alert(`Мінімальний = ${min} . Максимальний =${max}. Новий масив =${arr}.`);