document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navbar = document.querySelector('.navbar');
    
    hamburgerMenu.addEventListener('click', () => {
      navbar.classList.toggle('active');
    });

    // Handle dropdown toggling for mobile
    const dropdownLinks = document.querySelectorAll('.dropdown > a');

    dropdownLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        if (window.innerWidth <= 767) {
          e.preventDefault();
          const dropdown = link.nextElementSibling;
          dropdown.classList.toggle('open');
        }
      });
    });
  });