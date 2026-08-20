# HTML — Quick Revision Sheet

Foundation before jumping into React (JSX builds directly on HTML syntax).

## 1. Basic Document Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title</title>
</head>
<body>
    <!-- visible content goes here -->
</body>
</html>
```
- `<!DOCTYPE html>` tells the browser this is HTML5
- `<head>` holds metadata (not visible on page) — title, links to CSS, meta tags
- `<body>` holds everything the user actually sees

## 2. Text & Structure Tags
```html
<h1>Main Heading</h1>       <!-- h1 through h6, h1 = biggest/most important -->
<h2>Subheading</h2>
<p>A paragraph of text.</p>
<span>Inline text (no line break)</span>
<div>Block-level container (starts new line)</div>
<br>                          <!-- line break -->
<hr>                          <!-- horizontal rule/divider -->
```
**Key difference:** `<div>` = block element (takes full width, stacks vertically).
`<span>` = inline element (only takes needed width, flows with text).
This distinction matters constantly in React/CSS layout.

## 3. Links & Images
```html
<a href="https://example.com">Click here</a>
<a href="https://example.com" target="_blank">Opens in new tab</a>
<a href="#section1">Jump to section on same page</a>

<img src="photo.jpg" alt="Description of image">
```
- `alt` is required for accessibility — describes the image if it fails to load
- `target="_blank"` opens link in a new tab

## 4. Lists
```html
<ul>                    <!-- unordered list (bullets) -->
    <li>Item one</li>
    <li>Item two</li>
</ul>

<ol>                    <!-- ordered list (numbers) -->
    <li>Step one</li>
    <li>Step two</li>
</ol>
```

## 5. Forms (critical — this is what "Form Validation" in React builds on)
```html
<form>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>

    <label for="password">Password:</label>
    <input type="password" id="password" name="password">

    <input type="checkbox" id="agree" name="agree">
    <label for="agree">I agree to terms</label>

    <select name="country">
        <option value="in">India</option>
        <option value="us">USA</option>
    </select>

    <textarea rows="4" cols="30">Default text</textarea>

    <button type="submit">Submit</button>
</form>
```
**Input types to know:** `text`, `email`, `password`, `number`, `checkbox`,
`radio`, `date`, `file`
**Common attributes:** `required`, `placeholder`, `disabled`, `readonly`,
`maxlength`, `value`

## 6. Tables
```html
<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Age</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Alice</td>
            <td>30</td>
        </tr>
    </tbody>
</table>
```
- `<tr>` = table row, `<th>` = header cell, `<td>` = data cell

## 7. Semantic HTML5 Tags (used constantly in real React apps)
```html
<header>Top of page — logo, nav</header>
<nav>Navigation links</nav>
<main>Primary content of the page</main>
<section>A thematic grouping of content</section>
<article>Self-contained content (blog post, card)</article>
<aside>Sidebar / tangential content</aside>
<footer>Bottom of page — copyright, links</footer>
```
**Why this matters for React:** these replace generic `<div>` soup with
meaningful structure — better accessibility, better SEO, and commonly
expected in "clean code" React components.

## 8. Attributes You'll See Constantly
```html
<div id="unique-id" class="some-class another-class">
```
- `id` — unique identifier (only one per page) — in React becomes less
  common since components handle their own scope
- `class` — reusable styling hook (in JSX this becomes `className`
  since `class` is a reserved word in JavaScript)

## 9. Comments
```html
<!-- This is a comment, not shown on the page -->
```

## 10. HTML → JSX Quick Translation Table (bridge to React)
| HTML | JSX (React) |
|---|---|
| `class="btn"` | `className="btn"` |
| `for="name"` (on label) | `htmlFor="name"` |
| `onclick="fn()"` | `onClick={fn}` |
| `<br>`, `<img>` (self-closing) | `<br />`, `<img />` (must self-close) |
| inline styles as string | inline styles as object: `style={{color: 'red'}}` |

**This table matters a lot** — these are the exact syntax differences
that trip people up when moving from plain HTML into React JSX.

## Priority Checklist Before Moving to React
- [ ] Comfortable with div vs span (block vs inline)
- [ ] Know form input types and attributes (required, placeholder, etc.)
- [ ] Understand label + input pairing (`for`/`id` relationship)
- [ ] Recognize semantic tags (header, nav, main, section, footer)
- [ ] Know the HTML → JSX differences (className, htmlFor, self-closing tags)