const searchElem = document.querySelectorAll('.item');
console.log(`В списке ${searchElem.length} категории.`);

const array = [...searchElem];

array.forEach(getConsole);

function getConsole(element) {
  const titleRefText = element.firstElementChild.textContent;
  console.log(`• Категория: ${titleRefText}`);

  const titleRef = element.querySelectorAll('li');
  console.log(`• Количество элементов: ${titleRef.length}`);
}
