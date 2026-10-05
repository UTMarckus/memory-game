import { TEXTS, IMG_LIST } from "./utils.js";

export default function createCard(index) {
  const card = document.createElement('div');
  card.classList.add('game__card');
  card.classList.add('card');
  card.dataset.cardIndex = index;

  const img = document.createElement('img');
  img.src = IMG_LIST[index];
  img.alt = `${TEXTS.imageN}${index}`;

  const cover = document.createElement('img');
  cover.classList.add('card__cover');
  cover.src = IMG_LIST[0];
  cover.alt = TEXTS.cardCover;

  card.append(img);
  card.append(cover);

  return card;
}
