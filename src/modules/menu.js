import createCover from './coverMaker.js';

function createDiv (id) {
    const div = document.createElement('div');
    div.setAttribute('id', id);

    return div;
}

function createImage(image){
    const img = document.createElement('img');
    img.setAttribute('src', image);

    return img;
}

function createTitle(text, id){
    const title = document.createElement('h4');
    title.textContent = text;
    title.setAttribute('id', id);

    return title;
}

function createPrice(price){
    const priceTag = document.createElement('p');
    priceTag.textContent = `${price} €`;
    priceTag.classList.add('price');

    return priceTag;
}

function createText(text){
    const textP = document.createElement('p');
    textP.textContent = text;

    return textP;
}


function createDishCard (dish, image, text, dishPrice){
    const dishCard = createDiv(dish);
    
    const img = createImage(image);
    const name = createTitle(dish);
    const descr = createText(text);
    const price = createPrice(dishPrice);

    dishCard.append(img, name, descr, price);
    dishCard.classList.add('dishCard');

    return dishCard
}

let dishes = [
    {
        name: 'Salmon',
        img: 'imgs/Foods/Salmon.jpg' ,
        descr: 'The Ferrari under the fish',
        price: 79,
    },
    {
        name: 'Crab',
        img: 'imgs/Foods/crab.jpg',
        descr: "We swear it's not mr. Krebs",
        price: 59,
    },
    {
        name: 'Shark',
        img: 'imgs/Foods/Shark.jpg',
        descr: 'Tastes like chicken',
        price: 69,
    },
    {
        name: 'Salad',
        img: 'imgs/Foods/Salad.jpg',
        descr: 'Fresh & Healthy',
        price: 29,
    },
    {
        name: 'Water',
        img: 'imgs/Foods/Water.jpg',
        descr: 'Yes, we have water in our undersea bar',
        price: 4,
    },
    {
        name: 'Beer',
        img: 'imgs/Foods/Beer.jpg',
        descr: 'For everyone who wants more than only water',
        price: 5,
    }
]

function createDishMenu (id) {
    const menu = createDiv('div');
    menu.setAttribute('id', id);

    for (let i=0; i<dishes.length; i++){
        const dishCard = createDishCard(dishes[i].name,dishes[i].img, dishes[i].descr, dishes[i].price);
        menu.appendChild(dishCard);
    }

    return menu;
}

function createMenu (){
    const content = document.getElementById('main');
    content.innerHTML = '';

    const coverDiv = createCover('image', 'imgs/MenuBackground.jpg', 'Explore our unique Menu');
    const menu = createDishMenu('menu');

    content.appendChild(coverDiv);
    content.appendChild(menu);
}

export default createMenu;