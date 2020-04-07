(function() {
  
  function setupAnimationListeners() {
    // menu animations
    const menuIcons = document.getElementById('menu-icons');
    Array.from(menuIcons.children).forEach(node => {
      node.addEventListener('mouseover', () => {
        node.classList.add('mouseIn');
        node.classList.remove('mouseOut');
      });
      node.addEventListener('mouseout', () => {
        node.classList.add('mouseOut');
        node.classList.remove('mouseIn');
      });
    });
  }

  function setupScroll() {
    const menuIcons = document.getElementById('menu-icons');
    Array.from(menuIcons.children).forEach(child => {
      child.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById(child.dataset.scroll).scrollIntoView({ behavior: 'smooth' });
      });
    });
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    setupAnimationListeners();
    setupScroll();
  });
})();