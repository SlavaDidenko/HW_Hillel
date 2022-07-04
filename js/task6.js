const maleNames = {
  'А': ['Аристарх','Адам','Августин','Артем'],
  'В': ['Валентин','Володимир','Василь','Вячеслав'],
}
const femaleNames = {
  'А': ['Анастасія','Аліна','Альона','Ангеліна'],
  'В': ['Валентина','Вероніка','Владислава','Вікторія'],
}
const maleSurnames = {
  'А': ['Агапов','Агафонов','Антипов'],
  'В': ['Васнецов','Воронін','Вільямсон'],
}
const femaleSurnames = {
  'А': ['Агапова','Агафонова','Антипова'],
  'В': ['Васнецова','Вороніна','Вільямсон'],
}

function generationNameSurname(name, surname) {
  const lengthNames = name[userName].length;
    const lengthSurnames = surname[userSurname].length;
    const resoultName = Math.floor(Math.random() * lengthNames);
    const resoultSurname = Math.floor(Math.random() * lengthSurnames);
    alert(name[userName][resoultName] + ' ' + surname[userSurname][resoultSurname]);
}


function randomNameSurname(userName, userSurname, gender) {
  if (userName !== 'А' && userName !== 'В' || userSurname !== 'А' && userSurname !== 'В') { 
  alert(`Спробуй ще раз`);
} else {
  if (gender === 'male' || gender === 'female') {
  if (gender === 'male') {
    generationNameSurname(maleNames, maleSurnames);
  } else {
    generationNameSurname(femaleNames, femaleSurnames);
  }
} else {
    alert(`male or female !!!!`);
    }
  }
}

const userName = prompt(`Ввдедіть першу букву імені (A or B) `).toUpperCase();
const userSurname = prompt(`Ввдедіть першу букву фамілії (A or B) `).toUpperCase();
const gender = prompt(`Ввдедіть male or female`);
randomNameSurname(userName, userSurname, gender);