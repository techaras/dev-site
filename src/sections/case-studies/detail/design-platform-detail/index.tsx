import { useNavigate } from "react-router";
import { ArrowLeft } from "lucide-react";
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

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      {/* Back Button */}
      <button 
        onClick={handleBackClick}
        className="inline-flex items-center gap-2 text-primary hover:underline mb-8 cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Case Studies
      </button>

      {/* Video Container */}
      <div className="bento-square">
        <VideoContainer activeVideo="design" />
      </div>
    </div>
  );
}