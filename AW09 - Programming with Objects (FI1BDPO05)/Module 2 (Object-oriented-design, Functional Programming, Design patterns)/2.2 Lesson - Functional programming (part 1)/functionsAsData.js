// Object Oriented Programming
class Data {
}

class FakeData extends Data {
    getData() {
        return "Fake data";
    }
}

class RealData extends Data {
    getData() {
        // time-consuming operations
        return "Real data";
    }
}

const DEVELOPMENT = true;
const dataModel = DEVELOPMENT
    ? new FakeData()
    : new RealData();
const data = dataModel.getData();
console.log(data);

// Functional programming
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

// Task
//functionsArray.forEach(func => number = func(number));

const getNumber = function (index, currentResult, array) {
    if (index == 0) {
        return array[index](currentResult);
    }
    return array[index](getNumber(index - 1, currentResult, array));
}

getNumber(functionsArray.length - 1, 10, functionsArray);