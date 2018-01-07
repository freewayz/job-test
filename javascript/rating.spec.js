const  books = require('./books');
const Ratings = require('./ratings')(books);

const ratings = Ratings.getTopAuthors(4);

console.assert(ratings.get('George Orwell') === 5, 'Author with name George Orwell has 5 ratings')
console.log('PASSED 1')
console.assert(ratings.get('Brenda Jackson') === 5, 'Author with name Brenda Jackson has 5 ratings')
console.log('PASSED 2')
console.assert(ratings.get('Steve Hamilton') === 5, 'Author with name Steve Hamilton has 5 ratings')
console.log('PASSED 3')