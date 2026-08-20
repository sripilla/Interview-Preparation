/*
====================================================
JAVASCRIPT - SECTION 10:
OPTIONAL CHAINING & NULLISH COALESCING
====================================================

These are modern JavaScript features.

1. Optional Chaining -> ?.
2. Nullish Coalescing -> ??

They are useful when working with data that may
be missing, especially API data in React.
*/


/*
====================================================
1. OPTIONAL CHAINING -> ?.
====================================================

Normally, accessing a property that does not exist
inside another missing property can cause an error.

Example:

const user = {};

console.log(user.address.city);

This causes an error because:

user.address -> undefined

Then JavaScript tries to access:

undefined.city


Optional chaining prevents this error.
*/


const user = {
    name: "Alice",
    profile: {
        city: "London"
    }
};

console.log(user?.name);          // Alice
console.log(user?.profile?.city); // London


/*
----------------------------------------------------
ACCESSING A MISSING PROPERTY
----------------------------------------------------

address does not exist.

Without optional chaining, accessing:

user.address.city

would cause an error.

With ?. :

user?.address?.city

JavaScript safely returns undefined.
*/

console.log(user?.address?.city); // undefined


/*
====================================================
2. OPTIONAL CHAINING WITH API DATA
====================================================

Imagine receiving user data from an API.

Sometimes profile may exist:

const user = {
    profile: {
        name: "Alice"
    }
};

Sometimes it may not:

const user = {};

Optional chaining lets us safely access:

user?.profile?.name
*/


const userFromAPI = {
    name: "Likitha"
};

console.log("Name:", userFromAPI?.name);
console.log("City:", userFromAPI?.profile?.city);


/*
====================================================
3. NULLISH COALESCING -> ??
====================================================

?? provides a DEFAULT value only when the value is:

null
or
undefined


Syntax:

value ?? defaultValue
*/


const userName = null;

const displayName = userName ?? "Guest";

console.log("Display name:", displayName);


/*
====================================================
4. ?? vs ||
====================================================

This is VERY important.

Both can provide a default value, but they behave
differently.

|| uses the default for ANY FALSY value.

Falsy values include:

false
0
""
null
undefined
NaN


?? uses the default ONLY for:

null
undefined
*/


const count = 0;

console.log("Using ?? :", count ?? 10); // 0
console.log("Using || :", count || 10); // 10


/*
Why?

0 is falsy.

So:

count || 10

replaces 0 with 10.


But 0 is NOT null or undefined.

So:

count ?? 10

keeps 0.
*/


/*
====================================================
ANOTHER EXAMPLE
====================================================
*/

const message = "";

console.log("Using ?? :", message ?? "No message");
// ""  -> Empty string is kept

console.log("Using || :", message || "No message");
// "No message" -> Empty string is replaced


/*
====================================================
WHY THIS MATTERS FOR REACT
====================================================

API data may not always be available immediately.

For example:

const user = null;

During loading, this would fail:

user.profile.name


Instead:

user?.profile?.name


If the value is missing, we can show a default:

user?.profile?.name ?? "Guest"


This prevents application crashes caused by
trying to access properties on null/undefined.
*/


/*
====================================================
EXERCISE
====================================================

1. Create:

const student = {
    name: "Likitha",
    course: {
        name: "AI/ML"
    }
};

Safely print the course name using optional chaining.


2. Try accessing:

student?.college?.name

Print the result.


3. Create:

const marks = null;

Use ?? to display 0 if marks is null or undefined.


4. Create:

const attendance = 0;

Compare:

attendance ?? 100

and:

attendance || 100

Observe the difference.
*/


const student = {
    name: "Likitha",
    course: {
        name: "AI/ML"
    }
};


console.log(
    "Course:",
    student?.course?.name
);


console.log(
    "College:",
    student?.college?.name
);


const marks = null;

const displayMarks = marks ?? 0;

console.log("Marks:", displayMarks);


const attendance = 0;

console.log(
    "Attendance using ??:",
    attendance ?? 100
);

console.log(
    "Attendance using ||:",
    attendance || 100
);

/* 
EXPECTED OUTPUT

Alice
London
undefined
Name: Likitha
City: undefined
Display name: Guest
Using ??: 0
Using ||: 10
Using ??: 
Using ||: No message
Course: AI/ML
College: undefined
Marks: 0
Attendance using ??: 0
Attendance using ||: 100
*/