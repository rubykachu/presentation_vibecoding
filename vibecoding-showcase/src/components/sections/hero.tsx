"use client";

import { motion, useScroll, useTransform, useMotionTemplate, useMotionValue } from "framer-motion";
import { NeonText } from "@/components/ui/neon-text";
import { useCallback, useEffect, useState } from "react";

export function HeroSection() {
  const [stars, setStars] = useState<Array<{ id: number; width: number; height: number; top: string; left: string; duration: number; delay: number }>>([]);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    setStars([...Array(100)].map((_, i) => ({
      id: i,
      width: Math.random() * 2 + 1,
      height: Math.random() * 2 + 1,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 5
    })));
  }, []);

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
      id="hero"
      className="presentation-section relative flex min-h-screen w-full flex-col items-center justify-center bg-[#050505] px-4 overflow-hidden"
    >
      {/* Interactive Grid Background */}
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      {/* Animated Star Field Layer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute bg-white rounded-full opacity-0"
            style={{
              width: star.width,
              height: star.height,
              top: star.top,
              left: star.left,
            }}
            animate={{
              opacity: [0, 0.8, 0],
              scale: [0, 1.5, 0]
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              delay: star.delay
            }}
          />
        ))}
      </div>

      {/* Mouse Spotlight Layer */}
      <motion.div
        className="absolute inset-0 opacity-100 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background,
        }}
      />

      {/* Overlay to fade out grid at edges */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,#050505_100%)]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center gap-4 md:gap-8 max-w-6xl">
        {/* Main Title - Blur to Focus Animation */}
        <motion.div
          initial={{ filter: "blur(20px)", opacity: 0 }}
          animate={{ filter: "blur(0px)", opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative"
        >
          {/* Decoration: Subtle floating particles behind text */}
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-700" />

          <NeonText
            as="h1"
            gradient="purple-cyan"
            glow
            className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-tight"
          >
            VIBE CODING
            <br />
            2026
          </NeonText>
        </motion.div>

        {/* Subheadline - Thêm spacing mt-12 */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 text-xl md:text-3xl lg:text-4xl text-gray-200 font-medium tracking-[0.3em] uppercase text-center relative"
        >
          Coding by Intent, not Syntax
          {/* Glitch decoration line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute -bottom-4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#2bcdee] to-transparent opacity-50"
          />
        </motion.h2>

        {/* Signature - Editorial Style */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1.5 }}
          className="mt-6 flex flex-col items-center gap-1"
        >
          <span className="text-[10px] uppercase tracking-[0.4em] text-white/30 font-sans">Presented by</span>
          <span className="font-signature text-4xl md:text-5xl text-white/90 tracking-wide font-light italic">
            Minh Tang
          </span>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="mt-24 flex flex-col items-center gap-4"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-gray-600 flex items-start justify-center p-2 backdrop-blur-sm"
          >
            <motion.div className="w-1.5 h-1.5 rounded-full bg-[#9d2bee] shadow-[0_0_10px_#9d2bee]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
