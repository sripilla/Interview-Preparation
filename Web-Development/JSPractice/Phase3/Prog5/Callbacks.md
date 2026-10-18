# Callbacks in JavaScript

## 1. The Problem
A normal function just does its job:
```js
function greetStudent(name) {
  console.log("Hello, " + name);
}
greetStudent("Likitha");   // Hello, Likitha
```
But what if we want to say: *"Do your job, then run **another function** I give you"*? That's a **callback**.

## 2. What is a Callback?
A **callback** is a function **passed as an argument** to another function, which then **calls it**.

```js
function greetStudent(name, callback) {
  console.log("Hello, " + name);
  callback();                         // run the function we were given
}

function sayWelcome() {
  console.log("Welcome to JavaScript!");
}

greetStudent("Likitha", sayWelcome);
```
**Output**
```
Hello, Likitha
Welcome to JavaScript!
```

**How it works**
1. `sayWelcome` is **defined** but doesn't run yet.
2. It's **passed** to `greetStudent`.
3. `greetStudent` **calls** it with `callback()`.

| Write | Meaning |
|---|---|
| `sayWelcome` | Passes the **function itself** ✅ |
| `sayWelcome()` | **Runs** it immediately ❌ |

> A callback is **not a special type** of function. It's an ordinary function passed to another function.

## 3. Callbacks Can Receive Data
```js
function calculate(a, b, callback) {
  const result = a + b;
  callback(result);                   // pass the result on
}

function displayResult(value) {
  console.log("Result:", value);
}

calculate(10, 20, displayResult);     // Result: 30
```
**Flow:** `calculate` adds 10 + 20, then `callback(30)` runs `displayResult(30)`, which prints `Result: 30`.

**Why useful?** The function doing the task doesn't decide what happens with the result. **The callback decides.**

## 4. You've Already Used Callbacks!
```js
button.addEventListener("click", function () {
  console.log("Button clicked!");
});
```
The function passed to `addEventListener` is a **callback**. You don't call it; **the browser calls it** when the click happens.

Callbacks are also key for **asynchronous** tasks (timers, network requests), which come next.

## Quick Check
```js
function process(callback) {
  console.log("A");
  callback();
}
function finish() {
  console.log("B");
}
process(finish);
```
**Answer: A, then B.** `process` prints A first, then calls `finish`.

## Summary
A **callback** = a function you **hand over** to another function, to be **called later**.