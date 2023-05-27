import "./../scss/style.scss";
import { load } from "./modules/utils";
import { handleAction } from "./modules/handleActions";
import { searchWords, filterWords, addWord } from "./modules/listActions";
import { form, list, searchInput, actionFind } from "./modules/vars";

document.addEventListener("DOMContentLoaded", load);
form.addEventListener("submit", addWord);
list.addEventListener("click", handleAction);
searchInput.addEventListener("input", searchWords);
actionFind.addEventListener("input", filterWords);
