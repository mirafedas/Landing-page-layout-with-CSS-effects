import popupModule from '../modules/popupModule.js';

const popupSettings = {
  images: document.querySelectorAll('.image-container'), 
  modalWindow: document.querySelectorAll('#modal-window')[0], 
  modalImage: document.querySelectorAll('.modal-image')[0]
};

const popup = () => {
  popupModule.init(popupSettings);
}

export default popup;
