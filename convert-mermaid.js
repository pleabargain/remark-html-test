const fs = require('fs');
const { exec } = require('child_process');
const path = require('path');

// Read the mermaid content from the markdown file
const markdownContent = fs.readFileSync('problemsolvingmermaid.md', 'utf8');

// Extract the mermaid diagram content (between ```mermaid and ```)
const mermaidMatch = markdownContent.match(/```mermaid\s*([\s\S]*?)```/);

if (!mermaidMatch) {
    console.error('No mermaid diagram found in the markdown file');
    process.exit(1);
}

// Save the mermaid content to a temporary file
const mermaidContent = mermaidMatch[1];
const tempFile = 'temp-diagram.mmd';
fs.writeFileSync(tempFile, mermaidContent);

// Convert to SVG using mmdc
const outputFile = 'problem-solving-diagram.svg';
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
