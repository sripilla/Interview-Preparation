/*
========================================
SECTION 12: COMMON REACT MISTAKES
========================================

1. USING class INSTEAD OF className

❌ <div class="box">

✅ <div className="box">

----------------------------------------

2. NOT CLOSING TAGS

❌ <img src="photo.jpg">

✅ <img src="photo.jpg" />

----------------------------------------

3. FORGETTING key IN map()

❌
{items.map(item => (
  <li>{item.name}</li>
))}

✅
{items.map(item => (
  <li key={item.id}>{item.name}</li>
))}

----------------------------------------

4. MUTATING STATE DIRECTLY

❌
count++;

❌
todos.push(newTodo);

✅
setCount(prev => prev + 1);

✅
setTodos([...todos, newTodo]);

----------------------------------------

5. CALLING EVENT HANDLER IMMEDIATELY

❌
<button onClick={handleClick()}>

This calls the function immediately.

✅
<button onClick={handleClick}>

React calls it when clicked.

----------------------------------------

6. FORGETTING preventDefault() IN FORMS

❌
const handleSubmit = (e) => {
  console.log("Submitted");
}

The browser may reload the page.

✅
const handleSubmit = (e) => {
  e.preventDefault();
  console.log("Submitted");
}

----------------------------------------

7. WRONG useEffect DEPENDENCIES

[]        → Runs after initial render

[count]   → Runs after initial render
            and whenever count changes

No array  → Runs after every render

----------------------------------------

8. USING ARRAY INDEX AS key

⚠️ Avoid when items can be:
- Added
- Deleted
- Reordered

Prefer:

key={item.id}

*/

import { useState, useEffect } from "react";

function App() {
  const [name, setName] = useState("");
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState("");

  // Side effect: update browser tab title
  useEffect(() => {
    document.title = `Todos: ${todos.length}`;
  }, [todos]);

  const addTodo = (e) => {
    e.preventDefault();

    // Form validation
    if (name.trim() === "") {
      setError("Please enter a todo");
      return;
    }

    const newTodo = {
      id: Date.now(),
      text: name
    };

    // Immutable array update
    setTodos([...todos, newTodo]);

    // Clear input and error
    setName("");
    setError("");
  };

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <>
      <h1>My Todo App</h1>

      <form onSubmit={addTodo}>
        {/* Controlled input */}
        <input
          type="text"
          placeholder="Enter a todo"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button type="submit">
          Add Todo
        </button>
      </form>

      {/* Conditional rendering */}
      {error && <p>{error}</p>}

      {/* List rendering */}
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text}

            <button onClick={() => removeTodo(todo.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>

      {/* Conditional rendering */}
      {todos.length === 0 && (
        <p>No todos yet!</p>
      )}
    </>
  );
}

export default App;