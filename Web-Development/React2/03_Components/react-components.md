# React Components — Revision Sheet

Phase 4 — Lesson 3: Components

## 1. What is a component?

- A **reusable piece of UI**: usually a JavaScript function that returns JSX.
- Almost every React app is built by combining components.

```
App
├── Navbar     (navigation)
├── Profile    (student details)
├── CourseCard (course info)
└── Footer     (page footer)
```

**Why use components?**

| Benefit | Meaning |
| --- | --- |
| Reusability | Write once, use many times |
| Maintainability | Change one piece without rewriting the page |
| Readability | Code split into meaningful parts |
| Teamwork | Different people work on different components |

## 2. Create a component

```jsx
function Welcome() {
  return <h1>Welcome to React!</h1>;
}

export default Welcome;
```

| Code | Meaning |
| --- | --- |
| `function Welcome()` | Defines the component |
| `return` | The UI it shows |
| `<h1>...</h1>` | JSX returned |
| `export default Welcome` | Lets other files import it |

## 3. Use (render) a component

```jsx
function App() {
  return (
    <div>
      <Welcome />
      <Welcome />   {/* written once, reused */}
      <Welcome />
    </div>
  );
}
```

- `<Welcome />` → your component (Capital letter).
- `<div>`, `<h1>` → built-in HTML elements (lowercase).

## 4. Reusable card (and its limit)

```jsx
function CourseCard() {
  return (
    <div>
      <h2>React Fundamentals</h2>
      <p>Learn React from scratch.</p>
      <button>Start Learning</button>
    </div>
  );
}

<CourseCard />
<CourseCard />   // both show the same text
```

**Problem:** every card shows the same content. **Fix:** **props** (next lesson) pass different data to each card.

## 5. Nesting = component composition

One component renders others to build a bigger UI.

```jsx
function Navbar()      { return <nav>My Learning App</nav>; }
function MainContent() { return <h1>Welcome, Student!</h1>; }
function Footer()      { return <footer>Keep Learning</footer>; }

function App() {
  return (
    <>
      <Navbar />
      <MainContent />
      <Footer />
    </>
  );
}
```

## 6. Four rules to remember

1. Name starts with a **Capital letter** (`CourseCard`, not `courseCard`).
2. It **returns JSX**.
3. Use it like a tag: **`<Navbar />`**.
4. Keep each component focused on **one job**.

| Name | Valid? | Why |
| --- | --- | --- |
| `CourseCard` | ✅ | Capital, PascalCase |
| `navbar` | ❌ | Lowercase = treated as HTML tag |
| `2Header` | ❌ | Can't start with a number |
| `course-card` | ❌ | Hyphens not allowed in JS names |

## 7. Quiz — answers

1. A React component is → **a reusable piece of UI**
2. Valid name → **`function CourseCard()`**
3. Render `Profile` → **`<Profile />`**
4. Component composition → **combining components to build a larger UI**

## 8. Coding exercise

Build `App` with `Navbar` ("My Portfolio"), `Profile` (name + "AI/ML Student") and `Footer` ("© 2026 My Portfolio").

<details>
<summary>Show solution (try it yourself first!)</summary>

```jsx
function Navbar() {
  return <nav>My Portfolio</nav>;
}

function Profile() {
  return (
    <div>
      <h1>Likitha</h1>
      <p>AI/ML Student</p>
    </div>
  );
}

function Footer() {
  return <footer>© 2026 My Portfolio</footer>;
}

function App() {
  return (
    <>
      <Navbar />
      <Profile />
      <Footer />
    </>
  );
}

export default App;
```

</details>
