"use client";

import { usePresentation } from "@/hooks/use-presentation";
import { AnimatePresence, motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useMemo } from "react";

// Dynamic imports to optimize bundle size and hydration performance
const HeroSection = dynamic(() => import("@/components/sections/hero").then(mod => mod.HeroSection), {
  loading: () => <div className="w-full h-full bg-black/50" />
});
const PainPointSection = dynamic(() => import("@/components/sections/pain-point").then(mod => mod.PainPointSection));
const BrainSection = dynamic(() => import("@/components/sections/brain").then(mod => mod.BrainSection));
const VisionSection = dynamic(() => import("@/components/sections/vision").then(mod => mod.VisionSection));
const BlueprintSection = dynamic(() => import("@/components/sections/blueprint").then(mod => mod.BlueprintSection));
const MasterySection = dynamic(() => import("@/components/sections/mastery").then(mod => mod.MasterySection));
const SummarySection = dynamic(() => import("@/components/sections/summary").then(mod => mod.SummarySection));

const SECTION_IDS = [
  "hero",
  "pain-point",
  "brain",
  "vision",
  "blueprint",
  "mastery",
  "summary",
];

const SECTIONS = [
  HeroSection,
  PainPointSection,
  BrainSection,
  VisionSection,
  BlueprintSection,
  MasterySection,
  SummarySection,
];

export default function Home() {
  const { currentIndex, totalSections, goToSection } = usePresentation({
    sectionIds: SECTION_IDS,
  });

  const CurrentSection = SECTIONS[currentIndex];

  // Memoize transition props
  const transitionProps = useMemo(() => ({
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.05 },
    transition: { duration: 0.5, ease: [0.42, 0, 0.58, 1] as any }
  }), []);

  return (
    <main className="presentation-container relative w-full h-screen overflow-hidden bg-black text-white">
      {/* Progress Indicator */}
      <div className="fixed top-1/2 right-6 -translate-y-1/2 z-50 flex flex-col gap-2 max-md:hidden pointer-events-none">
        <div className="pointer-events-auto flex flex-col gap-2">
          {SECTION_IDS.map((id, idx) => (
            <button
              key={id}
              onClick={() => goToSection(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentIndex
                ? "bg-[#9d2bee] scale-150 shadow-[0_0_10px_rgba(157,43,238,0.8)]"
                : "bg-white/20 hover:bg-white/40"
                }`}
              aria-label={`Go to section ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Section Counter */}
      <div className="fixed bottom-6 right-6 z-50 font-mono text-xs text-white/50 max-md:hidden">
        <span className="text-[#9d2bee]">{String(currentIndex + 1).padStart(2, "0")}</span>
        <span className="mx-1">/</span>
        <span>{String(totalSections).padStart(2, "0")}</span>
      </div>

      {/* Keyboard hint */}
      <div className="fixed bottom-6 left-6 z-50 font-mono text-[10px] text-white/30 max-md:hidden flex items-center gap-2">
        <kbd className="px-1.5 py-0.5 rounded border border-white/10 bg-white/5">↑</kbd>
        <kbd className="px-1.5 py-0.5 rounded border border-white/10 bg-white/5">↓</kbd>
        <span>hoặc</span>
        <kbd className="px-1.5 py-0.5 rounded border border-white/10 bg-white/5">Space</kbd>
        <span>để điều hướng</span>
      </div>

      {/* Sections with AnimatePresence */}
      {/* Optimized: Removed blur filter, used opacity/scale instead. Added will-change for GPU layering. */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          {...transitionProps}
          style={{ willChange: "opacity, transform" }}
          className="w-full h-full"
        >
          <CurrentSection />
        </motion.div>
      </AnimatePresence>
    </main>
  );
}
