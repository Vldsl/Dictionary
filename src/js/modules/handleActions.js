import { renderList } from "./render";
import { checkEmptyList, saveToLS, updateWordCount } from "./utils";
import { words } from "./vars";

export function handleAction(e) {
  e.preventDefault();
  // if (!e.target.matches('.btn')) return
  const parentNode = e.target.closest(".list-group-item");
  const id = Number(parentNode.dataset.id);
  const word = words.find((word) => word.id === id);
  const wordIndex = words.findIndex((word) => word.id === id);

  if (!parentNode || !id) return;

  if (e.target.dataset.action === "delete") {
    removeWord(parentNode, id, wordIndex);
  } else if (e.target.dataset.action === "check") {
    checkWord(parentNode, word);
  } else if (e.target.matches(".edit")) {
    editWord(e, parentNode);
  } else if (e.target.matches(".hide")) {
    hideWord(e, parentNode, word);
  } else return;
  // renderList();
  // saveToLS();
}

function removeWord(parentNode, id, wordIndex) {
  if (wordIndex !== -1) {
    words.splice(wordIndex, 1);
    parentNode.remove();
    checkEmptyList();
    updateWordCount();
    saveToLS();
    renderList();
  }
}

function checkWord(parentNode, word) {
  parentNode.classList.toggle("checked");
  word.check = !word.check;
  renderList();
  saveToLS();
}

function hideWord(e, parentNode, word) {
  if (e.target.matches(".hide-eng")) {
    const engText = parentNode.querySelector(".eng-word");
    const hideEng = parentNode.querySelector("button.hide-eng");

    if (word.engHide) {
      word.engHide = false;
      engText.textContent = word.eng;
      hideEng.innerHTML = `<i class="fas fa-eye-slash"></i> Hide`;
    } else {
      word.engHide = true;
      engText.textContent = "😊";
      hideEng.innerHTML = `<i class="fas fa-eye"></i> Show`;
    }
    saveToLS();
  }
  if (e.target.matches(".hide-rus")) {
    const rusText = parentNode.querySelector(".rus-word");
    const hideRus = parentNode.querySelector("button.hide-rus");
    word.rusHide = !word.rusHide;

    if (word.rusHide) {
      rusText.textContent = "😊";
      hideRus.innerHTML = `<i class="fas fa-eye"></i> Show`;
    } else {
      rusText.textContent = word.rus;
      hideRus.innerHTML = `<i class="fas fa-eye-slash"></i> Hide`;
    }
    saveToLS();
  }
}

function editWord(e, parentNode) {
  console.log("editWord");
  const eng = parentNode.querySelector(".eng-word");
  const rus = parentNode.querySelector(".rus-word");

  if (e.target.matches(".edit-eng")) {
    console.log("edit eng word");
    eng.contentEditable = "true";

    eng.focus();
    const range = document.createRange();
    const selection = window.getSelection();
    range.selectNodeContents(eng);
    range.collapse(false);
    selection.removeAllRanges();
    selection.addRange(range);

    eng.addEventListener("keydown", (e) => {
      if (e.keyCode === 13) {
        e.preventDefault();
        eng.blur();
      }
    });
  }

  if (e.target.matches(".edit-rus")) {
    console.log("edit rus word");
    rus.contentEditable = "true";
    rus.focus();
    const range = document.createRange();
    const selection = window.getSelection();
    range.selectNodeContents(rus);
    range.collapse(false);
    selection.removeAllRanges();
    selection.addRange(range);

    rus.addEventListener("keydown", (e) => {
      if (e.keyCode === 13) {
        e.preventDefault();
        rus.blur();
      }
    });
  }

  function handleBlur(event, newText, property, id) {
    console.log("handleBlur");
    const wrd = words.find((word) => word.id == id);
    // console.log(wrd);
    // if (!parentNode || !wrd || !newText) return;

    const newWordText = newText.trim();
    if (newWordText === "") {
      // Если новое значение пустое, удаляем todo элемент
      // Здесь можно написать функцию удаления todo элемента
      return;
    }

    if (newWordText !== wrd[property]) {
      wrd[property] = newWordText;
      saveToLS();
    }
    console.log(event.target);
    event.target.contentEditable = "false";
  }

  eng.addEventListener("blur", (e) => {
    handleBlur(e, eng.innerText, "eng", parentNode.dataset.id);
  });

  rus.addEventListener("blur", (e) => {
    handleBlur(e, rus.innerText, "rus", parentNode.dataset.id);
  });
}
