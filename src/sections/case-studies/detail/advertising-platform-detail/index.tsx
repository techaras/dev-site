import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import { GithubIcon } from "@/components/icons/socials/github-icon";
import { advertisingPlatformData } from "../../content/advertising-platform-data";

export function AdvertisingPlatformDetail() {
  const { projectData, techStack } = advertisingPlatformData;

  const handleGithubClick = () => {
    window.open(projectData.buttons.githubUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      {/* Back Button */}
      <Link 
        to="/#case-studies" 
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Portfolio
      </Link>

      {/* Case Study Content */}
      <div className="space-y-8">
        <div>
          <h1 className="font-heading text-4xl text-foreground mb-4">
            {projectData.title}
          </h1>
          <p className="text-lg text-muted-foreground">
            {projectData.description}
          </p>
        </div>

        {/* Tech Stack */}
        <div>
          <h2 className="font-heading text-2xl text-foreground mb-4">Tech Stack</h2>
          <div className="flex flex-wrap gap-4">
            {techStack.map((tech, index) => (
              <div key={index} className="flex items-center gap-2 p-3 border border-border rounded-lg">
                {tech.icon}
                <span className="text-sm">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Project Details */}
        {projectData.sections.map((section, index) => (
          <div key={index}>
            <h2 className="font-heading text-2xl text-foreground mb-4">
              {section.title}
            </h2>
            <ul className="space-y-2">
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex} className="text-muted-foreground">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Action Buttons */}
        <div className="flex items-center gap-6 pt-6">
          <button
            onClick={handleGithubClick}
            className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg font-body text-sm text-foreground hover:border-ring transition-colors cursor-pointer"
          >
            <GithubIcon className="w-4 h-4" />
            GitHub
          </button>
        </div>
      </div>
    </div>
  );
}