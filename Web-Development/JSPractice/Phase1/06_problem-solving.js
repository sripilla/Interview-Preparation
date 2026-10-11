// ==========================================
// PROGRAM 6: BASIC PROBLEM SOLVING
// ==========================================


// PROBLEM 1: CHECK EVEN OR ODD

function checkEvenOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

console.log(checkEvenOdd(10)); // Even
console.log(checkEvenOdd(7));  // Odd


// PROBLEM 2: SUM NUMBERS FROM 1 TO N

function sumToN(n) {
    let total = 0;

    for (let i = 1; i <= n; i++) {
        total += i;
    }

    return total;
}

console.log(sumToN(5)); // 15
console.log(sumToN(6)); // 21


// PROBLEM 3: FIND THE LARGER OF TWO NUMBERS

function findLargest(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

console.log(findLargest(5, 9));   // 9
console.log(findLargest(50, 30)); // 50


// PROBLEM 4: COUNT EVEN NUMBERS FROM 1 TO N

function countEven(n) {
    let count = 0;

    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            count += 1;
        }
    }

    return count;
}

console.log(countEven(10)); // 5
console.log(countEven(16)); // 8


// PROBLEM 5: CHECK POSITIVE, NEGATIVE OR ZERO

function checkNumber(number) {
    if (number > 0) {
        return "Positive";
    } else if (number < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}

console.log(checkNumber(10));  // Positive
console.log(checkNumber(-5));  // Negative
console.log(checkNumber(0));   // Zero