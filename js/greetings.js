
//#login-form id임

//이제 input과 button을 가져와야 함 
//두가지 방식 존재
//1
// const loingForm = document.getElementById("login-form");
// const loginInput = loingForm.querySelector("input");
// const loginButton = loingForm.querySelector("button");



const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const link = document.querySelector("a");

console.log(loginInput);

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

function handleLinkClick(event){
    event.preventDefault();
    console.dir(event);
    //alert("clicked!!");
}

//loginButton.addEventListener("click",onLoginBtnClick);
//link.addEventListener("click",handleLinkClick);

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
}else {
    paintGreetings(savedUsername);
}