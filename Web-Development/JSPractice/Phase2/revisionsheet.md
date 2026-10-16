# JS Core Revision Sheet

Phase 2 — JavaScript Core

## 1. Arrays

An array is an ordered list; indexes start at `0` and the last item is at `length - 1`.

```javascript
const nums = [10, 20, 30];
nums[0];            // 10
nums.length;        // 3
nums[nums.length - 1]; // 30 (last item)
nums.at(-1);        // 30 (same, shorter)
```

| Method | What it does | Changes original? |
| --- | --- | --- |
| `push(x)` / `pop()` | Add / remove at end | Yes |
| `unshift(x)` / `shift()` | Add / remove at start | Yes |
| `splice(i, n)` | Remove `n` items from index `i` | Yes |
| `sort()` / `reverse()` | Reorder | Yes |
| `slice(a, b)` | Copy from `a` up to (not incl.) `b` | No |
| `concat(arr)` | Join arrays | No |
| `includes(x)` | `true` if present | No |
| `indexOf(x)` | Position, or `-1` | No |
| `join("-")` | Array → string | No |

- `sort()` sorts as text by default: `[10, 9, 1].sort()` → `[1, 10, 9]`. For numbers use `sort((a, b) => a - b)`.
- `const` arrays can still be changed with `push`; you just can't reassign the variable.

## 2. Objects

An object stores data as `key: value` pairs; use dot notation normally and brackets when the key is in a variable.

```javascript
const user = {
  name: "Priya",
  age: 24,
  skills: ["JS", "CSS"],
  greet() { return `Hi, I'm ${this.name}`; }  // method
};

user.name;            // "Priya"
user["age"];          // 24
const key = "age";
user[key];            // 24 (variable key → brackets)

user.city = "Pune";   // add
user.age = 25;        // update
delete user.skills;   // remove
"name" in user;       // true
user.email;           // undefined (missing key)
user.address?.pin;    // undefined, no error (optional chaining)
```

| Helper | Returns |
| --- | --- |
| `Object.keys(obj)` | `["name", "age", ...]` |
| `Object.values(obj)` | `["Priya", 24, ...]` |
| `Object.entries(obj)` | `[["name", "Priya"], ...]` |

```javascript
for (const [k, v] of Object.entries(user)) {
  console.log(k, v);
}
```

- Objects are copied by reference: `const b = a;` means both point to the same object. Copy with `{ ...a }`.

## 3. Strings

Strings are immutable: every method returns a new string and leaves the original unchanged.

| Method | Example | Result |
| --- | --- | --- |
| `length` | `"hello".length` | `5` |
| `toUpperCase()` / `toLowerCase()` | `"Hi".toUpperCase()` | `"HI"` |
| `trim()` | `"  hi  ".trim()` | `"hi"` |
| `includes(x)` | `"hello".includes("ell")` | `true` |
| `startsWith` / `endsWith` | `"file.js".endsWith(".js")` | `true` |
| `indexOf(x)` | `"hello".indexOf("l")` | `2` |
| `slice(a, b)` | `"hello".slice(1, 4)` | `"ell"` |
| `split(sep)` | `"a,b,c".split(",")` | `["a", "b", "c"]` |
| `replace` / `replaceAll` | `"a-b-c".replaceAll("-", " ")` | `"a b c"` |
| `repeat(n)` | `"ab".repeat(3)` | `"ababab"` |
| `padStart(n, ch)` | `"7".padStart(3, "0")` | `"007"` |

```javascript
const s = "hello";
s[0];                         // "h"
s.at(-1);                     // "o"
s.split("").reverse().join(""); // "olleh"
for (const ch of s) console.log(ch);
```

- `s[0] = "H"` does nothing. Build a new string instead: `"H" + s.slice(1)`.

## 4. map, filter, reduce, find

All four take a callback, loop over the array for you, and never change the original.

| Method | Question it answers | Returns | Length |
| --- | --- | --- | --- |
| `map` | "Transform each item" | New array | Same as original |
| `filter` | "Keep items that pass" | New array | Same or shorter |
| `find` | "Give me the first match" | One item or `undefined` | — |
| `reduce` | "Combine into one value" | Any single value | — |

```javascript
const nums = [1, 2, 3, 4, 5];

