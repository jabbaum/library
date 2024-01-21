let titleField = document.querySelector('#title');
let authField = document.querySelector('#author');
let numPagesField = document.querySelector('#numPages');
let genreField = document.querySelector('#genre');
let readYetField = document.querySelector('#readYet');

const Library = [];

function addBook(title, author, numPages, genre, readYet) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.genre = genre;
    this.readYet = readYet;
}

function addBookToLibrary() {
    let newTitle = titleField.textContent;
    let newAuthor = authField.textContent;
    let newNumPages = numPagesField.textContent;
    let newGenre = genreField.textContent;
    let newReadYet = readYetField.textContent;
    let newBook = new addBook(newTitle, newAuthor, newNumPages, newGenre, newReadYet);
    Library.push(newBook);
}