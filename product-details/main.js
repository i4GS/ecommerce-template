function switchImage(el) {
    const displayedImage = document.getElementById('displayedImage');
    displayedImage.src = el.src;
}

function changeQuantity(amount) {
    const input = document.getElementById('quantityInput');
    let current = parseInt(input.value);
    current = isNaN(current) ? 1 : current;
    const newVal = current + amount;
    if (newVal >= 1) input.value = newVal;
}

function showTab(tab) {
    document.getElementById('detailsTab').style.display = tab === 'details' ? 'block' : 'none';
    document.getElementById('reviewsTab').style.display = tab === 'reviews' ? 'block' : 'none';
    
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
}

const toggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-main-menu');


toggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    document.body.classList.toggle('menu-open');
});