const path = require('path');
const fs = require('fs');

function displayFileInfo() {
    const filePath = path.join(__dirname, 'data', 'example.txt');
    
    const fileExists = fs.existsSync(filePath);
    console.log(`File exists: ${fileExists}`);
    
    if (fileExists) {
        const stats = fs.statSync(filePath);
        console.log(`File size: ${stats.size} bytes`);
        console.log(`Created: ${stats.birthtime}`);
        console.log(`Modified: ${stats.mtime}`);
    } else {
        console.log('File does not exist');
    }
}

module.exports = displayFileInfo;