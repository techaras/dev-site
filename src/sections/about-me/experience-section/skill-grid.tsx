import { useState, useEffect, useRef } from 'react';

export function SkillGrid() {
  const [showTopShadow, setShowTopShadow] = useState(false);
  const [showBottomShadow, setShowBottomShadow] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const skills = [
    "ML Pipelines",
    "Multi-platform Integrations", 
    "RAG Systems",
    "LangChain",
    "Multi-tenant SaaS",
    "Enterprise Data Governance",
    "Full-stack Dev",
    "ML Algorithms", 
    "Payment Processing",
    "System Architecture"
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
            className="min-h-52 px-4 py-2 border border-[#353739] rounded-[2rem] font-body text-sm text-muted-foreground w-full whitespace-nowrap text-center flex items-center justify-center flex-shrink-0"
          >
            {skill}
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
