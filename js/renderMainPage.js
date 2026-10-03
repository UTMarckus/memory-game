import renderHeader from './renderHeader.js';
import renderGame from './renderGame.js';

export default function renderMainPage() {

  document.body.append(renderHeader());
  document.body.append(renderGame());

}
