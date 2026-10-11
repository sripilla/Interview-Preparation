// ==========================================
// PROGRAM 1: VARIABLES AND DATA TYPES
// ==========================================

// 1. VARIABLES: let and const

// let: use when the value can be reassigned
let age = 21;
console.log(age); // Output: 21

age = 22;
console.log(age); // Output: 22

// const: use when the variable should not be reassigned
const name = "Likitha";
console.log(name); // Output: Likitha

// Reassigning a const variable causes an error.
// name = "Anu";


// 2. DATA TYPES

// String: text inside quotes
const city = "Bangalore";
console.log(typeof city); // Output: string

// Number: integers and decimal numbers
const marks = 85;
const price = 99.5;

console.log(typeof marks); // Output: number
console.log(typeof price); // Output: number

// Boolean: true or false
const isStudent = true;
console.log(typeof isStudent); // Output: boolean

// Undefined: declared without assigning a value
let result;
console.log(result);        // Output: undefined
console.log(typeof result); // Output: undefined

// Null: intentionally empty value
let selectedUser = null;
console.log(selectedUser); // Output: null

// JavaScript quirk: typeof null returns "object".
console.log(typeof selectedUser); // Output: object

// Object: stores related information together
const student = {
    name: "Likitha",
    age: 21,
    branch: "AI/ML"
};

console.log(student);
console.log(typeof student); // Output: object