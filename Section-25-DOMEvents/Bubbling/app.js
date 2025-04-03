const button = document.querySelector('#changeColor') ;
const container = document.querySelector('#container');

button.addEventListener('click', (e) => {
    container.style.backgroundColor =  makeRandColor();
    e.stopPropagation();
})

container.addEventListener('click', (e) => {
    container.classList.add('hide');
})



function makeRandColor() {
    const r = Math.floor(Math.random() * 255) + 1;
    const g = Math.floor(Math.random() * 255) + 1;
    const b = Math.floor(Math.random() * 255) + 1;
    return `rgb(${r}, ${g}, ${b})`;
}