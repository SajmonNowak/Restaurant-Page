import createCover from './coverMaker.js';

const mapDiv = createMap('map');

function createMap(id) {
    const mapContainer = document.createElement('iframe');
    mapContainer.setAttribute('src', 'https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ56_fi2auEmsRdpMMZhsxJew&key=AIzaSyC3QAH3wkD98poHPOjSwWIf4oUAv-gHDko');
    mapContainer.setAttribute('id', id);
   

    return mapContainer;
}

function createMailInfo (mail){
    const mailInfo = document.createElement('div');

    const mailIcon = document.createElement('i');
    mailIcon.classList.add('fas', 'fa-envelope');

    const mailAdress = document.createElement('h4');
    mailAdress.textContent = mail;

    mailInfo.append(mailIcon, mailAdress)
    mailInfo.classList.add('mailDiv');

    return mailInfo;
}

function createTelInfo (tel){
    const telInfo = document.createElement('div');

    const telIcon = document.createElement('i');
    telIcon.classList.add('fas', 'fa-phone-alt');

    const telNumber = document.createElement('h4');
    telNumber.textContent = tel;

    telInfo.append(telIcon, telNumber);
    telInfo.classList.add('telDiv');

    return telInfo;
}

function createTimeInfo (time) {
    const openInfo = document.createElement('div');

    const clockIcon = document.createElement('i');
    clockIcon.classList.add('fas', 'fa-clock');

    const openTimes = document.createElement('h4');
    openTimes.textContent = time;

    openInfo.append(clockIcon, openTimes);
    openInfo.classList.add('timeDiv');

    return openInfo;
}

function createContactInfo (tel,mail, time) {
    const contactDiv = document.createElement('div');
    contactDiv.append(createTimeInfo(time), createTelInfo(tel), createMailInfo(mail));
    contactDiv.classList.add('contactDiv');

    return contactDiv;
}


function loadContact () {
    const content = document.getElementById('main');
    content.innerHTML = '';

    const cover = createCover('image', 'imgs/Restaurant.jpg', 'Make your reservation');
    const mapInfoDiv = document.createElement('div'); 
    mapInfoDiv.classList.add('mapInfoDiv');
    
    const info = createContactInfo('0176 / 5761282762', 'mustermann@UnderSea.com', 'Mo-Sa: 8:00 - 22:00');

    mapInfoDiv.append(mapDiv,info);
    content.append(cover);
    content.append(mapInfoDiv);

}

export default loadContact;

