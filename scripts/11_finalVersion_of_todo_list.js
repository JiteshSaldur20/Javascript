const todoArray = [];

function renderingArray(){
  let displayArray = '';
  for(let i=0; i<todoArray.length;i++){
    const enteringVal = todoArray[i];
    const html = `<p>${enteringVal}</p>`
    displayArray += html;
  }
  document.querySelector('.js-display')
    .innerHTML = displayArray;
}

function addingInput(){
  const inputElement = document.querySelector('.js-input')
  const insideInput = inputElement.value;

  todoArray.push(insideInput);
  inputElement.value = '';

  renderingArray();
}