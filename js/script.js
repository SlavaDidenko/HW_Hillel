const menu = document.querySelector('.header__menu-wrapper');
const burger = document.querySelector('.header__burger');
const body = document.getElementsByTagName('body')[0].classList;
const header = document.querySelector('.header');
const closeBurger = document.querySelector('.header__close-btn');
const headerHeight = header.offsetHeight;;
const watch = document.querySelector('.main-page__watch-btn');
const popup = document.querySelector('.popup');
const closePopup = document.querySelector('.popup__close-bth');
const scrollUp = document.querySelector('.scroll-up');

document.addEventListener('click', e => {
  if ( !e.target.closest('.popup__window') && popup.className.includes('popup-active') && !e.target.closest('.main-page__watch-btn')) {
    console.log('aa')
    popup.children[0].classList.add('fadeOutDown')
    popup.children[0].classList.remove('fadeInDown')
    popup.classList.add('fadeOutDown')
    popup.classList.remove('fadeInDown')
    document.getElementsByTagName('body')[0].classList.remove('hidden')
    setTimeout(() => {
      popup.classList.remove('popup-active');
      document.getElementById('video').src = '';
    }, 1000);
  }
})

closePopup.onclick = () => {
  popup.children[0].classList.add('fadeOutDown');
  popup.children[0].classList.remove('fadeInDown');
  popup.classList.add('fadeOutDown');
  popup.classList.remove('fadeInDown');
  document.getElementsByTagName('body')[0].classList.remove('hidden')
    setTimeout(() => {
      popup.classList.remove('popup-active');
      document.getElementById('video').src = '';
    }, 1000);
}


watch.onclick = (e) => {
  e.preventDefault();
  popup.classList.add('popup-active')
  document.getElementsByTagName('body')[0].classList.add('hidden')
  document.getElementById('video').src = 'https://www.youtube.com/embed/Y5KCDWi7h9o'
  popup.children[0].classList.remove('fadeOutDown')
  popup.classList.remove('fadeOutDown')
  popup.children[0].classList.add('fadeInDown')
  popup.classList.add('fadeInDown')
}

const heightHeader = header.offsetHeight;
const heigthAbout = document.querySelector('.shop').offsetHeight;
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
  let scrollDistance = window.scrollY;
  if (heightHeader < scrollDistance) {
    header.classList.add('header-fixed')
  } else {
    header.classList.remove('header-fixed')
  }
  lastScrollTop = scrollDistance;

  if (heigthAbout < scrollDistance) {
    scrollUp.classList.add('scroll-up-active');
  } else {
    scrollUp.classList.remove('scroll-up-active');
  }
})

function offMenuBurger() {
  menu.classList.remove('active-menu');
  body.remove('hidden');
  header.classList.remove('back');
}

burger.onclick = () => {
  body.add('hidden');
  menu.classList.add('active-menu');
  header.classList.add('back');
}

closeBurger.onclick = () => {
  offMenuBurger();
}

document.addEventListener('click', (e) => {
  if (!e.target.closest('.active-menu') && menu.className.includes('active-menu') && !e.target.closest('.header__burger')) {
    offMenuBurger();
  }
})

const swiper = new Swiper('.streamer__swiper', {
  slidesPerView: 2,
  spaceBetween: 30,
  speed: 150,
  resistanceRatio: 0.5,
  pagination: {
    el: '.streamer__swiper-pagination',
    type: 'bullets',
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    }
  }
});

const testimonialSwiper = new Swiper('.testimonial__swiper', {
  slidesPerView: 1,
  parallax: true,
  speed: 800,
  resistanceRatio: 0.5,
  spaceBetween : document.querySelector('.testimonial__slide').offsetWidth / 2,
  pagination: {
    el: '.testimonial__swiper-pagination',
    type: 'bullets',
    clickable: true,
    dynamicBullets: true,
  },
  effect: 'coverflow',
  coverflowEffect: {
    rotate: 60,
    slideShadows: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      // slidesPerView: 2,
    }
  }
});

document.querySelector('.scroll-up').addEventListener('click', function (e) {
  e.preventDefault();
  up();
})
let t;
function up() {
	let top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
	if(top > 0) {
		window.scrollBy(0,-100);
		t = setTimeout('up()',20);
	} else clearTimeout(t);
	return false;
}





let myPanel = document.querySelectorAll(".shop__product-img").forEach(function (element) {
  let subpanel = element.firstElementChild;
  paralaxProductImg(element , subpanel);
})


function paralaxProductImg(myPanel ,subpanel ) {
  myPanel.onmousemove = transformPanel;
  myPanel.onmouseenter = handleMouseEnter;
  myPanel.onmouseleave = handleMouseLeave;


  let mouseX, mouseY;

  let transformAmount = 20;

  function transformPanel(mouseEvent) {
      mouseX = mouseEvent.pageX;
      mouseY = mouseEvent.pageY;

      const centerX = myPanel.offsetLeft + myPanel.clientWidth / 2;
      const centerY = myPanel.offsetTop + myPanel.clientHeight / 2;

      const percentX = (mouseX - centerX) / (myPanel.clientWidth / 2);
      const percentY = -((mouseY - centerY) / (myPanel.clientHeight / 2));

      subpanel.style.transform = "perspective(400px) rotateY(" + percentX * transformAmount + "deg) rotateX(" + percentY * transformAmount + "deg)";
  }

  function handleMouseEnter() {
      setTimeout(() => {
          subpanel.style.transition = "";
      }, 100);
      subpanel.style.transition = "transform 0.1s";
  }

  function handleMouseLeave() {
      subpanel.style.transition = "transform 0.1s";
      setTimeout(() => {
          subpanel.style.transition = "";
      }, 100);

      subpanel.style.transform = "perspective(400px) rotateY(0deg) rotateX(0deg)";
  }
}



document.addEventListener("mousemove", parallax);
function parallax(event) {
  this.querySelectorAll(".paralax__item").forEach((shift) => {
    const position = shift.getAttribute("value");
    const x = (window.innerWidth - event.pageX * position) / 90;
    const y = (window.innerHeight - event.pageY * position) / 90;

    shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}


