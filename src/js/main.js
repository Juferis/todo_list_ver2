const addBtn = document.getElementById("jsBtn");
const listMain = document.getElementById("jsList");

function handleClickAddBtn(event) {
  event.preventDefault();
  const li = document.createElement("li");
  li.innerText = "This is test";
  listMain.appendChild(li);
}

function init() {
  addBtn.addEventListener("click", handleClickAddBtn);
  console.log("실행됩니다");
}

init();
