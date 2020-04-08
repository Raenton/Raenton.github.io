(function() {
  
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

  function setupScroll() {
    
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    setupMenu();
    setupScroll();
  });
})();