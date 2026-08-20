# JavaScript & ES6 — Quick Revision Sheet

Foundation before React — this is the actual language React is built in.
Explicitly on your exam syllabus under "ES6 & JavaScript."

## 1. Variable Declarations
```javascript
var x = 1;      // old way — function-scoped, avoid in modern code
let y = 2;        // block-scoped, can be reassigned
const z = 3;         // block-scoped, CANNOT be reassigned

let count = 0;
count = 5;          // OK

const name = "Alice";
// name = "Bob";    // ERROR — can't reassign const
```
**Rule of thumb:** use `const` by default, `let` when you need to
reassign, avoid `var` entirely in React code.

## 2. Data Types & Basic Operators
```javascript
console.log(typeof 5);          // "number"
console.log(typeof "hi");         // "string"
console.log(typeof true);           // "boolean"
console.log(typeof undefined);        // "undefined"
console.log(typeof null);               // "object" (a known JS quirk)

console.log(5 === "5");    // false — strict equality (checks type too)
console.log(5 == "5");       // true  — loose equality (converts type first)
```
**Always use `===` and `!==`** in React code, never `==`/`!=` — avoids
unexpected type coercion bugs.

## 3. Template Literals (backticks)
```javascript
const name = "Alice";
const age = 30;

// Old way
console.log("Hello, " + name + "! You are " + age + ".");

// Template literal way (use this)
console.log(`Hello, ${name}! You are ${age}.`);
// Hello, Alice! You are 30.

// Multi-line strings work naturally too
const msg = `Line one
Line two`;
```

## 4. Arrow Functions
```javascript
// Old way
function add(a, b) {
    return a + b;
}

// Arrow function way
const add2 = (a, b) => {
    return a + b;
};

// Shorthand — single expression, implicit return (no braces/return needed)
const add3 = (a, b) => a + b;

// Single parameter — parentheses optional
const square = x => x * x;

console.log(add3(2, 3));   // 5
console.log(square(4));      // 16
```
**Why this matters for React:** component functions and event handlers
are almost always written as arrow functions.

## 5. Destructuring (used constantly in React props/state)
```javascript
// Array destructuring
const arr = [1, 2, 3];
const [first, second] = arr;
console.log(first, second);   // 1 2

// This EXACT pattern is how useState works in React:
// const [count, setCount] = useState(0);

// Object destructuring
const person = { name: "Alice", age: 30, city: "NY" };
const { name, age } = person;
console.log(name, age);   // Alice 30

// Destructuring function parameters (common for React props)
function greet({ name, age }) {
    console.log(`${name} is ${age}`);
}
greet(person);   // Alice is 30
```

## 6. Spread & Rest Operators
```javascript
// Spread — expands an array/object
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2);   // [1, 2, 3, 4, 5]

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };
console.log(obj2);   // { a: 1, b: 2, c: 3 }

// Common React pattern — updating state immutably
const state = { name: "Alice", age: 30 };
const updatedState = { ...state, age: 31 };
console.log(updatedState);   // { name: 'Alice', age: 31 }

// Rest — collects remaining items
function sum(...numbers) {
    return numbers.reduce((total, n) => total + n, 0);
}
console.log(sum(1, 2, 3, 4));   // 10
```

## 7. Array Methods You'll Use Constantly
```javascript
const nums = [1, 2, 3, 4, 5];

// map — transform each element, returns new array (used for rendering lists in React)
console.log(nums.map(n => n * 2));         // [2, 4, 6, 8, 10]

// filter — keep elements matching a condition
console.log(nums.filter(n => n % 2 === 0));  // [2, 4]

// reduce — combine into a single value
console.log(nums.reduce((sum, n) => sum + n, 0));   // 15

// find — first element matching a condition
console.log(nums.find(n => n > 3));          // 4

// forEach — loop without returning anything
nums.forEach(n => console.log(n));

// includes — check membership
console.log(nums.includes(3));   // true
```
**`.map()` is THE most important one for React** — it's how you render
lists of components from an array of data.

## 8. Promises & Async/Await
```javascript
// Promise basics
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("data loaded"), 1000);
    });
}

fetchData().then(result => console.log(result));

// async/await (cleaner syntax for the same thing)
async function loadData() {
    const result = await fetchData();
    console.log(result);
}
loadData();

// try/catch for error handling with async/await
async function loadDataSafely() {
    try {
        const result = await fetchData();
        console.log(result);
    } catch (error) {
        console.log("Error:", error);
    }
}
```
**Why this matters for React:** fetching data from an API inside
`useEffect` almost always uses async/await.

## 9. Ternary Operator (common in JSX conditional rendering)
```javascript
const age = 20;
const status = age >= 18 ? "adult" : "minor";
console.log(status);   // adult

// In JSX this becomes:
// {age >= 18 ? <AdultView /> : <MinorView />}
```

## 10. Optional Chaining & Nullish Coalescing (modern ES additions)
```javascript
const user = { profile: { name: "Alice" } };

// Optional chaining — safely access nested properties
console.log(user?.profile?.name);      // "Alice"
console.log(user?.address?.city);        // undefined (no error, even though address doesn't exist)

// Nullish coalescing — default value ONLY if null/undefined (not for 0 or "")
const count = 0;
console.log(count ?? 10);   // 0   (0 is not null/undefined, so it's kept)
console.log(count || 10);     // 10  (0 is falsy, so || replaces it — different behavior!)
```

## 11. Modules (import/export — how React files connect)
```javascript
// In a file called math.js
export const add = (a, b) => a + b;
export default function multiply(a, b) { return a * b; }

// In another file
import multiply, { add } from './math.js';
```

## 12. Equality & Truthy/Falsy Quick Reference
```javascript
// Falsy values in JavaScript (everything else is truthy)
// false, 0, "", null, undefined, NaN

if (0) { console.log("won't run"); }
if ("") { console.log("won't run"); }
if ("hello") { console.log("this runs"); }   // this runs
```

## Priority Checklist Before Moving to React
- [ ] Comfortable with arrow functions and implicit returns
- [ ] Destructuring feels natural (this IS how useState is written)
- [ ] Know spread operator for immutable state updates
- [ ] `.map()` for rendering lists is second nature
- [ ] Comfortable with async/await for data fetching
- [ ] Understand ternary for conditional rendering