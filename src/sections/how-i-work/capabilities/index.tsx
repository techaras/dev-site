import { ArrowRight } from "lucide-react";
import { SkillPill } from "./skill-pill";
import { skillRows } from "./constants";
import { useSkillRowAnimation } from "./useSkillRowAnimation";

export function Capabilities() {
  const containerRef = useSkillRowAnimation();

  return (
    <div className="w-full h-full text-[#f2f2f2] flex flex-col">
      <h3 className="font-heading text-xl">Capabilities</h3>
      
      {/* Skills Pills - 3 rows with horizontal overflow, extending edge-to-edge */}
      <div 
        ref={containerRef}
        className="flex-1 flex flex-col gap-11 overflow-hidden justify-center mb-1 edge-to-edge"
      >
        {skillRows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="skill-row flex gap-3 whitespace-nowrap"
            style={{ width: 'max-content' }}
          >
            {/* Duplicate the row content for seamless looping */}
            {[...row, ...row].map((skill, skillIndex) => (
              <SkillPill
                key={skillIndex}
                icon={skill.icon}
                name={skill.name}
              />
            ))}
          </div>
        ))}
      </div>
      
      {/* Bottom left content */}
      <div>
        <p className="font-body font-light text-sm text-[#b3b3b3] mb-2">
          Don't see your stack?
        </p>
        <button className="font-heading text-[#f2f2f2] hover:opacity-80 transition-opacity flex items-center gap-2 cursor-pointer">
          Let's Talk
          <ArrowRight className="w-5 h-5 mb-1" />
        </button>
      </div>
    </div>
  );
}
