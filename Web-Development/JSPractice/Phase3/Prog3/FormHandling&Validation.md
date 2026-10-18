# Form Handling and Validation

## Part 1: Handling Form Submission

### The Idea
When a user submits a form, the browser fires a **`submit` event**.
We listen to the **form's submission**, not just the button click.

### HTML
```html
<form id="studentForm">
  <input id="studentName" type="text" placeholder="Enter your name">
  <button type="submit">Submit</button>
</form>

<p id="result"></p>
```
- `<form>` groups the input and button.
- `type="submit"` makes the button submit the form.
- `#result` is where the message appears.

### JavaScript
```js
const form = document.getElementById("studentForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const name = document.getElementById("studentName").value;
  document.getElementById("result").textContent = "Welcome, " + name + "!";
});
```

| Code | Meaning |
|---|---|
| `addEventListener("submit", ...)` | Runs a function when the form is submitted |
| `event.preventDefault()` | Stops the browser's default submit (page reload) |
| `.value` | Reads what the user typed |
| `.textContent` | Shows the result on the page |

> **Why `preventDefault()`?** Submitting normally **reloads the page**, which would wipe out our message.

## Part 2: Form Validation

### The Idea
**Validation** = checking the input is acceptable **before** processing the form (e.g. name isn't empty).

### `.trim()`
Removes spaces from the **start and end** of a string.

| Input | After `.trim()` | Result |
|---|---|---|
| `"Likitha"` | `"Likitha"` | ✅ Valid |
| `""` | `""` | ❌ Invalid |
| `"   "` | `""` | ❌ Invalid |

Without `.trim()`, a name made of only spaces would be wrongly accepted.

### Validation Code
```js
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const name = studentName.value.trim();

  if (name === "") {
    result.textContent = "Please enter your name.";
  } else {
    result.textContent = "Welcome, " + name + "!";
  }
});
```

### Flow
```
Submit → read value.trim() → empty?
                             ├─ Yes → show error
                             └─ No  → show welcome
```

## Quick Check
1. **Why use `event.preventDefault()`?** To stop the browser's default form submission (page reload).
2. **User types 3 spaces. What does `studentName.value.trim() === ""` return?** `true`

## Key Points
- `.value`: reads input text
- `addEventListener("submit", ...)`: runs code on form submit
- `event.preventDefault()`: stops page reload
- `.trim()` + `if...else`: basic validation

**Next topic:** JSON in JavaScript