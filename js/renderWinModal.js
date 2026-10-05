import { resetGame } from "./renderGame.js";
import { TEXTS } from "./utils.js";

export default function renderWinModal(movesCount) {
  const modalDiv = document.createElement('div');
  modalDiv.classList.add('modal');

  const contentDiv = document.createElement('div');
  contentDiv.classList.add('modal__content');
  contentDiv.classList.add('content');

  const title = document.createElement('h2');
  title.classList.add('content__title');
  title.textContent = TEXTS.winTitle;
  contentDiv.append(title);

  const subtitle = document.createElement('h3');
  subtitle.classList.add('content__subtitle');
  subtitle.textContent = `${TEXTS.moves} ${movesCount}`;
  contentDiv.append(subtitle);

  const controls = document.createElement('div');
  controls.classList.add('content__controls');

  const newGameBtn = document.createElement('button');
  newGameBtn.classList.add('content__new-game-button');
  newGameBtn.textContent = TEXTS.newGame;
  newGameBtn.addEventListener('click', () => {
    resetGame();
    closeWinModal();
  });

  const closeBtn = document.createElement('button');
  closeBtn.classList.add('content__close-button');
  closeBtn.textContent = TEXTS.close;
  closeBtn.addEventListener('click', closeWinModal);

  controls.append(newGameBtn, closeBtn);
  contentDiv.append(controls)

  modalDiv.append(contentDiv);

  document.body.append(modalDiv);
}

function closeWinModal() {
  document.querySelector('.modal').remove();
}
