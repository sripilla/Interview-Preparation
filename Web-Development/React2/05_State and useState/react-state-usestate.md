# React State & useState — Revision Sheet

Lesson 5: State and useState

## 1. What is state?

**State = data a component remembers that can change over time.** Changing it updates the screen.

Examples: counter value, menu open/closed, cart items, search box text, logged-in or not.

## 2. Why not a normal variable?

```jsx
function Counter() {
  let count = 0;                 // ❌ ordinary variable
  function increase() {
    count = count + 1;           // console shows 1, 2, 3...
  }
  return <button onClick={increase}>Count: {count}</button>; // screen stays 0
}
```

| Problem | Why |
| --- | --- |
| Screen doesn't update | Changing a variable doesn't tell React to re-render |
| Value resets | Each render runs the function again, so `count` starts at `0` |

**State fixes both:** it keeps the value between renders and tells React when it changes.

## 3. useState

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
```

`const [count, setCount] = useState(0);`

| Part | Meaning |
| --- | --- |
| `count` | Current state value |
| `setCount` | Setter function, used to update it |
| `0` | Initial value (first render only) |
| `[ , ]` | Array destructuring of what `useState` returns |

## 4. How an update works

```
Initial render (count = 0)
  → user clicks → setCount(count + 1)
  → React schedules update (count = 1)
  → component re-renders → shows "Count: 1"
```

React may **batch** several updates into one render, so don't expect each setter call to render right away.

## 5. Two ways to update ⭐ (common interview question)

| | `setCount(count + 1)` | `setCount(c => c + 1)` |
| --- | --- | --- |
| Uses | Value from the current render | The latest previous state |
| Called 3× in one click | Increases by **1** | Increases by **3** |
| Use when | Simple, single update | New value depends on the old one, or multiple updates |

```jsx
function increaseThreeTimes() {
  setCount(c => c + 1);
  setCount(c => c + 1);
  setCount(c => c + 1);   // +3 ✅
}
// With setCount(count + 1) three times: +1 only (same snapshot of count)
```

## 6. State can hold any type

```jsx
const [name, setName] = useState("Likitha");   // string
setName("Rahul");

const [isOpen, setIsOpen] = useState(false);   // boolean
setIsOpen(!isOpen);

const [items, setItems] = useState([]);        // array
setItems(prev => [...prev, "Book"]);           // new array ✅
// items.push("Book");                         // mutating ❌ — no re-render

const [user, setUser] = useState({ name: "A", age: 20 }); // object
setUser(prev => ({ ...prev, age: 21 }));      // new object ✅
```

**Rule:** for arrays and objects, always create a **new** one (spread `...`), never mutate the old one.

## 7. Rules of useState

1. Import it: `import { useState } from "react";`
2. Call it at the **top level** of a component, not inside `if`, loops or nested functions.
3. Update **only with the setter**, never `count = 5`.
4. State is **kept between renders** of the same component.
5. Updating state **triggers a re-render**.

## 8. Quiz — answers

1. `useState(0)` → **a state variable with initial value 0**
2. Update state → **`setCount(count + 1)`**
3. Why `setCount(c => c + 1)`? → **to calculate the next value from the previous state**
4. Where to call `useState`? → **at the top level of a function component**

## 9. Coding challenge

Counter starting at 0 with Increase, Decrease and Reset buttons.

<details>
<summary>Show solution (try it yourself first!)</summary>

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(c => c + 1)}>Increase</button>
      <button onClick={() => setCount(c => c - 1)}>Decrease</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;
```

</details>
