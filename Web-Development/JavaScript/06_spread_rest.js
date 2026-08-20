/*
====================================================
JAVASCRIPT - SECTION 6: SPREAD & REST OPERATORS
====================================================

Both Spread and Rest use the same symbol:

...

But they do DIFFERENT things depending on where
they are used.

SPREAD -> Expands values
REST   -> Collects values
*/


/*
====================================================
1. SPREAD OPERATOR WITH ARRAYS
====================================================

Spread (...) expands the elements of an array.
*/

const arr1 = [1, 2, 3];

// Without spread, this would create a nested array:
// [arr1, 4, 5]

const arr2 = [...arr1, 4, 5];

console.log("Original array:", arr1);
console.log("New array:", arr2);


/*
====================================================
2. COPYING AN ARRAY
====================================================

Spread is commonly used to create a copy.

IMPORTANT:

const copy = arr1;

does NOT create an independent copy.
Both variables refer to the same array.

Using spread creates a new array.
*/

const original = ["Apple", "Banana"];
const copy = [...original];

copy.push("Mango");

console.log("Original:", original);
console.log("Copy:", copy);


/*
====================================================
3. COMBINING ARRAYS
====================================================
*/

const frontend = ["HTML", "CSS"];
const programming = ["JavaScript", "Python"];

const skills = [...frontend, ...programming];

console.log("All skills:", skills);


/*
====================================================
4. SPREAD OPERATOR WITH OBJECTS
====================================================

Spread can also expand object properties.
*/

const user = {
    name: "Alice",
    age: 30
};

const updatedUser = {
    ...user,
    city: "London"
};

console.log("Original user:", user);
console.log("Updated user:", updatedUser);


/*
====================================================
5. UPDATING AN OBJECT
====================================================

This is VERY important in React.

Instead of changing the original object,
we create a NEW object with the updated value.
*/

const student = {
    name: "Likitha",
    marks: 80,
    course: "AI/ML"
};

const updatedStudent = {
    ...student,
    marks: 90
};

console.log("Original student:", student);
console.log("Updated student:", updatedStudent);


/*
====================================================
6. REST OPERATOR
====================================================

Rest (...) collects multiple values into one array.

Example:

function sum(...numbers)

If we call:

sum(1, 2, 3, 4)

Then:

numbers = [1, 2, 3, 4]
*/

const sum = (...numbers) => {
    return numbers.reduce((total, number) => total + number, 0);
};

console.log("Sum:", sum(1, 2, 3, 4));


/*
====================================================
7. REST WITH DESTRUCTURING
====================================================

Rest can collect the remaining values.
*/

const numbers = [10, 20, 30, 40];

const [first, ...remaining] = numbers;

console.log("First:", first);
console.log("Remaining:", remaining);


/*
====================================================
SPREAD vs REST
====================================================

SPREAD -> EXPANDS

const newArray = [...oldArray, 4];


REST -> COLLECTS

const [first, ...remaining] = array;


Easy way to remember:

... = "open and spread out"
... = "collect the rest"

The meaning depends on where it is used.
*/


/*
====================================================
WHY THIS MATTERS FOR REACT
====================================================

React state should usually be updated IMMUTABLY.

Example:

const user = {
    name: "Alice",
    age: 30
};

Instead of modifying directly:

user.age = 31;

We often create a new object:

const updatedUser = {
    ...user,
    age: 31
};


This pattern becomes extremely important when
updating objects and arrays in React state.
*/


/*
====================================================
EXERCISE
====================================================

1. Create:

const numbers1 = [1, 2, 3];

Create a new array called numbers2 containing:

1, 2, 3, 4, 5

Use the spread operator.


2. Create:

const person = {
    name: "John",
    age: 25
};

Create a NEW object called updatedPerson
where age becomes 26.

Use the spread operator.


3. Create an arrow function called multiplyAll.

It should accept ANY number of arguments using
the rest operator.

Examples:

multiplyAll(2, 3)       -> 6
multiplyAll(2, 3, 4)    -> 24

Use reduce().
*/


const numbers1 = [1, 2, 3];

const numbers2 = [...numbers1, 4, 5];

console.log("Numbers 2:", numbers2);


const person = {
    name: "John",
    age: 25
};

const updatedPerson = {
    ...person,
    age: 26
};

console.log("Original person:", person);
console.log("Updated person:", updatedPerson);


const multiplyAll = (...values) => {
    return values.reduce((total, value) => total * value, 1);
};

console.log("Multiply 2, 3:", multiplyAll(2, 3));
console.log("Multiply 2, 3, 4:", multiplyAll(2, 3, 4));

/*
EXPECTED OUTPUT

Original array: [ 1, 2, 3 ]
New array: [ 1, 2, 3, 4, 5 ]

Original: [ 'Apple', 'Banana' ]
Copy: [ 'Apple', 'Banana', 'Mango' ]

All skills: [ 'HTML', 'CSS', 'JavaScript', 'Python' ]

Original user: { name: 'Alice', age: 30 }
Updated user: { name: 'Alice', age: 30, city: 'London' }

Original student: { name: 'Likitha', marks: 80, course: 'AI/ML' }
Updated student: { name: 'Likitha', marks: 90, course: 'AI/ML' }

Sum: 10

First: 10
Remaining: [ 20, 30, 40 ]

Numbers 2: [ 1, 2, 3, 4, 5 ]

Original person: { name: 'John', age: 25 }
Updated person: { name: 'John', age: 26 }

Multiply 2, 3: 6
Multiply 2, 3, 4: 24


*/