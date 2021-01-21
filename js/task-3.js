const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const galleryRef = document.querySelector('#gallery');

function madeGallery() {
    
    const newMadeGallery = galleryRef
        .insertAdjacentHTML('afterbegin',
            `<li class="gallery__item"><img class="gallery__image"></li>`);
    
    return newMadeGallery;
}

images.forEach(image => madeGallery(image));

const getImage = document.querySelectorAll('.gallery__image');

getImage.forEach((element, key) => {

    element.alt = images[key].alt;
    element.src = images[key].url;

});
