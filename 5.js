// Q5:Explain the optional chaining operator (?.) and its use in JavaScript.
// Explain the concept of destructuring arrays and objects.


// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

//  Optional Chaining and Destructuring:
//  Optional Chaining: Safely accesses properties of an object without throwing an error if
// the property is undefined or null.
//  Destructuring: Extracts values from arrays and objects into variables.


//     Example:
const person = {
name: "Alice",
address: {
street: "Main Street",
city: "Anytown"
}
};

// Optional chaining
const city = person?.address?.city;
console.log(city); // Output: "Anytown" (even if address is null)

// Destructuring
const { name, address: { street } } = person;
console.log(name, street); // Output: "Alice Main Street"