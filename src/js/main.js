const addBtn = document.getElementById("jsBtn");
const listMain = document.getElementById("jsList");
const form = document.getElementById("jsForm");

function handleClickAddBtn(event) {
  event.preventDefault();
  const input = document.createElement("input");
  input.placeholder = "Add a list";
  input.id = "jsInput";
  input.class = "list__input";
  input.type = "text";
  form.appendChild(input);
}

function init() {
  addBtn.addEventListener("click", handleClickAddBtn);
}

init();
