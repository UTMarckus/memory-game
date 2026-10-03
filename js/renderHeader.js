import { texts } from './texts.js';

export default function renderHeader() {
  const header = document.createElement('header');
  header.classList.add('game__header');


  const containerDiv = document.createElement('div');
  containerDiv.classList.add('container');
  containerDiv.classList.add('header__container');

  const gameTitle = document.createElement('h1');
  gameTitle.classList.add('header__title');
  gameTitle.textContent = texts.title;


  const controls = document.createElement('div');
  controls.classList.add('header__controls');

  const newGameBtn = document.createElement('button');
  newGameBtn.classList.add('header__button');
  newGameBtn.classList.add('header__button_new-game');
  newGameBtn.textContent = texts.newGame;

  const recordsBtn = document.createElement('button');
  recordsBtn.classList.add('header__button');
  recordsBtn.classList.add('header__button_records');
  recordsBtn.textContent = texts.records;

  controls.append(newGameBtn);
  controls.append(recordsBtn);

  containerDiv.append(gameTitle);
  containerDiv.append(controls);

  header.append(containerDiv);

  return header;
}
