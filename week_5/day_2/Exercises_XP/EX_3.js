// Exercise 3: Convert to async/await
async function fetchStarship() {
    try {
        const response = await fetch("https://www.swapi.tech/api/starships/9/");
        
        // Check if response is successful
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Exercise 3 - Starship Data:');
        console.log(data.result);
    } catch (error) {
        console.error('Exercise 3 - Error fetching starship data:', error);
    }
}

// Call the async function
fetchStarship();