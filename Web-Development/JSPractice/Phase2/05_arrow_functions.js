// Arrow Functions

// add 2 nos

function add(a, b) {
    return a + b;
}
console.log(add(10, 20)); // 30


// An arrow function is a shorter way to write a function.
// The same example can be written as:
// Notice the symbol =>. This is called the arrow operator.

const add = (a, b) => {
    return a + b;
};

console.log(add(10, 20)); // 30



/*
Shortening arrow functions
When the function body contains just one expression, you can omit the braces and return.
*/

const square = (n) => n * n;
console.log(square(5)); // 25

/*
JavaScript automatically returns the result of the expression.
If you use {} in an arrow function body, you generally need an explicit return when you want to return a value.
*/

// With braces: explicit return needed
const double = (n) => {
    return n * 2;
};

// Without braces: implicit return
const double2 = (n) => n * 2;




// Arrow functions with different numbers of parameters

// No parameters
const greet = () => "Hello!";
console.log(greet()); // Hello!


// One parameter
const double1 = n => n * 2;
console.log(double1(6)); // 12


// Two parameters
const multiply = (a, b) => a * b;
console.log(multiply(4, 5)); // 20


// Arrow functions with map() and filter()

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
console.log(doubled);
// [2, 4, 6]