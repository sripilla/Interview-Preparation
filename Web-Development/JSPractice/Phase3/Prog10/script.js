// 1. Select elements
const fetchBtn = document.getElementById("fetchBtn");
const status = document.getElementById("status");
const postsDiv = document.getElementById("posts");

const base = "https://jsonplaceholder.typicode.com/posts/";

async function fetchPosts() {
  fetchBtn.disabled = true;
  status.textContent = "Loading...";
  postsDiv.textContent = "";

  try {
    // 2. Start all 3 requests together
    const responses = await Promise.all([
      fetch(base + "1"),
      fetch(base + "2"),
      fetch(base + "3")
    ]);

    // 3. Check every response
    for (const response of responses) {
      if (!response.ok) throw new Error("Failed to fetch one or more posts.");
    }

    // 4. Parse all bodies together
    const posts = await Promise.all(responses.map((r) => r.json()));

    // 5. Display each post
    posts.forEach((post) => {
      const title = document.createElement("h3");
      title.textContent = post.title;

      const body = document.createElement("p");
      body.textContent = post.body;

      postsDiv.appendChild(title);
      postsDiv.appendChild(body);
    });

    status.textContent = "All posts loaded!";
  } catch (error) {
    status.textContent = "Error: " + error.message;   // any one fails, so all fail
  } finally {
    fetchBtn.disabled = false;
  }
}

fetchBtn.addEventListener("click", fetchPosts);