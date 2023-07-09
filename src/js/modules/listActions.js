import { renderList } from "./render";
import {
  showEmptyList,
  updateWordCount,
  clearCheckWords,
  updateToggleSelectAllBtn,
  updateMarkUndoneBtn,
  updateDelAllWordsBtn,
  updateDelDoneWordsBtn,
  updateDeletedWordCount,
  showActiveNumberOfPage,
  updatePageControl,
  generatePageNumbers,
  saveToLS,
  saveExample,
  deleteAllExamplesInput,
} from "./utils";
import { isValid } from "./validator";
import {
  categoryFind,
  partFind,
  levelFind,
  typeFind,
  list,
  category,
  part,
  level,
  type,
  form,
  words,
  delWords,
  checkWords,
  word2Input,
  word1Input,
  pageSize,
  examplesBox,
} from "./vars";

export const addExample = () => {
  // Если пользователь не добавил пример, то можно самому добавить пример с интернета
  examplesBox.insertAdjacentHTML(
    "beforeend",
    `<div class="example-item d-flex gap-3">
		<input
			class="example-input form-control"
			type="text"
			name="input"
			placeholder="Добавить пример"
		/>
		<button type="button" class="btn btn-primary add-example-btn">
			Добавить пример
		</button>
	</div>`
  );
};

export const handlePageNavigation = (e, pageIndex) => {
  const { target } = e;
  if (target.matches("#prev") && pageIndex.value > 1) --pageIndex.value;
  else if (
    target.matches("#next") &&
    pageIndex.value < Math.ceil(words.length / 10)
  )
    ++pageIndex.value;

  renderList();
  showActiveNumberOfPage();
};

export const handlePageSelection = (e, pageIndex) => {
  const { target } = e;
  if (!target.hasAttribute("data-page")) return;
  const page = +target.dataset.page;
  pageIndex.value = page;
  renderList();
  showActiveNumberOfPage();
};

