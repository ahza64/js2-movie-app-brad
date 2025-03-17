const global = {
  currentPage: window.location.pathname
}

// Highlight active link
function highlightActiveLink() {
  const links = document.querySelectorAll('.nav-link')
  links.forEach((link) => {
    if (link.getAttribute('href') === global.currentPage) {
      link.classList.add('active')
    }
  })
}

// Init App
function init() {
  switch (global.currentPage) {
    case '/':
    case '/index.html':
      console.log('home page')
      break;
    case '/shows.html':
      console.log('shows page')
      break;
    case '/movie-details.html':
      console.log('movie details page')
      break;
    case '/tv-details.html':
      console.log('shows details page')
      break;
    case '/search.html':
      console.log('search page')
      break;
    default:
      break;
  }
  highlightActiveLink()
}

document.addEventListener('DOMContentLoaded', init)