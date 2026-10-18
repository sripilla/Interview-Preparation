// 1. Select elements
const fetchBtn = document.getElementById("fetchBtn");
const status = document.getElementById("status");
const title = document.getElementById("title");
const body = document.getElementById("body");

// Try "/posts/invalid-id" to test the HTTP error
const url = "https://jsonplaceholder.typicode.com/posts/1";

async function fetchPost() {
  // 2. Loading state
  fetchBtn.disabled = true;
  status.textContent = "Loading...";
  title.textContent = "";
  body.textContent = "";

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Could not load the post.");  // 3. HTTP error

    const data = await response.json();
    title.textContent = data.title;
    body.textContent = data.body;
    status.textContent = "Post loaded!";               // 4. Success
  } catch (error) {
    status.textContent = "Error: " + error.message;    // 5. Error
  } finally {
    fetchBtn.disabled = false;                         // 6. Cleanup: always runs
  }
}

fetchBtn.addEventListener("click", fetchPost);