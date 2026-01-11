const guests = document.querySelectorAll('.guest');
const modal = document.getElementById('modal');
const modalName = document.getElementById('modal-name');
const modalImg = document.getElementById('modal-img');
const modalText = document.getElementById('modal-text');
const closeBtn = document.querySelector('.close');

guests.forEach(guest => {
  guest.addEventListener('click', () => {
    modalName.textContent = guest.dataset.name;
    modalImg.src = guest.dataset.img;
    modalText.textContent = guest.dataset.text;
    modal.style.display = 'block';
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
