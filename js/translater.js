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



// Запушить на гитхаб
//========================================================================================================================================================
















//========================================================================================================================================================

const form = document.querySelector('#form'),
			engWord = document.querySelector('#eng'),
			rusWord = document.querySelector('#rus'),
			list = document.querySelector('#list'),
			wordCountElem = document.querySelector('#word-count'),
			searchInput = document.querySelector('#search-input');

const category = document.querySelector('#category-select'),
			part = document.querySelector('#part-select'),
			level = document.querySelector('#level-select'),
			type = document.querySelector('#type-select');

// Лучше потом через делегирование искать селекты, чтобы сократить код

const categoryFind = document.querySelector('#category-find'),
			partFind = document.querySelector('#part-find'),
			levelFind = document.querySelector('#level-find'),
			typeFind = document.querySelector('#type-find');

let words = JSON.parse(localStorage.getItem('words')) || [];
if (words.length) {
		renderList();
		updateWordCount();
}

form.addEventListener('submit', addWord);
list.addEventListener('click', removeWord);
list.addEventListener('click', checkWord);
list.addEventListener('click', editWord);
searchInput.addEventListener('input', searchWords);

categoryFind.addEventListener('input', filterWords);
partFind.addEventListener('input', filterWords);
levelFind.addEventListener('input', filterWords);
typeFind.addEventListener('input', filterWords);

checkEmptyList();
filterWords();

function addWord(e) {
		e.preventDefault();
		const eng = engWord.value.trim();
		const rus = rusWord.value.trim();
		if(
				eng.length < 1 ||
				rus.length < 1 ||
				isFloat(eng) ||
				isFloat(rus) ||
				hasSpecialCharacters(eng)||
				hasSpecialCharacters(rus)||
				words.find(word => word.eng.toLowerCase() === eng.toLowerCase())
		) {
				form.input.forEach(el => el.classList.add('error'));
				form.reset();
				engWord.focus();
				return;
		}
		form.input.forEach(el => el.classList.remove('error'));

		const newWord = {
				id: Date.now(),
				eng,
				rus,
				check: false,
				category: category.value.trim(),
				part: part.value.trim(),
				level: level.value.trim(),
				type: type.value.trim(),
		}
		words.push(newWord);
		words.sort((a, b) => a.eng.localeCompare(b.eng));
		renderList();
		saveToLS();

		form.reset();
		engWord.focus();

		checkEmptyList();
		updateWordCount();
}

function removeWord (e) {
	if (e.target.dataset.action !== 'delete') return;
	const parentNode = e.target.closest('.list-group-item');
	const id = Number(parentNode.dataset.id);
	if (!parentNode || !id) return;
	words = words.filter(word => word.id !== id);
	parentNode.remove()
	saveToLS();
	checkEmptyList();
	updateWordCount();
	renderList();
}

function checkWord (e) {
	if (e.target.dataset.action !== 'check') return
	const parentNode =  e.target.closest('.list-group-item');
	const id = Number(parentNode.dataset.id);

	if (!parentNode || !id) return;
	parentNode.classList.toggle('checked');
	const word = words.find(word => word.id === id);
	word.check = !word.check;
	renderList();
	saveToLS();
}

function renderList() {
	sortWords();
	list.innerHTML = '';
	const itemsHTML = words.map((word, i) => {
		const isExist = word.category || word.part || word.level || word.type;

		return `
		<li 
    class="list-group-item d-flex justify-content-between align-items-center ${word.check ? 'checked' : ''} ${Date.now() - word.id <= 1 * 60 * 60 * 1000 ? 'new-word' : ''}"
    data-id="${word.id}"
    ${isExist ? `data-filter = "${(word.category + ' ' + word.part + ' ' + word.level + ' ' + word.type).trim()}"` : ''}
>
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
			<i class="fas fa-star ${word.level === 'easy' ? 'text-success' : word.level === 'medium' ? 'text-warning' : word.level === 'hard' ? 'text-danger' : ''}"></i>
			<i class="fas fa-star ${word.level === 'medium' ? 'text-warning' : word.level === 'hard' ? 'text-danger' : ''}"></i>
			<i class="fas fa-star ${word.level === 'hard' ? 'text-danger' : ''}"></i>
      <button class="btn btn-primary" data-action="check">Отметить</button>
      <button class="btn btn-danger" data-action="delete">Удалить</button>
    </div>
</li>
`
	}).join('');
	list.insertAdjacentHTML('beforeend', itemsHTML);
}

function sortWords() {
	let activeWord = words.filter(word => word.check === false);
	let deactiveWord = words.filter(word => word.check === true);
	activeWord.sort((a, b) => a.eng.localeCompare(b.eng));
	deactiveWord.sort((a, b) => a.eng.localeCompare(b.eng));

	words = [...activeWord, ...deactiveWord];
}

function checkEmptyList() {
	if (words.length === 0) list.insertAdjacentHTML('afterbegin', `
				<li class='list-group-item' id='empty-list'>
					<p class='ps-6 m-auto'>Список слов пуст</p>
				</li>`);
	else document.querySelector('#empty-list')?.remove();
}

