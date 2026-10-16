
const fetchButton = document.getElementById("fetchButton");
const status = document.getElementById("status");
const results = document.getElementById("results");

// Fetch one post and reject if its HTTP response is unsuccessful
async function fetchPost(id) {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
    );

    if (!response.ok) {
        throw new Error(`Post ${id} could not be loaded`);
    }

    return response.json();
}

async function fetchAllPosts() {
    fetchButton.disabled = true;
    status.textContent = "Loading records...";
    results.textContent = "";

    try {
        // Run all three requests concurrently
        const outcomes = await Promise.allSettled([
            fetchPost(1),
            fetchPost(2),
            fetchPost(999999)
        ]);

        outcomes.forEach((outcome, index) => {
            const item = document.createElement("div");
            const heading = document.createElement("h3");

            if (outcome.status === "fulfilled") {
                // This request succeeded
                heading.textContent =
                    `Request ${index + 1}: Success`;

                const title = document.createElement("p");
                title.textContent = outcome.value.title;

                item.appendChild(heading);
                item.appendChild(title);
            } else {
                // This request failed
                heading.textContent =
                    `Request ${index + 1}: Failed`;

                const errorMessage = document.createElement("p");
                errorMessage.textContent = outcome.reason.message;

                item.appendChild(heading);
                item.appendChild(errorMessage);
            }

            results.appendChild(item);
        });

        status.textContent = "All requests have finished.";
    } catch (error) {
        status.textContent = "Error: " + error.message;
    } finally {
        fetchButton.disabled = false;
    }
}

fetchButton.addEventListener("click", fetchAllPosts);
