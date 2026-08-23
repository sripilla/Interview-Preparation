/*
===========================================================
REACT LESSON: BIO EDITOR
===========================================================

This program practices:

1. useState
2. Controlled textarea
3. onChange
4. Input validation
5. Minimum length validation
6. Maximum length validation
7. Preventing invalid input
8. Character counting
9. Derived values
10. Conditional rendering
11. Conditional styling
12. Disabled buttons
13. Event handling
14. String.length
15. String slicing
16. Save confirmation


===========================================================
1. REQUIREMENTS
===========================================================

Maximum length:

150 characters


Minimum length:

10 characters


Rules:

- User cannot type beyond 150 characters.
- If bio has fewer than 10 characters,
  show an error message.
- Show characters remaining.
- Save is enabled only when length is
  between 10 and 150.
- Clicking Save shows "Saved!".


===========================================================
2. CONTROLLED TEXTAREA
===========================================================

The textarea value comes from React state:

const [bio, setBio] = useState("");


Then:

<textarea
    value={bio}
    onChange={...}
/>


React controls the textarea value.


===========================================================
3. onChange
===========================================================

Whenever the user types:

onChange={(e) => setBio(e.target.value)}


e.target.value contains the current
textarea contents.


===========================================================
4. STRING.length
===========================================================

To find the number of characters:

bio.length


Example:

bio = "Hello"

bio.length = 5


===========================================================
5. CHARACTERS REMAINING
===========================================================

Maximum is 150.

Therefore:

remaining = 150 - bio.length


Example:

bio.length = 10

remaining = 140


===========================================================
6. MAXIMUM LENGTH
===========================================================

The requirement says typing beyond 150
must be blocked.

We can use:

maxLength={150}


The browser prevents additional characters.


We can also explicitly protect the state
inside onChange.


===========================================================
7. MINIMUM LENGTH VALIDATION
===========================================================

The minimum is 10.

If:

bio.length < 10

show:

"Bio must be at least 10 characters"


Otherwise don't show the error.


===========================================================
8. SAVE BUTTON
===========================================================

Save is enabled only when:

bio.length >= 10
AND
bio.length <= 150


Because maxLength already prevents
more than 150 characters, the important
condition is:

bio.length >= 10


We can write:

const canSave =
    bio.length >= 10 &&
    bio.length <= 150;


Then:

disabled={!canSave}


===========================================================
9. CONDITIONAL ERROR MESSAGE
===========================================================

Use:

{bio.length < 10 && (
    <p>
        Bio must be at least 10 characters
    </p>
)}


If length is 5:

error appears.


If length is 10:

error disappears.


===========================================================
10. CHARACTER COUNTER
===========================================================

The counter displays:

150 - bio.length


Example:

bio length = 13

13 characters used

137 characters remaining


===========================================================
11. COUNTER COLORS
===========================================================

The question says this logic is already given,
but we can implement it here for a complete program.

Remaining > 20:

gray


Remaining 1–20:

amber


Remaining 0:

red


Example:

const counterColor =
    remaining === 0
        ? "red"
        : remaining <= 20
        ? "amber"
        : "gray";


===========================================================
12. SAVE CONFIRMATION
===========================================================

We need another state:

const [saved, setSaved] =
    useState(false);


When Save is clicked:

setSaved(true);


Then show:

"Saved!"


===========================================================
13. RESET SAVED MESSAGE
===========================================================

If the user starts editing again,
the previous "Saved!" message should disappear.

Therefore:

onChange={() => {
    setBio(...);
    setSaved(false);
}}


===========================================================
14. DERIVED VALUES
===========================================================

These don't need useState:

bio.length
remaining
canSave
counterColor


They are calculated from bio.

This is called:

DERIVED DATA.


===========================================================
15. IMPORTANT DATA FLOW
===========================================================

User types
     ↓
onChange
     ↓
bio state changes
     ↓
React re-renders
     ↓
bio.length changes
     ↓
remaining changes
     ↓
validation changes
     ↓
Save button enabled/disabled


===========================================================
16. REQUIREMENTS
===========================================================

1. Maximum 150 characters.
2. Block characters beyond 150.
3. Minimum 10 characters.
4. Show error below counter if < 10.
5. Show remaining character count.
6. Counter changes color based on remaining.
7. Save enabled only from 10–150.
8. Save displays "Saved!".


===========================================================
PROGRAM STARTS HERE
===========================================================
*/

