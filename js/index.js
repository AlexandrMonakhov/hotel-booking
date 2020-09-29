let gallery = new Swiper('.gallery', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  keyboard: {
    enabled: true,
  },
  navigation: {
    nextEl: '.slider-button__next',
    prevEl: '.slider-button__prev',
  },
});

let reviews = new Swiper('.reviews-slider', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  keyboard: {
    enabled: true,
  },
  navigation: {
    nextEl: '.reviews-slider__button_next',
    prevEl: '.reviews-slider__button_prev',
  },
});

const menuButton = document.querySelector('.menu-button'),
  navbarMenu = document.querySelector('.navbar-menu');

menuButton.addEventListener('click', () => {
  navbarMenu.classList.toggle('navbar-menu_active');
});