const numbers = [1,2,3,4,5,6,7,8,9,10];

const add = function(x,y) {
    return x + y;
}


const addNew = (x,y) => {
    return x + y;
}

const square = (x) => {
    return x * x;
}

const rollDie = () => {
    return Math.floor(Math.random() * 6) + 1;
}


// IMPLICIT RETURN
const rollDie2 = () => (
    Math.floor(Math.random() * 6) + 1
)

// ONE LINER
const multiply = (a, b) => a * b;


console.log(rollDie2());