// 1. Select elements
const loadBtn = document.getElementById("loadBtn");
const status = document.getElementById("status");
const postsDiv = document.getElementById("posts");

loadBtn.addEventListener("click", () => {
  status.textContent = "Loading...";
  postsDiv.textContent = "";

  // 2. Request 5 posts (?_limit=5 asks the API for only 5)
  fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
    .then((response) => response.json())

    // 3. The data is an ARRAY of post objects, so loop through it
    .then((posts) => {
      posts.forEach((post) => {
        const title = document.createElement("h3");
        title.textContent = post.title;

        const body = document.createElement("p");
        body.textContent = post.body;

        postsDiv.appendChild(title);
        postsDiv.appendChild(body);
      });

      status.textContent = "Loaded " + posts.length + " posts!";
    })

    // 4. Handle network errors
    .catch((error) => {
      status.textContent = "Error: " + error.message;
    });
});