import { searchWords } from "./modules/listActions";
import { saveToLS, showEmptyTrash } from "./modules/utils";
import { delWords, words } from "./modules/vars";

(function () {
  const trashList = document.querySelector("#deletedWordsList");
  const deletedWordAmount = document.querySelector(".deleted-word-amount");
  const trashSearchInput = document.querySelector("#trash-search-input");
  const emptyTrashList = document.querySelector("#emptyTrashList");
  // const alertInfo = document.querySelector(".alert-info");

  // Buttons
  const restoreAllBtn = document.querySelector("#restoreAllBtn");
  const clearAllBtn = document.querySelector("#clearAllBtn");
  const restoreAllCheckWordsBtn = document.querySelector(
    "#restoreAllCheckWordsBtn"
  );
  const clearAllCheckWordsBtn = document.querySelector(
    "#clearAllCheckWordsBtn"
  );

  // const checkboxState = {};

  const utils = {
    updateDeletedWordsAmount: () =>
      (deletedWordAmount.textContent = delWords.length),
    updateRestoreAllCheckWordsBtn: () =>
      (restoreAllCheckWordsBtn.disabled =
        !delWords.length || !delWords.some(({ done }) => done)),
    updateClearAllCheckWordsBtn: () =>
      (clearAllCheckWordsBtn.disabled =
        !delWords.length || !delWords.some(({ done }) => done)),
    updateRestoreAllBtn: () => (restoreAllBtn.disabled = !delWords.length),
    updateClearAllBtn: () => (clearAllBtn.disabled = !delWords.length),
  };

  const updateDeletedWordsAmount = utils.updateDeletedWordsAmount;
  const updateRestoreAllCheckWordsBtn = utils.updateRestoreAllCheckWordsBtn;
  const updateClearAllCheckWordsBtn = utils.updateClearAllCheckWordsBtn;
  const updateRestoreAllBtn = utils.updateRestoreAllBtn;
  const updateClearAllBtn = utils.updateClearAllBtn;

  const renderDeletedWords = () => {
    trashList.innerHTML = delWords
      .map((word, i) => {
        if (word.check) word.check = false;
        return `
				<li class="deleted-item list-group-item d-flex justify-content-between align-items-center ${
          word.done ? "checked" : ""
        }" data-id="${word.id}">
					<div class="form-check">
						<input class="form-check-input" type="checkbox" ${word.done ? "checked" : ""}>
					</div>
					<span>${i + 1}</span>
					<p class="original-text">${word.word1}</p>
					<p>${word.word2}</p>
					<div>
						<button class="btn btn-primary" data-action="restore">Восстановить</button>
						<button class="btn btn-danger" data-action="delete-permanently">Удалить окончательно</button>
					</div>
				</li>
		`;
      })
      .join("");
  };

  // Функция для обновления состояния чекбокса
  // const updateCheckboxState = (id, checked) => {
  //   checkboxState[id] = checked;
  // };

  // Функция для получения состояния чекбокса по идентификатору
  // const getCheckboxState = (id) => {
  //   return checkboxState[id] || false;
  // };

  const actionDelete = (parentNode, wordIndex) => {
    parentNode.remove();
    delWords.splice(wordIndex, 1);
    saveToLS("delWords", delWords);

    // updateCheckboxState(id, checked);
  };

  const restoreAll = (delWords) => {
    trashList.innerHTML = "";
    delWords = [];

    words.push(...delWords);

    // saveWordsToLS(words);
    saveToLS("words", words);
    saveToLS("delWords", delWords);
    showEmptyTrash();
  };

  const restoreWord = (parentNode, word, wordIndex) => {
    parentNode.remove();
    console.log(word);
    words.push(word);
    delWords.splice(wordIndex, 1);

    saveToLS("delWords", delWords);
    // saveWordsToLS(words);
    saveToLS("words", words);
    if (!delWords.length) showEmptyTrash();
  };

  const handleTrashActions = (e) => {
    const { target } = e;
    if (!target.matches(".btn")) return;
    // Не все эти переменные я использую в следующих функциях, так что лучше что-то вызывать только в какойто одной функции
    // Например: Index можно вызывать только в функции удаления
    const parentNode = target.closest(".deleted-item");
    const wordId = +parentNode.dataset.id;
    const wordIndex = delWords.findIndex(({ id }) => id === wordId);
    const word = delWords[wordIndex];
    // console.log(delWords, parentNode, wordId, wordIndex, word);
    // const checked = document.querySelector('input[type="checkbox"]:checked');

    if (!parentNode || !wordId || wordIndex === -1 || !word) return;

    if (target.dataset.action === "delete-permanently") {
      actionDelete(parentNode, wordIndex);
    }
    if (target.dataset.action === "restore") {
      restoreWord(parentNode, word, wordIndex);
    }
  };

  const clearList = (delWords) => {
    trashList.innerHTML = "";
    delWords = [];
    localStorage.setItem("delWords", JSON.stringify(delWords));
    showEmptyTrash();
  };

  const saveDelWordsToLS = () => {
    if (delWords) localStorage.setItem("delWords", JSON.stringify(delWords));
    else localStorage.removeItem("delWords");
  };

  const load = () => {
    if (delWords.length) {
      renderDeletedWords();
      updateDeletedWordsAmount();
    } else showEmptyTrash();

    updateRestoreAllBtn();
    updateClearAllBtn();
    updateClearAllCheckWordsBtn();
    updateRestoreAllCheckWordsBtn();
  };

  document.addEventListener("DOMContentLoaded", () => load());
  trashSearchInput.addEventListener("input", () =>
    searchWords(trashList, trashSearchInput)
  );
  trashList.addEventListener("click", handleTrashActions);
  clearAllBtn.addEventListener("click", (delWords) => clearList(delWords));
  restoreAllBtn.addEventListener("click", () => restoreAll(delWords));
})();
