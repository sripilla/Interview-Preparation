# React Props — Revision Sheet

Lesson 4: Props

> **Props (properties) pass data from a parent component to a child component.** Write the component once, then reuse it with different data.

```
Parent: App  ──(title, duration, price)──▶  Child: CourseCard
```

## 1. First example

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

function App() {
  return (
    <>
      <Welcome name="Likitha" />
      <Welcome name="Rahul" />
      <Welcome name="Priya" />
    </>
  );
}
// Hello, Likitha!  Hello, Rahul!  Hello, Priya!
```

| Piece | Role |
| --- | --- |
| `App` | Parent, sends data |
| `Welcome` | Child, receives data |
| `name="Likitha"` | Passing a prop |
| `props.name` | Reading it inside the child |

## 2. Destructuring props (modern style)

```jsx
function Welcome(props)    { return <h1>Hello, {props.name}!</h1>; } // whole object
function Welcome({ name }) { return <h1>Hello, {name}!</h1>; }       // just `name`
```

Both work the same way. `{ name }` pulls `name` out of the props object.

## 3. Passing different data types

```jsx
<StudentCard name="Likitha" age={22} isPlaced={false} />
```

| Syntax | Type |
| --- | --- |
| `name="Likitha"` | String (quotes) |
| `age={22}` | Number |
| `isPlaced={true}` | Boolean |
| `skills={["JS", "React"]}` | Array |
| `student={{ name: "Likitha" }}` | Object (outer `{}` = JS, inner `{}` = object) |
| `onClick={handleClick}` | Function |

**Rule:** strings use quotes; **everything else uses `{}`**. Note that `age="10"` passes a *string*, while `age={10}` passes a *number*.

```jsx
function StudentCard({ name, age, isPlaced }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>{isPlaced ? "Placed" : "Not placed yet"}</p>
    </div>
  );
}
```

## 4. Props are read-only ⭐

```jsx
function Welcome(props) {
  props.name = "Rahul";        // ❌ never modify props
  return <h1>{props.name}</h1>;
}

function Welcome({ name }) {
  return <h1>{name}</h1>;      // ✅ just read them
}
```

Need the value to change? The **parent passes new props**, or the component uses **its own state**.

> **Interview line:** Props are read-only inputs passed from parent to child; a child should never mutate its props.

## 5. Props vs State ⭐

| Props | State |
| --- | --- |
| Passed **into** a component | Owned **inside** a component |
| Read-only | Changed with a setter (`setX`) |
| Configure the component | Represent data that changes |
| New values come from the parent | Updating triggers a re-render |
| Like function **arguments** | Like the component's **memory** |

Example: a product's `name` comes in as a **prop**; its `quantity` is the product's own **state**.

## 6. Quiz — answers

1. Props are used for → **passing data from parent to child**
2. Pass the number 10 as `age` → **`age={10}`**
3. Can a child modify its props? → **No, they're read-only**
4. `function Profile({ name })` → **extracts `name` from the props object**

## 7. Interview answer

**Q: Why use props instead of hardcoding each course in a separate component?**

Props let one `CourseCard` display any course: write once, reuse everywhere. That means less duplicate code, easier changes (fix or restyle in one place), consistent UI, and the ability to render cards straight from data like an API response with `.map()`.

## 8. Coding exercise

Reusable `CourseCard` with `title`, `duration` and `level`; render two cards from `App`.

<details>
<summary>Show solution (try it yourself first!)</summary>

```jsx
function CourseCard({ title, duration, level }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>Duration: {duration}</p>
      <p>Level: {level}</p>
    </div>
  );
}

function App() {
  return (
    <>
      <CourseCard title="React Fundamentals" duration="2 weeks" level="Beginner" />
      <CourseCard title="Advanced JavaScript" duration="3 weeks" level="Intermediate" />
    </>
  );
}

export default App;
```

</details>
