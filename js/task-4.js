const getDecrement = document.querySelector('.js-add-target');
const getIncrement = document.querySelector('.js-remove-target');
const getValue = document.querySelector('#value');

getDecrement.addEventListener('click', addDecrement);
getIncrement.addEventListener('click', removeIncrement);

function addDecrement() {
    
  return  getValue.textContent = Number(getValue.textContent) + 1;
      
}

function removeIncrement() {

  return  getValue.textContent = Number(getValue.textContent) - 1; 
    
}