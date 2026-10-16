
const orderButton = document.getElementById("orderButton");
const statusMessage = document.getElementById("status");

// Create a function that returns a Promise
function placeOrder() {
    return new Promise(function (resolve, reject) {
        statusMessage.textContent = "Preparing your order...";

        // Simulate an operation that takes 2 seconds
        setTimeout(function () {
            const success = true;

            if (success) {
                resolve("Your order is ready!");
            } else {
                reject("Sorry, your order failed.");
            }
        }, 2000);
    });
}

// Run when the user clicks the button
orderButton.addEventListener("click", function () {
    orderButton.disabled = true;

    placeOrder()
        .then(function (message) {
            statusMessage.textContent = message;
        })
        .catch(function (error) {
            statusMessage.textContent = error;
        })
        .finally(function () {
            // Runs whether the Promise succeeds or fails
            orderButton.disabled = false;
        });
});
