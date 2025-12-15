const todoList = ['Dinner', 'Cook'];

renderTodoList();

function renderTodoList() {

  let todoListHTML = '';

  todoList.forEach((todo) => {
    const html = `<p>${todo}</p>`;
    todoListHTML += html;
  })

  document.querySelector(".js-todo-list")
    .innerHTML = todoListHTML;

}


function addTodo() {

  const todoElement = document.querySelector('.js-todo-input');
  const name = todoElement.value;

  todoList.push(name);
  console.log(todoList);

  todoElement.value = "";

  renderTodoList();

}