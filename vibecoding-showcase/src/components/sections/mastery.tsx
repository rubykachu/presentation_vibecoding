// ... imports
"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GlowCard, GlowCardContent, GlowCardHeader } from "@/components/ui/glow-card";
import { Terminal, Scissors, GitCommit, FunctionSquare, ArrowRight, MousePointer2, ShieldCheck, Zap } from "lucide-react";
import React, { useRef } from "react";

const agentRules = [
  {
    icon: FunctionSquare,
    title: "PROJECT_CONTEXT",
    description: "Am hiểu toàn bộ cấu trúc. Đặt file đúng chỗ, import đúng luồng, không 'phá vỡ' kiến trúc cũ.",
    code: "CTX: LOADED 100%",
    file: "~/core/structure.map",
  },
  {
    icon: Terminal,
    title: "STRICT_CONVENTION",
    description: "Thống nhất tuyệt đối. Từ naming rules đến code pattern. 10 lập trình viên code như 1.",
    code: "LINT: PASSED",
    file: "~/rules/style.guide",
  },
  {
    icon: ShieldCheck,
    title: "SECURITY_GUARD",
    description: "Bảo mật từ trong trứng. Validate input, sanitize data, check quyền trước khi execute.",
    code: "SEC: SECURE",
    file: "~/middleware/auth.ts",
  },
  {
    icon: Zap,
    title: "PERFORMANCE_OP",
    description: "Tối ưu từng miligiây. Query tinh gọn, lazy loading chuẩn chỉ, caching thông minh.",
    code: "PERF: 99/100",
    file: "~/lib/cache.redis",
  },
];

// ... inside the component return ...

<p className="text-slate-400 text-lg md:text-xl max-w-2xl mt-2 font-light leading-relaxed">
  Làm sao để AI viết code không chỉ "chạy được" mà còn phải <span className="text-[#2bcdee] font-semibold">chuẩn convention, đồng bộ style</span> và tối ưu như Senior Dev?
</p>

