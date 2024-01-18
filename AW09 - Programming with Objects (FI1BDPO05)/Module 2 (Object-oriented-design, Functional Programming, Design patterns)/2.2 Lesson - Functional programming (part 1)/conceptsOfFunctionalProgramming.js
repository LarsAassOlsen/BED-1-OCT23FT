/*
class Person {
    constructor(name, friends) {
        this.name = name;
        this.friends = friends;
    }
    isFriend(person) {
        return this.friends.includes(person);
    }
}*/

const personFriends = ["Joe"];
const person = 'Joe';
const isFriend = function (friends, person) {
  return friends.includes(person);
};
console.log(isFriend(personFriends, person));