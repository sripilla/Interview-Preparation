/*
====================================================
JAVASCRIPT - SECTION 9: TERNARY OPERATOR
====================================================

The ternary operator is a short way to write
a simple if/else condition.

Syntax:

condition ? valueIfTrue : valueIfFalse


Read it like:

"Is the condition true?"

YES -> use valueIfTrue
NO  -> use valueIfFalse
*/


/*
====================================================
1. BASIC EXAMPLE
====================================================
*/

const age = 20;

const status = age >= 18 ? "Adult" : "Minor";

console.log(status);


/*
This is equivalent to:

let status;

if (age >= 18) {
    status = "Adult";
} else {
    status = "Minor";
}
*/


/*
====================================================
2. MORE EXAMPLES
====================================================
*/

const marks = 75;

const result = marks >= 40 ? "Pass" : "Fail";

console.log("Result:", result);


const isLoggedIn = true;

const message = isLoggedIn ? "Welcome back!" : "Please log in";

console.log(message);


/*
====================================================
3. USING TERNARY INSIDE A TEMPLATE LITERAL
====================================================
*/

const score = 85;

console.log(
    `Your result is: ${score >= 50 ? "Pass" : "Fail"}`
);


/*
====================================================
4. TERNARY WITH FUNCTIONS
====================================================

The condition can decide which value
a function should return.
*/

const checkNumber = number =>
    number > 0 ? "Positive" : "Zero or Negative";

console.log(checkNumber(10));
console.log(checkNumber(-5));


/*
====================================================
WHY THIS MATTERS FOR REACT
====================================================

Ternary operators are commonly used for
conditional rendering.

Example:

const isLoggedIn = true;

In React JSX:

{
    isLoggedIn
        ? <Dashboard />
        : <Login />
}

Meaning:

If isLoggedIn is true:
    Show Dashboard

Otherwise:
    Show Login
*/


/*
====================================================
TERNARY vs IF/ELSE
====================================================

Use ternary for simple decisions:

condition ? trueValue : falseValue


Use if/else when the logic becomes large
or difficult to read.
*/


/*
====================================================
EXERCISE
====================================================

1. Create:

const temperature = 30;

Use a ternary operator to print:

"Hot" if temperature is 25 or above
"Cold" otherwise


2. Create:

const hasSubscription = false;

Store either:

"Premium Access"
or
"Free Access"

using a ternary operator.


3. Create an arrow function called checkEven.

It should return:

"Even" if the number is divisible by 2
"Odd" otherwise.

Test it with:

checkEven(10)
checkEven(7)
*/


const temperature = 30;

const weather = temperature >= 25 ? "Hot" : "Cold";

console.log("Weather:", weather);


const hasSubscription = false;

const access = hasSubscription
    ? "Premium Access"
    : "Free Access";

console.log("Access:", access);


const checkEven = number =>
    number % 2 === 0 ? "Even" : "Odd";

console.log("10 is:", checkEven(10));
console.log("7 is:", checkEven(7));

/* EXPECTED OUTPUT

Adult
Result: Pass
Welcome back!
Your result is: Pass
Positive
Zero or Negative
Weather: Hot
Access: Free Access
10 is: Even
7 is: Odd
*/