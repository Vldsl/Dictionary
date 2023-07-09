export const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

export const form = document.querySelector("#form"),
  word1Input = document.querySelector("#word1Input"),
  word2Input = document.querySelector("#word2Input"),
  list = document.querySelector("#list"),
  wordCountElem = document.querySelector("#word-count"),
  searchInput = document.querySelector("#search-input"),
  loader = document.querySelector("#loader"),
  deletedWordCount = document.querySelector(".deleted-word-count");

export const toggleSelectAllBtn = document.querySelector(".check-all"),
  markUndoneBtn = document.querySelector(".remove-all-marks"),
  delAllWordsBtn = document.querySelector(".delete-all-tasks"),
  delDoneWordsBtn = document.querySelector(".delete-checked-tasks"),
  restoreBtn = document.querySelector(".restore-all-deleted-tasks");

export const category = document.querySelector("#category-select"),
  part = document.querySelector("#part-select"),
  level = document.querySelector("#level-select"),
  type = document.querySelector("#type-select");

export const categoryFind = document.querySelector("#category-find"),
  partFind = document.querySelector("#part-find"),
  levelFind = document.querySelector("#level-find"),
  typeFind = document.querySelector("#type-find");

export const actionFind = document.querySelector("#action-find");

export const numberOfPage = document.querySelector("#numberOfPage"),
  pageControl = document.querySelector(".pageControl");

export const examplesBox = document.querySelector(".examples-box");

export let words = JSON.parse(localStorage.getItem("words")) ?? [],
  checkWords = JSON.parse(localStorage.getItem("checkWords")) ?? [],
  delWords = JSON.parse(localStorage.getItem("delWords")) ?? [];

export const pageSize = 10;
export const pageIndex = { value: 1 };
