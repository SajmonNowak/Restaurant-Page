function createHeader (id) {
    const header = document.createElement('header');
    header.setAttribute ('id', id);

    return header;
}

function createButton (id, text){
    const button = document.createElement('button');
    button.setAttribute('id', id);
    button.textContent = text;

    return button;
}

function createNav(id){
    const nav = document.createElement ('nav');
    nav.setAttribute('id', id);

    const home = createButton('homeBtn', 'Home');
    const menu = createButton('menuBtn', 'Menu');
    const contact = createButton('contactBtn', 'Contact');

    nav.appendChild(home);
    nav.appendChild(menu);
    nav.appendChild(contact);

    return nav;
}

function createMain (id) {
    const main = document.createElement('main');
    main.setAttribute('id', id);

    return main
}


function createFooter(id, text) {
    const footer = document.createElement('footer');
    footer.setAttribute('id',id);

    const span = document.createElement('span');
    span.textContent = text;
    footer.appendChild(span);

    return footer;
}

function loadPage () {
    const content = document.getElementById('content');
    content.innerHTML = '';

    const header = createHeader('header');
    content.appendChild(header);

    const navBar = createNav('navbar');
    header.appendChild(navBar);

    const main = createMain('main');
    content.appendChild(main);

    const footer = createFooter('footer', 'Copyright © 2021 UnderSea');
    content.appendChild(footer);
}

export default loadPage;

