// ==========================================
// PROGRAM 3: CONDITIONAL STATEMENTS
// ==========================================

// 1. BASIC IF

let age = 21;

if (age >= 18) {
    console.log("Adult");
}


// 2. IF AND ELSE

let temperature = 35;

if (temperature > 30) {
    console.log("Hot");
} else {
    console.log("Normal");
}


// 3. ELSE IF: MULTIPLE POSSIBILITIES

let marks = 85;

if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 75) {
    console.log("Grade B");
} else if (marks >= 50) {
    console.log("Grade C");
} else {
    console.log("Fail");
}

// Output: Grade B


// 4. CHECK WHETHER A NUMBER IS POSITIVE, NEGATIVE OR ZERO

let number = -5;

if (number > 0) {
    console.log("Positive");
} else if (number < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}

// Output: Negative


// 5. COMBINE CONDITIONS

let userAge = 25;

if (userAge >= 18 && userAge <= 60) {
    console.log("Eligible");
} else {
    console.log("Not eligible");
}


// 6. CHECK WHETHER A DAY IS A WEEKEND

let day = "Saturday";

if (day === "Saturday" || day === "Sunday") {
    console.log("Weekend");
} else {
    console.log("Weekday");
}