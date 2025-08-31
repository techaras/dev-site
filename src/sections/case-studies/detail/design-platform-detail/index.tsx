import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import { VideoContainer } from "../../shared/video-container";

export function DesignPlatformDetail() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      {/* Back Button */}
      <Link to="/#case-studies" className="inline-flex items-center gap-2 text-primary hover:underline mb-8">
        <ArrowLeft className="w-4 h-4" />
        Back to Case Studies
      </Link>

      {/* Video Container */}
      <div className="bento-square">
        <VideoContainer activeVideo="design" />
      </div>
    </div>
  );
}