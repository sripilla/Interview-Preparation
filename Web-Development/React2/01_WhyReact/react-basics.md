# React Basics — Revision Sheet

Lesson 1: Why React?

## 1. What is React?

- A **JavaScript library for building user interfaces (UIs)**.
- Used for apps where the screen changes based on user actions or data.
- Built at Facebook (now Meta); maintained by Meta and the community.

**Where it's used:** shopping sites (carts, checkout), social media (posts, likes), dashboards (charts, filters), AI apps (chat, uploads, results).

## 2. Why do we need React?

Clicking "Add to Cart" means updating the quantity, the total, and the cart display, while keeping everything in sync. In plain JS you find and change each DOM element by hand, which gets messy as the app grows.

| Plain JavaScript | React |
| --- | --- |
| Click → find DOM element → change text → update others → keep in sync | Click → update state → React updates the UI |
| Imperative: *how* to change the screen | Declarative: *what* the screen should show |

> React does **not** replace JavaScript or the DOM. It gives a structured way to manage UI updates.

## 3. Mini example: show a greeting on click

**Plain JavaScript** — you change the DOM yourself:

```html
<p id="msg"></p>
<button id="btn">Greet</button>

<script>
  document.getElementById("btn").addEventListener("click", () => {
    document.getElementById("msg").textContent = "Hello!";
  });
</script>
```

**React** — you change the data; React updates the screen:

```jsx
import { useState } from "react";

function Greeting() {
  const [msg, setMsg] = useState("");

  return (
    <div>
      <p>{msg}</p>
      <button onClick={() => setMsg("Hello!")}>Greet</button>
    </div>
  );
}
```

| Piece | Meaning |
| --- | --- |
| `Greeting` | A **component** (a function that returns UI) |
| `useState("")` | Creates **state** with a starting value |
| `msg` / `setMsg` | Current value / function to update it |
| `{msg}` | Shows the value inside JSX |
| `onClick` | Handles the click **event** |

## 4. Five key ideas

| Idea | Meaning | Example |
| --- | --- | --- |
| **Components** | Break the UI into small reusable pieces | `Navbar`, `ProductCard`, `Footer` |
| **Props** | Pass data from one component to another | Product name, price |
| **State** | Data that can change | Counter value, menu open/closed |
| **Events** | Respond to user actions | Clicks, typing, form submits |
| **Declarative UI** | Describe what to show for the current data | No manual DOM changes |

## 5. Quick check

1. React is mainly used for? → **Building user interfaces**
2. What happens when state changes? → **React re-renders the affected component and updates only what's needed**
3. How do you handle a button click in React? → **`onClick`**

## 6. Interview answer

**Q: Why choose React over plain JavaScript for a large app?**

React's component-based structure makes UI code reusable and easier to maintain. Its declarative approach keeps the UI in sync with the data, and state plus event handling make interactive apps simpler to build.

> Remember: React builds **on** JavaScript; it doesn't replace it.
