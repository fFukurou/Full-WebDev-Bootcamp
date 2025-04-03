document.querySelector('button').addEventListener('click', (evt) => {
    console.log(evt);
})

const input = document.querySelector('input');

input.addEventListener('keydown', () => {
    console.log('KEYDOWN');
})