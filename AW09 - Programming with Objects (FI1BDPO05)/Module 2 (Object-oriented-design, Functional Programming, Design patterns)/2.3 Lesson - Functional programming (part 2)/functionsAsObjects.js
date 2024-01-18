const add = (x, y, z) => x + y + z;
console.log(add(1,2,3))
console.log(add.call(null, 1, 2, 3));

console.log(add.apply(null, [1, 2, 3]));

var func1 = add.bind(null, 1, 2);
var func2 = add.bind(null, 10);

console.log("func1: " + func1(10));
console.log("func1: " + func2(1, 5));
//func1(10); // 13
//func2(1, 5); // 16

function add(x = 0, y = 0) {
    const total = x + y;
    return {
      add: add.bind(null, total),
      done: () => total
    }
  }
  
  add(2).add(3).add(5).add(1).done(); // 11