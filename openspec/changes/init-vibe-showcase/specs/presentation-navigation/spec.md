## ADDED Requirements

### Requirement: Keyboard Navigation
- **Keys**: `ArrowDown`, `ArrowRight`, `Space` (Go Next), `ArrowUp`, `ArrowLeft` (Go Previous).
- **Behavior**: When pressed, the window must smooth-scroll to the exact top of the target section.
- **Loop**: Navigation should stop at the last section (no looping back to start).

### Requirement: Section Snapping
- **Mechanism**: The scrolling must feel sticky. If the user stops scrolling halfway, the viewport should snap to the nearest section.
- **CSS**: Use `scroll-snap-type: y mandatory` on the container and `scroll-snap-align: start` on sections.

#### Scenario: User presses Arrow Down
- **WHEN** the user is viewing Section 01 and presses Arrow Down
- **THEN** the viewport scrolls smoothly to Section 02 and aligns perfectly with the top edge.

#### Scenario: User resizes window
- **WHEN** the user resizes the browser window
- **THEN** the active section must remain in view (re-snap).
