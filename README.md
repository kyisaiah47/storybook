# Personal Storybook Project

A customized Storybook setup for developing and organizing my UI components in isolation. This personal library showcases reusable components and design patterns with live previews and documentation.

---

## Features

- Develop and preview UI components independently.
- Structured documentation for components using stories.
- Leverage addons like controls, actions, and docs for richer developer experience.
- Serve components as a static site with `npm run build-storybook`.

---

## Tech Stack & Tools

- **Storybook** (React)
- Common addons: Controls, Actions, Docs, Viewport
- **React** component library
- **Node.js/NPM** package management

---

## Getting Started

1. Clone this repo:
   ```bash
   git clone https://github.com/kyisaiah47/storybook.git
   cd storybook
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start Storybook in development mode:
   ```bash
   npm run storybook
   ```
   Then open `http://localhost:6006` to explore your component stories.

4. Build a static Storybook site:
   ```bash
   npm run build-storybook
   ```
   The output will appear in the `storybook-static` directory — perfect for hosting.

---

## Project Structure

- `.storybook/`: Configuration for Storybook (main.js, preview.js, etc.)
- `src/components/`: Your reusable UI components
- `src/stories/`: Story files for showcasing each component's states
- `storybook-static/`: Built static site (after running `build-storybook`)

---

## License & Credits

This project is for **personal use**. See the LICENSE file for more details (if applicable).

---

## Contact & Feedback

Ideas, feedback, or questions? Reach out to **Isaiah Kim** via GitHub: [kyisaiah47](https://github.com/kyisaiah47)
