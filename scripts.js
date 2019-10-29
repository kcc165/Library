
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
const bookTable = document.querySelector("#bookTable");
const newBookButton = document.querySelector("#new-book");
const submitForm = document.querySelector("#submit-form");
const addBookButton = document.querySelector("#bookAdd");
const inputFields = document.querySelectorAll("input");
const clearButton = document.querySelector("#clear");



newBookButton.addEventListener("click", e => {
    newBookButton.setAttribute("style", "display: none");
    submitForm.setAttribute("style", "display: block");

})



addBookButton.addEventListener("click", e => {
    if (document.getElementById("title").value == "" || document.getElementById("author").value == "" || document.getElementById("pages").value == "" || 
    document.getElementById("read").checked === false && document.getElementById("notRead").checked === false ){
        alert("Please fill out all fields.")
    }
    else {
        addBookToLibrary();
        clearForm();
    }


})

bookTable.addEventListener("click", e => {
    if (e.target.innerHTML === "Change Read Status"){
        e.path[2].children[3].innerHTML = changeReadStatus(e.path[2].children[3].innerHTML);
    }
    else if (e.target.innerHTML === "Remove Book"){
        console.log(e);
        //e.path[2].remove();
    }
})

clearButton.addEventListener("click", e => {
    clearForm();
})







function addBookToLibrary(){
    const readStatusButton = document.createElement("button");
    const removeBookButton = document.createElement("button");
    readStatusButton.innerHTML = "Change Read Status";
    readStatusButton.classList.add("actionButtons");
    removeBookButton.innerHTML = "Remove Book";
    removeBookButton.classList.add("actionButtons");
    
    const bookRow = document.createElement("tr");
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let readStatus = document.getElementById("read").checked === false? "Not Read" : "Read"; 
    myLibrary.push(new Book(title, author, pages, readStatus));
    const info = Object.values(myLibrary[myLibrary.length - 1]);
    for (i = 0; i < info.length; i++){
        textnode = document.createTextNode(`${info[i]}`);
        dataCell = document.createElement("td");
        dataCell.appendChild(textnode);
        bookRow.appendChild(dataCell);
    }
    dataCell = document.createElement("td");
    dataCell.appendChild(readStatusButton);
    dataCell.appendChild(removeBookButton);
    bookRow.appendChild(dataCell);
    bookTable.children[0].appendChild(bookRow);
}

function changeReadStatus(status){
    return status === "Read" ? "Not Read" : "Read";
}

function clearForm(){
    inputFields.forEach(field => {
        if (field.type === "text"){
            field.value = "";
        }
        else if (field.type === "radio"){
            field.checked = false;
        }
    });
}






