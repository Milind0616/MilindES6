// Q1. Explain the differnce between == and === operator.
// Write a program to compare two values using both == and === operator and expalin the results.



// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Equality Operators:
//      == (Abstract Equality):
//  Compares values for equality after performing type coercion if necessary.
//  Type coercion involves converting values to a common type before comparison.
//      Examples:
//  5 == "5" (true) - Both values are converted to numbers and compared.
//  0 == false (true) - Both values are converted to numbers and compared.
//  null == undefined (true) - Both values are considered "falsy" and compared.
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
//      === (Strict Equality):
//  Compares values for both equality and identity.
//  Identity means that the values must be of the same type and have the same
// reference in memory.
//  No type coercion is performed.
//     Examples:
//  5 === "5" (false) - Different types (number vs. string).
//  0 === false (false) - Different types (number vs. boolean).
//  null === undefined (false) - Different types (null vs. undefined).

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// program
let num1 = 10;
let num2 = "10";
let bool1 = true;
let bool2 = 1;
console.log("Using == operator:");
console.log(num1 == num2); // true (type coercion)
console.log(bool1 == bool2); // true (type coercion)
console.log("Using === operator:");
console.log(num1 === num2); // false (different types)
console.log(bool1 === bool2); // false (different types)


// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Explanation of Results:
//     == operator:
//  num1 == num2 (true): Both values are converted to numbers and compared,
// resulting in equality.
//  bool1 == bool2 (true): Both values are converted to numbers (true becomes 1) and
// compared, resulting in equality.
//     === operator:
//  num1 === num2 (false): The values are of different types (number vs. string), so
// they are not strictly equal.
//  bool1 === bool2 (false): The values are of different types (boolean vs. number), so
// they are not strictly equal.