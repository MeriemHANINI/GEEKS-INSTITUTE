const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("success");
    }, 4000);
});

// Usage
promise
    .then(result => console.log(result))
    .catch(error => console.log(error));