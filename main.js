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

function strikeThrough() {
  paragraph.addEventListener("click", function () {
    paragraph.style.textDecoration = "line-through";
  });
}

// function for appending data into "To Do List"
function createTask() {
  let list = document.createElement("li");
  list.innerText = inputField.value;
  inputField.value = ""
  addButton.innerText = "+";
  list.appendChild(addButton);
  addToDoContainer.appendChild(list);
  list.addEventListener("dblclick", function () {
    addToDoContainer.removeChild(list,);
  });
  createSubTask();
  
}

function createSubTask() {
  let subTask = document.createElement("p");
  let itemInput = document.createElement("input");
  let itemLi = document.createElement("ol");
  subTask.appendChild(itemInput);
  subTask.appendChild(itemLi);
  addToDoContainer.appendChild(subTask);

  subTask.addEventListener("dblclick", function () {
    addToDoContainer.removeChild(subTask);
  });
  
  addButton.addEventListener("click", function () {
    let listItem = document.createElement("li");
    itemLi.appendChild(listItem);
    listItem.innerText = itemInput.value;
    
  });
  itemInput.addEventListener ("keypress",function (event){
    if (event.key==="Enter"){
      let listItem = document.createElement("li");
      itemLi.appendChild(listItem);
  listItem.innerText = itemInput.value;
  itemInput.value = "";

  subTask.addEventListener("click", function () {
    listItem.style.textDecoration = "line-through";
  });    
}
  })
}
function removeInput() {
   paragraph.addEventListener("dblclick", function () {
    addToDoContainer.removeChild(paragraph);
  });

}


// appends data on "Enter" key
inputField.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    createTask();
    
    
  
  }
});

// appends data on button click
addToDoButton.addEventListener("click", function () {
  createTask();
  inputField.value = "";
});