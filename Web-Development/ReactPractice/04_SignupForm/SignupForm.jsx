/*
===========================================================
REACT LESSON: SIGNUP FORM WITH REAL-TIME VALIDATION
===========================================================

This program practices:

1. useState
2. Controlled form inputs
3. onChange
4. onSubmit
5. preventDefault()
6. Field-level validation
7. Regular expressions
8. Conditional rendering
9. Multiple pieces of state
10. Validation functions
11. Form submission
12. Touched fields
13. Dynamic error messages
14. Dynamic input styles
15. Disabling a button
16. Destructuring
17. Logical operators
18. Comparing values
19. Object state
20. Real-time validation


===========================================================
1. CONTROLLED FORM INPUT
===========================================================

A controlled input is controlled by React state.

Example:

const [name, setName] = useState("");

<input
    value={name}
    onChange={(e) => setName(e.target.value)}
/>

The value shown in the input always comes from React state.


===========================================================
2. onChange
===========================================================

onChange runs whenever the user types.

Example:

onChange={(e) => setName(e.target.value)}

e.target.value gives the current input value.


===========================================================
3. onSubmit
===========================================================

Forms use:

<form onSubmit={handleSubmit}>

When the user clicks Submit, handleSubmit() runs.


===========================================================
4. preventDefault()
===========================================================

Normally, submitting an HTML form reloads the page.

React applications usually prevent this:

e.preventDefault();

This keeps the application on the same page.


===========================================================
5. FIELD VALIDATION
===========================================================

Each field has its own validation rules.

NAME:
    Required
    Minimum 3 characters

EMAIL:
    Basic email pattern

PASSWORD:
    Minimum 8 characters
    At least one digit
    At least one special character

CONFIRM PASSWORD:
    Must exactly match password


===========================================================
6. REGULAR EXPRESSIONS
===========================================================

Regular expressions allow us to test patterns.

EMAIL:

/^[^\s@]+@[^\s@]+\.[^\s@]+$/

This checks for a basic pattern like:

abc@example.com


PASSWORD DIGIT:

/[0-9]/

Checks whether a number exists.


PASSWORD SPECIAL CHARACTER:

/[^A-Za-z0-9]/

Checks whether a character exists that is NOT:

A-Z
a-z
0-9


===========================================================
7. VALIDATION FUNCTION
===========================================================

Instead of writing validation directly inside JSX,
we create a function:

validateForm()

It checks all four fields and returns the errors.


===========================================================
8. ERROR OBJECT
===========================================================

We can store all errors in one object:

{
    name: "...",
    email: "...",
    password: "...",
    confirmPassword: "..."
}

If a field is valid, its error can be an empty string:

{
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
}


===========================================================
9. TERNARY OPERATOR
===========================================================

The ternary operator has this form:

condition ? trueValue : falseValue

Example:

nameError ? "red" : "green"


===========================================================
10. CONDITIONAL RENDERING
===========================================================

React can display something only when a condition is true.

Example:

{nameError && (
    <p>{nameError}</p>
)}

If nameError contains text:

    Name must be at least 3 characters

the message is displayed.

If nameError is empty:

    ""

nothing is displayed.


===========================================================
11. TOUCHED FIELDS
===========================================================

We don't necessarily want to show errors immediately
before the user has interacted with a field.

We can track this using:

const [touched, setTouched] = useState({
    name: false,
    email: false,
    password: false,
    confirmPassword: false
});

Once the user interacts with a field:

touched.name = true

Then we can show its validation message.


===========================================================
12. REAL-TIME VALIDATION
===========================================================

When the user changes a field:

1. Update its value.
2. Mark it as touched.
3. Validate the form.
4. Show the current error.

Therefore the error changes while the user types.


===========================================================
13. SUBMIT VALIDATION
===========================================================

When Submit is clicked:

1. Prevent page reload.
2. Mark all fields as touched.
3. Run all four validations.
4. If errors exist:
       Do not submit.
5. If no errors:
       Show "Account created!"
       Disable submit button.


===========================================================
14. DISABLING THE BUTTON
===========================================================

After successful submission:

submitted = true

Then:

disabled={submitted}

The button cannot be clicked again.


===========================================================
15. INPUT STYLING
===========================================================

We can dynamically change the border.

Invalid:

border: "1px solid red"

Valid:

border: "1px solid green"

This provides visual feedback.


===========================================================
16. IMPORTANT REACT DATA FLOW
===========================================================

                 USER TYPES
                     |
                     ↓
                 onChange
                     |
                     ↓
               update state
                     |
                     ↓
              validate field
                     |
          +----------+----------+
          |                     |
        valid                 invalid
          |                     |
      green border          red border
                              |
                         error message


===========================================================
17. REQUIREMENTS
===========================================================

Name:
    required
    minimum 3 characters

Email:
    basic email pattern

Password:
    minimum 8 characters
    at least one digit
    at least one special character

Confirm password:
    must exactly match password

Submit:
    validate all four fields
    block submission if invalid
    show all relevant errors
    show "Account created!" if valid
    disable button after success


===========================================================
PROGRAM STARTS HERE
===========================================================
*/

