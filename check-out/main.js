const options = document.querySelectorAll('.option');

options.forEach(option => {
    option.addEventListener('click', () => {
    options.forEach(opt => opt.classList.remove('active'));
    option.classList.add('active');
    });
});

const toggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-main-menu');


toggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    document.body.classList.toggle('menu-open');
});