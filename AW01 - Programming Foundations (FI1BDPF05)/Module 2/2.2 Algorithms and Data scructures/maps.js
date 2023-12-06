const menu = new Map([
    ["Margarita", 9],
    ["Pepperoni", 10],
    ["Salami", 10]
]);

menu.forEach (function(value, key) {
    console.log("Dish: " + key + ", Price: " + value);
})

/*
// List all entries
let text = "";
for (const x of menu.entries()) {
    text += x;
    console.log(text);
}
*/