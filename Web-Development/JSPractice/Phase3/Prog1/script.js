// 1. Select elements
const heading = document.getElementById("title");          // by ID
const firstMsg = document.querySelector(".message");       // first match
const allMsgs = document.querySelectorAll(".message");     // all matches

// 2. Read text
console.log(heading.textContent);
console.log(firstMsg.textContent);
allMsgs.forEach((msg) => console.log(msg.textContent));

// 3. Change text
document.getElementById("textBtn").addEventListener("click", () => {
  heading.textContent = "Welcome to JavaScript!";
});

// 4. Change style (camelCase properties)
document.getElementById("styleBtn").addEventListener("click", () => {
  heading.style.color = "red";
  heading.style.fontSize = "40px";
});

// 5. Toggle a CSS class
document.getElementById("classBtn").addEventListener("click", () => {
  heading.classList.toggle("highlight");
});

// 6. Create and add a new element
document.getElementById("addBtn").addEventListener("click", () => {
  const p = document.createElement("p");
  p.textContent = "I was created by JavaScript!";
  document.body.appendChild(p);
});