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
});
