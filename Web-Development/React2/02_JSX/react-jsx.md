# React JSX — Revision Sheet

Phase 4 — Lesson 2: JSX

## 1. What is JSX?

- **JSX = JavaScript XML**: HTML-like markup written inside JavaScript.
- Build tools (like Babel/Vite) convert JSX into plain JavaScript; browsers can't read JSX directly.

```jsx
const element = <h1>Hello, Likitha!</h1>; // JSX stored in a variable
```

## 2. First component

```jsx
function App() {            // component name starts with a Capital letter
  return (
    <div>
      <h1>Welcome to React</h1>
      <p>I'm learning JSX.</p>
    </div>
  );
}

export default App;         // lets other files import it
```

## 3. The 5 JSX rules

| # | Rule | ❌ Wrong | ✅ Right |
| --- | --- | --- | --- |
| 1 | Return **one parent** element | `<h1/>` and `<p/>` side by side | Wrap in `<div>` or `<>...</>` |
| 2 | JS expressions go inside **`{}`** | `<p>total</p>` | `<p>{total}</p>` |
| 3 | Some attributes are **renamed** | `class`, `for`, `onclick` | `className`, `htmlFor`, `onClick` |
| 4 | **Close every** element | `<img src="a.jpg">` | `<img src="a.jpg" />` |
| 5 | Mix text + expressions for **dynamic content** | — | `Completed: {done} of {total}` |

### Rule 1 — One parent (Fragment)

```jsx
return (
  <>
    <h1>Hello</h1>
    <p>Welcome!</p>
  </>
);
```

A **Fragment** `<>...</>` groups elements without adding an extra DOM node.

### Rule 2 — Expressions in `{}`

```jsx
const name = "Likitha";
const age = 22;

<h1>Hello, {name}!</h1>          // Hello, Likitha!
<p>Next year: {age + 1}</p>      // 23
<p>{2 > 1 ? "Yes" : "No"}</p>    // Yes
```

- ✅ Allowed: variables, maths, function calls, ternaries.
- ❌ Not allowed: `if` statements, `for` loops directly inside `{}`. Use a ternary, or work it out before `return`.

### Rule 3 — Attribute names

| HTML | JSX |
| --- | --- |
| `class` | `className` |
| `for` | `htmlFor` |
| `onclick` | `onClick` |
| `tabindex` | `tabIndex` |

`class` and `for` are JavaScript keywords, so JSX uses other names. Most attributes and events use **camelCase**.

```jsx
<div className="card">
  <label htmlFor="username">Username</label>
  <input id="username" />
  <button onClick={() => alert("Hello!")}>Click me</button>
</div>
```

### Rule 4 — Self-closing tags

`<img />`, `<input />`, `<br />` must end with `/>`.

### Rule 5 — Dynamic content example

```jsx
function Dashboard() {
  const done = 8, total = 10;
  return <p>Progress: {done / total * 100}%</p>; // Progress: 80%
}
```

## 4. Quick practice — answers

1. Valid JSX → `<h1>Hello</h1>`
2. Show variable `total` → `<p>{total}</p>`
3. CSS class attribute → `className`
4. Image element → `<img src='a.jpg' />`

## 5. Interview questions — short answers

1. **What is JSX, and why use it?** HTML-like syntax inside JavaScript. It makes UI code easy to read and lets you mix markup with JS logic in one place.
2. **Can you write JavaScript inside JSX?** Yes, expressions inside `{}`.
3. **Why `className`, not `class`?** `class` is a reserved JavaScript keyword.
4. **What is a Fragment?** `<>...</>`, a way to return multiple elements without an extra wrapper in the DOM.
5. **Why close every element?** JSX is converted into JavaScript function calls, so every element needs a clear start and end, or it won't compile.
6. **Can you use `if` inside `{}`?** No. `{}` takes expressions only; use a ternary `? :`, `&&`, or an `if` before `return`.
