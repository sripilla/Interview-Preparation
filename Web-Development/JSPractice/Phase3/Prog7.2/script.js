
const loadButton = document.getElementById("loadButton");
const statusMessage = document.getElementById("status");
const postsContainer = document.getElementById("postsContainer");

loadButton.addEventListener("click", function () {
    statusMessage.textContent = "Loading posts...";
    postsContainer.textContent = "";
    loadButton.disabled = true;

    // Request the first 10 posts
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
        .then(function (response) {
            if (!response.ok) {
                throw new Error("Failed to load posts");
            }

            return response.json();
        })
        .then(function (posts) {
            // The API returns an array of post objects
            posts.forEach(function (post) {
                // Create a container for each post
                const postElement = document.createElement("div");
                postElement.classList.add("post");

                // Create the title
                const title = document.createElement("h2");
                title.textContent = post.title;

                // Create the content
                const body = document.createElement("p");
                body.textContent = post.body;

                // Add title and content to the post
                postElement.appendChild(title);
                postElement.appendChild(body);

                // Add the post to the webpage
                postsContainer.appendChild(postElement);
            });

            statusMessage.textContent =
                "Loaded " + posts.length + " posts successfully!";
        })
        .catch(function (error) {
            statusMessage.textContent = "Error: " + error.message;
        })
        .finally(function () {
            loadButton.disabled = false;
        });
});
