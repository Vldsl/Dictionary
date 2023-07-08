import { renderList } from "./render";
import {
  checkWords,
  delAllWordsBtn,
  delDoneWordsBtn,
  delWords,
  deletedWordCount,
  markUndoneBtn,
  numberOfPage,
  pageControl,
  pageIndex,
  toggleSelectAllBtn,
  wordCountElem,
  words,
} from "./vars";

const utils = {
  saveToLS: (key, array) => localStorage.setItem(key, JSON.stringify(array)),
  sortWords: () => words.sort((a, b) => a.check - b.check),
  showEmptyList: () =>
    (list.innerHTML = `
				<li id="emptyList" class="alert alert-info empty-list">
					<img src="./img/leaf.svg" alt="Empty" width="48" class="mt-3">
					<div class="empty-list__title">Список дел пуст</div>
				</li>
			`),
  showEmptyTrash: () => (emptyTrashList.style.display = "block"),
  clearCheckWords: (checkWords) => {
    // checkWords.splice(0, checkWords.length, ...[]);
    checkWords = [];
    localStorage.removeItem("checkWords");
  },
  updateDeletedWordCount: () =>
    (deletedWordCount.textContent = delWords.length),
  updateWordCount: () => (wordCountElem.textContent = words.length),
  updateRestoreBtn: () => (restoreBtn.disabled = !delWords.length),
  updateDelAllWordsBtn: () => {
    // delAllWordsBtn.disabled = !words.length && !delWords.length;
    delAllWordsBtn.disabled = !words.length;
  },
  updateMarkUndoneBtn: () =>
    (markUndoneBtn.disabled =
      !words.length || !words.every(({ check }) => check)),
  updateDelDoneWordsBtn: () =>
    (delDoneWordsBtn.disabled =
      !words.length || !words.some(({ check }) => check)),
  updateToggleSelectAllBtn: () => {
    console.log("updateToggleSelectAllBtn");
    toggleSelectAllBtn.textContent = checkWords.length
      ? "Вернуть исходное выделение"
      : "Выделить все";

    toggleSelectAllBtn.disabled =
      !words.length ||
      (words.every(({ check }) => check) && !checkWords.length);

    // toggleSelectAllBtn.disabled = !!checkWords.length;
  },
  generatePageNumbers: () => {
    numberOfPage.innerHTML = "";
    for (let i = 1; i <= Math.ceil(words.length / 10); i++) {
      numberOfPage.innerHTML += `<span ${
        pageIndex.value === 1 && i === 1 ? "class='selected'" : ""
      } data-page="${i}">${i}</span>`;
    }
  },
  showActiveNumberOfPage: () => {
    const items = numberOfPage.querySelectorAll("span");
    items.forEach((item) => {
      if (item.dataset.page == pageIndex.value) {
        item.classList.add("selected");
      } else {
        item.classList.remove("selected");
      }
    });
  },
  updatePageControl: (words) =>
    (pageControl.style.display = words.length ? "block" : "none"),
};

export const saveToLS = utils.saveToLS;
export const sortWords = utils.sortWords;
export const showEmptyList = utils.showEmptyList;
export const showEmptyTrash = utils.showEmptyTrash;
export const clearCheckWords = utils.clearCheckWords;
export const updateDeletedWordCount = utils.updateDeletedWordCount;
export const updateWordCount = utils.updateWordCount;
export const updateRestoreBtn = utils.updateRestoreBtn;
export const updateDelAllWordsBtn = utils.updateDelAllWordsBtn;
export const updateMarkUndoneBtn = utils.updateMarkUndoneBtn;
export const updateDelDoneWordsBtn = utils.updateDelDoneWordsBtn;
export const updateToggleSelectAllBtn = utils.updateToggleSelectAllBtn;
export const generatePageNumbers = utils.generatePageNumbers;
export const showActiveNumberOfPage = utils.showActiveNumberOfPage;
export const updatePageControl = utils.updatePageControl;

// export const updateWordCount = () => (wordCountElem.textContent = words.length);

