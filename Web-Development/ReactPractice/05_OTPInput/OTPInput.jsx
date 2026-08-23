/*
===========================================================
REACT LESSON: OTP INPUT
===========================================================

This program practices:

1. useState
2. Arrays in React state
3. Controlled inputs
4. useRef
5. useRef with multiple DOM elements
6. onChange
7. onKeyDown
8. Clipboard / paste handling
9. Regular expressions
10. Array.map()
11. Array.from()
12. Updating an array without mutating state
13. Focus management
14. Conditional button disabling
15. Derived state
16. Event objects
17. preventDefault()
18. String manipulation


===========================================================
1. WHAT IS AN OTP INPUT?
===========================================================

OTP = One-Time Password.

Here we need 6 separate input boxes:

[ ] [ ] [ ] [ ] [ ] [ ]

Each box accepts only ONE digit.


===========================================================
2. useState WITH AN ARRAY
===========================================================

Instead of creating six separate states:

const [digit1, setDigit1] = useState("");
const [digit2, setDigit2] = useState("");
...

we can store all six values in one array:

const [otp, setOtp] = useState(
    ["", "", "", "", "", ""]
);

Example:

["4", "8", "2", "", "", ""]

means:

Box 1 = 4
Box 2 = 8
Box 3 = 2
Box 4 = empty
Box 5 = empty
Box 6 = empty


===========================================================
3. WHY useRef?
===========================================================

useState stores DATA.

useRef can store REFERENCES to DOM elements.

We need to move focus between input boxes.

For example:

inputRefs.current[0].focus();

means:

"Focus the first input box."


===========================================================
4. ARRAY OF REFS
===========================================================

We need six input references.

We can create:

const inputRefs = useRef([]);

Then:

inputRefs.current[index] = element;

stores the actual input element.


===========================================================
5. AUTO-FOCUS
===========================================================

When the user types a digit:

[4] [ ] [ ] [ ] [ ] [ ]

we want:

[4] [ ] [ ] [ ] [ ] [ ]
     ↑
    focus

So after storing the digit, we call:

inputRefs.current[index + 1].focus();


===========================================================
6. NON-DIGIT CHARACTERS
===========================================================

Only digits 0-9 are allowed.

We can test using:

/^\d$/

\d means a digit.

^ and $ make sure the entire value is exactly
one character.


===========================================================
7. onChange
===========================================================

When a user types into an input:

onChange={(e) => handleChange(e, index)}

We receive:

e      -> event
index  -> which box changed


===========================================================
8. UPDATING AN ARRAY IN REACT
===========================================================

We should NOT directly modify state.

Wrong:

otp[index] = digit;

Instead create a copy:

const newOtp = [...otp];

Then change the copy:

newOtp[index] = digit;

Then update state:

setOtp(newOtp);


===========================================================
9. BACKSPACE NAVIGATION
===========================================================

Requirement:

If current box is empty and user presses Backspace:

[4] [8] [ ] [ ] [ ] [ ]
       ↑
     focus

Press Backspace:

[4] [ ] [ ] [ ] [ ] [ ]
    ↑
  focus

So:

if (e.key === "Backspace" && otp[index] === "") {

    clear previous box

    focus previous box
}


===========================================================
10. PASTE SUPPORT
===========================================================

Suppose the user copies:

482913

and pastes it into any box.

We want:

[4] [8] [2] [9] [1] [3]

We use:

e.clipboardData.getData("text")

to get the pasted text.


===========================================================
11. FILTERING DIGITS
===========================================================

The pasted text might contain:

abc482913xyz

We only want digits.

We can use:

text.replace(/\D/g, "")

\D means "not a digit".

Therefore:

abc482913xyz

becomes:

482913


===========================================================
12. slice()
===========================================================

We only need six digits.

Example:

"48291377".slice(0, 6)

becomes:

"482913"


===========================================================
13. Array.from()
===========================================================

We can create six empty values:

Array.from({ length: 6 }, () => "")

Result:

["", "", "", "", "", ""]


===========================================================
14. VERIFY BUTTON
===========================================================

The Verify button should only be enabled when
all six boxes contain a digit.

We can use:

otp.every((digit) => digit !== "")

.every() returns true only when EVERY element
passes the condition.


===========================================================
15. CONDITIONAL BUTTON DISABLING
===========================================================

Example:

disabled={!isComplete}

If OTP is incomplete:

disabled = true

If OTP is complete:

disabled = false


===========================================================
16. preventDefault()
===========================================================

For paste:

e.preventDefault();

prevents the browser from performing its normal
paste behavior.

We then control exactly where each digit goes.


===========================================================
17. IMPORTANT DATA FLOW
===========================================================

                 USER TYPES
                      |
                      ↓
                  onChange
                      |
                      ↓
                update otp[]
                      |
                      ↓
                 setOtp()
                      |
                      ↓
               React re-renders
                      |
                      ↓
              focus next input


For paste:

Paste
  ↓
clipboardData
  ↓
extract digits
  ↓
put digits into array
  ↓
setOtp()
  ↓
focus last filled box


===========================================================
18. REQUIREMENTS
===========================================================

1. Render 6 single-digit input boxes.

2. Typing a digit:
       - stores it
       - moves focus to next box

3. Non-digit characters:
       - ignored

4. Backspace:
       - if current box contains a digit,
         it clears normally
       - if current box is empty,
         clear previous box and focus it

5. Paste:
       - accept a 6-digit string
       - distribute one digit per box
       - focus the last filled box

6. Verify:
       - enabled only when all six boxes
         contain a digit


===========================================================
PROGRAM STARTS HERE
===========================================================
*/

