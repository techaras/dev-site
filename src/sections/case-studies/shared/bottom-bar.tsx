import { useRef, useEffect } from "react";
import gsap from "gsap";
import type { TechStackItem } from "../types";

interface BottomBarProps {
  techStack: TechStackItem[];
}

export function BottomBar({ techStack }: BottomBarProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const prevTechStackRef = useRef<TechStackItem[] | null>(null);

  useEffect(() => {
    if (!contentRef.current) return;

    const content = contentRef.current;
    
    // Check if the techStack has actually changed
    const hasChanged = prevTechStackRef.current && 
      prevTechStackRef.current.length > 0 &&
      prevTechStackRef.current[0].name !== techStack[0].name;

    if (hasChanged) {
      // Animate content transition
      const tl = gsap.timeline();
      
      tl
        // Fade out and scale down current content
        .to(content, {
          opacity: 0,
          scale: 0.95,
          duration: 0.3,
          ease: "power2.out"
        })
        // Update content happens here (React will re-render)
        .call(() => {
          // Force a re-render - the content change happens automatically via React
        })
        // Fade in and scale up new content
        .fromTo(content, 
          { 
            opacity: 0, 
            scale: 0.95 
          },
          {
            opacity: 1,
            scale: 1,
            duration: 0.4,
            ease: "power2.out"
          }
        );
    } else if (!prevTechStackRef.current) {
      // Initial render - just fade in
      gsap.fromTo(content, 
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.6, ease: "power2.out" }
      );
    }

    // Update the previous tech stack reference
    prevTechStackRef.current = techStack;
  }, [techStack]);

  return (
    <div className="w-full h-full flex items-center justify-center p-4 [@media(min-width:1390px)]:p-6">
      <div ref={contentRef} className="flex items-center justify-between w-full max-w-4xl">
        {techStack.map((tech, index) => (
          <div key={`${tech.name}-${index}`} className="flex flex-col items-center gap-4">
            {tech.icon}
            <span className="font-body text-sm font-light text-foreground">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}