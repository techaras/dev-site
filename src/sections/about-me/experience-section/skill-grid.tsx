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
import { useVerticalScroll } from './useVerticalScroll';

interface SkillItem {
  text: string;
  icon: string;
}

export function SkillGrid() {
  const { 
    trackRef, 
    viewportRef, 
    showTopShadow, 
    showBottomShadow 
  } = useVerticalScroll();

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

  return (
    <div className="relative flex flex-col gap-3 flex-1 max-h-[553px]">
      {/* Top scroll shadow */}
      <div 
        className={`absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-background to-transparent pointer-events-none z-10 transition-opacity duration-300 ${
          showTopShadow ? 'opacity-100' : 'opacity-0'
        }`}
      />
      
      {/* Scrollable viewport (mask) - overflow hidden to let GSAP control movement */}
      <div ref={viewportRef} className="flex-1 overflow-hidden">
        {/* Vertical track */}
        <div
          ref={trackRef}
          className="flex flex-col gap-3 will-change-transform"
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