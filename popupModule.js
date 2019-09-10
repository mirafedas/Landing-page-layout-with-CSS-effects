const modalWindow = document.querySelectorAll('.modal-window')[0];
const imageContainers = document.querySelectorAll('.image-container');
const modalImage = document.querySelectorAll('.modal-image')[0];

const openImage = (e) => {
  let clickedImage = e.target.parentNode.firstElementChild;

  if (clickedImage.parentElement.classList.contains('image-on-hover')) {
    clickedImage = e.target.parentNode.parentNode.firstElementChild;;
  };
  modalWindow.style.display = 'flex';
  modalImage.src = clickedImage.src;
  document.body.style.overflow = 'hidden';
}

const hideModalWindow = () => {
  modalWindow.style.display = 'none';
  document.body.style.overflow = 'visible';
}

const popupModule = {
  init: () => {
    for (let i = 0; i < imageContainers.length; i++) {
      imageContainers[i].addEventListener('click', openImage);
    }
    modalWindow.addEventListener('click', hideModalWindow);
  }
}

export default popupModule;
