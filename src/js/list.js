const listForm = document.getElementById("jsForm");
const ul = document.getElementById("jsUl");

let INPUT_VALUE = "";

function handleDelete(event) {
  event.preventDefault();
  const delBtn = event.target;
  const li = delBtn.parentNode;
  ul.removeChild(li);
}

function paintList() {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const delBtn = document.createElement("button");
  ul.appendChild(li);
  span.innerText = `${INPUT_VALUE}`;
  delBtn.innerText = "삭제";
  delBtn.id = "jsDelete";
  delBtn.addEventListener("click", handleDelete);
  li.appendChild(span);
  li.appendChild(delBtn);
}

function handleSubmit(event) {
  event.preventDefault();
  console.log(event.targer);
  INPUT_VALUE = event.target.querySelector("input").value;
  paintList();
}

function init() {
  listForm.addEventListener("submit", handleSubmit);
}
init();
