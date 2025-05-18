document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menuButton');
    const navList = document.getElementById('navList');

    menuButton.addEventListener('click', () => {
        navList.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', () => {
        if (!e.target.closest('nav')) {
            navList.classList.remove('active');
        }
    });
});