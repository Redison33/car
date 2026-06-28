document.addEventListener('DOMContentLoaded', () => {
  function initHeaderNav() {
    const nav = document.querySelector('.menu__nav');
    if (!nav) return;

    for (const link of nav.querySelectorAll('.list__item')) {
      if (link.dataset.inited) continue;
      link.dataset.inited = 'true';

      link.addEventListener('click', (e) => {
        const nested = link.querySelector('.nested');
        if (!nested || e.target.classList.contains('nested__link') || e.target.tagName === 'SPAN')
          return;

        e.preventDefault();

        const nestedEl = link.querySelector('.nested');
        const svg = link.querySelector('svg');
        const text = link.querySelector('span');

        if (nestedEl.style.height) {
          nestedEl.style.height = '';
          svg.style.transform = '';
          svg.querySelector('path').style.fill = '';
          text.style.color = '';
        } else {
          nestedEl.style.height = nestedEl.scrollHeight + 'px';
          svg.style.transform = 'rotate(180deg)';
          svg.querySelector('path').style.fill = '#0d3fa5';
          text.style.color = '#0d3fa5';
        }
      });
    }
  }

  initHeaderNav();
});
