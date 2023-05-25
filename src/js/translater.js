// Если подключить бэкенд к данному приложению, можно реализовать следующий функционал:

// 1.Сохранение списка задач на сервере, в базе данных или в файле на сервере
// 2.Авторизацию пользователей и привязку списка задач к каждому пользователю
// 3.Разделение списка задач на группы (например, личные, рабочие, учебные и т.д.)
// 4.Возможность отмечать задачи как выполненные и сохранять эту информацию на сервере
// 5.Возможность редактирования задач
// 6.Различные фильтры для просмотра списка задач (например, по дате, по группе, по статусу и т.д.)
// 7.Для реализации бэкенда могут быть использованы различные технологии, например, Node.js, PHP, Ruby on Rails и т.д. В зависимости от выбранной технологии и способа реализации функционала могут быть необходимы дополнительные знания и навыки программирования.

// Add a confirmation message before deleting a word:
// You can modify the removeItem() function to display a confirmation message before deleting a word.

// Add a limit to the number of words:
// You can add a limit to the number of words that can be added to the list, and display a message when the limit is reached.

// Добавить сортировку слов в алфавитном порядке. Это может помочь при поиске и упорядочивании списка.

// Добавить возможность сохранения списка слов в файл или экспорта в другие форматы, например CSV или Excel.

// Добавить возможность импорта списка слов из файла или другого источника данных.

// Добавить возможность обучения пользователя новым словам. Для этого можно использовать функционал повторения слов в определенные интервалы времени.

// Добавить возможность перевода слов на другие языки. Для этого можно использовать API переводчика или словаря.

// Добавить возможность озвучивания слов. Для этого можно использовать API синтеза речи.

// Добавить возможность использования приложения на разных языках. Для этого можно добавить локализацию и переводить интерфейс на другие языки.

// Звуковое произношение слова.
// Синонимы и антонимы слова.
// Иллюстрации или фотографии, чтобы проиллюстрировать слово.
// Примеры употребления слова в контексте, чтобы помочь понять его значение и использование.
// Фонетическая транскрипция слова для тех, кто учит язык.
// Информация о происхождении слова и его истории.
// Правила использования слова в грамматике.
// Информация о том, насколько часто используется слово в речи и письме, чтобы помочь определить, насколько важно знать это слово.
// Ссылки на другие ресурсы, которые могут помочь изучать слово и язык в целом.
// Возможность добавлять несколько переводов для одного слова.
// Возможность добавлять заметки или комментарии к словам.
// Разделение слов на категории или темы для более удобного поиска и изучения.
// Функцию генерации случайного слова из словаря для тренировки.
// Встроенный переводчик для быстрого перевода слов, не находящихся в словаре.
// Возможность добавления изображений или аудио-произношений для каждого слова.

//========================================================================================================================================================

// Можно добавить вывод сообщения об ошибке, когда введены цифры, спецсимволы или пустая строка. Вывод можно сделать как сообщение о пустом списке слов

// Если поле для ввода перевода пустое то добавлять перевод слова из API.
// Дбавить возможность раскрыть элемент со словом чтобы увидеть примеры полученные из API
// Может лучше добавить возможность нажимать на слово чтобы переходить страницу где есть вся информация о слове

// *** *** *** Можно добавить историю изученных слов

// Можно добавить фильтр для всего списка слов, например, можно отметить показывать только существительные или только слова из конкретной категории или слова из разговорного сленга и официальный.
// Окно с фильтром должно по умолчанию быть скрытым
// Блок с селектами может тоже по умолчанию скрыть и всем задать нейтральные значения по умолчанию
// А ещё можно добавить возможность каждое слово переопределить по категориям
// Добавить чекбокс для каждого слова вместо кнопки Check

// Добавить категории слов и возможность давать слову категорию

// Добавить вызов поиска по нажатию на иконку
// Новым словам добавлять класс который будет через время удаляться
// При наличии категорий у элемента добавлять ему соответствующте иконки или цвета или ещё что-то

