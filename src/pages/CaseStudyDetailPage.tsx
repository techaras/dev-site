import { useParams, Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import { DesignPlatformDetail } from "@/sections/case-studies/detail/design-platform-detail";
import { AdvertisingPlatformDetail } from "@/sections/case-studies/detail/advertising-platform-detail";

export function CaseStudyDetailPage() {
  const { slug } = useParams<{ slug: string }>();

  // Route to appropriate detail component based on slug
  const renderCaseStudyDetail = () => {
    switch (slug) {
      case "design-platform":
        return <DesignPlatformDetail />;
      case "advertising-platform":
        return <AdvertisingPlatformDetail />;
      default:
        return (
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-2xl font-heading mb-4">Case Study Not Found</h1>
              <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {renderCaseStudyDetail()}
    </div>
  );
}