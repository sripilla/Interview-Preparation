# React Events — Revision Sheet

Lesson 6: Events in React

> **Core idea:** events connect user actions to JavaScript functions.

## 1. Common events

| Event | When it fires |
| --- | --- |
| `onClick` | Element is clicked |
| `onChange` | Input value changes |
| `onSubmit` | Form is submitted |
| `onMouseEnter` | Mouse enters an element |
| `onKeyDown` | A key is pressed |

React event names use **camelCase** (`onClick`, not `onclick`).

## 2. onClick — pass the function, don't call it ⭐

```jsx
function App() {
  function sayHello() {
    alert("Hello, React!");
  }
  return <button onClick={sayHello}>Click Me</button>;
}
```

| Code | What happens |
| --- | --- |
| `onClick={sayHello}` | ✅ Runs **when clicked** (function reference) |
| `onClick={sayHello()}` | ❌ Runs **during render**, before any click |
| `onClick="sayHello()"` | ❌ HTML-style string, not valid in React |

## 3. Passing arguments

Wrap the call in an arrow function so it waits for the click:

```jsx
<button onClick={() => greet("Likitha")}>Greet Student</button>
```

`() => greet("Likitha")` is a new function that React calls on click; only then does `greet` run.

## 4. Events + state = interactivity

```
User clicks → React calls handler → handler calls setCount → React re-renders
```

```jsx
const [count, setCount] = useState(0);
<button onClick={() => setCount(c => c + 1)}>Increase</button>
```

## 5. Input events (controlled input)

```jsx
const [name, setName] = useState("");

<input
  value={name}
  onChange={(event) => setName(event.target.value)}
  placeholder="Enter your name"
/>
<h2>Hello, {name}!</h2>
```

| Piece | Role |
| --- | --- |
| `value={name}` | Input shows the state value |
| `onChange` | Runs on every keystroke |
| `event.target.value` | The input's current text |

**Controlled input:** React state controls the input's value (more in Phase 5).

## 6. Form submission

```jsx
function handleSubmit(event) {
  event.preventDefault();       // stop the page reload
  alert("Form submitted!");
}

<form onSubmit={handleSubmit}>
  <input placeholder="Enter email" />
  <button type="submit">Submit</button>
</form>
```

- Put `onSubmit` on the **`<form>`**, not on the button.
- `event.preventDefault()` stops the browser's default action (reload or navigation).

## 7. The event object

React passes an `event` object to every handler.

| Property | Gives you |
| --- | --- |
| `event.type` | Event name, e.g. `"click"` |
| `event.target` | Element where the event **started** |
| `event.currentTarget` | Element whose handler is **running now** |
| `event.target.value` | Current value of an input |
| `event.preventDefault()` | Stops the default browser action |

## 8. Plain JS vs React

| Plain JavaScript | React |
| --- | --- |
| `btn.addEventListener("click", handler)` | `<button onClick={handler}>` |
| Select elements manually (`getElementById`) | Attach handlers directly in JSX |
| Update the DOM yourself | Update state; React re-renders |

React still uses real browser events, wrapped in a consistent interface.

## 9. Quiz — answers

1. Attach a click handler → **`onClick={handleClick}`**
2. Pass an argument but delay the call → **`onClick={() => greet("Sam")}`**
3. `event.preventDefault()` → **stops the default browser action**
4. `event.target.value` → **the input's current text**

## 10. Coding exercise

Login form with email, password, a Login button, and a submit handler that shows "Login submitted" without reloading.

<details>
<summary>Show solution (try it yourself first!)</summary>

```jsx
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    alert("Login submitted");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
```

</details>
