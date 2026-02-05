"use client";

import { motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

import { Card, CardHeader, TerminalDots } from "@/components/ui/card";
import { Database, Cpu, GitBranch, Download, XCircle, CheckCircle2, AlertTriangle, Github, X, Copy, Check, FileText, Layout, CheckSquare, Terminal, FileJson, ChevronUp, ChevronDown, List } from "lucide-react";
import { NeonText } from "@/components/ui/neon-text";

// JSON content for typewriter effect
const jsonContent = `{
  "project": "VibeCoding_Platform",
  "version": "2.0.26",
  "context": {
    "mission": "Loại bỏ boilerplate. Đảm bảo flow.",
    "tech_stack": ["Next.js", "Tailwind", "Supabase"]
  },
  "rules": [
    {
      "id": "R-01",
      "principle": "DRY",
      "enforcement": true
    },
    {
      "id": "R-02",
      "principle": "ATOMIC_COMMITS",
      "max_lines": 50
    }
  ],
  "status": "OPTIMIZED"
}`;

// Typewriter hook
function useTypewriter(text: string, isInView: boolean, speed = 20) {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    if (!isInView) return;

    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, isInView, speed]);

  return displayText;
}

// === OPENSPEC CONTENT CONSTANTS ===
const PROPOSAL_CONTENT = `## Why

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

const DESIGN_CONTENT = `## Context

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

const TASKS_CONTENT = `## 1. Project Scaffolding

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

const SPEC_NAVIGATION = `## ADDED Requirements

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

