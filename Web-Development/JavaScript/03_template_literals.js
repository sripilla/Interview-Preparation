/*
====================================================
JAVASCRIPT - SECTION 3: TEMPLATE LITERALS
====================================================

Template literals are a modern way to create strings.

They use BACKTICKS:

`Hello`

NOT normal quotes:

"Hello"
'Hello'


Template literals are useful for:

1. Adding variables inside strings
2. Writing expressions inside strings
3. Creating multi-line strings

The special syntax for inserting values is:

${value}
*/


/*
----------------------------------------------------
1. OLD WAY - STRING CONCATENATION
----------------------------------------------------

We use + to join strings and variables.
*/

const name = "Alice";
const age = 30;

const oldMessage =
    "Hello, " + name + "! You are " + age + " years old.";

console.log(oldMessage);


/*
----------------------------------------------------
2. TEMPLATE LITERAL WAY
----------------------------------------------------

Use backticks ` `

Use ${} to insert variables.
*/

const newMessage =
    `Hello, ${name}! You are ${age} years old.`;

console.log(newMessage);


/*
----------------------------------------------------
3. EXPRESSIONS INSIDE ${}
----------------------------------------------------

We can also perform calculations inside ${}.
*/

const price = 100;
const quantity = 3;

console.log(`Total price: ${price * quantity}`);
// Total price: 300


/*
----------------------------------------------------
4. MULTIPLE VARIABLES
----------------------------------------------------
*/

const firstName = "John";
const city = "London";
const course = "JavaScript";

const introduction =
    `My name is ${firstName}. I live in ${city} and I am learning ${course}.`;

console.log(introduction);


/*
----------------------------------------------------
5. MULTI-LINE STRINGS
----------------------------------------------------

Template literals allow strings to naturally
continue across multiple lines.
*/

const message = `Hello!

Welcome to JavaScript.

Keep practicing every day!`;

console.log(message);


/*
====================================================
WHY THIS MATTERS FOR REACT
====================================================

You will often use template literals for:

- Dynamic text
- Building messages
- Creating dynamic class names
- Displaying values

Example idea:

const user = "Likitha";

console.log(`Welcome, ${user}!`);
*/


/*
====================================================
EXERCISE
====================================================

1. Create:
   const studentName = "Your Name";
   const marks = 85;

2. Print:

   Hello, <studentName>!
   You scored <marks> marks.

3. Create:
   const subject = "JavaScript";
   const hours = 2;

4. Print a sentence using a template literal:

   I studied JavaScript for 2 hours today.

5. Create two numbers and display their sum
   inside a template literal.
*/


const studentName = "Likitha";
const marks = 85;

console.log(`Hello, ${studentName}!`);
console.log(`You scored ${marks} marks.`);


const subject = "JavaScript";
const hours = 2;

console.log(`I studied ${subject} for ${hours} hours today.`);


const num1 = 10;
const num2 = 20;

console.log(`${num1} + ${num2} = ${num1 + num2}`);