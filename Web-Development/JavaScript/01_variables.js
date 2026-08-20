/*
====================================================
JAVASCRIPT - SECTION 1: VARIABLE DECLARATIONS
====================================================

A variable is used to store data.

JavaScript has 3 main ways to declare variables:

1. var   -> Old way, generally avoid in modern JavaScript
2. let   -> Use when the value needs to change
3. const -> Use when the variable should not be reassigned

----------------------------------------------------
1. var
----------------------------------------------------

var is function-scoped.

It is the older way of creating variables.

In modern JavaScript and React, we usually avoid var.
*/


var oldVariable = "Hello";

console.log("Using var:", oldVariable);


/*
----------------------------------------------------
2. let
----------------------------------------------------

let is block-scoped.

Use let when you know the value will change later.
*/

let score = 10;

console.log("Initial score:", score);

// We can reassign a let variable
score = 20;

console.log("Updated score:", score);


/*
----------------------------------------------------
3. const
----------------------------------------------------

const is also block-scoped.

Use const when you DO NOT want to reassign
the variable.

IMPORTANT:
const means the VARIABLE cannot be reassigned.

For now, remember this rule:

const = value should not be reassigned
let   = value may change

In modern JavaScript:
Use const by default.
Use let only when reassignment is needed.
Avoid var.
*/

const name = "Alice";

console.log("Name:", name);

// This would cause an ERROR if uncommented:

// name = "Bob";


/*
====================================================
EXERCISE
====================================================

1. Create a const variable called country
   and store your country name.

2. Create a let variable called age
   and give it any number.

3. Print both values.

4. Change the age to another number.

5. Print the updated age.
*/


const country = "India";

let age = 20;

console.log("Country:", country);
console.log("Initial age:", age);

age = 21;

console.log("Updated age:", age);



/*

Expected output

Using var: Hello
Initial score: 10
Updated score: 20
Name: Alice
Country: India
Initial age: 20
Updated age: 21

*/