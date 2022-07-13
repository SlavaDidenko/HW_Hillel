function doFunction(a, b, func) {
  return func(a, b)
}
function quotient(a, b) {
  return Math.floor(a / b)
}
console.log(doFunction(7, 2, quotient))