//Mixin
let sayHiMixin = {
    sayHi() {
        alert(`Hello ${this.name}`);
    },
    sayBye() {
        alert(`Bye ${this.name}`);
    }
};

class User {
    constructor(name) {
        this.name = name;
    }
}

Object.assign(User.prototype, sayHiMixin);

new User("John").sayHi();

//Decorators
// The constructor to decorate
function Pizza() {
    this.cost = function () { return 20; };
    this.name = function () { return "Pizza"; };
}

// Decorator 1
function AddJalapeno( pizza ) {
    var c = pizza.cost();
    pizza.cost = function() {
      return c + 4;
    };
}

// Decorator 2
function AddMoreCheese( pizza ) {
    var c = pizza.cost();
    pizza.cost = function() {
      return c + 2;
    };
}
const pizza = new Pizza();
AddJalapeno(pizza);
AddMoreCheese(pizza);
console.log(pizza.cost());
// Output: 26