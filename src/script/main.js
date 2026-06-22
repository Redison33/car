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

        if (nestedEl.style.height) {
          nestedEl.style.height = '';
          svg.style.transform = '';
        } else {
          nestedEl.style.height = nestedEl.scrollHeight + 'px';
          svg.style.transform = 'rotate(180deg)';
        }
      });
    }
  }

  initHeaderNav();
});
