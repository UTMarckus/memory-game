import createCard from "./createCard.js";
import renderInfo from "./renderInfo.js";

const NUM_OF_PAIRS = 8;

let movesCounter = 0;
let openPairs = 0;

export default function renderGame() {
  const mainEL = document.createElement('main');
  mainEL.classList.add('game');

  const containerDiv = document.createElement('div');
  containerDiv.classList.add('container');
  containerDiv.classList.add('game__container');

  const cards = document.createElement('div');
  cards.classList.add('game__cards');

  cards.append(createCard(1));
  cards.append(createCard(2));
  cards.append(createCard(3));
  cards.append(createCard(4));
  cards.append(createCard(5));
  cards.append(createCard(6));
  cards.append(createCard(7));
  cards.append(createCard(8));

  cards.append(createCard(1));
  cards.append(createCard(2));
  cards.append(createCard(3));
  cards.append(createCard(4));
  cards.append(createCard(5));
  cards.append(createCard(6));
  cards.append(createCard(7));
  cards.append(createCard(8));

  containerDiv.append(renderInfo());
  containerDiv.append(cards);

  mainEL.append(containerDiv);

  return mainEL;
}

function checkResult() {
  if (openPairs === NUM_OF_PAIRS) window.alert('You win!');
}
