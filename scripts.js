
class Book {
    constructor (title, author, pages, hasRead){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.hasRead = hasRead;
    }

    getInfo () {
        return (`${this._title} by ${this._author}, ${this._pages} pages, ${this._hasRead ? "has been read" : "not read yet"}`)
    }
        

}

let myLibrary = [];
myLibrary.push(new Book("Harry Potter", "J.K. Rowling", 300, false));
console.log(myLibrary);

function addBookToLibrary(){
    let title = prompt("What is the title? ")
    let author = prompt("Who is the author? ");
    let pages = prompt("How many pages are there?");
    myLibrary.push(new Book(title, author, pages, false));
}


