# Lesson 1: DOM (Document Object Model)

## What is the DOM?
- **DOM = Document Object Model**
- When a browser loads HTML, it builds a **tree of objects** in memory that represents the page.
- JavaScript uses the DOM to **read and change** the page (text, colours, new elements) **without reloading**.

## HTML vs DOM vs JavaScript
| Part | Role |
|---|---|
| **HTML** | Defines the page's structure |
| **DOM** | Represents that structure as objects |
| **JavaScript** | Changes those objects, which changes the page |

## The DOM Tree
```
document
 └── html
      └── body
           ├── h1 → "My Website"
           └── p  → "Learning JavaScript"
```
- `body` is the **parent** of `h1` and `p`.
- `h1` and `p` are **siblings** (same parent).

## Selecting and Changing an Element
```html
<h1 id="title">Hello World</h1>
```
```js
const heading = document.getElementById("title"); // find the element
heading.textContent = "Welcome to JavaScript!";   // change its text
```
- `document` → the whole page
- `getElementById("title")` → finds the element with `id="title"`
- `textContent` → the element's text

> **`const` note:** `const` stops you reassigning the variable (`heading = ...` ❌),
> but you **can still change the element** it points to (`heading.textContent = ...` ✅).

## Three Methods to Know First
| Method | What it does |
|---|---|
| `document.getElementById("id")` | Finds one element by its ID (no `#`) |
| `document.querySelector("selector")` | Finds the **first** element matching a CSS selector |
| `document.querySelectorAll("selector")` | Finds **all** matching elements |

**Selector reminders**
- `"h1"` → by tag name
- `".message"` → by class (dot `.`)
- `"#title"` → by ID (hash `#`)

## Summary
The browser turns HTML into a **DOM tree**, and JavaScript **selects** elements from that tree to **change** the page.