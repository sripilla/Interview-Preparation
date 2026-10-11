// ==========================================
// PROGRAM 5: FUNCTIONS
// ==========================================

// 1. FUNCTION WITHOUT PARAMETERS

function greet() {
    console.log("Hello!");
}

greet(); // Call the function


// 2. FUNCTION WITH A PARAMETER

function greetPerson(name) {
    console.log("Hello " + name);
}

greetPerson("Likitha");

// name is the parameter.
// "Likitha" is the argument.


// 3. FUNCTION THAT RETURNS A VALUE

function add(a, b) {
    return a + b;
}

let result = add(10, 20);

console.log(result); // Output: 30


// 4. FUNCTION TO MULTIPLY TWO NUMBERS

function multiply(a, b) {
    return a * b;
}

console.log(multiply(4, 5)); // Output: 20


// 5. FUNCTION TO CALCULATE A SQUARE

function square(n) {
    return n * n;
}

console.log(square(5)); // Output: 25


// 6. console.log() VS return

function printSum(a, b) {
    console.log(a + b); // Displays the sum
}

function getSum(a, b) {
    return a + b; // Gives the sum back to the caller
}

printSum(2, 3); // Prints 5

let answer = getSum(2, 3);
console.log(answer); // Prints 5