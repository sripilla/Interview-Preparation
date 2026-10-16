
const marks1Input = document.getElementById("marks1");
const marks2Input = document.getElementById("marks2");
const calculateButton = document.getElementById("calculateButton");
const result = document.getElementById("result");

// This function adds the marks and passes the total to a callback
function calculateMarks(mark1, mark2, callback) {
    const total = mark1 + mark2;

    // Execute the callback and pass it the total
    callback(total);
}

// This callback displays the total on the webpage
function displayResult(total) {
    result.textContent = "Total Marks: " + total;
}

// Listen for a button click
calculateButton.addEventListener("click", function () {
    const mark1 = Number(marks1Input.value);
    const mark2 = Number(marks2Input.value);

    // Pass displayResult as a callback
    calculateMarks(mark1, mark2, displayResult);
});
