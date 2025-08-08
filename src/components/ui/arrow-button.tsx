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
      className="relative overflow-hidden font-heading z-10 cursor-pointer text-sm pl-6 rounded-full border border-white/30 flex items-center justify-between"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Expanding background circle (now vertically centred & anchored right) */}
      <motion.div
        /* Tailwind arbitrary height — compiles without extra config */
        className="absolute right-1 top-1/2 -translate-y-1/2 h-[34px] bg-foreground rounded-full"
        initial={{ width: 34 }}
        animate={{ width: isHovered ? "calc(100% - 8px)" : 34 }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{ transformOrigin: "right center" }}
      />


      {/* Text */}
      <motion.span
        className="relative z-10 mt-1"
        animate={{ color: isHovered ? "#000" : "#fff" }}
        transition={{ duration: 0.4, ease: "linear" }}
      >
        {children}
      </motion.span>

      {/* Arrow chip */}
      <motion.div
        className="relative z-10 rounded-full p-1 m-1 bg-white"
        animate={{ x: isHovered ? -16 : 0 }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <ArrowRight className="w-6 h-6 text-black" />
      </motion.div>
    </motion.button>
  );
}
