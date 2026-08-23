/*
===========================================================
REACT LESSON: FAQ ACCORDION
===========================================================

This program practices:

1. useState
2. Arrays of objects
3. map()
4. Conditional rendering
5. Ternary operator
6. Event handling
7. Passing arguments to event handlers
8. State using an ID
9. Single-item-open logic
10. Toggle logic
11. Dynamic inline styles
12. CSS transform
13. Conditional DOM rendering
14. Empty-state rendering


===========================================================
1. WHAT IS AN ACCORDION?
===========================================================

An accordion is a UI component where clicking a question
opens or closes its answer.

Example:

How do I reset my password?
    ↓ click

How do I reset my password?
    Go to Settings, then Security...


===========================================================
2. THE IMPORTANT REQUIREMENT
===========================================================

Only ONE FAQ can be open at a time.

For example:

FAQ 1 → OPEN
FAQ 2 → CLOSED
FAQ 3 → CLOSED


If we click FAQ 2:

FAQ 1 → CLOSED
FAQ 2 → OPEN
FAQ 3 → CLOSED


So we don't need a separate state variable
for every FAQ.


===========================================================
3. THE BEST STATE DESIGN
===========================================================

We store the ID of the currently open FAQ.

Example:

const [openId, setOpenId] = useState(null);


Initially:

openId = null

Meaning:

No FAQ is open.


If FAQ 1 is opened:

openId = 1


If FAQ 2 is opened:

openId = 2


Therefore FAQ 1 automatically becomes closed.


===========================================================
4. WHY NOT USE MULTIPLE BOOLEAN STATES?
===========================================================

We could theoretically do:

faq1Open
faq2Open
faq3Open

But this makes it possible for:

faq1Open = true
faq2Open = true

which violates the requirement.

Using ONE openId guarantees:

ONLY ONE FAQ CAN BE OPEN.


===========================================================
5. TOGGLE LOGIC
===========================================================

When a question is clicked:

If it is already open:

close it.

If it is closed:

open it.


Logic:

if (openId === id) {
    setOpenId(null);
} else {
    setOpenId(id);
}


Example:

openId = 2

Click FAQ 2:

2 === 2

Therefore:

setOpenId(null)


FAQ 2 closes.


Example:

openId = 2

Click FAQ 3:

2 !== 3

Therefore:

setOpenId(3)


FAQ 3 opens and FAQ 2 closes.


===========================================================
6. useState(null)
===========================================================

We use:

const [openId, setOpenId] =
    useState(null);


Why null?

Because initially no FAQ is open.


===========================================================
7. RENDERING THE FAQ LIST
===========================================================

FAQs are stored in an array:

const faqs = [
    {
        id: 1,
        question: "...",
        answer: "..."
    },
    ...
];


We use map():

faqs.map((faq) => (
    ...
))


Each FAQ must have:

key={faq.id}


===========================================================
8. CHECKING WHETHER AN FAQ IS OPEN
===========================================================

Inside map():

const isOpen = openId === faq.id;


Example:

openId = 2

For FAQ 1:

2 === 1 → false

For FAQ 2:

2 === 2 → true

For FAQ 3:

2 === 3 → false


===========================================================
9. CONDITIONAL ANSWER RENDERING
===========================================================

Requirement:

"The answer paragraph is only rendered in the DOM
when its FAQ is open."


Therefore:

{isOpen && (
    <p>{faq.answer}</p>
)}


When:

isOpen = true

the paragraph exists in the DOM.


When:

isOpen = false

the paragraph does NOT exist in the DOM.


This is different from simply hiding it with CSS.


===========================================================
10. CONDITIONAL CHEVRON ROTATION
===========================================================

We use ONE chevron icon.

Example:

⌄


When the FAQ opens, rotate it 180°.

CSS:

transform:
    isOpen
        ? "rotate(180deg)"
        : "rotate(0deg)"


We are NOT using two different icons.


===========================================================
11. INLINE STYLE
===========================================================

React allows styles to depend on state.

Example:

style={{
    transform: isOpen
        ? "rotate(180deg)"
        : "rotate(0deg)"
}}


===========================================================
12. CONDITIONAL BACKGROUND
===========================================================

The open FAQ can have a slightly different background.

Example:

background:
    isOpen
        ? "#f8fbff"
        : "white"


This is optional visually but demonstrates
dynamic styling.


===========================================================
13. EMPTY FAQ LIST
===========================================================

If:

faqs.length === 0

we display:

"No FAQs available"


Instead of rendering the accordion.


===========================================================
14. CONDITIONAL RENDERING
===========================================================

We can use:

{faqs.length === 0 ? (
    <p>No FAQs available</p>
) : (
    ...
)}


This is the ternary operator.


===========================================================
15. EVENT HANDLER
===========================================================

Clicking a question calls:

toggleFAQ(faq.id)


Correct:

onClick={() => toggleFAQ(faq.id)}


The arrow function allows us to pass the ID.


===========================================================
16. IMPORTANT DATA FLOW
===========================================================

User clicks FAQ
       ↓
toggleFAQ(id)
       ↓
compare openId with id
       ↓
same?
   /       \
 yes       no
 ↓          ↓
close      open
 ↓          ↓
null       id
       ↓
React re-renders
       ↓
Only matching FAQ shows answer


===========================================================
17. REQUIREMENTS
===========================================================

1. Clicking question toggles answer.
2. Only one FAQ can be open.
3. Clicking open FAQ closes it.
4. Chevron rotates 180° when open.
5. Use conditional style/class.
6. Answer is only rendered when open.
7. Empty list shows "No FAQs available".


===========================================================
PROGRAM STARTS HERE
===========================================================
*/

