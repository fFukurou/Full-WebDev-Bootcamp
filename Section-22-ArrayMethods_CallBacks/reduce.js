// REDUCES EVERY SINGLE ELEMENT IN AN ARRAY TO A SINGLE ONE

let grades = [2,3,4,5,6, 20 ,7,8,9, 1, 10];

let summedGrades = grades.reduce((total, price) => {
    return total + price;
});

// let maxGrade = grades.reduce( (total, g) =>  Math.max(total, g));

let minGrade = grades.reduce((min, grade) => {
    if (grade < min) return grade;
    else return min;
}) 



const evens = [2, 4, 6, 8, 10];

let start100Sum = evens.reduce((sum, num) => sum + num, 100);



console.log(summedGrades);
// console.log(maxGrade);

console.log(minGrade);

console.log(start100Sum);