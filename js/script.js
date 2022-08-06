const inputFlat = document.getElementById('inputFlat');
const inputHouse = document.getElementById('inputHouse');
const inputStreet = document.getElementById('inputStreet');
const checkboxFloor = document.getElementById('checkboxFloor');
const raiseFloor = document.querySelectorAll('.raise-floor');

raiseFloor.forEach(el => {
  el.addEventListener('input', function () {
    if (inputStreet.value != '' && !inputStreet.classList.contains('eror-blur') && inputHouse.value != '' && !inputHouse.classList.contains('eror-blur') && inputFloor.value != '' && !inputFloor.classList.contains('eror-blur')) {
      setTimeout(() => { checkboxFloor.disabled = false }, 500)
    } else {
      setTimeout(() => {checkboxFloor.disabled = true}, 500)
    }
  })
});


/////////////////////////////////////////////////////

const inputRadio = document.querySelectorAll('.input-radio');
console.log(inputRadio)
inputRadio.forEach(input => {
  input.addEventListener('change', function () {
    if (this.checked) {
      document.querySelectorAll('.checkout-variant__inner')[0]?.classList.remove('checkout-variant__inner');
      document.querySelectorAll('.checkout-variant__content__active')[0]?.classList.remove('checkout-variant__content__active');
      this.parentNode.parentNode.classList.add('checkout-variant__inner')
      this.parentNode.lastElementChild.classList.add('checkout-variant__content__active')

      const priceProduct = document.getElementById('price-product').textContent;
      let priceDelivery = document.getElementById('price-delivery');
      console.log(this.nextElementSibling.querySelector('.delivery-price').textContent)
      priceDelivery.textContent = this.nextElementSibling.querySelector('.delivery-price').textContent;
      document.getElementById('final-price').textContent = Number(priceProduct.replace(/[^\d]/g, "")) + Number(priceDelivery.textContent.replace(/[^\d]/g, ""));
      console.log( Number('dsfsfsdf'))
      document.getElementById('final-price').textContent = prettify(document.getElementById('final-price').textContent)
    }
  })
})

function prettify(num) {
  let n = num.toString();
  return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ');
}

const inputRadio2 = document.querySelectorAll('.input-radio2');
inputRadio2.forEach(input => {
  input.addEventListener('change', function () {
    if (this.checked) {
      document.querySelectorAll('.checkout-variant__inner')[1]?.classList.remove('checkout-variant__inner');
      document.querySelectorAll('.checkout-variant__content__active')[1]?.classList.remove('checkout-variant__content__active');
      if (this.id === 'paymentRadio2') this.parentNode.parentNode.classList.add('checkout-variant__inner');
      this.parentNode.lastElementChild.classList.add('checkout-variant__content__active')

      
    }
  })
})

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const surname = document.getElementsByName('surname');
const name = document.getElementsByName('name');
const middleName = document.getElementsByName('middleName');

function checkCirillicInput() {
  const cirillicPattern = /^[а-яА-Яії]+$/;
  if (!cirillicPattern.test(this.value)) {
    this.nextElementSibling.classList.remove('invisible');
    this.classList.add('eror-blur');
  } else {
    this.nextElementSibling.classList.add('invisible');
    this.classList.remove('eror-blur');
  }
};


