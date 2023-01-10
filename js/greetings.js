//유저 이름을 받아서 input은 사라지고 유저의 이름은 계속 유지되게하는 JS

const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const HIDDN_CLASSNAME = "hidden";

function onLoginButtonClick() {
  event.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add(HIDDN_CLASSNAME);
  localStorage.setItem("username", username);
  greetingPlus(username);
}

function greetingPlus(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDN_CLASSNAME);
}

const savedUsername = localStorage.getItem("username");

if (savedUsername === null) {
  loginForm.classList.remove(HIDDN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginButtonClick);
} else {
  greetingPlus(savedUsername);
}
