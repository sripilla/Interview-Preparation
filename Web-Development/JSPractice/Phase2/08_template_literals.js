
// Lesson 8: Template Literals in JavaScript


// The problem with normal strings

const name = "Likitha";
const age = 21;

console.log("My name is " + name + " and I am " + age + " years old.");


// What is a template literal?

const name2 = "Likitha";
const age2 = 21;

console.log(`My name is ${name2} and I am ${age2} years old.`);


// How interpolation works

const name3 = "Likitha";

console.log(`Hello, ${name3}!`);


// You can insert expressions too

const a = 10;
const b = 20;

console.log(`The sum is ${a + b}.`);


// Another example

const price = 500;
const quantity = 3;

console.log(`Total price: ₹${price * quantity}`);


// Multiline strings

const message = `Hello Likitha,
Welcome to JavaScript.
Keep practising every day!`;

console.log(message);


// Template literals with arrow functions

const greet = (name) => `Hello, ${name}!`;

console.log(greet("Likitha"));
console.log(greet("Sam"));


// Why is this important for React?

const student = {
    name: "Likitha",
    branch: "AI/ML"
};

const message2 = `Welcome ${student.name} to ${student.branch}!`;

console.log(message2);
