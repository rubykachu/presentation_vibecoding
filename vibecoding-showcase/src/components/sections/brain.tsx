"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { NeonText } from "@/components/ui/neon-text";
import { Code, History, BookOpen, Database, FileCode, Layers, Cpu, Zap, Sparkles } from "lucide-react";

// Floating data particles
const dataParticles = [
  { icon: Code, label: "repo_context.json", position: "top-[20%] left-[15%]", delay: 0 },
  { icon: History, label: "user_history_v2", position: "bottom-[25%] right-[15%]", delay: 0.7 },
  { icon: BookOpen, label: "docs_api_ref", position: "top-[15%] right-[20%]", delay: 0.3 },
];

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
        </motion.div>

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
