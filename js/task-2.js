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
  return addList;
}
ingredients.map(ingredientsItems);

function renderItems(array) {
  const ingredientsArray = array.map(ingredientsItems);
  searchNewRef.append(...ingredientsArray);
}
renderItems(ingredients);
