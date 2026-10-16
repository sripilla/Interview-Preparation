
const registerButton = document.getElementById("registerButton");
const output = document.getElementById("output");

// Step 1: Register the student
function registerStudent() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve("Student registered successfully!");
        }, 1000);
    });
}

// Step 2: Generate a student ID
function generateStudentId(message) {
    output.textContent += message + "\n";

    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve("STU102");
        }, 1000);
    });
}

// Step 3: Display the final confirmation
function showConfirmation(studentId) {
    output.textContent += "Student ID: " + studentId + "\n";
    output.textContent += "Registration completed!";
}

registerButton.addEventListener("click", function () {
    output.textContent = "Starting registration...\n";
    registerButton.disabled = true;

    registerStudent()
        .then(function (message) {
            output.textContent += message + "\n";

            // Pass the registration message to the next step
            return generateStudentId("Generating student ID...");
        })
        .then(function (studentId) {
            showConfirmation(studentId);
        })
        .catch(function (error) {
            output.textContent += "Error: " + error.message;
        })
        .finally(function () {
            registerButton.disabled = false;
        });
});
