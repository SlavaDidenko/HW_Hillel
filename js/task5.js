let arr = [];
let coll = prompt('coll:');
let row = prompt('row:');
let k = prompt('k:');
let arrNumbers = new Set();
let str = '';
for (i = 0; i < row; i++) {
  
  arr[i] = [];
  for (j = 0; j < coll; j++){
    let plusOrMinus = ((Math.random() < 0.5) ? -1 : 1);
    let randomNumber = Math.floor(Math.random() * 90 + 10);
    arr[i][j] = (plusOrMinus * randomNumber);
    let resoult = arr[i][j] % k;
    if (resoult == 0) {
      arrNumbers.add(arr[i][j]);
    }
  }
  str += '|' + arr[i].join(' ') + '|\n';
}
console.log(str)
console.log(Array.from(arrNumbers).join(' ')); 
