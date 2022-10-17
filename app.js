const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deletes);
                          
function addTodo(e){
  e.preventDefault();
  const todoDiv = document.createElement("div")
  todoDiv.classList.add('todo-div')
  const newTodo = document.createElement('li');
  newTodo.innerText = todoInput.value;
  newTodo.classList.add('todo-item');
  todoDiv.appendChild(newTodo);
  
  
const trashButton = document.createElement('button')
trashButton.innerHTML = "delete"
trashButton.classList.add("trash-btn")
 todoDiv.appendChild(trashButton)

  todoList.appendChild(todoDiv);
} 

function deletes(e){
  const item = e.target
  if(item.classList[0] === "trash-btn"){
    const todo = item.parentElement;
    todo.remove()
  }
  
}