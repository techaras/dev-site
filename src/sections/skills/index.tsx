import { SkillCard } from "./skill-card";
import { skillsData } from "./constants";

export function Skills() {
  return (
    <section 
      id="skills" 
      className="py-20 px-6 md:px-12 lg:px-16"
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* Section Headers */}
        <div className="mb-12 text-center">
          <h2 className="font-body text-lg font-light text-foreground mb-4">
            MY SKILLS
          </h2>
          <p className="font-heading text-2xl text-foreground">
            BUILDING PRODUCTION AI SYSTEMS THAT SOLVE REAL PROBLEMS
          </p>
        </div>

        {/* Skills Grid - 6x3 with rounded corners */}
        <div className="mb-12">
          <div className="w-full max-w-6xl mx-auto bg-[#353739] p-[1px] rounded-2xl">
            <div className="grid grid-cols-6 gap-[1px] bg-[#353739] rounded-2xl overflow-hidden">
              {skillsData.map((skill, index) => (
                <SkillCard 
                  key={index}
                  skill={skill}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex items-center justify-center gap-6 max-w-6xl mx-auto">
          <p className="font-body text-[#b3b3b3] text-base">
            Don't see your stack?
          </p>
          <button className="px-6 pt-2 pb-1 border border-[#353739] rounded-full font-heading text-sm text-foreground hover:border-[#555759] transition-colors duration-300 cursor-pointer hover:opacity-80">
            LET'S TALK
          </button>
        </div>
      </div>
    </section>
  )
}