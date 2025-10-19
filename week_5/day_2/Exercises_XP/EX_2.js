// Exercise 2: Fetch 10 sun GIFs starting from position 2
fetch('https://api.giphy.com/v1/gifs/search?q=sun&limit=10&offset=2&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My')
    .then(response => {
        // Check if response is successful
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log('Exercise 2 - Sun GIFs:');
        console.log(data);
    })
    .catch(error => {
        console.error('Exercise 2 - Error fetching data:', error);
    });