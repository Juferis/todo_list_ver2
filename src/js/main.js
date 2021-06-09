const addBtn = document.getElementById("jsBtn");
const listMain = document.getElementById("jsList");
const mainDiv = document.getElementById("mainDiv");

let divArr = [];
let formArr = [];
let listArr = [];

function createInput(form) {
  const input = document.createElement("input");
  const numId = listArr.length;
  input.placeholder = "Add a list";
  input.id = `jsInput_${numId}`;
  input.className = "list__input";
  input.type = "text";
  listArr.push(input);
  form.appendChild(input);
}

function createFormUl(div) {
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
  event.preventDefault();
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
