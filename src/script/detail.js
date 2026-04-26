document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.detail__gallery', {
    spaceBetween: 16,
    slidesPerView: 'auto',
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
      320: {
        spaceBetween: 12,
      },
      960: {
        spaceBetween: 16,
      },
    },
  });

  const swiper2 = new Swiper('.detail__slider', {
    spaceBetween: 10,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: {
      swiper: swiper,
    },
  });

  const openModal = document.querySelector('.open-modal');
  const modal = document.querySelector('.modal');
  const overlay = document.querySelector('.overlay');

  modal.querySelector('.cancel').addEventListener('click', (e) => {
    e.preventDefault();
    modal.removeAttribute('style');
    overlay.removeAttribute('style');
  });

  openModal.addEventListener('click', (e) => {
    modal.style.display = 'block';
    overlay.style.display = 'block';
  });
});
