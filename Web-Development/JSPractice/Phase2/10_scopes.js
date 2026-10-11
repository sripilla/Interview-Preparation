
// Phase 2 — Lesson 10: Scope in JavaScript


// 1. What is scope?

let name = "Likitha";

function greet() {
    console.log(name);
}

greet(); // Likitha


// Variable declared inside a function

function greet2() {
    let name = "Likitha";
    console.log(name);
}

greet2(); // Likitha

// console.log(name); // ReferenceError if no outer variable named name exists


// 2. The three main types of scope

// Global scope

let globalMessage = "Hello from global scope";

function showGlobal() {
    console.log(globalMessage);
}

showGlobal(); // Hello from global scope


// Function scope

function showFunctionScope() {
    let functionMessage = "Inside function";
    console.log(functionMessage);
}

showFunctionScope(); // Inside function

// console.log(functionMessage); // ReferenceError


// 3. Block scope: let and const

if (true) {
    let age = 21;
    const studentName = "Likitha";

    console.log(age);         // 21
    console.log(studentName); // Likitha
}

// console.log(age);         // ReferenceError
// console.log(studentName); // ReferenceError


// 4. Understanding var vs let vs const

if (true) {
    var a = 10;
    let b = 20;
    const c = 30;
}

console.log(a); // 10

// console.log(b); // ReferenceError
// console.log(c); // ReferenceError


// 5. Function scope

function test() {
    var x = 10;
    let y = 20;

    if (true) {
        console.log(x); // 10
        console.log(y); // 20
    }

    console.log(x); // 10
    console.log(y); // 20
}

test();


// 6. Lexical scope: inner functions can access outer variables

function outer() {
    let message = "Hello";

    function inner() {
        console.log(message);
    }

    inner();
}

outer(); // Hello
