const todoArray = ['Making dinner', 'Washing Dishes'];

renderTodoArray();

function renderTodoArray(){
  let todoArrayHTML = '';
  for(let i=0; i < todoArray.length; i++){
    const todo = todoArray[i];
    const html = `<p>${todo}</p>`;//generating the html instead of writing all the html.
    todoArrayHTML += html;
  }
  document.querySelector('.js-todo-array')
    .innerHTML = todoArrayHTML;
}
function addValue(){
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  todoArray.push(name);
  console.log(todoArray);

  inputElement.value = '';

  renderTodoArray();
}

