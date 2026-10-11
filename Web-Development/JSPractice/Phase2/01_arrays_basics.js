

// Accessing array elements

let marks2 = [85, 90, 78, 92, 88];

console.log(marks2[0]); // 85
console.log(marks2[1]); // 90
console.log(marks2[3]); // 92


// Changing array elements

let marks1 = [85, 90, 78];

marks1[1] = 95;

console.log(marks1);


// Finding the length of an array

let marks = [85, 90, 78, 92, 88];

console.log(marks.length); // 5

// Adding and removing elements

let fruits = ["apple", "banana"];

fruits.push("mango");
console.log(fruits);
// ["apple", "banana", "mango"]

fruits.pop();
console.log(fruits);
// ["apple", "banana"]

fruits.unshift("orange");
console.log(fruits);
// ["orange", "apple", "banana"]

fruits.shift();
console.log(fruits);
// ["apple", "banana"]

// Arrays can hold different data types

let student = ["Likitha", 21, true];

console.log(student[0]); // "Likitha"
console.log(student[1]); // 21
console.log(student[2]); // true

