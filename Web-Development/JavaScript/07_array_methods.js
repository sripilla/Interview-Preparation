/*
====================================================
JAVASCRIPT - SECTION 7: ARRAY METHODS
====================================================

Arrays store multiple values.

Example:

const numbers = [1, 2, 3, 4, 5];

JavaScript provides many methods to work with arrays.

The most important ones for React are:

1. map()
2. filter()
3. reduce()
4. find()
5. forEach()
6. includes()

IMPORTANT:
.map() is THE most important array method for React.
It is commonly used to render lists of components.
*/


const numbers = [1, 2, 3, 4, 5];


/*
====================================================
1. map()
====================================================

map() transforms EVERY element in an array.

It returns a NEW array.

Syntax:

array.map(item => {
    return transformedValue;
});

Short form:

array.map(item => transformedValue);
*/


const doubled = numbers.map(number => number * 2);

console.log("Original:", numbers);
console.log("Doubled:", doubled);


/*
Example:

[1, 2, 3]

number * 2

becomes:

[2, 4, 6]
*/


/*
====================================================
2. filter()
====================================================

filter() keeps only elements that match
a condition.

It returns a NEW array.

The condition must return:

true  -> keep the element
false -> remove the element
*/


const evenNumbers = numbers.filter(number => number % 2 === 0);

console.log("Even numbers:", evenNumbers);


/*
Example:

[1, 2, 3, 4, 5]

Keep only numbers where:

number % 2 === 0

Result:

[2, 4]
*/


/*
====================================================
3. reduce()
====================================================

reduce() combines all array elements
into ONE final value.

Syntax:

array.reduce((accumulator, currentValue) => {
    return newAccumulator;
}, initialValue);
*/


const total = numbers.reduce(
    (sum, number) => sum + number,
    0
);

console.log("Total:", total);


/*
How reduce works:

Start:

sum = 0

Step 1:
0 + 1 = 1

Step 2:
1 + 2 = 3

Step 3:
3 + 3 = 6

Step 4:
6 + 4 = 10

Step 5:
10 + 5 = 15
*/


/*
====================================================
4. find()
====================================================

find() returns the FIRST element
that matches a condition.

If nothing is found, it returns undefined.
*/


const foundNumber = numbers.find(number => number > 3);

console.log("First number greater than 3:", foundNumber);


/*
numbers = [1, 2, 3, 4, 5]

First number > 3 is:

4
*/


/*
====================================================
5. forEach()
====================================================

forEach() loops through every element.

Unlike map(), it does NOT return a new array.

Use it when you simply want to perform
an action for each item.
*/


numbers.forEach(number => {
    console.log("Number:", number);
});


/*
====================================================
6. includes()
====================================================

includes() checks whether an array contains
a particular value.

It returns:

true
or
false
*/


console.log("Includes 3:", numbers.includes(3));
console.log("Includes 10:", numbers.includes(10));


/*
====================================================
map() vs forEach()
====================================================

map():

- Transforms elements
- Returns a NEW array

Example:

const doubled = numbers.map(n => n * 2);


forEach():

- Performs an action
- Does NOT return a useful new array

Example:

numbers.forEach(n => console.log(n));
*/


/*
====================================================
WHY .map() MATTERS FOR REACT
====================================================

Imagine this array:

const students = ["Alice", "Bob", "Charlie"];

In React, we can use .map() to create
a component for every student.

Example idea:

students.map(student => (
    <p>{student}</p>
));

So:

["Alice", "Bob", "Charlie"]

becomes conceptually:

<p>Alice</p>
<p>Bob</p>
<p>Charlie</p>


You will use this constantly in React.
*/


/*
====================================================
EXERCISE
====================================================

Use this array:

const marks = [45, 60, 75, 80, 90];

1. Use map() to add 5 marks to every student.

2. Use filter() to get marks greater than or equal
   to 60.

3. Use reduce() to calculate the total marks.

4. Use find() to find the first mark greater than 70.

5. Use includes() to check whether 80 exists.
*/


const marks = [45, 60, 75, 80, 90];


const increasedMarks = marks.map(mark => mark + 5);

console.log("Marks after adding 5:", increasedMarks);


const passedMarks = marks.filter(mark => mark >= 60);

console.log("Marks >= 60:", passedMarks);


const totalMarks = marks.reduce(
    (sum, mark) => sum + mark,
    0
);

console.log("Total marks:", totalMarks);


const firstHighMark = marks.find(mark => mark > 70);

console.log("First mark > 70:", firstHighMark);


console.log("Does 80 exist?", marks.includes(80));

/* EXPECTED OUTPUT 

Original: [ 1, 2, 3, 4, 5 ]
Doubled: [ 2, 4, 6, 8, 10 ]

Even numbers: [ 2, 4 ]

Total: 15

First number greater than 3: 4

Number: 1
Number: 2
Number: 3
Number: 4
Number: 5

Includes 3: true
Includes 10: false

Marks after adding 5: [ 50, 65, 80, 85, 95 ]
Marks >= 60: [ 60, 75, 80, 90 ]
Total marks: 350
First mark > 70: 75
Does 80 exist? true */