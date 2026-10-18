# Promise.all() with Fetch API

## 1. The Idea
**Goal:** fetch several posts **at the same time**.

| Approach | How it runs |
|---|---|
| **Sequential** | Request 1 → finish → Request 2 → finish → Request 3 |
| **`Promise.all()`** | Requests 1, 2, 3 start **together**, then wait until **all** finish |

`Promise.all()` is **faster** because requests run concurrently.

> **Rule:** if **any** Promise rejects, `Promise.all()` **rejects** too.
> The other requests are **not** cancelled. Their results are just ignored.

## 2. Syntax
```js
const results = await Promise.all([promise1, promise2, promise3]);
```
- Takes an **array of Promises**.
- Returns an **array of results** in the **same order**.

## 3. Using It with Fetch
**Step 1: Start all requests together**
```js
const responses = await Promise.all([
  fetch(url1),
  fetch(url2),
  fetch(url3)
]);
```
This waits for all three **responses**.

**Step 2: Check every response**
```js
for (const response of responses) {
  if (!response.ok) throw new Error("Failed to fetch one or more posts.");
}
```
`fetch` doesn't reject on 404/500, so check **each** one.

**Step 3: Parse all bodies together**
```js
const posts = await Promise.all(responses.map((r) => r.json()));
```
`.map()` turns each response into a `.json()` Promise, and `Promise.all` waits for all of them.

**Step 4: Display**
```js
posts.forEach((post) => { /* create elements and append */ });
```

## 4. Why Two `Promise.all()` Calls?
| Call | Waits for |
|---|---|
| 1st | All **HTTP responses** (`fetch`) |
| 2nd | All **parsed bodies** (`response.json()`) |

Both `fetch()` and `.json()` return Promises, so both need waiting.

## Interview Checkpoint
**If one of three Promises rejects, what happens to `Promise.all()`?**
**Answer: It rejects as soon as a rejection is observed.**

## Summary
`Promise.all([...])` runs Promises **together**, gives back **all results in order**, and **fails fast** if any one fails.