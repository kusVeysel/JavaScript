//? TodoList Projesi

const form = document.querySelector("#todoAddForm");
const addInput = document.querySelector("#todoName");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const clearButton = document.querySelector("#clearButton");
const filterInput = document.querySelector("#todoSearch");
let todos = [];


function runEvents() {
    form.addEventListener("submit", addTodo);
    document.addEventListener("DOMContentLoaded", pageLoaded);
    secondCardBody.addEventListener("click", removeTodoToUI);
    clearButton.addEventListener("click", allTodosDeleteFromEveryWhere);
    filterInput.addEventListener("keyup",filter);
}

function pageLoaded() {
    checkTodosFromStroge();
    todos.forEach((todo) => {
        addTodoToUI(todo);
    })
}

function filter(e) {
    const filterValue = e.target.value.toLowerCase().trim();
    const todoListesi = document.querySelectorAll(".list-group-item");

    if(todoListesi.length > 0){
        todoListesi.forEach((todo)=>{
            if(todo.textContent.toLowerCase().trim().includes(filterValue)){
                todo.setAttribute("style","display:block");
            }
            else{
                todo.setAttribute("style","display:none !important");
            }
        })
    }
    else{
        showAlert("warning","Filtreleme yapmak için en az 1 todo olmalıdır");
    }

}

function allTodosDeleteFromEveryWhere() {
    const todoListesi = document.querySelectorAll(".list-group-item");
    if (todoListesi.length > 0) {
        todoListesi.forEach((todo) => {
            todo.remove();
        })
        todos = [];
        localStorage.setItem("todos", JSON.stringify(todos));
        showAlert("success", "Todolar başarıyla silindi");
    }
    else {
        showAlert("warning", "Silmek için En Az 1 Todo Olmalıdır");
    }

}

function removeTodoToUI(e) {
    if (e.target.className === "fa fa-remove") {
        const todo = e.target.parentElement.parentElement;
        todo.remove();

        removeTodoToStroge(todo.textContent);

        showAlert("success", "Todo Başarıyla Silindi");
    }
}

function removeTodoToStroge(removeTodo) {
    checkTodosFromStroge();
    todos.forEach((todo, index) => {
        if (removeTodo === todo) {
            todos.splice(index, 1);
        }
    })
    localStorage.setItem("todos", JSON.stringify(todos));
}


function addTodo(e) {
    const inputText = addInput.value.trim();

    if (inputText == null || inputText === "") {
        showAlert("warning", "Lütfen boş bırakmayınız");
    }
    else {
        addTodoToUI(inputText);
        addTodoToStroge(inputText);
        showAlert("success", "Todo Eklendi");
    }

    e.preventDefault(); //? Sayfanın yenilenmesini engeller    
}

function addTodoToUI(newTodo) {
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between";
    li.textContent = newTodo;

    const a = document.createElement("a");
    a.href = "#";
    a.className = "delete-item";

    const i = document.createElement("i");
    i.className = "fa fa-remove"

    a.appendChild(i);
    li.appendChild(a);
    todoList.appendChild(li);

    addInput.value = "";
}

function addTodoToStroge(newTodo) {
    checkTodosFromStroge();
    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
}


function checkTodosFromStroge() {
    if (localStorage.getItem("todos") == null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
}

function showAlert(type, message) {
    const div = document.createElement("div");
    div.className = "alert alert-" + type;
    div.textContent = message;
    div.style.animation = "gorunurluk 2.5s linear";
    firstCardBody.appendChild(div);

    setTimeout(() => {
        div.remove();
    }, 2500);
}

runEvents();