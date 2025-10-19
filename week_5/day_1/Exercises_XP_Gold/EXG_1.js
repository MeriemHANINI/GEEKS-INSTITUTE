const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'foo');
});

// Using Promise.all to handle all three promises
Promise.all([promise1, promise2, promise3])
  .then(values => {
    console.log(values);
    // expected output: Array [3, 42, "foo"]
  })
  .catch(error => {
    console.error('One of the promises was rejected:', error);
  });