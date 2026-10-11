
// Phase 2 — Lesson 9: Callbacks in JavaScript


// 1. What is a callback?

function greet(name) {
    console.log("Hello " + name);
}

function processUser(callback) {
    callback("Likitha");
}

processUser(greet);


// 2. Passing an arrow function as a callback

function calculate(a, b, callback) {
    return callback(a, b);
}

const result1 = calculate(10, 5, (x, y) => x + y);

console.log(result1); // 15


// Passing different callbacks

function calculate2(a, b, callback) {
    return callback(a, b);
}

console.log(calculate2(10, 5, (x, y) => x + y)); // 15
console.log(calculate2(10, 5, (x, y) => x * y)); // 50
console.log(calculate2(10, 5, (x, y) => x - y)); // 5


// 3. Callbacks in array methods


// Example: map()

const numbers1 = [1, 2, 3];

const doubled = numbers1.map((n) => n * 2);

console.log(doubled); // [2, 4, 6]


// Example: filter()

const numbers2 = [10, 15, 20, 25];

const filteredNumbers = numbers2.filter((n) => n >= 20);

console.log(filteredNumbers); // [20, 25]


// 4. Named callback vs anonymous callback


// Named callback

function double(n) {
    return n * 2;
}

const result2 = [1, 2, 3].map(double);

console.log(result2); // [2, 4, 6]


// Anonymous arrow-function callback

const result3 = [1, 2, 3].map(n => n * 2);

console.log(result3); // [2, 4, 6]


// 5. Synchronous and asynchronous callbacks


// Synchronous callback

function greetUser(callback) {
    console.log("Hello");
    callback();
}

greetUser(() => console.log("Welcome"));

console.log("Finished");


// Asynchronous callback

console.log("Start");

setTimeout(() => {
    console.log("Inside callback");
}, 1000);

console.log("End");
