# Lesson 4: Event Listeners in JavaScript

## 1. What is an Event Listener?
An **event listener** waits for a specific event on an element and **runs a function** when that event happens.

| Piece | Role |
|---|---|
| **HTML** | Creates the button |
| **Event** | The user's click |
| **Event listener** | Detects the click |
| **Function** | Runs and changes the heading |

## 2. Syntax
```js
element.addEventListener("event", function);
```

| Part | Meaning |
|---|---|
| `element` | The HTML element to monitor |
| `addEventListener()` | Registers a listener for an event |
| `"event"` | Event name as a **string**, e.g. `"click"` |
| `function` | Code to run when the event occurs |

**Example**
```js
const button = document.getElementById("myButton");

button.addEventListener("click", function () {
  console.log("Button clicked!");
});
```
Read it as: *"When `myButton` is clicked, run the function and print `Button clicked!`."*

## 3. Execution Flow
```
1. Select the element    →  getElementById("myButton")
2. Register the listener →  addEventListener("click", ...)
3. Wait                  →  nothing runs yet
4. Event happens         →  function runs
```

> **Key point:** Registering a listener does **not** run the function. The function runs **only when the event occurs**, and runs **again on every click**.

## 4. Using an Arrow Function
Both versions do the same thing:
```js
button.addEventListener("click", function () {
  heading.textContent = "Button clicked!";
});

button.addEventListener("click", () => {
  heading.textContent = "Button clicked!";
});
```
The function passed to `addEventListener()` is called a **callback function**: it runs when the event occurs.

## 5. Common Mistakes
**1. Calling the function immediately**
```js
button.addEventListener("click", changeHeading());  // ❌ runs right away
button.addEventListener("click", changeHeading);    // ✅ runs on click
```
Pass the function **name**, without `()`.

**2. Wrong event name**: event names are lowercase. `"click"` ✅, `"Click"` ❌

**3. Selecting an element that doesn't exist**: the ID must match exactly. A wrong ID returns `null`, and `null.addEventListener()` causes an error.

## Summary
`addEventListener()` connects an **element**, an **event**, and a **function**: when the event happens on that element, the function runs.