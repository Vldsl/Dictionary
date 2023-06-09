import { renderList } from "./render";
import {
  checkWords,
  delAllWordsBtn,
  delDoneWordsBtn,
  delWords,
  deletedWordCount,
  examplesBox,
  markUndoneBtn,
  numberOfPage,
  pageControl,
  pageIndex,
  toggleSelectAllBtn,
  wordCountElem,
  words,
} from "./vars";

const utils = {
  // Возможно будет лучше все мелкие функции разделить по соответствующим файлам
  saveToLS: (key, array) => {
    //   try {
    //     localStorage.setItem("words", JSON.stringify(words));
    //   } catch (e) {
    //     alert("Ошибка сохранения данных в локальное хранилище: " + e.message);
    //   }

    //   // loader.style.display = "block";
    localStorage.setItem(key, JSON.stringify(array));
    //   // loader.style.display = "none";
  },
  sortWords: () => {
    // Может лучше будет сортировать по нажатию на кнопку
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

    words.sort((a, b) => a.check - b.check);
  },
  // Лучше добавлять html код через js или лучше просто убирать его дисплеем со страницы?
  showEmptyList: (parent) =>
    (parent.innerHTML = `
				<div id="emptyList" class="alert alert-info empty-list">
					<img src="./img/leaf.svg" alt="Empty" width="48" class="mt-3">
					<p class="empty-list__title">Список пуст</p>
				</div>
			`),
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
    // console.log("updateToggleSelectAllBtn");
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
  // Лучше добавлять html код через js или лучше просто убирать его дисплеем со страницы?
  updatePageControl: (words) =>
    (pageControl.style.display = words.length ? "block" : "none"),
};

export const saveToLS = utils.saveToLS;
export const sortWords = utils.sortWords;
export const showEmptyList = utils.showEmptyList;
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

export const saveExample = (element) => {
  const exampleInput = examplesBox.querySelectorAll(".example-input");
  if (!exampleInput) return;
  exampleInput.forEach((item) => {
    const exampleInputValue = item.value.trim();
    if (exampleInputValue.length) element.examples.push(exampleInputValue);
  });
};

export const deleteAllExamplesInput = () => {
  const exampleInput = examplesBox.querySelectorAll(".example-item");
  if (!exampleInput) return;
  exampleInput.forEach((item, ind) => {
    if (ind === 0) {
      item.insertAdjacentHTML(
        "beforeend",
        `<button type="button" class="btn btn-primary add-example-btn">
					Добавить пример
				</button>`
      );
      return;
    }
    item.remove();
  });
};

export const load = () => {
  if (words.length) {
    renderList();
    generatePageNumbers();
    // showActiveNumberOfPage();
    // filterWords();
  } else {
    showEmptyList(list);
    updatePageControl(words);
  }
  updateWordCount();
  updateDeletedWordCount();

  updateDelAllWordsBtn();
  updateMarkUndoneBtn();
  updateDelDoneWordsBtn();
  updateToggleSelectAllBtn();
};
