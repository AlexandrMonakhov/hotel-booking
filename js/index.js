$(document).ready(function () {
  const gallery = new Swiper('.gallery', {
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

  const reviews = new Swiper('.reviews-slider', {
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

  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      rules: {
        name: {
          required: true,
          minlength: 2
        },
        phone: {
          required: true,
          minlength: 12
        }
      },
      messages: {
        name: {
          required: "Please specify your name",
          minlength: "The name must be at least 2 characters long"
        },
        email: {
          required: "Enter your email address",
          email: "Your email address must be in the format of name@domain.com"
        },
        phone: {
          required: "Enter your phone number",
          minlength: "The phone number must be at least 4 characters long"
        }
      }
    });
  });

  AOS.init();

  $('.phone-input').each(function () {
    $(this).mask('+7 (000) 000-0000');
  });

});

