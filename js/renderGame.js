import createCard from "./createCard.js";
import createCardsList from "./createCardsList.js";
import renderInfo from "./renderInfo.js";
import { IMG_LIST } from "./utils.js";

const NUM_OF_PAIRS = IMG_LIST.length - 1;

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

  cards.append(...createCardsList(NUM_OF_PAIRS));

  containerDiv.append(renderInfo());
  containerDiv.append(cards);

  mainEL.append(containerDiv);

  return mainEL;
}

function checkResult() {
  if (openPairs === NUM_OF_PAIRS) window.alert('You win!');
}
