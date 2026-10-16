
// CONCEPT 1: THE DOM
// The browser represents the HTML document as a DOM tree.
// JavaScript can access and modify elements through the DOM.


// CONCEPT 2: SELECTING HTML ELEMENTS

// Select the heading using its ID.
// getElementById() takes the ID name without a #.
const heading = document.getElementById("title");

// Select the first paragraph with the class "message".
// The . indicates a class in a CSS selector.
const firstMessage = document.querySelector(".message");

// Select all paragraphs with the class "message".
const allMessages = document.querySelectorAll(".message");

// Select the description paragraph using its ID.
const description = document.getElementById("description");

// Select the container where we will add a new paragraph.
const output = document.getElementById("output");


// CONCEPT 3: READING AND CHANGING TEXT USING textContent

// Read the current heading text.
console.log(heading.textContent);

// Read the first message paragraph's text.
console.log(firstMessage.textContent);

// Read the text of every matching paragraph.
allMessages.forEach((message) => {
    console.log(message.textContent);
});

// Change the heading's text.
heading.textContent = "Welcome to DOM Manipulation!";

// Change the description's text.
description.textContent = "The text has been changed using JavaScript.";


// CONCEPT 4: textContent vs innerHTML

// textContent treats HTML tags as ordinary text.
// The browser displays the <b> tags literally.
description.textContent = "<b>This is plain text.</b>";

// innerHTML interprets the string as HTML markup.
// The word "Bold" is displayed in bold.
description.innerHTML = "This is <b>Bold</b> text.";

// Use textContent for ordinary text, especially untrusted content.
// Avoid inserting untrusted strings through innerHTML.


// CONCEPT 5: CHANGING STYLES USING style

// Change the heading's text colour.
heading.style.color = "red";

// Change its background colour.
heading.style.backgroundColor = "lightblue";

// Change its font size.
heading.style.fontSize = "36px";


// CONCEPT 6: ADDING, REMOVING AND TOGGLING CSS CLASSES

// Add the "highlight" class to the first paragraph.
firstMessage.classList.add("highlight");

// Remove the "highlight" class from the first paragraph.
firstMessage.classList.remove("highlight");

// Toggle the class.
// If absent, it is added; if present, it is removed.
firstMessage.classList.toggle("highlight");

// Check whether the class is currently present.
console.log(firstMessage.classList.contains("highlight"));


// CONCEPT 7: CREATING AND ADDING ELEMENTS

// Create a new paragraph element.
// It exists in memory but is not yet displayed on the page.
const newParagraph = document.createElement("p");

// Set the text inside the new paragraph.
newParagraph.textContent = "I was created using JavaScript!";

// Give the new paragraph the existing "message" CSS class.
newParagraph.classList.add("message");

// Add the paragraph to the output container.
// It now becomes part of the visible webpage.
output.appendChild(newParagraph);
