import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export function useSkillRowAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    // Select all skill rows
    const rows = containerRef.current.querySelectorAll('.skill-row');
    
    rows.forEach((row, index) => {
      // Middle row (index 1) goes left to right, others go right to left
      const isMiddleRow = index === 1;
      
      gsap.fromTo(row, 
        { xPercent: isMiddleRow ? -50 : 0 }, 
        { 
          xPercent: isMiddleRow ? 0 : -50,
          duration: 50,
          repeat: -1, 
          ease: 'none',
          delay: index * 0.5 // Stagger the start times
        }
      );
    });
  }, { scope: containerRef });

  return containerRef;
}