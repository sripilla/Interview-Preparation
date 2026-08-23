/*
===========================================================
REACT LESSON: MULTI-STEP FORM WIZARD
===========================================================

This program practices:

1. useState
2. Controlled form inputs
3. Managing multiple form fields
4. Object state
5. Updating object state using the spread operator
6. Conditional rendering
7. Step-based navigation
8. Per-step validation
9. Array methods
10. trim()
11. Derived values
12. Progress bar
13. Percentage calculation
14. Disabled buttons
15. Read-only review
16. Form submission
17. Event handling
18. Ternary operator
19. Logical operators
20. Dynamic JSX


===========================================================
1. WHAT IS A MULTI-STEP FORM?
===========================================================

Instead of displaying one large form, we divide it
into multiple steps.

Our wizard has 3 steps:

Step 1:
    Personal Details
    - Name
    - Email

Step 2:
    Shipping Address
    - Address
    - City

Step 3:
    Review
    - Name
    - Email
    - Address
    - City
    - Submit


===========================================================
2. STEP STATE
===========================================================

We need to know which step the user is currently viewing.

Example:

const [currentStep, setCurrentStep] = useState(1);

Initially:

currentStep = 1

When Next is clicked:

setCurrentStep(currentStep + 1)


===========================================================
3. FORM STATE
===========================================================

We can store all fields in one object:

const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: ""
});


===========================================================
4. CONTROLLED INPUTS
===========================================================

The input value comes from React state:

value={formData.name}

When the user types:

onChange={handleChange}

This keeps React and the input synchronized.


===========================================================
5. UPDATING OBJECT STATE
===========================================================

We must not directly modify state.

Wrong:

formData.name = "John";

Correct:

setFormData({
    ...formData,
    name: "John"
});


===========================================================
6. COMPUTED PROPERTY NAME
===========================================================

We can use the input's name attribute:

<input name="name" />

Then:

const { name, value } = e.target;

And update:

setFormData({
    ...formData,
    [name]: value
});


[name] means:

Use the value stored inside the name variable
as the property name.


===========================================================
7. STEP VALIDATION
===========================================================

Step 1 requires:

    name
    email

Step 2 requires:

    address
    city

Step 3 has no new fields to validate.

The user cannot click Next until every required
field on the current step contains something.


===========================================================
8. trim()
===========================================================

trim() removes spaces from the beginning and end.

Example:

"   John   ".trim()

becomes:

"John"


It also helps detect whitespace-only input:

"     ".trim()

becomes:

""


===========================================================
9. EVERY()
===========================================================

We can check whether every required field is filled.

Example:

requiredFields.every(
    (field) => formData[field].trim() !== ""
)


If every field is filled:

true

If even one field is empty:

false


===========================================================
10. NEXT BUTTON
===========================================================

The Next button should be disabled when
the current step is invalid.

Example:

disabled={!canGoNext}


If:

canGoNext = false

then:

disabled = true


===========================================================
11. BACK BUTTON
===========================================================

Back moves to the previous step.

Example:

setCurrentStep(currentStep - 1)


It is disabled on step 1:

disabled={currentStep === 1}


===========================================================
12. PROGRESS BAR
===========================================================

There are 3 steps.

Percentage:

(currentStep / 3) * 100


Step 1:

1 / 3 × 100 = 33.33%


Step 2:

2 / 3 × 100 = 66.67%


Step 3:

3 / 3 × 100 = 100%


===========================================================
13. PROGRESS BAR WIDTH
===========================================================

We can dynamically change CSS width:

width: `${progress}%`


Example:

width: "66.67%"


===========================================================
14. CONDITIONAL RENDERING
===========================================================

React can show different content depending
on currentStep.

Example:

{currentStep === 1 && (
    <StepOne />
)}


{currentStep === 2 && (
    <StepTwo />
)}


{currentStep === 3 && (
    <StepThree />
)}


===========================================================
15. READ-ONLY REVIEW
===========================================================

On step 3, users should not edit the values.

We simply display them:

<p>{formData.name}</p>

<p>{formData.email}</p>

etc.


===========================================================
16. SUBMIT
===========================================================

On step 3, the button calls:

handleSubmit()

Then:

setSubmitted(true)


After submission:

"Application submitted!"

is displayed.


===========================================================
17. DISABLE FURTHER NAVIGATION
===========================================================

After submission:

submitted = true

Therefore:

Next
Back
Submit

can all be disabled.

This prevents the user from changing
the application after submission.


===========================================================
18. IMPORTANT DATA FLOW
===========================================================

Step 1
  ↓
Validate Name + Email
  ↓
Next
  ↓
Step 2
  ↓
Validate Address + City
  ↓
Next
  ↓
Step 3
  ↓
Review
  ↓
Submit
  ↓
Application submitted!


===========================================================
19. REQUIREMENTS
===========================================================

Step 1:
    Name
    Email

Step 2:
    Address
    City

Step 3:
    Read-only review
    Submit button

Progress:
    Step 1 of 3 → 33%
    Step 2 of 3 → 67%
    Step 3 of 3 → 100%

Next:
    Disabled until current step is valid.

Back:
    Moves to previous step.
    Disabled on step 1.

Submit:
    Shows "Application submitted!"
    Disables further navigation.


===========================================================
PROGRAM STARTS HERE
===========================================================
*/

