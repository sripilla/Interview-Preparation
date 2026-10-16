# JS Fundamentals Revision Sheet

Phase 1 — JavaScript Fundamentals

## 1. Variables: let and const

Use `const` by default; switch to `let` only when the value must be reassigned. Avoid `var`.

| Keyword | Reassign? | Scope | Use when |
| --- | --- | --- | --- |
| `const` | No | Block `{ }` | Value stays the same (most of the time) |
| `let` | Yes | Block `{ }` | Value changes (counters, totals) |
| `var` | Yes | Function | Old code only — avoid |

```javascript
const name = "Asha";   // can't reassign
let score = 10;
score = 15;            // fine

const user = { age: 20 };
user.age = 21;         // allowed: changing contents, not the variable
// user = {};          // TypeError: Assignment to constant variable
```

- Names: start with a letter, `_` or `$`; case-sensitive; use camelCase (`totalPrice`).
- `let`/`const` used before declaration → ReferenceError (temporal dead zone).

## 2. Data types

JavaScript has 7 primitive types plus objects; check any value with `typeof`.

| Type | Example | `typeof` result |
| --- | --- | --- |
| String | `"hi"`, `'hi'`, `` `hi ${name}` `` | `"string"` |
| Number | `42`, `3.14`, `NaN`, `Infinity` | `"number"` |
| Boolean | `true`, `false` | `"boolean"` |
| Undefined | declared, no value yet | `"undefined"` |
| Null | `null` (empty on purpose) | `"object"` (known quirk) |
| BigInt | `10n` | `"bigint"` |
| Symbol | `Symbol("id")` | `"symbol"` |
| Object | `{ a: 1 }`, `[1, 2]`, functions | `"object"` / `"function"` |

```javascript
typeof "5"          // "string"
Array.isArray([1])  // true — use this for arrays
"5" + 1             // "51"  (+ with a string joins)
"5" - 1             // 4     (- converts to number)
Number("12")        // 12
String(12)          // "12"
```

- Falsy values: `false`, `0`, `""`, `null`, `undefined`, `NaN`. Everything else is truthy (even `"0"` and `[]`).
- `NaN !== NaN`; test with `Number.isNaN(x)`.

## 3. Operators

Always compare with `===` (strict: value and type), never `==`.

| Group | Operators | Example → result |
| --- | --- | --- |
| Arithmetic | `+ - * / % **` | `7 % 3` → `1`, `2 ** 3` → `8` |
| Assignment | `= += -= *= /= %=` | `x += 2` means `x = x + 2` |
| Increment | `++ --` | `i++` adds 1 |
| Comparison | `=== !== > < >= <=` | `5 === "5"` → `false` |
| Loose (avoid) | `== !=` | `5 == "5"` → `true` |
| Logical | `&& \|\| !` | `true && false` → `false` |
| Ternary | `cond ? a : b` | `age >= 18 ? "adult" : "minor"` |
| Nullish | `??` | `null ?? "default"` → `"default"` |

```javascript
let i = 5;
console.log(i++); // 5 (returns, then adds)
console.log(++i); // 7 (adds, then returns)

0 || "fallback"   // "fallback" (0 is falsy)
0 ?? "fallback"   // 0 (only null/undefined trigger ??)
```

- `%` (remainder) is the even/odd test: `n % 2 === 0` means even.
- Precedence: `**` → `* / %` → `+ -` → comparison → `&&` → `||`. Use brackets when unsure.

## 4. if / else

Conditions are checked top to bottom; the first true branch runs and the rest are skipped.

```javascript
const marks = 72;

if (marks >= 90) {
  console.log("A");
} else if (marks >= 70) {
  console.log("B");      // runs
} else {
  console.log("C");
}

// Combine conditions
if (age >= 18 && hasId) { /* allowed */ }

// Short form for picking a value
const label = marks >= 40 ? "Pass" : "Fail";

// switch: one value against fixed options
switch (day) {
  case "Sat":
  case "Sun":
    console.log("Weekend");
    break;            // without break, it falls through
  default:
    console.log("Weekday");
}
```

- Order `else if` from most specific to least specific (check `>= 90` before `>= 70`).
- `if (x)` tests truthiness, so `0` and `""` count as false.
- `switch` uses strict `===` matching.

## 5. Loops

Pick `for` when you know the count, `while` when you don't, and `for...of` to walk through an array.

| Loop | Best for |
| --- | --- |
| `for` | Fixed number of steps / index needed |
| `while` | Repeat until a condition changes |
| `do...while` | Must run at least once |
| `for...of` | Values of an array or string |
| `for...in` | Keys of an object |

```javascript
for (let i = 1; i <= 5; i++) {
  console.log(i);           // 1 2 3 4 5
}

let n = 10;
while (n > 0) {
  n -= 3;                    // update, or it loops forever
}

const fruits = ["apple", "mango"];
for (const f of fruits) console.log(f);

const person = { name: "Ravi", age: 25 };
for (const key in person) console.log(key, person[key]);

for (let i = 0; i < 10; i++) {
  if (i === 3) continue;     // skip this round
  if (i === 6) break;        // stop the loop
}
```

- Infinite loop = condition never becomes false. Check that the variable changes each round.
- Off-by-one: arrays run from index `0` to `length - 1`, so use `i < arr.length`.

## 6. Basic functions

A function takes inputs (parameters), does work, and hands back one value with `return`.

```javascript
// 1. Declaration — can be called before it's defined (hoisted)
function add(a, b) {
  return a + b;
}

// 2. Expression
const multiply = function (a, b) {
  return a * b;
};

// 3. Arrow function
const square = (x) => x * x;          // one line = implicit return
const greet = (name = "friend") => {  // default parameter
  return `Hello, ${name}!`;
};

add(2, 3);     // 5
greet();       // "Hello, friend!"
```

- Parameters are the names in the definition; arguments are the values you pass in.
- No `return` → the function gives back `undefined`. Code after `return` never runs.
- Variables made inside a function stay inside it (local scope).
- `console.log` only prints; `return` hands the value back so you can use it.

## 7. Basic problem solving

Understand the problem and solve it on paper before you write code.

1. Restate the problem: what goes in, what comes out?
2. Work 2–3 examples by hand, including an edge case (0, empty, negative).
3. Write the steps in plain words (pseudocode).
4. Translate into code, one step at a time.
5. Test with your examples and `console.log` the values in between.

```javascript
// Sum of numbers 1..n
function sumTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) total += i;
  return total;
}

// Largest number in an array
function largest(arr) {
  let max = arr[0];
  for (const x of arr) {
    if (x > max) max = x;
  }
  return max;
}

// Reverse a string
const reverse = (s) => s.split("").reverse().join("");

// FizzBuzz
for (let i = 1; i <= 15; i++) {
  if (i % 15 === 0) console.log("FizzBuzz");
  else if (i % 3 === 0) console.log("Fizz");
  else if (i % 5 === 0) console.log("Buzz");
  else console.log(i);
}
```

**Common patterns:** a counter (`count++`), a running total (`sum += x`), tracking a best value (`max`), and a flag (`let found = false`).

### Practice problems

- [ ] Check if a number is even or odd
- [ ] Print the multiplication table of any number
- [ ] Find the factorial of n (5! = 120)
- [ ] Count the vowels in a string
- [ ] Check if a word is a palindrome ("madam")
- [ ] Find the smallest and largest in an array
- [ ] Print all prime numbers up to 50
- [ ] Convert Celsius to Fahrenheit (F = C × 9/5 + 32)
- [ ] Return the sum of all even numbers in an array
- [ ] Count how many times a value appears in an array