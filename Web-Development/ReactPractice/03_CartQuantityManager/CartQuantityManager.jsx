/*
===========================================================
REACT LESSON: CART QUANTITY MANAGER
===========================================================

This program practices several important React concepts:

1. useState
2. Controlled inputs
3. onChange event
4. onClick event
5. Input validation
6. Number.isInteger()
7. Clamping values between a minimum and maximum
8. Updating multiple pieces of state
9. Derived values
10. Conditional logic
11. Ternary operator
12. Template literals
13. toFixed()
14. Disabled buttons
15. Conditional rendering
16. Inline CSS in JSX
17. JSX expressions using {}
18. Destructuring
19. Function-based event handling


-----------------------------------------------------------
1. useState
-----------------------------------------------------------

useState stores values that can change while the application
is running.

Syntax:

const [value, setValue] = useState(initialValue);

Example:

const [quantity, setQuantity] = useState(1);

quantity      -> current value
setQuantity() -> function used to change the value


-----------------------------------------------------------
2. CONTROLLED INPUT
-----------------------------------------------------------

A controlled input is an input whose value is controlled
by React state.

Example:

<input
    value={inputValue}
    onChange={(e) => setInputValue(e.target.value)}
/>

React state controls what appears inside the input.


-----------------------------------------------------------
3. onChange
-----------------------------------------------------------

onChange runs whenever the user changes the input.

Example:

onChange={(e) => {
    console.log(e.target.value);
}}

e.target.value gives the value currently typed by the user.


-----------------------------------------------------------
4. onClick
-----------------------------------------------------------

onClick runs when the user clicks a button.

Example:

<button onClick={increment}>
    +
</button>


-----------------------------------------------------------
5. INPUT VALIDATION
-----------------------------------------------------------

The user is allowed to enter only:

    1, 2, 3, ... 10

Invalid values include:

    0
    11
    -1
    1.5
    abc

Invalid values must NOT be stored in quantity state.


-----------------------------------------------------------
6. Number()
-----------------------------------------------------------

Input values normally come from HTML as strings.

For example:

"5"

is a string.

Number("5")

converts it into:

5

which is a number.


-----------------------------------------------------------
7. Number.isInteger()
-----------------------------------------------------------

We need a WHOLE number.

Number.isInteger(5)
    -> true

Number.isInteger(5.5)
    -> false


-----------------------------------------------------------
8. CLAMPING
-----------------------------------------------------------

Clamping means keeping a value inside a fixed range.

Our range is:

minimum = 1
maximum = 10

Math.min() prevents a value from going above 10.

Math.max() prevents a value from going below 1.

Example:

Math.max(1, Math.min(10, newQty))


-----------------------------------------------------------
9. DERIVED VALUES
-----------------------------------------------------------

We don't need separate state for subtotal, discount,
and total.

They can be calculated from quantity and unitPrice.

subtotal = quantity * unitPrice

discountAmount = subtotal * discountRate

total = subtotal - discountAmount


-----------------------------------------------------------
10. DISCOUNT TIERS
-----------------------------------------------------------

Quantity 1-4:
    0% discount

Quantity 5-9:
    10% discount

Quantity 10:
    20% discount

We can use if / else if / else to determine the rate.


-----------------------------------------------------------
11. CONDITIONAL LOGIC
-----------------------------------------------------------

Example:

if (quantity >= 5) {
    ...
}

This allows the UI to behave differently depending
on the quantity.


-----------------------------------------------------------
12. TERNARY OPERATOR
-----------------------------------------------------------

The ternary operator is a short form of if/else.

Syntax:

condition ? valueIfTrue : valueIfFalse

Example:

quantity === 10 ? "Max discount applied" : "Keep going"


-----------------------------------------------------------
13. TEMPLATE LITERALS
-----------------------------------------------------------

Template literals use backticks.

Example:

`Add ${10 - quantity} more for 20% off`

If quantity is 7:

Add 3 more for 20% off


-----------------------------------------------------------
14. toFixed()
-----------------------------------------------------------

Money should normally be displayed with two decimal places.

Example:

total.toFixed(2)

If total is:

126

it displays:

126.00


-----------------------------------------------------------
15. DISABLED BUTTONS
-----------------------------------------------------------

The minus button must be disabled when quantity = 1.

The plus button must be disabled when quantity = 10.

Example:

disabled={quantity === 1}

and:

disabled={quantity === 10}


-----------------------------------------------------------
16. CONDITIONAL RENDERING
-----------------------------------------------------------

React can display different content depending on a condition.

Example:

{quantity < 5 && (
    <p>...</p>
)}

The <p> appears only when quantity is less than 5.


-----------------------------------------------------------
17. JSX EXPRESSIONS
-----------------------------------------------------------

JavaScript expressions are written inside:

{ }

Example:

<p>{subtotal.toFixed(2)}</p>


-----------------------------------------------------------
18. EVENT HANDLER FUNCTIONS
-----------------------------------------------------------

Instead of putting all logic directly inside JSX,
we create functions.

Example:

function increment() {
    updateQuantity(quantity + 1);
}

Then:

<button onClick={increment}>+</button>


-----------------------------------------------------------
19. IMPORTANT DATA FLOW
-----------------------------------------------------------

                 USER
                  |
          + / - button
                  |
             updateQuantity()
                  |
             quantity state
                  |
        +---------+---------+
        |         |         |
    subtotal   discount   shipping
        |         |         |
        +---------+---------+
                  |
                UI


===========================================================
REQUIREMENTS OF THIS PROGRAM
===========================================================

1. Quantity is between 1 and 10.
2. + increases quantity.
3. - decreases quantity.
4. + is disabled at 10.
5. - is disabled at 1.
6. User can type quantity directly.
7. Invalid typed values are ignored.
8. Only whole numbers are accepted.
9. Discount is 0%, 10%, or 20%.
10. Subtotal = quantity × unit price.
11. Discount amount = subtotal × discount rate.
12. Total = subtotal - discount amount.
13. Next discount tier is displayed.
14. Free shipping starts at $100 after discount.
15. Amount remaining for free shipping is displayed.
16. Money is displayed with two decimal places.

===========================================================
PROGRAM STARTS HERE
===========================================================
*/

