## Context

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
- **Font**: **Be Vietnam Pro** (from `next/font/google`).
- **Rationale**: Specifically designed for Vietnamese legibility. It replaces the "Space Grotesk" from the wireframe to ensure safe diacritic rendering while maintaining a modern, tech feel.

### 3. Iconography
- **Library**: `lucide-react`.
- **Rationale**: Replaces `Material Symbols` from the wireframe. Lucide offers cleaner, more consistent SVG icons that work better with React/Next.js (tree-shakable).

### 4. Presentation Mode Logic
- **Mechanism**: A custom `usePresentation` hook.
- **Behavior**: Listens for `KeyDown` (ArrowDown/Up, Space). Smoothly scrolls to the next/prev `section` ID.
- **Snap**: CSS Scroll Snap (`scroll-snap-type: y mandatory`) will be used as a fallback and to enhance the "slide" feel.

## Risks / Trade-offs

- **Performance Risk**: Heavy use of `backdrop-filter: blur` and box-shadow glows can cause jank on some browsers/hardware.
    - *Mitigation*: Use `transform: translate3d` for animations. Limit blur radius variability during scroll.
- **Content Fit**: Trying to fit too much text into a "slide" section can break the layout.
    - *Mitigation*: Design sections with fixed height constraints (`min-h-screen`) and prioritize headlines over long-form text (as per typical presentation rules).
