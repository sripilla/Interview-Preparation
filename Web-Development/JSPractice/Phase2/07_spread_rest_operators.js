
// Lesson 7: Spread and Rest Operators

/*
SPREAD OPERATOR (...) — Expand values
*/

// 1. Copy an array

const numbers1 = [10, 20, 30];
const copy = [...numbers1];

console.log(copy); // [10, 20, 30]


// 2. Combine arrays

const a = [1, 2];
const b = [3, 4];

const result = [...a, ...b];

console.log(result); // [1, 2, 3, 4]


// 3. Add elements to an array

const numbers2 = [10, 20, 30];
const updated = [...numbers2, 40];

console.log(updated); // [10, 20, 30, 40]


// 4. Spread with objects

const student1 = {
    name: "Likitha",
    age: 21
};

const updatedStudent1 = {
    ...student1,
    branch: "AI/ML"
};

console.log(updatedStudent1);
// { name: "Likitha", age: 21, branch: "AI/ML" }


// 5. Updating an existing property

const student2 = {
    name: "Likitha",
    age: 21
};

const updatedStudent2 = {
    ...student2,
    age: 22
};

console.log(updatedStudent2);
// { name: "Likitha", age: 22 }


/*
REST OPERATOR (...) — Collect remaining values
*/

// 6. Rest in array destructuring

const numbers3 = [10, 20, 30, 40, 50];

const [first, second, ...remaining] = numbers3;

console.log(first);     // 10
console.log(second);    // 20
console.log(remaining); // [30, 40, 50]


// 7. Rest in functions

function addAll(...numbers) {
    return numbers.reduce((sum, n) => sum + n, 0);
}

console.log(addAll(10, 20));        // 30
console.log(addAll(10, 20, 30));    // 60
console.log(addAll(1, 2, 3, 4, 5)); // 15
