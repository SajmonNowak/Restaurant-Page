import loadContact from './contact.js';

function createDiv (id) {
    const div = document.createElement('div');
    div.setAttribute('id', id);

    return div;
}

function createButton (id, text){
    const button = document.createElement('button');
    button.setAttribute('id', id);
    button.textContent = text;

    return button;
}

function createBackground (type, link){
    const mediaDiv = createDiv();
    let media;

    if (type == 'video'){
        mediaDiv.classList.add('videoDiv');
        media = document.createElement('video');
        media.setAttribute('autoplay', true);
        media.setAttribute('muted', true);
        media.setAttribute('loop', true);
    } else if (type == 'image'){
        mediaDiv.classList.add('imgDiv');
        media = document.createElement('img');
    } else {
        console.log('Type has to be video or image');
    }

    media.setAttribute('src', link);
    mediaDiv.appendChild(media);

    return mediaDiv;
}

function createTitle (title1, title2, buttonText, titleId) {
    const titleDiv = createDiv();
    titleDiv.classList.add('coverTitle');
    titleDiv.setAttribute('id', titleId);

    const title = document.createElement('h1');
    title.textContent = title1;
    const underTitle = document.createElement('h2');
    underTitle.textContent = title2;
    

    titleDiv.appendChild(title);
    titleDiv.appendChild(underTitle);

    if(buttonText !== undefined){
        const button = createButton('titleButton', buttonText);
        button.addEventListener('click', loadContact);
        titleDiv.appendChild(button);
    }

    return titleDiv;
}

function createCover (type, link, title1, title2, buttonText, titleId){
    const coverDiv = createDiv('coverDiv');
    coverDiv.classList.add('coverDiv');

    if (type == 'video'){
        coverDiv.classList.add('coverVideoDiv');
    } 



    const background = createBackground(type, link);
    const title = createTitle(title1, title2, buttonText, titleId);

    coverDiv.append(background,title);

    return coverDiv;

}

export default createCover;