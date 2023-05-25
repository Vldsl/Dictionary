//========================================================================================================================================================
//========================================================================================================================================================
//========================================================================================================================================================

//========================================================================================================================================================
// Version-4
// function editWord(e) {
//   if (!e.target.matches(".edit")) return;
//   const { parentNode } = e.target.closest(".list-group-item");
//   const { id } = parentNode.dataset;
//   const eng = parentNode.querySelector(".eng-word");
//   const rus = parentNode.querySelector(".rus-word");

//   if (e.target.dataset.action === "edit-eng") {
//     eng.contentEditable = "true";
//     eng.focus();

//     eng.addEventListener("keydown", (e) => {
//       if (e.keyCode === 13) {
//         e.preventDefault();
//         eng.blur();
//       }
//     });
//   }

//   if (e.target.dataset.action === "edit-rus") {
//     rus.contentEditable = "true";
//     rus.focus();

//     rus.addEventListener("keydown", (e) => {
//       if (e.keyCode === 13) {
//         e.preventDefault();
//         rus.blur();
//       }
//     });
//   }

//   function handleBlur(event, newText, property) {
//     const { parentNode } = event.target;
//     const { id } = parentNode.dataset;
//     const wrd = words.find((word) => word.id === id);
//     if (!parentNode || !id || !wrd || !newText) return;

//     const newWordText = newText.trim();
//     if (newWordText === "") {
//       // Если новое значение пустое, удаляем todo элемент
//       // Здесь можно написать функцию удаления todo элемента
//       return;
//     }

//     const prevText = wrd[property];
//     if (newWordText !== prevText) {
//       wrd[property] = newWordText;
//       saveToLS();
//     }

//     event.target.contentEditable = "false";
//   }

//   eng.addEventListener("blur", (e) => {
//     handleBlur(e, eng.innerText, "eng");
//   });

//   rus.addEventListener("blur", (e) => {
//     handleBlur(e, rus.innerText, "rus");
//   });
// }

//========================================================================================================================================================
// Version-3
// function editWord (e) {
// 	if (!e.target.matches('.edit')) return;
// 	console.log('edit')
// 	const parentNode =  e.target.closest('.list-group-item');
// 	const id = Number(parentNode.dataset.id);

// 	if (!parentNode || !id) return;
// 	const eng = parentNode.querySelector('.eng-word');
// 	const rus = parentNode.querySelector('.rus-word');

// 	let prevEngText = eng.innerText;
// 	let prevRusText = rus.innerText;

// 	function handleEngBlur() {
// 		const newEngText = eng.innerText.trim();

// 		if (newEngText === '') {
// 			// Если новое значение пустое, удаляем todo элемент
// 			// Здесь можно написать функцию удаления todo элемента
// 			return;
// 		}

// 		if (newEngText !== prevEngText) {
// 			// Если значение изменилось, сохраняем его
// 			// Здесь можно написать функцию сохранения изменений
// 			console.log(newEngText);
// 			words.find(word => word.id === id).eng = newEngText;
// 			saveToLS();
// 		}

// 		eng.contentEditable = 'false';
// 		prevEngText = '';
// 		eng.removeEventListener('blur', handleEngBlur);
// 	}

// 	function handleRusBlur() {
// 		const newRusText = rus.innerText.trim();

// 		if (newRusText === '') {
// 			// Если новое значение пустое, удаляем todo элемент
// 			// Здесь можно написать функцию удаления todo элемента
// 			return;
// 		}

// 		if (newRusText !== prevRusText) {
// 			// Если значение изменилось, сохраняем его
// 			// Здесь можно написать функцию сохранения изменений
// 			console.log(newRusText);
// 			words.find(word => word.id === id).rus = newRusText;
// 			saveToLS();
// 		}

// 		rus.contentEditable = 'false';
// 		prevRusText = '';
// 		rus.removeEventListener('blur', handleRusBlur);
// 	}

// 	if (e.target.dataset.action === 'edit-eng') {
// 		eng.contentEditable = 'true';
// 		eng.focus();

// 		eng.addEventListener('keydown', (e) => {
// 			if (e.keyCode === 13) {
// 				e.preventDefault();
// 				eng.blur();
// 			}
// 		});

// 		eng.addEventListener('blur', handleEngBlur);
// 	}

// 	if (e.target.dataset.action === 'edit-rus') {
// 		rus.contentEditable = 'true';
// 		rus.focus();

// 		rus.addEventListener('keydown', (e) => {
// 			if (e.keyCode === 13) {
// 				e.preventDefault();
// 				rus.blur();
// 			}
// 		});

// 		rus.addEventListener('blur', handleRusBlur);
// 	}

// 	// eng.contentEditable = 'false';
// }

//========================================================================================================================================================
// Version-2

// function editWord(e) {
//   // console.log("Function start");
//   if (!e.target.matches(".edit")) return;
//   const parentNode = e.target.closest(".list-group-item");
//   const id = Number(parentNode.dataset.id);