nums.map(n => n * 2);           // [2, 4, 6, 8, 10]
nums.filter(n => n % 2 === 0);  // [2, 4]
nums.find(n => n > 3);          // 4
nums.reduce((acc, n) => acc + n, 0); // 15
//          ^ running total  ^ starting value

// Real-world style
const products = [
  { name: "Pen", price: 20, inStock: true },
  { name: "Book", price: 250, inStock: false },
  { name: "Bag", price: 900, inStock: true },
];

products.map(p => p.name);              // ["Pen", "Book", "Bag"]
products.filter(p => p.inStock);        // Pen, Bag
products.find(p => p.name === "Book");  // { name: "Book", ... }
products.reduce((sum, p) => sum + p.price, 0); // 1170

// Chaining: total price of in-stock items
products
  .filter(p => p.inStock)
  .map(p => p.price)
  .reduce((a, b) => a + b, 0);          // 920
```

- The callback gets `(item, index, array)`; you usually need only `item`.
- `map` must `return` a value: with `{ }` braces, write `return` explicitly.
- Always give `reduce` a starting value (`0`, `""`, `[]`, `{}`).
- Related: `findIndex` (position of first match), `some` (any pass?), `every` (all pass?), `forEach` (loop, returns nothing).

## 5. Arrow functions

Arrow functions are a shorter way to write functions, ideal for callbacks like `map` and `filter`.

```javascript
// Normal function
function double(x) { return x * 2; }

// Arrow versions
const double2 = (x) => { return x * 2; }; // full body
const double3 = x => x * 2;                // one param, one line: no () or return
const add = (a, b) => a + b;              // 2+ params need ()
const hello = () => "Hi";                 // no params need ()
const makeUser = (name) => ({ name });    // return an object: wrap in ()
```

| Rule | Example |
| --- | --- |
| One param → brackets optional | `x => x * 2` |
| Zero or 2+ params → brackets needed | `() => 1`, `(a, b) => a + b` |
| No `{ }` → auto return | `x => x + 1` |
| With `{ }` → write `return` | `x => { return x + 1; }` |

- Arrows don't have their own `this`; they use the `this` of the surrounding code. So don't use them as object methods that rely on `this`.
- Arrow functions are not hoisted: define them before calling.

## 6. Destructuring

Destructuring unpacks values from arrays (by position) or objects (by key name) into variables.

```javascript
// Arrays: by position
const [first, second] = [10, 20, 30];  // first = 10, second = 20
const [, , third] = [10, 20, 30];      // skip items → third = 30
let a = 1, b = 2;
[a, b] = [b, a];                        // swap → a = 2, b = 1

// Objects: by key name
const user = { name: "Arjun", age: 22, city: "Delhi" };
const { name, age } = user;             // name = "Arjun", age = 22
const { name: fullName } = user;        // rename → fullName = "Arjun"
const { country = "India" } = user;     // default if missing

// Nested
const data = { info: { score: 90 } };
const { info: { score } } = data;      // score = 90

// In function parameters (very common)
function show({ name, age }) {
  return `${name} is ${age}`;
}
show(user);                             // "Arjun is 22"
```

- Array destructuring uses `[ ]` and cares about order; object destructuring uses `{ }` and cares about names.

## 7. Spread / rest and template literals

Both spread and rest use `...`: spread expands values out, rest gathers values in.

| | Spread | Rest |
| --- | --- | --- |
| Does | Expands items out | Collects items in |
| Where | Array/object literals, function calls | Function parameters, destructuring |
| Example | `[...arr, 4]` | `function f(...args)` |

```javascript
// Spread
const a = [1, 2];
const b = [...a, 3, 4];             // [1, 2, 3, 4]
const copy = [...a];                // shallow copy
Math.max(...a);                     // 2

