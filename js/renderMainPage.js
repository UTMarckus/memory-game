import renderHeader from './renderHeader.js';
import renderGame from './renderGame.js';
import renderWinModal from './renderWinModal.js';

export default function renderMainPage() {

  document.body.append(renderHeader());
  document.body.append(renderGame());

}
