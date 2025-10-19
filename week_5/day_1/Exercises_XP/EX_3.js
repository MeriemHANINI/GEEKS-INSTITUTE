// Create a promise that resolves with value 3
const resolvedPromise = Promise.resolve(3);

// Create a promise that rejects with "Boo!"
const rejectedPromise = Promise.reject("Boo!");

// Test the resolved promise
resolvedPromise
    .then(value => console.log("Resolved:", value))
    .catch(error => console.log("Error:", error));

// Test the rejected promise  
rejectedPromise
    .then(value => console.log("Resolved:", value))
    .catch(error => console.log("Error:", error));