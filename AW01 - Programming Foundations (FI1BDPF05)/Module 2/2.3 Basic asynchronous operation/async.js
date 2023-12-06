function print(text) {
    document.getElementById("displayer").innerHTML = text;
}

/*
// Function sequence
print("Hello");
print("My");
print("Dear");
print("Friend");
*/

/* 
// Concatenates 
function concat(name, surname, callback) {
    let result = name + " " + surname;
    callback(result);
}

concat("Lars Aass", "Olsen", print);
*/

/*
// Calculator
function halve(value) {
    return value / 2;
}

function calculator(a, b, callback1, callback2) {
    let result = a + b;
    result = callback2(result);
    callback1(result);
}

print("Waiting for the calculation to end...")
setTimeout(() => calculator(1, 2, print, halve), 5000);
*/

/*
// Callback timer / Intervals
function timer(callback) {
    counter++;
    callback(counter);
}
print("Waiting...")
var counter = 0;
const id = setInterval(() => timer(print), 2000);
setTimeout(() => clearInterval(id), 10000);
*/


// Promises
/*
let promise = new Promise(function(resolve, reject) {
    // "Producing Code" (May take some time)

    resolve(); // when successful
    reject();  // when error
});

// "Consuming Code" (Must wait for a fulfilled Promise)
promise.then(
    function(value) { console.log("Promise code successful") },
    function(error) { console.log("Promise code error")}
);
*/

/*
console.log( 'a' );
new Promise( function ( ) {
    console.log( 'b' );
    setTimeout( function ( ) {
        console.log( 'D' );
    }, 0 );
} );
// Other synchronous stuff, that possibly takes a very long time to process
console.log( 'c' );
*/
/*
function print(text) {
    document.getElementById("displayer").innerHTML = text;
}
let promise = new Promise(function(resolve, reject) {
    let x = 0;
    if (x == 0) {
      resolve("OK");
    } else {
      reject("Error");
    }
  });
promise.then(
    function(value) {print(value);},
    function(error) {print(error);}
);
*/

// Async/Await

async function display() {
    let myPromise = new Promise(function (resolve) {
        setTimeout(function () { resolve("Hello!"); }, 3000);
    });
    const result = await myPromise;
    print(result);
    console.log(result);
    console.log(myPromise);
}
display();