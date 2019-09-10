  const dropdownTitles = document.querySelectorAll('.dropdown-title-wrapper');
  const dropdownTitlesLength = dropdownTitles.length;
  const dropdownImg = document.querySelector('.dropdowns-image');
  const imagesURLs = ['url("./img/man-with-pic.png")', 'url("./img/img1.png")', 'url("./img/img2.png")'];
  
  const toggleDropdown = (e) => {
    let clickedTitle = e.target;
    const arrow = clickedTitle.lastElementChild;

    if (e.target.classList.contains('dropdown-icon') || e.target.classList.contains('dropdown-title')) {
      clickedTitle = e.target.parentNode.parentNode;
    } else if (e.target.classList.contains('title-and-image')) {
        clickedTitle = e.target.parentNode;
    }
    
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
  
  const accordeonModule = {
    init: () => {
      for (let i = 0; i < dropdownTitlesLength; i++) {
        dropdownTitles[i].addEventListener('click', toggleDropdown, false);
      }
    }
  }

export default accordeonModule;
