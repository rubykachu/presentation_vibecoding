import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "neon" | "subtle";
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "default", children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase",
          {
            "bg-white/10 text-white/70 border border-white/10":
              variant === "default",
            "bg-[#9d2bee]/10 text-[#9d2bee] border border-[#9d2bee]/30":
              variant === "neon",
            "bg-[#2bcdee]/10 text-[#2bcdee] border border-[#2bcdee]/30":
              variant === "subtle",
          },
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = "Badge";

export { Badge };
