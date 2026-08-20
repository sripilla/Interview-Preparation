/*
====================================================
JAVASCRIPT - SECTION 11: MODULES
FILE: app.js
====================================================

We can import values exported from another file.

Syntax for a DEFAULT export:

import anyName from "./file.js";


Syntax for NAMED exports:

import { exactName } from "./file.js";
*/


/*
====================================================
1. IMPORTING A DEFAULT EXPORT
====================================================

multiply was exported as default.

We do NOT use {}.

The imported name can technically be changed,
but usually we keep the same meaningful name.
*/

import multiply from "./math.js";


/*
====================================================
2. IMPORTING NAMED EXPORTS
====================================================

Named exports use {}.

The names must match the exported names
unless we explicitly rename them.
*/

import { add, subtract } from "./math.js";


/*
====================================================
USING THE IMPORTED FUNCTIONS
====================================================
*/

console.log("Addition:", add(10, 5));
console.log("Subtraction:", subtract(10, 5));
console.log("Multiplication:", multiply(10, 5));


/*
====================================================
DEFAULT vs NAMED EXPORT
====================================================

DEFAULT:

math.js:
export default function multiply() {}

app.js:
import multiply from "./math.js";


NAMED:

math.js:
export const add = () => {};

app.js:
import { add } from "./math.js";


MULTIPLE NAMED EXPORTS:

import { add, subtract } from "./math.js";
*/


/*
====================================================
WHY THIS MATTERS FOR REACT
====================================================

React applications have many files.

For example:

src/
├── App.jsx
├── main.jsx
└── components/
    ├── Header.jsx
    └── Footer.jsx


Header.jsx:

export default Header;


App.jsx:

import Header from "./components/Header.jsx";


This is the same import/export concept.
*/