const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const searchNewRef = document.querySelector('#ingredients');

ingredients.forEach(ingredientsItems);

function ingredientsItems(element) {
  const addList = document.createElement('li');

  addList.textContent = element;
    
  searchNewRef.appendChild(addList);

}