// export const updateDeletedWordCount = () =>
//   (deletedWordCount.textContent = delWords.length);

// export function saveWordsToLS() {
//   try {
//     localStorage.setItem("words", JSON.stringify(words));
//   } catch (e) {
//     alert("Ошибка сохранения данных в локальное хранилище: " + e.message);
//   }
// }

// export const saveWordsToLS = () => {
//   // loader.style.display = "block";
//   localStorage.setItem("words", JSON.stringify(words));
//   // loader.style.display = "none";
// };

// export function sortWords() {
// console.log("sortWords", words);
// let activeWord = words.filter((word) => word.check === false);
// let deactiveWord = words.filter((word) => word.check === true);
// activeWord.sort((a, b) => a.word1.localeCompare(b.word1));
// deactiveWord.sort((a, b) => a.word1.localeCompare(b.word1));

// words = [...activeWord, ...deactiveWord];
// words.sort((a, b) => a.check - b.check);
// words.sort(
//   (a, b) =>
//     a.word1.localeCompare(a.word1).check - b.word1.localeCompare(b.word1).check
// );
// }

// export function showEmptyList() {
//   if (!words.length)
//     list.insertAdjacentHTML(
//       "afterbegin",
//       `
// 				<li class='list-group-item' id='empty-list'>
// 					<p class='ps-6 m-auto'>Список слов пуст</p>
// 				</li>`
//     );
//   else document.querySelector("#empty-list")?.remove();
// }

// export const showEmptyList = () => {
//   list.innerHTML = `
// 		  <li id="emptyList" class="alert alert-info empty-list">
// 		    <img src="./img/leaf.svg" alt="Empty" width="48" class="mt-3">
// 		    <div class="empty-list__title">Список дел пуст</div>
// 		  </li>
// 		`;
// };

// export const clearCheckWords = () => {
//   checkWords.splice(0, checkWords.length, ...[]);
//   localStorage.removeItem("checkWords");
// };

// export const clearDelTasks = () => {
//   // delWords.splice(0, delWords.length, ...[]);
//   // localStorage.removeItem("delWords");
// };

// export const updateDelAllWordsBtn = () => {
//   delAllWordsBtn.disabled = !words.length && !delWords.length;

// delAllWordsBtn.textContent = delWords.length
//   ? "Восстановить удаленные задачи"
//   : "Удалить все";
// };

// export const updateRestoreBtn = () => (restoreBtn.disabled = !delWords.length);

// export const updateToggleSelectAllBtn = () => {
//   toggleSelectAllBtn.textContent = checkWords.length
//     ? "Вернуть исходное выделение"
//     : "Выделить все";

//   toggleSelectAllBtn.disabled =
//     !words.length || (words.every(({ check }) => check) && !checkWords.length);
// };

// export const updateMarkUndoneBtn = () => {
//   markUndoneBtn.disabled = !words.length || !words.every(({ check }) => check);
// };

// export const updateDelDoneWordsBtn = () => {
//   delDoneWordsBtn.disabled = !words.length || !words.some(({ check }) => check);
// };

// function generatePageNumbers() {
//   for (let i = 1; i <= Math.ceil(words.length / 10); i++) {
//     numberOfPage.innerHTML += `<span data-page="${i}">${i}</span>`;
//   }
// }

// export const showActiveNumberOfPage = () => {
//   const items = numberOfPage.querySelectorAll("span");
//   items.forEach((item) => {
//     if (item.dataset.page == pageIndex.value) {
//       item.classList.add("selected");
//     } else {
//       item.classList.remove("selected");
//     }
//   });
// };

export const load = () => {
  if (words.length) {
    renderList();
    generatePageNumbers();
    // showActiveNumberOfPage();
    // filterWords();
  } else {
    showEmptyList();
    updatePageControl(words);
  }
  updateWordCount();
  updateDeletedWordCount();

  updateDelAllWordsBtn();
  updateMarkUndoneBtn();
  updateDelDoneWordsBtn();
  updateToggleSelectAllBtn();
};
