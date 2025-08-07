import { SkillGrid } from './skill-grid';

export function ExperienceSection() {
  return (
    <div className="bento-no-min row-span-4 flex flex-col">
      <h3 className="font-heading text-xl text-foreground mb-2">
        Experience
      </h3>
      <p className="font-body text-sm text-muted-foreground font-light mb-4 leading-relaxed">
        From startup MVP to enterprise scale
      </p>
      <SkillGrid />
    </div>
  );
}