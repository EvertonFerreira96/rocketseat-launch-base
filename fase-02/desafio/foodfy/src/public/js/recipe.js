const cards = document.querySelectorAll('.food');
const modalOverlay  = document.querySelector('.modal-overlay');
const modalClose = modalOverlay.querySelector('i')

const activeModal = (card) => {
  console.log(card.id)
  return window.location.href = `/recipe/${card.id}`
  modalOverlay.classList.add('active');
}

for (let card of cards){
  card.addEventListener('click', () => activeModal(card));
}

modalClose.addEventListener('click', () => modalOverlay.classList.remove('active'))