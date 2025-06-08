let menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu-mobile");
const overlayMenu = document.getElementById("overlay-menu");

let isMenuOpen = false;

menuBtn.addEventListener('click', () => {
    if (!isMenuOpen) {
        menu.classList.add('open-menu');
        overlayMenu.classList.add('open-overlay');
        menuBtn.src = '/images/icon-close.svg';
    } else {
        menu.classList.remove('open-menu');
        overlayMenu.classList.remove('open-overlay');
        menuBtn.src = '/images/icon-hamburger.svg';
    }

    isMenuOpen = !isMenuOpen;
});