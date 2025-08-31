import { useParams, Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import { designPlatformData } from "@/sections/case-studies/content/design-platform-data";
import { advertisingPlatformData } from "@/sections/case-studies/content/advertising-platform-data";

export function CaseStudyDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  
  // Get case study data based on slug
  const caseStudyData = slug === "design-platform" 
    ? designPlatformData 
    : slug === "advertising-platform" 
    ? advertisingPlatformData 
    : null;

  if (!caseStudyData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-heading mb-4">Case Study Not Found</h1>
          <Link to="/" className="text-primary hover:underline">
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
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
              {caseStudyData.projectData.title}
            </h1>
            <p className="text-lg text-muted-foreground">
              {caseStudyData.projectData.description}
            </p>
          </div>

          {/* Tech Stack */}
          <div>
            <h2 className="font-heading text-2xl text-foreground mb-4">Tech Stack</h2>
            <div className="flex flex-wrap gap-4">
              {caseStudyData.techStack.map((tech, index) => (
                <div key={index} className="flex items-center gap-2 p-3 border border-border rounded-lg">
                  {tech.icon}
                  <span className="text-sm">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Project Details */}
          {caseStudyData.projectData.sections.map((section, index) => (
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
        </div>
      </div>
    </div>
  );
}