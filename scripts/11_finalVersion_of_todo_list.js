const todoArray = [];

function renderingArray(){
  let displayArray = '';
  for(let i=0; i<todoArray.length;i++){
    const enteringVal = todoArray[i];
    const {name, dueDate} = enteringVal;//destructring shortcut for const name = todoArray.name same for the dueDate variable
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button onclick="
        todoArray.splice(${i}, 1);
        renderingArray()
      " class="delete-todo-button">Delete</button>
    </div>
    `;
    displayArray += html;
  }
  document.querySelector('.js-display')
    .innerHTML = displayArray;
}

function addingInput(){
  const inputElement = document.querySelector('.js-input')
  const inputElement1 = document.querySelector('.js-date')
  const inputDate = inputElement1.value;
  const insideInput = inputElement.value;

  todoArray.push({
    name: insideInput,//we can put only name if the property name and the variable name is same
    dueDate: inputDate});
  inputElement.value = '';

  renderingArray();
}