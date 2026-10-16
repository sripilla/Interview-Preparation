
// CONCEPT 1: SELECTING HTML ELEMENTS

// Select the heading using its ID.
const heading = document.getElementById("title");

// Select the name input.
const nameInput = document.getElementById("studentName");

// Select the greeting button.
const greetButton = document.getElementById("greetButton");

// Select the clear button.
const clearButton = document.getElementById("clearButton");

// Select the paragraph where messages appear.
const message = document.getElementById("message");


// CONCEPT 2: ADDING AN EVENT LISTENER

// Listen for a click on the Greet Me button.
greetButton.addEventListener("click", function() {

    // Read the name entered by the user.
    const name = nameInput.value.trim();

    // Check whether the input is empty.
    if (name === "") {

        // Display an error message.
        message.textContent = "Please enter your name.";

    } else {

        // Display a greeting using the entered name.
        message.textContent = "Hello, " + name + "! Welcome to JavaScript.";

    }

});


// CONCEPT 3: HANDLING ANOTHER CLICK EVENT

// Listen for a click on the Clear Message button.
clearButton.addEventListener("click", function() {

    // Clear the message paragraph.
    message.textContent = "";

    // Clear the input field.
    nameInput.value = "";

});


// CONCEPT 4: CHANGING THE HEADING ON A CLICK

// Listen for a click on the heading itself.
heading.addEventListener("click", function() {

    // Change the heading text.
    heading.textContent = "You clicked the heading!";

    // Change the heading colour.
    heading.style.color = "red";

});
