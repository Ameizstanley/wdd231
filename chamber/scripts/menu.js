const gridButton = document.querySelector('#grid');
const listButton = document.querySelector('#list');
const display = document.querySelector('section');

gridButton.addEventListener('click', () => {
    display.classList.add('member-container');
    display.classList.remove('list');
});

listButton.addEventListener('click', showList);

function showList() {
    display.classList.add('list')
    display.classList.remove('member-container');

};