// При добавлении слова и выбора категории для него, ниже рекомендовать категорию
// Нумеровать слова на странице
// Добавить подгрузку или постраничный вывод слов
// Создать функцию которая будет показывать ошибки. Уникальное сообщение об ошибки для каждой уникальной ошибки

// Добавить возможность выбирать несколько слов для удаления
// Добавить настройки для словаря: Тема, язык, время для чего-угодно
// Добавить минималистичный дизайн.

// Улучшить валидацию слова. Вынести её в отдельную функцию. Добавить валидацию на редактирование слов
// До редактирования нужно добавить проверку на то есть ли такое слово в списке
// Вынести в отдельную функцию проверку на уникальность английского слова

// Добавить возможность создавать свои категории
// Добавить возможность вставлять много слов но чтобы они потом все по одному вставились
// При наведении на звездочки подсвечиваются возможный варианты которые можно выбрать при клике
// Оптимизировать код, убрать лишнее, рефакторинг кода, убрать лишние процессы, возможно такие как перерисовка всех элементов для сортировки
//========================================================================================================================================================

//========================================================================================================================================================

import "./../scss/style.scss";

const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const form = document.querySelector("#form"),
  engWord = document.querySelector("#eng"),
  rusWord = document.querySelector("#rus"),
  list = document.querySelector("#list"),
  wordCountElem = document.querySelector("#word-count"),
  searchInput = document.querySelector("#search-input");

const category = document.querySelector("#category-select"),
  part = document.querySelector("#part-select"),
  level = document.querySelector("#level-select"),
  type = document.querySelector("#type-select");

// Лучше потом через делегирование искать селекты, чтобы сократить код

const categoryFind = document.querySelector("#category-find"),
  partFind = document.querySelector("#part-find"),
  levelFind = document.querySelector("#level-find"),
  typeFind = document.querySelector("#type-find");

let words = JSON.parse(localStorage.getItem("words")) || [];
if (words.length) {
  renderList();
  updateWordCount();
}

form.addEventListener("submit", addWord);
list.addEventListener("click", removeWord);
list.addEventListener("click", checkWord);
list.addEventListener("click", editWord);
searchInput.addEventListener("input", searchWords);

categoryFind.addEventListener("input", filterWords);
partFind.addEventListener("input", filterWords);
levelFind.addEventListener("input", filterWords);
typeFind.addEventListener("input", filterWords);

checkEmptyList();
filterWords();

function addWord(e) {
  e.preventDefault();
  const eng = engWord.value.trim();
  const rus = rusWord.value.trim();
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
    engWord.focus();
    return;
  }
  form.input.forEach((el) => el.classList.remove("error"));

  const newWord = {
    id: Date.now(),
    eng,
    rus,
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
  engWord.focus();

  checkEmptyList();
  updateWordCount();

  const dictionaryPromise = fetch(`${url}${newWord.eng.toLowerCase()}`);
  dictionaryPromise
    .then((response) => response.json())
    .then((word) => console.log(word));
}

function removeWord(e) {
  if (e.target.dataset.action !== "delete") return;
  const parentNode = e.target.closest(".list-group-item");
  const id = Number(parentNode.dataset.id);
  if (!parentNode || !id) return;
  words = words.filter((word) => word.id !== id);
  parentNode.remove();
  saveToLS();
  checkEmptyList();
  updateWordCount();
  renderList();
}

function checkWord(e) {
  if (e.target.dataset.action !== "check") return;
  const parentNode = e.target.closest(".list-group-item");
  const id = Number(parentNode.dataset.id);

  if (!parentNode || !id) return;
  parentNode.classList.toggle("checked");
  const word = words.find((word) => word.id === id);
  word.check = !word.check;
  renderList();
  saveToLS();
}

