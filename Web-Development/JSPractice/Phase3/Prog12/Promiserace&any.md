# Promise.race() and Promise.any()

## 1. The Idea
| Method | Returns | In short |
|---|---|---|
| `Promise.race()` | Outcome of the **first to settle** (success **or** failure) | **First to finish wins** |
| `Promise.any()` | The **first success**; ignores failures while others are still pending | **First success wins** |

- `race()`: if the first one to finish **fails**, the race **rejects**, even if another succeeds later.
- `any()`: if **every** Promise fails, it rejects with an **`AggregateError`**.

## 2. Example
```js
const first = new Promise((resolve, reject) => {
  setTimeout(() => reject("First request failed"), 1000);    // fails at 1s
});

const second = new Promise((resolve) => {
  setTimeout(() => resolve("Second request succeeded"), 2000); // succeeds at 2s
});

Promise.race([first, second])
  .then((r) => console.log("Race:", r))
  .catch((e) => console.log("Race error:", e));

Promise.any([first, second])
  .then((r) => console.log("Any:", r))
  .catch((e) => console.log("Any error:", e));
```
**Output**
```
Race error: First request failed     ← at 1s (first to settle was a failure)
Any: Second request succeeded        ← at 2s (first success)
```

## 3. Timeline
```
0s ─────────── 1s ─────────── 2s
               first ❌        second ✅
race():        ↑ stops here (rejects)
any():         skips ❌ ──────→ ↑ resolves here
```

## 4. All Four Promise Methods (Interview Cheat Sheet)
| Method | Resolves when | Rejects when |
|---|---|---|
| `Promise.all()` | **All** succeed | **Any one** fails |
| `Promise.allSettled()` | **All** settle | **Never** |
| `Promise.race()` | **First to settle** succeeds | **First to settle** fails |
| `Promise.any()` | **First success** | **All** fail (`AggregateError`) |

**Memory trick**
- **all**: everyone must pass
- **allSettled**: report card for everyone
- **race**: fastest runner, win or lose
- **any**: first one to pass

## Summary
`race()` cares about **speed**. `any()` cares about **success**.