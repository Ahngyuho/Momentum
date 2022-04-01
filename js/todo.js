const toDoForm = document.getElementById("todo-form");
//const toDoList = document.querySelector("#todo-list");
const toDoList = document.getElementById("todo-list");
//toDoForm안에 input이 있으므로 이 값에 접근
const toDoInput = toDoForm.querySelector("input");
const TODOS_KEY = "todos";

//내가 만든 것
//let toDos = JSON.parse(localStorage.getItem(TODOS_KEY));

let toDos = []

console.log(toDoForm);
console.log(toDoList);
console.log(toDoInput);
function handleToDoSubmit(event){
    event.preventDefault();
    console.log(toDoInput.value);
    const newTodo = toDoInput.value;    //비우기 전에 값 저장
    toDoInput.value=""; //입력한 값을 지우기 위함 새로고침을 막아놨기 때문에
    //이렇게 해줘야 함
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos();
}

function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    
}

function paintToDo(newTodo){
    //console.log("i will paing",newTodo);
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText="X";
    button.addEventListener("click",deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}
//button.addEventListener("click",);
toDoForm.addEventListener("submit",handleToDoSubmit);

function sayHello(event){
    console.log(event);
}

const savedToDos = localStorage.getItem(TODOS_KEY);
//이제 이 가져온 string들을 array로 만들것임 
//값이 없을 경우가 있으므로
//savedToDos !== null
if(savedToDos){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}