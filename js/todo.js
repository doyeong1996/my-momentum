//Todo List 만들기
//Todo 를 삭제하는 button 만들기

const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

const toDos = []; //localStorage에 저장할 배열을 변수로저장

const TODOS_KEY = "todos";
function saveTodos() {
  // toDos의 배열안에있는 값들을 localStorage에 저장
  // localStorage.setItem 저장하지만 값은 배열의 값으로 저장이아닌 단순히 문자열로 저장됨
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // 배열에 저장된값을 JSON.stringify(변수) 작성해주면 배열그대로 값을 저장해준다
}

function todoDelete(event) {
  // 클릭했을때 li를 삭제할수있게 만드는 함수
  const li = event.target.parentElement; // 클릭한정보를 event로 받고 클릭해서 해당된 버튼을 찾는 변수
  li.remove(); // li삭제
}
function todoListPlus(newTodo) {
  // HTML에 li 와 span을 JS로 추가하는 함수
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo; // span에 innerText를 newTodo값으로 텍스트표시
  const button = document.createElement("button");
  button.innerText = "delete";
  button.addEventListener("click", todoDelete); // 클릭했을시 todoDelete 함수실행
  li.appendChild(span); // li안에 span 넣기
  li.appendChild(button);
  todoList.appendChild(li); // ul todoList에 li 넣기
}

function todoInputSubmit(event) {
  // form submit
  event.preventDefault(); // form의 기능 초기화
  const newTodo = todoInput.value; // 입력값을 저장
  todoInput.value = ""; // 새롭게 다시 입력값을 받을수있게 todoInput.value를 빈칸으로 만들기
  toDos.push(newTodo); // todos 배열에 newTodo 값을 저장 한다.
  todoListPlus(newTodo); // todoListPlus 함수 실행
  saveTodos();
}
todoForm.addEventListener("submit", todoInputSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsadToDos = JSON.parse(savedToDos);
  parsadToDos.forEach((item) => console.log("this is ", item));
}