function searchWords() {
	const listItems = list.querySelectorAll('.list-group-item');
	 listItems.forEach(item => {
		const engTitle = item.querySelector('.eng-word').textContent.toLowerCase();
		const isMatch = engTitle.includes(searchInput.value.trim().toLowerCase());

		if (!isMatch) item.classList.add('d-none');
		else item.classList.remove('d-none');
	 })
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

  const selected = [categoryValue, partValue, levelValue, typeValue].filter(Boolean);
  const listItems = list.querySelectorAll('.list-group-item');

  listItems.forEach(item => {
    if (!selected.length) {
      item.classList.remove('d-none');
      return;
    }

    const dataAttribute = item.dataset.filter;
    if (!dataAttribute) {
      item.classList.add('d-none')
      return;
    } 

    const values = dataAttribute.split(' ');
    if (!selected.every(item => values.includes(item))) {
      item.classList.add('d-none');
    } else {
      item.classList.remove('d-none');
    }
  });
}

function saveToLS() {
	try {
		localStorage.setItem('words', JSON.stringify(words));
	} catch(e) {
		alert('Ошибка сохранения данных в локальное хранилище: ' + e.message)
	}
}
		
function isFloat(str) {
	if (typeof str !== 'string') {
		return false;
	}

	const num = parseFloat(str);
	return !isNaN(num) && isFinite(num);
}
		
function hasSpecialCharacters(str) {
	const specialChars = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '-', '=', '[', ']', '{', '}', ';', ':', ',', '.', '/', '<', '>', '?', '|', '\\'];
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

//========================================================================================================================================================

// const form = document.querySelector('#form'),
// 		engWord = document.querySelector('#eng'),
// 		rusWord = document.querySelector('#rus'),
// 		list = document.querySelector('#list'),
// 		wordCountElem = document.querySelector('#word-count'),
// 		searchInput = document.querySelector('#searchInput');
// let words = JSON.parse(localStorage.getItem('words')) || [];
// if (words.length > 0) {
// 	words.sort((a, b) => a.eng.localeCompare(b.eng));
// 	renderList();
// 	updateWordCount();
// }

// form.addEventListener('submit', addItem);
// list.addEventListener('click', deleteItem);
// searchInput.addEventListener('input', searchWords);

// checkEmptyList();

// function addItem(e) {
// 	const eng = engWord.value.trim();
// 	const rus = rusWord.value.trim();
// 	e.preventDefault();
// 	if (
// 		eng.length < 1 ||
// 		rus.length < 1 ||
// 		isFloat(eng) ||
// 		isFloat(rus) ||
// 		hasSpecialCharacters(eng) ||
// 		hasSpecialCharacters(rus) ||
// 		words.find(el => el.eng.toLowerCase() === eng.toLowerCase())
// 	) {
// 		form.input.forEach(el => el.classList.add('error'))
// 		form.reset();
// 		return;
// 	}
// 	form.input.forEach(el => el.classList.remove('error'))

// 	const newWord = {
// 		id: Date.now(),
// 		eng,
// 		rus,
// 	}

// 	words.push(newWord);
// 	words.sort((a, b) => a.eng.localeCompare(b.eng));
// 	renderList();
// 	saveToLS();

// 	form.reset();
// 	engWord.focus();

// 	checkEmptyList();
// 	updateWordCount();
// }

// function deleteItem(e) {
// 	if (e.target.dataset.action !== 'delete') return
// 	const parentNode = e.target.closest('.list-group-item');
// 	const id = Number(parentNode.dataset.id);
// 	if (!parentNode || !id) return
// 	words = words.filter(el => el.id !== id);
// 	parentNode.remove();
// 	saveToLS();
// 	checkEmptyList();
// 	updateWordCount();
// }

// function renderList() {
// 	list.innerHTML = '';
// 	const itemsHTML = words.map((word, i) => `
// 		<li class="list-group-item d-flex justify-content-between align-items-center" data-id="${word.id}">
// 			<span class="eng-word">${word.eng}</span>
// 			<span class="rus-word">${word.rus}</span>
// 			<div>
// 				<button class="btn btn-danger btn-delete" data-id="${i}" data-action="delete">Удалить</button>
// 			</div>
// 		</li>`).join('');
// 	list.insertAdjacentHTML('beforeend', itemsHTML);
// }

// function checkEmptyList() {
// 	if (words.length === 0) list.insertAdjacentHTML('afterbegin', ` 
// 			<li class='list-group-item' id='empty-list'>
// 				<p class='ps-6 m-auto'>Список слов пуст</p>
// 			</li>`);
// 	 else list.querySelector('#empty-list')?.remove();
// }

// function searchWords() {
// 	const listItems = list.querySelectorAll('.list-group-item');
// 	listItems.forEach(item => {
// 		const engTitle = item.querySelector('.eng-word').textContent.toLowerCase();
// 		const isMatch = engTitle.includes(searchInput.value.trim().toLowerCase());

