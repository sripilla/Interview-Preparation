/*
====================================================
JAVASCRIPT - SECTION 11: MODULES
FILE: math.js
====================================================

A module can export values so that other files
can use them.

There are two main types of exports:

1. Named export
2. Default export
*/


/*
====================================================
1. NAMED EXPORT
====================================================

Use the export keyword directly.

A file can have MULTIPLE named exports.
*/

export const add = (a, b) => a + b;

export const subtract = (a, b) => a - b;


/*
====================================================
2. DEFAULT EXPORT
====================================================

A file can have only ONE default export.

We export multiply as the default function.
*/

export default function multiply(a, b) {
    return a * b;
}