// Exercise 1: Fetch hilarious GIFs from Giphy API
fetch('https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My')
    .then(response => {
        // Check if response is successful
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log('Exercise 1 - Hilarious GIFs:');
        console.log(data);
    })
    .catch(error => {
        console.error('Exercise 1 - Error fetching data:', error);
    });