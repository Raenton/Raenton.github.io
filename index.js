(function() {
  let scrollElements = [];
  
  function setupMenu() {
    // menu animations
    const menuIcons = document.getElementById('menu-icons');
    Array.from(menuIcons.children).forEach(child => {
      child.addEventListener('mouseover', () => {
        child.classList.add('mouseIn');
        child.classList.remove('mouseOut');
      });
      child.addEventListener('mouseout', () => {
        child.classList.add('mouseOut');
        child.classList.remove('mouseIn');
      });
      child.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById(child.dataset.scroll).scrollIntoView({ behavior: 'smooth' });
      });
    });
  }

  function isInViewport(elem) {
    const bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function doScrollAnimations() {
    scrollElements.forEach(el => {
      if (isInViewport(el)) {
        const animation = el.dataset.scrollAnimation; 
        if (!el.classList.contains(animation)) {
          el.classList.add(animation);
        }
      }
    });
  }

  function setupScroll() {
    scrollElements = document.querySelectorAll('[data-scroll-animation]');

    // do the animations on load
    doScrollAnimations();
    
    document.addEventListener('scroll', doScrollAnimations);
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    setupMenu();
    setupScroll();
  });
})();