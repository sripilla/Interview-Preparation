# Lesson 2: Selecting and Modifying DOM Elements

## 1. Selecting Elements
```html
<h1 id="title">Hello World</h1>
<p class="message">Welcome to my website</p>
<p class="message">Learn JavaScript</p>
```

| Method | Returns | Example |
|---|---|---|
| `getElementById("id")` | One element by ID (no `#`) | `document.getElementById("title")` |
| `querySelector("sel")` | **First** match of a CSS selector | `document.querySelector(".message")` |
| `querySelectorAll("sel")` | **All** matches (a NodeList) | `document.querySelectorAll(".message")` |

- IDs should be **unique** on a page.
- Selectors: `"#title"` = ID, `".message"` = class, `"h1"` = tag.
- Loop through a NodeList with `forEach`:
```js
document.querySelectorAll(".message").forEach((p) => console.log(p.textContent));
```

## 2. Changing Text
```js
const heading = document.getElementById("title");
heading.textContent = "Welcome!";
```
`textContent` reads or changes the text inside an element.

## 3. textContent vs innerHTML (interview favourite)
| | Code | Result |
|---|---|---|
| `textContent` | `el.textContent = "<b>Hello</b>"` | Shows literal text `<b>Hello</b>` |
| `innerHTML` | `el.innerHTML = "<b>Hello</b>"` | Shows **Hello** in bold (HTML is parsed) |

> **Security:** Use `textContent` for normal text. Putting untrusted content into `innerHTML` can cause **XSS** attacks.

## 4. Changing Styles
```js
heading.style.color = "blue";
heading.style.backgroundColor = "yellow";
heading.style.fontSize = "40px";
```
CSS uses hyphens, JS uses **camelCase**: `background-color` → `backgroundColor`, `font-size` → `fontSize`, `border-radius` → `borderRadius`.

## 5. Adding / Removing CSS Classes
Cleaner than setting many styles one by one.
```js
heading.classList.add("highlight");      // add class
heading.classList.remove("highlight");   // remove class
heading.classList.toggle("highlight");   // add if absent, remove if present
heading.classList.contains("highlight"); // true / false
```

## 6. Creating New Elements
```js
const p = document.createElement("p");      // 1. create
p.textContent = "I was created by JavaScript!"; // 2. add text
document.body.appendChild(p);               // 3. add to page
```

## Quick Revision
1. `getElementById()` → element by ID
2. `querySelector()` → first match
3. `querySelectorAll()` → all matches
4. `textContent` = plain text; `innerHTML` = parses HTML
5. `style`, `classList`, `createElement()`, `appendChild()` → modify the page