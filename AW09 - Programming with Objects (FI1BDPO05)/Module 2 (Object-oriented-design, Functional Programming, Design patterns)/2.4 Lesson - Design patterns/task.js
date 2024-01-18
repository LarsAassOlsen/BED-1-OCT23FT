/*There are three possible dishes:
Pizza
Pasta
Chicken

Each dish should be a separate class with fields:
name
nationality.

There are three restaurants selling dishes.
American - is selling Chicken and Pizza
Italian - is selling Pasta and Pizza
Chinese - is selling Chicken and Pasta

Abstract factory pattern, desogn the system witch simulates ordering a dish from the restaurant.
The ordered dishes should contain information about its type (pizza / chicken / pasta) and from what restaurant it comes from.
Be careful to not create unnecessary class instances. */

//Pizza parent
class Pizza{
    constructor(nationality) {
        this.nationality = nationality;
    }
    getName() {
        return "I am an " + this.nationality + " pizza.";
    }
}

//Pizza Child 1
class ItalianPizza extends Pizza{
    constructor() {
        super("Italian")
    }
}

//Pizza Child 2
class AmericanPizza extends Pizza{
    constructor() {
        super("American")
    }
}

/*--------------------------------------------------------------------------*/

//Pasta parent
class Pasta{
    constructor(nationality) {
        this.nationality = nationality;
    }
    getName() {
        return "I am an " + this.nationality + " pasta.";
    }
}

//Pasta Child 1
class ItalianPasta extends Pasta{
    constructor() {
        super("Italian")
    }
}

//Pasta Child 2
class ChinesePasta extends Pasta{
    constructor() {
        super("Chinese")
    }
}

/*--------------------------------------------------------------------------*/

//Chicken parent
class Chicken{
    constructor(nationality) {
        this.nationality = nationality;
    }
    getName() {
        return "I am an " + this.nationality + " chicken.";
    }
}

//Chicken Child 1
class AmericanChicken extends Chicken{
    constructor() {
        super("American")
    }
}

//Chicken Child 2
class ChineseChicken extends Chicken{
    constructor() {
        super("Chinese")
    }
}

/*--------------------------------------------------------------------------*/
//Factories
class AmericanRestaurant{
    chicken = new AmericanChicken();
    pizza = new AmericanPizza();
    serveDish(type) {
        switch (type) {
            case 'Pizza':
                return this.pizza;
            case 'Chicken':
                return this.chicken;
            case 'Pasta':
                console.log("Pasta is not served here")
                return;
        }
    }
}

class ItalianRestaurant{
    pasta = new ItalianPasta();
    pizza = new ItalianPizza();
    serveDish(type) {
        switch (type) {
            case 'Pizza':
                return this.pizza;
            case 'Chicken':
                console.log("Chicken is not served here")
                return;
            case 'Pasta':
                return this.pasta;
        }
    }
}

class ChineseRestaurant{
    pasta = new ChinesePasta();
    chicken = new ChineseChicken();
    serveDish(type) {
        switch (type) {
            case 'Pizza':
                console.log("Pizza is not served here")
                return;
            case 'Chicken':
                return this.chicken;
            case 'Pasta':
                return this.pasta;
        }
    }
}

/*--------------------------------------------------------------------------*/
//Create our restaurants

const italianRestaurant = new ItalianRestaurant();
const americanRestaurant = new AmericanRestaurant();
const chineseRestaurant = new ChineseRestaurant();

//Ordering a specific dish from a specific restaurant
const dishPortal = (nationality, dish) => {
    switch (nationality) {
        case "American":
            return americanRestaurant.serveDish(dish);
        case "Chinese":
            return chineseRestaurant.serveDish(dish);
        case "Italian":
            return italianRestaurant.serveDish(dish);
    }
}

//Implementation
const dish1 = dishPortal("Italian", "Pasta");
console.log(dish1.getName());

const dish2 = dishPortal("American", "Pizza");
console.log(dish2.getName());

const dish3 = dishPortal("Chinese", "Pizza");
console.log(dish3.getName());