const books = require('./books')

const print = result => console.log('Result:', result)

const getBooksAsync = (books) => {
    return new Promise((resolve, reject) => {
        resolve(books);
    });
}
const sortBooksAlphabetically = (books) => {
    let sortedBooks = books
    /* sorting logic books */
    return getBooksAsync(sortedBooks);
}

const filterBooksWithTitleStartingWithA = (books) => {
    let filteredBooks = books
    /* filter logic here */
    return getBooksAsync(books);
}

getBooksAsync(books)
    .then(sortBooksAlphabetically)
    .then(filterBooksWithTitleStartingWithA)
    .then(print)
