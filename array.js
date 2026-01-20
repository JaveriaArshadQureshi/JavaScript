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

// const person = ["John", "Doe", 46]; // hemogenous array
// console.log(person);

// const mixedArray = ["Hello", 42, true, {name: "Alice"}, [1, 2, 3]]; // heterogeneous array
// console.log(mixedArray);


// The two examples above do exactly the same.

// There is no need to use new Array().

// For simplicity, readability and execution speed, use the array literal method.

// const cars = new Array("Saab", "Volvo", "BMW");

//ojbect in javascript example

// const person_details = {firstName:"John", lastName:"Doe", age:46};//object in javascript name and value pair
// console.log(person_details);

// Methods 

// JavaScript arrays come with a variety of built-in methods that allow you to manipulate and interact with the array data. Here are some commonly used array methods:


// length method
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let length = fruits.length; //The length property is always one more than the highest array index.
console.log(length); // -> 4
let fruit = fruits[0]; // Accessing elements any element using its index
console.log(fruit); // -> Banana
const fruites = ["Banana", "Orange", "Apple", "Mango"];
let fruita = fruits[fruits.length - 1];
console.log(fruita); // -> Mango

// valueOf() method
// The valueOf() method returns the primitive value of the specified object. For arrays, it returns the array itself.
//The valueOf() method is the default behavior for an array. It returns an array as a string.
// Syntax: array.valueOf()
const vegetables = ["Carrot", "Potato", "Cabbage"];
let vegValue = vegetables.valueOf();
console.log(vegValue); // -> [ 'Carrot', 'Potato', 'Cabbage' ]


// toString() method
// The toString() method converts an array to a string of (comma separated) array values.
// Syntax: array.toString()
//Every JavaScript object has a toString() method.
// The toString() method is used internally by JavaScript when an object needs to be displayed as a text (like in HTML), 
// or when an object needs to be used as a string.
const colors = ["Red", "Green", "Blue"];
let colorString = colors.toString();
console.log(colorString); // -> "Red,Green,Blue"

// pop() method
//The pop() method removes the last element from an array. The pop() method returns the value that was "popped out".
// Syntax: array.pop()
const numbers = [1,2,3,4,5];
let lastNumber = numbers.pop();
console.log(lastNumber); // -> 5
console.log(numbers); // -> [1, 2, 3, 4]

// push() method
// The push() method adds new items to the end of an array, and returns the new length.
// Syntax: array.push(element1, element2, ..., elementN)
const animals = ["Dog", "Cat"];
let newLength = animals.push("Elephant");
console.log(newLength); // -> 3
console.log(animals); // -> ["Dog", "Cat", "Elephant"]

// shift() method
// The shift() method removes the first element from an array. The shift() method returns the value that was "shifted out".
// Syntax: array.shift()
const cities = ["New York", "Los Angeles", "Chicago"];
let firstCity = cities.shift(); 
console.log(firstCity); // -> New York
console.log(cities); // -> ["Los Angeles", "Chicago"]

// unshift() method
// The unshift() method adds new items to the beginning of an array, and returns the new length.
// Syntax: array.unshift(element1, element2, ..., elementN)
const countries = ["USA", "Canada"];
let newLen = countries.unshift("Mexico");
console.log(newLen); // -> 3
console.log(countries); // -> ["Mexico", "USA", "Canada"]   


// delete operator  or removing array elements
// The delete operator removes an element from an array.
// Syntax: delete array[index]
const number = [1, 2, 3, 4, 5];
delete number[0];
console.log(number); // -> [empty, 2, 3, 4, 5] 

// slice() method
// The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included).
// Syntax: array.slice(start, end)
const colors1 = ["Red", "Green", "Blue", "Yellow", "Purple"];
let citrus = colors1.slice(1, 4);
console.log(citrus); // -> ["Green", "Blue", "Yellow"]
let citrus1 = colors1.slice(2);
console.log(citrus1); // -> ["Blue", "Yellow", "Purple"]

//splice() method
// The splice() method adds/removes items to/from an array, and returns the removed item(s).
// Syntax: array.splice(start, deleteCount, item1, item2, ..., itemN)
const letters = ["A", "B", "C", "D"];
let removedItems = letters.splice(1, 2, "X", "Y");
console.log(removedItems); // -> ["B", "C"]
console.log(letters); // -> ["A", "X", "Y", "D"]
let removedItem = letters.splice(2, 1);
console.log(removedItem); // -> ["Y"]
console.log(letters); // -> ["A", "X", "D"]
let slice = letters.splice(1);
console.log(slice); // -> ["X", "D"]
console.log(letters); // -> ["A"]


// sort() method
//The sort() method sorts an array alphabetically.
// Syntax: array.sort()
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
fruits1.sort();
console.log(fruits1); // -> ["Apple", "Banana", "Mango", "Orange"]


// reverse() method
// The reverse() method reverses the order of the elements in an array.
// Syntax: array.reverse()
fruits1.reverse();
console.log(fruits1); // -> ["Mango", "Apple", "Orange", "Banana"]


//Numeric Sort
// By default, the sort() function sorts values as strings.

// This works well for strings ("Apple" comes before "Banana").

// If numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".

// Because of this, the sort() method will produce incorrect result when sorting numbers.

// You can fix this by providing a compare function:

const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
console.log(points); // -> [1, 5, 10, 25, 40, 100] ascending order

points.sort(function(a, b){return b - a});
console.log(points); // -> [100, 40, 25, 10, 5, 1] descending order

//The Compare Function
    // The purpose of the compare function is to define an alternative sort order.
    // The compare function should return a negative, zero, or positive value, depending on the arguments:
    // function(a, b){return a - b}
    // When the sort() function compares two values, it sends the values to the compare function, 
    // and sorts the values according to the returned (negative, zero, positive) value.
        // If the result is negative, a is sorted before b.
        // If the result is positive, b is sorted before a.
        // If the result is 0, no changes are done with the sort order of the two values.
//Example:
//The compare function compares all the values in the array, two values at a time (a, b).
//When comparing 40 and 100, the sort() method calls the compare function(40, 100).
//The function calculates 40 - 100 (a - b), and since the result is negative (-60),  the sort function will sort 40 as a value lower than 100.


//concat() method
// The concat() method creates a new array by concatenating two arrays.
// Syntax: array1.concat(array2, array3, ..., arrayN)
const array1 = ["Cecilie", "Lone"];
const array2 = ["Emil", "Tobias", "Linus"];
const array3 = array1.concat(array2);
console.log(array3); // -> ["Cecilie", "Lone", "Emil", "Tobias", "Linus"]
const array4 = array2.concat(array1);
console.log(array4); // -> ["Emil", "Tobias", "Linus", "Cecilie", "Lone"]

// Associative arrays
// Arrays with named indexes are called associative arrays (or hashes). JavaScript does not support arrays with named indexes.

// What is the Difference between Arrays and Objects?
// In JavaScript:

// Arrays use numbered indexes.
// Objects use named indexes.
// When to Use Arrays? When to use Objects?

// You should use objects when you want the element names to be strings (text).
// You should use arrays when you want the element names to be numbers.
// Avoid new Array()
// There is no need to use the JavaScript's built-in array constructor new Array(). Use [] instead. The new keyword complicates your code and produces nasty side effects.

