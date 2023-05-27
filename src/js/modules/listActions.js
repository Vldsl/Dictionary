import { renderList } from "./render";
import { checkEmptyList, saveToLS, updateWordCount } from "./utils";
import { hasSpecialCharacters, isFloat } from "./validator";
import {
  categoryFind,
  partFind,
  levelFind,
  typeFind,
  searchInput,
  list,
  sourceWord,
  translation,
  category,
  part,
  level,
  type,
  words,
  form,
} from "./vars";

export function searchWords() {
  const listItems = list.querySelectorAll(".list-group-item");
  listItems.forEach((item) => {
    const engTitle = item.querySelector(".eng-word").textContent.toLowerCase();
    const isMatch = engTitle.includes(searchInput.value.trim().toLowerCase());

    if (!isMatch) item.classList.add("d-none");
    else item.classList.remove("d-none");
  });
}

export function filterWords() {
  const { value: categoryValue } = categoryFind;
  const { value: partValue } = partFind;
  const { value: levelValue } = levelFind;
  const { value: typeValue } = typeFind;

  const selected = [categoryValue, partValue, levelValue, typeValue].filter(
    Boolean
  );
  const listItems = list.querySelectorAll(".list-group-item");

  listItems.forEach((item) => {
    if (!selected.length) {
      item.classList.remove("d-none");
      return;
    }

    const dataAttribute = item.dataset.filter;
    if (!dataAttribute) {
      item.classList.add("d-none");
      return;
    }

    const values = dataAttribute.split(" ");
    if (!selected.every((item) => values.includes(item))) {
      item.classList.add("d-none");
    } else {
      item.classList.remove("d-none");
    }
  });
}

export function addWord(e) {
  e.preventDefault();
  const eng = sourceWord.value.trim();
  const rus = translation.value.trim();
  if (
    eng.length < 1 ||
    rus.length < 1 ||
    isFloat(eng) ||
    isFloat(rus) ||
    hasSpecialCharacters(eng) ||
    hasSpecialCharacters(rus) ||
    words.find((word) => word.eng.toLowerCase() === eng.toLowerCase())
  ) {
    form.input.forEach((el) => el.classList.add("error"));
    form.reset();
    sourceWord.focus();
    return;
  }
  form.input.forEach((el) => el.classList.remove("error"));

  const newWord = {
    id: Date.now(),
    eng,
    rus,
    engHide: false,
    rusHide: false,
    check: false,
    category: category.value.trim(),
    part: part.value.trim(),
    level: level.value.trim(),
    type: type.value.trim(),
  };
  words.push(newWord);
  words.sort((a, b) => a.eng.localeCompare(b.eng));
  renderList();
  saveToLS();

  form.reset();
  sourceWord.focus();

  checkEmptyList();
  updateWordCount();

  // const dictionaryPromise = fetch(`${url}${newWord.eng.toLowerCase()}`);
  // dictionaryPromise
  //   .then((response) => response.json())
  //   .then((word) => console.log(word));
}
