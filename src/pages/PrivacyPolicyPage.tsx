import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { privacyPolicyContent } from "@/content/privacy-policy";

export function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen w-full bg-black relative">
      {/* Vercel Grid */}
      <div
        className="fixed inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          opacity: 1,
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 md:px-12 lg:px-16 py-12">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        {/* Privacy Policy Content */}
        <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
          <h1 className="font-heading text-2xl md:text-5xl text-foreground mb-4">
            {privacyPolicyContent.title}
          </h1>
          
          <p className="font-light text-muted-foreground mb-8">
            {privacyPolicyContent.lastUpdated}
          </p>

          <div className="font-light text-card-foreground/80 leading-relaxed space-y-6 prose prose-invert prose-lg max-w-none">
            <ReactMarkdown
              components={{
                h2: ({ children }) => (
                  <h2 className="font-heading text-2xl md:text-3xl text-foreground mt-8 mb-4 first:mt-0">
                    {children}
                  </h2>
                ),
                p: ({ children }) => (
                  <p className="mb-4 leading-relaxed">
                    {children}
                  </p>
                ),
                strong: ({ children }) => (
                  <strong className="text-foreground font-semibold">
                    {children}
                  </strong>
                ),
                em: ({ children }) => (
                  <em className="text-muted-foreground">
                    {children}
                  </em>
                ),
                ul: ({ children }) => (
                  <ul className="space-y-2 mb-4">
                    {children}
                  </ul>
                ),
                ol: ({ children }) => (
                  <ol className="space-y-3 mb-6 list-decimal list-inside text-foreground font-medium">
                    {children}
                  </ol>
                ),
              }}
            >
              {privacyPolicyContent.content}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
}