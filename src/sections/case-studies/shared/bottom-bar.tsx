import type { TechStackItem } from "../types";

interface BottomBarProps {
  techStack: TechStackItem[];
}

export function BottomBar({ techStack }: BottomBarProps) {
  return (
    <div className="w-full h-full flex items-center justify-center p-6">
      <div className="flex items-center justify-between w-full max-w-4xl">
        {techStack.map((tech, index) => (
          <div key={index} className="flex flex-col items-center gap-4">
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