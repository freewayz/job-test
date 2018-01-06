const books = require('./books');

function _byRating(firstBook, secondBook) {
    return secondBook.ratings - firstBook.ratings;
}

const orderBookByRating = function orderBookByRating(bookArray) {
    bookArray.sort(_byRating)
    return bookArray;
}

module.exports = orderBookByRating