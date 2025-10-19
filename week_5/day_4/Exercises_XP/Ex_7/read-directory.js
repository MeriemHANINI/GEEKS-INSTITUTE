const fs = require('fs');
const path = require('path');

function readDirectory(directoryPath) {
  try {
    const files = fs.readdirSync(directoryPath);
    console.log(`📁 Files in ${directoryPath}:`);
    
    files.forEach((file, index) => {
      const filePath = path.join(directoryPath, file);
      const stats = fs.statSync(filePath);
      const type = stats.isDirectory() ? '📁 Directory' : '📄 File';
      console.log(`${index + 1}. ${file} - ${type}`);
    });
    
    return files;
  } catch (error) {
    console.error(`❌ Error reading directory: ${error.message}`);
    return [];
  }
}

// Read current directory
readDirectory('.');