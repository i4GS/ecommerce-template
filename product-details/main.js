function switchImage(el) {
    const displayedImage = document.getElementById('displayedImage');
    displayedImage.src = el.src;
}

function showTab(tab) {
    document.getElementById('detailsTab').style.display = tab === 'details' ? 'block' : 'none';
    document.getElementById('reviewsTab').style.display = tab === 'reviews' ? 'block' : 'none';
    
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
}