
const fetchButton = document.getElementById("fetchButton");
const statusMessage = document.getElementById("status");
const postContainer = document.getElementById("post");

// Run when the button is clicked
fetchButton.addEventListener("click", function () {
    statusMessage.textContent = "Loading post...";
    postContainer.textContent = "";

    fetchButton.disabled = true;

    // Step 1: Request data from the API
    fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then(function (response) {
            // Step 2: Check whether the HTTP request succeeded
            if (!response.ok) {
                throw new Error("Failed to fetch post");
            }

            // Step 3: Convert the response body from JSON to JS data
            return response.json();
        })
        .then(function (data) {
            // Step 4: Display the retrieved data
            const title = document.createElement("h2");
            title.textContent = data.title;

            const body = document.createElement("p");
            body.textContent = data.body;

            const userId = document.createElement("p");
            userId.textContent = "User ID: " + data.userId;

            postContainer.appendChild(title);
            postContainer.appendChild(body);
            postContainer.appendChild(userId);

            statusMessage.textContent = "Post loaded successfully!";
        })
        .catch(function (error) {
            // Handle network errors and errors thrown above
            statusMessage.textContent = "Error: " + error.message;
        })
        .finally(function () {
            // Re-enable the button whether the request succeeds or fails
            fetchButton.disabled = false;
        });
});
