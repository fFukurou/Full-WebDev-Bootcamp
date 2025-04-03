const button = document.querySelector('#randBtn');
const body = document.querySelector('body');
const header = document.querySelector('h1');

button.addEventListener('click', () => {
    
    const newColor = makeRandColor();

    body.style.backgroundColor = newColor;
    header.innerText = newColor;
    button.innerText = 'Next Color >';

})


function makeRandColor() {
    const r = Math.floor(Math.random() * 255) + 1;
    const g = Math.floor(Math.random() * 255) + 1;
    const b = Math.floor(Math.random() * 255) + 1;
    return `rgb(${r}, ${g}, ${b})`;
}