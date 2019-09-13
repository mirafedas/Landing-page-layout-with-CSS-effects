const popupModule = {
  popupSettings: {},

  init: function(popupSettings) {
    this.popupSettings = popupSettings;

    for (let i = 0; i < popupSettings.images.length; i++) {
      popupSettings.images[i].addEventListener('click', (e) => this.openImage(e));
    }
    popupSettings.modalWindow.addEventListener('click', () => this.hideModalWindow());
  },

  openImage: function(e) {
    let clickedImage = e.target.parentNode.firstElementChild;

    if (clickedImage.parentElement.classList.contains('image-on-hover')) {
      clickedImage = e.target.parentNode.parentNode.firstElementChild;
    }
    this.popupSettings.modalWindow.style.display = 'flex';
    this.popupSettings.modalImage.src = clickedImage.src;
    document.body.style.overflow = 'hidden';
  },

  hideModalWindow: function() {
    this.popupSettings.modalWindow.style.display = 'none';
    document.body.style.overflow = 'visible';
  },
};

export default popupModule;
