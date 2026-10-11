

// Strings representation
/*
let name = "Likitha";
let branch = 'AI/ML';
let message = `Welcome to JavaScript`;
*/


// Accessing characters
let language = "JavaScript";

console.log(language[0]); // J
console.log(language[1]); // a
console.log(language[4]); // S

// Finding the length
let language1 = "JavaScript";

console.log(language1.length); // 10

// Spaces count as characters too.
let name = "Hello World";
console.log(name.length); // 11



// Important string methods

// Uppercase and lowercase
let text = "JavaScript";

console.log(text.toUpperCase()); // JAVASCRIPT
console.log(text.toLowerCase()); // javascript

// Removing extra spaces
// trim() removes whitespace at the beginning and end, not spaces between words.
let text1 = "   Likitha   ";
console.log(text1.trim()); // "Likitha"



// Checking whether a string contains text
let text3 = "I am learning JavaScript";

console.log(text3.includes("JavaScript")); // true
console.log(text3.includes("Python"));     // false



// Extracting part of a string
let text4 = "JavaScript";

console.log(text4.slice(0, 4)); // Java
console.log(text4.slice(4, 10)); // Script


// replace()
let text5 = "I am Sam";
console.log(text5.replace("Sam", "Ana"));



// Strings are immutable
let word = "CAT";
word[0] = "B";
console.log(word); // CAT


let word = "CAT";
word = "B" + word.slice(1);
console.log(word); // BAT


// Combining strings

let firstName = "Likitha";
let message = "Hello, " + firstName;

console.log(message); // Hello, Likitha



// use template literals with backticks and ${}.
let name1 = "Likitha";
let age = 21;

console.log(`My name is ${name1} and I am ${age} years old.`);




