import { useRef } from "react";
import { AnimatedBeam } from "@/components/magicui/animated-beam";

interface HomeMobileBeamsProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
}

export function HomeMobileBeams({ containerRef }: HomeMobileBeamsProps) {
  const node1Ref = useRef<HTMLDivElement>(null);
  const node2Ref = useRef<HTMLDivElement>(null);

  return (
    <>
      {/* Grid anchor points - positioned to create beam along grid line */}
      <div
        ref={node1Ref}
        className="absolute w-4 h-4 bg-red-500 border-2 border-white z-20"
        style={{ 
          left: '0px',  // Grid intersection
          top: '263.5px'    // Grid intersection
        }}
      />
      <div
        ref={node2Ref}
        className="absolute w-4 h-4 bg-green-500 border-2 border-white z-20"
        style={{ 
          left: '390px', // Same grid line horizontally
          top: '263.5px'    // SAME Y - travels horizontally along grid line
        }}
      />

      {/* Single Animated Beam */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={node1Ref}
        toRef={node2Ref}
        curvature={0}
        duration={5}
        pathColor="rgba(53, 55, 57, 0.8)"
        pathWidth={2}
        gradientStartColor="#A07CFE"
        gradientStopColor="#FE8FB5"
      />
    </>
  );
}
