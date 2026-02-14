// Question 1: Let's play florist. Declare six variables, remembering to name them according to their purpose:

// the price of a single rose (8) and the number of roses you have (70)
// the price of a single lily (10) and the number of lilies you have (50)
// the price of a single tulip (2) and the number of tulips you have (120)

// Now declare three variables, one each for the roses, lilies, and tulips you have, in which you place 
// their total price. Insert the corresponding values into the variables using the variables declared in 
// the previous step. Finally, declare a variable in which you store the price of all your flowers (again, 
// use the previous variables for initialization). Display all inventory information in the console in the 
// following form:

// let rosePrice = 8;
// let lilyPrice = 10;
// let tulipPrice = 2;

// let totalnoRoses = 70;
// let totalnoLilies = 50;
// let totalnoTuplis = 120;

// let rosesValue = rosePrice * totalnoRoses;
// console.log("Rose  unit price:", rosePrice, ", quantity:", totalnoRoses, ", value:", rosesValue);

// let liliesValue = lilyPrice * totalnoLilies;
// console.log("Lily  unit price:", lilyPrice, ", quantity:", totalnoLilies, ", value:", liliesValue);

// let tulipsValue = tulipPrice * totalnoTuplis;
// console.log("Tulip  unit price:", tulipPrice, ", quantity:", totalnoTuplis, ", value:", tulipsValue);


// let total = rosesValue + liliesValue + tulipsValue
// console.log("Total: ", total);


// Question 2: Modify the code from the previous example.

// Assume that the prices of flowers will be constant (they will not change). Declare and initialize the remaining variables in the same way as in the previous example. Display all the gathered information in the console. Now decrease the number of roses by 20 and lilies by 30.

// Display all the collected information in the console again.

const rosePrice = 8;
const lilyPrice = 10;
const tulipPrice = 2;

let totalnoRoses = 70;
let totalnoLilies = 50;
let totalnoTuplis = 120;

totalnoRoses = totalnoRoses - 20;
totalnoLilies = totalnoLilies - 30;

let rosesValue = rosePrice * totalnoRoses;
console.log("Rose  unit price:", rosePrice, ", quantity:", totalnoRoses, ", value:", rosesValue);

let liliesValue = lilyPrice * totalnoLilies;
console.log("Lily  unit price:", lilyPrice, ", quantity:", totalnoLilies, ", value:", liliesValue);

let tulipsValue = tulipPrice * totalnoTuplis;
console.log("Tulip  unit price:", tulipPrice, ", quantity:", totalnoTuplis, ", value:", tulipsValue);


let total = rosesValue + liliesValue + tulipsValue
console.log("Total: ", total);