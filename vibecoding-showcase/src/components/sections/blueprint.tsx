"use client";

import { motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

import { Card, CardHeader, TerminalDots } from "@/components/ui/card";
import { Database, Cpu, GitBranch, Download, XCircle, CheckCircle2, AlertTriangle } from "lucide-react";
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
            <p className="text-slate-300 text-lg md:text-2xl max-w-2xl mt-2 font-light">
              Nguồn sự thật duy nhất. Schema nghiêm ngặt định nghĩa toàn bộ
              vòng đời dự án.
            </p>
          </div>
          <div className="flex flex-col items-end max-md:items-center max-md:w-full">
            <div className="bg-[#1c2527] border border-[#283639] px-4 py-2 rounded flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="font-mono text-sm text-slate-300 font-bold">
                SYSTEM: ONLINE
              </span>
            </div>
          </div>
        </motion.div>

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
