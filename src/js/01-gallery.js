import { galleryItems } from './gallery-items.js';
// Описан в документации
import SimpleLightbox from 'simplelightbox';
// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryBlockEl = document.querySelector('.gallery');

const makeGalleryCard = ({ preview, original, description } = {}) => {
  return `
    <div class="gallery__item">
        <a href="${original}">
            <img class="gallery__image" 
            src="${preview}" 
            alt="${description}" />
        </a>
    </div>
  `;
};

const galleryCardsArr = galleryItems.map(el => {
  return makeGalleryCard(el);
});

galleryBlockEl.insertAdjacentHTML('afterbegin', galleryCardsArr.join(''));

var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
