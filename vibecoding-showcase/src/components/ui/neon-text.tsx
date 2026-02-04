"use client";

import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface NeonTextProps extends HTMLMotionProps<"span"> {
  children: React.ReactNode;
  gradient?: "purple-cyan" | "cyan-purple" | "white";
  glow?: boolean;
  as?: "h1" | "h2" | "h3" | "span" | "p";
}

export function NeonText({
  children,
  className,
  gradient = "purple-cyan",
  glow = true,
  as = "span",
  ...props
}: NeonTextProps) {
  const Component = motion[as] as typeof motion.span;

  const gradientClasses = {
    "purple-cyan":
      "bg-gradient-to-r from-[#9d2bee] via-[#2bcdee] to-[#9d2bee] bg-clip-text text-transparent",
    "cyan-purple":
      "bg-gradient-to-r from-[#2bcdee] via-[#9d2bee] to-[#2bcdee] bg-clip-text text-transparent",
    white: "text-white",
  };

  return (
    <Component
      className={cn(
        gradientClasses[gradient],
        glow && "glow-title",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

// Glitch Text Effect Component
export function GlitchText({
  children,
  className,
  ...props
}: HTMLMotionProps<"span"> & { children: React.ReactNode }) {
  return (
    <motion.span
      className={cn("glitch-text text-white font-black", className)}
      {...props}
    >
      {children}
    </motion.span>
  );
}
