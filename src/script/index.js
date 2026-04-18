document.addEventListener('DOMContentLoaded', () => {
  // var swiper = new Swiper('.swiper', {
  //   slidesPerView: 'auto',
  //   spaceBetween: 12,
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },
  // });

  const sliders = document.querySelectorAll('.card__slider');

  sliders.forEach((slider) => {
    const images = slider.querySelectorAll('img');

    const dotsContainer = slider.querySelector('.card__dots');

    images.forEach((_, i) => {
      const dot = document.createElement('span');
      if (i === 0) dot.classList.add('active');
      dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll('span');

    if (images.length) {
      images[0].classList.add('active');
    }

    slider.addEventListener('mousemove', (e) => {
      const rect = slider.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const width = rect.width;

      const partWidth = width / images.length;
      let index = Math.floor(x / partWidth);

      if (index >= images.length) index = images.length - 1;

      images.forEach((img) => img.classList.remove('active'));
      images[index].classList.add('active');

      dots.forEach((d) => d.classList.remove('active'));
      dots[index].classList.add('active');
    });

    slider.addEventListener('mouseleave', () => {
      images.forEach((img) => img.classList.remove('active'));
      if (images.length) {
        images[0].classList.add('active');
      }
    });
  });

  const rangeSlider = document.getElementById('rangeSlider');
  const input1 = document.querySelector('.min-price-square');
  const input2 = document.querySelector('.max-price-square');
  const inputs = [input1, input2];

  let startValue1 = Number(input1.getAttribute('min'));

  if (input1.getAttribute('value') !== '') {
    startValue1 = Number(input1.getAttribute('value'));
  }

  let startValue2 = Number(input2.getAttribute('max'));

  if (input2.getAttribute('value') !== '') {
    startValue2 = Number(input2.getAttribute('value'));
  }

  if (rangeSlider) {
    noUiSlider.create(rangeSlider, {
      start: [startValue1, startValue2],
      margin: 10,
      connect: true,
      step: 1,
      range: {
        min: [Number(input1.getAttribute('min'))],
        max: [Number(input2.getAttribute('max'))],
      },
    });
  }

  rangeSlider.noUiSlider.on('update', function (values, handle) {
    inputs[handle].value = Math.round(values[handle]);

    if (typeof smartFilter !== 'undefined' && smartFilter.keyup) {
      smartFilter.keyup(inputs[handle]);
    }
  });
  const setRangeSlider = (i, value) => {
    let arr = [null, null];
    arr[i] = value;
    rangeSlider.noUiSlider.set(arr);
  };
  inputs.forEach((el, index) => {
    el.addEventListener('change', (e) => {
      setRangeSlider(index, e.currentTarget.value);
    });
  });
});
