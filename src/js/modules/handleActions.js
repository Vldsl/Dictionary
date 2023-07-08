import { renderList } from "./render";
import {
  showEmptyList,
  updateWordCount,
  clearCheckWords,
  updateToggleSelectAllBtn,
  updateDelAllWordsBtn,
  updateDelDoneWordsBtn,
  updateMarkUndoneBtn,
  updateDeletedWordCount,
  updatePageControl,
  saveToLS,
  generatePageNumbers,
} from "./utils";
import { checkWords, delWords, pageSize, words } from "./vars";

export function handleAction(e) {
  e.preventDefault();
  const { target } = e;
  // if (!target.matches('.btn')) return
  // if (!target.classList.contains("btn")) return;
  const parentNode = target.closest(".list-group-item");
  const wordId = +parentNode.dataset.id;
  const wordIndex = words.findIndex(({ id }) => id === wordId);
  const wordItem = words[wordIndex];

  if (!parentNode || !wordId || wordIndex === -1 || !wordItem) return;

  if (target.dataset.action === "delete") {
    removeWord(parentNode, wordItem, wordIndex);
  } else if (target.dataset.action === "check") {
    checkWord(parentNode, wordItem);
  } else if (target.matches(".edit")) {
    editWord(target, parentNode, wordItem);
  } else if (target.matches(".hide")) {
    hideWord(target, parentNode, wordItem);
  } else if (target.matches(".more-link")) {
    localStorage.setItem("selectedWord", JSON.stringify(wordId));
    window.location.href = "card.html";
  } else return;
  // renderList();
  // saveWordsToLS(words);
  // saveToLS("words", words);
}

function removeWord(parentNode, wordItem, wordIndex) {
  if (wordIndex !== -1) {
    words.splice(wordIndex, 1);
    parentNode.remove();
    showEmptyList();
    updateWordCount(words);
    // saveWordsToLS(words);
    saveToLS("words", words);
    renderList();
    delWords.push(wordItem);
    saveToLS("delWords", delWords);
    updateDeletedWordCount(delWords);
  }

  if (checkWords.length) clearCheckWords(checkWords);
  // if (delWords.length) clearDelTasks();
  // if (!words.length) showEmptyList();

  if (!words.length) {
    showEmptyList();
    updatePageControl(words);
    updateToggleSelectAllBtn();
    updateDelAllWordsBtn();
  } else if (words.length === pageSize) {
    generatePageNumbers();
  }
}

function checkWord(parentNode, wordItem) {
  parentNode.classList.toggle("checked");
  wordItem.check = !wordItem.check;

  if (checkWords.length) clearCheckWords(checkWords);
  // if (delWords.length) clearDelTasks();

  updateDelDoneWordsBtn();
  updateMarkUndoneBtn();
  updateToggleSelectAllBtn();

  renderList();
  // saveWordsToLS(words);
  saveToLS("words", words);
}

function hideWord(target, parentNode, wordItem) {
  if (target.matches(".hide-word1")) {
    const word1Text = parentNode.querySelector(".word1-text");
    const hideWord1 = parentNode.querySelector("button.hide-word1");

    if (wordItem.isWord1Hidden) {
      wordItem.isWord1Hidden = false;
      word1Text.textContent = wordItem.word1;
      hideWord1.innerHTML = `<i class="fas fa-eye-slash"></i> Hide`;
    } else {
      wordItem.isWord1Hidden = true;
      word1Text.textContent = "😊";
      hideWord1.innerHTML = `<i class="fas fa-eye"></i> Show`;
    }
    // saveWordsToLS(words);
    saveToLS("words", words);
  }
  if (target.matches(".hide-word2")) {
    const word2Text = parentNode.querySelector(".word2-text");
    const hideWord2 = parentNode.querySelector("button.hide-word2");
    wordItem.isWord2Hidden = !wordItem.isWord2Hidden;

    if (wordItem.isWord2Hidden) {
      word2Text.textContent = "😊";
      hideWord2.innerHTML = `<i class="fas fa-eye"></i> Show`;
    } else {
      word2Text.textContent = wordItem.word2;
      hideWord2.innerHTML = `<i class="fas fa-eye-slash"></i> Hide`;
    }
    // saveWordsToLS(words);
    saveToLS("words", words);
  }
}

function editWord(target, parentNode, wordItem) {
  const word1Text = parentNode.querySelector(".word1-text");
  const word2Text = parentNode.querySelector(".word2-text");

  if (target.matches(".edit-word1")) {
    if (wordItem.isWord1Hidden) return;
    word1Text.contentEditable = "true";

    word1Text.focus();
    const range = document.createRange();
    const selection = window.getSelection();
    range.selectNodeContents(word1Text);
    range.collapse(false);
    selection.removeAllRanges();
    selection.addRange(range);

    word1Text.addEventListener("keydown", (e) => {
      if (e.keyCode === 13) {
        e.preventDefault();
        word1Text.blur();
      }
    });
  }

  if (target.matches(".edit-word2")) {
    if (wordItem.isWord2Hidden) return;
    word2Text.contentEditable = "true";

    word2Text.focus();
    const range = document.createRange();
    const selection = window.getSelection();
    range.selectNodeContents(word2Text);
    range.collapse(false);
    selection.removeAllRanges();
    selection.addRange(range);

    word2Text.addEventListener("keydown", (e) => {
      if (e.keyCode === 13) {
        e.preventDefault();
        word2Text.blur();
      }
    });
  }

  function handleBlur(event, newText, property, wordId) {
    const wrd = words.find((word) => word.id == wordId);
    // if (!parentNode || !wrd || !newText) return;

    const newWordText = newText.trim();
    if (newWordText === "") {
      // Если новое значение пустое, удаляем todo элемент
      // Здесь можно написать функцию удаления todo элемента
      return;
    }

    if (newWordText !== wrd[property]) {
      wrd[property] = newWordText;
      // saveWordsToLS(words);
      saveToLS("words", words);
    }
    event.target.contentEditable = "false";
  }

  word1Text.addEventListener("blur", (e) => {
    handleBlur(e, word1Text.innerText, "word1", parentNode.dataset.id);
  });

  word2Text.addEventListener("blur", (e) => {
    handleBlur(e, word2Text.innerText, "word2", parentNode.dataset.id);
  });
}
