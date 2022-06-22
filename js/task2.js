let userAge = Number(prompt("Введіть ваш вік:"));
let age = userAge % 100;

if (isNaN(userAge)) {
  alert(`У цифрах...`)
}
else {
  if (age >= 5 && age <= 20) {
    alert("Вам " + userAge + " Років");
  }
  else {
    age = age % 10;

    if (age === 1) {
      alert("Вам " + userAge + " Рік");
    }

    if (age >= 2 && age <= 4) {
      alert(`Вам ${userAge} Роки`);
    }
    
    if (age === 0) {
      alert("Вам " + userAge + " Років");
    }
  }
}