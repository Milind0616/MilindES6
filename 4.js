// Q4: Explain the rest (...rest) and spread (...spread) operators.
// Write a program that:
// Uses the rest operator to handle an arbitrary number of arguments.
// Uses the spread operator to merge two arrays.


// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=


// Rest and Spread Operators:
//  Rest Parameter: Collects an arbitrary number of arguments into an array.
//  Spread Operator: Expands an iterable (array or object) into individual elements.


// Example:

// Using rest parameter
function sum(...numbers) {
return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3, 4)); // Output: 10


// Using spread operator
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArray = [...array1, ...array2];
console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]
