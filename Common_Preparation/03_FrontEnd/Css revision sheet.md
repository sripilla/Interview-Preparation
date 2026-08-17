# CSS — Quick Revision Sheet

Foundation before React (styling components, especially inline styles
and className usage, builds directly on this).

## 1. How to Apply CSS
```html
<!-- Inline (avoid in real projects, but good to recognize) -->
<div style="color: red;">Text</div>

<!-- Internal (in <head>) -->
<style>
    p { color: blue; }
</style>

<!-- External (most common in real projects) -->
<link rel="stylesheet" href="styles.css">
```

## 2. Basic Syntax
```css
selector {
    property: value;
    property: value;
}

/* Example */
p {
    color: blue;
    font-size: 16px;
}
```

## 3. Selectors (how to target elements)
```css
p { }                  /* all <p> tags */
.classname { }           /* all elements with class="classname" */
#idname { }                 /* the element with id="idname" */
div p { }                     /* all <p> inside a <div> (descendant) */
div > p { }                     /* only direct <p> children of <div> */
a:hover { }                       /* pseudo-class — state-based (hover, focus, etc.) */
p:first-child { }                   /* pseudo-class — positional */
*, .a, .b { }                         /* combine selectors: universal, multiple classes */
```
**Priority note:** id (`#`) beats class (`.`) beats tag (`p`) when
styles conflict — this is "specificity."

## 4. The Box Model (fundamental — everything in CSS layout builds on this)
```css
div {
    width: 200px;
    height: 100px;
    padding: 10px;        /* space INSIDE the border, around content */
    border: 2px solid black;
    margin: 20px;           /* space OUTSIDE the border, pushes other elements away */
}
```
**Order from inside out:** `content → padding → border → margin`

```css
/* box-sizing changes how width/height are calculated */
* {
    box-sizing: border-box;   /* width/height INCLUDES padding+border (recommended) */
}
/* default is content-box: width/height EXCLUDES padding+border */
```

## 5. Colors & Units
```css
color: red;                  /* named color */
color: #ff0000;                /* hex */
color: rgb(255, 0, 0);           /* rgb */
color: rgba(255, 0, 0, 0.5);       /* rgb with transparency (alpha) */

width: 100px;      /* fixed pixels */
width: 50%;           /* relative to parent */
width: 2rem;             /* relative to root font-size (usually 16px, so 2rem = 32px) */
width: 2em;                 /* relative to THIS element's font-size */
```

## 6. Flexbox (the layout tool you'll use constantly in React components)
```css
.container {
    display: flex;
    flex-direction: row;         /* row (default) or column */
    justify-content: center;       /* main-axis alignment: flex-start, center, space-between, space-around */
    align-items: center;             /* cross-axis alignment: flex-start, center, stretch */
    gap: 10px;                          /* space between flex items */
}

.item {
    flex: 1;              /* item grows to fill available space */
}
```
**Mental model:** flex container arranges its direct children in a row
or column, and `justify-content`/`align-items` control how they're
positioned along each axis.

## 7. Grid (for 2D layouts)
```css
.container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;   /* 3 equal columns */
    grid-template-rows: auto auto;
    gap: 10px;
}
```
**When to use which:** Flexbox for 1D layouts (a row OR a column).
Grid for 2D layouts (rows AND columns together).

## 8. Positioning
```css
.element {
    position: static;      /* default — normal document flow */
    position: relative;      /* offset from its NORMAL position, still takes up original space */
    position: absolute;        /* removed from flow, positioned relative to nearest positioned ancestor */
    position: fixed;             /* stays fixed relative to the browser viewport (doesn't scroll) */
    position: sticky;              /* hybrid — scrolls normally until a threshold, then sticks */

    top: 10px;
    left: 20px;
    z-index: 10;               /* stacking order — higher = on top */
}
```

## 9. Display Property
```css
display: block;        /* full width, starts new line (div, p, h1) */
display: inline;         /* only takes needed width, no new line (span, a) */
display: inline-block;     /* inline flow but can set width/height */
display: none;               /* removes element entirely — no space reserved */
display: flex;                 /* flexbox container */
```

## 10. Common Text/Font Properties
```css
font-family: Arial, sans-serif;
font-size: 16px;
font-weight: bold;          /* or 400, 700, etc. */
text-align: center;           /* left, right, center, justify */
line-height: 1.5;
text-decoration: none;          /* removes underline from links */
```

## 11. Responsive Design — Media Queries
```css
/* Apply styles only when screen is 768px or narrower */
@media (max-width: 768px) {
    .container {
        flex-direction: column;
    }
}
```
**Key idea:** mobile-first design writes base styles for small screens,
then uses `min-width` media queries to add complexity for larger
screens (or the reverse, desktop-first, using `max-width`).

## 12. CSS in React — What Changes
```jsx
// Inline styles in JSX use a JS OBJECT, not a string, and camelCase properties
<div style={{ backgroundColor: 'blue', fontSize: '16px' }}>Text</div>

// className instead of class
<div className="my-class">Text</div>
```
**Key difference from plain CSS:** property names become camelCase
(`background-color` → `backgroundColor`), and values are strings
inside a JS object, not a semicolon-separated CSS string.

## Priority Checklist Before Moving to React
- [ ] Comfortable with the box model (content/padding/border/margin)
- [ ] Know flexbox basics (justify-content vs align-items)
- [ ] Understand position: relative vs absolute vs fixed
- [ ] Know the CSS → JSX inline style differences (camelCase, object syntax)
- [ ] Understand class vs id specificity