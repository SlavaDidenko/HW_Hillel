const cirillicPattern = /^[а-яА-Яії]+$/;

const tell = document.getElementsByName('tell');
const surname = document.getElementsByName('surname');
const name = document.getElementsByName('name');
const email = document.getElementsByName('email');
const cirillicErr = document.getElementsByClassName('cirilic-error')
const inputRadio = document.querySelectorAll('.input-radio');
const checkboxFloor = document.getElementById('checkboxFloor');
const inputStreet = document.getElementById('inputStreet');
const inputHouse = document.getElementById('inputHouse');
const inputFlat = document.getElementById('inputFlat');
const inputFloor = document.getElementById('inputFloor');
const raiseFloor = document.querySelectorAll('.raise-floor');


///тут треба переробити!!!!!!!!!!!!!!!!!!!!
raiseFloor.forEach(el => {
  el.addEventListener('input', function () {
    console.log(inputStreet.value != '');
    console.log(!inputStreet.classList.contains('eror-blur'))
    if (inputStreet.value != '' && !inputStreet.classList.contains('eror-blur') && inputHouse.value != '' && !inputHouse.classList.contains('eror-blur') && inputFloor.value != '' && !inputFloor.classList.contains('eror-blur')) {
      console.log('1')
      setTimeout(() => { checkboxFloor.disabled = false }, 500)
    } else {
      console.log('2')
      setTimeout(() => {checkboxFloor.disabled = true}, 500)
    }
  })
});


/////////////////////////////////////////////////////

inputRadio.forEach(input => {
  input.addEventListener('change', function () {
    if (this.checked) {
      document.querySelector('.checkout-variant__inner')?.classList.remove('checkout-variant__inner');
      document.querySelector('.checkout-variant__content__active')?.classList.remove('checkout-variant__content__active');
      this.parentNode.parentNode.classList.add('checkout-variant__inner')
      this.parentNode.lastElementChild.classList.add('checkout-variant__content__active')

      // let priceDelivery = document.getElementById('price-delivery').textContent;
      // let сhoiceDelivery = this.nextElementSibling.firstElementChild.lastElementChild.lastElementChild.textContent;
      // let total = document.getElementById('final-price').textContent;
      const priceProduct = document.getElementById('price-product').textContent;
      document.getElementById('price-delivery').textContent = this.nextElementSibling.querySelector('.delivery-price').textContent;
      document.getElementById('final-price').textContent = Number(priceProduct.replace(/[^\d]/g, "")) + Number(document.getElementById('price-delivery').textContent.replace(/[^\d]/g, "")) ;
      // console.log(total)
    }
  })
})

/////////////////////////////////////////////

function checkCirillicInput () {
  if (!cirillicPattern.test(this.value)) {
    this.nextElementSibling.classList.remove('invisible');
    this.classList.add('eror-blur');
  } else {
    this.nextElementSibling.classList.add('invisible');
    this.classList.remove('eror-blur');
  }
};

function checkNumbers() {
  let a = this.value.slice(4);
  this.nextElementSibling.classList.remove("invisible");
  a = a.replace(/[^\d ]/g, "");
  if (a.length > 13) {
    a = a.slice(0, 13);
    this.nextElementSibling.classList.add("invisible");
    this.classList.remove("eror-blur");
  }
  this.value = "+38 " + a;

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
}





function checkBlurEror() {
  if (this.value === '' || this.value === '+38 ') {
    this.classList.add('eror-blur');
  }
}

function checkEmail() {
  const regCheck = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (this.value === '' || regCheck.test(this.value)) {
    this.nextElementSibling.classList.add('invisible');
  } else {
    this.nextElementSibling.classList.remove('invisible');
  }
}


const  inputStreet2 = document.getElementById('inputStreet2');
const  inputHouse2 = document.getElementById('inputHouse2');
const inputFlat2 = document.getElementById('inputFlat2');

