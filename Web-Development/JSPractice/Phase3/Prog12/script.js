
const result = document.getElementById("result");

function createRequests() {
    const request1 = new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error("Request 1 failed")), 1000);
    });

    const request2 = new Promise((resolve) => {
        setTimeout(() => resolve("Request 2 succeeded"), 2000);
    });

    return [request1, request2];
}

document.getElementById("raceButton").addEventListener("click", () => {
    result.textContent = "Racing requests...";

    Promise.race(createRequests())
        .then(value => {
            result.textContent = value;
        })
        .catch(error => {
            result.textContent = "Race error: " + error.message;
        });
});

document.getElementById("anyButton").addEventListener("click", () => {
    result.textContent = "Waiting for the first success...";

    Promise.any(createRequests())
        .then(value => {
            result.textContent = value;
        })
        .catch(error => {
            result.textContent = "All requests failed.";
        });
});
