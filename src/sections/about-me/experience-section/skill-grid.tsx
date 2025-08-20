import { useState, useEffect, useRef } from 'react';

import gitBranchIcon from '../../../assets/gitBranchIcon.svg';
import plugIcon from '../../../assets/plugIcon.svg';
import ragDocIcon from '../../../assets/ragDocIcon.svg';
import langchainIcon from '../../../assets/langachainIcon.svg';
import layersIcon from '../../../assets/layersIcon.svg';
import shieldCheckIcon from '../../../assets/shieldCheckIcon.svg';
import codeIcon from '../../../assets/codeIcon.svg';
import cpuIcon from '../../../assets/cpuIcon.svg';
import creditCardIcon from '../../../assets/creditCardIcon.svg';
import buildingIcon from '../../../assets/buildingIcon.svg';

interface SkillItem {
  text: string;
  icon: string;
}

export function SkillGrid() {
  const [showTopShadow, setShowTopShadow] = useState(false);
  const [showBottomShadow, setShowBottomShadow] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const skills: SkillItem[] = [
    { text: "ML Pipelines", icon: gitBranchIcon },
    { text: "Multi-platform Integrations", icon: plugIcon },
    { text: "RAG Systems", icon: ragDocIcon },
    { text: "LangChain", icon: langchainIcon },
    { text: "Multi-tenant SaaS", icon: layersIcon },
    { text: "Enterprise Data Governance", icon: shieldCheckIcon },
    { text: "Full-stack Dev", icon: codeIcon },
    { text: "ML Algorithms", icon: cpuIcon },
    { text: "Payment Processing", icon: creditCardIcon },
    { text: "System Architecture", icon: buildingIcon },
  ];

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = container;
      
      // Show top shadow when scrolled down
      setShowTopShadow(scrollTop > 0);
      
      // Show bottom shadow when not at bottom
      setShowBottomShadow(scrollTop < scrollHeight - clientHeight - 1);
    };

    // Initial check
    handleScroll();

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative flex flex-col gap-3 flex-1 max-h-[520px]">
      {/* Top scroll shadow */}
      <div 
        className={`absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-background to-transparent pointer-events-none z-10 transition-opacity duration-300 ${
          showTopShadow ? 'opacity-100' : 'opacity-0'
        }`}
      />
      
      {/* Scrollable content */}
      <div 
        ref={scrollContainerRef}
        className="flex flex-col gap-3 overflow-y-auto flex-1"
      >
        {skills.map((skill, index) => (
          <div 
            key={index}
            className="relative min-h-52 border border-[#353739] rounded-[2rem] font-body text-sm text-muted-foreground w-full text-center flex items-center justify-center flex-shrink-0 flex-col gap-3 pl-6"
          >
            {/* Left stripe with rotated text */}
            <div className="absolute -left-px -top-px -bottom-px w-8 bg-[#353739] rounded-l-[2rem] flex items-center justify-center">
              <span className="text-white font-heading text-lg transform rotate-270 translate-x-1 whitespace-nowrap">
                experience
              </span>
            </div>
            
            <img 
              src={skill.icon} 
              alt={skill.text}
              className="w-24 h-24 flex-shrink-0"
            />
            <span className="whitespace-nowrap mt-4">{skill.text}</span>
          </div>
        ))}
      </div>

      {/* Bottom scroll shadow */}
      <div 
        className={`absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-background to-transparent pointer-events-none z-10 transition-opacity duration-300 ${
          showBottomShadow ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
}
