export const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

export const form = document.querySelector("#form"),
  sourceWord = document.querySelector("#eng"),
  translation = document.querySelector("#rus"),
  list = document.querySelector("#list"),
  wordCountElem = document.querySelector("#word-count"),
  searchInput = document.querySelector("#search-input");

export const category = document.querySelector("#category-select"),
  part = document.querySelector("#part-select"),
  level = document.querySelector("#level-select"),
  type = document.querySelector("#type-select");

// Лучше потом через делегирование искать селекты, чтобы сократить код

export const categoryFind = document.querySelector("#category-find"),
  partFind = document.querySelector("#part-find"),
  levelFind = document.querySelector("#level-find"),
  typeFind = document.querySelector("#type-find");

export const actionFind = document.querySelector("#action-find");

export let words = JSON.parse(localStorage.getItem("words")) || [];
