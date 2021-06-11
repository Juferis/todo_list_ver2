const addBtn = document.getElementById("jsBtn");
const listMain = document.getElementById("jsList");
const mainDiv = document.getElementById("mainDiv");

let INPUT_VALUE = "";

let divArr = [];
let formArr = [];
let listArr = [];

function handleDelete(event) {
  event.preventDefault();
  const delBtn = event.target;
  const li = delBtn.parentNode;
  const ul = li.parentNode;
  ul.removeChild(li);
}

function paintList(parentDiv) {
  const ul = parentDiv.lastChild;
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
  INPUT_VALUE = event.target.querySelector("input").value;
  const parentDiv = event.target.parentNode;
  paintList(parentDiv);
}

function createInput(form) {
  // input 생성
  const input = document.createElement("input");
  const numId = listArr.length;
  input.placeholder = "Write a list";
  input.id = `jsInput_${numId}`;
  input.className = "list__input";
  input.type = "text";
  listArr.push(input);
  form.appendChild(input);
  form.addEventListener("submit", handleSubmit);
}

function createFormUl(div) {
  // form 생성
  const form = document.createElement("form");
  const ul = document.createElement("ul");
  const formId = formArr.length;
  formArr.push(form);
  form.id = `jsForm_${formId}`;
  form.className = "list__main__form";
  ul.id = "jsUl";
  ul.className = "list__main__ul";
  div.appendChild(form);
  div.appendChild(ul);
  createInput(form);
}

function handleClickAddBtn() {
  const div = document.createElement("div");
  const divNum = divArr.length;
  div.id = `jsDiv_${divNum}`;
  div.className = "list__main__div";
  divArr.push(div);
  mainDiv.appendChild(div);
  createFormUl(div);
}

function init() {
  addBtn.addEventListener("click", handleClickAddBtn);
}

init();
