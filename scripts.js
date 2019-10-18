
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

const myLibrary = [];
const container = document.querySelector(".library-info");
const bookTable = document.querySelector("#bookTable");
const bookRow = document.createElement("tr");



addBookToLibrary();


function addBookToLibrary(){
    let title = prompt("What is the title? ")
    let author = prompt("Who is the author? ");
    let pages = prompt("How many pages are there?");
    myLibrary.push(new Book(title, author, pages, false));
    const info = Object.values(myLibrary[myLibrary.length - 1]);
    for (i = 0; i < info.length; i++){
        textnode = document.createTextNode(`${info[i]}`);
        dataCell = document.createElement("td");
        dataCell.appendChild(textnode);
        bookRow.appendChild(dataCell);
    }
    bookTable.appendChild(bookRow);
}


