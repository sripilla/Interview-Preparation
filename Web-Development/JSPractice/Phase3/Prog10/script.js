
const fetchButton = document.getElementById("fetchButton");
const status = document.getElementById("status");
const postContainer = document.getElementById("postContainer");

async function fetchPosts() {
    fetchButton.disabled = true;
    status.textContent = "Loading posts...";
    postContainer.textContent = "";

    try {
        // Start all three requests
        const responses = await Promise.all([
            fetch("https://jsonplaceholder.typicode.com/posts/1"),
            fetch("https://jsonplaceholder.typicode.com/posts/2"),
            fetch("https://jsonplaceholder.typicode.com/posts/3")
        ]);

        // Check that every HTTP response succeeded
        for (const response of responses) {
            if (!response.ok) {
                throw new Error("Failed to fetch one or more posts.");
            }
        }

        // Parse all three response bodies
        const posts = await Promise.all(
            responses.map(response => response.json())
        );

        // Display each post
        posts.forEach(post => {
            const card = document.createElement("div");
            const title = document.createElement("h2");
            const body = document.createElement("p");

            title.textContent = post.title;
            body.textContent = post.body;

            card.appendChild(title);
            card.appendChild(body);
            postContainer.appendChild(card);
        });

        status.textContent = "All posts loaded successfully!";
    } catch (error) {
        status.textContent = "Error: " + error.message;
    } finally {
        fetchButton.disabled = false;
    }
}

fetchButton.addEventListener("click", fetchPosts);
