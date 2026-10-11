// ==========================================
// PROGRAM 7: ARRAY INTRODUCTION
// ==========================================

// An array stores multiple values in a single variable.

const numbers = [10, 20, 30, 40, 50];

// Access values using their index.
// JavaScript array indexes start at 0.

console.log(numbers[0]); // 10
console.log(numbers[1]); // 20
console.log(numbers[4]); // 50

// .length gives the number of elements.

console.log(numbers.length); // 5


// 1. LOOP THROUGH AN ARRAY

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// i is the index.
// numbers[i] is the value at that index.


// 2. COUNT POSITIVE NUMBERS IN AN ARRAY

function countPositive(arr) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        // Check the actual value, not the index.
        // Positive means greater than zero.
        if (arr[i] > 0) {
            count += 1;
        }
    }

    return count;
}

console.log(
    countPositive([-1, -2, 5, 8, 0, -10, 9])
); // Output: 3


// 3. SUM ALL VALUES IN AN ARRAY

function sumArray(arr) {
    let total = 0;

    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }

    return total;
}

console.log(sumArray([1, 2, 3, 4, 5])); // 15