
// reverse sort
const persons = ['shakil', 'khushi', 'rokeya', 'salma', 'taniya'];

const sortPerson = persons.reverse();
// console.log(sortPerson);

// sort
const numbers = [4, 7, 12, 8, 43, 6];

/**
 * Ascending -----> smaller to larger: [2, 3, 4, 6, 7, 8]
 * Desending -----> larger to smaller: [8, 7, 6, 4, 3, 2]
 */

const numbers_asc = [...numbers].sort(function(a, b) {return a - b});
const numbers_dsc = [...numbers].sort(function(a, b) {return b - a});
console.log(numbers_asc);
console.log(numbers_dsc);