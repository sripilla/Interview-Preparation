# async and await

## 1. Why async/await?
Promise chains work, but many `.then()` steps get **hard to follow**.
`async`/`await` lets you write async code that **reads top to bottom**, like normal code.

## 2. `async`: makes a function return a Promise
```js
async function greet() {
  return "Hello, JavaScript!";
}

greet().then((msg) => console.log(msg));   // Hello, JavaScript!
```
We return a string, but `greet()` returns a **Promise** that resolves to that string.

## 3. `await`: waits for a Promise's result
```js
function getNumber() {
  return Promise.resolve(10);
}

async function calculate() {
  const number = await getNumber();   // waits, then stores 10
  console.log(number);                // 10
}

calculate();
```
- `await` works **only inside an `async` function**.
- It **pauses only that function**, not the whole browser. Other code keeps running.

## 4. Fetch: `.then()` vs `async/await`
**Promise chaining**
```js
fetch(url)
  .then((response) => response.json())
  .then((data) => console.log(data.title))
  .catch((error) => console.log(error));
```

**async/await**
```js
async function getPost() {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Failed to fetch post");

    const data = await response.json();
    console.log(data.title);
  } catch (error) {
    console.log("Error:", error.message);
  }
}

getPost();
```

**Key details**
- `await` **both** `fetch()` and `response.json()`, because both return Promises.
- Use **`try/catch`** instead of `.catch()` for errors.
- `response.ok` is `false` for HTTP errors (404, 500), so check it and `throw` yourself.

| Promise chaining | async/await |
|---|---|
| `.then()` | `await` |
| `.catch()` | `try { } catch { }` |

## 5. Execution Flow
```
async function getPost()   →  start
await fetch(url)           →  wait for response
await response.json()      →  wait for parsed data
console.log(data.title)    →  use the data
```

## Quick Check
**What does an `async` function return?**
**Answer: A Promise**

## Summary
`async` makes a function return a Promise, `await` waits for a Promise inside it, and `try/catch` handles errors. It's the same Promises, just easier to read.