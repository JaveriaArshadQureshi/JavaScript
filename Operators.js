// JavaScript Arithmetic Operators
  // Arithmetic operators perform arithmetic on numbers (literals or variables).
  
// Operator	Description
// +	Addition
// -	Subtraction
// *	Multiplication
// **	Exponentiation (ES2016)
// /	Division
// %	Modulus (Remainder)
// ++	Increment
// --	Decrement

// Literals means fixed values written directly in the code.
//  👉 Literal = value itself

// 25 → literal
// age → variable
let age = 25;

// Operators and Operands
// The numbers (in an arithmetic operation) are called operands.

// The operation (to be performed between the two operands) is defined by an operator.

// Operand	Operator	Operand
// 100      	+	      50


//Addition operator (+)
let x = 100 + 50;
console.log(x); // -> 150

// subtraction operator (-)
let y = x - 30;
console.log(y); // -> 120

// Multiplication operator (*)
let z = y * 2;
console.log(z); // -> 240

// Division operator (/)
let a = z / 4;
console.log(a); // -> 60

// Modulus operator (%)
let b = a % 7;
console.log(b); // -> 4  (60 divided by 7 leaves a remainder of 4)

//Exponentiation operator (**)
let c = 3 ** 3;
console.log(c); // -> 27 (3 raised to the power of 3)

// post Increment 
let d = b++;
console.log(d); // -> 4 (returns b, then increments it)
console.log(b); // -> 5 (b is now incremented to 5)

// pre Increment
let e = ++b;
console.log(e); // -> 6 (increments b, then returns it)
console.log(b); // -> 6 (b remains 6)

// post Decrement
let f = e--;
console.log(f); // -> 6 (returns e, then decrements it)
console.log(e); // -> 5 (e is now decremented to 5)

// pre Decrement
let g = --e;
console.log(g); // -> 4 (decrements e, then returns it)
console.log(e); // -> 4 (e remains 4)

// Using the Math.pow() method for Exponentiation
let x1 = 5;
let z1 = Math.pow(x1,2);
console.log(z1); // -> 25 (5 raised to the power of 2)

// JavaScript Assignment Operators
// Assignment operators assign values to JavaScript variables.

// Operator	Example	 Same As	     Result
// =	        x = y	 x = y	         x = 5
// +=	        x += y	 x = x + y	     x = 15
// -=	        x -= y	 x = x - y	     x = 5
// *=	        x *= y	 x = x * y	     x = 50
// **=	        x **= y	 x = x ** y	     x = 100000
// /=	        x /= y	 x = x / y	     x = 2
// %=	        x %= y	 x = x % y	     x = 0
// :	        x: 45	 size.x = 45	     x = 45

// Logical Operators
// Logical operators are typically used with Boolean (logical) values; when they are, they return a Boolean value.

// Operator	Description
// &&	    Logical AND
// ||	    Logical OR
// !	    Logical NOT

// Logical AND (&&) Operator
let h = 5;
let i = 10;
let andResult = (h < 10 && i > 5);
console.log(andResult); // -> true (both conditions are true)       

// Logical OR (||) Operator
let orResult = (h > 10 || i > 5);
console.log(orResult); // -> true (one condition is true)       

// Logical NOT (!) Operator
let notResult = !(h < 10);
console.log(notResult); // -> false (negates the true condition)


// Conditional (Ternary) Operator
// JavaScript also contains a conditional operator that assigns a value to a variable based on some condition.
// Syntax
// variablename = (condition) ? value1:value2

let voteable = (age >= 18) ? "yes you can vote" : "no you can't vote";
console.log(voteable); // -> yes you can vote

let voteables = (age < 18) ? "Too young":"Old enough";
console.log(voteables); // -> Old enough

// JavaScript Bitwise Operators
// Bitwise operators treat their operands as a set of 32 bits (zeros and ones) rather than as decimal, hexadecimal, or octal numbers.

// Operator	Description
// &	    AND
// |	    OR
// ^	    XOR (Exclusive OR)
// ~	    NOT
// <<	    Left Shift
// >>	    Sign Propagating Right Shift
// >>>	    Zero Fill Right Shift       
let j = 5;  
let k = 1;  
console.log(j & k); // -> 1 (AND) 5:  0101 , 1:  0001 = 0001
console.log(j | k); // -> 5 (OR)  5:  0101 , 1:  0001 = 0101
console.log(j ^ k); // -> 4 (XOR) 5:  0101 , 1:  0001 = 0100
console.log(~j); // -> -6 (NOT) 5:  0000...0101 = 1111...1010 (two's complement representation)
console.log(j << 1); // -> 10 (Left Shift)
console.log(j >> 1); // -> 2 (Sign Propagating Right Shift)
console.log(j >>> 1); // -> 2 (Zero Fill Right Shift)


// JavaScript Comparison Operators
// Comparison operators are used in logical statements to determine equality or difference between variables or values.

// Operator	Description
// ==	    Equal to
// ===	    Equal value and equal type  
// !=	    Not equal
// !==	    Not equal value or not equal type
// >	    Greater than
// <	    Less than
// >=	    Greater than or equal to
// <=	    Less than or equal to       


// Operator	     Description          	            Example
// ==	          equal to	                             x == 5
// ===	          equal value and equal type	         x === 5
// !=	          not equal                              x != 5
// !==	          not equal value or not equal type	     x !== 5
// >	          greater than	                         x > 5
// <	          less than	                             x < 5
// >=	          greater than or equal to	             x >= 5
// <=	          less than or equal to	                 x <= 5    

let a1 = 6
let b1 = 3
