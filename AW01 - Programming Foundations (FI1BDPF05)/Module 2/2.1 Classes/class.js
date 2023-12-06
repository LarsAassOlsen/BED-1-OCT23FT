class Book{
    constructor(title, author, publicationYear) {
        this.title = title;
        this.author = author;
        this.publicationYear = publicationYear;
    }
    age() {
        let currentDate = new Date();
        return currentDate.getFullYear() - this.publicationYear;
    }
}

let newBook = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);

console.log(newBook.title);
console.log(newBook.age());
console.log(newBook.publicationYear);