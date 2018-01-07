const getBooksByAuthor =  (author, booksArray) => {
    return booksArray.filter((item) => {
        return item.author === author;
    });
}


module.exports = getBooksByAuthor