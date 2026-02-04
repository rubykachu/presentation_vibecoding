"use client";

import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface GlowCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  glowColor?: "purple" | "cyan" | "white";
  hoverGlow?: boolean;
}

export function GlowCard({
  children,
  className,
  glowColor = "cyan",
  hoverGlow = true,
  ...props
}: GlowCardProps) {
  const glowClasses = {
    purple: {
      border: "border-[#9d2bee]/30",
      hoverBorder: "hover:border-[#9d2bee]",
      shadow: "shadow-[0_0_15px_-5px_rgba(157,43,238,0.3)]",
      hoverShadow: "hover:shadow-[0_0_25px_-5px_rgba(157,43,238,0.6)]",
    },
    cyan: {
      border: "border-[#2bcdee]/30",
      hoverBorder: "hover:border-[#2bcdee]",
      shadow: "shadow-[0_0_15px_-5px_rgba(43,205,238,0.3)]",
      hoverShadow: "hover:shadow-[0_0_25px_-5px_rgba(43,205,238,0.6)]",
    },
    white: {
      border: "border-white/10",
      hoverBorder: "hover:border-white/30",
      shadow: "shadow-none",
      hoverShadow: "hover:shadow-[0_0_20px_-5px_rgba(255,255,255,0.2)]",
    },
  };

  const glow = glowClasses[glowColor];

  return (
    <motion.div
      className={cn(
        "rounded-xl overflow-hidden bg-[#1c2527] border transition-all duration-300",
        glow.border,
        glow.shadow,
        hoverGlow && glow.hoverBorder,
        hoverGlow && glow.hoverShadow,
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// Header for the GlowCard with terminal dots
interface GlowCardHeaderProps extends HTMLMotionProps<"div"> {
  children?: React.ReactNode;
  showDots?: boolean;
  title?: string;
}

export function GlowCardHeader({
  children,
  className,
  showDots = true,
  title,
  ...props
}: GlowCardHeaderProps) {
  return (
    <motion.div
      className={cn(
        "bg-[#151b1d] px-3 py-2 border-b border-[#283639] flex items-center justify-between",
        className
      )}
      {...props}
    >
      {showDots && (
        <div className="flex gap-2">
          <div className="w-2 h-2 rounded-full bg-slate-700 group-hover:bg-[#2bcdee] transition-colors" />
          <div className="w-2 h-2 rounded-full bg-slate-700" />
        </div>
      )}
      {title && (
        <span className="font-mono text-[10px] text-slate-500">{title}</span>
      )}
      {children}
    </motion.div>
  );
}

export function GlowCardContent({
  children,
  className,
  ...props
}: HTMLMotionProps<"div"> & { children: React.ReactNode }) {
  return (
    <motion.div className={cn("p-6 flex flex-col gap-4", className)} {...props}>
      {children}
    </motion.div>
  );
}