function TiltCard({ rule, index }: { rule: typeof agentRules[0], index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  // Motion values for tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for physics feel
  const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-15deg", "15deg"]);

  // Dynamic glare position
  const glareX = useTransform(mouseX, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(mouseY, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXFromCenter = e.clientX - rect.left - width / 2;
    const mouseYFromCenter = e.clientY - rect.top - height / 2;

    x.set(mouseXFromCenter / width);
    y.set(mouseYFromCenter / height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      style={{ perspective: 1000 }}
      className="h-full w-full"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative h-full w-full bg-[#161b1d] border border-white/10 rounded-xl overflow-hidden group shadow-2xl shadow-black/50"
      >
        {/* Holographic Glare Overlay - Enhanced Intensity */}
        <motion.div
          style={{
            background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(43,205,238,0.4) 0%, transparent 60%)`,
            opacity: 1,
            mixBlendMode: "overlay"
          }}
          className="absolute inset-0 pointer-events-none z-20"
        />

        {/* Content Layer (Raised) */}
        <div className="relative z-10 p-6 flex flex-col h-full h-full" style={{ transform: "translateZ(20px)" }}>
          <div className="flex items-start justify-between mb-6">
            <motion.div
              style={{ transform: "translateZ(30px)" }}
              className="p-3 bg-[#2bcdee]/10 rounded-lg text-[#2bcdee] border border-[#2bcdee]/20 group-hover:bg-[#2bcdee] group-hover:text-black transition-colors duration-300"
            >
              <rule.icon className="w-6 h-6" />
            </motion.div>
            <div className="font-mono text-[10px] text-slate-500 border border-white/10 px-2 py-1 rounded">
              {rule.file}
            </div>
          </div>

          <motion.h3
            style={{ transform: "translateZ(15px)" }}
            className="text-xl font-bold text-white mb-2 tracking-tight group-hover:text-[#2bcdee] transition-colors"
          >
            {rule.title}
          </motion.h3>

          <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
            {rule.description}
          </p>

          <motion.div
            style={{ transform: "translateZ(10px)" }}
            className="mt-auto pt-4 border-t border-white/5 flex items-center gap-2"
          >
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <code className="text-xs font-mono text-slate-300">{rule.code}</code>
          </motion.div>
        </div>

        {/* Depth Layers/Noise for Texture */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light pointer-events-none z-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
      </motion.div>
    </motion.div>
  );
}

export function MasterySection() {
  return (
    <section id="mastery" className="presentation-section w-full flex flex-col items-center py-24 px-6 bg-[#0f1314] relative min-h-screen overflow-hidden">
      {/* === DYNAMIC BACKGROUND LAYERS === */}
      {/* 1. Moving 3D Grid Floor */}
      <div className="absolute inset-0 perspective-[1000px] pointer-events-none">
        <motion.div
          animate={{ backgroundPosition: ["0% 0%", "0% 100%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-[linear-gradient(to_right,rgba(43,205,238,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(43,205,238,0.05)_1px,transparent_1px)] bg-[size:50px_50px] [transform:rotateX(60deg)_translateZ(-200px)_scale(2)] origin-top opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1314] via-[#0f1314]/50 to-transparent" />
      </div>

      {/* 2. Side HUD Elements (Left & Right) */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-8 opacity-20 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`left-${i}`}
            initial={{ opacity: 0.1, x: -20 }}
            animate={{ opacity: [0.1, 0.5, 0.1], x: 0 }}
            transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
            className="flex items-center gap-2"
          >
            <div className="w-1 h-8 bg-[#2bcdee]" />
            <div className="flex flex-col gap-1">
              <div className="h-1 w-12 bg-[#2bcdee]/50" />
              <div className="h-1 w-8 bg-[#2bcdee]/30" />
            </div>
          </motion.div>
        ))}
      </div>
      <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-8 opacity-20 pointer-events-none items-end">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`right-${i}`}
            initial={{ opacity: 0.1, x: 20 }}
            animate={{ opacity: [0.1, 0.5, 0.1], x: 0 }}
            transition={{ duration: 4, delay: i * 0.7, repeat: Infinity }}
            className="flex items-center gap-2 flex-row-reverse"
          >
            <div className="w-1 h-8 bg-[#9d2bee]" />
            <div className="flex flex-col gap-1 items-end">
              <div className="h-1 w-12 bg-[#9d2bee]/50" />
              <div className="h-1 w-8 bg-[#9d2bee]/30" />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="max-w-[1400px] w-full z-10 flex flex-col gap-20">

        {/* Animated Headline */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-4 text-center"
        >
          <div className="flex items-center gap-2 text-[#2bcdee] font-mono text-sm tracking-[0.3em] uppercase opacity-70">
            <MousePointer2 className="w-4 h-4" />
            <span>SKILL_SET: DEFINED</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter">
            MASTER THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2bcdee] to-[#9d2bee]">SKILLS</span>
          </h2>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mt-2 font-light leading-relaxed">
            Làm sao để AI viết code không chỉ "chạy được" mà còn phải <span className="text-[#2bcdee] font-semibold">chuẩn convention, đồng bộ style</span> và tối ưu như Senior Dev?
          </p>
        </motion.div>

        {/* 3D Tilt Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 perspective-[2000px]">
          {agentRules.map((rule, idx) => (
            <TiltCard key={idx} rule={rule} index={idx} />
          ))}
        </div>
      </div>

      {/* Footer CTA & System Status */}
      <div className="w-full relative mt-24 flex flex-col items-center">
        <div className="absolute top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#2bcdee]/30 to-transparent" />

        {/* Main CTA */}
        <div className="pt-12 pb-16">
          <Button variant="ghost" className="border border-[#2bcdee]/30 hover:bg-[#2bcdee]/10 text-[#2bcdee] font-mono gap-2 group px-8 py-6 h-auto text-lg">
            INITIATE_DEPLOYMENT <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Operational Console (Filling Space) */}
        <div className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-8 px-6 pb-20 opacity-60 hover:opacity-100 transition-opacity duration-500">

          {/* Left: System Metrics */}
          <div className="flex flex-col gap-4">
            <div className="text-[10px] font-mono text-[#2bcdee]/50 uppercase tracking-widest border-b border-[#2bcdee]/10 pb-2">
              System Metrics
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: "CORE", value: "ACTIVE" },
                { label: "VIBE", value: "99.9%" },
                { label: "PING", value: "12ms" }
              ].map((stat, i) => (
                <div key={i} className="bg-[#161b1d] border border-white/5 p-3 rounded flex flex-col items-center gap-1">
                  <span className="text-[10px] text-slate-500">{stat.label}</span>
                  <span className="text-sm font-mono text-[#2bcdee]">{stat.value}</span>
                </div>
              ))}
            </div>
            {/* Progress Bar */}
            <div className="w-full bg-[#161b1d] h-1 rounded-full overflow-hidden mt-2">
              <motion.div
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-[50%] h-full bg-[#2bcdee]/50"
              />
            </div>
          </div>

          {/* Right: Rolling Logs */}
          <div className="flex flex-col gap-2 relative h-[100px] overflow-hidden mask-linear-gradient">
            <div className="absolute inset-x-0 top-0 h-4 bg-gradient-to-b from-[#0f1314] to-transparent z-10" />
            <div className="absolute inset-x-0 bottom-0 h-4 bg-gradient-to-t from-[#0f1314] to-transparent z-10" />

            <div className="text-[10px] font-mono text-[#2bcdee]/50 uppercase tracking-widest border-b border-[#2bcdee]/10 pb-2 mb-2">
              Live Logs
            </div>

            <motion.div
              animate={{ y: [0, -150] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="flex flex-col gap-1.5"
            >
              {[
                "Initializing core protocols...",
                "Checking agent permissions [OK]",
                "Optimizing vibe parameters...",
                "Syncing with Neural Net...",
                "Loading aesthetic drivers...",
                "Verifying dry_principle.js...",
                "Compiling assets...",
                "> READY FOR DEPLOYMENT",
                "> WAITING FOR INPUT...",
                "System idling..."
              ].map((log, i) => (
                <div key={i} className="font-mono text-[10px] text-[#2bcdee]/60 flex gap-2">
                  <span className="opacity-30">{`00:${10 + i}:4${i}`}</span>
                  <span>{log}</span>
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {[
                "Initializing core protocols...",
                "Checking agent permissions [OK]",
                "Optimizing vibe parameters...",
                "Syncing with Neural Net...",
                "Loading aesthetic drivers...",
                "Verifying dry_principle.js...",
                "Compiling assets...",
                "> READY FOR DEPLOYMENT",
                "> WAITING FOR INPUT...",
                "System idling..."
              ].map((log, i) => (
                <div key={`dup-${i}`} className="font-mono text-[10px] text-[#2bcdee]/60 flex gap-2">
                  <span className="opacity-30">{`00:${20 + i}:5${i}`}</span>
                  <span>{log}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