const base = { name: "Kiran", age: 20 };
const updated = { ...base, age: 21 }; // later keys win → age 21

// Rest
function sum(...nums) {             // nums is a real array
  return nums.reduce((t, n) => t + n, 0);
}
sum(1, 2, 3);                       // 6

const [head, ...tail] = [1, 2, 3];  // head = 1, tail = [2, 3]
const { name, ...others } = base;   // others = { age: 20 }
```

- Rest must come last: `(a, ...rest)` works, `(...rest, a)` doesn't.
- Spread copies are shallow: nested objects are still shared.

### Template literals

Use backticks to embed values with `${ }` and write multi-line strings.

```javascript
const name = "Meera", items = 3, price = 50;

`Hi ${name}!`                        // "Hi Meera!"
`Total: ₹${items * price}`           // any expression works → "Total: ₹150"
`Status: ${items > 0 ? "Full" : "Empty"}`

const html = `
  <li>${name}</li>
`;                                     // multi-line, no \n needed
```

## 8. Callbacks

A callback is a function you pass into another function, to be called later by that function.

```javascript
// 1. Your own function that accepts a callback
function processUser(name, callback) {
  const msg = `User: ${name}`;
  callback(msg);              // calls whatever you passed in
}

processUser("Dev", console.log);              // pass an existing function
processUser("Dev", (m) => alert(m));          // pass an arrow function

// 2. Built-in methods take callbacks
[1, 2, 3].forEach((n) => console.log(n));

// 3. Async: runs later, not right away
console.log("A");
setTimeout(() => console.log("B"), 1000);  // after 1 second
console.log("C");
// Output: A, C, B

// 4. Events
button.addEventListener("click", () => {
  console.log("Clicked!");
});
```

- Pass the function, don't call it: `setTimeout(greet, 1000)` ✓, `setTimeout(greet(), 1000)` ✗ (runs immediately).
- Many nested callbacks ("callback hell") are hard to read. Promises and `async/await` fix that later in your learning.

## 9. Scope

Scope decides where a variable can be used: code can always look outward to parent scopes, never inward.

| Scope | Created by | Visible |
| --- | --- | --- |
| Global | Declared outside everything | Everywhere |
| Function | Inside a function | Only in that function |
| Block | `let`/`const` inside `{ }` (if, for) | Only in that block |

```javascript
const app = "Shop";              // global

function checkout() {
  const total = 500;             // function scope
  if (total > 100) {
    let discount = 50;           // block scope
    console.log(app, total, discount); // all visible (looks outward)
  }
  // console.log(discount);     // ReferenceError: outside its block
}
// console.log(total);          // ReferenceError: outside the function

// var ignores blocks (another reason to avoid it)
if (true) { var x = 1; }
console.log(x);                  // 1 — leaked out

// Shadowing: inner variable hides the outer one
const color = "red";
function paint() {
  const color = "blue";
  return color;                  // "blue"
}

// Closure: inner function remembers outer variables
function counter() {
  let count = 0;
  return () => ++count;
}
const next = counter();
next(); // 1
next(); // 2
```

- Keep variables in the smallest scope that needs them; avoid globals.

## Practice problems

- [ ] Use `map` to turn `["a", "b"]` into `["A", "B"]`
- [ ] Use `filter` to get students with marks ≥ 40 from an array of objects
- [ ] Use `reduce` to count how many times each word appears in an array
- [ ] Use `find` to get the user with `id === 3`
- [ ] Chain `filter` + `map` + `reduce` to total the prices of items in stock
- [ ] Capitalise the first letter of every word in a sentence
- [ ] Merge two objects with spread, overriding one key
- [ ] Write `max(...nums)` using rest parameters (no `Math.max`)
- [ ] Destructure `name` and `email` from a nested user object in a function parameter
- [ ] Write `repeat(n, callback)` that calls the callback n times
- [ ] Build a `counter()` closure with increment, decrement and reset