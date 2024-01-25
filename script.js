let titleField = document.querySelector('#title');
let authField = document.querySelector('#author');
let numPagesField = document.querySelector('#numPages');
let genreField = document.querySelector('#genre');
let readYetField = document.querySelector('#readYet');
const AddBook = document.querySelector('#addBook');

const Library = [];
let uniqueIdentifier = 0;

function book(title, author, numPages, genre, readYet) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.genre = genre;
    this.readYet = readYet;
    this.unique = uniqueIdentifier +=1;
}

function addBookToLibrary(e) {
    e.preventDefault();
    let newTitle = titleField.value;
    let newAuthor = authField.value;
    let newNumPages = numPagesField.value;
    let newGenre = genreField.value;
    let newReadYet = readYetField.value;
    let newBook = new book(newTitle, newAuthor, newNumPages, newGenre, newReadYet);
    Library.push(newBook);
    clearBookInput();
    populateCards();
}

function clearBookInput() {
    titleField.value = '';
    authField.value = '';
    numPagesField.value = '';
    genreField.value = '';
    readYetField.value = '';
}

function populateCards() {
    let cardHolder = document.querySelector('.cardHolder');
    cardHolder.innerHTML = '';
    Library.forEach((item, currentLibDisplay)=>{
        const authText = `By: ${item.author}`;
        const titleText = `${item.title}`;
        const pageNumText = `This book has ${item.numPages} pages`;
        const genreText = `Genre: ${item.genre}`;
        const readYetText = `I have ${item.readYet} read this book.`;
        const unique = item.unique;

        let cardHolder = document.querySelector('.cardHolder');
    
        let card = document.createElement('div');
        card.className = 'card';

        let buttonHolder = document.createElement('div');
        buttonHolder.className = 'buttonHolder';
    
    
        let cardText = document.createElement('div');
        cardText.classList ='cardText';
        let bookTitle = document.createElement('h5');
        bookTitle.textContent = titleText;
        let bookAuth = document.createElement('p');
        bookAuth.textContent = authText;
        let bookPageNums = document.createElement('p');
        bookPageNums.textContent = pageNumText;
        let bookGenre = document.createElement('p');
        bookPageNums.textContent = genreText;
        let bookReadYet = document.createElement('p');
        bookReadYet.textContent = readYetText;
        let remove = document.createElement('button');
        remove.textContent = '-';
        remove.id = unique.toString();
        remove.addEventListener('click', removeBookFromLibrary);
        let readChange = document.createElement('button');
        readChange.textContent = 'I Read It!';
        readChange.id = unique.toString();
        readChange.addEventListener('click', updateRead);
    
        card.appendChild(bookTitle);
        card.appendChild(bookAuth);
        card.appendChild(bookPageNums);
        card.appendChild(bookGenre);
        card.appendChild(bookReadYet);
        buttonHolder.appendChild(remove);
        buttonHolder.appendChild(readChange);
        card.appendChild(buttonHolder);
        cardHolder.appendChild(card);
    });
}

function removeBookFromLibrary(e) {
    let uniqueID = e.currentTarget.id;
    let indexUID = Library.map(e => e.unique).indexOf(Number(uniqueID));
    if (indexUID>=0) {
        Library.splice(indexUID, 1);
    }
    populateCards();
}

function updateRead(e) {
    let uniqueID = e.currentTarget.id;
    let indexUID = Library.map(e => e.unique).indexOf(Number(uniqueID));
    if(indexUID >=0) {
        let item = Library[indexUID];
        if (item.readYet.toLowerCase() === 'not yet') {
            item.readYet = '';
        } else {
            item.readYet = 'not yet';
        }
    }
    populateCards();
}

// initial set up for the Library
const hobbit = new book('Hobbit', 'Tokein', 400, 'Fantasy', 'Not Yet');
const thrawn = new book('Thrawn', "Zahn", 400, 'Sci-Fi','Not Yet');
const rising = new book('Rising', 'Zahn', 400, 'Sci-Fi', 'Not Yet');
Library.push(hobbit);
Library.push(thrawn);
Library.push(rising);
populateCards();


AddBook.addEventListener('click', addBookToLibrary);

