const fetchAndDisplayPosts = require('./fetch-data');

fetchAndDisplayPosts()
    .then(() => console.log('Data fetched successfully!'))
    .catch(err => console.error('Failed to fetch data'));