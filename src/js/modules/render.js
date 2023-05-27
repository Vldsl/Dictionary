import { sortWords } from "./utils";
import { list, words } from "./vars";

export function renderList() {
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
					<p class="eng-word">${word.engHide ? "😊" : word.eng}</p>
					<button class="hide hide-eng" data-action="hide hide-eng"><i class="fas ${
            word.engHide ? "fa-eye" : "fa-eye-slash"
          }"></i>${word.engHide ? "Show" : "Hide"}</button>
					<button class="edit edit-eng" data-action="edit edit-eng"><i class="fas fa-pencil-alt"></i>Edit</button>
				</div>
				<div class="d-flex gap-3 align-items-center">
					<p class="rus-word">${word.rusHide ? "😊" : word.rus}</p>
					<button class="hide hide-rus" data-action="hide hide-rus"><i class="fas ${
            word.rusHide ? "fa-eye" : "fa-eye-slash"
          }"></i>${word.rusHide ? "Show" : "Hide"}</button>
					<button class="edit edit-rus" data-action="edit edit-rus"><i class="fas fa-pencil-alt"></i>Edit</button>
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
