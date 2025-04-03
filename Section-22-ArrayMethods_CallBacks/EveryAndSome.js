const exams = [80, 98, 92, 78 ,77, 90, 89, 77, 102];

const passed = exams.every(score => score >= 75);

const some = exams.some(score => score > 105);

console.log("every: " + passed);

console.log("some: " + some);