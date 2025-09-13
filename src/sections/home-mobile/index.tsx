import { TextShimmer } from "@/components/ui/text-shimmer";

export function MobileHome() {
    return (
      <section 
        id="home" 
        className="relative min-h-screen w-full flex flex-col items-center px-6 pt-32"
      >
        {/* Header */}
        <h1 className="font-heading text-center text-[clamp(2.3rem,8vw,3rem)] leading-[1] mb-1">
            <TextShimmer 
                as="span"
                className="block dark:[--base-color:#f2f2f2] dark:[--base-gradient-color:#B2B2B2]"
                duration={1.5}
                spread={5}
            >
                STREAMLINED OPERATIONS
            </TextShimmer>
        </h1>
  
        {/* Title */}
        <h2 className="font-body font-light text-[#b3b3b3] text-center text-[clamp(0.7rem,3vw,1rem)] tracking-[0.4em] mb-6 uppercase">
          FULL-STACK DEVELOPER
        </h2>
  
        {/* Description Paragraph */}
        <p className="font-body text-center text-base leading-relaxed text-[#b3b3b3] max-w-sm">
          Patent-winning full-stack developer who combines technical expertise with deep business understanding.
        </p>
      </section>
    );
  }