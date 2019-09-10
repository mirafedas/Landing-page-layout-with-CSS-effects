const fetchModule = {
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
    const monthObj = {
      month: 'short'
    };

    const dayObj = {
      day: '2-digit'
    };

    const fullDateObj = {
      month: 'short',
      day: '2-digit',
      year: 'numeric'
    }

    const API = 'http://localhost:3000/api/blogs';

    const fillInBlogs = (arr, data) => {
      for (let i = 0; i < arr.length; i++) {
        arr[i].innerHTML = data;
      }
    }

    const fillInImages = (arr, data) => {
      for (let i = 0; i < arr.length; i++) {
        arr[i].src = data;
      }
    }

    if (!navigator.onLine) {
      return alert('No connection!');
    }

    fetch(API)
      .then(response => response.json())
      .then(data => {
        for (let i = 0; i < blogTextArr.length; i++) {
          fillInBlogs(blogTextArr, data.blogs[i].description);
        }
        for (let i = 0; i < blogTitleArr.length; i++) {
          fillInBlogs(blogTitleArr, data.blogs[i].title);
        }
        for (let i = 0; i < blogSectionImages.length; i++) {
          fillInImages(blogSectionImages, data.blogs[i].previewImg);
        }
        for (let i = 0; i < blogFooterImages.length; i++) {
          fillInBlogs(blogFooterImages, data.blogs[i].previewImg);
        }
        for (let i = 0; i < days.length; i++) {
          fillInBlogs(days, new Date(data.blogs[i].published).toLocaleDateString('en-GB', dayObj));
        }

        for (let i = 0; i < months.length; i++) {
          fillInBlogs(months, new Date(data.blogs[i].published).toLocaleDateString('en-US', monthObj));
        }

        for (let i = 0; i < views.length; i++) {
          fillInBlogs(views, data.blogs[i].watched);
        }

        for (let i = 0; i < comments.length; i++) {
          fillInBlogs(comments, data.blogs[i].comments);
        }

        for (let i = 0; i < blogDate.length; i++) {
          fillInBlogs(blogDate, new Date(data.blogs[i].published).toLocaleDateString('en-US', fullDateObj));
        }
      });
  }
}

export default fetchModule;