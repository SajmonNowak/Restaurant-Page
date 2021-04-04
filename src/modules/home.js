import createCover from './coverMaker.js';

function loadHome () {
    const content = document.getElementById('main');
    content.innerHTML = '';
    const cover = createCover('video', 'imgs/UnderwaterVideo.mp4', 'UnderSea Bar', 'Welcome to UnderSea, the under Water experience with best seafood & cocktails in Town.', 'Contact', 'homeTitle');
    content.appendChild(cover);
}

export default loadHome;