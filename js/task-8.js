const inputRef = document.querySelector('#controls > input');
const renderRef = document.querySelector('[data-action="render"]');
const destroyRef = document.querySelector('[data-action="destroy"]');
const boxesRef = document.getElementById("boxes");
const maxNumber = Number(inputRef.max);
const minNumber = Number(inputRef.min);


renderRef.addEventListener("click", getAmount);
destroyRef.addEventListener("click", destroyBoxes);

function getAmount() {

    const amount = + inputRef.value;
    createBoxes(amount);
    
};

function createBoxes(amount) {
  if (amount <= maxNumber && amount >= minNumber) {
    const basicSize = 30;
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < amount; i += 1) {
      
    const size = basicSize + i * 10;
    const div = document.createElement("div");
        
    div.style.cssText = `width: ${size}px; height: ${size}px; background-color: rgba( ${random()} , ${random()} , ${random()} )`;
    fragment.appendChild(div);
  }
  boxesRef.appendChild(fragment);
  
  } else if(amount < minNumber){
    alert(`Отрицательное число, введите от ${minNumber} до ${maxNumber}.`);
  }
  else {
    alert(`Слишком много чисел, введите от ${minNumber} до ${maxNumber}.`);
  }

};

function destroyBoxes() {
    boxesRef.innerHTML = "";
    inputRef.value = "";
};

function random() {
  return Math.floor(Math.random() * 256);
};
