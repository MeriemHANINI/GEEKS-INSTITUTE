const fs = require('fs').promises;
const path = require('path');

async function readFile(filePath) {
    try {
        // Resolve the full path
        const fullPath = path.resolve(filePath);
        console.log(`📖 Reading file: ${fullPath}`);
        
        const content = await fs.readFile(fullPath, 'utf8');
        
        console.log('✅ File read successfully!');
        console.log('📄 File content:');
        console.log('─'.repeat(50));
        console.log(content);
        console.log('─'.repeat(50));
        
        return content;
    } catch (error) {
        console.error('❌ Error reading file:', error.message);
        throw error;
    }
}

module.exports = readFile;