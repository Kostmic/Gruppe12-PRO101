// Select the elements
const toDoList = document.getElementById("toDoList");
const toDoItems = document.getElementById("toDo");
const doing = document.getElementById("doing");
const doneItems = document.getElementById("done");
const input = document.getElementById("input");
const containers = document.querySelectorAll(".container");

for(const container of containers) {
    container.addEventListener("dragover", dragOver);
    container.addEventListener("dragenter", dragEnter);
    container.addEventListener("dragleave", dragLeave);
    container.addEventListener("drop", dragDrop);
}

// Variables
let LIST, id;

// get item from localstorage
let data = localStorage.getItem("TODO");

// Check if data is not empty
if (data) {
    LIST = JSON.parse(data);
    id = LIST.length; // Set the id to the last one in the list
    loadList(LIST); // Load the list to the user interface
} else {
    // If data is empty
    LIST = [];
    id = 0;
};

// Load items to the user's interface
function loadList(array) {
    array.forEach(function(item) {
        addToDo(item.name, item.id, item.trash);
    });
};

// Adding to-do function
function addToDo(toDo, id, trash) {
    
    if (trash) { return; }

    const item = '<div class="item" draggable="true" id="' + id + '"><p class="text">'+ toDo +'</p><i class="fa fa-trash-o de" job="delete" id="'+ id +'"></i></div>';

    const position ="beforeEnd";

    
        toDoList.insertAdjacentHTML(position, item);
};

input.addEventListener("keyup", event => {
    if (event.keyCode == 13){
        const toDo = input.value;
        // Check if input is empty
        if (toDo) {
            addToDo(toDo, id, false);

            LIST.push({
                name: toDo,
                id: id,
                trash : false,
            });

            // Add item to localstorage ( this code mustbe addedd where the LIST array is updated)
            localStorage.setItem("TODO", JSON.stringify(LIST));

            id ++;

        }
        input.value = "";
    }
});

// Remove to do
function removeToDo(element) {
    element.parentNode.parentNode.removeChild(element.parentNode);

    LIST[element.id].trash = true;
};

// Target the items created dynamically

toDoItems.addEventListener("click", function(event){
    const element = event.target; // Return the clicked element inside list
    const elementJob = element.attributes.job.value; // Delete
    
    if (elementJob == "delete"){
        removeToDo(element);
    }

    // Add item to localstorage ( this code mustbe addedd where the LIST array is updated)
    localStorage.setItem("TODO", JSON.stringify(LIST));
});

doing.addEventListener("click", function(event){
    const element = event.target; // Return the clicked element inside list
    const elementJob = element.attributes.job.value; // Delete
    
    if (elementJob == "delete"){
        removeToDo(element);
    }

    // Add item to localstorage ( this code mustbe addedd where the LIST array is updated)
    localStorage.setItem("TODO", JSON.stringify(LIST));
});

doneItems.addEventListener("click", function(event){
    const element = event.target; // Return the clicked element inside list
    const elementJob = element.attributes.job.value; // Delete
    
    if (elementJob == "delete") {
        removeToDo(element);
    }

    // Add item to localstorage ( this code mustbe addedd where the LIST array is updated)
    localStorage.setItem("TODO", JSON.stringify(LIST));
});

let currentItem;
// Drag & Drop
function dragStart() {
    const item = event.target;
    setTimeout(() => item.className = "invisible", 0);
    return currentItem = item;
}

function dragEnd() {
    const item = event.target;
    item.className = "item";
}

toDoList.addEventListener("dragstart", function(event){
    dragStart();
})
   
toDoList.addEventListener("dragstart", function(event) {
    const item = event.target;
    
    dragStart();
})

toDoList.addEventListener("dragend", function(event) {
    const item = event.target;
    
    dragEnd();
})

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
}

function dragLeave() {
    
}

function dragDrop() {
    currentItem.className = "item";
    this.append(currentItem);
}