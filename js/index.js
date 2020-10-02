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
  navbarMenu = document.querySelector('.navbar-menu'),
  modalButton = document.querySelector('[data-toggle=modal]'),
  modalOverlay = document.querySelector('.modal-overlay'),
  modalDialog = document.querySelector('.modal-dialog'),
  closeModalButton = document.querySelector('.modal__close');


const openModal = () => {
  modalOverlay.classList.add('modal-overlay_visible');
  modalDialog.classList.add('modal-dialog_visible');
};

const closeModal = () => {
  modalOverlay.classList.remove('modal-overlay_visible');
  modalDialog.classList.remove('modal-dialog_visible');
}

const closeEsc = ({ code }) => {
  if (code === 'Escape') {
    closeModal();
    document.removeEventListener('keydown', closeEsc);
  }
};

modalButton.addEventListener('click', () => {
  openModal();
  document.addEventListener('keydown', closeEsc)
});

closeModalButton.addEventListener('click', () => {
  closeModal();
  document.removeEventListener('keydown', closeEsc);
});

menuButton.addEventListener('click', () => {
  navbarMenu.classList.toggle('navbar-menu_active');
});