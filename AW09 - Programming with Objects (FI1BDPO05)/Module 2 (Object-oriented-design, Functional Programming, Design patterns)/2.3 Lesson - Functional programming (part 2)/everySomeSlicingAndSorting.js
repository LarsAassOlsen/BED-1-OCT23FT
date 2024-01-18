const numbers = [1, 2, 5, 9, 12]

console.log("Numbers: " + numbers);

const allEven = numbers.every( x => x % 2 == 0); // false
const someEven = numbers.some(x => x % 2 == 0); // true

console.log("All even: " + allEven);
console.log("Some even: " + someEven);

const reversed = numbers.slice().reverse(); // [12, 9, 2, 5, 1]

console.log("Reversed: " + reversed);

//Alphabetical sort
const ascendingStrings = (a, b) => {
    if (a.toString() < b.toString()) return -1;
    if (a.toString() > b.toString()) return 1;
    return 0;
}

const sortedNumbers = numbers.slice().sort(ascendingStrings);

console.log("Sorted numbers: " + sortedNumbers);