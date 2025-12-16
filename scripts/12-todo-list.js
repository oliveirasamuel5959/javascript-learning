const todoList = [
  {
    name: "make dinner",
    dueDate: '2022-12-12'
  },
  {
    name: "study",
    dueDate: '2022-12-13'
  }
];

renderTodoList();

function renderTodoList() {

  let todoListHTML = '';

  todoList.forEach(function(todoObject, index) {

    const { name, dueDate } = todoObject;

    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button onclick="
        todoList.splice(${index}, 1);
        renderTodoList();
      " class="delete-todo-button">Delete</button>
    `;
    todoListHTML += html;

    document.querySelector(".js-todo-list")
      .innerHTML = todoListHTML;
  });
}

function addTodo() {

  const todoElement = document.querySelector('.js-todo-input');
  const name = todoElement.value;

  const dateInputElement = document.querySelector(".js-due-date-input");
  const dueDate = dateInputElement.value;

  todoList.push({
    name, 
    dueDate
  });

  todoElement.value = "";

  renderTodoList();

}