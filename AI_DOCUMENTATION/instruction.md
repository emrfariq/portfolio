# AI Coding Assistant Instructions: HTML to Next.js Conversion

**Project Context:**
This project is a personal portfolio for Emir Muhammad Al Fariq, a Fullstack Developer and System Analyst with experience managing digital channels like That One Dude Media. The aesthetic is Maximalist, Brutalist-lite, and Typographic-driven with a Pop/Pastel color palette. The core tagline is "MER'S PORTFOLIO".

**Primary Objective:**
Convert the provided static HTML code into a clean, modular, and fully functional Next.js (React) application using Tailwind CSS. Retain the visual layout from the HTML while injecting advanced interactivity.

**Step-by-Step Execution Rules:**

1.  **JSX Parsing & Strict Conversion:**
    *   Convert all HTML `class` attributes to React `className`.
    *   Ensure all standalone HTML tags (`<img>`, `<hr>`, `<br>`, `<input>`) are properly self-closed for JSX syntax.
    *   Identify repetitive layout patterns in the HTML and map them out as reusable React components.

2.  **Modular Component Structure:**
    Break down the injected HTML body into the following distinct files:
    *   `components/Hero.jsx`: Must prominently feature the "MER'S PORTFOLIO" typography. Ensure the container is ready to accept static image/SVG assets exported from the UI design tool.
    *   `components/Projects.jsx`: Extract the section containing projects. Display exactly 3 featured projects. Structure the HTML of these cards so they resemble vintage movie tickets or concert passes. Provide a button/link to "View All Projects".
    *   `app/page.jsx`: The main landing page that imports and assembles the components.

3.  **Interactivity & Logic (The "Wow" Factor):**
    Implement the following features using React Hooks and Framer Motion:
    *   **3D Tilt Cards:** Add a subtle 3D tilt hover effect to the 3 featured project cards.
    *   **Custom Neon Cursor:** Create a global custom cursor component that tracks mouse coordinates. It should draw a subtle neon/glitch trail that fades out gracefully after 1-2 seconds.
    *   **Konami Code Easter Egg:** Create a `useKonamiCode` custom hook. When the sequence `ArrowUp, ArrowUp, ArrowDown, ArrowDown, ArrowLeft, ArrowRight, ArrowLeft, ArrowRight, b, a` is detected on the document body, toggle a global state that overrides the pastel Tailwind theme with a "Terminal/Hacker" mode (black backgrounds, monospace green text).

4.  **Asset Management:**
    *   Assume all images, SVGs, or media files referenced in the HTML are placed in the Next.js `/public` directory. Format all source paths accordingly (e.g., `src="/hero-asset.svg"`).

**Execution Protocol:**
Do not generate the entire application in a single massive code block. 
1. Acknowledge these instructions.
2. Wait for me to provide the raw HTML code.
3. Start by generating the layout and `Hero.jsx` component first for review before moving on to the interactive hooks and `Projects.jsx`.