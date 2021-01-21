const searchElem = document.querySelectorAll('.item');
console.log(`В списке ${searchElem.length} категории.`);

for (const element of searchElem) {
    
    const titleRefText = element.firstElementChild.textContent;
    console.log(`Категория: ${titleRefText}`);
    

    const titleRef = element.querySelectorAll('li');
    console.log(`- Количество элементов: ${titleRef.length}`);
    
};





