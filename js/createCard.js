import { texts } from "./texts.js";

const IMG_LIST = [
  './assets/card-cover.jpg',
  './assets/01.jpg',
  './assets/02.jpg',
  './assets/03.jpg',
  './assets/04.jpg',
  './assets/05.jpg',
  './assets/06.jpg',
  './assets/07.jpg',
  './assets/08.jpg',
];

export default function createCard(index) {
  const card = document.createElement('div');
  card.classList.add('game__card');
  card.classList.add('card');
  card.dataset.cardIndex = index;

  const img = document.createElement('img');
  img.src = IMG_LIST[index];
  img.alt = `${texts.imageN}${index}`;

  const cover = document.createElement('img');
  cover.classList.add('card__cover');
  cover.src = IMG_LIST[0];
  cover.alt = texts.cardCover;

  card.append(img);
  card.append(cover);

  return card;
}
