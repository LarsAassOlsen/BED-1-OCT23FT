// Class
class Dog{
    constructor(name, age) {
        this.name = name;
        this.age = age; // 5 years
    }
    bark() {
        console.log("Class dog says woof woof");
    }
    birth() {
        let today = new Date();
        return today.getFullYear() - this.age;
    }
}

// Object constructor
function objDog(name, age) {
    this.name = name;
    this.age = age;
    this.bark = function () {
        console.log("Object dog says woof woof");
    }
    this.birth = function () {
        let today = new Date();
        return today.getFullYear() - this.age;
    }
}

//Implementation
const classDog = new Dog("Felix", 11);
classDog.bark();
console.log("Class dog: Name: " + classDog.name + ". birth year: " + classDog.birth());

const myDog = new objDog("Lego", 15);
myDog.bark();
console.log("Obj dog: Name: " + myDog.name + ". birth year: " + myDog.birth());

/*
const dog = {
    name: "Rex",
    age: 5,
    bark: function () {
        console.log("Bark bark!")
    },
};
*/