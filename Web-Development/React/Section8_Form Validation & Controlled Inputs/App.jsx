/*
========================================
SECTION 8: FORM VALIDATION
           & CONTROLLED INPUTS
========================================

CONTROLLED INPUT:
An input whose value is controlled by
React state.

Example:

const [email, setEmail] = useState("");

<input
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>

FLOW:

User types
    ↓
onChange runs
    ↓
setEmail() updates React state
    ↓
React re-renders
    ↓
value={email} displays the state value

----------------------------------------
FORM VALIDATION
----------------------------------------

Validation means checking whether the
user's input is valid before submitting.

Examples:

- Email should contain @
- Password should have at least 6 characters
- Required fields should not be empty

----------------------------------------
e.preventDefault()
----------------------------------------

Forms reload the page by default.

Use:

e.preventDefault();

to stop the page reload.

----------------------------------------
IMPORTANT PATTERN
----------------------------------------

1. Store input values in state
2. Update state using onChange
3. Validate values in handleSubmit
4. Show an error if invalid
5. Submit/process if valid

*/

import { useState } from "react";

function App() {
  // State for input values
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // State for error message
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    // Prevent page reload
    e.preventDefault();

    // Email validation
    if (!email.includes("@")) {
      setError("Please enter a valid email");
      return;
    }

    // Password validation
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    // Clear error if everything is valid
    setError("");

    alert("Form submitted successfully!");
  };

  return (
    <>
      <h1>Login Form</h1>

      <form onSubmit={handleSubmit}>
        {/* Email controlled input */}
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br />
        <br />

        {/* Password controlled input */}
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br />
        <br />

        {/* Display error only if error exists */}
        {error && <p>{error}</p>}

        <button type="submit">
          Login
        </button>
      </form>
    </>
  );
}

export default App;