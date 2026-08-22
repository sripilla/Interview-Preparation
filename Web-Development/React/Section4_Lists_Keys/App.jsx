/*
========================================
SECTION 4: RENDERING LISTS & KEYS
========================================

React uses JavaScript's map() method to
display multiple items from an array.

----------------------------------------
map()
----------------------------------------

map() takes every item in an array and
returns a new element for each item.

Example:

const fruits = ["Apple", "Banana", "Mango"];

{fruits.map((fruit) => (
    <li>{fruit}</li>
))}

Output:

• Apple
• Banana
• Mango

----------------------------------------
KEY
----------------------------------------

When rendering a list in React, every
item needs a unique "key".

Example:

<li key={fruit.id}>{fruit.name}</li>

React uses keys to identify which items
have changed, been added, or removed.

----------------------------------------
IMPORTANT:
----------------------------------------

Use a stable and unique ID whenever possible.

✅ Good:
key={todo.id}

⚠️ Avoid:
key={index}

Array indexes can cause problems when
items are added, deleted, or reordered.

*/

function App() {
  const students = [
    { id: 1, name: "Likitha", course: "AI/ML" },
    { id: 2, name: "Rahul", course: "Computer Science" },
    { id: 3, name: "Priya", course: "Data Science" }
  ];

  return (
    <>
      <h1>Student List</h1>

      <ul>
        {students.map((student) => (
          <li key={student.id}>
            Name: {student.name} | Course: {student.course}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;