// 		if (!isMatch) item.classList.add('d-none');
// 		else item.classList.remove('d-none');
// 	})
// }

// function saveToLS() {
// 	try {
// 		localStorage.setItem('words', JSON.stringify(words));
// 	} catch(e) {
// 		alert('Ошибка сохранения данных в локальное хранилище: ' + e.message)
// 	}
// }

// function isFloat(str) {
// 	if (typeof str !== 'string') {
// 		return false;
// 	}

// 	const num = parseFloat(str);
// 	return !isNaN(num) && isFinite(num);
// }

// function hasSpecialCharacters(str) {
// 	const specialChars = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '-', '=', '[', ']', '{', '}', ';', ':', ',', '.', '/', '<', '>', '?', '|', '\\'];
// 	for (let i = 0; i < specialChars.length; i++) {
// 		if (str.indexOf(specialChars[i]) !== -1) {
// 			return true;
// 		}
// 	}
// 	return false;
// }

// function updateWordCount() {
// 	wordCountElem.textContent = words.length;
// }

//========================================================================================================================================================

// const form = document.querySelector('#form'),
// 		engWord = document.querySelector('#eng'),
// 		rusWord = document.querySelector('#rus'),
// 		list = document.querySelector('#list'),
// 		wordCountElem = document.querySelector('#word-count'),
// 		searchInput = document.querySelector('#searchInput');
// let words = JSON.parse(localStorage.getItem('words')) || [];
// if (words.length > 0) {
// 	words.sort((a, b) => a.eng.localeCompare(b.eng));
// 	renderList();
// 	updateWordCount();
// };

// checkEmptyList();
// updateWordCount();

// form.addEventListener('submit', addItem);
// list.addEventListener('click', deleteItem);
// searchInput.addEventListener('input', searchWords)

// function addItem(e) {
// 	e.preventDefault();
// 	if (
// 		engWord.value.trim().length < 1 ||
// 		rusWord.value.trim().length < 1 ||
// 		isFloat(engWord.value.trim()) ||
// 		isFloat(rusWord.value.trim()) ||
// 		hasSpecialCharacters(engWord.value.trim()) ||
// 		hasSpecialCharacters(rusWord.value.trim()) ||
// 		words.find(el => el.eng.toLowerCase() === engWord.value.trim().toLowerCase())
// 	) {
// 		form.input.forEach(el => {
// 			el.classList.add('error');
// 			el.value = '';
// 		})
// 		return;
// 	}
// 	form.input.forEach(el => el.classList.remove('error'));

// 	const newItem = {
// 		id: Date.now(),
// 		eng: engWord.value.trim(),
// 		rus: rusWord.value.trim()
// 	}
// 	words.push(newItem);
// 	words.sort((a, b) => a.eng.localeCompare(b.eng));
// 	renderList();
// 	saveToLS();

// 	form.reset();
// 	engWord.focus();

// 	checkEmptyList();
// 	updateWordCount();
// }

// function deleteItem (e) {
// 	if (e.target.dataset.action !== 'delete') return;
// 	const parentNode = e.target.closest('.list-group-item');
// 	const id = Number(parentNode.getAttribute('data-id'));
// 	if (!parentNode || !id) return;

// 	words = words.filter(el => el.id !== id);
// 	parentNode.remove();
// 	saveToLS();
// 	checkEmptyList();
// 	updateWordCount();
// }

// function renderList () {
// 	list.innerHTML = '';
// 	itemsHTML = words.map((el, i) => `
// 		<li class="list-group-item d-flex justify-content-between align-items-center" data-id="${el.id}">
// 			<span class="eng-word">${el.eng}</span>
// 			<span class="rus-word">${el.rus}</span>
// 			<div>
// 				<button class="btn btn-danger btn-delete" data-id="${i}" data-action="delete">Удалить</button>
// 			</div>
// 		</li>`).join('');
// 	list.insertAdjacentHTML('beforeend', itemsHTML);
// }

// function checkEmptyList() {
// 	if (words.length === 0) {
// 		list.insertAdjacentHTML('afterbegin', `
// 			<li id="empty-list" class="list-group-item">
// 				<p class="fs-4 m-auto">Список слов пуст</p>
// 			</li>`);
// 	} else {
// 		list.querySelector('#empty-list')?.remove();
// 	}
// }

// function searchWords () {
// 	const listItems = list.querySelectorAll('.list-group-item');

// 	listItems.forEach(el => {
// 		const engTitle = el.querySelector('.eng-word').textContent.toLowerCase();
// 		const isMatch = engTitle.includes(searchInput.value.trim().toLowerCase())

// 		if (!isMatch) el.classList.add('d-none')
// 		else el.classList.remove('d-none');
// 	})
// }

// function isFloat(str) {
//   if (typeof str !== 'string') {
//     return false;
//   }

//   const num = parseFloat(str);

