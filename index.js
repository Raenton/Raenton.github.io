(function() {
  
  function setupAnimationListeners() {
    // menu animations
    const menuIcons = document.getElementById('menu-icons');
    menuIcons.childNodes.forEach(node => {
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
  
  document.addEventListener('DOMContentLoaded', function() {
    setupAnimationListeners();
  });
})();