"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { GlitchText } from "@/components/ui/neon-text";

// Parallax floating chat bubbles
const painMessages = [
  {
    text: '"Làm đại cái giao diện đi"',
    style: "top-[10%] left-[5%] -rotate-2",
    variant: "default" as const,
    delay: 0,
    floatDuration: 6,
  },
  {
    text: '"Error: unexpected token. Cannot read property of undefined."',
    style: "top-[35%] right-[5%] rotate-3",
    variant: "error" as const,
    delay: 0.2,
    floatDuration: 5,
  },
  {
    text: '"Code chạy được là được, sửa sau."',
    style: "bottom-[25%] left-[5%] -rotate-1",
    variant: "default" as const,
    delay: 0.4,
    floatDuration: 7,
  },
  {
    text: '"Sửa dùm cái lỗi này gấp!"',
    style: "bottom-[5%] right-[5%] rotate-6",
    variant: "subtle" as const,
    delay: 0.6,
    floatDuration: 5.5,
  },
];

interface ChatBubbleProps {
  text: string;
  style: string;
  variant: "default" | "error" | "subtle";
  delay: number;
  floatDuration: number;
}

function ChatBubble({
  text,
  style,
  variant,
  delay,
  floatDuration,
}: ChatBubbleProps) {
  const variantStyles = {
    default:
      "bg-[#1a1a1a]/90 backdrop-blur-md border-gray-700 text-gray-300 rounded-bl-none shadow-[0_4px_20px_rgba(0,0,0,0.5)]",
    error:
      "bg-[#220a0a]/90 backdrop-blur-md border-red-900/60 text-red-400 rounded-br-none shadow-[0_4px_20px_rgba(255,0,0,0.2)]",
    subtle:
      "bg-[#151515]/80 backdrop-blur-md border-gray-800 text-gray-500 rounded-tr-none shadow-[0_4px_10px_rgba(0,0,0,0.3)]",
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className={`absolute max-w-[280px] md:max-w-[320px] p-6 border rounded-2xl text-lg md:text-xl font-medium z-20 ${variantStyles[variant]} ${style}`}
      style={{ willChange: "transform, opacity" }}
    >
      <motion.div
        animate={{
          y: [0, -8, 0],
          rotate: [0, 1, -1, 0],
        }}
        transition={{
          duration: floatDuration,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ willChange: "transform" }}
      >
        {text}
      </motion.div>
    </motion.div>
  );
}

function BackgroundEffect() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Moving Gradients - STRONGER */}
      <motion.div
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.4, 0.7, 0.4], // Increased opacity
          x: [0, 80, 0], // Increased movement
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-[20%] -left-[10%] w-[700px] h-[700px] bg-purple-900/40 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.6, 1],
          opacity: [0.3, 0.6, 0.3], // Increased opacity
          y: [0, -80, 0], // Increased movement
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[30%] -right-[15%] w-[600px] h-[600px] bg-blue-900/30 rounded-full blur-[120px]"
      />
      {/* Added a third blob for density */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2],
          x: [0, -50, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[-10%] left-[20%] w-[500px] h-[500px] bg-pink-900/20 rounded-full blur-[100px]"
      />

      {/* Grid Pattern moving - Faster */}
      <motion.div
        animate={{ backgroundPosition: ["0px 0px", "100px 100px"] }} // Faster/Further movement
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#80808015_1px,transparent_1px),linear-gradient(to_bottom,#80808015_1px,transparent_1px)] bg-[size:50px_50px]"
      />

      {/* Floating Particles - More visible */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 bg-white/30 rounded-full shadow-[0_0_5px_rgba(255,255,255,0.5)]"
          initial={{
            x: Math.random() * 1000,
            y: Math.random() * 800,
            opacity: 0,
          }}
          animate={{
            y: [null, Math.random() * -150],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 4 + 2, // Faster
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
}

export function PainPointSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  // Disabled parallax on scroll to focus on internal motion

  return (
    <section
      id="pain-point"
      ref={containerRef}
      className="presentation-section relative w-full bg-[#050505] py-12 md:py-24 px-4 md:px-16 border-t border-gray-900 overflow-hidden flex items-center min-h-screen"
    >
      <BackgroundEffect />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left: Floating Chat Bubbles */}
        <div className="relative h-[500px] md:h-[600px] w-full bg-[#0a0a0a]/50 backdrop-blur-sm rounded-3xl border border-gray-800/50 overflow-hidden shadow-2xl group">

          {/* Internal Gradient Glow - Stronger on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 opacity-60 transition-opacity duration-1000 group-hover:opacity-100" />

          {/* Bubbles */}
          {painMessages.map((msg, idx) => (
            <ChatBubble
              key={idx}
              {...msg}
            />
          ))}
        </div>

        {/* Right: Headline */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col gap-10 justify-center"
        >
          <div className="relative">
            <GlitchText className="text-5xl md:text-6xl lg:text-8xl leading-[0.9] tracking-tighter">
              HI VỌNG
              <br />
              KHÔNG PHẢI
              <br />
              LÀ CHIẾN LƯỢC
            </GlitchText>
          </div>

          <p className="text-2xl md:text-3xl text-gray-300 leading-relaxed max-w-xl font-light">
            Dựa vào prompt ngẫu nhiên là công thức của thảm họa.
            <br />
            Ngừng đánh cược với codebase.
            <br />
            <span className="text-[#2bcdee] font-semibold">Kỹ thuật</span> cần sự chính xác, không phải may rủi.
          </p>

          <div className="flex items-center gap-4">
            <div className="h-1 w-20 bg-gradient-to-r from-[#2bcdee] to-transparent" />
            <motion.span
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-sm font-bold tracking-widest text-[#2bcdee] uppercase"
            >
              System Failure Imminent
            </motion.span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
