import accordeonModule from './accordeonModule.js';
import popupModule from './popupModule.js';
import scrollModule from './scrollModule.js';
import slideshowModule from './slideshowModule.js';
import fetchModule from './fetchModule.js';

window.onload = function() {
  window.scrollTo({top: 0});
  scrollModule.init();
  accordeonModule.init();
  slideshowModule.init();
  popupModule.init();
  fetchModule.init();
}
