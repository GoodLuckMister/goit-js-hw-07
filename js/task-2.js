const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const searchNewRef = document.querySelector('#ingredients');

function ingredientsItems(element) {
  const addList = document.createElement('li');
  addList.textContent = element;

  searchNewRef.appendChild(addList);
}
ingredients.map(ingredientsItems);
