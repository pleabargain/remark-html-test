#repo
[text](https://github.com/pleabargain/remark-html-test)

# Remark.js Problem Solving Presentation

A presentation system built with Remark.js that demonstrates strategic problem-solving approaches through interactive slides and diagrams.

## Project Structure

- `problem_solving_process.html` - Main presentation file with slides and styling
- `problemsolvingmermaid.md` - Source file containing Mermaid diagram syntax
- `convert-mermaid.js` - Script to convert Mermaid diagrams to SVG
- `problem-solving-diagram.svg` - Generated SVG from Mermaid diagram
- `package.json` - Project dependencies and configuration

## Important Note About Mermaid

⚠️ Remark.js does not natively support Mermaid diagrams. This project implements a workaround:

1. Write diagrams in Mermaid syntax in `problemsolvingmermaid.md`
2. Use `convert-mermaid.js` to transform them into SVG files
3. Reference the generated SVG files in the presentation

## Setup

1. Install dependencies:
```bash
npm install
```

2. Convert Mermaid diagrams to SVG:
```bash
node convert-mermaid.js
```

## Creating/Updating Diagrams

1. Edit the Mermaid diagram in `problemsolvingmermaid.md`
2. Run the conversion script:
```bash
node convert-mermaid.js
```
3. The script will generate `problem-solving-diagram.svg`
4. Reference the SVG in your slides using:
```html
<a href="problem-solving-diagram.svg" target="_blank">...</a>
```

## Presentation Features

- Responsive design with custom styling
- Two-column layouts for content organization
- Custom SVG diagrams for visualization
- Interactive navigation
- Mobile-friendly interface

## Technical Details

### Dependencies

- Remark.js for slide presentation
- @mermaid-js/mermaid-cli for diagram conversion
- Custom fonts (Yanone Kaffeesatz, Droid Serif, Ubuntu Mono)

### Styling

The presentation includes custom CSS for:
- Color-coded probability indicators
- Two-column layouts
- Impact matrices
- Framework diagrams
- Highlighted sections

## Viewing the Presentation

1. Open `problem_solving_process.html` in a web browser
2. Use arrow keys or click to navigate slides
3. Click on diagram links to view full-size versions in new tabs

## Development

To modify the presentation:

1. Edit `problem_solving_process.html` to update slides
2. Update styles in the `<style>` section
3. For diagrams:
   - Edit `problemsolvingmermaid.md`
   - Run conversion script
   - Update references in slides

## Browser Compatibility

The presentation is tested and works in modern browsers:
- Chrome
- Firefox
- Safari
- Edge
