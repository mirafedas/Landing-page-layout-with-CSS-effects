const dropdownTitles = document.querySelectorAll('.dropdown-title-wrapper');
const dropdownTitlesLength = dropdownTitles.length;
const dropdownImg = document.querySelector('.dropdowns-image');
const TITLES_BACKGROUND_MAP = {
  PHOTOGRAPHY: 'url("./img/man-with-pic.png")',
  CREATIVITY: 'url("./img/img1.png")',
  WEB_DESIGN: 'url("./img/img2.png")',
}

function setImgBackground(value) {
  Object.entries(TITLES_BACKGROUND_MAP).forEach(([key, backgroundUrl]) => {
    if (key === value) {
      dropdownImg.style.backgroundImage = backgroundUrl;
    }
  });
}

const toggleDropdown = ({target}) => {
  let clickedTitleTarget = target;
  const arrow = clickedTitleTarget.lastElementChild;
  const isDropdownIcon = clickedTitleTarget.classList.contains('dropdown-icon');
  const isDropdownTitle = clickedTitleTarget.classList.contains('dropdown-title');
  const isTitleAndImage = clickedTitleTarget.classList.contains('title-and-image');

  if (isDropdownIcon || isDropdownTitle) {
    clickedTitleTarget = clickedTitleTarget.parentNode.parentNode;
  } else if (isTitleAndImage) {
    clickedTitleTarget = clickedTitleTarget.parentNode;
  }
  clickedTitleTarget.nextElementSibling.classList.toggle('hidden');
  if (arrow.classList.contains('dropdown-arrow-up')) {
    arrow.setAttribute('class', 'dropdown-arrow-down');
  } else {
    arrow.setAttribute('class', 'dropdown-arrow-up');
  }

  const textValue = clickedTitleTarget.firstElementChild.outerText;
  setImgBackground(textValue);
};

const accordeon = {
  init: () => {
    for (let i = 0; i < dropdownTitlesLength; i++) {
      dropdownTitles[i].addEventListener('click', toggleDropdown, false);
    }
  },
};

export default accordeon;
