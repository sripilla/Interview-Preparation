# Promise Chaining

## 1. Why Chaining?
Some tasks happen **step by step**, each needing the previous result:
1. Register the student → 2. Generate a student ID → 3. Show confirmation

**Promise chaining** runs these steps **in order**, without nesting callbacks inside callbacks.

## 2. Your First Chain
```js
function registerStudent() {
  return new Promise(function (resolve) {
    resolve("Student registered");
  });
}

registerStudent()
  .then(function (msg) {
    console.log(msg);
    return "Student ID generated";
  })
  .then(function (msg) {
    console.log(msg);
    return "Registration completed";
  })
  .then(function (msg) {
    console.log(msg);
  });
```
**Output**
```
Student registered
Student ID generated
Registration completed
```

## 3. The Golden Rule
> **Whatever you `return` from one `.then()` becomes the input to the next `.then()`.**

```js
Promise.resolve(10)
  .then(function (n) { return n * 2; })   // receives 10, returns 20
  .then(function (n) { console.log(n); }); // receives 20
```
Output: `20`

`Promise.resolve(value)` is a shortcut for a Promise that is already fulfilled with `value`.

## 4. Errors in a Chain
```js
Promise.resolve("Starting process")
  .then(function (msg) {
    console.log(msg);
    throw new Error("Something went wrong");   // chain becomes rejected
  })
  .then(function () {
    console.log("This step will be skipped");  // ⏭ skipped
  })
  .catch(function (error) {
    console.log("Error:", error.message);      // handles the error
  });
```
**Output**
```
Starting process
Error: Something went wrong
```
- `throw new Error(...)` makes the chain **rejected**.
- Remaining `.then()` steps are **skipped**.
- `.catch()` handles the error, and `error.message` gives the text.

## Quick Check
```js
Promise.resolve(5)
  .then(function (x) { return x + 3; })   // 5 + 3 = 8
  .then(function (x) { return x * 2; })   // 8 × 2 = 16
  .then(function (x) { console.log(x); });
```
**Answer: `16`**

## Summary
Chain `.then()` steps to run tasks in order. Each `return` **passes data forward**, and one `.catch()` at the end handles **any error** in the chain.