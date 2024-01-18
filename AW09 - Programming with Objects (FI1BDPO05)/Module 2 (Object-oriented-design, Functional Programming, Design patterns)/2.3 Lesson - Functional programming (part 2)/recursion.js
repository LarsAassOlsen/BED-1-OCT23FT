// Previous example
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
console.log("Old example: " + number); //7.87

// Recursion
const getNumber = function(index, currentResult, array) {
    if ( index == 0 ) {
        return array[index](currentResult);
    }
    return array[index](getNumber(index - 1, currentResult, array));
}
console.log("Example by recursion: " + getNumber(functionsArray.length - 1, 10, functionsArray));