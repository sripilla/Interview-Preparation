/*
========================================
SECTION 9: useEffect
========================================

useEffect is a React Hook used for
SIDE EFFECTS.

SIDE EFFECTS are operations that happen
outside normal JSX rendering.

Examples:
- Fetching data from an API
- Updating the document title
- Setting up subscriptions
- Timers

----------------------------------------
SYNTAX
----------------------------------------

useEffect(() => {
  // Side effect code
}, [dependencies]);

----------------------------------------
DEPENDENCY ARRAY
----------------------------------------

1. Empty array []

useEffect(() => {
  // Runs once after first render
}, []);

----------------------------------------

2. With a dependency [count]

useEffect(() => {
  // Runs when count changes
}, [count]);

----------------------------------------

3. No dependency array

useEffect(() => {
  // Runs after every render
});

This is rarely what we want.

----------------------------------------
IMPORTANT:
----------------------------------------

Do not put code with side effects
directly in the component body when
it should run in response to lifecycle
changes. Use useEffect instead.

*/

import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  // Runs once when the component first renders
  useEffect(() => {
    console.log("Component mounted");
  }, []);

  // Runs whenever count changes
  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]);

  return (
    <>
      <h1>useEffect Example</h1>

      <h2>Count: {count}</h2>

      <button onClick={() => setCount(prev => prev + 1)}>
        Increment
      </button>
    </>
  );
}

export default App;