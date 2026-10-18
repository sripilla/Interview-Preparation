// 1. Select elements
const result = document.getElementById("result");

// 2. Two requests: one fails at 1s, one succeeds at 2s
//    (a function, so each click gets fresh Promises)
function createRequests() {
  const request1 = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error("Request 1 failed")), 1000);
  });

  const request2 = new Promise((resolve) => {
    setTimeout(() => resolve("Request 2 succeeded"), 2000);
  });

  return [request1, request2];
}

// 3. race(): first to settle wins, so we get the 1s failure
document.getElementById("raceBtn").addEventListener("click", () => {
  result.textContent = "Racing...";

  Promise.race(createRequests())
    .then((value) => result.textContent = "race(): " + value)
    .catch((error) => result.textContent = "race() error: " + error.message);
});

// 4. any(): first success wins, so we get the 2s success
document.getElementById("anyBtn").addEventListener("click", () => {
  result.textContent = "Waiting for first success...";

  Promise.any(createRequests())
    .then((value) => result.textContent = "any(): " + value)
    .catch(() => result.textContent = "any(): all requests failed");
});