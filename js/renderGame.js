import createCard from "./createCard.js";
import createCardsList from "./createCardsList.js";
import renderInfo from "./renderInfo.js";
import { IMG_LIST } from "./utils.js";

const NUM_OF_PAIRS = IMG_LIST.length - 1;

let movesCounter = 0;
let openPairs = 0;
let cardsList = null
let match = null;

export default function renderGame() {
  const mainEL = document.createElement('main');
  mainEL.classList.add('game');

  const containerDiv = document.createElement('div');
  containerDiv.classList.add('container');
  containerDiv.classList.add('game__container');

  const cards = document.createElement('div');
  cards.classList.add('game__cards');

  cardsList = createCardsList(NUM_OF_PAIRS);
  cards.append(...cardsList);
  cards.addEventListener('click', onCardClick);

  containerDiv.append(renderInfo());
  containerDiv.append(cards);

  mainEL.append(containerDiv);

  return mainEL;
}

function onCardClick(e) {
  const card = e.target.closest('.card')

  if (!card || card.classList.contains('card_open') || card.classList.contains('card_locked')) return;

  card.classList.add('card_open');

  if (match === null) {
    match = card;
  } else {
    if (card.dataset.cardIndex === match.dataset.cardIndex) {
      updateOpenPairsCounter();
      checkResult();
      match = null;
    } else {
      cardsList.forEach(element => element.classList.add('card_locked'));

      setTimeout(() => {
        card.classList.remove('card_open');
        match.classList.remove('card_open');
        cardsList.forEach(element => element.classList.remove('card_locked'));

        match = null;
      }, 1500);
    }

    updateMovesCounter();
  }
}

function checkResult() {
  if (openPairs === NUM_OF_PAIRS) window.alert('You win!');
}

function updateMovesCounter() {

  movesCounter += 1;

  document.querySelector('#moves-counter').textContent = movesCounter;
}

function updateOpenPairsCounter() {

  openPairs += 1;

  document.querySelector('#pairs-counter').textContent = openPairs;
}
