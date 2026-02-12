// Question 1: Let's play florist. Declare six variables, remembering to name them according to their purpose:

// the price of a single rose (8) and the number of roses you have (70)
// the price of a single lily (10) and the number of lilies you have (50)
// the price of a single tulip (2) and the number of tulips you have (120)

// Now declare three variables, one each for the roses, lilies, and tulips you have, in which you place 
// their total price. Insert the corresponding values into the variables using the variables declared in 
// the previous step. Finally, declare a variable in which you store the price of all your flowers (again, 
// use the previous variables for initialization). Display all inventory information in the console in the 
// following form:

let rose_price = 8;
let lily_price = 10;
let tulip_price = 2;

let totalno_roses = 70;
let totalno_lilies = 50;
let totalno_tuplis = 120;

let value = rose_price * totalno_roses;
console.log("Roses_total_price: ",value);

let value1 = lily_price * totalno_lilies;
console.log("Lilies_total_price: ",value);

let value2 = tulip_price * totalno_tuplis;
console.log("Tuplis_total_price: ",value);


let total = value + value1 + value2
console.log("Total: ", total)