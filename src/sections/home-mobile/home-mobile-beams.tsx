import { useRef, useEffect, useState } from "react";
import { AnimatedBeam } from "@/components/magicui/animated-beam";

interface HomeMobileBeamsProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
}

export function HomeMobileBeams({ containerRef }: HomeMobileBeamsProps) {
  const node1Ref = useRef<HTMLDivElement>(null);
  const node2Ref = useRef<HTMLDivElement>(null);
  
  const [positions, setPositions] = useState({ node1: 0, node2: 300 });

  useEffect(() => {
    const updatePositions = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        setPositions({
          node1: 0, // 0px from left (at the edge)
          node2: width - 10 // 10px from right (accounting for node width)
        });
      }
    };

    // Initial calculation
    updatePositions();

    // Handle resize with ResizeObserver
    const resizeObserver = new ResizeObserver(updatePositions);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, [containerRef]);

  return (
    <>
      {/* Grid anchor points - positioned dynamically */}
      <div
        ref={node1Ref}
        className="absolute w-4 h-4 bg-red-500 border-2 border-white z-20"
        style={{ 
          left: `${positions.node1}px`,
          top: '263.5px'
        }}
      />
      <div
        ref={node2Ref}
        className="absolute w-4 h-4 bg-green-500 border-2 border-white z-20"
        style={{ 
          left: `${positions.node2}px`,
          top: '263.5px'
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
