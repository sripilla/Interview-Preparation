// ==========================================
// PROGRAM 4: LOOPS
// ==========================================

// 1. FOR LOOP: PRINT 1 TO 5

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// i = 1: starting value
// i <= 5: condition
// i++: increase i by 1 after each iteration


// 2. COUNT BACKWARDS FROM 5 TO 1

for (let i = 5; i >= 1; i--) {
    console.log(i);
}

// i-- decreases i by 1


// 3. PRINT EVEN NUMBERS FROM 2 TO 10

for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}


// 4. PRINT ODD NUMBERS FROM 1 TO 9

for (let i = 1; i <= 9; i += 2) {
    console.log(i);
}


// 5. CALCULATE THE SUM FROM 1 TO 5

let sum = 0;

for (let i = 1; i <= 5; i++) {
    sum = sum + i;
}

console.log("Sum:", sum); // Output: 15


// 6. WHILE LOOP: PRINT 1 TO 5

let count = 1;

while (count <= 5) {
    console.log(count);
    count++; // Update the variable to avoid an infinite loop
}


// 7. WHILE LOOP: COUNT BACKWARDS

let countdown = 5;

while (countdown >= 1) {
    console.log(countdown);
    countdown--;
}