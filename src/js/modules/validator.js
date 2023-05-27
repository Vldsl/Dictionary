export function isFloat(str) {
  if (typeof str !== "string") {
    return false;
  }

  const num = parseFloat(str);
  return !isNaN(num) && isFinite(num);
}

export function hasSpecialCharacters(str) {
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

function validator(str) {}
