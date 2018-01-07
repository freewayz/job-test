const orderBookByRating = require('./order-book-by-rating');
const getBooksByAuthor = require('./fetch-books-by-author');

const  Ratings =  function(books) {
    const booksArray = orderBookByRating(books);
    const publicAPI = {
        getTopBooks: function(n) {
            return booksArray.slice(0, n - 1);
        },
        getTopAuthors: function(n) {
            const result = new Map()
            for(let i = 0; i < n; i++) {
                let aBook = booksArray[i];
                if (result.has(aBook.author)) {
                    // this is already in the map
                    // update the average
                    let prevObj = result.get(aBook.author);
                    let currentRating = aBook.ratings;
                    // update the average
                    prevObj.avg = ( currentRating + prevObj.rating ) /  (prevObj.count + 1)
                    // update the count
                    prevObj.count = prevObj.count + 1;
                } else {
                    // this is the first time we are encountering this
                    let ratingValue = {
                        count: 1,
                        avg: aBook.ratings
                    };

                    result.set(aBook.author, ratingValue);
                }
            }

            return result;
        }
    }
    return publicAPI
};

module.exports = Ratings