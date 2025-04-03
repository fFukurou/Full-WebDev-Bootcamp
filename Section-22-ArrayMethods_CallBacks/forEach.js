const numbers = [1,2,3,4,5,6,7,8,9,10];

function print(element) {
    console.log(element);
}

// You pass in the function that you want to execute for each element of the iterable
numbers.forEach(function (el) {
    if (el % 2 == 0) console.log(el);
});

