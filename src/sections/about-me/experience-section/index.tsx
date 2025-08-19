import { SkillGrid } from './skill-grid';

export function ExperienceSection() {
  return (
    <div className="row-span-4 flex flex-col">
      <h3 className="font-heading text-xl text-foreground mt-2 mb-2">
        Experience
      </h3>

      <SkillGrid />
    </div>
  );
}