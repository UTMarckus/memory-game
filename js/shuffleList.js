export default function shuffleList(List) {
  for (let i = List.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = List[i];
    List[i] = List[j];
    List[j] = temp;
  }
  return List;
}
