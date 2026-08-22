/*
========================================
SECTION 1: JSX
========================================

JSX = JavaScript XML

It allows us to write HTML-like code inside JavaScript.

Example:
<h1>Hello</h1>

React converts JSX internally into JavaScript
that creates React elements.

----------------------------------------
IMPORTANT JSX RULES
----------------------------------------

1. Return ONE root element

❌ Wrong:
return (
    <h1>Hello</h1>
    <p>Welcome</p>
);

✅ Correct:
return (
    <div>
        <h1>Hello</h1>
        <p>Welcome</p>
    </div>
);

OR use Fragment:

return (
    <>
        <h1>Hello</h1>
        <p>Welcome</p>
    </>
);

----------------------------------------

2. Use className instead of class

❌ HTML:
<div class="box">

✅ JSX:
<div className="box">

----------------------------------------

3. All tags must be closed

❌ Wrong:
<img src="image.jpg">

✅ Correct:
<img src="image.jpg" />

----------------------------------------

4. Use {} to write JavaScript expressions
inside JSX

Example:
const name = "Likitha";

<h1>Hello, {name}</h1>

----------------------------------------

IMPORTANT:
Inside {} we write JavaScript EXPRESSIONS.

Examples:
{name}
{2 + 3}
{age >= 18 ? "Adult" : "Minor"}

*/

function App() {
  const name = "Likitha";
  const age = 21;

  return (
    <>
      <h1>Hello, {name}!</h1>

      <p>Age: {age}</p>

      <p>Next year you will be {age + 1}</p>

      <p>
        Status: {age >= 18 ? "Adult" : "Minor"}
      </p>
    </>
  );
}

export default App;