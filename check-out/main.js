document.addEventListener('DOMContentLoaded', () => {
    const options = document.querySelectorAll('.option');

    options.forEach(option => {
        option.addEventListener('click', () => {
        options.forEach(opt => opt.classList.remove('active'));
        option.classList.add('active');
        });
    });

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