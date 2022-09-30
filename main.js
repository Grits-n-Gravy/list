// makes splash screen dynamic
const splash = document.querySelector('.splash');

document.addEventListener('DOMContentLoaded', (e)=>{
    setTimeout(()=>{
        splash.classList.add('display-none');
    },1500)
})

// variables for targeting DOM elements
let addToDoButton = document.getElementById("addToDo")
let addToDoContainer = document.getElementById("toDoContainer")
let inputField = document.getElementById("input_field")
let tasks = document.getElementById("toDoContainer")
const mkOl = document.createElement("ol")
const mkLi = document.createElement("li")



// function for appending data into "To Do List"
function addInput(){
    var paragraph = document.createElement('p');
    var itemInput =document.createElement('input');
    itemInput.type= 'text'
    var itemLi = document.createElement('ol')
    var addButton = document.createElement('button');
    addButton.innerText = "+";
    paragraph.classList.add('paragraphStyling');
    paragraph.innerText = inputField.value;
    paragraph.appendChild(addButton)
    paragraph.appendChild(itemInput)
    paragraph.appendChild (itemLi)
    addToDoContainer.appendChild(paragraph)
    paragraph.addEventListener('click',function(){
        paragraph.style.textDecoration = 'line-through';
    })
    addButton.addEventListener('click',function(){
        var listItem = document.createElement('li')
        itemLi.appendChild(listItem)
        listItem.innerText= itemInput.value;
        itemInput.value = ""

    })
    

    paragraph.addEventListener('dblclick',function(){
        addToDoContainer.removeChild(paragraph)
        
    })
}

// appends data on "Enter" key
inputField.addEventListener("keypress", function(event){
    if(event.key==="Enter"){
    addInput();
    inputField.value= "";
    }   
    
})

// appends data on button click
addToDoButton.addEventListener("click",function(){
    addInput();
    inputField.value= "";
    
})
