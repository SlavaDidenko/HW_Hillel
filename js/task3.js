function sumCounter() {
  let counter = 0;
  return function (a) {
      
      return counter += a;
  }
}
const counterResult = sumCounter()
console.log(counterResult(3))
console.log(counterResult(5))
console.log(counterResult(20))