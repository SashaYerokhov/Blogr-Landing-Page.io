let openMenu = document.querySelector('.header__burger-open');
let closeMenu = document.querySelector('.header__icon-close');
let menu = document.querySelector('.header__wrapper');

openMenu.addEventListener('click', menuOpen);
closeMenu.addEventListener('click', menuClose);

function menuOpen() {
    menu.style.display = 'block';
    openMenu.style.display = 'none';
    closeMenu.style.display = 'block';
};

function menuClose() {
    menu.style.display = 'none';
    openMenu.style.display = 'block';
    closeMenu.style.display = 'none';
};

