const inputNumbersRef = document.querySelector('#validation-input');
const totalNumberRef = Number(inputNumbersRef.dataset.length);

inputNumbersRef.addEventListener('blur', checkInputNumber);
 

function checkInputNumber(event) {
    const numberSymbols = [...event.target.value].length;
      
    if (numberSymbols === totalNumberRef) {
            
        inputNumbersRef.classList.add('valid');
        inputNumbersRef.classList.remove('invalid');
        
    } else if (numberSymbols === 0) {
        
        inputNumbersRef.classList.remove('valid');
        inputNumbersRef.classList.remove('invalid');
        
    } else {
        
        inputNumbersRef.classList.add('invalid');
    };
};