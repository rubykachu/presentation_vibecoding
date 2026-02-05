"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { NeonText } from "@/components/ui/neon-text";
import { Code, History, BookOpen, Database, FileCode, Layers, Cpu, Zap, Sparkles, X, Copy, Check, Terminal } from "lucide-react";

// Floating data particles
const dataParticles = [
  { icon: Code, label: "repo_context.json", position: "top-[20%] left-[15%]", delay: 0 },
  { icon: History, label: "user_history_v2", position: "bottom-[25%] right-[15%]", delay: 0.7 },
  { icon: BookOpen, label: "docs_api_ref", position: "top-[15%] right-[20%]", delay: 0.3 },
];

// === SKILL CONTENT CONSTANTS ===
const BRAINSTORMING_SKILL = `---
name: brainstorming
description: >
  Use this skill before any creative or constructive work
  (features, components, architecture, behavior changes, or functionality).
  This skill transforms vague ideas into validated designs through
  disciplined, incremental reasoning and collaboration.
---

# Brainstorming Ideas Into Designs

## Purpose

Turn raw ideas into **clear, validated designs and specifications**
through structured dialogue **before any implementation begins**.

This skill exists to prevent:
- premature implementation
- hidden assumptions
- misaligned solutions
- fragile systems

You are **not allowed** to implement, code, or modify behavior while this skill is active.

---

## Operating Mode

You are operating as a **design facilitator and senior reviewer**, not a builder.

- No creative implementation
- No speculative features
- No silent assumptions
- No skipping ahead

Your job is to **slow the process down just enough to get it right**.

---

## The Process

### 1️⃣ Understand the Current Context (Mandatory First Step)

Before asking any questions:

- Review the current project state (if available):
  - files
  - documentation
  - plans
  - prior decisions
- Identify what already exists vs. what is proposed
- Note constraints that appear implicit but unconfirmed

**Do not design yet.**

---

### 2️⃣ Understanding the Idea (One Question at a Time)

Your goal here is **shared clarity**, not speed.

**Rules:**

- Ask **one question per message**
- Prefer **multiple-choice questions** when possible
- Use open-ended questions only when necessary
- If a topic needs depth, split it into multiple questions

Focus on understanding:

- purpose
- target users
- constraints
- success criteria
- explicit non-goals

---

### 3️⃣ Non-Functional Requirements (Mandatory)

You MUST explicitly clarify or propose assumptions for:

- Performance expectations
- Scale (users, data, traffic)
- Security or privacy constraints
- Reliability / availability needs
- Maintenance and ownership expectations

If the user is unsure:

- Propose reasonable defaults
- Clearly mark them as **assumptions**

---

### 4️⃣ Understanding Lock (Hard Gate)

Before proposing **any design**, you MUST pause and do the following:

#### Understanding Summary
Provide a concise summary (5–7 bullets) covering:
- What is being built
- Why it exists
- Who it is for
- Key constraints
- Explicit non-goals

#### Assumptions
List all assumptions explicitly.

#### Open Questions
List unresolved questions, if any.

Then ask:

> “Does this accurately reflect your intent?
> Please confirm or correct anything before we move to design.”

**Do NOT proceed until explicit confirmation is given.**

---

### 5️⃣ Explore Design Approaches

Once understanding is confirmed:

- Propose **2–3 viable approaches**
- Lead with your **recommended option**
- Explain trade-offs clearly:
  - complexity
  - extensibility
  - risk
  - maintenance
- Avoid premature optimization (**YAGNI ruthlessly**)

This is still **not** final design.

---

### 6️⃣ Present the Design (Incrementally)

When presenting the design:

- Break it into sections of **200–300 words max**
- After each section, ask:

  > “Does this look right so far?”

Cover, as relevant:

- Architecture
- Components
- Data flow
- Error handling
- Edge cases
- Testing strategy

---

### 7️⃣ Decision Log (Mandatory)

Maintain a running **Decision Log** throughout the design discussion.

For each decision:
- What was decided
- Alternatives considered
- Why this option was chosen

This log should be preserved for documentation.

---

## After the Design

### 📄 Documentation

Once the design is validated:

- Write the final design to a durable, shared format (e.g. Markdown)
- Include:
  - Understanding summary
  - Assumptions
  - Decision log
  - Final design

Persist the document according to the project’s standard workflow.

---

### 🛠️ Implementation Handoff (Optional)

Only after documentation is complete, ask:

> “Ready to set up for implementation?”

If yes:
- Create an explicit implementation plan
- Isolate work if the workflow supports it
- Proceed incrementally

---

## Exit Criteria (Hard Stop Conditions)

You may exit brainstorming mode **only when all of the following are true**:

- Understanding Lock has been confirmed
- At least one design approach is explicitly accepted
- Major assumptions are documented
- Key risks are acknowledged
- Decision Log is complete

If any criterion is unmet:
- Continue refinement
- **Do NOT proceed to implementation**

---

## Key Principles (Non-Negotiable)

- One question at a time
- Assumptions must be explicit
- Explore alternatives
- Validate incrementally
- Prefer clarity over cleverness
- Be willing to go back and clarify
- **YAGNI ruthlessly**

---
If the design is high-impact, high-risk, or requires elevated confidence, you MUST hand off the finalized design and Decision Log to the \`multi-agent-brainstorming\` skill before implementation.
`;

