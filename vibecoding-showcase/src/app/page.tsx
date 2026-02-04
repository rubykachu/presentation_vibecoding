"use client";

import { usePresentation } from "@/hooks/use-presentation";
import { HeroSection } from "@/components/sections/hero";
import { PainPointSection } from "@/components/sections/pain-point";
import { BrainSection } from "@/components/sections/brain";
import { VisionSection } from "@/components/sections/vision";
import { BlueprintSection } from "@/components/sections/blueprint";
import { MasterySection } from "@/components/sections/mastery";
import { AnimatePresence, motion } from "framer-motion";

const SECTION_IDS = [
  "hero",
  "pain-point",
  "brain",
  "vision",
  "blueprint",
  "mastery",
];

const SECTIONS = [
  HeroSection,
  PainPointSection,
  BrainSection,
  VisionSection,
  BlueprintSection,
  MasterySection,
];

export default function Home() {
  const { currentIndex, totalSections, goToSection } = usePresentation({
    sectionIds: SECTION_IDS,
  });

  const CurrentSection = SECTIONS[currentIndex];

  return (
    <main className="presentation-container relative w-full h-screen overflow-hidden bg-black text-white">
      {/* Progress Indicator */}
      <div className="fixed top-1/2 right-6 -translate-y-1/2 z-50 flex flex-col gap-2 max-md:hidden">
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
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 30, filter: "blur(5px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -30, filter: "blur(5px)" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="w-full h-full"
        >
          <CurrentSection />
        </motion.div>
      </AnimatePresence>
    </main>
  );
}
