// An Array is an object type designed for storing data collections.Hemogenous data types are preferred but not mandatory.

// Key characteristics of JavaScript arrays are:

// Elements: An array is a list of values, known as elements.

// Ordered: Array elements are ordered based on their index.

// Zero indexed: The first element is at index 0, the second at index 1, and so on.

// Dynamic size: Arrays can grow or shrink as elements are added or removed.

// Heterogeneous: Arrays can store elements of different data types (numbers, strings, objects and other arrays).

// const cars = ["Saab", "Volvo", "BMW",3];

// console.log(cars);

// console.log(cars[0]); // -> Saab
// console.log(cars[1]); // -> Volvo
// console.log(cars[2]); // -> BMW
// console.log(cars[3]); // -> 3

// const cars = [];
// cars[0]= "Saab";
// cars[1]= "Volvo";
// cars[2]= "BMW";
// console.log(cars);
// cars[0] = "Opel";
// console.log(cars);

const person = ["John", "Doe", 46]; // hemogenous array
console.log(person);

const mixedArray = ["Hello", 42, true, {name: "Alice"}, [1, 2, 3]]; // heterogeneous array
console.log(mixedArray);


// The two examples above do exactly the same.

// There is no need to use new Array().

// For simplicity, readability and execution speed, use the array literal method.

const cars = new Array("Saab", "Volvo", "BMW");

//ojbect in javascript

const person_details = {firstName:"John", lastName:"Doe", age:46};//object in javascript name and value pair

console.log(person_details);