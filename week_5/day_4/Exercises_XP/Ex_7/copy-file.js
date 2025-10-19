const fs = require('fs');

function copyFile(source, destination) {
  try {
    const content = fs.readFileSync(source, 'utf8');
    fs.writeFileSync(destination, content);
    console.log(`✅ Successfully copied ${source} to ${destination}`);
  } catch (error) {
    console.error(`❌ Error: ${error.message}`);
  }
}

// Copy from source.txt to destination.txt
copyFile('source.txt', 'destination.txt');