//   return !isNaN(num) && isFinite(num);
// }

// function hasSpecialCharacters(str) {
//   const specialChars = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '-', '=', '[', ']', '{', '}', ';', ':', ',', '.', '/', '<', '>', '?', '|', '\\'];
//   for (let i = 0; i < specialChars.length; i++) {
//     if (str.indexOf(specialChars[i]) !== -1) {
//       return true;
//     }
//   }
//   return false;
// }

// function updateWordCount() {
// 	wordCountElem.textContent = words.length;
// }

// function saveToLS() {
// 	try {
// 		localStorage.setItem("words", JSON.stringify(words));
// 	} catch (e) {
// 		alert("Ошибка сохранения данных в локальное хранилище: " + e.message);
// 	}
// }

//========================================================================================================================================================

// const form = document.querySelector('#form'),
// 		engWord = document.querySelector('#eng'),
// 		rusWord = document.querySelector('#rus'),
// 		list = document.querySelector('#list'),
// 		wordCountElem = document.querySelector('#word-count');
// let words = JSON.parse(localStorage.getItem('words')) || [];
// if(words.length > 0) renderList();

// checkEmptyList();
// updateWordCount();

// form.addEventListener('submit', addItem);
// list.addEventListener('click', deleteItem);

// const saveToLS = () => localStorage.setItem('words', JSON.stringify(words));

// function addItem(e) {
// 	e.preventDefault();
// 	if(
// 		engWord.value.trim().length < 1 ||
// 		rusWord.value.trim().length < 1 ||
// 		isFloat(engWord.value.trim()) ||
// 		isFloat(rusWord.value.trim()) ||
// 		hasSpecialCharacters(engWord.value.trim()) ||
// 		hasSpecialCharacters(rusWord.value.trim()) ||
// 		words.find(el => el.eng.toLowerCase() === engWord.value.trim().toLowerCase())
// 	) {
// 		form.input.forEach(el => {
// 			el.classList.add('error')
// 			el.value = '';
// 		})
// 		return;
// 	}
// 	const newItem = {
// 		id: Date.now(),
// 		eng: engWord.value.trim(),
// 		rus: rusWord.value.trim(),
// 	}
// 	form.input.forEach(el => el.classList.remove('error'));

// 	words.push(newItem);
// 	renderItem(newItem);
// 	saveToLS();

// 	form.reset();
// 	engWord.focus();

// 	checkEmptyList();
// 	updateWordCount();
// }

// function renderList() {
//   const itemsHTML = words.map((el, i) => `
//     <li class="list-group-item d-flex justify-content-between align-items-center" data-id="${el.id}">
// 	  <span class="eng-word">${el.eng}</span>
// 	  <span class="rus-word">${el.rus}</span>
// 	  <div>
// 	    <button class="btn btn-danger btn-delete" data-id="${i}" data-action="delete">Удалить</button>
// 	  </div>
// 	</li>
//   `).join('');
//   list.insertAdjacentHTML('beforeend', itemsHTML);
// }

// function renderItem(item) {
//   list.insertAdjacentHTML('beforeend', `
//     <li class="list-group-item d-flex justify-content-between align-items-center" data-id="${item.id}">
//       <span class="eng-word">${item.eng}</span>
//       <span class="rus-word">${item.rus}</span>
//       <div>
//         <button class="btn btn-danger btn-delete" data-id="${words.length - 1}" data-action="delete">Удалить</button>
//       </div>
// 	</li>
//   `);
// }

// function deleteItem (e) {
// 	if (e.target.dataset.action !==  'delete') return
// 	const parentNode = e.target.closest('.list-group-item');
// 	const id = Number(parentNode.dataset.id);
// 	if (!parentNode || !id) return

// 	words = words.filter(el => el.id !== id);
// 	parentNode.remove()
// 	saveToLS();

// 	checkEmptyList();
// 	updateWordCount()
// }

// function checkEmptyList() {
// 	if (words.length === 0) {
// 		list.insertAdjacentHTML('afterbegin', `
// 			<li id="empty-list">
// 				<h1>Список слов пуст</h1>
// 			</li>
// 		`);
// 	} else {
// 		document.querySelector('#empty-list')?.remove();
// 	}
// }

// function isFloat(str) {
//   if (typeof str !== 'string') {
//     return false;
//   }

//   const num = parseFloat(str);

//   return !isNaN(num) && isFinite(num);
// }

// function hasSpecialCharacters(str) {
//   const specialChars = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '-', '=', '[', ']', '{', '}', ';', ':', ',', '.', '/', '<', '>', '?', '|', '\\'];
//   for (let i = 0; i < specialChars.length; i++) {
//     if (str.indexOf(specialChars[i]) !== -1) {
//       return true;
//     }
//   }
//   return false;
// }

// function updateWordCount() {
// 	wordCountElem.textContent = words.length;
// }

//========================================================================================================================================================

// const form = document.querySelector('#form'),
// 		engWord = document.querySelector('#eng'),
// 		rusWord = document.querySelector('#rus'),
// 		list = document.querySelector('#list');

