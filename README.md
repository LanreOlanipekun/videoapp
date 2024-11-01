# Video information display application

This application connects to youtube API to display the video details and comments.

This project is a React application built with Vite and TypeScript, featuring linting, formatting, and optimized build configurations.

## Table of Contents

- [Installation](#installation)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/LanreOlanipekun/videoapp
   cd videoapp

   ```

2. Install dependencies:

   ```bash
   npm install

   or

   yarn install

   ```

3. Add environment variable

Add the necessary environment variable in the .env file. Check .env.example

## Available scripts

1. Development

### Starts the development server with Vite. The app will be accessible at http://localhost:5173

```bash
npm run dev

```

2. Build

### Builds the app for production. It first compiles TypeScript (tsc -b) and then bundles the project using Vite.

```bash
npm run build

```

3. lint

### Lints all JavaScript, TypeScript, and JSON files in the src directory according to ESLint configurations.

```bash
npm run lint

```

4. lint

### Automatically fixes any fixable linting issues.

```bash
npm run lint:fix

```

5. preview

### Previews the production build locally.

```bash
npm run preview

```

6. Formatting

### Formats all files in the src directory using Prettier to ensure consistent code style.

```bash
npm run format

```

## Project struture

## File Structure

- public
- src
  - assets
  - components
  - Container
  - hooks
  - interface
  - network
  - routes
  - Screens
  - utils
- App.css
- APP.tsx
- index.css
- main.tsx

## Technology used

- React: A JavaScript library for building user interfaces
- Vite: A fast development environment and build tool
- TypeScript: A typed superset of JavaScript
- ESLint: A static analysis tool to find and fix issues in JavaScript code
- Prettier: A code formatter for consistent style
