/*
====================================================
JAVASCRIPT - SECTION 8: PROMISES & ASYNC/AWAIT
====================================================

JavaScript often performs tasks that take time.

Examples:

- Fetching data from an API
- Reading a file
- Waiting for a database response
- Waiting for a timer

A Promise represents the result of an operation
that may complete in the future.

A Promise has 3 states:

1. Pending   -> Still waiting
2. Fulfilled -> Successfully completed
3. Rejected  -> Failed
*/


/*
====================================================
1. CREATING A PROMISE
====================================================

A Promise receives two functions:

resolve -> call when successful
reject  -> call when something fails
*/

const fetchData = () => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve("Data loaded successfully!");
        }, 1000);

    });
};


/*
====================================================
2. USING .then()
====================================================

.then() receives the result after the Promise
successfully completes.

IMPORTANT:

The code inside .then() runs AFTER the Promise
has been resolved.
*/

console.log("Loading data using .then()...");

fetchData().then(result => {
    console.log(result);
});


/*
====================================================
3. ASYNC/AWAIT
====================================================

async/await is a cleaner way to work with Promises.

async:
Marks a function as asynchronous.

await:
Waits for a Promise to finish.

Syntax:

const functionName = async () => {
    const result = await somePromise();
};
*/


const loadData = async () => {
    console.log("Loading data using async/await...");

    const result = await fetchData();

    console.log(result);
};

loadData();


/*
====================================================
4. UNDERSTANDING await
====================================================

Without await, JavaScript does NOT wait for the
Promise result.

Example idea:

const result = fetchData();

console.log(result);

This gives us a Promise object, not the final data.

With await:

const result = await fetchData();

Now result contains:

"Data loaded successfully!"
*/


/*
====================================================
5. ERROR HANDLING WITH try/catch
====================================================

Promises can fail.

We use:

try {
    // Code that may succeed or fail
} catch (error) {
    // Handle the error
}
*/


const fetchDataSafely = () => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            const success = true;

            if (success) {
                resolve("Data loaded safely!");
            } else {
                reject("Failed to load data!");
            }

        }, 1000);

    });
};


const loadDataSafely = async () => {

    try {

        const result = await fetchDataSafely();

        console.log(result);

    } catch (error) {

        console.log("Error:", error);

    }

};

loadDataSafely();


/*
====================================================
6. EXAMPLE OF A REJECTED PROMISE
====================================================

Change success to false and run the code
to see the catch block work.
*/

const testError = async () => {

    try {

        const result = await new Promise((resolve, reject) => {

            const success = false;

            if (success) {
                resolve("Success!");
            } else {
                reject("Something went wrong!");
            }

        });

        console.log(result);

    } catch (error) {

        console.log("Caught error:", error);

    }

};

testError();


/*
====================================================
WHY THIS MATTERS FOR REACT
====================================================

React applications often fetch data from APIs.

Example:

const loadUsers = async () => {
    try {
        const response = await fetch("/api/users");

        const users = await response.json();

        console.log(users);

    } catch (error) {
        console.log("Error:", error);
    }
};


Later, when learning React, you will commonly use
async operations with:

useEffect()
fetch()
APIs
*/


/*
====================================================
EXERCISE
====================================================

1. Create a function called getUser.

2. It should return a Promise.

3. Use setTimeout() and after 2 seconds resolve with:

{
    name: "Likitha",
    role: "Student"
}

4. Create an async function called loadUser.

5. Use await to get the user.

6. Print:

User name: Likitha
Role: Student

7. Wrap the await operation in try/catch.
*/


const getUser = () => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            resolve({
                name: "Likitha",
                role: "Student"
            });

        }, 2000);

    });

};


const loadUser = async () => {

    try {

        console.log("Loading user...");

        const user = await getUser();

        console.log(`User name: ${user.name}`);
        console.log(`Role: ${user.role}`);

    } catch (error) {

        console.log("Error:", error);

    }

};

loadUser();