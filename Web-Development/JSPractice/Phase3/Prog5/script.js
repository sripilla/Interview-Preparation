// 1. Select elements
const marks1 = document.getElementById("marks1");
const marks2 = document.getElementById("marks2");
const calcBtn = document.getElementById("calcBtn");
const result = document.getElementById("result");

// 2. A function that takes a callback
function calculateMarks(a, b, callback) {
  const total = a + b;
  callback(total);              // hand the result to the callback
}

// 3. The callback: decides what to do with the result
function showTotal(total) {
  result.textContent = "Total Marks: " + total;
}

// 4. The click handler is also a callback (the browser calls it)
calcBtn.addEventListener("click", () => {
  calculateMarks(Number(marks1.value), Number(marks2.value), showTotal);  // no () on showTotal
});