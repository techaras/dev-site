import { useNavigate } from "react-router";
import { ArrowLeft } from "lucide-react";
import { GithubIcon } from "@/components/icons/socials/github-icon";
import { VideoContainer } from "../../shared/video-container";

export function DesignPlatformDetail() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/");
    
    // Wait for navigation to complete, then scroll to case studies
    setTimeout(() => {
      const caseStudiesSection = document.getElementById("case-studies");
      if (caseStudiesSection) {
        caseStudiesSection.scrollIntoView({ 
          behavior: "smooth",
          block: "start"
        });
      }
    }, 100);
  };

  const handleGithubClick = () => {
    window.open("https://github.com/techaras/lasi-ai-app", '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      {/* Back Button and GitHub Button */}
      <div className="flex items-center justify-between mb-8">
        <button 
          onClick={handleBackClick}
          className="inline-flex items-center gap-2 text-primary hover:underline cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Case Studies
        </button>
        
        <button
          onClick={handleGithubClick}
          className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:border-ring transition-colors cursor-pointer"
        >
          <GithubIcon className="w-4 h-4" />
          GitHub
        </button>
      </div>

      {/* Video Container */}
      <div className="bento-square mb-8">
        <VideoContainer activeVideo="design" />
      </div>

      {/* Title */}
      <h1 className="font-heading text-3xl text-foreground mb-4">
        Patent-Winning AI Print Design Platform
      </h1>

      {/* Description */}
      <p className="font-body text-lg text-muted-foreground leading-relaxed mb-4">
        AI-powered design solution that transforms how small T-shirt brands create market-driven designs by combining intelligent brand research, customer analysis, and visual generation with interactive 3D visualisation.
      </p>

      {/* Tech Stack */}
      <p className="font-body text-sm text-muted-foreground">
        Next.js • React 19 • Three.js • OpenAI GPT-4 • Replicate API • OpenCV • Fabric.js • TypeScript • MongoDB • Stripe • Clerk Auth
      </p>
    </div>
  );
}