const fs = require('fs');
const { exec } = require('child_process');
const path = require('path');

// Get input and output filenames from command line arguments
const inputFile = process.argv[2];
const outputFile = process.argv[3];

if (!inputFile || !outputFile) {
    console.error('Usage: node convert-mermaid.js <input-file> <output-file>');
    process.exit(1);
}

// Read the mermaid content from the markdown file
const mermaidContent = fs.readFileSync(inputFile, 'utf8');

// Save the mermaid content to a temporary file
const tempFile = 'temp-diagram.mmd';
fs.writeFileSync(tempFile, mermaidContent);

// Convert to SVG using mmdc
const mmdc = path.join('node_modules', '.bin', 'mmdc');

const command = `"${mmdc}" -i "${tempFile}" -o "${outputFile}"`;

exec(command, (error, stdout, stderr) => {
    // Clean up temp file
    fs.unlinkSync(tempFile);
    
    if (error) {
        console.error('Error converting diagram:', error);
        process.exit(1);
    }
    
    console.log(`Successfully converted diagram to ${outputFile}`);
});
