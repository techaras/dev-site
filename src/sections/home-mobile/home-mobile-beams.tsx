import { useRef, useEffect, useState } from "react";
import { AnimatedBeam } from "@/components/magicui/animated-beam";

interface HomeMobileBeamsProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
}

export function HomeMobileBeams({ containerRef }: HomeMobileBeamsProps) {
  const node1Ref = useRef<HTMLDivElement>(null);
  const node2Ref = useRef<HTMLDivElement>(null);
  const node3Ref = useRef<HTMLDivElement>(null);
  const node4Ref = useRef<HTMLDivElement>(null);
  const node5Ref = useRef<HTMLDivElement>(null);
  const node6Ref = useRef<HTMLDivElement>(null);
  const verticalNode1Ref = useRef<HTMLDivElement>(null);
  const verticalNode2Ref = useRef<HTMLDivElement>(null);
  const verticalNode3Ref = useRef<HTMLDivElement>(null);
  const verticalNode4Ref = useRef<HTMLDivElement>(null);
  const verticalNode5Ref = useRef<HTMLDivElement>(null);
  const verticalNode6Ref = useRef<HTMLDivElement>(null);
  
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
      {/* Original horizontal grid anchor points */}
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

      {/* New horizontal grid anchor points - 120px above */}
      <div
        ref={node3Ref}
        className="absolute w-4 h-4 bg-cyan-500 border-2 border-white z-20"
        style={{ 
          left: `${positions.node1}px`,
          top: '143.5px'
        }}
      />
      <div
        ref={node4Ref}
        className="absolute w-4 h-4 bg-pink-500 border-2 border-white z-20"
        style={{ 
          left: `${positions.node2}px`,
          top: '143.5px'
        }}
      />

      {/* New horizontal grid anchor points - 120px below */}
      <div
        ref={node5Ref}
        className="absolute w-4 h-4 bg-indigo-500 border-2 border-white z-20"
        style={{ 
          left: `${positions.node1}px`,
          top: '383.5px'
        }}
      />
      <div
        ref={node6Ref}
        className="absolute w-4 h-4 bg-emerald-500 border-2 border-white z-20"
        style={{ 
          left: `${positions.node2}px`,
          top: '383.5px'
        }}
      />

      {/* First vertical grid anchor points */}
      <div
        ref={verticalNode1Ref}
        className="absolute w-4 h-4 bg-blue-500 border-2 border-white z-20"
        style={{ 
          left: '33.5px',
          top: '100px'
        }}
      />
      <div
        ref={verticalNode2Ref}
        className="absolute w-4 h-4 bg-yellow-500 border-2 border-white z-20"
        style={{ 
          left: '33.5px',
          top: '430px'
        }}
      />

      {/* Second vertical grid anchor points - 120px to the right */}
      <div
        ref={verticalNode3Ref}
        className="absolute w-4 h-4 bg-purple-500 border-2 border-white z-20"
        style={{ 
          left: '153.5px',
          top: '100px'
        }}
      />
      <div
        ref={verticalNode4Ref}
        className="absolute w-4 h-4 bg-orange-500 border-2 border-white z-20"
        style={{ 
          left: '153.5px',
          top: '430px'
        }}
      />

      {/* Third vertical grid anchor points - 120px to the right */}
      <div
        ref={verticalNode5Ref}
        className="absolute w-4 h-4 bg-amber-500 border-2 border-white z-20"
        style={{ 
          left: '273.5px',
          top: '100px'
        }}
      />
      <div
        ref={verticalNode6Ref}
        className="absolute w-4 h-4 bg-teal-500 border-2 border-white z-20"
        style={{ 
          left: '273.5px',
          top: '430px'
        }}
      />

      {/* Original Horizontal Animated Beam */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={node1Ref}
        toRef={node2Ref}
        curvature={0}
        duration={5}
        reverse={true}
        pathColor="rgba(53, 55, 57, 0.8)"
        pathWidth={2}
        gradientStartColor="#A07CFE"
        gradientStopColor="#FE8FB5"
      />

      {/* New Horizontal Animated Beam - 120px above */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={node3Ref}
        toRef={node4Ref}
        curvature={0}
        duration={5}
        pathColor="rgba(53, 55, 57, 0.8)"
        pathWidth={2}
        gradientStartColor="#A07CFE"
        gradientStopColor="#FE8FB5"
      />

      {/* New Horizontal Animated Beam - 120px below */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={node5Ref}
        toRef={node6Ref}
        curvature={0}
        duration={5}
        pathColor="rgba(53, 55, 57, 0.8)"
        pathWidth={2}
        gradientStartColor="#A07CFE"
        gradientStopColor="#FE8FB5"
      />

      {/* First Vertical Animated Beam */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={verticalNode1Ref}
        toRef={verticalNode2Ref}
        curvature={0}
        duration={5}
        pathColor="rgba(53, 55, 57, 0.8)"
        pathWidth={2}
        gradientStartColor="#A07CFE"
        gradientStopColor="#FE8FB5"
      />

      {/* Second Vertical Animated Beam - fires from down upwards */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={verticalNode3Ref}
        toRef={verticalNode4Ref}
        curvature={0}
        duration={5}
        reverse={true}
        pathColor="rgba(53, 55, 57, 0.8)"
        pathWidth={2}
        gradientStartColor="#A07CFE"
        gradientStopColor="#FE8FB5"
      />

      {/* Third Vertical Animated Beam - fires from up downwards */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={verticalNode5Ref}
        toRef={verticalNode6Ref}
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
