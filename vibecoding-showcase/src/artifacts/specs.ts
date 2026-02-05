export const PROPOSAL_CONTENT = `## Why

The current software development process often suffers from "blind coding," where requirements are vague, and there's a disconnect between intent and execution. The user wants to demonstrate a new workflow ("Vibe Coding") that solves this using AI, Context, and OpenSpec.

Instead of describing this process with static PowerPoint slides, we will build the product itself—a high-fidelity landing page—to serve as the presentation. This approach adheres to the "Show, don't tell" philosophy, demonstrating the power of the Vibe Coding workflow in real-time. The resulting application must be visually stunning ("premium"), responsive, and support Vietnamese content perfectly.

## What Changes

We will initialize a new Next.js project and build a single-page application that tells the Vibe Coding story.

Key changes:
- **New Project**: Initialize \`vibecoding-showcase\` with Next.js 14, Tailwind CSS, and Framer Motion.
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
- \`vibe-showcase-landing\`: The core visual structure, content, and responsive layout of the landing page.
- \`presentation-navigation\`: The logic for handling keyboard events, smooth scrolling, and section focusing for the presentation mode.

### Modified Capabilities
- None.
## Impact

- **New Codebase**: Creates the \`src\` directory and all initial app scaffolding.
- **Assets**: Requires managing fonts and potential image assets (though most will be CSS/Code generated).
- **Dependencies**: Adds \`framer-motion\`, \`lucide-react\`, \`clsx\`, \`tailwind-merge\`.
`;

export const DESIGN_CONTENT = `## Context

We are building "Vibe-Showcase: The Living Presentation", a single-page application that doubles as a slide deck for verifying the Vibe Coding workflow. The design is based on verified wireframes with a dark, cyberpunk/neon aesthetic. The content is adapting from a standard pitch to a "show, don't tell" interactive experience.

## Goals / Non-Goals

**Goals:**
- **Visual Impact**: Implement a "WOW" factor design with neon glows, glassmorphism, and smooth transitions.
- **Narrative Flow**: Ensure the user can navigate through the 6 sections exactly like a slide deck (keyboard support, snap scrolling).
- **Localization**: Perfect rendering of Vietnamese content using "Be Vietnam Pro".
- **Performance**: Maintain 60fps scrolling even with complex background animations.

**Non-Goals:**
- **Backend**: No database or server-side logic is required for this PoC.
- **Mobile First**: While responsiveness is needed, the primary target is a Desktop/Projector screen (16:9 or 16:10) for presentation purposes.

## Decisions

### 1. Framework & Stack
- **Next.js 14 (App Router)**: Chosen for performance, easy component architecture, and future scalability.
- **Tailwind CSS**: Mapped directly to the provided wireframe classes for rapid implementation.
- **Framer Motion**: Selected over CSS Keyframes for complex scroll-driven animations (e.g., the Parallax Pain Point bubbles, the Glowing Brain) and "slide" transitions.

### 2. Typography
- **Font**: **Be Vietnam Pro** (from \`next/font/google\`).
- **Rationale**: Specifically designed for Vietnamese legibility. It replaces the "Space Grotesk" from the wireframe to ensure safe diacritic rendering while maintaining a modern, tech feel.

### 3. Iconography
- **Library**: \`lucide-react\`.
- **Rationale**: Replaces \`Material Symbols\` from the wireframe. Lucide offers cleaner, more consistent SVG icons that work better with React/Next.js (tree-shakable).

### 4. Presentation Mode Logic
- **Mechanism**: A custom \`usePresentation\` hook.
- **Behavior**: Listens for \`KeyDown\` (ArrowDown/Up, Space). Smoothly scrolls to the next/prev \`section\` ID.
- **Snap**: CSS Scroll Snap (\`scroll-snap-type: y mandatory\`) will be used as a fallback and to enhance the "slide" feel.

## Risks / Trade-offs

- **Performance Risk**: Heavy use of \`backdrop-filter: blur\` and box-shadow glows can cause jank on some browsers/hardware.
    - *Mitigation*: Use \`transform: translate3d\` for animations. Limit blur radius variability during scroll.
- **Content Fit**: Trying to fit too much text into a "slide" section can break the layout.
    - *Mitigation*: Design sections with fixed height constraints (\`min-h-screen\`) and prioritize headlines over long-form text (as per typical presentation rules).
`;

