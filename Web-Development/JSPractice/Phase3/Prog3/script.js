// 1. Select elements
const form = document.getElementById("studentForm");
const nameInput = document.getElementById("studentName");
const emailInput = document.getElementById("studentEmail");
const result = document.getElementById("result");

// 2. Handle form submission
form.addEventListener("submit", function (event) {
  event.preventDefault();               // stop page reload
  console.log(event.type);
  console.log(event.target);

  // 3. Read values (trim removes extra spaces)
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();

  // 4. Validate
  if (name === "") {
    result.textContent = "Please enter your name.";
  } else if (email === "") {
    result.textContent = "Please enter your email.";
  } else {
    result.textContent = "Registration successful! Welcome, " + name + ".";
  }
});
