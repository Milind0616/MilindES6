// Q3: Explain what arrow functions are and how they differ from regular functions.
// Write a program that uses both regular and arrow functions to add two numbers.


// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

//         Arrow Functions vs. Regular Functions:
// Arrow functions are a concise syntax for defining functions in JavaScript. They have several key
// differences from regular functions:
//      Implicit return: In arrow functions with a single expression, the return keyword is implicit.
//      Lexical this: Arrow functions inherit the this value from their enclosing scope, making
// them suitable for callback functions and event handlers.
//      No arguments object: Arrow functions do not have the arguments object, but they can
// access arguments using the rest parameter.


// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Regular function
function addNumbers(a, b) {
    return a + b;
    }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Arrow function
const addNumbersArrow = (a, b) => a + b;
console.log(addNumbers(2, 3)); // Output: 5
console.log(addNumbersArrow(2, 3)); // Output: 5
            