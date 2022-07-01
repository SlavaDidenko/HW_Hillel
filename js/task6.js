const maleNames = {
  'A': ['Аристарх','Адам','Августин','Артем'],
  'B': ['Валентин','Володимир','Василь','Вячеслав'],
}
const femaleNames = {
  'A': ['Анастасія','Аліна','Альона','Ангеліна'],
  'B': ['Валентина','Вероніка','Владислава','Вікторія'],
}
const maleSurnames = {
  'A': ['Агапов','Агафонов','Антипов'],
  'B': ['Васнецов','Воронін','Вільямсон'],
}
const femaleSurnames = {
  'A': ['Агапова','Агафонова','Антипова'],
  'B': [,'Васнецова','Вороніна','Вільямсон'],
}

function randomNameSurname (userName, userSurname, gender) {
if (userName === '' || userSurname === '' || userName.length != 1 ) { // як цю перевірку правильно зробити?...
  alert(`Спробуй ще раз`);
} else {
  if (gender === 'male' || gender === 'female') {
  if (gender === 'male') {
    const lengthMaleNames = maleNames[userName].length;
    const lengthMaleSurnames = maleSurnames[userSurname].length;
    const resoultName = Math.floor(Math.random() * lengthMaleNames);
    const resoultSurname = Math.floor(Math.random() * lengthMaleSurnames);
    alert(maleNames[userName][resoultName] + ' ' + maleSurnames[userSurname][resoultSurname]);
  } else {
      const lengthFamaleNames = femaleNames[userName].length;
    const lengthMaleSurnames = femaleSurnames[userSurname].length;
    const resoultName = Math.floor(Math.random() * lengthFamaleNames);
    const resoultSurname = Math.floor(Math.random() * lengthMaleSurnames);
    alert(femaleNames[userName][resoultName] + ' ' + femaleSurnames[userSurname][resoultSurname]);
  }
} else {
    alert(`male or female !!!!`);
    }
  }
}

const userName = prompt(`Ввдедіть першу букву імені`);
const userSurname = prompt(`Ввдедіть першу букву фамілії`);
const gender = prompt(`Ввдедіть male or female`);
randomNameSurname(userName, userSurname, gender);