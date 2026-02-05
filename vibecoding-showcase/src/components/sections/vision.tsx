"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { RefreshCw, Pencil, CheckCircle, Zap } from "lucide-react";
import { NeonText } from "@/components/ui/neon-text";

// UI Card mockups for Stitch variants
const uiVariants = [
  {
    status: "generating",
    title: "Generating...",
    icon: RefreshCw,
    iconClass: "text-[#9d2bee] animate-spin",
  },
  {
    status: "editing",
    title: "User Profile v2.tsx",
    icon: Pencil,
    iconClass: "text-white/50",
    isMain: true,
  },
  {
    status: "complete",
    title: "Vibe Matched",
    icon: CheckCircle,
    iconClass: "text-green-400",
  },
];

export function VisionSection() {
  const [nodes, setNodes] = useState<Array<{ id: number; r: number; x: number; y: number; duration: number; delay: number }>>([]);

  useEffect(() => {
    setNodes([...Array(8)].map((_, i) => ({
      id: i,
      r: 2 + Math.random() * 2,
      x: Math.random() * 1000,
      y: Math.random() * 800,
      duration: 5 + Math.random() * 5,
      delay: Math.random() * 5
    })));
  }, []);
  return (
    <section
      id="vision"
      className="presentation-section relative w-full py-24 min-h-screen overflow-hidden"
    >
      {/* === SEAMLESS TRANSITION GRADIENTS === */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#050505] to-transparent z-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#050505] to-transparent z-20 pointer-events-none" />
      {/* === HOLOGRAPHIC NEURAL BACKGROUND === */}
      <div className="absolute inset-0 bg-[#050505] -z-20" />

      {/* 1. Aurora Waves (Soft Moving Gradients) */}
      <div className="absolute inset-0 opacity-30 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/40 via-[#050505] to-[#050505]" />

      <motion.div
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-[30%] -left-[10%] w-[70%] h-[70%] bg-purple-600/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none -z-10"
        style={{ willChange: "transform" }}
      />
      <motion.div
        animate={{
          backgroundPosition: ["100% 50%", "0% 50%", "100% 50%"],
          scale: [1.1, 1, 1.1]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] bg-blue-600/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none -z-10"
        style={{ willChange: "transform" }}
      />

      {/* 2. Neural Synapses (Connecting Lines) */}
      <svg className="absolute inset-0 w-full h-full opacity-30 pointer-events-none -z-10">
        <defs>
          <linearGradient id="synapse-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#9d2bee" stopOpacity="0" />
            <stop offset="50%" stopColor="#9d2bee" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#2bcdee" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[...Array(6)].map((_, i) => (
          <motion.path
            key={i}
            d={`M${-100 + i * 200} ${100 + Math.sin(i) * 200} Q ${500 + i * 100} ${500 + Math.cos(i) * 300} ${1500} ${200 + i * 150}`}
            stroke="url(#synapse-grad)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 0.4, 0], x: [0, 100] }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.5
            }}
          />
        ))}
        {/* Floating Data Nodes */}
        {nodes.map((node) => (
          <motion.circle
            key={`node-${node.id}`}
            r={node.r}
            fill="#fff"
            initial={{ x: node.x, y: node.y, opacity: 0 }}
            animate={{
              y: [0, -100],
              opacity: [0, 0.8, 0],
              scale: [0, 1.5, 0]
            }}
            transition={{
              duration: node.duration,
              repeat: Infinity,
              delay: node.delay
            }}
            style={{ willChange: "transform, opacity" }}
          />
        ))}
      </svg>
      <div className="max-w-[1200px] mx-auto px-4 md:px-10 lg:px-20 w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-10 items-start md:items-end justify-between mb-32"
        >
          <div className="flex flex-col gap-4 max-w-[600px]">
            <Badge variant="default">The Vision</Badge>
            <NeonText
              as="h2"
              glow
              gradient="purple-cyan"
              className="text-4xl md:text-6xl font-black leading-tight tracking-tighter"
            >
              STITCH INTERFACE
            </NeonText>
            <a
              href="https://stitch.withgoogle.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-mono text-slate-400 hover:text-[#2bcdee] transition-colors mt-1 mb-2 uppercase tracking-wider group w-fit"
            >
              {/* Stylized Google G Logo */}
              <svg className="w-5 h-5 fill-current group-hover:text-white transition-colors" viewBox="0 0 24 24">
                <path d="M12.0003 20.45C7.29177 20.45 3.51538 16.6312 3.51538 11.9688C3.51538 7.30625 7.29177 3.4875 12.0003 3.4875C14.2866 3.4875 16.2736 4.3125 17.8091 5.75625L15.3341 8.2125C14.7154 7.63125 13.6283 6.9 12.0003 6.9C9.25538 6.9 6.97488 9.16875 6.97488 11.9688C6.97488 14.7687 9.25538 17.0375 12.0003 17.0375C15.2104 17.0375 16.4061 14.8313 16.6124 13.0688H12.0003V9.84375H19.9599C20.0836 10.425 20.1455 11.0063 20.1455 11.6687C20.1455 16.6313 16.7981 20.45 12.0003 20.45Z" />
              </svg>
              <span>stitch.withgoogle.com</span>
              <div className="h-[1px] w-0 bg-[#2bcdee] group-hover:w-full transition-all duration-300 transform origin-left" />
            </a>
            <p className="text-slate-300 text-xl md:text-2xl font-light">
              Code theo tốc độ của suy nghĩ. Khoanh tròn, prompt và tinh chỉnh
              UI variant trong vài giây.
            </p>
          </div>

          <div className="flex gap-4 mt-20">
            <div className="flex flex-col gap-1 items-end">
              <div className="flex items-center gap-2 text-[#9d2bee] font-bold">
                <Zap className="w-5 h-5" />
                <span className="text-lg">Real-time</span>
              </div>
              <span className="text-sm text-slate-400 uppercase tracking-wider">
                Generation
              </span>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="flex flex-col gap-1 items-end">
              <div className="flex items-center gap-2 text-white font-bold">
                <Pencil className="w-5 h-5" />
                <span className="text-lg">Annotate</span>
              </div>
              <span className="text-sm text-slate-400 uppercase tracking-wider">
                Control
              </span>
            </div>
          </div>
        </motion.div>

        {/* UI Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {uiVariants.map((variant, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className={`group relative flex flex-col rounded-xl overflow-hidden border h-[400px] ${variant.isMain
                ? "border-[#9d2bee]/50 bg-[#2a1e35] shadow-[0_0_30px_rgba(157,43,238,0.15)] md:-translate-y-4"
                : "border-white/5 bg-[#2a1e35] opacity-70 hover:opacity-100"
                } transition-all duration-300`}
              style={{ willChange: "opacity, transform" }}
            >
              {/* Card Header */}
              <div className="p-4 border-b border-white/5 flex items-center justify-between bg-white/5">
                <div className="flex gap-2">
                  <div
                    className={`w-3 h-3 rounded-full ${variant.isMain ? "bg-red-500" : "bg-white/20"
                      }`}
                  />
                  <div
                    className={`w-3 h-3 rounded-full ${variant.isMain ? "bg-yellow-500" : "bg-white/20"
                      }`}
                  />
                  <div
                    className={`w-3 h-3 rounded-full ${variant.isMain ? "bg-green-500" : "bg-white/20"
                      }`}
                  />
                </div>
                <div className={`flex items-center gap-2 ${variant.iconClass}`}>
                  <variant.icon className="w-5 h-5" />
                  <span className="text-sm font-mono uppercase font-bold">
                    {variant.title}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col gap-4 h-full relative bg-[#1a1022]/30">
                {variant.status === "generating" && (
                  <>
                    {/* Skeleton Loader */}
                    <div className="w-1/3 h-8 rounded bg-white/10 animate-pulse" />
                    <div className="w-full h-32 rounded-lg bg-white/5 animate-pulse overflow-hidden relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-[shimmer_1.5s_infinite]" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="h-20 rounded-lg bg-white/5 animate-pulse" />
                      <div className="h-20 rounded-lg bg-white/5 animate-pulse" />
                    </div>
                    <div className="w-2/3 h-4 rounded bg-white/10 animate-pulse mt-auto" />
                  </>
                )}

                {variant.status === "editing" && (
                  <>
                    {/* Mock User Profile UI */}
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600" />
                      <div>
                        <div className="h-5 w-32 bg-white rounded mb-2" />
                        <div className="h-3 w-20 bg-white/30 rounded" />
                      </div>
                    </div>
                    <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                      <div className="flex justify-between mb-2">
                        <div className="h-3 w-16 bg-white/50 rounded" />
                        <div className="h-3 w-8 bg-[#9d2bee] rounded" />
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-1.5">
                        <div
                          className="bg-[#9d2bee] h-1.5 rounded-full"
                          style={{ width: "70%" }}
                        />
                      </div>
                    </div>
                    <div className="flex gap-2 mt-auto">
                      <div className="flex-1 h-10 rounded bg-white/10" />
                      <div className="flex-1 h-10 rounded bg-[#9d2bee] text-white flex items-center justify-center text-sm font-bold">
                        Save
                      </div>
                    </div>

                    {/* STITCH ANNOTATION OVERLAY */}
                    <div className="absolute inset-0 z-20 pointer-events-none">
                      {/* Hand Drawn Circle SVG */}
                      <svg
                        className="absolute top-[80px] left-[15px] w-[260px] h-[100px]"
                        fill="none"
                        viewBox="0 0 300 120"
                      >
                        <path
                          className="drop-shadow-[0_0_8px_rgba(157,43,238,0.8)]"
                          d="M20 50 C 40 10, 250 10, 280 50 C 290 80, 200 110, 150 110 C 80 110, 10 90, 20 50"
                          stroke="#9d2bee"
                          strokeDasharray="10 5"
                          strokeLinecap="round"
                          strokeWidth="3"
                        />
                      </svg>
                      {/* Prompt Tooltip */}
                      <motion.div
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="absolute top-[170px] right-[20px] bg-black/90 border border-[#9d2bee]/40 rounded-lg p-4 shadow-2xl backdrop-blur-md max-w-[240px]"
                      >
                        <div className="flex items-start gap-2">
                          <Pencil className="w-5 h-5 text-[#9d2bee] mt-0.5" />
                          <div className="flex flex-col gap-1">
                            <p className="text-sm text-white font-medium leading-tight">
                              &ldquo;Làm stats này nổi bật hơn với neon
                              gradient&rdquo;
                            </p>
                            <div className="flex gap-1 mt-1">
                              <span className="w-2 h-2 rounded-full bg-[#9d2bee] animate-pulse" />
                              <span className="text-xs text-[#9d2bee] uppercase font-bold">
                                Refining
                              </span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </>
                )}

                {variant.status === "complete" && (
                  <div className="flex flex-col h-full">
                    {/* Preview Area - Matches the prompt requirements */}
                    <div className="flex-1 flex items-center justify-center p-4">
                      <div className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg p-4 shadow-[0_0_20px_rgba(157,43,238,0.5)] transform hover:scale-105 transition-transform duration-500">
                        <div className="flex justify-between items-end">
                          <div>
                            <div className="text-white/80 text-xs uppercase tracking-wider font-bold mb-1">Total Revenue</div>
                            <div className="text-white text-3xl font-black">$84,230</div>
                          </div>
                          <div className="bg-white/20 backdrop-blur-md rounded px-2 py-1 text-xs text-white font-bold">
                            +12.5%
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Code Snippet Area */}
                    <div className="mt-auto bg-[#0a0a0a] rounded-lg p-3 border border-white/5 font-mono text-[10px] text-slate-400 overflow-hidden relative">
                      <div className="absolute top-2 right-2 flex gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      </div>
                      <div className="opacity-50 select-none">
                        <span className="text-purple-400">export function</span> <span className="text-yellow-200">StatsCard</span>() {"{"}<br />
                        &nbsp;&nbsp;<span className="text-purple-400">return</span> (<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-blue-300">div</span> <span className="text-green-300">className</span>="...<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;bg-gradient-to-r..."&gt;<br />
                        &nbsp;&nbsp;)<br />
                        {"}"}
                      </div>
                      {/* Scanning Effect */}
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#2bcdee]/10 to-transparent animate-[scan_2s_linear_infinite]" />
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