const MULTI_AGENT_SKILL = `---
name: multi-agent-brainstorming
description: >
  Use this skill when a design or idea requires higher confidence,
  risk reduction, or formal review. This skill orchestrates a
  structured, sequential multi-agent design review where each agent
  has a strict, non-overlapping role. It prevents blind spots,
  false confidence, and premature convergence.
---

# Multi-Agent Brainstorming (Structured Design Review)

## Purpose

Transform a single-agent design into a **robust, review-validated design**
by simulating a formal peer-review process using multiple constrained agents.

This skill exists to:
- surface hidden assumptions
- identify failure modes early
- validate non-functional constraints
- stress-test designs before implementation
- prevent idea swarm chaos

This is **not parallel brainstorming**.
It is **sequential design review with enforced roles**.

---

## Operating Model

- One agent designs.
- Other agents review.
- No agent may exceed its mandate.
- Creativity is centralized; critique is distributed.
- Decisions are explicit and logged.

The process is **gated** and **terminates by design**.

---

## Agent Roles (Non-Negotiable)

Each agent operates under a **hard scope limit**.

### 1️⃣ Primary Designer (Lead Agent)

**Role:**
- Owns the design
- Runs the standard \`brainstorming\` skill
- Maintains the Decision Log

**May:**
- Ask clarification questions
- Propose designs and alternatives
- Revise designs based on feedback

**May NOT:**
- Self-approve the final design
- Ignore reviewer objections
- Invent requirements post-lock

---

### 2️⃣ Skeptic / Challenger Agent

**Role:**
- Assume the design will fail
- Identify weaknesses and risks

**May:**
- Question assumptions
- Identify edge cases
- Highlight ambiguity or overconfidence
- Flag YAGNI violations

**May NOT:**
- Propose new features
- Redesign the system
- Offer alternative architectures

Prompting guidance:
> “Assume this design fails in production. Why?”

---

### 3️⃣ Constraint Guardian Agent

**Role:**
- Enforce non-functional and real-world constraints

Focus areas:
- performance
- scalability
- reliability
- security & privacy
- maintainability
- operational cost

**May:**
- Reject designs that violate constraints
- Request clarification of limits

**May NOT:**
- Debate product goals
- Suggest feature changes
- Optimize beyond stated requirements

---

### 4️⃣ User Advocate Agent

**Role:**
- Represent the end user

Focus areas:
- cognitive load
- usability
- clarity of flows
- error handling from user perspective
- mismatch between intent and experience

**May:**
- Identify confusing or misleading aspects
- Flag poor defaults or unclear behavior

**May NOT:**
- Redesign architecture
- Add features
- Override stated user goals

---

### 5️⃣ Integrator / Arbiter Agent

**Role:**
- Resolve conflicts
- Finalize decisions
- Enforce exit criteria

**May:**
- Accept or reject objections
- Require design revisions
- Declare the design complete

**May NOT:**
- Invent new ideas
- Add requirements
- Reopen locked decisions without cause

---

## The Process

### Phase 1 — Single-Agent Design

1. Primary Designer runs the **standard \`brainstorming\` skill**
2. Understanding Lock is completed and confirmed
3. Initial design is produced
4. Decision Log is started

No other agents participate yet.

---

### Phase 2 — Structured Review Loop

Agents are invoked **one at a time**, in the following order:

1. Skeptic / Challenger
2. Constraint Guardian
3. User Advocate

For each reviewer:
- Feedback must be explicit and scoped
- Objections must reference assumptions or decisions
- No new features may be introduced

 Primary Designer must:
- Respond to each objection
- Revise the design if required
- Update the Decision Log

---

### Phase 3 — Integration & Arbitration

The Integrator / Arbiter reviews:
- the final design
- the Decision Log
- unresolved objections

The Arbiter must explicitly decide:
- which objections are accepted
- which are rejected (with rationale)

---

## Decision Log (Mandatory Artifact)

The Decision Log must record:

- Decision made
- Alternatives considered
- Objections raised
- Resolution and rationale

No design is considered valid without a completed log.

---

## Exit Criteria (Hard Stop)

You may exit multi-agent brainstorming **only when all are true**:

- Understanding Lock was completed
- All reviewer agents have been invoked
- All objections are resolved or explicitly rejected
- Decision Log is complete
- Arbiter has declared the design acceptable

If any criterion is unmet:
- Continue review
- Do NOT proceed to implementation
If this skill was invoked by a routing or orchestration layer, you MUST report the final disposition explicitly as one of: APPROVED, REVISE, or REJECT, with a brief rationale.
---

## Failure Modes This Skill Prevents

- Idea swarm chaos
- Hallucinated consensus
- Overconfident single-agent designs
- Hidden assumptions
- Premature implementation
- Endless debate

---

## Key Principles

- One designer, many reviewers
- Creativity is centralized
- Critique is constrained
- Decisions are explicit
- Process must terminate

---

## Final Reminder

This skill exists to answer one question with confidence:

> “If this design fails, did we do everything reasonable to catch it early?”

If the answer is unclear, **do not exit this skill**.
`;

