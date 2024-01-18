//Singleton (cannot be overridden)
/*
let instance = null;

class Person{
    constructor(name, age, gender) {
        if (!instance) {
            this.name = name;
            this.age = age;
            this.gender = gender;
            instance = this;
        } else {
            return instance;
        }
    }
}


const john = new Person("John", 22, 'male');
const barbara = new Person("Barbara", 27, 'female');

console.log(john);
console.log(barbara);
*/

//Factory pattern
class Person{
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

class personFactory {
    createPerson(type) {
        switch(type) {
            case 'John':
                return new Person("John", 22, 'male');
            case 'Barbara':
                return new Person("Barbara", 27, 'female');
        }
    }
}

const factory = new personFactory();
const newPerson = factory.createPerson('John')
console.log(newPerson);

//Abstract factory
class Teacher{
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

class TeacherFactory {
    createPerson(type) {
        switch(type) {
            case 'John':
                return new Teacher("John", 32, 'male');
            case 'Barbara':
                return new Teacher("Barbara", 37, 'female');
        }
    }
}

class Student{
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

class StudentFactory {
    createPerson(type) {
        switch(type) {
            case 'Mark':
                return new Student("Mark", 23, 'male');
            case 'Margaret':
                return new Student("Margaret", 21, 'female');
        }
    }
}

const teacherFactory = new TeacherFactory();
const studentFactory = new StudentFactory();

const peopleFacturer = (type, model) => {
    switch(type) {
        case 'teacher':
            return teacherFactory.createPerson(model);
        case 'student':
            return studentFactory.createPerson(model);
    }
}

const john = peopleFacturer('teacher', 'John');
console.log(john);