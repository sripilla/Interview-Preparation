# Fetch API in JavaScript

## 1. Why Fetch?
Until now, our Promises **simulated** tasks. Real apps need **real data from servers**:
- Student details from a university server
- Products from an online store
- Weather from a weather service
- Posts and comments from an API

The **Fetch API** lets JavaScript **request data from a server**.

## 2. How It Works
```
Your webpage  →  sends a request  →  Server / API
      ↑                                   ↓
Display data  ←  JS processes it  ←  returns data
```

## 3. First Fetch Request
```js
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(function (response) {
    return response.json();          // parse JSON
  })
  .then(function (data) {
    console.log(data);               // use the data
  })
  .catch(function (error) {
    console.log("Error:", error);    // network failure
  });
```
**Returned data (shape)**
```json
{ "userId": 1, "id": 1, "title": "...", "body": "..." }
```
Access properties: `data.title`, `data.body`

## 4. Step by Step
| Step | Code | What it does |
|---|---|---|
| 1 | `fetch(url)` | Sends a request and returns a **Promise of a Response** |
| 2 | `response.json()` | Reads the body and parses JSON. Also returns a **Promise** |
| 3 | `.then(data => ...)` | `data` is now a normal JS object |
| 4 | `.catch(...)` | Handles errors like **network failures** |

> ⚠️ **Note:** `fetch` does **not** reject for HTTP errors like **404** or **500**. Those need separate handling, which comes later.

## 5. It's Just Promise Chaining!
```
fetch(url)        →  Promise of Response
response.json()   →  Promise of parsed data
.then(data => …)  →  use the data
```
The `return response.json()` passes the data forward to the next `.then()`, the same golden rule as before.

## Quick Check
**What does `response.json()` do?**
**Answer: It parses the response body as JSON and returns a Promise.**

## Summary
`fetch()` **gets** data → `.json()` **parses** it → `.then()` **uses** it → `.catch()` **handles** network errors.