## Why

The current software development process often suffers from "blind coding," where requirements are vague, and there's a disconnect between intent and execution. The user wants to demonstrate a new workflow ("Vibe Coding") that solves this using AI, Context, and OpenSpec.

Instead of describing this process with static PowerPoint slides, we will build the product itself—a high-fidelity landing page—to serve as the presentation. This approach adheres to the "Show, don't tell" philosophy, demonstrating the power of the Vibe Coding workflow in real-time. The resulting application must be visually stunning ("premium"), responsive, and support Vietnamese content perfectly.

## What Changes

We will initialize a new Next.js project and build a single-page application that tells the Vibe Coding story.

Key changes:
- **New Project**: Initialize `vibecoding-showcase` with Next.js 14, Tailwind CSS, and Framer Motion.
- **Typography**: Configure "Be Vietnam Pro" as the primary font to ensure beautiful, error-free Vietnamese text.
- **Content Structure**: Implement 6 distinct sections mapping to the presentation script:
    1.  **Hero**: The Intent (Vibe Coding 2026).
    2.  **Pain Point**: The Reality (floating chat bubbles with Vietnamese "pain" messages).
    3.  **The Brain**: Gemini 1.5 Pro & Context (Interactive Orb).
    4.  **The Vision**: Stitch Interface & Wireframing.
    5.  **The Blueprint**: OpenSpec Architecture (Visualized JSON).
    6.  **The Mastery**: Agent Rules & Conclusion.
- **Presentation Logic**: Add a "Presentation Mode" that allows smooth navigation between sections using keyboard controls (Arrow Keys, Space), treating each section like a slide.
- **Visuals**: Port existing wireframes (Neon/Dark Cyberpunk) to React components using Framer Motion for scroll-driven animations.

## Capabilities

### New Capabilities
- `vibe-showcase-landing`: The core visual structure, content, and responsive layout of the landing page.
- `presentation-navigation`: The logic for handling keyboard events, smooth scrolling, and section focusing for the presentation mode.

### Modified Capabilities
- None.
## Impact

- **New Codebase**: Creates the `src` directory and all initial app scaffolding.
- **Assets**: Requires managing fonts and potential image assets (though most will be CSS/Code generated).
- **Dependencies**: Adds `framer-motion`, `lucide-react`, `clsx`, `tailwind-merge`.