// let words = JSON.parse(localStorage.getItem('words')) || [];
// if (words.length > 0) words.forEach((el, i) => renderItem(i));

// checkEmptyList()

// form.addEventListener('submit', addItem);
// list.addEventListener('click', removeItem);

// const saveToLS = () => localStorage.setItem('words', JSON.stringify(words));

// function addItem (e) {
// 	e.preventDefault();
// 	if (
// 		engWord.value.length < 1 ||
// 		rusWord.value.length < 1 ||
// 		!isNaN(engWord.value) ||
// 		!isNaN(rusWord.value)
// 	) {
// 		form.input.forEach(el => el.classList.add('error'))
// 	} else {
// 		const newItem = {
// 			id: Date.now(),
// 			eng: engWord.value,
// 			rus: rusWord.value,
// 			done: false,
// 		}
// 		form.input.forEach(el => el.classList.remove('error'))
// 		words.push(newItem)
// 		renderItem(words.length-1)
// 		saveToLS()

// 		form.input.forEach(el => el.value = '');
// 		engWord.focus();

// 		checkEmptyList()
// 	}
// }

// function removeItem (e) {
//   if (e.target.dataset.action !== 'delete') return;

//   const id = parseInt(e.target.closest('.list-item').dataset.id, 10);
//   words = words.filter(word => word.id !== id);
//   saveToLS();
//   e.target.closest('.list-item').remove();
//   checkEmptyList();
// }

// function renderItem(i) {
//   if (document.getElementById(words[i].id)) return; // вместо этой проверки добавить проверку на значение

//   list.insertAdjacentHTML('beforeend', `
//     <li class="list-item" data-id="${words[i].id}">
//       <p class="eng-word">${words[i].eng}</p>
//       <p class="rus-word">${words[i].rus}</p>
//       <button class="btn-delete" data-id="${i}" data-action="delete">Удалить</button>
//       <button class="btn" data-id="${i}" data-action="done">Выполнить</button>
//     </li>`);
// }

// function checkEmptyList() {
//   words.length === 0
//     ? list.insertAdjacentHTML('afterbegin', `
//         <li id="empty-list">
//           <h1>Список слов пуст</h1>
//         </li>
//       `)
//     : document.querySelector('#empty-list')?.remove();
// }

//========================================================================================================================================================

// const form = document.querySelector('#form'),
// 		engWord = document.querySelector('#eng'),
// 		rusWord = document.querySelector('#rus'),
// 		list = document.querySelector('#list');

// let words = JSON.parse(localStorage.getItem('words')) || [];
// if (words.length > 0) words.forEach((el, i) => renderItem(i));

// checkEmptyList()

// form.addEventListener('submit', addItem);
// list.addEventListener('click', removeItem);

// const saveToLS = () => localStorage.setItem('words', JSON.stringify(words));

// function addItem (e) {
// 	e.preventDefault();
// 	if (
// 		engWord.value.length < 1 ||
// 		rusWord.value.length < 1 ||
// 		!isNaN(engWord.value) ||
// 		!isNaN(rusWord.value)
// 	) {
// 		form.input.forEach(el => el.classList.add('error'))
// 	} else {
// 		const newItem = {
// 			id: Date.now(),
// 			eng: engWord.value,
// 			rus: rusWord.value,
// 			done: false,
// 		}
// 		form.input.forEach(el => el.classList.remove('error'))
// 		words.push(newItem)
// 		renderItem(words.length-1)
// 		saveToLS()

// 		form.input.forEach(el => el.value = '');
// 		engWord.focus();

// 		checkEmptyList()
// 	}
// }

// function removeItem (e) {
// 	if (e.target.dataset.action !== 'delete') return

// 	const parentNode = e.target.closest('.list-item');
// 	const id = Number(parentNode.id);

// 	words = words.filter(word => word.id !== id);

// 	saveToLS();
// 	parentNode.remove();

// 	checkEmptyList()
// }

// function renderItem(i) { list.innerHTML += `
// 	<li id = '${words[i].id}' class = 'list-item'>
// 		<p class = "eng-word">${words[i].eng}</p>
// 		<p class = "rus-word">${words[i].rus}</p>
// 		<button class = "btn-delete" data-id = '${i}' data-action = 'delete'>Удалить</button>
// 		<button class = "btn" data-id = '${i}' data-action = 'done'>Выполнить</button>
// 	</li>
// 	`};

// function checkEmptyList() {
// 	if (words.length === 0) {
// 		const emptyListHTML = `
// 			<li id = "empty-list">
//     		  <h1>
//     		    Список слов пуст
//     		  </h1>
//     		</li>
// 		`;
// 		list.insertAdjacentHTML('afterbegin', emptyListHTML);
// 	}
// 	if (words.length > 0) {
// 		const emptyListEl = document.querySelector('#empty-list');
// 		emptyListEl ? emptyListEl.remove() : null;
// 	}
// }

