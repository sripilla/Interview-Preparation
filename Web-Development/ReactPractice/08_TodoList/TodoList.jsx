/*
===========================================================
REACT LESSON: TODO LIST
===========================================================

This program practices:

1. useState
2. Controlled inputs
3. onChange
4. onKeyDown
5. Event handling
6. Arrays of objects
7. map()
8. filter()
9. find()
10. Array insertion
11. Spread operator
12. Object spread
13. Conditional rendering
14. Derived values
15. Filter tabs
16. Toggle checkbox state
17. Delete functionality
18. Undo functionality
19. Remembering an item's original index
20. Boolean conditions
21. trim()
22. Dynamic class/style behavior


===========================================================
1. TODO DATA
===========================================================

Each todo is an object:

{
    id: 1,
    text: "Buy groceries",
    completed: false
}

The array might look like:

[
    {
        id: 1,
        text: "Buy groceries",
        completed: false
    },
    {
        id: 2,
        text: "Finish assessment prep",
        completed: false
    }
]


===========================================================
2. useState
===========================================================

We need state for:

TODOS:

const [todos, setTodos] = useState([]);


INPUT:

const [input, setInput] = useState("");


FILTER:

const [filter, setFilter] = useState("all");


UNDO INFORMATION:

const [deletedTodo, setDeletedTodo] = useState(null);


===========================================================
3. CONTROLLED INPUT
===========================================================

The input is controlled by React.

Example:

<input
    value={input}
    onChange={(e) => setInput(e.target.value)}
/>


===========================================================
4. ADDING A TODO
===========================================================

The user types:

Buy groceries

and presses Enter.

We:

1. Check whether Enter was pressed.
2. Remove extra spaces using trim().
3. Ignore empty text.
4. Create a new todo.
5. Add it to the array.
6. Clear the input.


===========================================================
5. trim()
===========================================================

trim() removes whitespace from the beginning
and end of a string.

Example:

"   Buy milk   ".trim()

becomes:

"Buy milk"


For:

"     "

trim() becomes:

""

So we can ignore whitespace-only input.


===========================================================
6. ADDING TO AN ARRAY
===========================================================

We should not mutate the existing state.

Use:

setTodos([
    ...todos,
    newTodo
]);


The spread operator copies the old todos and
adds the new todo at the end.


===========================================================
7. UNIQUE IDs
===========================================================

Every todo needs an ID.

We can use:

Date.now()

It returns the current timestamp and gives us
a reasonably unique number for this exercise.


===========================================================
8. TOGGLE COMPLETED
===========================================================

When the checkbox is clicked:

completed:

false → true

or:

true → false


We use map():

setTodos(
    todos.map((todo) =>
        todo.id === id
            ? {
                ...todo,
                completed: !todo.completed
              }
            : todo
    )
);


===========================================================
9. filter()
===========================================================

filter() creates a new array containing only
items that satisfy a condition.


To delete:

todos.filter(
    (todo) => todo.id !== id
)


This removes the selected todo.


===========================================================
10. FILTER TABS
===========================================================

There are three filters:

All
Active
Completed


ALL:

show every todo.


ACTIVE:

show:

completed === false


COMPLETED:

show:

completed === true


===========================================================
11. FILTER STATE
===========================================================

We store:

const [filter, setFilter] = useState("all");


Possible values:

"all"
"active"
"completed"


===========================================================
12. DERIVED FILTERED TODOS
===========================================================

We don't need another state variable for
filtered todos.

We calculate it from:

todos + filter


Example:

if filter === "active":

todos.filter(
    (todo) => !todo.completed
)


This is called DERIVED DATA.


===========================================================
13. ACTIVE COUNT
===========================================================

The requirement says:

Show:

"2 items left"


This means count todos where:

completed === false


We can use:

todos.filter(
    (todo) => !todo.completed
).length


The count automatically updates whenever
todos changes.


===========================================================
14. DELETE WITH UNDO
===========================================================

This is the most important part of this exercise.


Suppose:

Index 0 → Buy groceries
Index 1 → Finish assessment
Index 2 → Call the bank


If we delete:

Finish assessment

we need to remember:

1. The deleted todo
2. Its original index


Example:

{
    todo: {
        id: 2,
        text: "Finish assessment",
        completed: false
    },
    index: 1
}


===========================================================
15. WHY REMEMBER THE INDEX?
===========================================================

Requirement:

Undo must restore the todo to its ORIGINAL position.


Original:

A
B
C


Delete B:

A
C


Undo:

A
B
C


Therefore we must remember index = 1.


===========================================================
16. DELETE FUNCTION
===========================================================

First find the index:

const index = todos.findIndex(
    (todo) => todo.id === id
);


Then remember the deleted item:

setDeletedTodo({
    todo: todos[index],
    index
});


Then remove it:

setTodos(
    todos.filter(
        (todo) => todo.id !== id
    )
);


===========================================================
17. UNDO
===========================================================

If deletedTodo exists:

1. Copy todos.
2. Insert deleted todo at its original index.
3. Update state.
4. Clear deletedTodo.


===========================================================
18. splice()
===========================================================

splice() can insert an item at a particular
position in an array.

Example:

const restored = [...todos];

restored.splice(index, 0, todo);


The arguments mean:

index
    → where to insert

0
    → delete zero existing items

todo
    → item to insert


Example:

A C

splice(1, 0, B)

becomes:

A B C


===========================================================
19. ONLY ONE UNDO
===========================================================

The requirement says:

Undo only restores the MOST RECENTLY deleted todo.

Therefore deletedTodo stores only ONE item.

If another delete happens, it replaces the
previous undo information.


===========================================================
20. UNDO AFTER UNDO
===========================================================

After restoring a deleted todo:

setDeletedTodo(null);


Therefore pressing Undo again does nothing.

Another delete must happen before Undo works again.


===========================================================
21. CONDITIONAL RENDERING
===========================================================

We only show the Undo button when:

deletedTodo !== null


Example:

{deletedTodo && (
    <button>
        Undo delete
    </button>
)}


===========================================================
22. IMPORTANT DATA FLOW
===========================================================

ADD:

Input
  ↓
Enter
  ↓
trim()
  ↓
new todo
  ↓
setTodos()


TOGGLE:

Checkbox
  ↓
map()
  ↓
change completed
  ↓
setTodos()


DELETE:

Trash
  ↓
findIndex()
  ↓
remember todo + index
  ↓
filter()
  ↓
setTodos()


UNDO:

Undo
  ↓
copy array
  ↓
splice()
  ↓
restore original position
  ↓
setTodos()


FILTER:

todos
  ↓
filter
  ↓
All / Active / Completed
  ↓
render


===========================================================
23. REQUIREMENTS
===========================================================

1. Add todo using Enter.
2. Ignore empty input.
3. Clear input after adding.
4. Checkbox toggles completed state.
5. Delete removes a todo.
6. Delete remembers original index.
7. Undo restores most recently deleted todo.
8. Undo restores original position.
9. Undo works only once per delete.
10. All / Active / Completed tabs.
11. Active count updates live.
12. Show "{n} items left".


===========================================================
PROGRAM STARTS HERE
===========================================================
*/

