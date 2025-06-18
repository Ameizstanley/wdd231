const navButton = document.querySelector('#menuButton')
const nav = document.querySelector('.nav-list')

navButton.addEventListener('click', () =>{
	nav.classList.toggle('active')


    // Close menu when clicking outside
    document.addEventListener('click', () => {
        if (!e.target.closest('nav')) {
            navList.classList.remove('active');
        }
    });
});
    