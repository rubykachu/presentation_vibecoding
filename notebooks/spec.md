# OpenSpec: Vibe Coding 2026 Presentation Landing Page

## 1. Project Vision & Context
- **Name:** Vibe-Showcase: The Living Presentation
- **Mission:** A high-fidelity, one-page landing page that serves as a presentation for "Vibe Coding".
- **Core Message:** Transforming vague AI prompts into engineering precision via a structured design review process.
- **Design Source:** Validated Wireframes from Stitch (Cyberpunk Minimalist / Dark Mode).

---

## 2. Technical Stack & Architecture
- **Framework:** Next.js 14+ (App Router).
- **Styling:** Tailwind CSS.
- **Animations:** Framer Motion (Scroll-driven & State-based).
- **Performance Goal:** 60 FPS smooth scrolling on 16:9 presentation screens.

### Global Constraints (Agent Rules)
- **DRY Principle:** No logic repetition. Abstract shared components for cards and glowing effects.
- **Anti-Fat Code:** Keep components under 150 lines. Use sub-components for complex sections.
- **No Side Effects:** Pure functional components for UI.
- **Atomic Commits:** Implementation must be done section-by-section with verification steps.

---

## 3. Section-by-Section Specifications

### Section 01: Hero (The Intent)
- **Visual:** "VIBE CODING 2026" in neon gradient (Blue/Violet).
- **Sub-headline:** "CODING BY INTENT, NOT SYNTAX".
- **Animation:** Text "Blur-to-Focus" on page load. Subtle floating grid lines in background.

### Section 02: Pain Point (The Reality)
- **Headline:** "HOPE IS NOT A STRATEGY" (Glitch effect font).
- **Visual elements:** Floating chat bubbles containing "bad prompts" (e.g., "Make it pop").
- **Interaction:** Free scroll. Bubbles should have a slight parallax effect as the user scrolls.

### Section 03: The Brain (Gemini 1.5 Pro)
- **Central Element:** A glowing 3D-like orb with "2M TOKEN CONTEXT" text.
- **Animation:** Pulse effect synced with a "data particle" background.
- **Key Note:** Highlighting 2,000,000 token memory as the project's long-term context guardian.

### Section 04: The Vision (Stitch Interface)
- **Visual:** Showcase of 3 UI variants generated in real-time. Include "Circle-to-Change" annotations.
- **Animation:** Variants should "cross-fade" or "slide-switch" based on scroll position.

### Section 05: The Blueprint (OpenSpec.JSON)
- **Visual:** A stylized macOS-like code terminal displaying a JSON schema.
- **Content:** Show keys: `project_vision`, `rules`, `constraints`.
- **Animation:** Typewriter effect for the JSON keys when the section enters viewport.

### Section 06: Mastery (Agent Rules & Q&A)
- **Visual:** Four "Mastery Cards" (DRY, Anti-Fat Code, Atomic Commits, No Side Effects).
- **Final Action:** "INITIATE Q&A" Button with a pulsing border.
- **Transition:** On click, trigger a "Full-screen Neon Expansion" overlay before showing the final Q&A text.

---

## 4. Interaction & Performance Spec
- **Scroll Type:** Free scroll (cuộn tự do) with momentum.
- **Reveal Strategy:** Items slide up or fade in when `whileInView` is triggered.
- **Constraint:** Animations must be hardware-accelerated (use `transform` and `opacity` only).

---

## 5. Decision Log (Mandatory Artifact)
| Decision | Rationale | Alternatives Considered |
| :--- | :--- | :--- |
| **Free Scroll** | Better for exploration and storytelling flow. | Sticky Scroll (too rigid). |
| **Framer Motion** | Industry standard for high-performance React animations. | CSS Keyframes (harder to sync with scroll). |
| **OpenSpec Source** | Prevents AI hallucination during implementation. | Direct Prompting (too high risk/unpredictable). |
| **Gemini 1.5 Pro** | Huge context window (2M tokens) ensures project consistency. | Other LLMs with smaller context. |

---

## 6. Exit Criteria (Implementation Ready)
- [ ] Understanding Lock confirmed.
- [ ] Tech stack initialized.
- [ ] Section-by-section verification plan active.
- [ ] All visual assets from Stitch mapped to components.

---
**Status: APPROVED FOR IMPLEMENTATION**
