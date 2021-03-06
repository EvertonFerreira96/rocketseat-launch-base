const modaloverlay  = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');

const activeModal = (card) => {
  const videoId = card.getAttribute('id');
  modaloverlay.classList.add('active');
  modaloverlay.querySelector('iframe').src = `https://www.youtube.com/embed/${videoId}`;
  }

for (let card of cards){
  card.addEventListener("click", () => activeModal(card));
}

document.querySelector('.close-modal').addEventListener("click", () => {
  modaloverlay.querySelector('iframe').src = '';
  modaloverlay.classList.remove('active');
});
