# Promises in JavaScript

## 1. Why Promises?
Ordering food online:
1. Place an order → 2. Restaurant prepares it → 3. You wait (and do other things) → 4. Food arrives **or** the order fails.

JavaScript faces the same situation when fetching data from a server or doing other **asynchronous** (takes-time) work.

> A **Promise** is an object representing the **future result** of an async operation: **success or failure**.

## 2. Three States
| State | Meaning |
|---|---|
| **Pending** | Not finished yet |
| **Fulfilled** | Finished successfully |
| **Rejected** | Failed |

Example: a server request is *pending* while loading, *fulfilled* when data arrives, *rejected* if it fails.

## 3. Creating a Promise
```js
const myPromise = new Promise(function (resolve, reject) {
  let success = true;

  if (success) {
    resolve("Operation successful!");   // success
  } else {
    reject("Operation failed!");        // failure
  }
});
```
- `new Promise(...)`: creates a Promise
- `resolve()`: marks it **fulfilled**
- `reject()`: marks it **rejected**

## 4. Using the Result: `.then()` and `.catch()`
```js
myPromise
  .then(function (result) { console.log(result); })   // on success
  .catch(function (error) { console.log(error); });    // on failure
```
Output: `Operation successful!` (set `success = false` and `.catch()` runs instead)

| Method | Handles |
|---|---|
| `.then()` | Fulfilled Promise (success) |
| `.catch()` | Rejected Promise (error) |

## 5. A Promise That Takes Time
```js
const orderPromise = new Promise(function (resolve) {
  setTimeout(function () {
    resolve("Your food is ready!");
  }, 2000);                           // 2 seconds
});

console.log("Order placed");
orderPromise.then(function (msg) { console.log(msg); });
console.log("You can do other work");
```
**Output**
```
Order placed
You can do other work
Your food is ready!      ← after 2 seconds
```
**Why this order?** `setTimeout` schedules the result for later, JavaScript **keeps running** the rest of the code, and when the timer ends, `.then()` runs.

> **Key lesson:** Promises handle results that arrive **later** without **blocking** the rest of the code.

## Quick Check
**If a Promise is rejected, which method handles the error?**
**Answer: `.catch()`**

## Summary
`new Promise` → `resolve` (success) / `reject` (failure) → handled by `.then()` / `.catch()`.