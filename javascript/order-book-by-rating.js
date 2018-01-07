const books = require('./books');

const  _byRating = (firstBook, secondBook) => {
    return secondBook.ratings - firstBook.ratings;
};

const orderBookByRating =  (bookArray) => {
    bookArray.sort(_byRating)
    return bookArray;
}

module.exports = orderBookByRating