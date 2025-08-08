import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ArrowButtonProps {
  children: React.ReactNode;
}

export function ArrowButton({ children }: ArrowButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.button
      className="relative overflow-hidden font-heading z-10 cursor-pointer text-sm pl-6 rounded-full border border-white/30 flex items-center justify-between gap-3"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        width: "auto", // Let it size naturally first
        minWidth: "fit-content",
      }}
    >
      {/* Expanding background circle */}
      <motion.div
        className="absolute top-0 right-0 h-full bg-foreground rounded-full"
        initial={{ width: 34 }}
        animate={{
          width: isHovered ? "100%" : 34,
        }}
        transition={{
          duration: 0.4,
          ease: [0.25, 0.46, 0.45, 0.94], // Power4.easeInOut equivalent
        }}
        style={{
          transformOrigin: "right center",
        }}
      />

      {/* Text with color change */}
      <motion.span
        className="relative z-10 mt-1"
        animate={{
          color: isHovered ? "#000000" : "#ffffff", // Dark text on light background when expanded
        }}
        transition={{
          duration: 0.4,
          ease: "linear",
        }}
      >
        {children}
      </motion.span>

      {/* Arrow container with movement */}
      <motion.div
        className="relative z-10 rounded-full p-1 m-1"
        style={{
          background: "white",
        }}
        animate={{
          x: isHovered ? -16 : 0,
        }}
        transition={{
          duration: 0.4,
          ease: [0.25, 0.46, 0.45, 0.94], // Power4.easeInOut equivalent
        }}
      >
        <ArrowRight className="w-6 h-6 text-black" />
      </motion.div>
    </motion.button>
  );
}