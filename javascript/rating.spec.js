const  books = require('./books');
const Ratings = require('./ratings')(books);

console.log(Ratings.getTopAuthors(4))