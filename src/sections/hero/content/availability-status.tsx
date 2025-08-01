import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function AvailabilityStatus() {
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const ukTime = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Europe/London',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      }).format(now);
      setCurrentTime(ukTime);
    };

    // Update immediately
    updateTime();
    
    // Update every minute
    const interval = setInterval(updateTime, 60000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center gap-2 text-sm font-body text-[#b3b3b3] whitespace-nowrap">
      {/* Animated green dot */}
      <div className="relative">
        <motion.div
          className="w-2 h-2 bg-green-500 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [1, 0.8, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {/* Pulse ring */}
        <motion.div
          className="absolute inset-0 w-2 h-2 bg-green-500 rounded-full"
          animate={{
            scale: [1, 2, 1],
            opacity: [0.7, 0, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
      
      <span>Available now</span>
      <span>•</span>
      <span>UK</span>
      <span>•</span>
      <span>{currentTime}</span>
      <span>•</span>
      <span>Global projects welcome</span>
    </div>
  );
}
