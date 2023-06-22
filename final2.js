// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Menandai menu aktif berdasarkan posisi scroll
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    let currentSection = '';
  
    sections.forEach(function(section) {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
  
      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        currentSection = section.getAttribute('id');
      }
    });
  
    // Menandai menu aktif
    const activeMenu = document.querySelector('a[href="#' + currentSection + '"]');
    if (activeMenu && !activeMenu.classList.contains('active')) {
      document.querySelectorAll('nav a').forEach(function(menuItem) {
        menuItem.classList.remove('active');
      });
      activeMenu.classList.add('active');
    }
  });
// Efek Paralaks saat scroll
window.addEventListener('scroll', function() {
    var parallax = document.querySelector('.parallax');
    var scrollPosition = window.pageYOffset;
  
    parallax.style.transform = 'translateY(' + scrollPosition * 0.4 + 'px)';
  });