inputStreet2.onblur = checkBlurEror;
inputStreet2.oninput = checkStreet;
inputHouse2.onblur = checkBlurEror;
inputHouse2.oninput = checkHouse;
inputFlat2.oninput = checkFlat;


function checkStreet() {
  if (!/^[а-яА-Яії0-9 ]+$/.test(this.value)) {
    this.classList.add('eror-blur');
  } else {
    this.classList.remove('eror-blur');
  }
}  

function checkHouse () {
  if (!/^[0-9 ]+$/.test(this.value)) {
    this.classList.add('eror-blur');
  } else {
    this.classList.remove('eror-blur');
  }
}

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



tell.forEach(element => {
  element.value = "+38 ";
  element.oninput = checkNumbers;
  element.onblur = checkBlurEror;
});
surname.forEach(element => {
  element.oninput = checkCirillicInput;
  element.onblur = checkBlurEror;
});
name.forEach(element => {
  element.oninput = checkCirillicInput;
  element.onblur = checkBlurEror;
});
email.forEach(element => {
  element.oninput = checkEmail;
});

inputStreet.onblur = checkBlurEror;
inputStreet.oninput = checkStreet;
inputHouse.onblur = checkBlurEror;
inputHouse.oninput = checkHouse;
inputFlat.oninput = checkFlat;
inputFloor.oninput = checkFloor;

////////
const allAddresses = document.querySelectorAll('.select__item');
const allAddresses2 = document.querySelectorAll('.select__item2');
const inputAddress = document.getElementsByName('inputSearch');
const addressesWrapper = document.querySelectorAll('.select__list');
const selectBtn = document.querySelectorAll('.select__btn');

console.log(allAddresses.length)
selectBtn.forEach(element => {
  element.onclick = closeOpen;
});

function closeOpen (event) {
  event.preventDefault()
  const wrapper = this.nextElementSibling;
  wrapper.classList.toggle('select__wrapper--active');
  wrapper.querySelector('input').focus();
};

