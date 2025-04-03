const numbers = [1,2,3,4,5,6,7,8,9,10];

let newNumbers = numbers.filter((num) => {
    return num % 2 == 0;
})


console.log(newNumbers);


// Only numbers that are even, then doubling it
const extraNumbers = numbers.filter(n => n % 2 == 0).map(n => n * 2);


console.log(extraNumbers);