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