const getInputRef = document.querySelector('#font-size-control');
const getTitleRef = document.querySelector('#text');

getInputRef.addEventListener('input', updateTitle);

function updateTitle(event) {

    getTitleRef.style.fontSize = event.target.value + 'px';
    
};