import React, { useState } from "react";

function BioEditor() {

  // -------------------------------------------------------
  // BIO STATE
  // -------------------------------------------------------

  const [bio, setBio] = useState("");


  // -------------------------------------------------------
  // SAVED STATE
  // -------------------------------------------------------

  const [saved, setSaved] = useState(false);


  // -------------------------------------------------------
  // CONSTANTS
  // -------------------------------------------------------

  const MIN_LENGTH = 10;
  const MAX_LENGTH = 150;


  // -------------------------------------------------------
  // CHARACTERS REMAINING
  // -------------------------------------------------------

  const remaining =
    MAX_LENGTH - bio.length;


  // -------------------------------------------------------
  // CAN SAVE?
  // -------------------------------------------------------

  const canSave =
    bio.length >= MIN_LENGTH &&
    bio.length <= MAX_LENGTH;


  // -------------------------------------------------------
  // COUNTER COLOR
  // -------------------------------------------------------

  let counterColor = "#777";

  if (remaining <= 20 && remaining > 0) {
    counterColor = "#c47a00";
  }

  if (remaining === 0) {
    counterColor = "#d32f2f";
  }


  // -------------------------------------------------------
  // HANDLE BIO CHANGE
  // -------------------------------------------------------

  function handleChange(e) {

    const value = e.target.value;


    /*
      maxLength normally prevents this,
      but this check also protects our state.
    */

    if (value.length > MAX_LENGTH) {
      return;
    }


    setBio(value);

    // Editing again removes the Saved message
    setSaved(false);
  }


  // -------------------------------------------------------
  // HANDLE SAVE
  // -------------------------------------------------------

  function handleSave() {

    if (!canSave) {
      return;
    }

    setSaved(true);
  }


  // -------------------------------------------------------
  // JSX
  // -------------------------------------------------------

  return (
    <div
      style={{
        maxWidth: 400,
        margin: "40px auto",
        padding: 24,
        border: "1px solid #ddd",
        borderRadius: 12,
        fontFamily: "Arial",
      }}
    >

      {/* =================================================
          LABEL
      ================================================= */}

      <label
        style={{
          display: "block",
          marginBottom: 8,
          fontSize: 14,
          fontWeight: "500",
        }}
      >
        Bio
      </label>


      {/* =================================================
          TEXTAREA
      ================================================= */}

      <textarea
        value={bio}

        onChange={handleChange}

        maxLength={MAX_LENGTH}

        rows={5}

        placeholder="Tell us about yourself..."

        style={{
          width: "100%",
          boxSizing: "border-box",
          padding: 12,
          fontSize: 16,
          borderRadius: 6,

          border:
            bio.length < MIN_LENGTH
              ? "1px solid #ff7777"
              : remaining <= 20
              ? "1px solid #f0a000"
              : "1px solid #66b83f",

          outline: "none",
          resize: "vertical",
        }}
      />


      {/* =================================================
          CHARACTER COUNTER
      ================================================= */}

      <div
        style={{
          textAlign: "right",
          marginTop: 8,
          fontSize: 13,
          color: counterColor,
          fontWeight: "500",
        }}
      >
        {remaining} characters remaining
      </div>


      {/* =================================================
          VALIDATION ERROR
      ================================================= */}

      {bio.length < MIN_LENGTH && (
        <p
          style={{
            color: "#e53935",
            fontSize: 13,
            marginTop: 10,
            marginBottom: 10,
          }}
        >
          Bio must be at least 10 characters
        </p>
      )}


      {/* =================================================
          SAVE BUTTON
      ================================================= */}

      <button
        onClick={handleSave}
        disabled={!canSave}

        style={{
          width: "100%",
          padding: 12,
          marginTop: 4,
          borderRadius: 6,

          border:
            canSave
              ? "1px solid #79b84a"
              : "1px solid #ddd",

          background:
            canSave
              ? "#edf7e5"
              : "#f5f5f5",

          color:
            canSave
              ? "#426d27"
              : "#999",

          cursor:
            canSave
              ? "pointer"
              : "not-allowed",

          fontSize: 14,
        }}
      >
        Save
      </button>


      {/* =================================================
          SAVED MESSAGE
      ================================================= */}

      {saved && (
        <p
          style={{
            color: "#4d8c2c",
            fontSize: 13,
            marginTop: 10,
          }}
        >
          Saved!
        </p>
      )}

    </div>
  );
}

export default BioEditor;