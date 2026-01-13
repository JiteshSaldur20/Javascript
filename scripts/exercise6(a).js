function onOffButton(Selector){
    const button = document.querySelector(Selector);
    if(!button.classList.contains('is-toggled')){
      previousButton();
       button.classList.add('is-toggled');
    }
    else{
      button.classList.remove('is-toggled');
    }
  }

  function previousButton(){
    const previousButton = document.querySelector('.is-toggled');
    if(previousButton){
      previousButton.classList.remove('is-toggled');
    }
  }