/*
====================================================
JAVASCRIPT - SECTION 5: DESTRUCTURING
====================================================

Destructuring is a way to extract values from:

1. Arrays
2. Objects

and store them directly in variables.

This is VERY important for React because useState
and props commonly use destructuring.
*/


/*
----------------------------------------------------
1. ARRAY DESTRUCTURING
----------------------------------------------------

Without destructuring:

const arr = [10, 20, 30];

const first = arr[0];
const second = arr[1];

With destructuring:
*/

const numbers = [10, 20, 30];

const [first, second] = numbers;

console.log("First:", first);     // 10
console.log("Second:", second);   // 20


/*
----------------------------------------------------
2. SKIPPING ARRAY VALUES
----------------------------------------------------

We can skip values by leaving an empty space
between commas.
*/

const colors = ["Red", "Green", "Blue"];

const [red, , blue] = colors;

console.log("First color:", red);     // Red
console.log("Third color:", blue);    // Blue


/*
----------------------------------------------------
3. REST WITH ARRAY DESTRUCTURING
----------------------------------------------------

...rest collects all remaining values.
*/

const marks = [90, 85, 88, 92];

const [firstMark, ...remainingMarks] = marks;

console.log("First mark:", firstMark);           
console.log("Remaining marks:", remainingMarks); 


/*
----------------------------------------------------
4. OBJECT DESTRUCTURING
----------------------------------------------------

Without destructuring:

const person = {
    name: "Alice",
    age: 30
};

const name = person.name;
const age = person.age;


With destructuring:
*/

const person = {
    name: "Alice",
    age: 30,
    city: "London"
};

const { name, age } = person;

console.log("Name:", name);
console.log("Age:", age);


/*
----------------------------------------------------
5. EXTRACTING ONLY WHAT YOU NEED
----------------------------------------------------

We don't need to extract every property.
*/

const student = {
    studentName: "Likitha",
    branch: "AI/ML",
    semester: 6,
    college: "MIT Manipal"
};

const { studentName, branch } = student;

console.log("Student:", studentName);
console.log("Branch:", branch);


/*
----------------------------------------------------
6. RENAMING VARIABLES
----------------------------------------------------

Sometimes the object property name and the variable
name can be different.

Syntax:

const { propertyName: newVariableName } = object;
*/

const user = {
    name: "John",
    age: 25
};

const { name: userName, age: userAge } = user;

console.log("User name:", userName);
console.log("User age:", userAge);


/*
----------------------------------------------------
7. DESTRUCTURING FUNCTION PARAMETERS
----------------------------------------------------

Instead of receiving the complete object:

function greetUser(user) {
    console.log(user.name);
}

We can directly destructure the properties.
*/

const greetUser = ({ name, age }) => {
    console.log(`${name} is ${age} years old.`);
};

greetUser(person);


/*
====================================================
WHY THIS MATTERS FOR REACT
====================================================

1. useState uses array destructuring:

const [count, setCount] = useState(0);


count    -> current value
setCount -> function to update the value


2. React props often use object destructuring:

const Profile = ({ name, age }) => {
    return <h1>{name}</h1>;
};
*/


/*
====================================================
EXERCISE
====================================================

1. Create an array:

const fruits = ["Apple", "Banana", "Mango"];

Use array destructuring to extract:

firstFruit
secondFruit


2. Create an object:

const movie = {
    title: "Inception",
    year: 2010,
    rating: 8.8
};

Use object destructuring to extract:

title
rating


3. Create an arrow function called printStudent
   that receives an object using destructuring.

The object should contain:

name
course

Print:

<name> is studying <course>
*/


const fruits = ["Apple", "Banana", "Mango"];

const [firstFruit, secondFruit] = fruits;

console.log("First fruit:", firstFruit);
console.log("Second fruit:", secondFruit);


const movie = {
    title: "Inception",
    year: 2010,
    rating: 8.8
};

const { title, rating } = movie;

console.log("Movie:", title);
console.log("Rating:", rating);


const printStudent = ({ name, course }) => {
    console.log(`${name} is studying ${course}`);
};

const studentDetails = {
    name: "Likitha",
    course: "AI/ML"
};

printStudent(studentDetails);