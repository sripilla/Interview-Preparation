/*
====================================================
JAVASCRIPT - SECTION 4: ARROW FUNCTIONS
====================================================

A function is a reusable block of code.

Arrow functions are a modern ES6 way of writing
functions.

This is VERY important for React.

You will frequently see:

const functionName = () => {
    // code
};
*/


/*
----------------------------------------------------
1. NORMAL FUNCTION
----------------------------------------------------
*/

function add(a, b) {
    return a + b;
}

console.log("Normal function:", add(2, 3));


/*
----------------------------------------------------
2. ARROW FUNCTION
----------------------------------------------------

Arrow functions use:

(parameters) => {
    code
}
*/

const add2 = (a, b) => {
    return a + b;
};

console.log("Arrow function:", add2(2, 3));


/*
----------------------------------------------------
3. IMPLICIT RETURN
----------------------------------------------------

If the function has ONLY ONE expression,
we can remove:

- Curly braces {}
- return keyword

This is called an implicit return.
*/

const add3 = (a, b) => a + b;

console.log("Implicit return:", add3(2, 3));


/*
----------------------------------------------------
4. SINGLE PARAMETER
----------------------------------------------------

If there is only ONE parameter,
parentheses are optional.
*/

const square = x => x * x;

console.log("Square:", square(4));


/*
----------------------------------------------------
5. NO PARAMETERS
----------------------------------------------------

When there are no parameters,
parentheses are required.
*/

const sayHello = () => {
    console.log("Hello!");
};

sayHello();


/*
----------------------------------------------------
6. MULTIPLE STATEMENTS
----------------------------------------------------

When there are multiple statements,
use curly braces {} and explicitly return
a value if needed.
*/

const calculateTotal = (price, quantity) => {
    const total = price * quantity;
    return total;
};

console.log("Total:", calculateTotal(100, 3));


/*
====================================================
IMPORTANT DIFFERENCE
====================================================

WITH curly braces:

const multiply = (a, b) => {
    return a * b;
};


WITHOUT curly braces:

const multiply = (a, b) => a * b;


Both return the result.

But this will NOT return a value:

const multiply = (a, b) => {
    a * b;
};

Because when we use {}, we need to write
return explicitly.
*/


/*
====================================================
WHY ARROW FUNCTIONS MATTER IN REACT
====================================================

You will frequently write functions like:

const handleClick = () => {
    console.log("Button clicked");
};


And:

const App = () => {
    return <h1>Hello</h1>;
};


Also with array methods:

numbers.map(number => number * 2);
*/


/*
====================================================
EXERCISE
====================================================

1. Create an arrow function called greet
   that takes a name and returns:

   "Hello, <name>!"

2. Create an arrow function called double
   that takes a number and returns
   the number multiplied by 2.

3. Create an arrow function called isAdult
   that takes an age and returns true
   if age is 18 or above.

4. Call all functions and print the results.
*/


const greet = name => `Hello, ${name}!`;

const double = number => number * 2;

const isAdult = age => age >= 18;


console.log(greet("Likitha"));
console.log("Double:", double(10));
console.log("Is adult:", isAdult(21));
console.log("Is adult:", isAdult(15));


/* Remember

Normal function:
function add(a, b) {
    return a + b;
}

Arrow function:
const add = (a, b) => {
    return a + b;
};

Short arrow function:
const add = (a, b) => a + b;
*/