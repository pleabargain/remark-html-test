# Remark.js Presentation Collection

A collection of interactive presentations built with Remark.js covering various topics from problem-solving approaches to modern language usage and life skills.

## Project Structure

- `modern_slang_guide.html` - Interactive guide to modern slang and terminology
- `phrases_used_in_daily_life.html` - Common phrases and their usage in everyday situations
- `problem_solving_process.html` - Strategic problem-solving approaches and methodologies
- `software_development_startup_phases.html` - Guide to different phases in software startup development
- `ten_slides_about_life_stuff.html` - Collection of life-related topics and insights
- `problemsolvingmermaid.md` - Source file containing Mermaid diagram syntax
- `convert-mermaid.js` - Script to convert Mermaid diagrams to SVG
- `problem-solving-diagram.svg` - Generated SVG from Mermaid diagram
- `package.json` - Project dependencies and configuration

## Important Note About Mermaid

⚠️ Remark.js does not natively support Mermaid diagrams. This project implements a workaround:

1. Write diagrams in Mermaid syntax in `problemsolvingmermaid.md`
2. Use `convert-mermaid.js` to transform them into SVG files
3. Reference the generated SVG files in the presentations

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

- Remark.js for slide presentations
- @mermaid-js/mermaid-cli for diagram conversion
- Custom fonts (Yanone Kaffeesatz, Droid Serif, Ubuntu Mono)

### Styling

The presentations include custom CSS for:
- Content organization and layout
- Visual hierarchy
- Interactive elements
- Responsive design
- Highlighted sections

## Viewing the Presentations

1. Open any of the HTML files in a web browser (e.g., `modern_slang_guide.html`)
2. Use arrow keys or click to navigate slides
3. Click on any diagram links to view full-size versions in new tabs

## Development

To modify or create new presentations:

1. Use any existing presentation file as a template
2. Update content in the HTML file
3. Modify styles in the `<style>` section as needed
4. For diagrams:
   - Edit `problemsolvingmermaid.md`
   - Run conversion script
   - Update references in slides

## Browser Compatibility

The presentations are tested and work in modern browsers:
- Chrome
- Firefox
- Safari
- Edge
