//Task 5
window.onload = function() {
  window.scrollTo({top: 0})

  const linkArr = [...document.querySelectorAll(".link")];
  const sections = [...document.querySelectorAll(".nav-section")];

  for (let i = 0; i < linkArr.length; i++) {
    let sectionTop = sections[i].getBoundingClientRect().top;
    linkArr[i].addEventListener('click', (e) => {
      e.preventDefault();
      window.scroll({ top: sectionTop, left: 0, behavior: 'smooth' });
    })
  }

  //Task 6
  const dropdownTitles = document.querySelectorAll('.dropdown-title-wrapper');
  const dropdownImg = document.querySelector('.dropdowns-image');
  const imagesURLs = ['url("./img/man-with-pic.png")', 'url("./img/img1.png")', 'url("./img/img2.png")'];

  const toggleDropdown = (e) => {
    const clickedTitle = e.target;
    const arrow = clickedTitle.lastElementChild;
    clickedTitle.nextElementSibling.classList.toggle('hidden');
    if (arrow.classList.contains('dropdown-arrow-up')) {
      arrow.setAttribute('class', 'dropdown-arrow-down');
    } else {
      arrow.setAttribute('class', 'dropdown-arrow-up');
    }

    switch (clickedTitle.firstElementChild.outerText) {
      case 'PHOTOGRAPHY':
        dropdownImg.style.backgroundImage = imagesURLs[0];
        break;
      case 'CREATIVITY':
          dropdownImg.style.backgroundImage = imagesURLs[1];
          break;
      case 'WEB-DESIGN':
          dropdownImg.style.backgroundImage = imagesURLs[2];
        break;
    }
  }

  for (let i = 0; i < dropdownTitles.length; i++) {
    dropdownTitles[i].addEventListener('click', toggleDropdown, false);
  }
}

//Task 7
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

for (let i = 0; i < leftArrows.length; i++) {
  leftArrows[i].addEventListener('click', changeSlide);
}

for (let i = 0; i < rightArrows.length; i++) {
  rightArrows[i].addEventListener('click', changeSlide);
}

//Task 8
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
}

const hideModalWindow = () => {
  modalWindow.style.display = 'none';
}

for (let i = 0; i < imageContainers.length; i++) {
  imageContainers[i].addEventListener('click', openImage);
}

modalWindow.addEventListener('click', hideModalWindow);

// Task 9