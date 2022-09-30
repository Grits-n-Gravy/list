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

// function for appending data into "To Do List"
function createTask() {
  let paragraph = document.createElement("p");
  paragraph.innerText = inputField.value;
  addToDoContainer.appendChild(paragraph);
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
    addInput();
    inputField.value = "";
  }
});

// appends data on button click
addToDoButton.addEventListener("click", function () {
  addInput();
  inputField.value = "";
});
