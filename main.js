// Javascript for todo-list

const completedElement = document.querySelector("#completedElement");
const inputTodo = document.querySelector("#inputTodo");
const addTodoBtn = document.querySelector("#AddTodoBtn");
const infoTextElement = document.querySelector("small");
const todoList = document.querySelector("#todoList");
let todoText = "";
let completed = 0;
const allTheTodos = [];
const todos = [];
const todo = {};

addTodoBtn.addEventListener("click", addTodo);

function changeStatus(todoText, completedStatus){

    let findIndex = allTheTodos.map(t => t.name).indexOf(todoText);
    allTheTodos[findIndex].completed = completedStatus;


}



function addTodo() {
    // Things that will happen when clicking button
    infoTextElement.textContent = "";
    todoText = inputTodo.value;

    // avoid empty todos
    if (todoText.length == 0) {
        infoTextElement.textContent = "Du måste skriva något!";
        return;

    }
    // add the todo to the todo-array
    const todoObject = {name: todoText, completed: false}
    allTheTodos.push(todoObject);

    const item = document.createElement('li');
    todoList.appendChild(item);

    const itemText = document.createElement('span');
    itemText.innerText = todoText;

    // add eventlistener to span with text
    itemText.addEventListener("click",
        function () {
            if (itemText.classList.contains("completed")) {
                itemText.setAttribute('class', "");
                completed--;
                completedElement.textContent = "Du har " + completed + " som är klara."
                changeStatus(itemText.innerText, false)
            }

            else {
                itemText.setAttribute("class", "completed");
                completed++;
                completedElement.textContent = "Du har " + completed + " som är klara."
                changeStatus(itemText.innerText, true)

            }

        }
    )
    completedElement.textContent = "Du har " + completed + " som är klara."
    item.appendChild(itemText);


    // add trashcan to remove todo tasks
    const trashcan = document.createElement('span');
    trashcan.innerHTML = '&#x1F5D1;';
    trashcan.setAttribute('class', 'trashcan');
    item.appendChild(trashcan);

    trashcan.addEventListener('click', function () {
        item.remove();
        let removeText = item.firstChild.textContent;
        let indexToRemove = allTheTodos.map(t => t.name).indexOf(removeText);
        allTheTodos.splice(indexToRemove, 1);
    }
    )


    // add to Array
    const todo = {name: text, status: false}
    todos.push(todo);
    console.log(todos);

    // methods for array
    const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
    let index = fruits.indexOf("Apple");

    const numbers = [4, 9, 16, 25];
    const newArr = numbers.map(Math.sqrt)

    let removeText = item.firstChild.firstChild.textContent
    let indexToRemove = todos.map(t => t.name).indexOf(removeText);
    todos.splice(indexToRemove, 1);

    


}
