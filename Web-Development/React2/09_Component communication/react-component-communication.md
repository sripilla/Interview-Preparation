# React Component Communication — Revision Sheet

Lesson 9: Component Communication

> **Rule of thumb:** data flows **down** as props; actions flow **up** as callback props.

```
          Parent (owns state)
          │            ▲
 props    │            │  child calls the callback
 (data +  ▼            │  → parent updates its own state
 function)
          Child
```

## 1. Parent → Child: props

```jsx
function Profile({ name }) {
  return <h2>Hello, {name}!</h2>;
}

function App() {
  return <Profile name="Likitha" />;
}
```

The parent decides the data; the child just displays it.

## 2. Child → Parent: callback props

A child **can't change the parent's state directly**. Instead:

1. The parent **owns the state** and writes a function to update it.
2. The parent **passes that function** to the child as a prop.
3. The child **calls the function** on an event, and the parent's state updates.

```jsx
import { useState } from "react";

function IncreaseButton({ onIncrease }) {
  return <button onClick={onIncrease}>Increase</button>;
}

function App() {
  const [count, setCount] = useState(0);

  function handleIncrease() {
    setCount(c => c + 1);
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      <IncreaseButton onIncrease={handleIncrease} />
    </div>
  );
}
```

| Name | What it is |
| --- | --- |
| `onClick` | Built-in React event prop on `<button>` |
| `onIncrease` | **Custom** prop name you choose (`onAdd`, `onLike`... any name) |

The parent and child just need to use the **same** prop name.

## 3. Realistic example: shopping cart

```jsx
function Product({ name, onAddToCart }) {
  return (
    <div>
      <h3>{name}</h3>
      <button onClick={onAddToCart}>Add to Cart</button>
    </div>
  );
}

function App() {
  const [cartCount, setCartCount] = useState(0);
  const add = () => setCartCount(c => c + 1);

  return (
    <div>
      <h1>Shopping Cart: {cartCount}</h1>
      <Product name="Laptop" onAddToCart={add} />
      <Product name="Headphones" onAddToCart={add} />
    </div>
  );
}
```

One reusable `Product` component; every button updates the single `cartCount` in `App`.

## 4. Lifting state up ⭐

**Problem:** two sibling components need the same data.
**Solution:** move the state to their **closest common parent**, which becomes the single source of truth.

```
            Parent (count, setCount)
           /                      \
  Child A: count={count}    Child B: onIncrease={...}
  (displays it)             (updates it)
```

```jsx
function Display({ count }) { return <h2>{count}</h2>; }
function Controls({ onIncrease }) { return <button onClick={onIncrease}>+</button>; }

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Display count={count} />
      <Controls onIncrease={() => setCount(c => c + 1)} />
    </>
  );
}
```

Both siblings stay in sync because they share one state.

## 5. Cheat table

| Code | Purpose |
| --- | --- |
| `name="Likitha"` | Pass data down |
| `count={count}` | Pass current state down |
| `onIncrease={handleIncrease}` | Pass a function down |
| `onClick={onIncrease}` | Child calls that function on click |
| Lifting state up | Move shared state to the common parent |

A callback prop is still just a prop; its value happens to be a function.

## 6. Quiz — answers

1. How does a child tell its parent about an action? → **It calls a callback passed through props**
2. Where should shared sibling state live? → **In their closest common parent**
3. What is `onIncrease`? → **A custom callback prop**
4. Lifting state up means → **moving shared state to a common ancestor**

## 7. Interview answer

**Q: How can a child update data owned by its parent without modifying the parent's state directly?**

The parent keeps the state and passes a function, such as `onLike`, down as a prop. When something happens in the child, like a click, the child calls that function. The function runs in the parent and uses the parent's setter (`setLikes`) to update state, and React re-renders both. Data flows down through props; actions flow up through callbacks.

## 8. Coding challenge

`App` stores `likes`; `LikeButton` receives `onLike` and calls it on click; `App` shows the count.

<details>
<summary>Show solution (try it yourself first!)</summary>

```jsx
import { useState } from "react";

function LikeButton({ onLike }) {
  return <button onClick={onLike}>👍 Like</button>;
}

function App() {
  const [likes, setLikes] = useState(0);

  return (
    <div>
      <h1>Likes: {likes}</h1>
      <LikeButton onLike={() => setLikes(l => l + 1)} />
    </div>
  );
}

export default App;
```

</details>
