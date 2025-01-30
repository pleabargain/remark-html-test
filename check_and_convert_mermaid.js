const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

// Get directory from command line argument or use current directory
const targetDir = process.argv[2] || '.';

// Ensure the target directory exists
if (!fs.existsSync(targetDir)) {
    console.error(`Directory not found: ${targetDir}`);
    process.exit(1);
}

// Get all files in target directory
const files = fs.readdirSync(targetDir);

// Filter for .md files
const mdFiles = files.filter(file => path.extname(file) === '.md');

console.log(`Found ${mdFiles.length} markdown files in ${targetDir}`);

// Process each .md file
mdFiles.forEach(mdFile => {
    // Get full path for the files
    const mdPath = path.join(targetDir, mdFile);
    const baseName = path.basename(mdFile, '.md');
    const svgFile = path.join(targetDir, `${baseName}.svg`);
    
    // Check if matching .svg exists
    if (!fs.existsSync(svgFile)) {
        console.log(`\nProcessing ${mdFile}...`);
        
        // Read file content
        const content = fs.readFileSync(mdPath, 'utf8');
        
        // Extract the actual diagram content (not in a code block)
        const diagramContent = content.split('\n').filter(line => 
            !line.trim().startsWith('```') && 
            line.trim().length > 0
        ).join('\n');

        if (diagramContent.includes('graph TD') || 
            diagramContent.includes('graph LR') || 
            diagramContent.includes('flowchart')) {
            
            console.log(`Found Mermaid diagram in ${mdFile}`);
            const tempFile = path.join(process.cwd(), `temp-${baseName}.mmd`);
            
            try {
                // Write the diagram content to temp file
                fs.writeFileSync(tempFile, diagramContent);
                console.log(`Created temporary file: ${tempFile}`);
                console.log(`Diagram content:\n${diagramContent.substring(0, 100)}...`);
                
                // Use mermaid-cli directly
                const mmdc = path.join('node_modules', '.bin', 'mmdc');
                const command = `"${mmdc}" -i "${tempFile}" -o "${svgFile}"`;
                
                exec(command, (error, stdout, stderr) => {
                    try {
                        // Clean up temp file
                        if (fs.existsSync(tempFile)) {
                            fs.unlinkSync(tempFile);
                            console.log(`Cleaned up temporary file: ${tempFile}`);
                        }
                        
                        if (error) {
                            console.error(`Error converting ${mdFile}:`, error);
                            return;
                        }
                        console.log(`Successfully converted ${mdFile} to ${svgFile}`);
                    } catch (cleanupError) {
                        console.error('Error during cleanup:', cleanupError);
                    }
                });
            } catch (error) {
                console.error(`Error processing ${mdFile}:`, error);
                // Clean up temp file if it exists
                if (fs.existsSync(tempFile)) {
                    fs.unlinkSync(tempFile);
                }
            }
        } else {
            console.log(`${mdFile} does not contain Mermaid diagram syntax, skipping...`);
        }
    } else {
        console.log(`SVG already exists for ${mdFile}, skipping...`);
    }
}); 