//========================================================================================================================================================

// const form = document.querySelector('#form'),
// 		list = document.querySelector('#list'),
// 		engWord = document.querySelector('#eng'),
// 		rusWord = document.querySelector('#rus'),
// 		emptyList = document.querySelector('#empty-list');

// let words = JSON.parse(localStorage.getItem('words')) || [];
// words.forEach((el, i) => addWordToTable(i));

// checkEmptyList();

// form.addEventListener('submit', addItem);
// list.addEventListener('click', deleteItem );

// class CreateWord {
// 	constructor (eng, rus) {
// 		id: Date.now(),
// 		eng,
// 		rus;
// 	}
// }

// function addWordToTable(i) {
// 	list.innerHTML += `
// 	<li>
// 		<p class = "eng-word">${words[i].english}</p>
// 		<p class = "rus-word">${words[i].russian}</p>
// 		<button class = "btn-delete" data-id = '${i}' data-action = 'delete'>Удалить</button>
// 		<button class = "btn" data-id = '${i}' data-action = 'done'>Выполнить</button>
// 	</li>
// 	`;
// } 

// function addItem (e) {
// 	e.preventDefault();
// 	if (
// 		engWord.value.length < 1 ||
// 		rusWord.value.length < 1 ||
// 		!isNaN(engWord.value) ||
// 		!isNaN(rusWord.value)
// 	) {
// 		form.input.forEach(el => el.classList.add('error'));
// 	} else {
// 		form.input.forEach(el => el.classList.remove('error'));
// 		words.push(new CreateWord(engWord.value, rusWord.value));
// 		saveToLS();
// 		addWordToTable(words.length-1);

// 		form.input.forEach(el => el.value = '');
// 		engWord.focus();

// 		checkEmptyList();
// 	}
// }

// function deleteItem (e) {
// 	if (e.target.className !== 'btn-delete') return

// 	const parentNode = e.target.closest('li');
// 	const id = Number(parentNode.id);

// 	words = words.filter(word => word.id !== id)
// 	saveToLS();
// 	parentNode.remove();

// 	checkEmptyList();
// }

// function checkEmptyList() {
// 	if (words.length === 0) {
// 		emptyList.classList.remove('none');
// 	}

// 	if (words.length > 0) {
// 		emptyList.classList.add('none');
// 		emptyList.classList.add('sdafosdfj');
// 		list.classList.add('fadsfsdfawerf');
// 	}
// }

// function saveToLS () {
// 	localStorage.setItem('words', JSON.stringify(words))
// }

//========================================================================================================================================================

// const form = document.querySelector('#form'),
// 		list = document.querySelector('#list'),
// 		engWord = document.querySelector('#eng'),
// 		rusWord = document.querySelector('#rus');

// let words = JSON.parse(localStorage.getItem('words')) || [];

// const addWordToTable = i => list.innerHTML+=`
// 	<tr class = "tr">
// 		<td class = "eng-word">${words[i].eng}</td>
// 		<td class = "rus-word">${words[i].rus}</td>
// 		<td>
// 			<button class = "btn-delete" data-id = '${i}'>Удалить</button>
// 		</td>
// 	</tr>
// `;

// words.forEach((el, i) => addWordToTable(i));

// class CreateWord {
// 	constructor(eng, rus) {
// 		eng,
// 		rus;
// 	}
// };

// form.addEventListener('submit', e => {
// 		e.preventDefault();
// 		if (
// 			engWord.value.length < 1 ||
// 			rusWord.value.length < 1 ||
// 			!isNaN(engWord.value) ||
// 			!isNaN(rusWord.value)
// 		) {
// 			form.input.forEach(el => el.classList.add('error'));
// 		} else {
// 			form.input.forEach(el => el.classList.remove('error'));

// 			words.push(new CreateWord(engWord.value, rusWord.value));
// 			localStorage.setItem('words', JSON.stringify(words));
// 			addWordToTable(words.length-1)
// 			form.input.forEach(el => el.value = '');
// 			engWord.focus();
// 		}
// });

// const deleteWord = (el, i) => {
// 	el.closest('tr').remove();
// 	words.splice(i, 1);
// 	localStorage.removeItem('words');
// 	localStorage.setItem('words', JSON.stringify(words));
// }

// const addEventDelete = () => {
// 	if (words.length > 0) {
// 		list.addEventListener('click', e => {
// 			if (e.target.className == 'btn-delete') {
// 				deleteWord(e.target, e.target.dataset.id)
// 			}
// 		})
// 	}
// }

// addEventDelete();

//========================================================================================================================================================

// const form = document.querySelector('.inputs-form'),
// 		engWord = document.querySelector('#eng'),
// 		rusWord = document.querySelector('#rus'),
// 		table = document.querySelector('#table'),
// 		inputs = document.querySelectorAll('.input');

// let words = JSON.parse(localStorage.getItem('words')) || [];

