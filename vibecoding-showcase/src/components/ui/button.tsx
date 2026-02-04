import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "ghost" | "neon";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#050505] disabled:opacity-50 disabled:cursor-not-allowed",
          {
            // Variants
            "bg-white/10 text-white hover:bg-white/20 border border-white/10":
              variant === "default",
            "bg-transparent text-white hover:bg-white/5": variant === "ghost",
            "bg-[#9d2bee]/10 text-[#9d2bee] border border-[#9d2bee]/50 hover:bg-[#9d2bee]/20 hover:border-[#9d2bee] shadow-[0_0_20px_rgba(157,43,238,0.3)] hover:shadow-[0_0_30px_rgba(157,43,238,0.5)] focus:ring-[#9d2bee]":
              variant === "neon",
            // Sizes
            "text-sm px-4 py-2": size === "sm",
            "text-base px-6 py-3": size === "md",
            "text-lg px-8 py-4": size === "lg",
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