import React, { useState } from "react";

function TodoList() {

  // -------------------------------------------------------
  // TODO STATE
  // -------------------------------------------------------

  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Buy groceries",
      completed: true,
    },
    {
      id: 2,
      text: "Finish assessment prep",
      completed: false,
    },
    {
      id: 3,
      text: "Call the bank",
      completed: false,
    },
  ]);


  // -------------------------------------------------------
  // INPUT STATE
  // -------------------------------------------------------

  const [input, setInput] = useState("");


  // -------------------------------------------------------
  // FILTER STATE
  // -------------------------------------------------------

  const [filter, setFilter] = useState("all");


  // -------------------------------------------------------
  // DELETED TODO STATE
  // -------------------------------------------------------

  const [deletedTodo, setDeletedTodo] =
    useState(null);


  // -------------------------------------------------------
  // HANDLE INPUT CHANGE
  // -------------------------------------------------------

  function handleInputChange(e) {
    setInput(e.target.value);
  }


  // -------------------------------------------------------
  // ADD TODO
  // -------------------------------------------------------

  function handleKeyDown(e) {

    // Only add when Enter is pressed
    if (e.key !== "Enter") {
      return;
    }


    // Remove extra spaces
    const text = input.trim();


    // Ignore empty input
    if (!text) {
      return;
    }


    // Create new todo
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false,
    };


    // Add todo
    setTodos([
      ...todos,
      newTodo,
    ]);


    // Clear input
    setInput("");
  }


  // -------------------------------------------------------
  // TOGGLE TODO
  // -------------------------------------------------------

  function toggleTodo(id) {

    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo
      )
    );
  }


  // -------------------------------------------------------
  // DELETE TODO
  // -------------------------------------------------------

  function deleteTodo(id) {

    // Find original position
    const index = todos.findIndex(
      (todo) => todo.id === id
    );


    // If not found, do nothing
    if (index === -1) {
      return;
    }


    // Remember the deleted todo
    // and its original position
    setDeletedTodo({
      todo: todos[index],
      index: index,
    });


    // Remove todo
    setTodos(
      todos.filter(
        (todo) => todo.id !== id
      )
    );
  }


  // -------------------------------------------------------
  // UNDO DELETE
  // -------------------------------------------------------

  function undoDelete() {

    // Nothing to undo
    if (!deletedTodo) {
      return;
    }


    // Make a copy
    const restoredTodos = [
      ...todos,
    ];


    // Restore at original position
    restoredTodos.splice(
      deletedTodo.index,
      0,
      deletedTodo.todo
    );


    // Update todos
    setTodos(restoredTodos);


    // Clear undo information
    setDeletedTodo(null);
  }


  // -------------------------------------------------------
  // FILTER TODOS
  // -------------------------------------------------------

  let filteredTodos = todos;


  if (filter === "active") {

    filteredTodos = todos.filter(
      (todo) => !todo.completed
    );

  } else if (filter === "completed") {

    filteredTodos = todos.filter(
      (todo) => todo.completed
    );
  }


  // -------------------------------------------------------
  // ACTIVE COUNT
  // -------------------------------------------------------

  const activeCount =
    todos.filter(
      (todo) => !todo.completed
    ).length;


  // -------------------------------------------------------
  // JSX
  // -------------------------------------------------------

  return (
    <div
      style={{
        maxWidth: 420,
        margin: "30px auto",
        padding: 26,
        border: "1px solid #ddd",
        borderRadius: 12,
        fontFamily: "Arial",
      }}
    >

      {/* =================================================
          INPUT
      ================================================= */}

      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Add a task and press Enter..."
        style={{
          width: "100%",
          padding: 12,
          boxSizing: "border-box",
          border: "1px solid #ccc",
          borderRadius: 6,
          fontSize: 15,
        }}
      />


      {/* =================================================
          FILTER TABS
      ================================================= */}

      <div
        style={{
          display: "flex",
          gap: 18,
          marginTop: 18,
          marginBottom: 12,
        }}
      >

        <button
          onClick={() => setFilter("all")}
          style={{
            background:
              filter === "all"
                ? "#eee"
                : "white",
            border:
              filter === "all"
                ? "1px solid #aaa"
                : "none",
            borderRadius: 20,
            padding: "6px 14px",
            cursor: "pointer",
          }}
        >
          All
        </button>


        <button
          onClick={() => setFilter("active")}
          style={{
            background:
              filter === "active"
                ? "#eee"
                : "white",
            border:
              filter === "active"
                ? "1px solid #aaa"
                : "none",
            borderRadius: 20,
            padding: "6px 14px",
            cursor: "pointer",
          }}
        >
          Active
        </button>


        <button
          onClick={() =>
            setFilter("completed")
          }
          style={{
            background:
              filter === "completed"
                ? "#eee"
                : "white",
            border:
              filter === "completed"
                ? "1px solid #aaa"
                : "none",
            borderRadius: 20,
            padding: "6px 14px",
            cursor: "pointer",
          }}
        >
          Completed
        </button>

      </div>


      {/* =================================================
          TODO LIST
      ================================================= */}

      <div>

        {filteredTodos.map((todo) => (

          <div
            key={todo.id}
            style={{
              display: "flex",
              alignItems: "center",
              padding: "10px 0",
              borderBottom:
                "1px solid #ddd",
            }}
          >

            {/* CHECKBOX */}

            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() =>
                toggleTodo(todo.id)
              }
            />


            {/* TODO TEXT */}

            <span
              style={{
                flex: 1,
                marginLeft: 8,
                textDecoration:
                  todo.completed
                    ? "line-through"
                    : "none",
                color:
                  todo.completed
                    ? "#888"
                    : "#222",
              }}
            >
              {todo.text}
            </span>


            {/* DELETE BUTTON */}

            <button
              onClick={() =>
                deleteTodo(todo.id)
              }
              style={{
                border: "none",
                background: "transparent",
                cursor: "pointer",
                fontSize: 18,
              }}
              title="Delete"
            >
              🗑
            </button>

          </div>

        ))}


        {/* NO RESULTS */}

        {filteredTodos.length === 0 && (
          <p
            style={{
              color: "#777",
              textAlign: "center",
              padding: 15,
            }}
          >
            No tasks found.
          </p>
        )}

      </div>


      {/* =================================================
          FOOTER
      ================================================= */}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 18,
        }}
      >

        {/* ACTIVE COUNT */}

        <span
          style={{
            color: "#666",
            fontSize: 14,
          }}
        >
          {activeCount} items left
        </span>


        {/* UNDO BUTTON */}

        <button
          onClick={undoDelete}
          disabled={!deletedTodo}
          style={{
            padding: "8px 14px",
            border: "1px solid #ccc",
            borderRadius: 6,
            background: "white",
            cursor: deletedTodo
              ? "pointer"
              : "not-allowed",
          }}
        >
          Undo delete
        </button>

      </div>

    </div>
  );
}

export default TodoList;