export function searchWords(list, searchInput) {
  // Как должны себя вести кнопки во время поиска слов?
  // Может их лучше отключать или чтобы они работали только с теми элементами которые активны
  // Может кнопку Очистить список стоит отключать по время поиска
  const listItems = list.querySelectorAll(".list-group-item");
  listItems.forEach((item) => {
    const word1title = item
      .querySelector(".word1-text")
      .textContent.toLowerCase();
    const isMatch = word1title.includes(searchInput.value.trim().toLowerCase());

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

const markAllDone = (words, checkWords) => {
  // checkWords.splice(
  //   0,
  //   checkWords.length,
  //   ...JSON.parse(localStorage.getItem("words"))
  // );
  checkWords = [...words];
  // saveCheckWordsToLS(checkWords);
  saveToLS("checkWords", checkWords);
  // words.forEach(({ check }) => (check = true));
  // words.map(({ check }) => (check = true));

  for (let i = 0; i < words.length; i++) {
    words[i].check = true;
  }

  // words = words.map((word) => {
  //   return { ...word, check: true };
  // });

  // words.splice(0, words.length, ...words.map(({ check }) => (check = true)));

  list
    .querySelectorAll(".list-group-item")
    .forEach((item) => item.classList.add("checked"));
};

const restorePrevDoneTasks = (words, checkWords) => {
  console.log(words);
  words.splice(
    0,
    words.length,
    ...JSON.parse(localStorage.getItem("checkWords") ?? [])
  );

  // words = [...checkWords];
  console.log(words);

  renderList();
  clearCheckWords(checkWords);
};

export const resetAllTasks = (words) => {
  // Нужно проверить работу функции
  for (let i = 0; i < words.length; i++) {
    words[i].check = false;
  }

  // words.forEach(({ check }) => (check = false));
  console.log(words);

  list
    .querySelectorAll(".list-group-item")
    .forEach((item) => item.classList.remove("checked"));
  updateMarkUndoneBtn();
  // saveWordsToLS(words);
  saveToLS("words", words);
  if (checkWords.length) clearCheckWords(checkWords);
};

export const toggleSelectAll = () => {
  // console.log("toggleSelectAll");
  // console.log(words.every(({ check }) => check && checkWords.length));
  // console.log(checkWords);
  // console.log(words);
  // if (words.every(({ check }) => check) && checkWords.length) {
  if (words.every(({ check }) => check)) {
    console.log("restore");
    restorePrevDoneTasks(words, checkWords);
  } else {
    markAllDone(words, checkWords);
  }

  updateDelDoneWordsBtn();
  updateMarkUndoneBtn();
  updateToggleSelectAllBtn();
  console.log(words);
  // saveWordsToLS(words);
  saveToLS("words", words);
};

export const deleteAllTasks = (words) => {
  console.log(words);
  delWords.push(...words);
  // words.splice(0, words.length, ...[]);
  words = [];
  console.log(words);
  list.innerHTML = "";

  showEmptyList(list);
  // saveWordsToLS(words);
  saveToLS("words", words);
  saveToLS("delWords", delWords);

  updateToggleSelectAllBtn();
  updateMarkUndoneBtn();
  updateDelAllWordsBtn();
  updateDelDoneWordsBtn();

  updateWordCount(words);
  updateDeletedWordCount(delWords);
  // generatePageNumbers();
  // showActiveNumberOfPage();
  updatePageControl(words);
};

export const deleteDoneTasks = (words) => {
  // words.splice(0, words.length, ...words.filter(({ check }) => !check));
  words = words.filter(({ check }) => !check);
  delWords.push(...words);
  saveToLS("delWords", delWords);

  if (words.length) renderList();
  else showEmptyList(list);

  updateToggleSelectAllBtn();
  updateMarkUndoneBtn();
  updateDelAllWordsBtn();
  updateDelDoneWordsBtn();

  // saveWordsToLS(words);
  saveToLS("words", words);

  updateWordCount(words);
  updateDeletedWordCount(delWords);
  updatePageControl(words);
};

export function addWord(e) {
  e.preventDefault();
  const word1text = word1Input.value.trim();
  // const word2text = word2Input.value.trim();
  if (
    // word1text.length < 1 ||
    // word2Input.value.trim().length < 1 ||
    !isValid(word1text) ||
    !isValid(word2Input.value.trim())
    // || words.find(({ word1 }) => word1.toLowerCase() === word1text.toLowerCase())
  ) {
    form.input.forEach((el) => el.classList.add("error"));
    form.reset();
    word1Input.focus();
    return;
  }
  form.input.forEach((el) => el.classList.remove("error"));

  // Нужно доделать этот объект, нужно написать объекты внутри этого объекта
  const newWord = {
    id: Date.now(),
    check: false,
    done: false,
    word1: word1text,
    word2: word2Input.value.trim(),
    isWord1Hidden: false,
    isWord2Hidden: false,
    wrdw: {
      text: "text",
      isHidden: false,
    },
    wrdw2: {
      text: "text",
      isHidden: false,
    },
    category: category.value.trim(),
    part: part.value.trim(),
    level: level.value.trim(),
    type: type.value.trim(),
    filter: {
      category: category.value.trim(),
      part: part.value.trim(),
      level: level.value.trim(),
      type: type.value.trim(),
    },
    examples: [],
  };
  words.push(newWord);
  saveExample(newWord);
  deleteAllExamplesInput();
  words.sort((a, b) => a.word1.localeCompare(b.word1));
  renderList();
  // saveWordsToLS(words);
  saveToLS("words", words);

  form.reset();
  word1Input.focus();

  updateWordCount(words);

  if (words.length === 1) {
    updatePageControl(words);
    // showActiveNumberOfPage();

    updateDelAllWordsBtn();
    updateToggleSelectAllBtn();
    // updateMarkUndoneBtn();
    // updateDelDoneWordsBtn();
  } else if (words.length === pageSize + 1) {
    generatePageNumbers();
  }
}

// const dictionaryPromise = fetch(`${url}${newWord.eng.toLowerCase()}`);
// dictionaryPromise
//   .then((response) => response.json())
//   .then((word) => console.log(word));
