// 1. Select elements
const orderBtn = document.getElementById("orderBtn");
const status = document.getElementById("status");

// 2. Create a Promise that finishes after 2 seconds
function placeOrder() {
  return new Promise((resolve, reject) => {
    const success = true;               // change to false to test .catch()

    setTimeout(() => {
      if (success) {
        resolve("Your food is ready!");    // fulfilled
      } else {
        reject("Sorry, your order failed."); // rejected
      }
    }, 2000);
  });
}

// 3. Use the Promise with .then() and .catch()
orderBtn.addEventListener("click", () => {
  status.textContent = "Preparing your order...";   // pending

  placeOrder()
    .then((message) => status.textContent = message)
    .catch((error) => status.textContent = error);
});