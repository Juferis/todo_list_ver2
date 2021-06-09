const listForm = document.getElementById("jsForm");
const input = document.getElementById("jsInput");
const ul = document.getElementById("jsUl");

function handleDelete(event) {
  event.preventDefault();
  const delBtn = event.target;
  const li = delBtn.parentNode;
  ul.removeChild(li);
  console.log("삭제완료");
}

function paintList(li, inputValue) {
  const span = document.createElement("span");
  const delBtn = document.createElement("button");
  span.innerText = `${inputValue}`;
  delBtn.innerText = "삭제";
  delBtn.id = "jsDelete";
  delBtn.addEventListener("click", handleDelete);
  li.appendChild(span);
  li.appendChild(delBtn);
}

function handleSubmit(event) {
  event.preventDefault();
  const inputValue = event.target.firstChild.value;
  const li = document.createElement("li");
  ul.appendChild(li);
  paintList(li, inputValue);
}

function init() {
  listForm.addEventListener("submit", handleSubmit);
}
init();
