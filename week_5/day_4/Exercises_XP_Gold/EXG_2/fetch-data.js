const axios = require('axios');

async function fetchAndDisplayPosts() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        const posts = response.data;
        
        console.log('Post Titles:');
        posts.forEach((post, index) => {
            console.log(`${index + 1}. ${post.title}`);
        });
        
        return posts;
    } catch (error) {
        console.error('Error fetching data:', error.message);
        throw error;
    }
}

module.exports = fetchAndDisplayPosts;