function max(arr) {
  if (arr.length === 1) return arr[0];
  
  if (arr[0] < arr[1]) {
    arr.splice(0, 1);
    return max(arr);
  } else {
    arr.splice(1, 1);
    return max(arr);
  }
}

console.log(max([22, 1, 3, 4, 23, 12]));
