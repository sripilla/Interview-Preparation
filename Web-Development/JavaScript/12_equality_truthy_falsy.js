/*
====================================================
JAVASCRIPT - SECTION 12:
EQUALITY & TRUTHY / FALSY
====================================================

JavaScript often needs to decide whether a value
should be treated as:

true
or
false

This is important when using:

- if statements
- ternary operators
- logical operators
- React conditional rendering
*/


/*
====================================================
1. STRICT EQUALITY ===
====================================================

=== checks BOTH:

1. Value
2. Data type

This is the preferred equality operator
in modern JavaScript.
*/

console.log(5 === 5);       // true
console.log(5 === "5");     // false
console.log("hello" === "hello"); // true
console.log(true === true); // true


/*
====================================================
2. STRICT NOT EQUAL !==
====================================================

!== checks whether values are NOT equal
or have different types.
*/

console.log(5 !== 10);      // true
console.log(5 !== "5");     // true
console.log(5 !== 5);       // false


/*
====================================================
3. LOOSE EQUALITY ==
====================================================

== allows JavaScript to convert types before
comparing values.

Example:
*/

console.log(5 == "5");      // true


/*
Because JavaScript converts:

"5" -> 5

Then compares:

5 == 5


RULE:

Prefer === and !==.

Avoid == and != in modern JavaScript because
automatic type conversion can cause bugs.
*/


/*
====================================================
4. FALSY VALUES
====================================================

There are a few values JavaScript treats as false
when used inside a condition.

The main falsy values are:

false
0
""
null
undefined
NaN

Everything else is generally truthy.
*/


console.log(Boolean(false));      // false
console.log(Boolean(0));          // false
console.log(Boolean(""));         // false
console.log(Boolean(null));       // false
console.log(Boolean(undefined));  // false
console.log(Boolean(NaN));        // false


/*
====================================================
5. TRUTHY VALUES
====================================================

Examples of truthy values:
*/

console.log(Boolean(true));       // true
console.log(Boolean(1));          // true
console.log(Boolean(-10));        // true
console.log(Boolean("hello"));    // true
console.log(Boolean("false"));    // true
console.log(Boolean([]));         // true
console.log(Boolean({}));         // true


/*
IMPORTANT:

The string:

"false"

is NOT the boolean:

false


Because a non-empty string is truthy:

Boolean("false") -> true
*/


/*
====================================================
6. TRUTHY/FALSY IN IF CONDITIONS
====================================================
*/

const username = "";

if (username) {
    console.log("Username exists");
} else {
    console.log("Username is missing");
}


const user = "Likitha";

if (user) {
    console.log(`Welcome, ${user}!`);
}


/*
====================================================
7. LOGICAL NOT !
====================================================

! reverses the truthiness of a value.

Truthy -> false
Falsy  -> true
*/

console.log(!true);       // false
console.log(!false);      // true

console.log(!0);          // true
console.log(!1);          // false

console.log(!"");         // true
console.log(!"hello");    // false


/*
====================================================
8. DOUBLE NOT !!
====================================================

!! converts any value into a real boolean.

Truthy value -> true
Falsy value  -> false
*/

console.log(!!"hello");   // true
console.log(!!"");        // false

console.log(!!100);       // true
console.log(!!0);         // false


/*
====================================================
WHY THIS MATTERS FOR REACT
====================================================

You will often conditionally render components.

Example idea:

const isLoggedIn = true;

if (isLoggedIn) {
    // Show dashboard
}


You may also see:

{isLoggedIn && <Dashboard />}


Meaning:

If isLoggedIn is truthy,
render Dashboard.


Another example:

{user ? <Profile /> : <Login />}


Meaning:

If user is truthy:
    Show Profile

Otherwise:
    Show Login
*/


/*
====================================================
EXERCISE
====================================================

1. Compare:

10 === "10"
10 !== "10"

2. Check the boolean value of:

0
"Hello"
""
null

using Boolean().

3. Create:

const loggedInUser = "";

Use an if/else statement.

If loggedInUser is truthy, print:

Welcome, <loggedInUser>!

Otherwise print:

Please log in.

4. Create:

const points = 0;

Use a ternary operator to print:

"Has points" if points is truthy
"No points" otherwise.
*/


console.log("10 === '10':", 10 === "10");
console.log("10 !== '10':", 10 !== "10");


console.log("Boolean(0):", Boolean(0));
console.log("Boolean('Hello'):", Boolean("Hello"));
console.log("Boolean(''):", Boolean(""));
console.log("Boolean(null):", Boolean(null));


const loggedInUser = "";

if (loggedInUser) {
    console.log(`Welcome, ${loggedInUser}!`);
} else {
    console.log("Please log in.");
}


const points = 0;

const pointsStatus = points
    ? "Has points"
    : "No points";

console.log(pointsStatus);