import React, { useState } from "react";

function MultiStepFormWizard() {

  // -------------------------------------------------------
  // CURRENT STEP
  // -------------------------------------------------------

  const [currentStep, setCurrentStep] = useState(1);


  // -------------------------------------------------------
  // FORM DATA
  // -------------------------------------------------------

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
  });


  // -------------------------------------------------------
  // SUBMITTED STATE
  // -------------------------------------------------------

  const [submitted, setSubmitted] = useState(false);


  // -------------------------------------------------------
  // HANDLE INPUT CHANGE
  // -------------------------------------------------------

  function handleChange(e) {

    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }


  // -------------------------------------------------------
  // REQUIRED FIELDS FOR EACH STEP
  // -------------------------------------------------------

  let requiredFields = [];

  if (currentStep === 1) {

    requiredFields = [
      "name",
      "email",
    ];

  } else if (currentStep === 2) {

    requiredFields = [
      "address",
      "city",
    ];
  }


  // -------------------------------------------------------
  // CHECK CURRENT STEP VALIDATION
  // -------------------------------------------------------

  const canGoNext =
    requiredFields.every(
      (field) =>
        formData[field].trim() !== ""
    );


  // -------------------------------------------------------
  // PROGRESS CALCULATION
  // -------------------------------------------------------

  const progress =
    (currentStep / 3) * 100;


  // -------------------------------------------------------
  // NEXT
  // -------------------------------------------------------

  function handleNext() {

    if (!canGoNext) {
      return;
    }

    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  }


  // -------------------------------------------------------
  // BACK
  // -------------------------------------------------------

  function handleBack() {

    if (currentStep > 1 && !submitted) {
      setCurrentStep(currentStep - 1);
    }
  }


  // -------------------------------------------------------
  // SUBMIT
  // -------------------------------------------------------

  function handleSubmit() {

    if (submitted) {
      return;
    }

    setSubmitted(true);
  }


  // -------------------------------------------------------
  // JSX
  // -------------------------------------------------------

  return (
    <div
      style={{
        maxWidth: 420,
        margin: "30px auto",
        padding: 26,
        border: "1px solid #ddd",
        borderRadius: 12,
        fontFamily: "Arial",
      }}
    >

      {/* =================================================
          PROGRESS HEADER
      ================================================= */}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 13,
          color: "#666",
        }}
      >
        <span>
          Step {currentStep} of 3
        </span>

        <span>
          {Math.round(progress)}%
        </span>
      </div>


      {/* =================================================
          PROGRESS BAR
      ================================================= */}

      <div
        style={{
          height: 5,
          background: "#ddd",
          borderRadius: 5,
          marginTop: 8,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            background: "#3478db",
            transition: "width 0.3s",
          }}
        />
      </div>


      {/* =================================================
          STEP 1
      ================================================= */}

      {currentStep === 1 && (
        <div>

          <h2
            style={{
              fontSize: 20,
              marginTop: 28,
            }}
          >
            Personal details
          </h2>


          {/* NAME */}

          <label
            style={{
              display: "block",
              marginTop: 18,
              marginBottom: 6,
              fontSize: 14,
            }}
          >
            Name
          </label>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: 10,
              boxSizing: "border-box",
              border: "1px solid #ccc",
              borderRadius: 5,
            }}
          />


          {/* EMAIL */}

          <label
            style={{
              display: "block",
              marginTop: 18,
              marginBottom: 6,
              fontSize: 14,
            }}
          >
            Email
          </label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: 10,
              boxSizing: "border-box",
              border: "1px solid #ccc",
              borderRadius: 5,
            }}
          />

        </div>
      )}


      {/* =================================================
          STEP 2
      ================================================= */}

      {currentStep === 2 && (
        <div>

          <h2
            style={{
              fontSize: 20,
              marginTop: 28,
            }}
          >
            Shipping address
          </h2>


          {/* ADDRESS */}

          <label
            style={{
              display: "block",
              marginTop: 18,
              marginBottom: 6,
              fontSize: 14,
            }}
          >
            Address
          </label>

          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: 10,
              boxSizing: "border-box",
              border: "1px solid #ccc",
              borderRadius: 5,
            }}
          />


          {/* CITY */}

          <label
            style={{
              display: "block",
              marginTop: 18,
              marginBottom: 6,
              fontSize: 14,
            }}
          >
            City
          </label>

          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: 10,
              boxSizing: "border-box",
              border: "1px solid #ccc",
              borderRadius: 5,
            }}
          />

        </div>
      )}


      {/* =================================================
          STEP 3
      ================================================= */}

      {currentStep === 3 && (
        <div>

          <h2
            style={{
              fontSize: 20,
              marginTop: 28,
            }}
          >
            Review & Submit
          </h2>


          {/* NAME */}

          <div style={{ marginTop: 20 }}>
            <strong>Name:</strong>

            <p>
              {formData.name}
            </p>
          </div>


          {/* EMAIL */}

          <div>
            <strong>Email:</strong>

            <p>
              {formData.email}
            </p>
          </div>


          {/* ADDRESS */}

          <div>
            <strong>Address:</strong>

            <p>
              {formData.address}
            </p>
          </div>


          {/* CITY */}

          <div>
            <strong>City:</strong>

            <p>
              {formData.city}
            </p>
          </div>


          {/* SUBMIT */}

          <button
            onClick={handleSubmit}
            disabled={submitted}
            style={{
              width: "100%",
              padding: 11,
              marginTop: 15,
              borderRadius: 6,
              border: "1px solid #ccc",
              background: submitted
                ? "#ddd"
                : "white",
              cursor: submitted
                ? "not-allowed"
                : "pointer",
            }}
          >
            Submit
          </button>


          {/* SUCCESS MESSAGE */}

          {submitted && (
            <p
              style={{
                color: "green",
                textAlign: "center",
                fontWeight: "bold",
                marginTop: 15,
              }}
            >
              Application submitted!
            </p>
          )}

        </div>
      )}


      {/* =================================================
          NAVIGATION BUTTONS
      ================================================= */}

      {!submitted && (
        <div
          style={{
            display: "flex",
            gap: 10,
            marginTop: 25,
          }}
        >

          {/* BACK */}

          <button
            onClick={handleBack}
            disabled={currentStep === 1}
            style={{
              flex: 1,
              padding: 10,
              borderRadius: 6,
              border: "1px solid #ccc",
              cursor:
                currentStep === 1
                  ? "not-allowed"
                  : "pointer",
            }}
          >
            Back
          </button>


          {/* NEXT */}

          {currentStep < 3 && (
            <button
              onClick={handleNext}
              disabled={!canGoNext}
              style={{
                flex: 1,
                padding: 10,
                borderRadius: 6,
                border: "1px solid #ccc",
                cursor: canGoNext
                  ? "pointer"
                  : "not-allowed",
              }}
            >
              Next
            </button>
          )}

        </div>
      )}

    </div>
  );
}

export default MultiStepFormWizard;