import React, { useState } from "react";

function SignupForm() {

  // -------------------------------------------------------
  // FORM VALUES
  // -------------------------------------------------------

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });


  // -------------------------------------------------------
  // ERRORS
  // -------------------------------------------------------

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });


  // -------------------------------------------------------
  // TOUCHED FIELDS
  // -------------------------------------------------------

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    password: false,
    confirmPassword: false,
  });


  // -------------------------------------------------------
  // SUCCESS STATE
  // -------------------------------------------------------

  const [submitted, setSubmitted] = useState(false);


  // -------------------------------------------------------
  // VALIDATE FORM
  // -------------------------------------------------------

  function validateForm(values) {

    const newErrors = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    };


    // -----------------------------------------------------
    // NAME VALIDATION
    // -----------------------------------------------------

    if (values.name.trim().length < 3) {
      newErrors.name =
        "Name must be at least 3 characters";
    }


    // -----------------------------------------------------
    // EMAIL VALIDATION
    // -----------------------------------------------------

    const emailPattern =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(values.email)) {
      newErrors.email =
        "Enter a valid email";
    }


    // -----------------------------------------------------
    // PASSWORD VALIDATION
    // -----------------------------------------------------

    const hasNumber = /[0-9]/.test(values.password);

    const hasSpecialCharacter =
      /[^A-Za-z0-9]/.test(values.password);

    if (
      values.password.length < 8 ||
      !hasNumber ||
      !hasSpecialCharacter
    ) {
      newErrors.password =
        "Password must be at least 8 characters, include a number and special character";
    }


    // -----------------------------------------------------
    // CONFIRM PASSWORD VALIDATION
    // -----------------------------------------------------

    if (
      values.confirmPassword !== values.password
    ) {
      newErrors.confirmPassword =
        "Passwords do not match";
    }


    return newErrors;
  }


  // -------------------------------------------------------
  // HANDLE INPUT CHANGE
  // -------------------------------------------------------

  function handleChange(e) {

    const { name, value } = e.target;


    // Update form state
    const updatedForm = {
      ...form,
      [name]: value,
    };

    setForm(updatedForm);


    // Mark this field as touched
    const updatedTouched = {
      ...touched,
      [name]: true,
    };

    setTouched(updatedTouched);


    // Validate the updated form
    const newErrors =
      validateForm(updatedForm);

    setErrors(newErrors);
  }


  // -------------------------------------------------------
  // HANDLE FORM SUBMIT
  // -------------------------------------------------------

  function handleSubmit(e) {

    // Prevent browser from reloading
    e.preventDefault();


    // Mark every field as touched
    setTouched({
      name: true,
      email: true,
      password: true,
      confirmPassword: true,
    });


    // Run all validations
    const newErrors =
      validateForm(form);

    setErrors(newErrors);


    // Check whether any errors exist
    const hasErrors =
      Object.values(newErrors).some(
        (error) => error !== ""
      );


    // If there are errors, stop submission
    if (hasErrors) {
      setSubmitted(false);
      return;
    }


    // Everything is valid
    setSubmitted(true);
  }


  // -------------------------------------------------------
  // INPUT STYLE FUNCTION
  // -------------------------------------------------------

  function getInputStyle(fieldName) {

    // If field hasn't been touched,
    // use normal border
    if (!touched[fieldName]) {
      return {
        width: "100%",
        padding: 10,
        boxSizing: "border-box",
        border: "1px solid #ccc",
        borderRadius: 5,
      };
    }


    // If field has an error,
    // use red border
    if (errors[fieldName]) {
      return {
        width: "100%",
        padding: 10,
        boxSizing: "border-box",
        border: "1px solid red",
        borderRadius: 5,
      };
    }


    // Otherwise use green border
    return {
      width: "100%",
      padding: 10,
      boxSizing: "border-box",
      border: "1px solid green",
      borderRadius: 5,
    };
  }


  // -------------------------------------------------------
  // JSX
  // -------------------------------------------------------

  return (
    <div
      style={{
        maxWidth: 360,
        margin: "20px auto",
        padding: 20,
        border: "1px solid #ddd",
        borderRadius: 10,
        fontFamily: "Arial",
      }}
    >

      <h2
        style={{
          fontSize: 18,
          marginBottom: 20,
        }}
      >
        Create account
      </h2>


      <form onSubmit={handleSubmit}>

        {/* =================================================
            NAME
        ================================================= */}

        <label
          style={{
            display: "block",
            marginBottom: 5,
            fontSize: 13,
          }}
        >
          Name
        </label>

        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          style={getInputStyle("name")}
        />

        {touched.name && errors.name && (
          <p
            style={{
              color: "red",
              fontSize: 12,
              marginTop: 4,
            }}
          >
            {errors.name}
          </p>
        )}


        {/* =================================================
            EMAIL
        ================================================= */}

        <label
          style={{
            display: "block",
            marginTop: 14,
            marginBottom: 5,
            fontSize: 13,
          }}
        >
          Email
        </label>

        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          style={getInputStyle("email")}
        />

        {touched.email && errors.email && (
          <p
            style={{
              color: "red",
              fontSize: 12,
              marginTop: 4,
            }}
          >
            {errors.email}
          </p>
        )}


        {/* =================================================
            PASSWORD
        ================================================= */}

        <label
          style={{
            display: "block",
            marginTop: 14,
            marginBottom: 5,
            fontSize: 13,
          }}
        >
          Password
        </label>

        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          style={getInputStyle("password")}
        />

        {touched.password && errors.password ? (
          <p
            style={{
              color: "red",
              fontSize: 12,
              marginTop: 4,
            }}
          >
            {errors.password}
          </p>
        ) : touched.password ? (
          <p
            style={{
              color: "green",
              fontSize: 12,
              marginTop: 4,
            }}
          >
            Looks good
          </p>
        ) : null}


        {/* =================================================
            CONFIRM PASSWORD
        ================================================= */}

        <label
          style={{
            display: "block",
            marginTop: 14,
            marginBottom: 5,
            fontSize: 13,
          }}
        >
          Confirm password
        </label>

        <input
          type="password"
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={handleChange}
          style={getInputStyle("confirmPassword")}
        />

        {touched.confirmPassword &&
          errors.confirmPassword && (
            <p
              style={{
                color: "red",
                fontSize: 12,
                marginTop: 4,
              }}
            >
              {errors.confirmPassword}
            </p>
          )}


        {/* =================================================
            SUBMIT BUTTON
        ================================================= */}

        <button
          type="submit"
          disabled={submitted}
          style={{
            width: "100%",
            marginTop: 18,
            padding: 10,
            borderRadius: 5,
            border: "1px solid #ccc",
            background: submitted
              ? "#ddd"
              : "white",
            cursor: submitted
              ? "not-allowed"
              : "pointer",
          }}
        >
          Create account
        </button>


        {/* =================================================
            SUCCESS MESSAGE
        ================================================= */}

        {submitted && (
          <p
            style={{
              color: "green",
              textAlign: "center",
              fontSize: 13,
              marginTop: 12,
            }}
          >
            Account created!
          </p>
        )}

      </form>
    </div>
  );
}

export default SignupForm;