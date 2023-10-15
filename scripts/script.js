// JavaScript to toggle the mobile menu
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');

console.log(menuToggle, " and ", mobileMenu);

menuToggle.addEventListener('click', function () {
    // Toggle the "active" class on the menu toggle for the hamburger icon animation
    menuToggle.classList.toggle('active');
    
    // Toggle the visibility of the mobile menu
    if (mobileMenu.style.display === 'block') {
        mobileMenu.style.display = 'none';
    } else {
        mobileMenu.style.display = 'block';
    }
});
