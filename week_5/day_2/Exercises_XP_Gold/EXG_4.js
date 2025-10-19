const urls = [
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholder.typicode.com/posts", 
    "https://jsonplaceholder.typicode.com/albums"
];

const getData = async function() {
    try {
        const [users, posts, albums] = await Promise.all(urls.map(async url => {
            const response = await fetch(url);
            
            // Check if response is OK
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            return await response.json();
        }));
        
        console.log('users', users);
        console.log('posts', posts);
        console.log('albums', albums);
        
    } catch (error) {
        console.log('ooooooops', error);
    }
}

// Test with modified URL to trigger catch block
const urlsWithError = [
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholder.typicode.com/posts/invalid", // This will cause an error
    "https://jsonplaceholder.typicode.com/albums"
];

// Uncomment to test the error case:
// const getDataWithError = async function() {
//     try {
//         const [users, posts, albums] = await Promise.all(urlsWithError.map(async url => {
//             const response = await fetch(url);
//             if (!response.ok) {
//                 throw new Error(`HTTP error! status: ${response.status}`);
//             }
//             return await response.json();
//         }));
//         
//         console.log('users', users);
//         console.log('posts', posts);
//         console.log('albums', albums);
//         
//     } catch (error) {
//         console.log('ooooooops', error);
//     }
// }

getData();