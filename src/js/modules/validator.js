import { word1Input, words } from "./vars";

function isFloat(str) {
  if (typeof str !== "string") {
    return false;
  }

  const num = parseFloat(str);
  return !isNaN(num) && isFinite(num);
}

function hasSpecialCharacters(str) {
  const specialChars = [
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "_",
    "+",
    "-",
    "=",
    "[",
    "]",
    "{",
    "}",
    ";",
    ":",
    ",",
    ".",
    "/",
    "<",
    ">",
    "?",
    "|",
    "\\",
  ];
  for (let i = 0; i < specialChars.length; i++) {
    if (str.indexOf(specialChars[i]) !== -1) {
      return true;
    }
  }
  return false;
}

export const isValid = (str) => {
  // Валидатор нужно доделать, перестал работать код, который запрещал добавлять уже имеющееся слово в списке, и код который отвечает за длинну введённых символов
  console.log({
    isFloat: isFloat(str),
    hasSpecialCharacters: hasSpecialCharacters(str),
    isNotEmpty: str.length < 3,
    isExist: words.find(
      ({ word1 }) => word1.toLowerCase() === str.toLowerCase()
    ),
  });
  return {
    isFloat: isFloat(str),
    hasSpecialCharacters: hasSpecialCharacters(str),
    isNotEmpty: str.length < 3,
    isExist: words.find(
      ({ word1 }) =>
        word1.toLowerCase() === word1Input.value.trim().toLowerCase()
    ),
  };
};
