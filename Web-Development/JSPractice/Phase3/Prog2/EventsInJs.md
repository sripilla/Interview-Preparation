# Lesson 3: Events in JavaScript

## 1. What is an Event?
An **event** is an action or occurrence that happens in the browser.

Examples:
- **Click**: user clicks a button or element
- **Keyboard input**: user presses a key
- **Input**: user types into a text field
- **Form submission**: user submits a login/registration form
- Others: page finishes loading, mouse moves over an element, user selects an option

## 2. Why Do We Need Events?
```html
<button>Click Me</button>
```
A button on its own **does nothing**. To make something happen (e.g. change a heading), JavaScript must **respond** to the click.

```
User action  →  Browser event  →  JavaScript responds
(clicks)        (registers click)   (heading changes)
```

> How JavaScript detects and responds to events comes in the next lesson: **event listeners**.

## 3. Common Browser Events
| Event | When it occurs |
|---|---|
| `click` | An element is clicked |
| `dblclick` | An element is double-clicked |
| `mouseover` | Pointer moves over an element |
| `mouseout` | Pointer leaves an element |
| `keydown` | A key is pressed down |
| `keyup` | A pressed key is released |
| `input` | An input's value changes while typing |
| `change` | A value is committed/changed (depends on the control) |
| `submit` | A form is submitted |
| `load` | A page or resource finishes loading |

**Remember the big four:** `click`, `input`, `keydown`, `submit`

## 4. What JavaScript Can Do When an Event Happens
- Change text
- Update a counter
- Show a message
- Perform any other action

## Quick Check
**Q: A user clicks a button. What is the click?**
A. A CSS property  B. A browser event  C. An HTML attribute  D. A JavaScript data type

**Answer: B — a browser event.**

## Summary
An **event** is something that happens in the browser (usually a user action). JavaScript can **respond** to events to make pages interactive.