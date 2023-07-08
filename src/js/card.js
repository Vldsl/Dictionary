import { words } from "./modules/vars";

const cardWord1 = document.querySelector("#cardWord1"),
  cardWord2 = document.querySelector("#cardWord2"),
  categoryInput = document.querySelector("#categoryInput"),
  partInput = document.querySelector("#partInput"),
  levelInput = document.querySelector("#levelInput"),
  typeInput = document.querySelector("#typeInput");

// export let selectedCard = {};
export let selectedWord = JSON.parse(localStorage.getItem("selectedWord"));

const cardOfWord = words.find(({ id }) => id === selectedWord);

export const saveWordId = (id) => {
  selectedWord = id;
};

console.log(cardWord1, selectedWord, cardOfWord);
const showCard = () => {
  console.log("show");
  cardWord1.innerText += cardOfWord.word1;
  cardWord2.innerText += cardOfWord.word2;
};

document.addEventListener("DOMContentLoaded", () => showCard());
