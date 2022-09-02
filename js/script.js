function* numberGuess(number) {
  while (true) {
    let first = yield "Введіть число";
    if (number > first) yield `Більше, ніж ${first}`;
    if (number < first) yield `Менше, ніж ${first}`;
    if (first == number) return `Ви вгадали, це ${number}`
  }
}


let result;
const guessIterator = numberGuess(5);
do {
  result = guessIterator.next()
  if (result.value === "Введіть число") {
        const userNum = parseInt(prompt("Введіть число"))
        result = guessIterator.next(userNum)
        console.log(result.value)
  }
} while (result.done === false)
