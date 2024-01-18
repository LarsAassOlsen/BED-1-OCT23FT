//Given array
const priceArray = [800, 200, 100, 300, 700];

const value = priceArray.reduce((acc, number) => {
    return acc + number;
}, 0);

console.log(value);