const fruits = new Set();
// Add Values to the Set
fruits.add("apple");
fruits.add("banana");
fruits.add("orange");
/*
// Let's access "banana" via variable
const fruitToRemove = "banana";

// Remove the specified fruit from the Set
fruits.delete(fruitToRemove);

// Check if our set contains "banana"
console.log(fruits.has("banana")); // Output: false

// Check the size of our set
console.log(fruits.size); // Output: 2
*/

/*
fruits.forEach(function(value) {
    console.log(value);
});
*/

for (const x of fruits.values()) {
    console.log(x);
  }