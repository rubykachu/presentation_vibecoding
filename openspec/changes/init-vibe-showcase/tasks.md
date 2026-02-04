## 1. Project Scaffolding

- [x] 1.1 Initialize Next.js project `vibecoding-showcase` with TypeScript, Tailwind CSS, ESLint.
- [x] 1.2 Configure `tailwind.config.ts` with color palette (Neon Purple, Cyan, Dark Background) and `flyonui` (if needed, or custom utilities).
- [x] 1.3 Install dependencies: `framer-motion`, `lucide-react`, `clsx`, `tailwind-merge`.
- [x] 1.4 Configure "Be Vietnam Pro" font in `app/layout.tsx` and `tailwind.config.ts`.

## 2. Core Architecture & UI

- [x] 2.1 Create `components/ui` directory and standard atomic components (Button, Card, Badge).
- [x] 2.2 Implement `components/ui/NeonText` (Gradient text component).
- [x] 2.3 Implement `components/ui/GlowCard` (Glassmorphism card with border glow).
- [x] 2.4 Create `hooks/use-presentation.ts` for keyboard navigation and scroll snapping logic.

## 3. Section Implementation

- [x] 3.1 Implement **Section 01: Hero**.
    - Full-screen layout with centered "VIBE CODING 2026" text.
    - Add blur-to-focus animation on mount.
- [x] 3.2 Implement **Section 02: Pain Point**.
    - Layout with "HI VỌNG KHÔNG PHẢI LÀ CHIẾN LƯỢC" headline.
    - Create `ParallaxBubbles` component for floating chat bubbles (Vietnamese text).
- [x] 3.3 Implement **Section 03: The Brain**.
    - "2M TOKEN CONTEXT" display.
    - Create `Orb` component using CSS box-shadow animation and Framer Motion pulse.
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

- [x] 4.1 Assemble all sections in `app/page.tsx` within the Presentation Wrapper.
- [x] 4.2 Verify keyboard navigation smoothness and Scroll Snap behavior.
- [x] 4.3 Check Vietnamese font rendering across all sections.
- [x] 4.4 Audit performance (Lighthouse) and optimize animations (use `transform`).
