import { renderList } from "./render";
import { wordCountElem, words } from "./vars";

export const updateWordCount = () => (wordCountElem.textContent = words.length);

export function saveToLS() {
  try {
    localStorage.setItem("words", JSON.stringify(words));
  } catch (e) {
    alert("Ошибка сохранения данных в локальное хранилище: " + e.message);
  }
}

export function sortWords() {
  // console.log("sortWords", words);
  // let activeWord = words.filter((word) => word.check === false);
  // let deactiveWord = words.filter((word) => word.check === true);
  // activeWord.sort((a, b) => a.eng.localeCompare(b.eng));
  // deactiveWord.sort((a, b) => a.eng.localeCompare(b.eng));

  // words = [...activeWord, ...deactiveWord];
  words.sort((a, b) => a.check - b.check);
  // words.sort(
  //   (a, b) =>
  //     a.eng.localeCompare(a.eng).check - b.eng.localeCompare(b.eng).check
  // );
}

export function checkEmptyList() {
  if (!words.length)
    list.insertAdjacentHTML(
      "afterbegin",
      `
				<li class='list-group-item' id='empty-list'>
					<p class='ps-6 m-auto'>Список слов пуст</p>
				</li>`
    );
  else document.querySelector("#empty-list")?.remove();
}

export const load = () => {
  if (words.length) {
    renderList();
    updateWordCount();
    // filterWords();
  } else {
    checkEmptyList();
  }
};
