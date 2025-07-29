# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Development Commands

### Running Examples
- `npm run example` - Run the main demo with live reload (uses PORT env var, defaults to 9966)
- `npm run example-basic` - Run basic example
- `npm run example-persist` - Run persistence example

### Building
- `npm run dist` - Build standalone distribution file
- `npm run build-standalone` - Build minified standalone version
- `npm run remove-dist` - Clean dist directory

## Project Architecture

### Core Component Structure
The main ReactPivot component (`index.jsx`) orchestrates the entire pivot table functionality:
- Uses DataFrame library for data processing and calculations
- Manages state for dimensions, sorting, filtering, and pagination
- Renders three main sub-components: Dimensions, ColumnControl, and PivotTable

### Key Components
- **ReactPivot** (`index.jsx`) - Main component that handles data processing and state management
- **PivotTable** (`lib/pivot-table.jsx`) - Renders the actual table with pagination and sorting
- **Dimensions** (`lib/dimensions.jsx`) - Handles dimension selection and grouping controls
- **ColumnControl** (`lib/column-control.jsx`) - Manages column visibility

### Data Flow
1. Raw data (`rows`) is processed through DataFrame with `dimensions` and `reduce` function
2. User interactions (sorting, filtering, dimension changes) update state
3. `updateRows()` recalculates the DataFrame based on current state
4. Processed data flows to PivotTable for rendering

### Key Libraries
- **dataframe** - Core data processing and pivot calculations
- **lodash** - Utility functions (uses individual imports for better tree-shaking)
- **wildemitter** - Event bus for component communication
- **create-react-class** - React class component creation (legacy syntax)

### Build System
- Uses **browserify** with **budo** for development server
- **Reactify**, **envify**, and **cssify** transforms
- Standalone builds use **uglify-js** for minification
- Port configuration respects PORT environment variable

### Development Server
The project uses a local jump.sh proxy system. Check `pivot.jump.sh.log` for the current development URL (typically https://pivot.jump.sh).