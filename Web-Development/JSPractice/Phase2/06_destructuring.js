
// Array Destructuring
let marks = [85, 90, 78, 92];

// Extract values from the array
let [a, b, c, d] = marks;

console.log(a); // 85
console.log(b); // 90
console.log(c); // 78
console.log(d); // 92



// Skipping elements
let numbers = [10, 20, 30, 40];
let [first, , third] = numbers;

console.log(first); // 10
console.log(third); // 30



// Default values
let fruits = ["Apple"];
let [first1, second = "Banana"] = fruits;

console.log(first1);  // Apple
console.log(second); // Banana



// Destructuring objects
const student = {
    name: "Likitha",
    age: 21,
    branch: "AI/ML"
};

const { name, age } = student;

console.log(name); // Likitha
console.log(age);  // 21



/*
Arrays use square brackets [] and match by position.
Objects use curly braces {} and match by property name.

*/

const student1 = {
    name1: "Likitha",
    age1: 21
};

const { age1, name1 } = student1;

console.log(age1);  // 21
console.log(name1); // Likitha



// Renaming variables while destructuring
const student2 = {
    name: "Likitha",
    age: 21
};
const { name: studentName } = student2;
console.log(studentName); // Likitha


// Nested destructuring
const student3 = {
    name: "Likitha",
    address: {
        city: "Manipal",
        country: "India"
    }
};



const {
    address: { city }
} = student3;

console.log(city); // Manipal
