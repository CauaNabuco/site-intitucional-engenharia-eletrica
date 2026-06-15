const btnMobile = document.getElementById('btn-mobile');

const mobileMenu = document.getElementById('mobile-menu');

const icon = btnMobile.querySelector('i');


btnMobile.addEventListener('click', () => {

    mobileMenu.classList.toggle('active');

    icon.classList.toggle('fa-bars-staggered');

    icon.classList.toggle('fa-xmark');

});