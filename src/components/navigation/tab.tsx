import { useRef } from "react";
import { motion } from "framer-motion";
import { useNavigationStore, type SectionId } from "@/stores/navigationStore";
import type { TabProps } from "./types";

// Mapping from href to section IDs
const HREF_TO_SECTION_MAP: Record<string, SectionId> = {
  '#home': 'home',
  '#how-i-work': 'how-i-work',
  '#case-studies': 'case-studies',
  '#skills': 'skills',
  '#about-me': 'about-me',
};

export const Tab = ({ children, setPosition, href, isActive }: TabProps) => {
  const ref = useRef<HTMLLIElement>(null);
  const { setIsNavigating, setActiveSection } = useNavigationStore();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Only handle smooth scrolling for section links, not contact
    if (href.startsWith('#') && href !== '#contact') {
      e.preventDefault();
      
      const targetId = href.substring(1); // Remove the #
      const targetElement = document.getElementById(targetId);
      const targetSectionId = HREF_TO_SECTION_MAP[href];
      
      if (targetElement && targetSectionId) {
        console.log(`🎯 Starting navigation to: ${targetSectionId}`);
        
        // Start navigation state (pauses section tracking)
        setIsNavigating(true);
        
        // Immediately set the target section for better UX
        setActiveSection(targetSectionId);
        
        // Start smooth scroll
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        
        // End navigation state after scroll completes
        setTimeout(() => {
          console.log('🏁 Navigation completed');
          setIsNavigating(false);
        }, 1000); // 1 second should be enough for smooth scroll
      }
    }
    // Contact button (#contact) will do nothing for now - popup functionality comes later
  };

  return (
    <motion.li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10 rounded-full"
      animate={{
        backgroundColor: isActive ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0)"
      }}
      transition={{
        type: "spring",
        stiffness: 350,
        damping: 25,
      }}
    >
      <a
        href={href}
        onClick={handleClick}
        className="relative z-10 block cursor-pointer px-4 py-2 text-sm font-medium text-foreground mix-blend-difference whitespace-nowrap"
      >
        <span className="flex items-center gap-2">
          {children}
        </span>
      </a>
    </motion.li>
  );
};