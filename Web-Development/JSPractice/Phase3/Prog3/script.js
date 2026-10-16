
// CONCEPT 1: SELECTING HTML ELEMENTS

// Select the registration form.
const form = document.getElementById("studentForm");

// Select the name input.
const nameInput = document.getElementById("studentName");

// Select the email input.
const emailInput = document.getElementById("studentEmail");

// Select the paragraph where messages will appear.
const result = document.getElementById("result");


// CONCEPT 2: HANDLING FORM SUBMISSION

// Listen for the form's submit event.
form.addEventListener("submit", function(event) {

    // Prevent the browser's default form submission.
    event.preventDefault();


    // CONCEPT 3: READING INPUT VALUES

    // Read the name and remove extra spaces.
    const name = nameInput.value.trim();

    // Read the email and remove extra spaces.
    const email = emailInput.value.trim();


    // CONCEPT 4: VALIDATING THE INPUTS

    // Check whether the name is empty.
    if (name === "") {

        // Display an error message.
        result.textContent = "Please enter your name.";

    }

    // Check whether the email is empty.
    else if (email === "") {

        // Display an error message.
        result.textContent = "Please enter your email.";

    }

    // If both fields contain values, accept the input.
    else {

        // Display a successful registration message.
        result.textContent = "Registration successful! Welcome, " + name + ".";

    }

});