// const addWordToTable = index => table.innerHTML += `
// 	<tr class = "tr">
// 		<td class = "eng-word">${words[index].english}</td>
// 		<td class = "rus-word">${words[index].russian}</td>
// 		<td>
// 			<button class = "btn-delete" data-id='${index}'>Удалить</button>
// 		</td>
// 	</tr>
// `;

// words.forEach((el, i) => addWordToTable(i));

// class CreateWord {
// 	constructor(english, russian) {
// 		this.english = english;
// 		this.russian = russian;
// 	}
// }

// form.addEventListener('submit', e => {
// 	e.preventDefault();
// 	if(
// 		engWord.value.length < 1 ||
// 		rusWord.value.length < 1 ||
// 		!isNaN(engWord.value) ||
// 		!isNaN(rusWord.value)
// 	) {
// 		inputs.forEach((el) => el.classList.add('error'));
// 	} else {
// 		inputs.forEach((el) => el.classList.remove('error'));

// 		words.push(new CreateWord(engWord.value, rusWord.value));
// 		localStorage.setItem('words', JSON.stringify(words));
// 		addWordToTable(words.length-1);
// 		engWord.value = '';
// 		rusWord.value = '';
// 		engWord.focus();
// 	}
// });

// const deleteWord = (el, i) => {
// 		el.closest('tr').remove();
// 		words.splice(i, 1);
// 		localStorage.removeItem('words');
// 		localStorage.setItem('words', JSON.stringify(words));
// }

// const addEventDelete = () => {
// 	if (words.length > 0) {
// 		table.addEventListener('click', e => {
// 			if (e.target.className == 'btn-delete') {
// 				deleteWord(e.target, e.target.dataset.id)
// 			}
// 		})
// 	}
// }

// addEventDelete();

//========================================================================================================================================================
// const engWord = document.querySelector('#eng'),
// 		rusWord = document.querySelector('#rus'),
// 		form = document.querySelector('.inputs-form'),
// 		table = document.querySelector('#table'),
// 		inputs = document.querySelectorAll('.input');

// let words = JSON.parse(localStorage.getItem('words')) || [];

// class CreateWord {
// 	constructor(russian, english) {
// 		this.english = english;
// 		this.russian = russian;
// 	}
// }

// function addWordToTable(index) table.innerHTML += `
// 		<tr class = "tr">
// 			<td class = "eng-word" name = 'item'>${words[index].english}</td>
// 			<td class = "rus-word" name = 'item'>${words[index].russian}</td>
// 			<td>
// 				<button class = "btn-delete" data-id='${index}'>Удалить</button>
// 			</td>
// 		</tr>
// 	`;

// words.forEach((el, i) => addWordToTable(i))

// form.addEventListener('submit', function(e) {
// 	e.preventDefault();
// 	if (
// 		engWord.value.length < 1 ||
// 		rusWord.value.length < 1 ||
// 		!isNaN(engWord.value) ||
// 		!isNaN(rusWord.value)
// 	) {
// 		inputs.forEach(item => item.classList.add('error'));
// 	} else {
// 		inputs.forEach(item => item.classList.remove('error'));

// 		words.push(new CreateWord(engWord.value, rusWord.value));
// 		localStorage.setItem('words', JSON.stringify(words));
// 		addWordToTable(words.length-1);
// 		engWord.value = null;
// 		rusWord.value = null;
// 	}
// })

// const deleteWord = (el, i) => {
// 	el.closest('tr').remove();
// 	words.splice(i, 1);
// 	localStorage.removeItem('words');
// 	localStorage.setItem('words', JSON.stringify(words));
// }

// const addEventDelete = () => {
// 	if (words.length > 0) {
// 		table.addEventListener('click', e => {
// 			if(e.target.className == 'btn-delete') {
// 				deleteWord(e.target, e.target.dataset.id)
// 			}
// 		})
// 	}
// }

// addEventDelete();
//========================================================================================================================================================

// // Функционал
// // Добавлять новые слова
// // Алгоритм
// // 1.После ввода текста в поля добавлять их в словарь
// // Д
// //

// // План Действий
// // 1. Выбрать все элементы которые участвуют в работе приложения
// // Создать слова
// // Добавить их в нужные места
// // Записывать слова в локальные хранилище браузера
// // 2. После заполнения всех инпутов
// // 3. Нажать на кнопку добавить слово
// // 4. Потом с помощью конструктора создается пара слов которое превращается в объект
// // Нужно отлавливать событие отправить и полсе этого проверять пустые ли поля


// Функции которые мне понадобятся

// Ввожу текс
// Нажимаю кнопку добавить
// === Нужен слушатеть событий для отправки формы
// === Нужно сделать валидатор, чтобы не получать пустые строки или цифры
// === Мне нужно получить те данные которые я ввожу в поле
// Данные записать в масив объекта
// === Для массива объекта нужно создать конструктор по созданию объектов  ---  конструктор
// Потом эти данные записать из масива в html констркукцию и записать и вывести их на страницу
//

// Добавляется новый элемент в таблицу нижу

