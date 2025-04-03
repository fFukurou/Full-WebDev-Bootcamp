// Will 'return' a COPY of an array

const cats = ['Mila', 'Frajola', 'Pepe'];
const characters = ['Eren', 'Psylocke', 'Winter Soldier'];

const everyone = [...cats, ...characters, 'Ore no nawa'];

console.log(everyone);