import loadPage from './modules/page.js';
import loadHome from './modules/home.js';
import loadMenu from './modules/menu.js';
import loadContact from './modules/contact.js';


init();

function initButtons() {
    const homeBtn = document.getElementById('homeBtn');
    homeBtn.addEventListener('click', loadHome);
    const menuBtn = document.getElementById('menuBtn');
    menuBtn.addEventListener('click', loadMenu);
    const contactBtn = document.getElementById('contactBtn');
    contactBtn.addEventListener('click', loadContact);
    const titleButton = document.getElementById('titleButton');
    titleButton.addEventListener('click', loadContact);
}

function init () {
    loadPage();
    loadHome();
    initButtons();
}