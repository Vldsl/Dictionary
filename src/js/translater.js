import { load } from "./modules/utils";
import { handleAction } from "./modules/handleActions";
import {
  searchWords,
  filterWords,
  addWord,
  toggleSelectAll,
  resetAllTasks,
  deleteAllTasks,
  deleteDoneTasks,
  handlePageNavigation,
  handlePageSelection,
} from "./modules/listActions";
import {
  form,
  list,
  searchInput,
  actionFind,
  toggleSelectAllBtn,
  markUndoneBtn,
  delAllWordsBtn,
  delDoneWordsBtn,
  words,
  delWords,
  pageIndex,
  numberOfPage,
  pageControl,
  addExample,
  wordInputs,
} from "./modules/vars";

document.addEventListener("DOMContentLoaded", () => load());
form.addEventListener("submit", (e) => addWord(e));
list.addEventListener("click", handleAction);
searchInput.addEventListener("input", () => searchWords(list, searchInput));
actionFind.addEventListener("input", filterWords);

toggleSelectAllBtn.addEventListener("click", () => toggleSelectAll());
markUndoneBtn.addEventListener("click", () => resetAllTasks(words));
delAllWordsBtn.addEventListener("click", () => deleteAllTasks(words));
delDoneWordsBtn.addEventListener("click", () =>
  deleteDoneTasks(words, delWords)
);

pageControl.addEventListener("click", (e) =>
  handlePageNavigation(e, pageIndex)
);
numberOfPage.addEventListener("click", (e) =>
  handlePageSelection(e, pageIndex)
);

addExample.addEventListener("click", () => {
  wordInputs.insertAdjacentHTML(
    "beforeend",
    `<input  placeholder='Добавить пример'>`
  );
});