function renderList() {
  sortWords();
  list.innerHTML = "";
  const itemsHTML = words
    .map((word, i) => {
      const isExist = word.category || word.part || word.level || word.type;

      return `
		<li 
		class="list-group-item ${word.check ? "checked" : ""} ${
        Date.now() - word.id <= 1 * 60 * 60 * 1000 ? "new-word" : ""
      }"
		data-id="${word.id}"
		${
      isExist
        ? `data-filter = "${(
            word.category +
            " " +
            word.part +
            " " +
            word.level +
            " " +
            word.type
          ).trim()}"`
        : ""
    }
		>
		<div class="d-flex justify-content-between align-items-center">
				<span class="">${i + 1}</span>
				<div class="d-flex gap-3 align-items-center">
					<p class="eng-word">${word.eng}</p>
					<button class="edit" data-action="edit-eng"><i class="fas fa-pencil-alt"></i>Edit</button>
				</div>
				<div class="d-flex gap-3 align-items-center">
					<p class="rus-word">${word.rus}</p>
					<button class="edit" data-action="edit-rus"><i class="fas fa-pencil-alt"></i>Edit</button>
				</div>
				<div>
					<i class="fas fa-star ${
            word.level === "easy"
              ? "text-success"
              : word.level === "medium"
              ? "text-warning"
              : word.level === "hard"
              ? "text-danger"
              : ""
          }"></i>
					<i class="fas fa-star ${
            word.level === "medium"
              ? "text-warning"
              : word.level === "hard"
              ? "text-danger"
              : ""
          }"></i>
					<i class="fas fa-star ${word.level === "hard" ? "text-danger" : ""}"></i>
					<button class="btn btn-primary" data-action="check">Отметить</button>
					<button class="btn btn-danger" data-action="delete">Удалить</button>
				</div>
			</div>
			<div class="word-info">
			
			</div>
		</li>
`;
    })
    .join("");
  list.insertAdjacentHTML("beforeend", itemsHTML);
}

function sortWords() {
  let activeWord = words.filter((word) => word.check === false);
  let deactiveWord = words.filter((word) => word.check === true);
  activeWord.sort((a, b) => a.eng.localeCompare(b.eng));
  deactiveWord.sort((a, b) => a.eng.localeCompare(b.eng));

  words = [...activeWord, ...deactiveWord];
}

function checkEmptyList() {
  if (words.length === 0)
    list.insertAdjacentHTML(
      "afterbegin",
      `
				<li class='list-group-item' id='empty-list'>
					<p class='ps-6 m-auto'>Список слов пуст</p>
				</li>`
    );
  else document.querySelector("#empty-list")?.remove();
}

function searchWords() {
  const listItems = list.querySelectorAll(".list-group-item");
  listItems.forEach((item) => {
    const engTitle = item.querySelector(".eng-word").textContent.toLowerCase();
    const isMatch = engTitle.includes(searchInput.value.trim().toLowerCase());

    if (!isMatch) item.classList.add("d-none");
    else item.classList.remove("d-none");
  });
}

function editWord(e) {
  if (!e.target.matches(".edit")) return;
  const parentNode = e.target.closest(".list-group-item");
  const eng = parentNode.querySelector(".eng-word");
  const rus = parentNode.querySelector(".rus-word");

  if (e.target.dataset.action === "edit-eng") {
    eng.contentEditable = "true";
    // eng.focus();

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

  if (e.target.dataset.action === "edit-rus") {
    rus.contentEditable = "true";
    // rus.focus();
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
    const wrd = words.find((word) => word.id === id);
    if (!parentNode || !wrd || !newText) return;

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

    event.target.contentEditable = "false";
  }

  eng.addEventListener("blur", (e) => {
    handleBlur(e, eng.innerText, "eng", parentNode.dataset.id);
  });

  rus.addEventListener("blur", (e) => {
    handleBlur(e, rus.innerText, "rus", parentNode.dataset.id);
  });
}

function filterWords() {
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

function saveToLS() {
  try {
    localStorage.setItem("words", JSON.stringify(words));
  } catch (e) {
    alert("Ошибка сохранения данных в локальное хранилище: " + e.message);
  }
}

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

function updateWordCount() {
  wordCountElem.textContent = words.length;
}
