let bookShelf = document.getElementById("bookshelf");
const bookHolder = document.createElement("div");
bookHolder.classList.add("row");

document.getElementById("btnNewBookPage").addEventListener("click", bookAddDisplay);
document.getElementById("btnCloseAdd").addEventListener("click", bookAddDisplay);
document.getElementById("btnAddBook").addEventListener("click", addBookToLibrary);


let myLibrary = [];

// book constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return (`${title} by ${author}, ${pages} pages, ${read}`);
    }
}

// take user’s input and store the new book objects into an array
// function addBookToLibrary(title, author, pages, read) {
function addBookToLibrary() {
    // do stuff here

    // let title = prompt("enter book title");
    // let author = prompt("enter book author");
    // let pages = prompt("enter number of pages in book");
    // let read = prompt("have you read this book?");

    let title = document.getElementById("BookTitle").value;
    let author = document.getElementById("BookAuthor").value;
    let pages = document.getElementById("BookPages").value;
    let read = document.getElementById("readOrNot").checked;

    let book = new Book(title, author, pages, read);
    myLibrary.push(book);

    bookAddDisplay();

    displayBooks();

  }

// loops through the array and displays each book on the page
function displayBooks() {
// do stuff here

bookShelf.innerHTML = "";

for (let book of myLibrary){
    const row = document.createElement('div');
    row.classList.add("row");
    bookShelf.appendChild(row);

    for (let property in book){
        if (typeof(book[property]) !== "function") {
            const col = document.createElement('div');
            col.classList.add("col");
            col.textContent = book[property];
            row.appendChild(col);
        }
        else {
            console.log(typeof(book[property]));
        }
    }
}
console.table(myLibrary);

}

function bookAddDisplay() {
    const displayBookAdd = document.getElementById("bookAddForm");
    if (displayBookAdd.style.display === "none") {
        displayBookAdd.style.display = "block";
    } else {
        displayBookAdd.style.display = "none";
    }
  } 

//addBookToLibrary();



