//menu

const menu = document.querySelector('nav');
const menuBtn = document.getElementById('menu-btn');
const menuBtnClose = document.getElementById('menu-btn-close');

menuBtn.addEventListener('click', () => {
    menu.style.display = 'block';
});

menuBtnClose.addEventListener('click', () => {
    menu.style.display = 'none';
});

//Carrousel

document.getElementById('previous');
document.getElementById('next');

