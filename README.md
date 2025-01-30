# Phases of Life Presentation

A comprehensive presentation that explores the ten major phases of human life, from infancy to senior years. Each phase is illustrated with key points, essential actions, and detailed Mermaid diagrams.

## Project Structure

```
.
├── phases_of_life.html          # Main presentation file
└── life_phase_diagrams/         # Directory containing phase diagrams
    ├── phase1_infancy.md        # Mermaid diagram source
    ├── phase1_infancy.svg       # Generated diagram
    ├── phase2_childhood.md
    ├── phase2_childhood.svg
    └── ... (and so on for all phases)
```

## Features

- 10 detailed life phases with age ranges
- Interactive presentation using Remark.js
- Key points for each life phase
- Unique action verbs for each phase
- Visual diagrams showing relationships and developments
- Links to SVG visualizations that open in new tabs

## Life Phases Covered

1. Infancy (0-2 years)
2. Early Childhood (2-5 years)
3. School Age (6-12 years)
4. Adolescence (13-19 years)
5. Young Adulthood (20-29 years)
6. Career Building (30-39 years)
7. Mid-Life (40-49 years)
8. Mature Adulthood (50-64 years)
9. Retirement (65-75 years)
10. Senior Years (75+ years)

## Technology Stack

- HTML5
- CSS3
- Remark.js for presentations
- Mermaid for diagrams
- SVG for visualization

## How to Use

1. Open `phases_of_life.html` in a web browser
2. Navigate through slides using:
   - Arrow keys (←/→)
   - Spacebar
   - Enter key
3. Click on "View Phase Visualization" links to see detailed diagrams in new tabs

## Diagram Generation

The project uses Mermaid diagrams to visualize each life phase. The diagrams are:
- Written in Mermaid markdown syntax (.md files)
- Converted to SVG format for viewing
- Linked from the main presentation

## Styling

The presentation features:
- Clean, modern design
- Consistent color scheme
- Responsive layout
- Right-aligned verb boxes
- Gradient backgrounds
- Custom typography using Roboto font

## Development

To modify the presentation:
1. Edit `phases_of_life.html` for content changes
2. Modify Mermaid files in `life_phase_diagrams/` for diagram changes
3. Run the diagram converter to update SVGs
4. Test in a web browser

## Requirements

- Modern web browser with JavaScript enabled
- No server required (runs locally)
- Mermaid diagram converter for updating visualizations