// const inputForm = document.querySelector('.inputs-form'),
//   engWord = document.querySelector('#eng'),
//   rusWord = document.querySelector('#rus'),
//   table = document.querySelector('#table'),
//   inputs = document.querySelectorAll('.input');

// inputForm.addEventListener('submit')

//========================================================================================================================================================

// const inputsForm = document.querySelector('.inputs-form'),
// 		engWord = document.querySelector('#eng'),
// 		rusWord = document.querySelector('#rus'),
// 		inputs = document.querySelectorAll('.input'),
// 		table = document.querySelector('#table');

// let words;
// let btnsDelete;

// localStorage.length < 1 ? words = [] : words = JSON.parse(localStorage.getItem('words'));

// class CreateWord {
// 	constructor(russian, english) {
// 		this.english = english;
// 		this.russian = russian;
// 	}
// }

// function addWordToTable(index) {
// 	table.innerHTML += `
// 		<tr class = "tr">
// 			<td class = "eng-word">${words[index].english}</td>
// 			<td class = "rus-word">${words[index].russian}</td>
// 			<td>
// 				<button class = "btn-delete">Удалить</button>
// 			</td>
// 		</tr>
// 	`
// }

// inputsForm.addEventListener('submit', function(e) {
// 	e.preventDefault();
// 	if (
// 		engWord.value.length < 1 ||
// 		rusWord.value.length < 1 ||
// 		!isNaN(engWord.value) ||
// 		!isNaN(rusWord.value)
// 	) {
// 		for(input of inputs) {
// 			input.classList.add('error');
// 		}
// 	} else {
// 		for(input of inputs) {
// 			input.classList.remove('error');
// 		}
// 		words.push(new CreateWord(engWord.value, rusWord.value));
// 		addWordToTable(words.length - 1);
// 	}
// })

// function deleteWord(e, index) {
// 	e.target.parentNode.parentNode.remove();
// 	words.splice(index, 1);
// 	localStorage.removeItem('words');
// 	localStorage.setItem('words', JSON.stringify(words));
// 	// Выбрать нужный элемент из всех
// 	// Удалить его
// 	// Удалить его из массива
// }

// function addEventDelete() {
// 	if(words.length > 0) {
// 		btnsDelete = document.querySelectorAll('.btn-delete');
// 		btnsDelete.forEach((item, index) => {
// 			item.addEventListener('click', function(e) {
// 				deleteWord(e, index);
// 			})
// 		})
// 	}
// }

// addEventDelete();

//========================================================================================================================================================

// // const engWord = document.querySelector('#eng'),
// // 		rusWord = document.querySelector('#rus'),
// // 		inputs = document.querySelectorAll('.input'),
// // 		inputForm = document.querySelector('.inputs-form'),
// // 		table = document.querySelector('#table');

// // let words;
// // let btnsDelete;

// // localStorage.length < 1 ? words = [] : words = JSON.parse(localStorage.getItem('words'));

// // const addWordToTable = index => {
// // 	table.innerHTML += `
// // 		<tr class = "tr">
// // 			<td class = "eng-word">${words[index].english}</td>
// // 			<td class = "rus-word">${words[index].russian}</td>
// // 			<td>
// // 				<button class = "btn-delete">Удалить</button>
// // 			</td>
// // 		</tr>
// // 	`
// // }

// // words.forEach((element, i) => {
// // 	addWordToTable(i);
// // });

// // inputForm.addEventListener('submit', (e) => {
// // 	e.preventDefault();
// // 	if (
// // 		engWord.value.length < 1 ||
// // 		rusWord.value.length < 1 ||
// // 		!isNaN(engWord.value) ||
// // 		!isNaN(rusWord.value)
// // 		) {
// // 			for (let input of inputs) {
// // 				input.classList.add('error');
// // 			}
// // 		} else {
// // 			for (let input of inputs) {
// // 				input.classList.remove('error');
// // 			}
// // 			words.push(new CreateWord(engWord.value, rusWord.value));
// // 			localStorage.setItem('words', JSON.stringify(words));
// // 			addWordToTable(words.length - 1);
// // 			engWord.value = null;
// // 			rusWord.value = null;
// // 		}
// // });

// // function CreateWord(english, russian) {
// // 	this.english = english;
// // 	this.russian = russian;
// // }

// // const deleteWord = e => {
// // 	const rowIndex = e.target.parentNode.parentNode.rowIndex;
// // 	e.target.parentNode.parentNode.parentNode.remove();
// // 	words.splice(rowIndex, 1);
// // 	localStorage.removeItem('words');
// // 	localStorage.setItem('words', JSON.stringify(words));
// // }

// // const addEventDelete = () => {
// // 	if(words.length > 0) {
// // 		btnsDelete = document.querySelectorAll('.btn-delete');
// // 		for (let btn of btnsDelete) {
// // 			btn.addEventListener('click', e => {
// // 				deleteWord(e);
// // 			})
// // 		}
// // 	}
// // }

// // addEventDelete();
