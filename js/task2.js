const lengthArr = parseInt(prompt("Введіть розмір масиву:"));
let arr = [];
let summ = 0;
if (isNaN(lengthArr)) {

}else {
  for (i = 0; i < lengthArr; i++) {
    let random = Math.floor(Math.random() * 100) + 1;
    Number(arr.push(random));
    summ = summ + arr[i];
  }
  summ = parseInt(summ / lengthArr); // я заокруглив, щоб ,було красивіше
  alert(`Масив :${arr} та середнє арифметичне - ${summ} `);
}