const closes = document.querySelectorAll('.material-icons');

for (let close of closes){
  close.addEventListener('click', () => {
    const parentSection = close.parentElement.parentElement; 
    close.textContent = close.textContent == 'visibility' ? 'visibility_off' : 'visibility'
    return parentSection.children[1].classList.toggle('hide');
  });
}