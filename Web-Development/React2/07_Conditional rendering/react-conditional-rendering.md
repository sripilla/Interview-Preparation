# React Conditional Rendering — Revision Sheet

Lesson 7: Conditional Rendering

> **Idea:** show different UI depending on a condition, e.g. logged in or out, pass or fail, loading or loaded.

## 1. The 4 methods at a glance

| Method | Syntax | Best for |
| --- | --- | --- |
| `if/else` return | `if (x) return <A />; else return <B />;` | Completely different UI / complex logic |
| Ternary | `{x ? <A /> : <B />}` | Choosing between **two** options inside JSX |
| Logical AND | `{x && <A />}` | Show something **only when true** |
| Variable before return | `let msg; if (...) msg = ...; return <h1>{msg}</h1>;` | Multi-step logic, then display |

Plain JavaScript conditions work fine. React has no special `if` syntax.

## 2. Method 1 — if/else

```jsx
function App() {
  const isLoggedIn = true;

  if (isLoggedIn) {
    return <h1>Welcome back!</h1>;
  }
  return <h1>Please log in.</h1>;
}
```

`if` goes **outside** JSX. It can't go inside `{}`.

## 3. Method 2 — Ternary `? :`

```jsx
<div>
  {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please log in.</h1>}
</div>
```

Pattern: `condition ? ifTrue : ifFalse`

## 4. Method 3 — Logical AND `&&`

```jsx
<h1>Dashboard</h1>
{hasNotification && <p>You have a new notification!</p>}
```

- `true` → shows the element. `false` → shows nothing.

### ⚠️ Interview trap: the `0` bug

```jsx
{items.length && <p>Items found</p>}      // ❌ shows "0" when the list is empty
{items.length > 0 && <p>Items found</p>}  // ✅ condition is a real boolean
```

React doesn't render `false`, `null` or `undefined`, but it **does** render the number `0`.

## 5. Method 4 — Variable before return

```jsx
function Result() {
  const marks = 75;
  let message;

  if (marks >= 40) message = "Pass";
  else message = "Fail";

  return <h1>{message}</h1>;
}
```

## 6. Mini project — State + events + condition

```jsx
import { useState } from "react";

function ResultCard() {
  const [marks, setMarks] = useState(35);

  return (
    <div>
      <p>Marks: {marks}</p>
      <button onClick={() => setMarks(m => m + 5)}>Add 5 Marks</button>
      <h3>{marks >= 40 ? "Pass" : "Fail"}</h3>
    </div>
  );
}
```

```
state holds marks → click adds 5 → React re-renders → ternary picks Pass/Fail
```

## 7. Quiz — answers

1. Choose between two JSX expressions → **`? :`**
2. `{isAdmin && <AdminPanel />}` renders when → **`isAdmin` is true**
3. `{items.length && <p>Found</p>}` with length `0` shows → **the number `0`**
4. Return completely different UI sections → **`if/else`**

## 8. Coding challenge

`LoginStatus`: boolean state `isLoggedIn` (starts `false`), shows "Please log in" or "Welcome back", with a button that toggles Login/Logout.

<details>
<summary>Show solution (try it yourself first!)</summary>

```jsx
import { useState } from "react";

function LoginStatus() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <h2>{isLoggedIn ? "Welcome back" : "Please log in"}</h2>
      <button onClick={() => setIsLoggedIn(prev => !prev)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default LoginStatus;
```

</details>
