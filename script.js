let menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu-mobile");
const overlayMenu = document.getElementById("overlay-menu");
const body = document.querySelector('body');

let isMenuOpen = false;

menuBtn.addEventListener('click', () => {
    if (!isMenuOpen) {
        menu.classList.add('open-menu');
        overlayMenu.classList.add('open-overlay');
        menuBtn.classList.add('close');
        menuBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg"><g fill="#2D314D" fill-rule="evenodd"><path d="M.868.661l16.97 16.97-.706.708L.162 1.369z"/><path d="M.161 17.632L17.131.662l.708.706-16.97 16.97z"/></g></svg>';
        
        body.classList.add('menu-open');
    } else {
        menu.classList.remove('open-menu');
        overlayMenu.classList.remove('open-overlay');
        menuBtn.classList.remove('close');
        menuBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="11"><g fill="#2D314D" fill-rule="evenodd"><path d="M0 0h24v1H0zM0 5h24v1H0zM0 10h24v1H0z"/></g></svg>';
        body.classList.remove('menu-open');
    }

    isMenuOpen = !isMenuOpen;
});