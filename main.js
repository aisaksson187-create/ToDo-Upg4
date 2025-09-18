// Javascript for todo-list


const completedElement = document.querySelector("#completedElement");
const inputTodo = document.querySelector("#inputTodo");
const addTodoBtn = document.querySelector("#AddTodoBtn");
const infoTextElement = document.querySelector("small");
const todoList = document.querySelector("#todoList");
let todoText = "";
let completed = 0;
const allTheTodos = [];


addTodoBtn.addEventListener("click", addTodo);

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
    allTheTodos.push(todoText);

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

            }

            else {
                itemText.setAttribute("class", "completed");
                completed++;
                completedElement.textContent = "Du har " + completed + " som är klara."

            }

        }
    )
    completedElement.textContent = "Du har " + completed + " som är klara."
    item.appendChild(itemText);


}