import React, { useRef, useState } from "react";

function OTPInput() {

  // -------------------------------------------------------
  // OTP STATE
  // -------------------------------------------------------

  const [otp, setOtp] = useState(
    Array.from({ length: 6 }, () => "")
  );


  // -------------------------------------------------------
  // INPUT REFERENCES
  // -------------------------------------------------------

  const inputRefs = useRef([]);


  // -------------------------------------------------------
  // HANDLE TYPING
  // -------------------------------------------------------

  function handleChange(e, index) {

    const value = e.target.value;


    // Ignore anything that is not a digit
    if (!/^\d$/.test(value)) {
      return;
    }


    // Create a copy of the OTP array
    const newOtp = [...otp];


    // Store the digit
    newOtp[index] = value;


    // Update state
    setOtp(newOtp);


    // Move focus to the next box
    if (index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  }


  // -------------------------------------------------------
  // HANDLE BACKSPACE
  // -------------------------------------------------------

  function handleKeyDown(e, index) {

    if (e.key !== "Backspace") {
      return;
    }


    // If current box already has a digit,
    // let the browser clear it normally.
    if (otp[index] !== "") {
      return;
    }


    // If current box is empty,
    // go to the previous box.
    if (index > 0) {

      const newOtp = [...otp];

      // Clear previous digit
      newOtp[index - 1] = "";

      // Update state
      setOtp(newOtp);

      // Focus previous input
      inputRefs.current[index - 1]?.focus();
    }
  }


  // -------------------------------------------------------
  // HANDLE PASTE
  // -------------------------------------------------------

  function handlePaste(e, index) {

    // Prevent normal browser paste
    e.preventDefault();


    // Get pasted text
    const pastedText =
      e.clipboardData.getData("text");


    // Keep digits only
    const digits =
      pastedText.replace(/\D/g, "");


    // If there are no digits, do nothing
    if (!digits) {
      return;
    }


    // Create a copy of current OTP
    const newOtp = [...otp];


    /*
      Put each pasted digit into a box.

      Example:

      digits = "482913"

      becomes:

      ["4", "8", "2", "9", "1", "3"]
    */

    for (let i = 0; i < digits.length; i++) {

      const targetIndex = index + i;

      // Stop after the sixth box
      if (targetIndex >= 6) {
        break;
      }

      newOtp[targetIndex] = digits[i];
    }


    // Update state
    setOtp(newOtp);


    // Find the last box that was filled
    const lastIndex = Math.min(
      index + digits.length - 1,
      5
    );


    // Focus the last filled box
    inputRefs.current[lastIndex]?.focus();
  }


  // -------------------------------------------------------
  // CHECK WHETHER OTP IS COMPLETE
  // -------------------------------------------------------

  const isComplete =
    otp.every((digit) => digit !== "");


  // -------------------------------------------------------
  // VERIFY
  // -------------------------------------------------------

  function handleVerify() {

    if (!isComplete) {
      return;
    }

    const code = otp.join("");

    alert(`OTP entered: ${code}`);
  }


  // -------------------------------------------------------
  // JSX
  // -------------------------------------------------------

  return (
    <div
      style={{
        maxWidth: 360,
        margin: "40px auto",
        padding: 24,
        border: "1px solid #ddd",
        borderRadius: 12,
        fontFamily: "Arial",
      }}
    >

      {/* Heading */}
      <h2
        style={{
          marginBottom: 6,
          fontSize: 20,
        }}
      >
        Enter verification code
      </h2>


      {/* Description */}
      <p
        style={{
          marginTop: 0,
          color: "#666",
          fontSize: 14,
        }}
      >
        We sent a 6-digit code to your phone
      </p>


      {/* OTP INPUTS */}
      <div
        style={{
          display: "flex",
          gap: 10,
          marginTop: 24,
        }}
      >

        {otp.map((digit, index) => (

          <input
            key={index}

            ref={(element) => {
              inputRefs.current[index] = element;
            }}

            type="text"

            inputMode="numeric"

            maxLength={1}

            value={digit}

            onChange={(e) =>
              handleChange(e, index)
            }

            onKeyDown={(e) =>
              handleKeyDown(e, index)
            }

            onPaste={(e) =>
              handlePaste(e, index)
            }

            style={{
              width: 42,
              height: 50,
              textAlign: "center",
              fontSize: 22,
              border: "1px solid #ccc",
              borderRadius: 6,
              boxSizing: "border-box",
            }}
          />

        ))}

      </div>


      {/* VERIFY BUTTON */}
      <button
        onClick={handleVerify}
        disabled={!isComplete}
        style={{
          width: "100%",
          marginTop: 24,
          padding: 12,
          borderRadius: 7,
          border: "1px solid #ccc",
          background: isComplete
            ? "#fff"
            : "#f5f5f5",
          cursor: isComplete
            ? "pointer"
            : "not-allowed",
          fontSize: 16,
        }}
      >
        Verify
      </button>

    </div>
  );
}

export default OTPInput;