/*
========================================
SECTION 7: HANDLING EVENTS
========================================

EVENT:
An event is an action performed by the user.

Examples:
- Clicking a button
- Typing in an input
- Submitting a form
- Pressing a key

React handles events using camelCase names.

Examples:

onClick
onChange
onSubmit
onFocus
onBlur
onKeyDown

----------------------------------------
EVENT HANDLER
----------------------------------------

An event handler is a function that runs
when an event occurs.

Example:

const handleClick = () => {
  console.log("Button clicked");
};

<button onClick={handleClick}>
  Click Me
</button>

IMPORTANT:

✅ Pass the function:
onClick={handleClick}

❌ Don't call it immediately:
onClick={handleClick()}

----------------------------------------
EVENT OBJECT (e)
----------------------------------------

React provides an event object.

Example:

const handleChange = (e) => {
  console.log(e.target.value);
};

e.target.value
→ Gets the current value of an input.

----------------------------------------
FORM SUBMISSION
----------------------------------------

By default, submitting a form reloads
the page.

To stop this:

e.preventDefault();

Example:

const handleSubmit = (e) => {
  e.preventDefault();
  console.log("Form submitted");
};

*/

import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  // Runs when button is clicked
  const handleClick = () => {
    alert("Button clicked!");
  };

  // Runs when user types in the input
  const handleChange = (e) => {
    setName(e.target.value);
  };

  // Runs when form is submitted
  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`Form submitted by ${name}`);
  };

  return (
    <>
      <h1>React Events</h1>

      {/* onClick */}
      <button onClick={handleClick}>
        Click Me
      </button>

      <br />
      <br />

      {/* onChange */}
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={handleChange}
      />

      <p>Hello, {name}</p>

      {/* onSubmit */}
      <form onSubmit={handleSubmit}>
        <button type="submit">
          Submit Form
        </button>
      </form>
    </>
  );
}

export default App;