const linkArr = [...document.querySelectorAll(".link")];
const sections = [...document.querySelectorAll(".nav-section")];

const scrollModule = {
  init: () => {
    for (let i = 0; i < linkArr.length; i++) {
      let sectionTop = sections[i].getBoundingClientRect().top;
      
      linkArr[i].addEventListener('click', (e) => {
        e.preventDefault();
        window.scroll({ top: sectionTop, left: 0, behavior: 'smooth' });
      })
    }
  }
}

export default scrollModule;
