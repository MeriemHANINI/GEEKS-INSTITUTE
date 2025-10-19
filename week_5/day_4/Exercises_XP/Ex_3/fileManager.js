const fs = require('fs');

function readFile(filename) {
  try {
    return fs.readFileSync(filename, 'utf8');
  } catch (error) {
    return `Error reading file: ${error.message}`;
  }
}

function writeFile(filename, content) {
  try {
    fs.writeFileSync(filename, content);
    return `Successfully wrote to ${filename}`;
  } catch (error) {
    return `Error writing to file: ${error.message}`;
  }
}

module.exports = { readFile, writeFile };