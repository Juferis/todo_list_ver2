const addBtn = document.getElementById("jsBtn");
const mainDiv = document.getElementById("mainDiv");

let INPUT_VALUE = "";
let NOW_DIV = "";
let NOW_UL = "";

let divArr = [];
let formArr = [];
let liArr = [];
let listArr = [];

var dataArr = [];

function loadList() { // 수정하기
  fetch("/", {
    method: "post",
    headers: {
      "content-type": "application/json",
    },
  }).then((res) => res.json()).then((json) => {
    console.log(json);
  });
}

function exportToServer() {
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "/");
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.send(JSON.stringify({dataArr}));
}

function saveData() {
  dataArr = [];
  for (i = 0; i < divArr.length; i++) {
    if(divArr[i].innerText !== "") {
      var text = divArr[i].innerText.replace(/(\r\n\t|\n|\r\t)/gm," ").replace(/ /g,",");
      var data = {
        id : divArr[i].id,
        text: text
      }
      dataArr.push(data);
    }
  }
  exportToServer();
}

function handleMove(li) {
  NOW_UL.appendChild(li);
  NOW_UL = "";
  div = li.parentNode.parentNode;
  text = li.querySelector("span").value;
  saveData();
}

function handleDragover(event) {
  // if(event.target.className == "ul__li") {
  //   var id = event.target.id;
  //   const li = document.getElementById(id);
  //   li.style.marginTop = '20px';
  // }
  if(event.target.className == "list__main__div dropzone"){
    const ul = event.target.lastChild;
    NOW_DIV = event.target.parentNode;
    NOW_UL = ul;
  } 
}

function handleDragend(event) {
  const li = event.target;
  const ul = li.parentNode;
  const lastDiv = ul.parentNode;
  if(lastDiv != NOW_DIV) {
    ul.removeChild(li);
    handleMove(li);
  }
}

function handleDelete(event) {
  event.preventDefault();
  const delBtn = event.target;
  const li = delBtn.parentNode;
  const ul = li.parentNode;
  ul.removeChild(li);
  saveData()
}

function handleDivDel(event) {
  number = event.target.value;
  div = document.getElementById(`jsDiv_${number}`);
  mainDiv.removeChild(div);
  mainDiv.removeChild(event.target);
  divArr.pop(div);
  saveData()
}

function paintList(parentDiv) {
  const ul = parentDiv.querySelector("ul");
  const li = document.createElement("li");
  const span = document.createElement("span");
  const delBtn = document.createElement("button");
  const liNum = liArr.length;
  li.draggable="true";
  li.className = "ul__li";
  li.id = `liId_${liNum}`;
  span.innerText = `${INPUT_VALUE}`;
  delBtn.innerText = "X";
  delBtn.id = "jsDelete";
  delBtn.addEventListener("click", handleDelete);
  li.appendChild(span);
  li.appendChild(delBtn);
  liArr.push(li);
  ul.appendChild(li);
  saveData();
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
  form.action = "/";
  form.method = "post";
  form.id = `jsForm_${formId}`;
  form.className = "list__main__form";
  formArr.push(form);
  ul.className = "list__main__ul";
  div.appendChild(form);
  div.appendChild(ul);
  createInput(form);
}

function handleClickAddBtn() {
  const div = document.createElement("div");
  const divDel = document.createElement("button");
  const divNum = divArr.length;
  div.id = `jsDiv_${divNum}`;
  div.className = "list__main__div";
  div.classList.add("dropzone");
  div.addEventListener("dragend", handleDragend);
  div.addEventListener("dragenter", handleDragover);
  divDel.innerText = "Delete";
  divDel.id = "jsDivDel";
  divDel.value = divNum;
  divDel.addEventListener("click", handleDivDel);
  divArr.push(div);
  mainDiv.appendChild(div);
  mainDiv.appendChild(divDel);
  createFormUl(div);
}

function init() {
  loadList();
  addBtn.addEventListener("click", handleClickAddBtn);
}

init();
