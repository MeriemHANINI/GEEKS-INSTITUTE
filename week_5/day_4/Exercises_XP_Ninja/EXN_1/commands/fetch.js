const axios = require('axios');

async function fetchData(url = 'https://jsonplaceholder.typicode.com/posts/1') {
    try {
        console.log('📡 Fetching data from:', url);
        
        const response = await axios.get(url);
        const data = response.data;
        
        console.log('✅ Data fetched successfully!');
        console.log('📊 Response data:');
        console.log(JSON.stringify(data, null, 2));
        
        return data;
    } catch (error) {
        console.error('❌ Error fetching data:', error.message);
        throw error;
    }
}

module.exports = fetchData;