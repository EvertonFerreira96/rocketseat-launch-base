const modaloverlay  = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');

const activeModal = (card) => {
  return window.location.href = `/video/${card.id}`;
  const videoId = card.getAttribute('id');
  modaloverlay.classList.add('active');
  modaloverlay.querySelector('iframe').src = `https://www.youtube.com/embed/${videoId}`;
  }

document.querySelector('.close-modal').addEventListener("click", () => {
  modaloverlay.querySelector('iframe').src = '';
  modaloverlay.classList.remove('active');
});
  

for (let card of cards){
  card.addEventListener("click", () => activeModal(card));
}

