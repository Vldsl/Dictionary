import { sortWords } from "./utils";
import { list, pageIndex, pageSize, words } from "./vars";

// export function renderList() {
//   sortWords();
//   list.innerHTML = "";
//   const itemsHTML = words
//     .map((word, i) => {
//       const isExist = word.category || word.part || word.level || word.type;

//       return `
// 		<li
// 		class="list-group-item ${word.check ? "checked" : ""} ${
//         Date.now() - word.id <= 1 * 60 * 60 * 1000 ? "new-word" : ""
//       }"
// 		data-id="${word.id}"
// 		${
//       isExist
//         ? `data-filter = "${(
//             word.category +
//             " " +
//             word.part +
//             " " +
//             word.level +
//             " " +
//             word.type
//           ).trim()}"`
//         : ""
//     }
// 		>
// 		<div class="d-flex justify-content-between align-items-center">
// 				<span class="">${i + 1}</span>
// 				<div class="d-flex gap-3 align-items-center">
// 					<p class="original-text">${word.engHide ? "😊" : word.word1}</p>
// 					<button class=" btn hide hide-word1" data-action="hide hide-word1"><i class="fas ${
//             word.engHide ? "fa-eye" : "fa-eye-slash"
//           }"></i>${word.engHide ? "Show" : "Hide"}</button>
// 					<button class="btn edit edit-word1" data-action="edit edit-word1"><i class="fas fa-pencil-alt"></i>Edit</button>
// 				</div>
// 				<div class="d-flex gap-3 align-items-center">
// 					<p class="word2-word">${word.rusHide ? "😊" : word.word2}</p>
// 					<button class="btn hide hide-word2" data-action="hide hide-word2"><i class="fas ${
//             word.rusHide ? "fa-eye" : "fa-eye-slash"
//           }"></i>${word.rusHide ? "Show" : "Hide"}</button>
// 					<button class="btn edit edit-word2" data-action="edit edit-word2"><i class="fas fa-pencil-alt"></i>Edit</button>
// 				</div>
// 				<div>
// 					<i class="fas fa-star ${
//             word.level === "easy"
//               ? "text-success"
//               : word.level === "medium"
//               ? "text-warning"
//               : word.level === "hard"
//               ? "text-danger"
//               : ""
//           }"></i>
// 					<i class="fas fa-star ${
//             word.level === "medium"
//               ? "text-warning"
//               : word.level === "hard"
//               ? "text-danger"
//               : ""
//           }"></i>
// 					<i class="fas fa-star ${word.level === "hard" ? "text-danger" : ""}"></i>
// 					<button class="btn btn-primary" data-action="check">Отметить</button>
// 					<button class="btn btn-danger" data-action="delete">Удалить</button>
// 				</div>
// 			</div>
// 			<div class="word-info">

// 			</div>
// 		</li>
// `;
//     })
//     .join("");
//   list.insertAdjacentHTML("beforeend", itemsHTML);
// }

export function renderList() {
  console.log("renderList");
  sortWords();
  list.innerHTML = "";

  let start = (pageIndex.value - 1) * pageSize; // Начальное значение для цикла
  let end = start + pageSize; // Конечное значение для цикла

  for (let i = start; i < end; i++) {
    const word = words[i];
    if (!word) return;
    const isExist = word.category || word.part || word.level || word.type;
    const itemsHTML = `
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
						<p class="word1-text">${word.isWord1Hidden ? "😊" : word.word1}</p>
						<button class=" btn hide hide-word1" data-action="hide hide-word1"><i class="fas ${
              word.isWord1Hidden ? "fa-eye" : "fa-eye-slash"
            }"></i>${word.isWord1Hidden ? "Show" : "Hide"}</button>
						<button class="btn edit edit-word1" data-action="edit edit-word1"><i class="fas fa-pencil-alt"></i>Edit</button>
					</div>
					<div class="d-flex gap-3 align-items-center">
						<p class="word2-text">${word.isWord2Hidden ? "😊" : word.word2}</p>
						<button class="btn hide hide-word2" data-action="hide hide-word2"><i class="fas ${
              word.isWord2Hidden ? "fa-eye" : "fa-eye-slash"
            }"></i>${word.isWord2Hidden ? "Show" : "Hide"}</button>
						<button class="btn edit edit-word2" data-action="edit edit-word2"><i class="fas fa-pencil-alt"></i>Edit</button>
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
				<button class="more-link">More...</button>
				</div>
			</li>
	`;
    // word-info стоит добавлять через условие, чтобы данная секция была лишь у тех слов, у которых есть доп информация
    list.insertAdjacentHTML("beforeend", itemsHTML);
  }
}
