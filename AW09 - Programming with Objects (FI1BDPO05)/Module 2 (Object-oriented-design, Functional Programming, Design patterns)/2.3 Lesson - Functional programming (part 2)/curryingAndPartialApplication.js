// Partial add
const addThree = (x, y, z) => x + y + z;

const addPartial = x =>
        (y , z) => addThree(x, y, z);

const addTwo = addPartial(0);
//addTwo(2, 3) // 5

console.log("Partial add two result: " + addTwo(2, 3));

// Currying
function curry(f) { // curry(f) does the currying transform
    return function(a) {
        return function(b) {
          return function(c) {
              return f(a, b, c);
          }
        };
      };
  }
  
  function sum(a, b, c) {
      return a + b + c;
  }
  
let addCurrying = curry(sum);

console.log("Currying 5, 6, 7: " + addCurrying(5)(6)(7));

// Logging function
/*
function log(date, importance, message) {
    alert(`[${date.getHours()}:${date.getMinutes()}] [${importance}] ${message}`);
}
log(new Date(), "DEBUG", "some debug");
*/

// Logging function currying
/*
function log(date, importance, message) {
    alert(`[${date.getHours()}:${date.getMinutes()}] [${importance}] ${message}`);
}

const curryLog = date => importance => message => log(date, importance, message);

const logNow = curryLog(new Date());
logNow("INFO");

const debugNow = logNow("DEBUG");
debugNow("message");

curryLog(new Date())("DEBUG")("some debug");
*/