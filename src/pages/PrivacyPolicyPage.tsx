import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";

export function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen w-full bg-black relative">
      {/* Vercel Grid */}
      <div
        className="absolute inset-0 opacity-30"
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
          <h1 className="font-heading text-4xl md:text-5xl text-foreground mb-4">
            PRIVACY POLICY
          </h1>
          
          <p className="font-light text-muted-foreground mb-8">
            Last updated September 24, 2025
          </p>

          <div className="font-light text-card-foreground leading-relaxed space-y-6">
            <p>
              This Privacy Notice for ______ ('we', 'us', or 'our'), describes how and why we might access,
              collect, store, use, and/or share (process) your personal information when you use our services ('Services'), including when you:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>
                Visit our website at http://www.stavrossymeonidis.dev or any website of ours that links to this Privacy Notice
              </li>
              <li>
                Use Full Stack Developer. Professional web development and design services, including full-stack development, UI/UX design, and technical consulting. We help businesses turn their vision into reality through custom digital solutions.
              </li>
              <li>
                Engage with us in other related ways, including any sales, marketing, or events
              </li>
            </ul>

            <p>
              <strong>Questions or concerns?</strong> Reading this Privacy Notice will help you understand your privacy rights and choices. We are responsible for making decisions about how your personal information is processed. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at info@stavrossymeonidis.dev.
            </p>
          </div>
          </div>
        </div>
      </div>
  );
}