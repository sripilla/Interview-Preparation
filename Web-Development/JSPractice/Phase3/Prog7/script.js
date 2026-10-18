// 1. Select elements
const fetchBtn = document.getElementById("fetchBtn");
const status = document.getElementById("status");
const title = document.getElementById("title");
const body = document.getElementById("body");

fetchBtn.addEventListener("click", () => {
  status.textContent = "Loading...";

  // 2. Request data from the API
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    // 3. Parse the JSON (returns a Promise)
    .then((response) => response.json())

    // 4. Use the data
    .then((data) => {
      title.textContent = data.title;
      body.textContent = data.body;
      status.textContent = "Post loaded!";
    })

    // 5. Handle network errors
    .catch((error) => {
      status.textContent = "Error: " + error.message;
    });
});