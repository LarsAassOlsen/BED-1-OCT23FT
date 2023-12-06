const numbers = [1,2,3,4,5,6];
const sum = numbers.reduce(add);
console.log(numbers); //[1, 2, 3, 4, 5, 6]
console.log(sum); //21
function add(total, value) {
    return total + value;
}