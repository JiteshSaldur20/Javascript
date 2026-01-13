  let calculation = localStorage.getItem('calculation') || '';
  displayCalculation();
  function updateCalculation(number = ''){
    calculation += number;
    displayCalculation();
    saveCalculation();
  }

  function saveCalculation(){
    localStorage.setItem('calculation', calculation);
  }

  function displayCalculation(){
    document.querySelector('.js-display')
      .innerHTML = calculation;
  }
    function clearCalculation(){
    calculation = '';
    localStorage.removeItem('calculation');
    displayCalculation();
  }