surname.forEach(element => {
  element.oninput = checkCirillicInput;
  element.onblur = checkBlurEror;
});
name.forEach(element => {
  element.oninput = checkCirillicInput;
  element.onblur = checkBlurEror;
});
middleName.forEach(element => {
  element.oninput = function () {
      const cirillicPattern = /^[а-яА-Яії]+$/;
    if (!cirillicPattern.test(this.value)) {
      this.nextElementSibling.classList.remove('invisible');
      this.classList.add('eror-blur');
    } else {
      this.nextElementSibling.classList.add('invisible');
      this.classList.remove('eror-blur');
    }
    if ( this.value == '') {
      this.classList.remove('eror-blur');
      this.nextElementSibling.classList.add('invisible');
    }
  };
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const numberCard = document.getElementById('numberCard')
numberCard.oninput = checkCard;

function checkCard() {
  if (this.value == '') {
    this.style.borderColor = '#d2d2d2';
  } else {
    this.style.borderColor = '#ff4500';
  }
  this.value = this.value.replace(/[^\d ]/g, "");
  if (this.value.length > 18) {
    this.value = this.value.slice(0, 19);
    this.style.borderColor = '#d2d2d2';
  }
}
const dynamicMask4 = IMask(
  numberCard,
  {
      mask: [
          {
              mask: '0000 0000 0000 0000'
          },
          {
              mask: /^\S*@?\S*$/
          }
      ]
  });

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const validityPeriod = document.getElementById('validityPeriod');
  const validityPeriod2 = document.getElementById('validityPeriod2');
  const cvv = document.getElementById('cvv');
  
  validityPeriod.oninput = checkValidity;
  validityPeriod2.oninput = checkValidity2;
  cvv.oninput = checkCVV;
function checkValidity() {
    this.value = this.value.replace(/[^\d ]/g, "");
  
    if (this.value.length > 1) {
      this.value = this.value.slice(0, 2);
      validityPeriod2.focus();
    }
  }
  
function checkCVV() {
  if (this.value == '') {
    this.style.borderColor = '#d2d2d2';
  } else {
    this.style.borderColor = '#ff4500';
  }
  this.value = this.value.replace(/[^\d ]/g, "");
  if (this.value.length > 2) {
    this.value = this.value.slice(0, 3);
    this.style.borderColor = '#d2d2d2';
  }
  }
  
  
  function checkValidity2() {
    this.value = this.value.replace(/[^\d ]/g, "");
  
    if (this.value.length > 1) {
      this.value = this.value.slice(0, 2);
      cvv.focus();
    }
  }
  
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const tell = document.getElementsByName('tell');

function checkNumbers() {
  let a = this.value.slice(4);
  this.nextElementSibling.classList.remove("invisible");
  a = a.replace(/[^\d ]/g, "");
  if (a.length > 12) {
    a = a.slice(0, 13);
    this.nextElementSibling.classList.add("invisible");
    this.classList.remove("eror-blur");
  }
  this.value = "+38 " + a;

}

tell.forEach(element => {
  element.value = "+38 ";
  element.oninput = checkNumbers;
  element.onblur = checkBlurEror;
});

const dynamicMask = IMask(
  tell[0],
  {
      mask: [
          {
              mask: '+38 000 000 00 00'
          },
          {
              mask: /^\S*@?\S*$/
          }
      ]
    });
const dynamicMask2 = IMask(
  tell[1],
  {
      mask: [
          {
              mask: '+38 000 000 00 00'
          },
          {
              mask: /^\S*@?\S*$/
          }
      ]
  });
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const ngValid = document.getElementById('ng-valid');
const legalEntity = document.getElementById('legal-entity');
legalEntity.oninput = () => {
  if ( legalEntity.value == '' ) {
    legalEntity.nextElementSibling.classList.remove("invisible");
    legalEntity.classList.add('eror-blur');
  } else {
    legalEntity.nextElementSibling.classList.add("invisible");
    legalEntity.classList.remove('eror-blur');
  }
}
ngValid.oninput = checkCode;
function checkCode() {
  this.classList.add('eror-blur');
  this.nextElementSibling.classList.remove("invisible");

  if (this.value.length == 8 &&  this.value == this.value.replace(/[^\d ]/g, "")) {
    this.classList.remove('eror-blur');
  this.nextElementSibling.classList.add("invisible");
  }
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const  inputStreet2 = document.getElementById('inputStreet2');
const inputHouse2 = document.getElementById('inputHouse2');


function checkBlurEror() {
  if (this.value === '' || this.value === '+38 ') {
    this.classList.add('eror-blur');
  }
}

inputStreet2.onblur = checkBlurEror;
inputHouse2.onblur = checkBlurEror;
inputStreet.onblur = checkBlurEror;
inputHouse.onblur = checkBlurEror;
ngValid.onblur = checkBlurEror;
legalEntity.onblur = checkBlurEror;
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const email = document.getElementsByName('email');


function checkEmail() {
  const regCheck = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (this.value === '' || regCheck.test(this.value)) {
    this.nextElementSibling.classList.add('invisible');
  } else {
    this.nextElementSibling.classList.remove('invisible');
  }
}

email.forEach(element => {
  element.oninput = checkEmail;
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const  inputStreet2 = document.getElementById('inputStreet2');. ///

function checkStreet() {
  if (!/^[а-яА-Яії0-9 ]+$/.test(this.value)) {
    this.classList.add('eror-blur');
  } else {
    this.classList.remove('eror-blur');
  }
}  

inputStreet2.oninput = checkStreet;
inputStreet.oninput = checkStreet;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const  inputHouse2 = document.getElementById('inputHouse2');///

function checkHouse () {
  if (!/^[0-9 ]+$/.test(this.value)) {
    this.classList.add('eror-blur');
  } else {
    this.classList.remove('eror-blur');
  }
}

inputHouse2.oninput = checkHouse;
inputHouse.oninput = checkHouse;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const inputFlat2 = document.getElementById('inputFlat2');

function checkFlat() {
  if (!/^[а-яА-Яії0-9 ]+$/.test(this.value) || this.value.length > 5 ) {
    this.classList.add('eror-blur');
  } else {
    this.classList.remove('eror-blur');
  }
  if ( this.value == '') {
    this.classList.remove('eror-blur');
  }
}
inputFlat.oninput = checkFlat;
inputFlat2.oninput = checkFlat;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const inputFloor = document.getElementById('inputFloor');
function checkFloor() {
  if (!/^[0-9]+$/.test(this.value) || this.value.length > 2 ) {
    this.classList.add('eror-blur');
  } else {
    this.classList.remove('eror-blur');
  }
  if ( this.value == '') {
    this.classList.remove('eror-blur');
  }
}

inputFloor.oninput = checkFloor;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const allAddresses = document.querySelectorAll('.select__item');
const allAddresses2 = document.querySelectorAll('.select__item2');
const inputAddress = document.getElementsByName('inputSearch');
const addressesWrapper = document.querySelectorAll('.select__list');
const selectBtn = document.querySelectorAll('.select__btn');



function closeOpen (event) {
  event.preventDefault()
  const wrapper = this.nextElementSibling;
  console.log(wrapper)
  wrapper.classList.toggle('select__wrapper--active');
  wrapper.querySelector('input')?.focus();
};

selectBtn.forEach(element => {
  element.onclick = closeOpen;
});


inputAddress[0].addEventListener('input', function () {
  checkAddresses(allAddresses ,inputAddress[0]);
});
inputAddress[1].addEventListener('input', function () {
  checkAddresses(allAddresses2 ,inputAddress[1]);
});

function checkAddresses(allAddresses , inputAddress) {
  allAddresses.forEach(address => {
    if (!address.firstElementChild.textContent.toLowerCase().includes(inputAddress.value.toLowerCase())) {
      address.classList.add('none');
    } else {
      address.classList.remove('none');
    }
  })
}

addressesWrapper[0].addEventListener('click', function (event) {
  const address = event.target.closest('.select__item');
  if (address) {
    chooseAddress(address , selectBtn[0]);
  }
});

addressesWrapper[1].addEventListener('click', function (event) {
  const address = event.target.closest('.select__item2');
  if (address) {
    chooseAddress(address ,selectBtn[1]);
  }
});

addressesWrapper[2].addEventListener('click', function (event) {
  const address = event.target.closest('.select__item3');
  if (address) {
    chooseAddress(address ,selectBtn[2]);
  }
});

function chooseAddress(address ,selectBtn) {
  selectBtn.textContent = address.firstElementChild.textContent;
  selectBtn.nextElementSibling.classList.remove('select__wrapper--active');
};

document.addEventListener('click', function (event) {
  if (!event.target.closest('.select')) {
    selectBtn.forEach(el => el.nextElementSibling.classList.remove('select__wrapper--active'));
  }
})

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const certificate = document.querySelector('.certificate')
const inputCertificate = document.getElementById('certificate');

certificate.onclick = () => {
  certificate.nextElementSibling.classList.toggle('checkout-certificate__active');
  document.querySelector('.certificate-add').classList.toggle('certificate-add-active');
  document.querySelector('.certificate-сancel').classList.toggle('certificate-add-active');
}

inputCertificate.oninput = function () {
  const certificateBtn = document.querySelector('.checkout-certificate__btn')
  this.value = this.value.replace(/[^\d ]/g, "");
  certificateBtn.disabled = true;
  if (this.value.length > 15) {
    this.value = this.value.slice(0, 16);
    certificateBtn.disabled = false;
  }
}

const dynamicMask3 = IMask(
  inputCertificate,
  {
      mask: [
          {
              mask: '0000-0000-0000-0000'
          },
          {
              mask: /^\S*@?\S*$/
          }
      ]
  });
///////поки так, потім дороблю

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const promo = document.querySelector('.promo-add');
const inputPromo = document.getElementById('promo');
promo.onclick = () => {
  promo.parentElement.nextElementSibling.classList.toggle('checkout-promo__active');
}

  
function checkCirillicPromo() {
  if (!/^[a-zA-z0-9]+$/.test(this.value)) {
    this.classList.add('eror-blur');
  } else {
    this.classList.remove('eror-blur');
  }
};

inputPromo.oninput = checkCirillicPromo;
inputPromo.onblur = checkBlurEror;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const rozetka = document.getElementById('rozetka')

rozetka.addEventListener('submit', function (e) {
  e.preventDefault();
  
  const mainformData = { // збираємо обов'язкові дані з інпутів(ті що зовні)
    Прізвище : surname[0],
    Імя : name[0],
    'Мобільний телефон' : tell[0],
    'Прізвище отримувача': surname[1],
    'Імя отримувача' : name[1],
    'Мобільний телефон отримувача': tell[1],
  }

  const secondaryData = { // збираємо не обов'язкові дані з інпутів(ті що зовні)
    'Електронна пошта': email[0],
    'По батькові отримувача': middleName[0],
  }
  console.log(inputPromo.value)

  let formDelivery  = {} // сюди будемо збирати обов'язкові дані з інпутів (ті що в радіокнопках)
  let secondaryFormDelivery = {} // сюди будемо збирати не обов'язкові дані з інпутів (ті що в радіокнопках)

  document.getElementsByName('nameRadio').forEach(element => {
    getDeliveryData(element);// збираємо дані ті що в радіокнопках, обов'язкові в formDelivery, необов'язкові в secondaryFormDelivery
  });

  inputRadio2.forEach(element => {
    getPaymentData(element)
  });

  function getPaymentData (element) {
    if (element.checked) {
      formDelivery['Оплата'] = element.nextElementSibling.textContent;
    }
  }

  function getDeliveryData (element) { 
    if (element.checked) {
      switch (element.id) { // шукаємо по айдішніку ту радіокнопку на яку ми жмакнули,
                          // і в залежності від того, на яку ми кнопку жмакнули, запишуться дані в наші об'єкти formDelivery / secondaryFormDelivery
        case 'inputRadio':
          formDelivery['Самовивіз з наших магазинів'] = (selectBtn[0].innerHTML != 'виберіть відповідне відділення') ? selectBtn[0].innerHTML : '';
          document.getElementsByName('inputRadioDay2').forEach(element => {
            if (element.checked) {
              formDelivery['Час доставки кур’єром'] = `${element.parentElement.parentElement.firstElementChild.innerHTML} - ${element.nextElementSibling.innerHTML}`;
              }
          });
          break;
        
        case 'inputRadio2':
          formDelivery['Вулиця'] = inputStreet;
          formDelivery['Будинок'] = inputHouse;
          secondaryFormDelivery['Квартира'] = inputFlat;
          secondaryFormDelivery['Поверх'] = inputFloor;
          secondaryFormDelivery['Ліфт'] = document.querySelector('#selectElevator');

          if (checkboxFloor.checked) secondaryFormDelivery['Підняти на поверх'] = checkboxFloor;

          document.getElementsByName('inputRadioDay').forEach(element => {
            if (element.checked) {
              formDelivery['Час доставки кур’єром'] = `${element.parentElement.parentElement.firstElementChild.innerHTML} - ${element.nextElementSibling.innerHTML}`;
            }
          });
          break;
        
        case 'inputRadio3':
          formDelivery['Самовивіз з Нової Пошти'] = selectBtn[1].innerHTML;
          break;
        
        case 'inputRadio4':
          formDelivery['Вулиця'] = inputStreet2;
          formDelivery['Будинок'] = inputHouse2;
          secondaryFormDelivery['Квартира'] = inputFlat2;
          break;
      
      }  
    }
  }

  

  let a = 0; ///////////////

  function errorСhecking( ojectWithData , iterator) {
    if ( ojectWithData[iterator].classList?.contains('eror-blur') || ojectWithData[iterator].classList?.contains('invisible') ) {
      a += 1;
    }
  }

  function emptyCheck(ojectWithData , iterator ) {
    if (ojectWithData[iterator] ==  '' || ojectWithData[iterator].value == '' || ojectWithData[iterator].value == '+38 ') {
      a += 1;
      ojectWithData[iterator].classList?.add('eror-blur');
    }
  }

  function deleteEmptyData(ojectWithData , iterator ) {
    if ( ojectWithData[iterator].value == ''){
      delete ojectWithData[iterator];
    }
  }

// можемо тут об'єднати дані
  

  for (const iterator in mainformData) {
    errorСhecking(mainformData, iterator);  
    emptyCheck(mainformData, iterator);
  }
  
  for (const iterator in formDelivery) {
    errorСhecking(formDelivery , iterator);
    emptyCheck(formDelivery, iterator);
  }

  for (const iterator in secondaryData) {
    errorСhecking(secondaryData, iterator);
    deleteEmptyData(secondaryData, iterator);
  }

  for (const iterator in secondaryFormDelivery) {
    errorСhecking(secondaryFormDelivery, iterator);
    deleteEmptyData(secondaryFormDelivery, iterator);
  }


  if (a != 0) {  ////////////////// Якщо якась перевірка вище спрацювала, то до а добавлялась 1,
    //  і тут ми робимо return, щоб перервати роботу функції
    return;
  }

  document.querySelector('.popup__window').innerHTML = ''

  function addingData(ojectWithData, iterator) {
    let p = document.createElement('p');

    if (typeof ojectWithData[iterator] === 'string') {  // в мене дані по різному приходять,
                                                       //тому потрібно зробити перевірку
      p.innerHTML = `${iterator} : ${ojectWithData[iterator]}`;
    } else {
      p.innerHTML = `${iterator} : ${ojectWithData[iterator].value}`;
    }

    document.querySelector('.popup__window').append(p);
  }

  for (const iterator in mainformData) {
    addingData(mainformData, iterator)
  }

  for (const iterator in formDelivery) {
    addingData(formDelivery, iterator)
  }
  
  for (const iterator in secondaryData) {
    addingData(secondaryData, iterator)
  }
  for (const iterator in secondaryFormDelivery) {
    addingData(secondaryFormDelivery, iterator)
}

popup.classList.add('popup-active')
})



//////////////


const popup = document.querySelector('.popup');
const closePopup = document.querySelector('.popup__close-bth');

document.addEventListener('click', e => {
  if ( !e.target.closest('.popup__window') && popup.className.includes('popup-active')) {
    popup.classList.remove('popup-active')
  }
})

closePopup.onclick = () => {
  popup.classList.remove('popup-active');
}