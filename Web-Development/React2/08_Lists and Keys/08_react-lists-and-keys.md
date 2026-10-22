# React Lists & Keys — Revision Sheet

Lesson 8: Lists and Keys

> **Idea:** store data in an array, use `.map()` to turn each item into JSX, and give each item a unique `key`.

## 1. Why lists?

Writing `<h2>Likitha</h2>`, `<h2>Rahul</h2>`... by hand doesn't scale to 500 students. Put the data in an array and let React render it.

```jsx
const students = ["Likitha", "Rahul", "Priya", "Arjun", "Neha"];
```

## 2. Rendering with `.map()`

```jsx
function App() {
  const students = ["Likitha", "Rahul", "Priya"];

  return (
    <div>
      <h1>Students</h1>
      {students.map((student) => (
        <h2 key={student}>{student}</h2>
      ))}
    </div>
  );
}
```

| Part | Meaning |
| --- | --- |
| `students` | The array |
| `.map()` | Loops and returns a **new array** (of JSX here) |
| `student` | The current item |
| `<h2>...</h2>` | JSX created for each item |
| `key={student}` | Identity React uses for that item |

## 3. Rendering an array of objects (most common)

```jsx
const courses = [
  { id: 1, title: "JavaScript", duration: "2 weeks" },
  { id: 2, title: "React", duration: "3 weeks" },
  { id: 3, title: "Node.js", duration: "2 weeks" },
];

{courses.map((course) => (
  <div key={course.id}>
    <h2>{course.title}</h2>
    <p>{course.duration}</p>
  </div>
))}
```

Each object holds the data; `.map()` makes one card per object. The `key` goes on the **outermost** element returned.

## 4. Keys ⭐

**A key is a special prop that helps React tell list items apart between renders**, so it knows which were added, removed, changed or moved.

| Key choice | Verdict | Why |
| --- | --- | --- |
| `course.id` (stable unique ID) | ✅ Best | Same item keeps the same key |
| `index` | ⚠️ Only for static lists | Breaks when items are added, removed or reordered (state/inputs get mixed up) |
| `Math.random()` / `Date.now()` | ❌ Never | New key every render, so React rebuilds everything |
| Same value for all | ❌ Never | Not unique |

Keys only need to be unique **among siblings** in the same list, not across the whole app.

## 5. Filter + map

```jsx
const marks = [25, 65, 80, 35, 90];

<ul>
  {marks
    .filter((mark) => mark >= 40)          // keep passing marks
    .map((mark) => <li key={mark}>{mark}</li>)}
</ul>
// 65, 80, 90
```

⚠️ `key={mark}` only works if values never repeat. Real data should use IDs.

## 6. Common mistakes

| Mistake | Fix |
| --- | --- |
| No `key` | Add a stable, unique `key` to each item |
| Unstable key (`index`, random) | Use an ID from the data |
| Mutating the array (`push`, `splice` on state) | Create a new array (`filter`, `[...arr]`) |
| Using `{}` in `map` without `return` | Use `return`, or `( )` for implicit return |
| Reading `props.key` in a child | `key` isn't passed down; send a separate prop |

```jsx
// ❌ curly braces, no return → renders nothing
courses.map((c) => { <li>{c.title}</li> })

// ✅
courses.map((c) => <li key={c.id}>{c.title}</li>)
courses.map((c) => { return <li key={c.id}>{c.title}</li>; })

// Child needs the id? Pass it separately:
<CourseCard key={course.id} id={course.id} />
```

## 7. Quiz — answers

1. Render an array of JSX → **`map()`**
2. Why keys? → **To identify items between renders**
3. Best key for database data → **a stable unique ID**
4. Is `props.key` available in the child? → **No, `key` is a special React prop**

## 8. Coding challenge

`StudentList` with three `{ id, name }` objects, a "Students" heading, rendered with `.map()` and `key={student.id}`.

<details>
<summary>Show solution (try it yourself first!)</summary>

```jsx
function StudentList() {
  const students = [
    { id: 1, name: "Likitha" },
    { id: 2, name: "Rahul" },
    { id: 3, name: "Priya" },
  ];

  return (
    <div>
      <h1>Students</h1>
      <ul>
        {students.map((student) => (
          <li key={student.id}>{student.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;
```

</details>