const SPEC_LANDING = `## ADDED Requirements

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

// === OPENSPEC MODAL COMPONENT ===
function OpenSpecModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [activeTab, setActiveTab] = useState<'proposal' | 'design' | 'tasks' | 'specs'>('proposal');
  const [subTab, setSubTab] = useState<'landing' | 'navigation'>('landing');
  const [copied, setCopied] = useState(false);
  const contentRef = useRef<HTMLPreElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const getContent = () => {
    switch (activeTab) {
      case 'proposal': return PROPOSAL_CONTENT;
      case 'design': return DESIGN_CONTENT;
      case 'tasks': return TASKS_CONTENT;
      case 'specs': return subTab === 'landing' ? SPEC_LANDING : SPEC_NAVIGATION;
      default: return PROPOSAL_CONTENT;
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getContent());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleScroll = (direction: 'up' | 'down') => {
    if (!contentRef.current) return;
    const scrollAmount = 200;
    contentRef.current.scrollBy({
      top: direction === 'down' ? scrollAmount : -scrollAmount,
      behavior: 'smooth'
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div
        className="absolute inset-0 z-0 bg-transparent"
        onClick={onClose}
      />
      <div className="bg-[#0f1314] border border-[#2bcdee]/30 w-full max-w-4xl max-h-[85vh] rounded-2xl flex flex-col overflow-hidden shadow-2xl shadow-cyan-900/20 z-10 relative">

        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/5 bg-[#161b1d]">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 rounded-full border border-[#2bcdee] bg-transparent px-2.5 py-0.5 text-xs font-semibold text-[#2bcdee]">
              <FileJson className="w-3 h-3" /> OPENSPEC_ARTIFACTS
            </span>
            <span className="text-xs text-slate-500 font-mono hidden md:inline ml-2">init-vibe-showcase</span>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors text-slate-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex flex-col border-b border-white/5 bg-[#0f1314]">
          <div className="flex overflow-x-auto no-scrollbar">
            <button
              onClick={() => setActiveTab('proposal')}
              className={`flex-1 py-3 px-4 text-xs md:text-sm font-mono font-bold transition-all flex items-center justify-center gap-2 whitespace-nowrap ${activeTab === 'proposal'
                  ? 'bg-[#2bcdee]/10 text-[#2bcdee] border-b-2 border-[#2bcdee]'
                  : 'text-slate-500 hover:text-slate-300 hover:bg-white/5'
                }`}
            >
              <FileText className="w-4 h-4" /> PROPOSAL
            </button>
            <div className="w-[1px] bg-white/5" />
            <button
              onClick={() => setActiveTab('design')}
              className={`flex-1 py-3 px-4 text-xs md:text-sm font-mono font-bold transition-all flex items-center justify-center gap-2 whitespace-nowrap ${activeTab === 'design'
                  ? 'bg-[#2bcdee]/10 text-[#2bcdee] border-b-2 border-[#2bcdee]'
                  : 'text-slate-500 hover:text-slate-300 hover:bg-white/5'
                }`}
            >
              <Layout className="w-4 h-4" /> DESIGN
            </button>
            <div className="w-[1px] bg-white/5" />
            <button
              onClick={() => setActiveTab('tasks')}
              className={`flex-1 py-3 px-4 text-xs md:text-sm font-mono font-bold transition-all flex items-center justify-center gap-2 whitespace-nowrap ${activeTab === 'tasks'
                  ? 'bg-[#2bcdee]/10 text-[#2bcdee] border-b-2 border-[#2bcdee]'
                  : 'text-slate-500 hover:text-slate-300 hover:bg-white/5'
                }`}
            >
              <CheckSquare className="w-4 h-4" /> TASKS
            </button>
            <div className="w-[1px] bg-white/5" />
            <button
              onClick={() => setActiveTab('specs')}
              className={`flex-1 py-3 px-4 text-xs md:text-sm font-mono font-bold transition-all flex items-center justify-center gap-2 whitespace-nowrap ${activeTab === 'specs'
                  ? 'bg-[#2bcdee]/10 text-[#2bcdee] border-b-2 border-[#2bcdee]'
                  : 'text-slate-500 hover:text-slate-300 hover:bg-white/5'
                }`}
            >
              <List className="w-4 h-4" /> SPECS
            </button>
          </div>

          {/* Sub-tabs for SPECS */}
          {activeTab === 'specs' && (
            <div className="flex bg-[#0a0a0a] border-t border-white/5">
              <button
                onClick={() => setSubTab('landing')}
                className={`py-2 px-4 text-[10px] md:text-xs font-mono font-bold transition-all border-r border-white/5 ${subTab === 'landing' ? 'text-[#2bcdee] bg-[#2bcdee]/5' : 'text-slate-500 hover:text-slate-300'
                  }`}
              >
                VIBE-SHOWCASE-LANDING
              </button>
              <button
                onClick={() => setSubTab('navigation')}
                className={`py-2 px-4 text-[10px] md:text-xs font-mono font-bold transition-all border-r border-white/5 ${subTab === 'navigation' ? 'text-[#2bcdee] bg-[#2bcdee]/5' : 'text-slate-500 hover:text-slate-300'
                  }`}
              >
                PRESENTATION-NAVIGATION
              </button>
            </div>
          )}
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-auto p-0 bg-[#0a0a0a] relative group">
          {/* Floating Scroll Controls */}
          <div className="absolute right-6 bottom-6 flex flex-col gap-2 z-30 opacity-20 hover:opacity-100 transition-opacity">
            <button
              onClick={() => handleScroll('up')}
              className="p-2 bg-[#1c2527] border border-[#2bcdee]/30 text-[#2bcdee] rounded hover:bg-[#2bcdee]/20 active:scale-95 transition-all"
            >
              <ChevronUp className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleScroll('down')}
              className="p-2 bg-[#1c2527] border border-[#2bcdee]/30 text-[#2bcdee] rounded hover:bg-[#2bcdee]/20 active:scale-95 transition-all"
            >
              <ChevronDown className="w-5 h-5" />
            </button>
          </div>

          <pre
            ref={contentRef}
            className="p-6 text-xs md:text-sm font-mono text-slate-300 whitespace-pre-wrap leading-relaxed h-full overflow-y-auto no-scrollbar scroll-smooth pb-20"
            style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
          >
            {getContent()}
          </pre>
        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-white/5 bg-[#161b1d] flex justify-end gap-3 z-20">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-md text-sm font-mono text-slate-400 hover:text-white transition-colors"
          >
            CLOSE
          </button>
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 px-4 py-2 rounded-md bg-[#2bcdee] text-black font-bold text-sm hover:bg-[#25b5d1] transition-colors"
          >
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            {copied ? "COPIED!" : "COPY_CONTENT"}
          </button>
        </div>
      </div>
    </div>
  );
}

const features = [
  {
    icon: Database,
    title: "Single Source of Truth",
    description:
      "OpenSpec loại bỏ sự mơ hồ. Agent đọc từ một định nghĩa JSON bất biến, đảm bảo không có hallucination trong scope dự án.",
  },
  {
    icon: Cpu,
    title: "Context Optimized",
    description:
      "Được thiết kế để phù hợp hoàn hảo với context window của LLM, ưu tiên cấu trúc và ánh xạ dependency.",
  },
  {
    icon: GitBranch,
    title: "Recursive Growth",
    description:
      "Spec phát triển theo thời gian. Khi agent hoàn thành task, chúng cập nhật OpenSpec, tạo vòng lặp tự document.",
  },
];

export function BlueprintSection() {
  const [isOpenSpecModalOpen, setIsOpenSpecModalOpen] = useState(false);
  const [particles, setParticles] = useState<Array<{ id: number; top: string; left: string; duration: number; delay: number }>>([]);

  useEffect(() => {
    setParticles([...Array(30)].map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: 5 + Math.random() * 5,
      delay: Math.random() * 5
    })));
  }, []);
  const codeRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(codeRef, { once: true, amount: 0.3 });
  const displayedJson = useTypewriter(jsonContent, isInView, 15);

  return (
    <section
      id="blueprint"
      className="presentation-section relative w-full py-24 px-6 overflow-hidden min-h-screen flex items-center"
    >
      {/* === SEAMLESS TRANSITION GRADIENTS === */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#050505] to-transparent z-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#050505] to-transparent z-20 pointer-events-none" />
      {/* === LIVING SCHEMATIC BACKGROUND === */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* 1. Technical Grid (Subtle) */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px]" />

        {/* 2. Drawing Lines Animation (Architectural feel) */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          <motion.path
            d="M0 100 H 1000"
            stroke="#2bcdee"
            strokeWidth="1"
            fill="none"
            strokeDasharray="10 10"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.5 }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          />
          <motion.path
            d="M100 0 V 800"
            stroke="#2bcdee"
            strokeWidth="1"
            fill="none"
            strokeDasharray="5 5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{ duration: 7, repeat: Infinity, ease: "linear", delay: 1 }}
          />
          <motion.path
            d="M800 0 V 800"
            stroke="#9d2bee"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.2 }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
        </svg>

        {/* 3. Floating Wireframe Geometry (Iso-Cubes) */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border border-[#2bcdee]/10 bg-[#2bcdee]/5 backdrop-blur-[1px]"
            style={{
              width: 60 + i * 40,
              height: 60 + i * 40,
              left: `${10 + i * 30}%`,
              top: `${20 + i * 20}%`,
              borderRadius: '10%'
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 90, 180],
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 15 + i * 5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}

        {/* 4. Data Flow Particles - Density Boosted */}
        {particles.map((particle) => (
          <motion.div
            key={`particle-${particle.id}`}
            className="absolute w-1 h-1 bg-[#2bcdee] rounded-full shadow-[0_0_8px_#2bcdee]"
            style={{
              left: particle.left,
              top: particle.top,
            }}
            animate={{
              y: [0, -100],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="max-w-[1100px] mx-auto w-full z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-4 text-center md:text-left md:flex-row md:items-end md:justify-between border-b border-[#2bcdee]/20 pb-8 mb-12 relative"
        >
          {/* Backlight enhancement */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[300px] h-[100px] bg-[#2bcdee]/20 blur-[80px] -z-10 pointer-events-none" />

          <div className="flex flex-col gap-2">
            <span className="font-mono text-[#2bcdee] text-xs tracking-widest uppercase mb-1 font-bold">
              Release version v1.1.1
            </span>
            <NeonText
              as="h1"
              glow
              className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9]"
            >
              OPENSPEC<span className="text-[#2bcdee]">.JSON</span>
            </NeonText>
            <a
              href="https://github.com/Fission-AI/OpenSpec"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-mono text-slate-400 hover:text-[#2bcdee] transition-colors mt-1 mb-1 uppercase tracking-wider group w-fit"
            >
              <Github className="w-5 h-5 group-hover:text-white transition-colors" />
              <span>Fission-AI/OpenSpec</span>
              <div className="h-[1px] w-0 bg-[#2bcdee] group-hover:w-full transition-all duration-300 pointer-events-none" />
            </a>
            <p className="text-slate-300 text-lg md:text-2xl max-w-2xl mt-2 font-light">
              Schema nghiêm ngặt định nghĩa toàn bộ spec dự án.
            </p>
          </div>
          <div className="flex flex-col items-end max-md:items-center max-md:w-full">
            <button
              onClick={() => setIsOpenSpecModalOpen(true)}
              className="bg-[#1c2527] border border-[#283639] hover:bg-[#2bcdee]/10 hover:border-[#2bcdee]/50 hover:text-[#2bcdee] px-4 py-2 rounded flex items-center gap-3 transition-all duration-300 group"
            >
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse group-hover:bg-[#2bcdee]" />
              <span className="font-mono text-sm text-slate-300 font-bold group-hover:text-[#2bcdee]">
                OPEN PROJECT_SPECS
              </span>
            </button>
          </div>
        </motion.div>

        <OpenSpecModal isOpen={isOpenSpecModalOpen} onClose={() => setIsOpenSpecModalOpen(false)} />

        {/* Blueprint Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full relative z-10">
          {/* Left: Explanation */}
          <div className="lg:col-span-4 flex flex-col justify-center gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: idx * 0.2, duration: 0.5 }}
                className="flex gap-4 items-start group"
                style={{ willChange: "opacity, transform" }}
              >
                <div className="mt-1 min-w-[32px] h-[32px] rounded-full bg-[#2bcdee]/10 border border-[#2bcdee]/30 flex items-center justify-center text-[#2bcdee] group-hover:bg-[#2bcdee] group-hover:text-black transition-colors">
                  <feature.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl">
                    {feature.title}
                  </h3>
                  <p className="text-slate-300 text-lg mt-1 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}

            <button className="mt-4 flex items-center gap-2 text-[#2bcdee] font-mono text-base font-bold hover:text-white transition-colors group w-fit">
              <Download className="w-5 h-5" />
              <span>DOWNLOAD_SCHEMA_V1.json</span>
              <div className="h-[1px] w-0 bg-[#2bcdee] group-hover:w-full transition-all duration-300" />
            </button>
          </div>



          {/* Right: Workflow Comparison Visualizer */}
          <motion.div
            ref={codeRef}
            className="lg:col-span-8 h-full min-h-[500px]"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            style={{ willChange: "opacity, transform" }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full text-left">

              {/* LEFT: THE CHAOS (Pain Point) */}
              <motion.div
                className="bg-[#1a1010] border border-red-500/20 rounded-2xl p-6 flex flex-col gap-6 relative overflow-hidden group hover:shadow-[0_0_30px_rgba(239,68,68,0.2)] transition-all duration-500 h-full"
                whileHover={{ y: -5 }}
              >
                {/* Background Noise & Pulse */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none"></div>
                <motion.div
                  animate={{ opacity: [0, 0.1, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 bg-red-600/10"
                />

                {/* Icon */}
                <div className="absolute top-4 right-4 p-2 opacity-30 group-hover:opacity-100 transition-opacity duration-300 bg-red-500/10 rounded-lg">
                  <AlertTriangle className="w-8 h-8 text-red-500" />
                </div>

                <div className="z-10 mt-2">
                  <div className="flex items-center gap-2 mb-6">
                    <span className="px-2 py-1 bg-red-500/5 border border-red-500/20 rounded text-red-500/80 text-[10px] font-bold font-mono tracking-wider">VIBE_MODE: RANDOM</span>
                  </div>

                  <div className="space-y-6">
                    {/* The Vague Prompt */}
                    <div className="bg-white/5 p-4 rounded-xl border border-white/5 backdrop-blur-sm">
                      <p className="text-[10px] text-slate-500 mb-2 font-mono uppercase tracking-wider">User Input</p>
                      <p className="text-slate-300 italic text-sm leading-relaxed">"Làm cái app quản lý giống Jira nha, nhưng đơn giản hơn, giao diện đẹp đẹp tí..."</p>
                    </div>

                    {/* The Expectation vs Reality */}
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center justify-between text-[10px] text-slate-500 font-mono tracking-wider">
                        <span>PROCESSING...</span>
                        <span className="text-red-500 animate-pulse">HALLUCINATING</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-red-500/60 w-full origin-left"
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 0.7 }}
                          transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                        />
                      </div>
                    </div>

                    {/* The Pain Points Output */}
                    <div className="space-y-3 pt-2">
                      {[
                        "Logic auth lỏng lẻo (Hardcoded)",
                        "UI vỡ trên Mobile",
                        "Database không scale được",
                        "Không có Design System"
                      ].map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 + (i * 0.1) }}
                          className="flex items-center gap-3 text-sm text-red-200/60"
                        >
                          <XCircle className="w-4 h-4 shrink-0 text-red-500/50" />
                          <span>{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* RIGHT: THE ORDER (OpenSpec Solution) */}
              <motion.div
                className="bg-[#0a1518] border border-[#2bcdee]/20 rounded-2xl p-6 flex flex-col gap-6 relative overflow-hidden group hover:shadow-[0_0_30px_rgba(43,205,238,0.2)] transition-all duration-500 h-full"
                whileHover={{ y: -5 }}
              >
                {/* Tech Grid Background */}
                <div className="absolute inset-0 bg-tech-grid opacity-[0.03] pointer-events-none"></div>
                <motion.div
                  animate={{ opacity: [0.05, 0.15, 0.05] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 bg-gradient-to-br from-[#2bcdee]/5 via-transparent to-[#9d2bee]/5"
                />

                {/* Icon */}
                <div className="absolute top-4 right-4 p-2 opacity-50 group-hover:opacity-100 transition-opacity duration-300 bg-[#2bcdee]/10 rounded-lg">
                  <CheckCircle2 className="w-8 h-8 text-[#2bcdee]" />
                </div>

                <div className="z-10 mt-2">
                  <div className="flex items-center gap-2 mb-6">
                    <span className="px-2 py-1 bg-[#2bcdee]/5 border border-[#2bcdee]/20 rounded text-[#2bcdee] text-[10px] font-bold font-mono tracking-wider">OPENSPEC_MODE: STRICT</span>
                  </div>

                  <div className="space-y-6">
                    {/* The Structured Input */}
                    <div className="bg-[#2bcdee]/5 p-4 rounded-xl border border-[#2bcdee]/10 font-mono text-xs relative overflow-hidden">
                      <motion.div
                        className="absolute top-0 left-0 w-full h-[1px] bg-[#2bcdee]/30"
                        animate={{ top: ["0%", "100%"] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      />
                      <div className="flex justify-between mb-3 opacity-40 text-[10px] uppercase tracking-wider">
                        <span>openspec.json</span>
                        <span>Schema</span>
                      </div>
                      <div className="text-[#2bcdee]/90 leading-relaxed">
                        <span className="text-purple-400">"auth"</span>: {"{"} <br />
                        &nbsp;&nbsp;<span className="text-purple-400">"provider"</span>: "clerk",<br />
                        &nbsp;&nbsp;<span className="text-purple-400">"mfa"</span>: true<br />
                        {"}"},<br />
                        <span className="text-purple-400">"ui"</span>: "vibe-ds"
                      </div>
                    </div>

                    {/* The Process */}
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center justify-between text-[10px] text-slate-500 font-mono tracking-wider">
                        <span>VALIDATION...</span>
                        <span className="text-[#2bcdee]">SECURE</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden relative">
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-[#9d2bee] to-[#2bcdee]"
                          animate={{ x: ["-100%", "100%"] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        />
                      </div>
                    </div>

                    {/* The Result */}
                    <div className="space-y-3 pt-2">
                      {[
                        "Secure Auth Flow (Middleware)",
                        "Responsive & Accessible UI",
                        "Scalable Schema (Drizzle)",
                        "Consistent Design Tokens"
                      ].map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + (i * 0.1) }}
                          className="flex items-center gap-3 text-sm text-[#2bcdee]/80"
                        >
                          <CheckCircle2 className="w-4 h-4 shrink-0 text-[#2bcdee]" />
                          <span>{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>
          </motion.div>
        </div>

      </div>
      {/* Overlay Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(43,205,238,0.03)_1px,transparent_1px)] bg-[size:100%_2rem] pointer-events-none" />
      {/* Decorative Lines */}
      <div className="absolute -left-6 top-20 w-6 h-[1px] bg-[#2bcdee]/40 hidden lg:block" />
      <div className="absolute -left-6 top-20 w-1 h-1 bg-[#2bcdee] rounded-full hidden lg:block" />
      <div className="absolute -right-8 bottom-10 text-[10px] font-mono text-[#2bcdee] hidden lg:block rotate-90 origin-left">
        VALIDATED
      </div>
    </section>
  );
}
