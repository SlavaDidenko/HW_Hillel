function shift (array) {
  let arrLength = array.length;
  for (i = 0; i < arrLength; i++) {
    array[i] = array[i + 1];
  }
  array.length -= 1;
  return array;
}

function pop(array) {
  array.length -= 1;
  return array;
}


function unshift(array, ...rest) {
  const argulength = rest.length;
  const arrLength = array.length;
  for (i = arrLength; i >= 0; i--) {
    array[i + argulength - 1] = array[i - 1]
  }
  for (i = 0; i < argulength; i++) {
    array[i] = rest[i];
  }
  return array;
};


function push(array, ...rest) {
  let argLength = rest.length;
  let arrLength = array.length;
  for (i = 0; i < argLength; i++) {
    array[arrLength + i] = rest[i];
  }
  return array;
};


num = [55, 24];
arr = [2, 0, 2, 3, 5];
// console.log(shift(arr));
// console.log(pop(arr));
// console.log(unshift(arr, 1));
// console.log(push(arr, 123));