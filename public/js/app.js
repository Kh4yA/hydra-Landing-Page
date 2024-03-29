let burger = document.getElementById('burger')
let openBurger = document.getElementById('openBurger')
const swiper1 = new Swiper('.swiper1', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: `1`,
    spaceBetween: 50,
    breakpoints: {
        579:{
            slidesPerView: 3,
            spaceBetween: 10,

        }
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
  });


const swiper2 = new Swiper('.swiper2', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: `1`,

    breakpoints: {
        579:{
            slidesPerView: 4,
            spaceBetween:20
        }
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
  });
const swiperTechnologie = new Swiper('.swiper-technologie', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: `1`,
    breakpoints: {
        579:{
            slidesPerView: 4,
        }
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
  });
const swiperNumber = new Swiper('.swiper-number', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: `1`,

    breakpoints: {
        579:{
            slidesPerView: 4,
        }
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
  });
openBurger.addEventListener('click', ()=>{
    console.log('tap');
    burger.classList.toggle('open')
})