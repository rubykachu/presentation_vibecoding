"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { NeonText } from "@/components/ui/neon-text";
import { FileText, Palette, ScrollText, BrainCircuit, Terminal, Zap, ShieldCheck, Repeat, ArrowRight, RefreshCw } from "lucide-react";
import { useCallback, useEffect } from "react";

const steps = [
  { id: "prd", label: "PRD", sub: "Define", icon: FileText, color: "text-pink-400", border: "border-pink-500/50", glow: "shadow-[0_0_20px_-5px_rgba(236,72,153,0.5)]" },
  { id: "design", label: "Design", sub: "Visualize", icon: Palette, color: "text-purple-400", border: "border-purple-500/50", glow: "shadow-[0_0_20px_-5px_rgba(168,85,247,0.5)]" },
  { id: "spec", label: "Spec", sub: "Architect", icon: ScrollText, color: "text-cyan-400", border: "border-cyan-500/50", glow: "shadow-[0_0_20px_-5px_rgba(34,211,238,0.5)]" },
  { id: "skills", label: "Skills", sub: "Equip", icon: BrainCircuit, color: "text-indigo-400", border: "border-indigo-500/50", glow: "shadow-[0_0_20px_-5px_rgba(99,102,241,0.5)]" },
  { id: "code", label: "Code", sub: "Execute", icon: Terminal, color: "text-emerald-400", border: "border-emerald-500/50", glow: "shadow-[0_0_20px_-5px_rgba(52,211,153,0.5)]" },
];

const results = [
  { label: "Velocity", sub: "Development Speed", value: "10x", icon: Zap, gradient: "from-yellow-400/20 to-orange-500/20", border: "border-yellow-500/30", text: "text-yellow-400" },
  { label: "Precision", sub: "Code Quality", value: "100%", icon: ShieldCheck, gradient: "from-blue-400/20 to-indigo-500/20", border: "border-blue-500/30", text: "text-blue-400" },
  { label: "Stability", sub: "Maintainability", value: "A+", icon: Repeat, gradient: "from-green-400/20 to-emerald-500/20", border: "border-green-500/30", text: "text-green-400" },
];

export function SummarySection() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = useCallback(
    ({ clientX, clientY }: MouseEvent) => {
      mouseX.set(clientX);
      mouseY.set(clientY);
    },
    [mouseX, mouseY]
  );

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  const background = useMotionTemplate`radial-gradient(
    600px circle at ${mouseX}px ${mouseY}px,
    rgba(157, 43, 238, 0.15),
    transparent 80%
  )`;

  return (
    <section
      id="summary"
      className="presentation-section relative w-full h-full min-h-screen flex flex-col items-center justify-center overflow-hidden py-20"
    >
      {/* === BACKGROUND LAYERS === */}
      <div className="absolute inset-0 bg-[#030303] -z-20" />

      {/* Mouse Spotlight Layer */}
      <motion.div
        className="absolute inset-0 opacity-100 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0"
        style={{
          background,
        }}
      />

      {/* Moving Gradient Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-purple-900/40 rounded-full blur-[120px] pointer-events-none -z-10"
        style={{ willChange: "transform, opacity" }}
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.7, 0.4],
          x: [0, -100, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-blue-900/30 rounded-full blur-[120px] pointer-events-none -z-10"
        style={{ willChange: "transform, opacity" }}
      />

      {/* Moving Grid */}
      <motion.div
        animate={{ backgroundPosition: ["0px 0px", "60px 60px"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20 -z-10"
        style={{ willChange: "background-position" }}
      />

      <div className="max-w-7xl w-full px-6 flex flex-col items-center gap-20 z-10">

        {/* === HEADER === */}
        <div className="text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "circOut" }}
          >
            <a href="/" className="group relative inline-block cursor-pointer">
              <NeonText
                as="h1"
                glow
                className="text-6xl md:text-8xl font-black tracking-tighter mb-4"
              >
                THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9d2bee] to-[#2bcdee]">FORMULA</span>
              </NeonText>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 text-[#2bcdee] text-xs font-mono tracking-widest whitespace-nowrap">
                <RefreshCw className="w-3 h-3" />
                <span>REPLAY_SESSION</span>
              </div>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-3 text-xl md:text-2xl font-light text-slate-300"
          >
            <span className="opacity-50">Not just coding.</span>
            <span className="font-mono text-[#2bcdee] font-bold border-b border-[#2bcdee]/30 pb-1">Prompt Engineering.</span>
          </motion.div>
        </div>

        {/* === PROCESS PIPELINE === */}
        <div className="w-full max-w-5xl mx-auto">
          <div className="relative flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4">

            {/* Connecting Laser Line */}
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#2bcdee]/30 to-transparent -z-10 hidden md:block" />

            {steps.map((step, idx) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + idx * 0.1 }}
                className="group relative flex flex-col items-center gap-4"
              >
                {/* Tech Node */}
                <div
                  className={`relative w-16 h-16 md:w-20 md:h-20 rounded-xl bg-[#0a0a0a]/80 backdrop-blur-md border ${step.border} flex items-center justify-center transition-all duration-300 md:group-hover:-translate-y-2 ${step.glow} z-10 hover:bg-[#151515]`}
                >
                  <step.icon className={`w-6 h-6 md:w-8 md:h-8 ${step.color} transition-transform duration-300 group-hover:scale-110`} strokeWidth={1.5} />

                  {/* Active Dot */}
                  <div className={`absolute -top-1 -right-1 w-2 h-2 rounded-full ${step.color.replace('text', 'bg')} shadow-[0_0_10px_currentColor]`} />
                </div>

                {/* Labels */}
                <div className="text-center">
                  <div className={`font-mono font-bold text-sm md:text-base ${step.color} tracking-widest uppercase`}>{step.label}</div>
                  <div className="text-[10px] text-slate-500 font-mono uppercase tracking-wider">{step.sub}</div>
                </div>

                {/* Arrow for Mobile */}
                {idx !== steps.length - 1 && (
                  <ArrowRight className="md:hidden w-5 h-5 text-slate-700 rotate-90 my-2" />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* === RESULT METRICS === */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
          {results.map((result, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.0 + idx * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`relative overflow-hidden rounded-2xl bg-white/[0.03] backdrop-blur-sm border ${result.border} p-6 md:p-8 flex flex-col items-center justify-center gap-4 group transition-all duration-500 hover:bg-white/[0.08]`}
            >
              <div className={`absolute inset-0 bg-gradient-to-b ${result.gradient} opacity-20`} />

              <div className="text-4xl md:text-5xl font-black text-white tracking-tighter z-10">
                {result.value}
              </div>
              <div className="flex flex-col items-center gap-1 z-10">
                <div className={`text-sm md:text-base font-bold ${result.text} uppercase tracking-widest`}>{result.label}</div>
                <div className="text-[10px] text-white/40 font-mono uppercase">{result.sub}</div>
              </div>

              {/* Scanline Effect */}
              <div className="absolute inset-0 bg-scanline opacity-5 pointer-events-none" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
