const toDoForm = document.getElementById("todo-form");
//const toDoList = document.querySelector("#todo-list");
const toDoList = document.getElementById("todo-list");
//toDoForm안에 input이 있으므로 이 값에 접근
const toDoInput = toDoForm.querySelector("input");
console.log(toDoForm);
console.log(toDoList);
console.log(toDoInput);
function handleToDoSubmit(event){
    event.preventDefault();
    console.log(toDoInput.value);
    const newTodo = toDoInput.value;    //비우기 전에 값 저장
    toDoInput.value=""; //입력한 값을 지우기 위함 새로고침을 막아놨기 때문에
                        //이렇게 해줘야 함
    paintToDo(newTodo);
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