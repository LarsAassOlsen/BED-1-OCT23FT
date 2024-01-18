const numbers = [1, 2, 5, 9, 12]

const tripledNumbers = numbers.map( x => x * 3); // [3, 6, 15, 27, 36]
const modifiedNumbers = numbers.map(x => x + 2).map(x => x * 2); // [6, 8, 14, 22, 28]

console.log(numbers);
console.log("tripledNumbers: " + tripledNumbers);
console.log(modifiedNumbers);

const odd = numbers.filter( x => x % 2 == 1); // [1, 5, 9]
const oddModified = numbers.map(x => x + 2).filter(x => x % 2 == 1); // [3, 7, 11]

console.log("oddnumbers: " + odd);
console.log("odd modified: " + oddModified);

/*
const double = x => x * 2;
const triple = x => x * 3;
const addFour = x => x + 4;
const subtractThree = x => x - 3;

const functionsArray = [
    triple,
    addFour,
    subtractThree,
    double,
    Math.sqrt,
];

var number = 10;

functionsArray.forEach(func => number = func(number));

console.log(number); //7.87
*/

const double = x => x * 2;
const triple = x => x * 3;
const addFour = x => x + 4;
const subtractThree = x => x - 3;

const functionsArray = [
    triple,
    addFour,
    subtractThree,
    double,
    Math.sqrt,
];

const value = functionsArray.reduce((acc, func) => {
    return func(acc)
}, 10);

console.log(value); //7.87