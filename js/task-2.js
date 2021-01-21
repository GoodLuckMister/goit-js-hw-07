const searchNewRef = document.querySelector('#ingredients');

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

for (const element of ingredients) {
    const addList = document.createElement('li');
    addList.textContent = element;
    
    searchNewRef.appendChild(addList);


};