// === SKILL MODAL COMPONENT ===
function SkillModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [activeTab, setActiveTab] = useState<'brainstorming' | 'multi-agent'>('brainstorming');
  const [copied, setCopied] = useState(false);

  const content = activeTab === 'brainstorming' ? BRAINSTORMING_SKILL : MULTI_AGENT_SKILL;

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div
        className="absolute inset-0 z-0 bg-transparent"
        onClick={onClose}
      />
      <div className="bg-[#0f1314] border border-[#9d2bee]/30 w-full max-w-4xl max-h-[85vh] rounded-2xl flex flex-col overflow-hidden shadow-2xl shadow-purple-900/20 z-10">

        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/5 bg-[#161b1d]">
          <div className="flex items-center gap-2">
            <Badge variant="subtle" className="border border-[#9d2bee] text-[#9d2bee] gap-1 bg-transparent">
              <Terminal className="w-3 h-3" /> SKILL_PROTOCOL_DB
            </Badge>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors text-slate-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-white/5 bg-[#0f1314]">
          <button
            onClick={() => setActiveTab('brainstorming')}
            className={`flex-1 py-3 px-4 text-xs md:text-sm font-mono font-bold transition-all ${activeTab === 'brainstorming'
              ? 'bg-[#9d2bee]/10 text-[#9d2bee] border-b-2 border-[#9d2bee]'
              : 'text-slate-500 hover:text-slate-300 hover:bg-white/5'
              }`}
          >
            SKILL_01: BRAINSTORMING
          </button>
          <div className="w-[1px] bg-white/5" />
          <button
            onClick={() => setActiveTab('multi-agent')}
            className={`flex-1 py-3 px-4 text-xs md:text-sm font-mono font-bold transition-all ${activeTab === 'multi-agent'
              ? 'bg-[#9d2bee]/10 text-[#9d2bee] border-b-2 border-[#9d2bee]'
              : 'text-slate-500 hover:text-slate-300 hover:bg-white/5'
              }`}
          >
            SKILL_02: MULTI_AGENT
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-auto p-0 bg-[#0a0a0a] relative group">
          <pre className="p-6 text-xs md:text-sm font-mono text-slate-300 whitespace-pre-wrap leading-relaxed">
            {content}
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
            className="flex items-center gap-2 px-4 py-2 rounded-md bg-[#9d2bee] text-white font-bold text-sm hover:bg-[#8b26d4] transition-colors"
          >
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            {copied ? "COPIED!" : "COPY_CONTENT"}
          </button>
        </div>
      </div>
    </div>
  );
}

// Client-side StarField to prevent hydration mismatch
function StarField() {
  const [mounted, setMounted] = useState(false);

  // Memoize random values to avoid recalculation on re-renders
  const stars = useState(() =>
    [...Array(20)].map(() => ({
      x: (Math.random() - 0.5) * 1000,
      y: (Math.random() - 0.5) * 800,
      duration: Math.random() * 2 + 1,
      delay: Math.random() * 2
    }))
  )[0];

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((star, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute top-1/2 left-1/2 w-1 h-1 bg-white rounded-full"
          initial={{ opacity: 0, x: 0, y: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0],
            x: star.x,
            y: star.y,
            scale: [0, 2]
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            ease: "linear",
            delay: star.delay
          }}
          style={{ willChange: "transform, opacity" }}
        />
      ))}
    </div>
  );
}