import React, { useState } from "react";

function CartQuantityManager() {
  // -------------------------------------------------------
  // STATE
  // -------------------------------------------------------

  // Actual valid quantity used by the application
  const [quantity, setQuantity] = useState(1);

  // Value displayed inside the input
  const [inputValue, setInputValue] = useState("1");

  // Fixed price of one product
  const unitPrice = 20;


  // -------------------------------------------------------
  // UPDATE QUANTITY
  // -------------------------------------------------------

  function updateQuantity(newQty) {
    // Keep the quantity between 1 and 10
    const clampedQty = Math.max(1, Math.min(10, newQty));

    // Update actual quantity
    setQuantity(clampedQty);

    // Update what appears in the input
    setInputValue(String(clampedQty));
  }


  // -------------------------------------------------------
  // PLUS BUTTON
  // -------------------------------------------------------

  function increment() {
    updateQuantity(quantity + 1);
  }


  // -------------------------------------------------------
  // MINUS BUTTON
  // -------------------------------------------------------

  function decrement() {
    updateQuantity(quantity - 1);
  }


  // -------------------------------------------------------
  // DIRECT INPUT VALIDATION
  // -------------------------------------------------------

  function handleInputChange(e) {
    // Get the value typed by the user
    const value = e.target.value;

    // Convert string into number
    const numberValue = Number(value);

    // Check whether the value is:
    // 1. a number
    // 2. a whole number
    // 3. between 1 and 10

    if (
      Number.isInteger(numberValue) &&
      numberValue >= 1 &&
      numberValue <= 10
    ) {
      // Valid value

      setQuantity(numberValue);
      setInputValue(value);
    }

    // If invalid:
    // Do nothing.
    //
    // Therefore the previous valid quantity remains
    // in React state.
  }


  // -------------------------------------------------------
  // DISCOUNT RATE
  // -------------------------------------------------------

  let discountRate = 0;

  if (quantity >= 5 && quantity <= 9) {
    discountRate = 0.10;
  } else if (quantity === 10) {
    discountRate = 0.20;
  }


  // -------------------------------------------------------
  // CALCULATE SUBTOTAL
  // -------------------------------------------------------

  const subtotal = quantity * unitPrice;


  // -------------------------------------------------------
  // CALCULATE DISCOUNT
  // -------------------------------------------------------

  const discountAmount = subtotal * discountRate;


  // -------------------------------------------------------
  // CALCULATE FINAL TOTAL
  // -------------------------------------------------------

  const total = subtotal - discountAmount;


  // -------------------------------------------------------
  // DISCOUNT LABEL
  // -------------------------------------------------------

  const discountLabel =
    discountRate === 0
      ? "0% off"
      : `${discountRate * 100}% off`;


  // -------------------------------------------------------
  // NEXT DISCOUNT TIER
  // -------------------------------------------------------

  let nextTierMessage = "";

  if (quantity < 5) {
    // Need to reach quantity 5
    const remaining = 5 - quantity;

    nextTierMessage =
      `Add ${remaining} more for 10% off`;
  } else if (quantity >= 5 && quantity < 10) {
    // Need to reach quantity 10
    const remaining = 10 - quantity;

    nextTierMessage =
      `Add ${remaining} more for 20% off`;
  } else {
    // Quantity is already 10
    nextTierMessage = "Max discount applied";
  }


  // -------------------------------------------------------
  // FREE SHIPPING
  // -------------------------------------------------------

  const shippingThreshold = 100;

  if (total >= shippingThreshold) {
    // Free shipping is unlocked
    // No extra calculation is necessary.
  }


  // Amount still needed for free shipping
  const amountForShipping =
    shippingThreshold - total;


  // -------------------------------------------------------
  // RETURN JSX
  // -------------------------------------------------------

  return (
    <div
      style={{
        maxWidth: 360,
        margin: "20px auto",
        padding: 24,
        border: "1px solid #ddd",
        borderRadius: 12,
        fontFamily: "Arial",
      }}
    >

      {/* Product name */}
      <h2
        style={{
          marginBottom: 4,
        }}
      >
        Wireless Mouse
      </h2>


      {/* Unit price */}
      <p
        style={{
          marginTop: 0,
          color: "#555",
        }}
      >
        ${unitPrice.toFixed(2)} / unit
      </p>


      {/* Quantity controls */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          marginTop: 20,
        }}
      >

        {/* Minus button */}
        <button
          onClick={decrement}
          disabled={quantity === 1}
          style={{
            width: 44,
            height: 40,
            fontSize: 20,
            cursor:
              quantity === 1
                ? "not-allowed"
                : "pointer",
          }}
        >
          −
        </button>


        {/* Direct quantity input */}
        <input
          type="number"
          value={inputValue}
          onChange={handleInputChange}
          min="1"
          max="10"
          style={{
            width: 60,
            height: 40,
            textAlign: "center",
            fontSize: 16,
            boxSizing: "border-box",
          }}
        />


        {/* Plus button */}
        <button
          onClick={increment}
          disabled={quantity === 10}
          style={{
            width: 44,
            height: 40,
            fontSize: 20,
            cursor:
              quantity === 10
                ? "not-allowed"
                : "pointer",
          }}
        >
          +
        </button>


        {/* Discount badge */}
        <span
          style={{
            marginLeft: "auto",
            padding: "6px 10px",
            borderRadius: 999,
            background: "#d9f5d9",
            color: "#267326",
            fontSize: 13,
            fontWeight: "bold",
          }}
        >
          {discountLabel}
        </span>
      </div>


      {/* Next tier message */}
      <p
        style={{
          color: "#666",
          fontSize: 14,
          marginTop: 14,
        }}
      >
        {nextTierMessage}
      </p>


      {/* Horizontal line */}
      <hr />


      {/* Subtotal */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 8,
        }}
      >
        <span>Subtotal</span>

        <span>
          ${subtotal.toFixed(2)}
        </span>
      </div>


      {/* Discount */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 8,
        }}
      >
        <span>Discount</span>

        <span
          style={{
            color: "green",
          }}
        >
          -${discountAmount.toFixed(2)}
        </span>
      </div>


      {/* Final total */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontWeight: "bold",
          fontSize: 18,
        }}
      >
        <span>Total</span>

        <span>
          ${total.toFixed(2)}
        </span>
      </div>


      {/* Free shipping message */}
      {total >= shippingThreshold ? (
        <div
          style={{
            marginTop: 16,
            padding: 10,
            textAlign: "center",
            background: "#d8f3d8",
            color: "#267326",
            borderRadius: 8,
          }}
        >
          Free shipping unlocked
        </div>
      ) : (
        <div
          style={{
            marginTop: 16,
            padding: 10,
            textAlign: "center",
            background: "#fff3cd",
            color: "#856404",
            borderRadius: 8,
          }}
        >
          Add ${amountForShipping.toFixed(2)} more
          for free shipping
        </div>
      )}

    </div>
  );
}

export default CartQuantityManager;