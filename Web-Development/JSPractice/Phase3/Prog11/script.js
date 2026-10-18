// 1. Select elements
const fetchBtn = document.getElementById("fetchBtn");
const status = document.getElementById("status");
const results = document.getElementById("results");

// 2. Fetch one post; throw on HTTP errors so the outcome becomes "rejected"
async function fetchPost(id) {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/" + id);
  if (!response.ok) throw new Error("Post " + id + " could not be loaded");
  return response.json();
}

// Helper: add a line of text to the page
function show(text) {
  const p = document.createElement("p");
  p.textContent = text;
  results.appendChild(p);
}

async function fetchAll() {
  status.textContent = "Loading...";
  results.textContent = "";

  // 3. Wait for ALL requests, whether they succeed or fail
  const outcomes = await Promise.allSettled([
    fetchPost(1),
    fetchPost(2),
    fetchPost(999999)          // returns 404, so this one fails
  ]);

  // 4. Check each outcome's status
  outcomes.forEach((outcome) => {
    if (outcome.status === "fulfilled") {
      show("✅ Success: " + outcome.value.title);
    } else {
      show("❌ Failed: " + outcome.reason.message);
    }
  });

  status.textContent = "All requests finished.";
}

fetchBtn.addEventListener("click", fetchAll);