export function BrainSection() {
  const [isSkillModalOpen, setIsSkillModalOpen] = useState(false);

  return (
    <section
      id="brain"
      className="presentation-section relative w-full py-24 overflow-hidden min-h-screen flex items-center"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#9d2bee]/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 md:px-10 lg:px-20 w-full relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-2 mb-12 text-center items-center"
        >
          <Badge variant="neon">The Brain</Badge>
          <NeonText
            as="h2"
            glow
            gradient="purple-cyan"
            className="text-4xl md:text-6xl font-black leading-tight tracking-[-0.015em]"
          >
            GEMINI 3.0 PRO
          </NeonText>
          <a
            href="https://gemini.google.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-mono text-slate-400 hover:text-[#9d2bee] transition-colors mt-2 mb-2 uppercase tracking-wider group w-fit"
          >
            <Sparkles className="w-4 h-4 group-hover:text-white transition-colors" />
            <span>gemini.google.com</span>
            <div className="h-[1px] w-0 bg-[#9d2bee] group-hover:w-full transition-all duration-300 pointer-events-none" />
          </a>

          <p className="text-slate-300 max-w-[800px] text-xl md:text-2xl mt-4 font-light">
            Thấu hiểu toàn diện kiến trúc, duy trì ngữ cảnh tuyệt đối. Khi dữ liệu trở thành bản năng, bằng chính tư duy và phong cách của bạn.
          </p>

          <button
            onClick={() => setIsSkillModalOpen(true)}
            className="mt-2 text-[10px] font-mono text-[#9d2bee]/70 hover:text-[#9d2bee] border border-[#9d2bee]/20 hover:border-[#9d2bee]/50 hover:bg-[#9d2bee]/10 bg-[#9d2bee]/5 px-3 py-1.5 rounded transition-all duration-300 uppercase tracking-widest flex items-center gap-2"
          >
            <Terminal className="w-3 h-3" />
            Access Skill Protocol
          </button>
        </motion.div>

        <SkillModal isOpen={isSkillModalOpen} onClose={() => setIsSkillModalOpen(false)} />

        {/* Central Visualization Area */}
        <div className="relative w-full min-h-[700px] flex items-center justify-center mt-8 perspective-1000">

          {/* Background: Warp Speed Effect (Client-side only to prevent mismatch) */}
          <StarField />

          {/* LEFT CLUSTER: CODEBASE ANATOMY */}
          <div className="absolute left-0 md:left-10 top-1/2 -translate-y-1/2 w-64 hidden lg:flex flex-col gap-4">
            <h3 className="text-[#2bcdee] font-mono text-sm tracking-widest text-right mb-4 border-b border-[#2bcdee]/30 pb-2">
              RAW_DATA_STREAM
            </h3>
            {dataParticles.slice(0, 3).map((p, i) => (
              <motion.div
                key={`left-${i}`}
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.2 }}
                className="bg-[#0a1012]/80 border border-[#2bcdee]/30 p-3 rounded-l-md rounded-r-none border-r-0 ml-auto flex items-center gap-3 w-fit hover:bg-[#2bcdee]/10 transition-colors"
              >
                <span className="text-xs font-mono text-slate-400">{p.label}</span>
                <p.icon className="w-5 h-5 text-[#2bcdee]" />
                {/* Connection Line to Center */}
                <div className="absolute right-0 top-1/2 w-[200px] h-[1px] bg-gradient-to-r from-[#2bcdee]/50 to-transparent pointer-events-none origin-left rotate-[15deg]"></div>
              </motion.div>
            ))}
          </div>

          {/* RIGHT CLUSTER: USER CONTEXT */}
          <div className="absolute right-0 md:right-10 top-1/2 -translate-y-1/2 w-64 hidden lg:flex flex-col gap-4">
            <h3 className="text-[#9d2bee] font-mono text-sm tracking-widest text-left mb-4 border-b border-[#9d2bee]/30 pb-2">
              INTENT_ANALYSIS
            </h3>
            {dataParticles.slice(3, 6).map((p, i) => (
              <motion.div
                key={`right-${i}`}
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.2 }}
                className="bg-[#150a18]/80 border border-[#9d2bee]/30 p-3 rounded-r-md rounded-l-none border-l-0 mr-auto flex items-center gap-3 w-fit flex-row-reverse hover:bg-[#9d2bee]/10 transition-colors"
              >
                <span className="text-xs font-mono text-slate-400">{p.label}</span>
                <p.icon className="w-5 h-5 text-[#9d2bee]" />
              </motion.div>
            ))}
          </div>

          {/* CENTER: THE ORB */}
          <div className="relative z-10">
            {/* Animated Neural Network SVG (Reduced Opacity) */}
            <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none opacity-30" viewBox="0 0 1000 1000">
              <defs>
                <linearGradient id="orb-connect" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="transparent" />
                  <stop offset="50%" stopColor="#9d2bee" />
                  <stop offset="100%" stopColor="transparent" />
                </linearGradient>
              </defs>
              {[0, 60, 120, 180, 240, 300].map((angle, i) => {
                // Use fixed precision to avoid hydration mismatch
                const x2 = (500 + Math.cos(angle * Math.PI / 180) * 400).toFixed(1);
                const y2 = (500 + Math.sin(angle * Math.PI / 180) * 400).toFixed(1);

                return (
                  <motion.line
                    key={i}
                    x1="500"
                    y1="500"
                    x2={x2}
                    y2={y2}
                    stroke="url(#orb-connect)"
                    strokeWidth="1"
                    initial={{ strokeDasharray: "10 200", strokeDashoffset: 200 }}
                    animate={{ strokeDashoffset: 0 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: i }}
                  />
                );
              })}
            </svg>

            {/* The Main Sphere */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center"
            >
              {/* Outer Rotating Rings */}
              <div className="absolute inset-0 rounded-full border border-[#9d2bee]/20 animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-8 rounded-full border border-dashed border-[#2bcdee]/20 animate-[spin_15s_linear_infinite_reverse]" />

              {/* Inner Pulsing Core */}
              <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-16 rounded-full bg-gradient-to-br from-[#9d2bee]/40 to-[#2bcdee]/40 blur-2xl"
              />

              {/* Core Text */}
              <div className="relative z-20 flex flex-col items-center justify-center text-center bg-black/40 backdrop-blur-sm rounded-full w-48 h-48 border border-white/10 shadow-[0_0_50px_rgba(157,43,238,0.3)]">
                <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter drop-shadow-[0_0_15px_rgba(157,43,238,0.8)]">
                  2M
                </h1>
                <span className="text-sm md:text-base font-bold text-[#9d2bee] tracking-[0.2em] uppercase mt-1">
                  Token Context
                </span>
                <div className="flex gap-1 mt-2">
                  <div className="w-1 h-3 bg-[#2bcdee] animate-pulse" />
                  <div className="w-1 h-3 bg-[#2bcdee] animate-pulse delay-75" />
                  <div className="w-1 h-3 bg-[#2bcdee] animate-pulse delay-150" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
