/*
====================================================
JAVASCRIPT - SECTION 2: DATA TYPES & BASIC OPERATORS
====================================================

JavaScript values have different DATA TYPES.

The important basic data types are:

1. number
2. string
3. boolean
4. undefined
5. null

We can check the type of a value using:

typeof value
*/


/*
----------------------------------------------------
1. NUMBER
----------------------------------------------------

Numbers can be integers or decimals.
*/

const age = 21;
const price = 99.99;

console.log(typeof age);       // number
console.log(typeof price);     // number


/*
----------------------------------------------------
2. STRING
----------------------------------------------------

A string represents text.

Strings can use:
"double quotes"
'single quotes'
`backticks`
*/

const name = "Alice";
const city = 'London';

console.log(typeof name);      // string
console.log(typeof city);      // string


/*
----------------------------------------------------
3. BOOLEAN
----------------------------------------------------

A boolean has only two possible values:

true
false
*/

const isStudent = true;
const isLoggedIn = false;

console.log(typeof isStudent);     // boolean
console.log(typeof isLoggedIn);    // boolean


/*
----------------------------------------------------
4. UNDEFINED
----------------------------------------------------

A variable that has been declared but has no value
is undefined.
*/

let result;

console.log(result);          // undefined
console.log(typeof result);  // undefined


/*
----------------------------------------------------
5. NULL
----------------------------------------------------

null means intentionally empty.

Example:
We may know a user has no profile picture yet.

NOTE:
typeof null returns "object".

This is a historical JavaScript quirk.
*/

const profilePicture = null;

console.log(profilePicture);         // null
console.log(typeof profilePicture);  // object


/*
====================================================
BASIC OPERATORS
====================================================

Arithmetic operators:

+   Addition
-   Subtraction
*   Multiplication
/   Division
%   Remainder (modulus)
*/

const a = 10;
const b = 3;

console.log("Addition:", a + b);        // 13
console.log("Subtraction:", a - b);     // 7
console.log("Multiplication:", a * b);  // 30
console.log("Division:", a / b);        // 3.333...
console.log("Remainder:", a % b);       // 1


/*
====================================================
COMPARISON OPERATORS
====================================================

Comparison operators return a BOOLEAN:

true or false

===  Strictly equal
!==  Strictly not equal
>    Greater than
<    Less than
>=   Greater than or equal to
<=   Less than or equal to
*/


console.log(5 === 5);     // true
console.log(5 === "5");   // false

console.log(5 !== "5");   // true

console.log(10 > 5);      // true
console.log(10 < 5);      // false

console.log(10 >= 10);    // true
console.log(5 <= 10);     // true


/*
====================================================
STRICT EQUALITY === vs LOOSE EQUALITY ==
====================================================

=== checks:
1. Value
2. Data type

== tries to convert values before comparing.

Example:
*/

console.log(5 === "5");   // false
// number is NOT the same type as string

console.log(5 == "5");    // true
// JavaScript converts the string "5" into number 5


/*
IMPORTANT RULE FOR MODERN JAVASCRIPT / REACT:

Always prefer:

===

and

!==

Avoid:

==

and

!=

This prevents unexpected type conversion bugs.
*/


/*
====================================================
EXERCISE
====================================================

1. Create a variable called productName
   and store any product name.

2. Create a variable called price
   and store a number.

3. Create a variable called inStock
   and store true or false.

4. Print the type of all three variables.

5. Create two values:
   const num = 10;
   const text = "10";

6. Compare them using:
   num === text
   num == text

7. Print both results.
*/


const productName = "Laptop";
const productPrice = 50000;
const inStock = true;

console.log("Product type:", typeof productName);
console.log("Price type:", typeof productPrice);
console.log("Stock type:", typeof inStock);

const num = 10;
const text = "10";

console.log("Strict equality:", num === text);
console.log("Loose equality:", num == text);


/*
Key things to remember from this section

number     → 10, 99.5
string     → "Hello"
boolean    → true / false
undefined  → declared but no value
null       → intentionally empty

typeof value → checks data type

=== → checks value AND type ⭐
==  → converts types, avoid in modern JS

%   → gives remainder


*/