
const fetchButton = document.getElementById("fetchButton");
const status = document.getElementById("status");
const postContainer = document.getElementById("postContainer");

async function fetchPost() {
    try {
        // Show loading message
        status.textContent = "Loading post...";
        postContainer.innerHTML = "";

        // Fetch data from the API
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts/1"
        );

        // Check whether the request succeeded
        if (!response.ok) {
            throw new Error("Failed to fetch post");
        }

        // Convert the response into a JavaScript object
        const data = await response.json();

        // Display the post title
        const title = document.createElement("h2");
        title.textContent = data.title;

        // Display the post body
        const body = document.createElement("p");
        body.textContent = data.body;

        // Display the user ID
        const userId = document.createElement("p");
        userId.textContent = "User ID: " + data.userId;

        postContainer.appendChild(title);
        postContainer.appendChild(body);
        postContainer.appendChild(userId);

        status.textContent = "Post loaded successfully!";
    } catch (error) {
        // Handle errors
        status.textContent = "Error: " + error.message;
    } finally {
        // Runs whether the request succeeds or fails
        console.log("Fetch operation completed.");
    }
}

// Run the function when the button is clicked
fetchButton.addEventListener("click", fetchPost);
