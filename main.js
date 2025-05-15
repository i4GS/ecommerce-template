const toggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-main-menu');


toggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    document.body.classList.toggle('menu-open');
});
