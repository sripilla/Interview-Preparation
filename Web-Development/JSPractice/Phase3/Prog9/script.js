
const fetchButton = document.getElementById("fetchButton");
const status = document.getElementById("status");
const postContainer = document.getElementById("postContainer");

async function fetchPost() {
    // Prevent repeated clicks while loading
    fetchButton.disabled = true;

    // Show loading message
    status.textContent = "Loading post...";
    postContainer.textContent = "";

    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts/1"
        );

        // fetch does not automatically reject HTTP errors
        if (!response.ok) {
            throw new Error("Could not load the post.");
        }

        const data = await response.json();

        const title = document.createElement("h2");
        title.textContent = data.title;

        const body = document.createElement("p");
        body.textContent = data.body;

        postContainer.appendChild(title);
        postContainer.appendChild(body);

        status.textContent = "Post loaded successfully!";
    } catch (error) {
        status.textContent = "Error: " + error.message;
    } finally {
        // Runs after success or failure
        fetchButton.disabled = false;
    }
}

fetchButton.addEventListener("click", fetchPost);
