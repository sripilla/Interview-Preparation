// 1. Select elements
const registerBtn = document.getElementById("registerBtn");
const output = document.getElementById("output");

// Helper: add a line of text to the page
function show(text) {
  const p = document.createElement("p");
  p.textContent = text;
  output.appendChild(p);
}

// 2. A Promise that resolves after 1 second
function registerStudent() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Student registered"), 1000);
  });
}

// 3. The chain: each return passes data to the next .then()
registerBtn.addEventListener("click", () => {
  output.textContent = "";

  registerStudent()
    .then((msg) => {
      show(msg);                        // Student registered
      return "STU101";                  // passed to next .then()
    })
    .then((id) => {
      show("Student ID: " + id);        // Student ID: STU101
      return "Registration completed";
    })
    .then((msg) => {
      show(msg);                        // Registration completed
    })
    .catch((error) => {
      show("Error: " + error.message);  // runs only if a step throws
    });
});