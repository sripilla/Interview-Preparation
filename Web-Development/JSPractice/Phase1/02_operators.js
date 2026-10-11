// ==========================================
// PROGRAM 2: OPERATORS
// ==========================================

// 1. ARITHMETIC OPERATORS

let a = 10;
let b = 3;

console.log(a + b);  // Addition: 13
console.log(a - b);  // Subtraction: 7
console.log(a * b);  // Multiplication: 30
console.log(a / b);  // Division: 3.333...
console.log(a % b);  // Remainder: 1
console.log(a ** b); // Power: 1000


// 2. ASSIGNMENT OPERATORS

let score = 10;

score += 5; // Same as score = score + 5
console.log(score); // 15

score -= 2; // Same as score = score - 2
console.log(score); // 13

score *= 2; // Same as score = score * 2
console.log(score); // 26

score /= 2; // Same as score = score / 2
console.log(score); // 13


// 3. COMPARISON OPERATORS

console.log(10 > 5);   // true
console.log(10 < 5);   // false
console.log(10 >= 10); // true
console.log(10 <= 5);  // false

// == allows type conversion
console.log(10 == "10"); // true

// === checks both value and type
console.log(10 === "10"); // false

// !== checks strict inequality
console.log(10 !== "10"); // true


// 4. LOGICAL OPERATORS

// AND: both conditions must be true
console.log(10 > 5 && 10 < 20); // true

// OR: at least one condition must be true
console.log(10 > 20 || 10 === 10); // true

// NOT: reverses a Boolean
console.log(!true);  // false
console.log(!false); // true


// 5. USING % TO CHECK EVEN OR ODD

let number = 8;

console.log(number % 2 === 0); // true: even

number = 7;

console.log(number % 2 === 0); // false: odd