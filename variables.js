// var height;
// console.log(height); // -> undefined
// console.log(weight); // -> Uncaught ReferenceError: weight is not defined


// let height;
// console.log(height); // -> undefined

// One of the basic differences in the use of var and let is that let prevents us from declaring another variable with the same name 
// (an error is generated). Using var allows you to re-declare a variable, which can potentially lead to errors in the program execution.

// var height;
// var height;
// console.log(height); // -> undefined

// The example above demonstrates the possibility of re-declaring a variable using the keyword var. In this situation, it will not cause an error, 
// but in more complex programs a redeclaration, especially by accident, may no longer be without consequences. When declaring with let, the 
// interpreter checks whether such a variable has already been declared, no matter if let or var is used in the previous declaration.


// let  height;
// let  height;  //  ->  Uncaught  SyntaxError:  Identifier  'height'  has  already  been  declared
// console.log(height);

// Initialization can be done either together with the declaration, or separately as an
// independent command. It is important to enter the first value into the variable before trying to read, modify, or display it.

// let height = 180;
// let anotherHeight = height;
// let weight;
// console.log(height); // -> 180
// console.log(anotherHeight); // -> 180
// weight = 70;
// console.log(weight); // -> 70

// By the way, pay attention to one thing. If you specify a variable name in console.log, the interpreter recognizes it and displays 
// its value. If you put the same name in quotation marks, it will be treated as plain text, and displayed as such.

// let  height  =  180;
// console.log(height);  //  ->  180
// console.log("height");  //  ->  height

// JavaScript had some major changes introduced in 2009 and 2015. Most of these changes extended the language syntax with new elements, 
// but some of them concerned only the operation of the JavaScript interpreters. Often it was about clarifying 
// the interpreters' behavior in potentially erroneous situations, such as in cases of variable initialization without any prior declaration.

// height = 180;
// console.log(height); // -> 180


"use strict";

// height = 180; // -> Uncaught ReferenceError: height is not defined
// console.log(height);

// a = 5;   // Error
// console.log(a);


// let steps = 100;
// console.log(steps); // -> 100
// steps = 120; // -> 120
// console.log(steps);
// steps = steps + 200;
// console.log(steps); // -> 320

// let greeting = "Hello!";
// let counter = 100;

// console.log(greeting); // -> Hello!
// greeting = 1;
// console.log(greeting); // -> 1

// greeting = "Hello!";
// greeting = greeting + counter;
// console.log(greeting); // -> Hello!100

// const greeting = "Hello!";

// const greeting; // -> Uncaught SyntaxError: Missing initializer in const declaration
// greeting = "Hello!";

// const greeting = "Hello!";
// greeting = "Hi!"; // -> Uncaught TypeError: Assignment to constant variable.

// Scope Examples

// let counter;
// console.log(counter); // -> undefined
// {
//     counter = 1;
//     console.log(counter); // -> 1
// }
// counter = counter + 1;
// console.log(counter); // -> 2

// let height = 180;
// {
//     let weight = 70;
//     console.log(height); // -> 180
//     console.log(weight); // -> 70
// }
// console.log(height); // -> 180
//console.log(weight); // -> Uncaught ReferenceError: weight is not defined

// let height = 200;
// {
//     let weight = 100;
//     {
//     let info = "tall";
//     console.log(height); // -> 200
//     console.log(weight); // -> 100
//     console.log(info); // -> tall
//     }
//     console.log(height); // -> 200
//     console.log(weight); // -> 100
//     console.log(info); // -> Uncaught ReferenceError: info is not defined
// }

// var height = 180;
// {
//     var weight = 70;
//     console.log(height); // -> 180
//     console.log(weight); // -> 70
// }
// console.log(height); // -> 180
// console.log(weight); // -> 70

// function testFunction() {
//     console.log("Hello");
//     console.log("World");
// }

// testFunction()

// console.log("let's begin:"); // -> let's begin:
// console.log("Hello"); // -> Hello
// console.log("World"); // -> World
// console.log("and again:"); // -> and again:
// console.log("Hello"); // -> Hello
// console.log("World"); // -> World
// console.log("and once more:"); // -> and once more:
// console.log("Hello"); // -> Hello
// console.log("World"); // -> World

// var globalGreeting = "Good ";
   
// function testFunction() {
//     var localGreeting = "Morning ";
//     console.log("function:");
//     console.log(globalGreeting);
//     console.log(localGreeting);
// }
   
// testFunction();
   
// console.log("main program:");
// console.log(globalGreeting);
// // console.log(localGreeting); // -> Uncaught ReferenceError: localGreeting is not defined

// Variable shadowing
//JavaScript allows for variable shadowing. What does that mean? It means that we can declare a global variable and a local variable of the same name.

// let counter = 100;
// console.log(counter); // -> 100
// {
//     counter = 200;
//     console.log(counter); // -> 200
// }
// console.log(counter); // -> 200



// let counter = 100;
// console.log(counter); // -> 100
// {
//     let counter = 200;
//     console.log(counter); // -> 200
// }
// console.log(counter); // -> 100

// var counter = 100;
   
// function testFunction() {
//     var counter = 200;
//     console.log(counter);
// }
   
// console.log(counter); // -> 100
// testFunction(); // -> 200
// console.log(counter); // -> 100


// var height = 180;
// console.log(weight); // -> Uncaught ReferenceError: weight is not defined
// console.log(height); // -> 180


// var  height  =  180;
// console.log(height);    //  ->  180
// console.log(weight);    //  ->  undefined
// var  weight  =  70;
// console.log(weight);    //  ->  70


// Hoisting in JavaScript means that declarations of variables and functions are moved to the top of their scope (before code execution), but not their values.
// var weight;
// var height = 180;
// console.log(height); // -> 180
// console.log(weight); // -> undefined
// weight = 70;
// console.log(weight); // -> 70