inputAddress[0].addEventListener('input', function () {
  checkAddresses(allAddresses ,inputAddress[0]);
  console.log('aaaaaa')
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

function chooseAddress(address ,selectBtn) {
  selectBtn.textContent = address.firstElementChild.textContent;
  selectBtn.nextElementSibling.classList.remove('select__wrapper--active');
};

document.addEventListener('click', function (event) {
  if (!event.target.closest('.select')) {
    selectBtn.forEach(el => el.nextElementSibling.classList.remove('select__wrapper--active'));
  }
})

  //

  




////////////////////////
const promo = document.querySelector('.promo-add');
const inputPromo = document.getElementById('promo');
promo.onclick = () => {
  promo.parentElement.nextElementSibling.classList.toggle('checkout-promo__active');
}

inputPromo.oninput = checkCirillicPromo;
inputPromo.onblur = checkBlurEror;

function checkCirillicPromo() {
  console.log('ddd')
  if (!/^[a-zA-z0-9]+$/.test(this.value)) {
    this.classList.add('eror-blur');
  } else {
    this.classList.remove('eror-blur');
  }
};



//////////////////////////////
// const deliveryBtn = document.querySelector('.delivery-btn')
// deliveryBtn.addEventListener('click', (e) => {
//   e.preventDefault()
// })


const rozetka = document.getElementById('rozetka')

rozetka.addEventListener('submit', function (e) {
  e.preventDefault();
  
  // const formData = Object.fromEntries(new FormData(e.target).entries());
  // console.log(formData)

  let mandatoryData = {
    Прізвище : surname[0],
    Імя : name[0],
    'Мобільний телефон' : tell[0],
    // 'Електронна пошта': email[0],
    'Прізвище отримувача': surname[1],
    'Імя отримувача' : name[1],
    'Мобільний телефон отримувача': tell[1],
  }

  
//optional data
  const formData = {
    Прізвище : surname[0],
    Імя : name[0],
    'Мобільний телефон' : tell[0],
    // 'Електронна пошта': email[0],
    'Прізвище отримувача': surname[1],
    'Імя отримувача' : name[1],
    'Мобільний телефон отримувача': tell[1],
    // 'Електронна пошта отримувача': email[1],
    
    // nameRadio,
    // inputSearch,
    // street,
    // house,
    // flat,
    // floor,
    // elevator,
    // checkboxFloor,
    // inputRadioDay,
    // paymentRadio,
    // variantCard,
    // promo,
  }

  let formDelivery = {

  }

  document.getElementsByName('nameRadio').forEach(element => {
    if (element.checked) {
      console.log(element.id)
      switch (element.id) {
        case 'inputRadio':
          formDelivery['Самовивіз з наших магазинів'] = selectBtn[0].innerHTML;
          break;
        
        case 'inputRadio2':
          formDelivery['Вулиця'] = inputStreet.value;

          formDelivery['Будинок'] = inputHouse.value;

          formDelivery['Квартира'] = inputFlat.value;

          formDelivery['Поверх'] = inputFloor.value;

          formDelivery['Ліфт'] = document.querySelector('#selectElevator').value;

          if (checkboxFloor.checked) formDelivery['Підняти на поверх'] = 'Так'
          document.getElementsByName('inputRadioDay').forEach(element => {
            if (element.checked) {
              console.log(element.id)
              switch (element.id) {
                case 'inputRadioDay':
                  formDelivery['Час доставки кур’єром'] = 'завтра 11:00-21:00';
                  break;
                
                case 'inputRadioDay2':
                  formDelivery['Час доставки кур’єром'] = '30 липня 11:00-21:00';
                  break;
                case 'inputRadioDay3':
                  formDelivery['Час доставки кур’єром'] = '31 липня 11:00-21:00';
                    break;
                  
                case 'inputRadioDay4':
                  formDelivery['Час доставки кур’єром'] = '1 серпня 11:00-19:00';
                    break;
                  
                case 'inputRadioDay5':
                  formDelivery['Час доставки кур’єром'] = '2 серпня 11:00-21:00';
                  break;
                }
            }
          });
          break;
        
        case 'inputRadio3':
          formDelivery['Самовивіз з Нової Пошти'] = selectBtn[1].innerHTML;
          break;
        
        case 'inputRadio4':
          formDelivery['Вулиця'] = inputStreet2.value;
          formDelivery['Будинок'] = inputHouse2.value;
          formDelivery['Квартира'] = inputFlat2.value;
          break;
      
      }  
    }
    
  });

  console.log(formDelivery);
  

  // let a = 0
  // for (const iterator in formData) {
  //   if ( formData[iterator].classList.contains('eror-blur') || formData[iterator].classList.contains('invisible') ) {
  //     a += 1;
  //   }
  //   if (formData[iterator].value == '' || formData[iterator].value == '+38 ') {
  //     a += 1;
  //     formData[iterator].classList.add('eror-blur');
  //   }
    
  // }
  // if ( a != 0) {
  //   return;
  // }



popup.classList.add('popup-active')
  document.querySelector('.popup__window').innerHTML = ''
  for (const iterator in formData) {
      let div = document.createElement('div');
      div.innerHTML = `<p>${iterator} : ${formData[iterator].value}</p>`;
      document.querySelector('.popup__window').append(div);
  }

  for (const iterator in formDelivery) {
    let div = document.createElement('div');
    div.innerHTML = `<p>${iterator} : ${formDelivery[iterator]}</p>`;
    document.querySelector('.popup__window').append(div);
}

  // document.getElementsByName('nameRadio').forEach(element => {
    // if (element.checked) {
    //   console.dir(element)
    //   console.dir(element.elements)
    // }
  // });

  // for (const element of this.elements) {
  //   if (!element.classList.contains('eror-blur') &&  element.value != '' && element.value != undefined) {
  //     console.dir(element.value)
  //     console.log(element)
  //   } 
  // }
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






