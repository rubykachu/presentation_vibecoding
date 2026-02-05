## ADDED Requirements

### Requirement: Global Visual Style
The application must strictly adhere to the "Vibe Coding" aesthetic: Dark Mode (`#050505`), Neon Accents (Purple/Cyan), and Glassmorphism.
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
- **Content**: Keys `project`, `mission`, `rules` (DRY, ATOMIC_COMMITS).
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
