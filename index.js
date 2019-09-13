import accordeon from './js/accordeon.js';
import scroll from './js/scroll.js';
import slideshow from './js/slideshow.js';
import fetchContent from './js/fetchContent.js';
import popup from './js/popup.js';

window.onload = function() {
  window.scrollTo({top: 0});
  scroll.init();
  accordeon.init();
  slideshow.init();
  fetchContent.init();
  popup();
}
