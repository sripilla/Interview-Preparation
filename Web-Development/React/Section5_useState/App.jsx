/*
========================================
SECTION 5: STATE MANAGEMENT - useState
========================================

STATE:
State is data that belongs to a component
and can change over time.

When state changes, React automatically
re-renders the component to show the
updated value.

----------------------------------------
useState()
----------------------------------------

useState is a React Hook used to create
and manage state.

Syntax:

const [value, setValue] = useState(initialValue);

Example:

const [count, setCount] = useState(0);

count    → current state value
setCount → function used to update count
0        → initial value

----------------------------------------
IMPORTANT RULE:
----------------------------------------

Never change state directly.

❌ Wrong:

count = count + 1;
count++;

✅ Correct:

setCount(count + 1);

Or, when the new value depends on the
previous value:

setCount(prev => prev + 1);

----------------------------------------
WHY prev => prev + 1?
----------------------------------------

React state updates may be scheduled or
batched.

Using the previous state form is safer
when the new value depends on the old value.

*/

import { useState } from "react";

function App() {
  // count = current state
  // setCount = function to update state
  // 0 = initial value
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prev => prev + 1);
  };

  const decrement = () => {
    setCount(prev => prev - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <>
      <h1>Counter App</h1>

      <h2>Count: {count}</h2>

      <button onClick={increment}>Increment</button>

      <button onClick={decrement}>Decrement</button>

      <button onClick={reset}>Reset</button>
    </>
  );
}

export default App;