//   if (!parentNode || !id) return;
//   const eng = parentNode.querySelector(".eng-word");
//   const rus = parentNode.querySelector(".rus-word");

//   if (e.target.dataset.action === "edit-eng") {
//     // let prevEngText = eng.innerText;
//     // console.log("edit-eng");
//     eng.contentEditable = "true";
//     eng.focus();

//     eng.addEventListener("keydown", (e) => {
//       if (e.keyCode === 13) {
//         e.preventDefault();
//         eng.blur();
//       }
//     });
//   }

//   if (e.target.dataset.action === "edit-rus") {
//     // console.log("edit-rus");
//     // let prevRusText = rus.innerText;
//     rus.contentEditable = "true";
//     rus.focus();

//     rus.addEventListener("keydown", (e) => {
//       if (e.keyCode === 13) {
//         e.preventDefault();
//         rus.blur();
//       }
//     });
//   }

//   // Обработчик события blur вынесен за пределы функции
//   function handleBlur(event, newText, property) {
//     // console.log(property, " Blur start");
//     const newWordText = newText.trim();

//     if (newWordText === "") {
//       // Если новое значение пустое, удаляем todo элемент
//       // Здесь можно написать функцию удаления todo элемента
//       return;
//     }

//     // Может лучше обойдись без создания prevText, а просто сравнивать с текстом в массиве

//     // if (newWordText !== prevText) {
//       // Если значение изменилось, сохраняем его
//       // Здесь можно написать функцию сохранения изменений
//       // console.log(prevText);
//       // console.log(newWordText);
//       const wrd = words.find((word) => word.id === id);
//       if (wrd[property] !== newWordText) {
//         wrd[property] = newWordText
//         saveToLS();
//       }
//       // prevText = "";
//     // }

//     event.target.contentEditable = "false";
//   }

//   eng.addEventListener("blur", (e) => {
//     handleBlur(e, eng.innerText, "eng");
//   });

//   rus.addEventListener("blur", (e) => {
//     handleBlur(e, rus.innerText, "rus");
//   });

//   // eng.contentEditable = "false"; // Ошибка?
// }

//========================================================================================================================================================
// Version-1
// function editWord (e) {
// 	console.log('Function start');
// 	if (!e.target.matches('.edit')) return;
// 	const parentNode =  e.target.closest('.list-group-item');
// 	const id = Number(parentNode.dataset.id);

// 	if (!parentNode || !id) return;
// 	const eng = parentNode.querySelector('.eng-word');
// 	const rus = parentNode.querySelector('.rus-word');

// 	if (e.target.dataset.action === 'edit-eng') {
// 		let prevEngText = eng.innerText;
// 		console.log('edit-eng');
// 		eng.contentEditable = 'true';
// 		eng.focus();

// 		eng.addEventListener('keydown', (e) => {
// 			if (e.keyCode === 13) {
// 				e.preventDefault();
// 				eng.blur();
// 			}
// 		});

// 		eng.addEventListener('blur', () => {
// 			const newEngText = eng.innerText.trim();

// 			if (newEngText === '') {
// 				// Если новое значение пустое, удаляем todo элемент
// 				// Здесь можно написать функцию удаления todo элемента
// 				return;
// 			}

// 			if (newEngText !== prevEngText) {
// 				// Если значение изменилось, сохраняем его
// 				// Здесь можно написать функцию сохранения изменений
// 				console.log(newEngText);
// 				words.find(word => word.id === id).eng = newEngText;
// 				saveToLS();
// 				prevEngText = '';
// 			}

// 			eng.contentEditable = 'false';
// 		});
// 	}

// 	if (e.target.dataset.action === 'edit-rus') {
// 		console.log('edit-rus')
// 		let prevRusText = rus.innerText;
// 		rus.contentEditable = 'true';
// 		rus.focus();

// 		rus.addEventListener('keydown', (e) => {
// 			if (e.keyCode === 13) {
// 				e.preventDefault();
// 				rus.blur();
// 			}
// 		});

// 		rus.addEventListener('blur', () => {
// 			console.log('Blur start');
// 			const newRusText = rus.innerText.trim();

// 			if (newRusText === '') {
// 				// Если новое значение пустое, удаляем todo элемент
// 				// Здесь можно написать функцию удаления todo элемента
// 				return;
// 			}

// 			if (newRusText !== prevRusText) {
// 				// Если значение изменилось, сохраняем его
// 				// Здесь можно написать функцию сохранения изменений
// 				console.log(prevRusText);
// 				console.log(newRusText);
// 				words.find(word => word.id === id).rus = newRusText;
// 				saveToLS();
// 				prevRusText = '';
// 			}

// 			rus.contentEditable = 'false';
// 		});
// 	}

// 	eng.contentEditable = 'false';
// }

//========================================================================================================================================================
