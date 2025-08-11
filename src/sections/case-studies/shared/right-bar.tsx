import type { ProjectData } from "../types";

interface RightBarProps {
  projectData: ProjectData;
}

export function RightBar({ projectData }: RightBarProps) {
  return (
    <div className="w-full h-full flex flex-col overflow-y-auto">
      {/* Header */}
      <div className="mb-6">
        <h3 className="font-heading text-2xl text-foreground mb-2">
          {projectData.title}
        </h3>
        <p className="font-body text-sm text-muted-foreground leading-relaxed">
          {projectData.description}
        </p>
      </div>

      {/* Dynamic Sections */}
      {projectData.sections.map((section, index) => (
        <div key={index} className={index === projectData.sections.length - 1 ? "flex-1" : "mb-6"}>
          <h4 className="font-heading text-lg text-foreground mb-2">
            {section.title}
          </h4>
          <ul className="space-y-2">
            {section.items.map((item, itemIndex) => (
              <li key={itemIndex} className="font-body text-sm text-muted-foreground leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}