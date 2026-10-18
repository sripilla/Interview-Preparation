# API Error Handling and Loading States

## 1. Three Real-World Situations
| Situation | What the user sees |
|---|---|
| **Loading** | "Loading..." while waiting |
| **Error** | A clear error message |
| **Success** | The data on the page |

## 2. The Pattern
```js
async function fetchPost() {
  button.disabled = true;               // 1. stop repeated clicks
  status.textContent = "Loading...";    // 2. loading state

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Could not load the post.");  // 3. HTTP error

    const data = await response.json();
    // ...show data...
    status.textContent = "Post loaded!";      // 4. success
  } catch (error) {
    status.textContent = "Error: " + error.message;  // 5. show error
  } finally {
    button.disabled = false;            // 6. always runs: cleanup
  }
}
```

## 3. New Concepts
**Loading state**: tell the user right away that work is happening.
```js
status.textContent = "Loading...";
```

**`throw new Error()`**: create your own error when `response.ok` is `false`. The `catch` block receives it, and `error.message` holds the text.

**`finally`**: runs **whether it succeeds or fails**. It's used for **cleanup**, like re-enabling the button.

**`button.disabled`**: `true` makes the button unclickable, `false` makes it clickable again.

| Block | When it runs |
|---|---|
| `try` | Always runs first |
| `catch` | Only if an error happens |
| `finally` | **Always**, after try/catch |

## 4. Two Kinds of Failure
| Type | Example | How it's caught |
|---|---|---|
| **HTTP error** | 404 Not Found, 500 Server Error | `fetch` succeeds, so **you** check `response.ok` and `throw` |
| **Network failure** | No internet | `fetch` rejects automatically and `catch` runs |

## 5. Test It
- ✅ Success: `/posts/1`
- ❌ HTTP 404: `/posts/invalid-id`
- ❌ Network failure: turn off your internet

## Quick Check
**Why do we use `finally`?**
**Answer: To run cleanup code whether the request succeeds or fails.**

## Summary
**Loading** → `try` (fetch + check `response.ok`) → `catch` (show error) → `finally` (cleanup).