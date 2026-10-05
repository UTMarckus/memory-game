import createCard from "./createCard.js"
import shuffleList from "./shuffleList.js";

export default function createCardsList(numOfPairs) {

  let cardsList = [];

  for (let i = 1; i <= numOfPairs; i += 1) {
    const card1 = createCard(i);
    const card2 = createCard(i);
    cardsList = [...cardsList, card1, card2];
  }

  return shuffleList(cardsList);
}
