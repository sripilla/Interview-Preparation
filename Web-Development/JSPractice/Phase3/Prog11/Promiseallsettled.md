# Promise.allSettled()

## 1. The Idea
`Promise.all()` **fails** if any Promise fails.
`Promise.allSettled()` **waits for every Promise** and tells you **which succeeded and which failed**.

| Feature | `Promise.all()` | `Promise.allSettled()` |
|---|---|---|
| All succeed | Returns all results | Returns all outcomes |
| One fails | **Rejects** | **Still returns all outcomes** |
| Use when | **Every** operation must succeed | You want to know each one's result |

**Example:** fetching 3 student records. If 1 fails, you can still show the other 2.

> "Settled" = finished, either **fulfilled** or **rejected**.

## 2. What It Returns
An **array of outcome objects**, in the same order:

```js
// Success
{ status: "fulfilled", value: { /* the data */ } }

// Failure
{ status: "rejected", reason: Error }
```
Check `outcome.status`, then read **`value`** (success) or **`reason`** (failure).

## 3. Turn HTTP Errors into Rejections
```js
async function fetchPost(id) {
  const response = await fetch(".../posts/" + id);
  if (!response.ok) throw new Error("Post " + id + " could not be loaded");
  return response.json();
}
```
`fetch` doesn't reject on 404, so we `throw` so the outcome becomes **rejected**.

## 4. Using It
```js
const outcomes = await Promise.allSettled([
  fetchPost(1),
  fetchPost(2),
  fetchPost(999999)    // returns 404, so it fails
]);

outcomes.forEach((outcome) => {
  if (outcome.status === "fulfilled") {
    console.log("Success:", outcome.value.title);
  } else {
    console.log("Failed:", outcome.reason.message);
  }
});
```
Result: **2 successes, 1 failure**, and the program still finishes.

> `Promise.allSettled()` **never rejects**, so you don't need `try/catch` around it.

## Placement Question
**If one of three Promises rejects, what does `Promise.allSettled()` do?**
**Answer: It waits until all Promises settle and returns each outcome.**

## Summary
`Promise.all` = **all or nothing**. `Promise.allSettled` = **report on everyone**.