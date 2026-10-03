import { texts } from "./texts.js";

export default function renderInfo() {
  const infoDiv = document.createElement('div');
  infoDiv.classList.add('game__info');
  infoDiv.classList.add('info');

  const openPairsP = document.createElement('p');
  openPairsP.classList.add('info__open-pairs');
  openPairsP.textContent = texts.openPairs;

  const openPairsSpan = document.createElement('span');
  openPairsSpan.classList.add('info__open-pairs-counter');
  openPairsSpan.textContent = '0'
  openPairsP.append(openPairsSpan);

  const movesP = document.createElement('p');
  movesP.classList.add('info__moves');
  movesP.textContent = texts.moves;

  const movesSpan = document.createElement('span');
  movesSpan.classList.add('info__open-pairs-counter');
  movesSpan.textContent = '0'
  movesP.append(movesSpan);

  infoDiv.append(openPairsP);
  infoDiv.append(movesP);

  return infoDiv;
}
