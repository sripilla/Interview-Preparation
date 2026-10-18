// 1. Select elements
const heading = document.getElementById("title");
const nameInput = document.getElementById("nameInput");
const greetBtn = document.getElementById("greetBtn");
const clearBtn = document.getElementById("clearBtn");
const message = document.getElementById("message");

// 2. Listener with a regular function
greetBtn.addEventListener("click", function () {
  const name = nameInput.value;   // .value = text typed in the input
  message.textContent = name ? "Hello, " + name + "!" : "Please enter your name.";
});

// 3. Listener with an arrow function
clearBtn.addEventListener("click", () => {
  nameInput.value = "";
  message.textContent = "";
});

// 4. Passing a named function (no brackets!)
function changeHeading() {
  heading.textContent = "You clicked the heading!";
  heading.style.color = "red";
}

heading.addEventListener("click", changeHeading);   // ✅ not changeHeading()