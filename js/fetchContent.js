const fetchContent = {
  init: () => {
    const blogTextArr = document.querySelectorAll('.blog-text');
    const blogTitleArr = document.querySelectorAll('.blog-title');
    const blogSectionImages = document.querySelectorAll('.post-image');
    const blogFooterImages = document.querySelectorAll('.blog-img');
    const days = document.querySelectorAll('.day-num');
    const months = document.querySelectorAll('.month');
    const views = document.querySelectorAll('.views');
    const comments = document.querySelectorAll('.comments');
    const blogDate = document.querySelectorAll('.blog-date');
    const MONTH = {
      month: 'short'
    };

    const DAYS = {
      day: '2-digit'
    };

    const FULL_DAY = {
      month: 'short',
      day: '2-digit',
      year: 'numeric'
    }

    const API = 'http://localhost:3000/api/blogs';

    const fillInDescriptions = (arr, data) => {
      for (let i = 0; i < arr.length; i++) {
        arr[i].innerHTML = data.blogs[i].description;
      }
    }

    const fillInTitles = (arr, data) => {
      for (let i = 0; i < arr.length; i++) {
        arr[i].innerHTML = data.blogs[i].title;
      }
    }

    const fillInWatched = (arr, data) => {
      for (let i = 0; i < arr.length; i++) {
        arr[i].innerHTML = data.blogs[i].watched;
      }
    }

    const fillInComments = (arr, data) => {
      for (let i = 0; i < arr.length; i++) {
        arr[i].innerHTML = data.blogs[i].comments;
      }
    }

    const fillInImages = (arr, data) => {
      for (let i = 0; i < arr.length; i++) {
        arr[i].src = data.blogs[i].previewImg;
      }
    }

    const fillInDays = (arr, data) => {
      for (let i = 0; i < arr.length; i++) {
        arr[i].innerHTML = new Date(data.blogs[i].published).toLocaleDateString('en-GB', DAYS);
      }
    }

    const fillInMonths = (arr, data) => {
      for (let i = 0; i < arr.length; i++) {
        arr[i].innerHTML = new Date(data.blogs[i].published).toLocaleDateString('en-US', MONTH);
      }
    }

    const fillInFullDate = (arr, data) => {
      for (let i = 0; i < arr.length; i++) {
        arr[i].innerHTML = new Date(data.blogs[i].published).toLocaleDateString('en-US', FULL_DAY);
      }
    }

    if (!navigator.onLine) {
      return alert('No connection!');
    }

  fetch(API)
    .then(response => response.json())
    .then(data => {
      fillInDescriptions(blogTextArr, data);
      fillInTitles(blogTitleArr, data);
      fillInWatched(views, data);
      fillInComments(comments, data);
      fillInImages(blogSectionImages, data);
      fillInImages(blogFooterImages, data);
      fillInDays(days, data);
      fillInMonths(months, data);
      fillInFullDate(blogDate, data);
    })
    .catch(error => console.error(error));
  }
}

export default fetchContent;