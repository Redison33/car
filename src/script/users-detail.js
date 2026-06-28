document.addEventListener('DOMContentLoaded', () => {
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
