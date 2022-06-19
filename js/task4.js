let first = +prompt("Enter the first position:");
let second = +prompt("Enter the second position:");
while (true) {
  if (first > 0 && first <= 8 && second > 0 && second <= 8) {
    let nextFirst = +prompt("Enter the next first position:");
    let nextSecond = +prompt("Enter the next second position:");
    if (
      nextFirst > 0 &&
      nextFirst <= 8 &&
      nextSecond > 0 &&
      nextSecond <= 8 &&
      ((first == nextFirst - 2 && second == nextSecond - 1) ||
        (first == nextFirst - 2 && second == nextSecond + 1) ||
        (first == nextFirst + 2 && second == nextSecond - 1) ||
        (first == nextFirst + 2 && second == nextSecond + 1) ||
        (first == nextFirst - 1 && second == nextSecond - 2) ||
        (first == nextFirst - 1 && second == nextSecond + 2) ||
        (first == nextFirst + 1 && second == nextSecond - 2) ||
        (first == nextFirst + 1 && second == nextSecond + 2))
    ) {
      console.log(true);
      (first = nextFirst), (second = nextSecond);
    } else {
      console.log(false);
      break;
    }
  }
}