import React, { useState } from "react";

function FAQAccordion() {

  // -------------------------------------------------------
  // FAQ DATA
  // -------------------------------------------------------

  const faqs = [
    {
      id: 1,
      question: "How do I reset my password?",
      answer:
        "Go to Settings, then Security, and click Reset password. You'll receive a link by email.",
    },

    {
      id: 2,
      question: "Can I change my billing plan?",
      answer:
        "Yes. Go to Settings, select Billing, and choose the plan you want to switch to.",
    },

    {
      id: 3,
      question: "How do I contact support?",
      answer:
        "You can contact our support team through the Help Center or by sending us an email.",
    },
  ];


  // -------------------------------------------------------
  // OPEN FAQ STATE
  // -------------------------------------------------------

  /*
    null = no FAQ is open

    1 = FAQ with id 1 is open

    2 = FAQ with id 2 is open

    3 = FAQ with id 3 is open
  */

  const [openId, setOpenId] = useState(null);


  // -------------------------------------------------------
  // TOGGLE FAQ
  // -------------------------------------------------------

  function toggleFAQ(id) {

    /*
      If the clicked FAQ is already open,
      close it.

      Otherwise open the clicked FAQ.
    */

    if (openId === id) {

      setOpenId(null);

    } else {

      setOpenId(id);
    }
  }


  // -------------------------------------------------------
  // JSX
  // -------------------------------------------------------

  return (
    <div
      style={{
        maxWidth: 500,
        margin: "30px auto",
        padding: 26,
        border: "1px solid #ddd",
        borderRadius: 12,
        fontFamily: "Arial",
      }}
    >

      {/* =================================================
          HEADING
      ================================================= */}

      <h2
        style={{
          marginTop: 0,
          marginBottom: 20,
          fontSize: 20,
        }}
      >
        Frequently asked questions
      </h2>


      {/* =================================================
          EMPTY STATE
      ================================================= */}

      {faqs.length === 0 ? (

        <p
          style={{
            color: "#777",
            textAlign: "center",
            padding: 20,
          }}
        >
          No FAQs available
        </p>

      ) : (

        /* =================================================
           FAQ LIST
        ================================================= */

        <div>

          {faqs.map((faq) => {

            // Check whether this FAQ is open
            const isOpen = openId === faq.id;


            return (
              <div
                key={faq.id}
                style={{
                  borderBottom:
                    "1px solid #ddd",
                }}
              >

                {/* =================================================
                    QUESTION BUTTON
                ================================================= */}

                <button
                  onClick={() =>
                    toggleFAQ(faq.id)
                  }
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent:
                      "space-between",
                    alignItems: "center",
                    padding: "16px 0",
                    border: "none",
                    background: isOpen
                      ? "#f8fbff"
                      : "white",
                    cursor: "pointer",
                    textAlign: "left",
                    fontSize: 15,
                    fontWeight: "bold",
                  }}
                >

                  {/* QUESTION */}

                  <span>
                    {faq.question}
                  </span>


                  {/* CHEVRON */}

                  <span
                    style={{
                      display: "inline-block",

                      /*
                        Rotate the SAME icon
                        when the FAQ is open.
                      */

                      transform: isOpen
                        ? "rotate(180deg)"
                        : "rotate(0deg)",

                      transition:
                        "transform 0.2s",

                      marginLeft: 10,
                    }}
                  >
                    ▼
                  </span>

                </button>


                {/* =================================================
                    ANSWER
                ================================================= */}

                {isOpen && (
                  <p
                    style={{
                      marginTop: 0,
                      marginBottom: 16,
                      lineHeight: 1.5,
                      color: "#555",
                      fontSize: 14,
                    }}
                  >
                    {faq.answer}
                  </p>
                )}

              </div>
            );
          })}

        </div>

      )}

    </div>
  );
}

export default FAQAccordion;