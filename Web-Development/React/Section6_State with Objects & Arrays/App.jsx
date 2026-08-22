/*
========================================
SECTION 6: STATE WITH OBJECTS & ARRAYS
========================================

State can store:

1. Numbers
2. Strings
3. Objects
4. Arrays

When updating objects or arrays in React,
DO NOT modify the existing state directly.

Instead, create a NEW object or NEW array.

This is called IMMUTABILITY.

----------------------------------------
UPDATING AN OBJECT
----------------------------------------

const [user, setUser] = useState({
  name: "Likitha",
  age: 21
});

To update only the name:

setUser({
  ...user,
  name: "Rahul"
});

...user copies the existing properties.

Then:

name: "Rahul"

overrides the old name.

----------------------------------------
UPDATING AN ARRAY
----------------------------------------

❌ Wrong:

todos.push(newTodo);

This modifies the existing array directly.

✅ Correct:

setTodos([...todos, newTodo]);

...todos creates a new array containing
the old items, and newTodo is added.

----------------------------------------
REMOVING FROM AN ARRAY
----------------------------------------

Use filter():

setTodos(
  todos.filter(todo => todo.id !== id)
);

filter() creates a new array without
the matching item.

*/

import React, { useState } from "react";

function App() {
  // Object state
  const [user, setUser] = useState({
    name: "Likitha",
    age: 21
  });

  // Array state
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn JSX" },
    { id: 2, text: "Learn useState" }
  ]);

  // Update object state
  const changeName = () => {
    setUser({
      ...user,
      name: "Rahul"
    });
  };

  // Add a new item to array state
  const addTodo = () => {
    const newTodo = {
      id: Date.now(),
      text: "Learn React Hooks"
    };

    setTodos([...todos, newTodo]);
  };

  // Remove an item from array state
  const removeTodo = (id) => {
    setTodos(
      todos.filter(todo => todo.id !== id)
    );
  };

  return (
    <>
      <h1>State with Objects and Arrays</h1>

      {/* Object State */}
      <h2>User</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>

      <button onClick={changeName}>
        Change Name
      </button>

      {/* Array State */}
      <h2>Todos</h2>

      <button onClick={addTodo}>
        Add Todo
      </button>

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
    </>
  );
}

export default App;
