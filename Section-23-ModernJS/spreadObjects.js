

let feline =  {
    family: 'Felidae',
    legs: 4
}

let canine = {
    family: 'Caninae',
    legs: 4
}


console.log({...feline, color: 'black'});


const catDog = {...feline, ...canine, ...feline};
console.log(catDog);