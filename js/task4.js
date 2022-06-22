let first = Number(prompt("Введіть початкову позицію коня(у цифрах) по Y:"));
let second = Number(prompt("Введіть початкову позицію коня(у цифрах) по X:"));
if (isNaN(first) || isNaN(second)) {
  alert(`Ну я ж казав у цифрах...`)
}
else {
  if (first > 0 && first <= 8 && second > 0 && second <= 8) {
    let nextFirst = Number(prompt("Введіть наступну позицію коня(у цифрах) по Y:"));
    let nextSecond = Number(prompt("Введіть наступну позицію коня(у цифрах) по X:"));
    const progressCheck1 = first == nextFirst - 2 && second == nextSecond + 1;
    const progressCheck2 = first == nextFirst - 2 && second == nextSecond - 1;
    const progressCheck3 = first == nextFirst + 2 && second == nextSecond - 1;
    const progressCheck4 = first == nextFirst + 2 && second == nextSecond + 1;
    const progressCheck5 = first == nextFirst - 1 && second == nextSecond - 2;
    const progressCheck6 = first == nextFirst - 1 && second == nextSecond + 2;
    const progressCheck7 = first == nextFirst + 1 && second == nextSecond - 2;
    const progressCheck8 = first == nextFirst + 1 && second == nextSecond + 2;
    if (isNaN(nextFirst) || isNaN(nextSecond)) {
      alert(`Ну я ж казав у цифрах...`)
    }
    else
    {
      if ((
        nextFirst > 0 &&
        nextFirst <= 8 &&
        nextSecond > 0 &&
        nextSecond <= 8) &&
        ( progressCheck1 || progressCheck2 || progressCheck3 || progressCheck4 ||
          progressCheck5 || progressCheck6 || progressCheck7 || progressCheck8
        )) {
        alert(true);
        (first = nextFirst), (second = nextSecond);
      } else {
        alert(false );
        }
    }
  }
}