export const TASKS_CONTENT = `## 1. Project Scaffolding

- [x] 1.1 Initialize Next.js project \`vibecoding-showcase\` with TypeScript, Tailwind CSS, ESLint.
- [x] 1.2 Configure \`tailwind.config.ts\` with color palette (Neon Purple, Cyan, Dark Background) and \`flyonui\` (if needed, or custom utilities).
- [x] 1.3 Install dependencies: \`framer-motion\`, \`lucide-react\`, \`clsx\`, \`tailwind-merge\`.
- [x] 1.4 Configure "Be Vietnam Pro" font in \`app/layout.tsx\` and \`tailwind.config.ts\`.

## 2. Core Architecture & UI

- [x] 2.1 Create \`components/ui\` directory and standard atomic components (Button, Card, Badge).
- [x] 2.2 Implement \`components/ui/NeonText\` (Gradient text component).
- [x] 2.3 Implement \`components/ui/GlowCard\` (Glassmorphism card with border glow).
- [x] 2.4 Create \`hooks/use-presentation.ts\` for keyboard navigation and scroll snapping logic.

## 3. Section Implementation

- [x] 3.1 Implement **Section 01: Hero**.
    - Full-screen layout with centered "VIBE CODING 2026" text.
    - Add blur-to-focus animation on mount.
- [x] 3.2 Implement **Section 02: Pain Point**.
    - Layout with "HI VỌNG KHÔNG PHẢI LÀ CHIẾN LƯỢC" headline.
    - Create \`ParallaxBubbles\` component for floating chat bubbles (Vietnamese text).
- [x] 3.3 Implement **Section 03: The Brain**.
    - "2M TOKEN CONTEXT" display.
    - Create \`Orb\` component using CSS box-shadow animation and Framer Motion pulse.
- [x] 3.4 Implement **Section 04: The Vision**.
    - "Stitch Interface" mockups using CSS Grid.
    - Add intersection observer to trigger "slide-switch" animation for variants.
- [x] 3.5 Implement **Section 05: The Blueprint**.
    - "Code Terminal" window styling.
    - Add "Typewriter" effect for JSON content rendering.
- [x] 3.6 Implement **Section 06: Mastery**.
    - Grid layout for 4 Agent Rules cards.
    - Add "INITIATE Q&A" button with hover expansion effect.

## 4. Final Polish & Integration

- [x] 4.1 Assemble all sections in \`app/page.tsx\` within the Presentation Wrapper.
- [x] 4.2 Verify keyboard navigation smoothness and Scroll Snap behavior.
- [x] 4.3 Check Vietnamese font rendering across all sections.
- [x] 4.4 Audit performance (Lighthouse) and optimize animations (use \`transform\`).
`;

export const SPEC_NAVIGATION = `## ADDED Requirements

### Requirement: Keyboard Navigation
- **Keys**: \`ArrowDown\`, \`ArrowRight\`, \`Space\` (Go Next), \`ArrowUp\`, \`ArrowLeft\` (Go Previous).
- **Behavior**: When pressed, the window must smooth-scroll to the exact top of the target section.
- **Loop**: Navigation should stop at the last section (no looping back to start).

### Requirement: Section Snapping
- **Mechanism**: The scrolling must feel sticky. If the user stops scrolling halfway, the viewport should snap to the nearest section.
- **CSS**: Use \`scroll-snap-type: y mandatory\` on the container and \`scroll-snap-align: start\` on sections.

#### Scenario: User presses Arrow Down
- **WHEN** the user is viewing Section 01 and presses Arrow Down
- **THEN** the viewport scrolls smoothly to Section 02 and aligns perfectly with the top edge.

#### Scenario: User resizes window
- **WHEN** the user resizes the browser window
- **THEN** the active section must remain in view (re-snap).
`;

export const SPEC_LANDING = `## ADDED Requirements

### Requirement: Global Visual Style
The application must strictly adhere to the "Vibe Coding" aesthetic: Dark Mode (\`#050505\`), Neon Accents (Purple/Cyan), and Glassmorphism.
- **Font**: "Be Vietnam Pro" must be used for all text to ensure Vietnamese legibility.
- **Layout**: Single-page scroll layout.
- **Responsive**: Content must fit 16:9 desktop screens perfectly (no overflowing critical text).

### Requirement: Section 01 - Hero (The Intent)
- **Content**: Headline "VIBE CODING", Subhead "CODING BY INTENT, NOT SYNTAX".
- **Visual**: Neon gradient text, subtle background grid.
- **Animation**: Text blur-to-focus on load.

### Requirement: Section 02 - Pain Point (The Reality)
- **Headline**: "HI VỌNG KHÔNG PHẢI LÀ CHIẾN LƯỢC" (Hope is not a strategy).
- **Elements**: Floating "Chat Bubbles" representing bad bad prompts/feedback.
    - Bubble 1: "Làm đại cái giao diện đi" (Just make a random UI).
    - Bubble 2: "Code chạy được là được" (If it runs, it's fine).
    - Bubble 3: "Sửa dùm cái lỗi này gấp" (Fix this error ASAP).
    - Bubble 4 (Glitch Style): "Error: Feature not found".
- **Interaction**: Bubbles move with parallax effect relative to scroll speed.

### Requirement: Section 03 - The Brain (Gemini 1.5 Pro)
- **Central Element**: 3D-style Glowing Orb representing the AI Core.
- **Text**: "2M TOKEN CONTEXT" prominently displayed.
- **Animation**: The orb "breathes" (scales/pulses) and emits particles.

### Requirement: Section 04 - The Vision (Stitch Interface)
- **Visual**: A mock interface of "Stitch" showing UI generation.
- **Variants**: Show 3 distinct UI cards representing iterations.
- **Annotation**: Overlay a "hand-drawn" circle on one element indicating a modification request.

### Requirement: Section 05 - The Blueprint (OpenSpec)
- **Visual**: A code terminal window displaying a JSON schema.
- **Content**: Keys \`project\`, \`mission\`, \`rules\` (DRY, ATOMIC_COMMITS).
- **Animation**: "Typewriter" effect filling in the JSON keys as the user views the section.

### Requirement: Section 06 - Mastery (Agent Rules)
- **Content**: 4 Cards displaying Core Rules:
    1.  **DRY Principle**: "Không lặp lại logic" (Don't repeat logic).
    2.  **Anti-Fat Code**: "Hàm dưới 50 dòng" (Functions under 50 lines).
    3.  **Atomic Commits**: "Mỗi commit một tính năng" (One feature per commit).
    4.  **No Side Effects**: "Hàm thuần khiết" (Pure functions).
- **CTA**: Large "INITIATE Q&A" button at the bottom.

#### Scenario: Scroll Transition
- **WHEN** the user scrolls down
- **THEN** elements from the next section should reveal themselves (Fade Up / Slide In) smoothly.
`;
