const orderBookByRating = require('./order-book-by-rating');
const getBooksByAuthor = require('./fetch-books-by-author');

const  Ratings =  function(books) {
    const booksArray = orderBookByRating(books);

    function calculateAverage(anArray) {
        let count = anArray.length;
        if (count == 1) {
            return anArray[0];
        }
        let sum = anArray.reduce((prev, curr) => curr + prev);
        return sum /= count;
    }


    const publicAPI = {
        getTopBooks: function(n) {
            return booksArray.slice(0, n - 1);
        },
        getTopAuthors: function(n) {
            // use the map to store author/ratings 
            const result = new Map() 
            for(let i = 0; i < n; i++) {
                let aBook = booksArray[i];
                // starting with a naive implementation
                if (result.has(aBook.author)) {
                    let prevObj = result.get(aBook.author);
                    prevObj.push(aBook.ratings)
                    
                } else {
                    result.set(aBook.author, [aBook.ratings]);
                }
            }
            // iterate over each map value and calculate their average
            result.forEach((value, key, map) => {
                // update each entry value with the calculated rating average
                map.set(key, calculateAverage(value))
            });
            return result;
        }
    }
    return publicAPI
};

module.exports = Ratings