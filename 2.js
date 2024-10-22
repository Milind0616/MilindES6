// Q2: Write a program to:
// Print numbers from 1 to 10 using a for loop.
// Print even numbers between 1 and 20 using a while loop.
// Use a switch statement to handle various cases for a day of the week (e.g., print "Weekend" for 
// Saturday and Sunday, "Weekday" otherwise)

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// 1. Printing Numbers with a For Loop:
for (let i = 1; i <= 10; i++) {
console.log(i);
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=


// 2. Printing Even Numbers with a While Loop:
let num = 2;
while (num <= 20) {
console.log(num);
num += 2;
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// 3. Handling Days of the Week with a Switch Statement:
const dayOfWeek = "Tuesday"; // Replace with the desired day
switch (dayOfWeek.toLowerCase()) {
case "saturday":
case "sunday":
console.log("Weekend");
break;
default:
console.log("Weekday");
}
