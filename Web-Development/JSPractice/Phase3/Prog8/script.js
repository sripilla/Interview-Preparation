// 1. Select elements
const fetchBtn = document.getElementById("fetchBtn");
const status = document.getElementById("status");
const title = document.getElementById("title");
const body = document.getElementById("body");

// 2. An async function: reads top to bottom
async function fetchPost() {
  try {
    status.textContent = "Loading...";

    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");  // wait for response
    if (!response.ok) throw new Error("Failed to fetch post");                    // HTTP error check

    const data = await response.json();   // wait for parsed data

    title.textContent = data.title;
    body.textContent = data.body;
    status.textContent = "Post loaded!";
  } catch (error) {
    status.textContent = "Error: " + error.message;   // 3. errors land here
  }
}

// 4. Pass the function as a callback (no brackets)
fetchBtn.addEventListener("click", fetchPost);