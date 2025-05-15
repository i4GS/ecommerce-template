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

document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-main-menu');

    if (toggle && navMenu) {
        toggle.addEventListener('click', () => {
            navMenu.classList.toggle('open');
            document.body.classList.toggle('menu-open');
        });
    }

    const cartBtn = document.querySelector('.cart-btn');
    const cartSidebar = document.getElementById('cartSidebar');
    const closeCart = document.getElementById('closeCartBtn');
    const cartOverlay = document.getElementById('cart-overlay');

    const toggleCart = (isOpen) => {
        if (cartSidebar) {
            cartSidebar.classList.toggle('open', isOpen);
        }
        if (cartOverlay) {
            cartOverlay.classList.toggle('active', isOpen);
        }
    };

    if (cartBtn && closeCart) {
        cartBtn.addEventListener('click', (e) => {
            e.preventDefault();
            toggleCart(true);
        });

        closeCart.addEventListener('click', () => toggleCart(false));
        cartOverlay?.addEventListener('click', () => toggleCart(false));
    }
});