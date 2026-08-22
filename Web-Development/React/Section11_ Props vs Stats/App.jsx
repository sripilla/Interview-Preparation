/*
========================================
SECTION 11: PROPS VS STATE
========================================

PROPS:
Props are used to pass data from a
PARENT component to a CHILD component.

Props are READ-ONLY from the child's view.

----------------------------------------

STATE:
State is data managed by a component
that can change over time.

State is updated using its setter function.

----------------------------------------

MAIN DIFFERENCE:

PROPS:
Parent owns the data
        ↓
Passes it DOWN
        ↓
Child receives and uses it

STATE:
Component owns and manages the data
        ↓
Setter function updates it
        ↓
React re-renders the component

*/

import { useState } from "react";

// Child component receives a PROP
function Child({ value }) {
  return <h2>Count received from Parent: {value}</h2>;
}

function App() {
  // STATE belongs to App
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Props vs State</h1>

      {/* State displayed directly */}
      <p>Parent State: {count}</p>

      {/* Update the state */}
      <button onClick={() => setCount(prev => prev + 1)}>
        Increment
      </button>

      <hr />

      {/* Passing state as a prop to Child */}
      <Child value={count} />
    </>
  );
}

export default App;