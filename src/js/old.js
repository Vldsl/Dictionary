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
