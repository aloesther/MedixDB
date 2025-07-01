window.addEventListener('scroll', function() {
    const header = document.getElementById('main-header');
    if (window.scrollY > 0) {
        header.style.backgroundColor = '#FFFFFF';
    } else {
        header.style.backgroundColor = 'transparent';
    }
});