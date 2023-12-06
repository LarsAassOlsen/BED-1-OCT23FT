class Car {
    #_year
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    set year(newYear) {
        let date = new Date();
        if (newYear > date.getFullYear()) {
            this.#_year = date.getFullYear();
            }
            else {
                this.#_year = newYear;
            }
        }
    get year() {
        return this.#_year;
        }
    age() {
        let date = new Date();
        return date.getFullYear() - this.#_year;
    }
}
let newCar = new Car("Nissan", 2221);// Sets the year to 2221
console.log(newCar.year); // Logs the current year
console.log(newCar._year); // undefined
newCar._year = 2221; //Setting the year value
console.log(newCar.year); //Logs current year
console.log(newCar._year); //This value changes but, the year does not.
console.log(newCar.age());