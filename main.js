// makes splash screen dynamic
const splash = document.querySelector(".splash");

document.addEventListener("DOMContentLoaded", (e) => {
  setTimeout(() => {
    splash.classList.add("display-none");
  }, 1500);
});

// variables for targeting DOM elements
let addToDoButton = document.getElementById("addToDo");
let addToDoContainer = document.getElementById("toDoContainer");
let inputField = document.getElementById("input_field");
let addButton = document.createElement("button");

// function for appending data into "To Do List"
function createTask() {
  let paragraph = document.createElement("p");
  paragraph.innerText = inputField.value;
  addButton.innerText = "+";
  paragraph.appendChild(addButton);
  addToDoContainer.appendChild(paragraph);
  createSubTask();
}

function createSubTask() {
  var paragraph = document.createElement("p");
  var itemInput = document.createElement("input");
  var itemLi = document.createElement("ol");

  paragraph.appendChild(itemInput);
  paragraph.appendChild(itemLi);
  addToDoContainer.appendChild(paragraph);

  addButton.addEventListener("click", function () {
    var listItem = document.createElement("li");
    itemLi.appendChild(listItem);
    listItem.innerText = itemInput.value;
    itemInput.value = "";
  });
}

function removeInput() {
  paragraph.addEventListener("dblclick", function () {
    addToDoContainer.removeChild(paragraph);
  });
}

function strikeThrough() {
  paragraph.addEventListener("click", function () {
    paragraph.style.textDecoration = "line-through";
  });
}

// appends data on "Enter" key
inputField.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    createTask();
    inputField.value = "";
  }
});

// appends data on button click
addToDoButton.addEventListener("click", function () {
  createTask();
  inputField.value = "";
});
