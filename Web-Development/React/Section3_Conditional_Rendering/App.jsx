/*
========================================
SECTION 3: RENDERING & CONDITIONAL RENDERING
========================================

RENDERING:
Rendering means displaying elements or
components on the screen.

React decides what to display based on
the JSX returned by a component.

----------------------------------------
CONDITIONAL RENDERING
----------------------------------------

Conditional rendering means displaying
different UI based on a condition.

Example:
If user is logged in → Show Welcome
Otherwise → Show Login button

----------------------------------------
1. TERNARY OPERATOR
----------------------------------------

Syntax:

condition ? valueIfTrue : valueIfFalse

Example:

{isLoggedIn ? "Welcome" : "Please Login"}

If isLoggedIn is true:
→ "Welcome"

If isLoggedIn is false:
→ "Please Login"

----------------------------------------
2. && OPERATOR
----------------------------------------

Used when we want to display something
ONLY if a condition is true.

Syntax:

condition && <Element />

Example:

{hasError && <p>Error occurred</p>}

If hasError is true:
→ Error message is displayed

If hasError is false:
→ Nothing is displayed

----------------------------------------
IMPORTANT:
----------------------------------------

Ternary:
TRUE  → display one thing
FALSE → display another thing

&&:
TRUE  → display something
FALSE → display nothing

*/

import React from "react";


function App() {
  const isLoggedIn = true;
  const hasNotification = true;

  return (
    <>
      <h1>Conditional Rendering</h1>

      {/* Ternary operator */}
      <h2>
        {isLoggedIn ? "Welcome back!" : "Please Login"}
      </h2>

      {/* && operator */}
      {hasNotification && (
        <p>You have a new notification!</p>
      )}

      {/* Another conditional */}
      <p>
        Account Status: {isLoggedIn ? "Active" : "Inactive"}
      </p>
    </>
  );
}

export default App;
