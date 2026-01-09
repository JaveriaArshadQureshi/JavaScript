// A function is a group of reusable code which can be called anywhere in your program. This eliminates the need of writing the same code again and again. It helps programmers in writing modular codes. Functions allow a programmer to divide a big program into a number of small and manageable functions.
// to perform Action
// Like any other advanced programming language, JavaScript also supports all the features necessary to write modular code using functions.

// A JavaScript function is a block of code designed to perform a particular task. The function is executed when "something" invokes it (calls it).


// write function keyword at start of function and then write name of function like  sum and then write parentheses 
// in which you can pass parameters if needed and curly braces to write code block of function
// this called function declaration
function sum(a, b) {
    return a + b;
}

// calling the function sum and passing two arguments 5 and 10
// and function invocation or function calling
let result = sum(5,10);
console.log(result); // Output: 15

let results = sum(10,10); // function is called,  return value will be stored in results variable 
console.log(results);

function myFunction(p1,p2){
    return p1 * p2; // The function returns the product of p1 and p2
}

// Function parameters are listed inside the parentheses () in the function definition.

// Function arguments are the values received by the function when it is invoked.

// Inside the function, the arguments (the parameters) behave as local variables.