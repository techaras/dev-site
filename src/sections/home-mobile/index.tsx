export function MobileHome() {
    return (
      <section 
        id="home" 
        className="relative h-screen w-full flex flex-col justify-center items-center px-6"
      >
        {/* Header */}
        <h1 className="font-heading text-center text-[clamp(2.3rem,8vw,3rem)] leading-[1] text-foreground mb-1">
          STREAMLINED<br />OPERATIONS
        </h1>
  
        {/* Title */}
        <h2 className="font-body font-light text-[#b3b3b3] text-center text-[clamp(0.7rem,3vw,1rem)] tracking-[0.3em] mb-6 uppercase">
          FULL-STACK DEVELOPER
        </h2>
  
        {/* Description Paragraph */}
        <p className="font-body text-center text-base leading-relaxed text-[#b3b3b3] max-w-sm">
          Patent-winning full-stack developer who combines technical expertise with deep business understanding.
        </p>
      </section>
    );
  }