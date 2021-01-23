const inputRef = document.querySelector('.js-input');
const outputRef = document.querySelector('.js-output');

inputRef.addEventListener('input', onUpdateTitle);

function onUpdateTitle(event) {

   outputRef.textContent = event.target.value; 
   
   if (event.target.value === "") {
      
      outputRef.textContent = "незнакомец";
   }
};