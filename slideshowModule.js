const leftArrows = document.querySelectorAll('.slides-go-left');
const rightArrows = document.querySelectorAll('.slides-go-right');

const changeSlide = (e) => {
  const container = e.target.parentNode.children[1];
  
  if (e.target.classList[0] === 'slides-go-right') {
    container.scrollLeft += container.clientWidth;
  } else {
    container.scrollLeft -= container.clientWidth;
  }
}

const slideshowModule = {
  init: () => {
    for (let i = 0; i < leftArrows.length; i++) {
      leftArrows[i].addEventListener('click', changeSlide);
    }

    for (let i = 0; i < rightArrows.length; i++) {
      rightArrows[i].addEventListener('click', changeSlide);
    }
  }
}

export default slideshowModule;