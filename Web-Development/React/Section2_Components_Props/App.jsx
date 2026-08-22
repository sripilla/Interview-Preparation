/*
========================================
SECTION 2: COMPONENTS & PROPS
========================================

COMPONENT:
A component is a reusable piece of UI.

In modern React, we usually create
FUNCTION COMPONENTS.

----------------------------------------
1. SIMPLE COMPONENT
----------------------------------------

function Welcome() {
    return <h1>Hello!</h1>;
}

Component names MUST start with a capital letter.

✅ Welcome
❌ welcome

----------------------------------------
2. USING A COMPONENT
----------------------------------------

We can use a component like an HTML tag:

<Welcome />

----------------------------------------
3. PROPS
----------------------------------------

Props = Properties

Props are used to pass data from a
PARENT component to a CHILD component.

Example:

function Greeting(props) {
    return <h1>Hello, {props.name}</h1>;
}

Using the component:

<Greeting name="Likitha" />

Here:

Parent ---> sends "Likitha"
          through name prop

Child  ---> receives it using props.name

----------------------------------------
4. DESTRUCTURING PROPS
----------------------------------------

Instead of:

function Greeting(props) {
    return <h1>{props.name}</h1>;
}

We commonly write:

function Greeting({ name }) {
    return <h1>{name}</h1>;
}

----------------------------------------
IMPORTANT RULE:
----------------------------------------

Props are READ-ONLY.

A child component should NOT directly
modify the props it receives.

Data flows:

Parent Component
       ↓ props
Child Component

*/

import React from "react";


function Student({ name, course, age }) {
  return (
    <div>
      <h2>Student Details</h2>
      <p>Name: {name}</p>
      <p>Course: {course}</p>
      <p>Age: {age}</p>
    </div>
  );
}

function App() {
  return (
    <>
      <h1>React Props Example</h1>

      <Student
        name="Likitha"
        course="BTech AI/ML"
        age={21}
      />

      <Student
        name="Rahul"
        course="Computer Science"
        age={22}
      />
    </>
  );
}

export default App;
