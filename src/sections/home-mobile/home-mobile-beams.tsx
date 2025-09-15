import { useRef, useEffect } from "react";
import { AnimatedBeam } from "@/components/magicui/animated-beam";

interface HomeMobileBeamsProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
}

export function HomeMobileBeams({ containerRef }: HomeMobileBeamsProps) {
  const node1Ref = useRef<HTMLDivElement>(null);
  const node2Ref = useRef<HTMLDivElement>(null);
  const node3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log('⚡ BEAMS COMPONENT MOUNTED');
    
    const debugPositions = () => {
      console.log('🔧 BEAMS DEBUG FUNCTION CALLED');
      console.log('🔧 Container ref exists:', !!containerRef.current);
      console.log('🔧 Node1 ref exists:', !!node1Ref.current);
      console.log('🔧 Node2 ref exists:', !!node2Ref.current);
      console.log('🔧 Node3 ref exists:', !!node3Ref.current);
      
      if (containerRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        console.log('🔧 CONTAINER DIMENSIONS:', containerRect);
      }
      
      if (node1Ref.current) {
        console.log('🔧 NODE1 POSITION:', {
          offsetLeft: node1Ref.current.offsetLeft,
          offsetTop: node1Ref.current.offsetTop,
          styleLeft: node1Ref.current.style.left,
          styleTop: node1Ref.current.style.top
        });
      }
      
      if (node2Ref.current) {
        console.log('🔧 NODE2 POSITION:', {
          offsetLeft: node2Ref.current.offsetLeft,
          offsetTop: node2Ref.current.offsetTop,
          styleLeft: node2Ref.current.style.left,
          styleTop: node2Ref.current.style.top
        });
      }
      
      if (node3Ref.current) {
        console.log('🔧 NODE3 POSITION:', {
          offsetLeft: node3Ref.current.offsetLeft,
          offsetTop: node3Ref.current.offsetTop,
          styleLeft: node3Ref.current.style.left,
          styleTop: node3Ref.current.style.top
        });
      }
      
      console.log('🔧 GRID MATH:', {
        gridSize: '60px x 60px',
        backgroundPosition: '-20px 30px',
        calculatedFirstX: -20 + 60,
        calculatedFirstY: 30 + 60
      });
    };

    // Debug immediately
    debugPositions();
    
    // Debug after a delay
    setTimeout(() => {
      console.log('🔧 DELAYED BEAMS DEBUG:');
      debugPositions();
    }, 500);
    
  }, [containerRef]);

  return (
    <>
      {/* Grid anchor points - positioned to create beams along grid lines */}
      <div
        ref={node1Ref}
        className="absolute w-4 h-4 bg-red-500 border-2 border-white z-20"
        style={{ 
          left: '40px',  // Grid intersection
          top: '90px'    // Grid intersection
        }}
      />
      <div
        ref={node2Ref}
        className="absolute w-4 h-4 bg-green-500 border-2 border-white z-20"
        style={{ 
          left: '150px', // Same grid line horizontally
          top: '90px'    // SAME Y - travels horizontally along grid line
        }}
      />
      <div
        ref={node3Ref}
        className="absolute w-4 h-4 bg-blue-500 border-2 border-white z-20"
        style={{ 
          left: '150px', // SAME X - travels vertically along grid line  
          top: '300px'   // Different grid line vertically
        }}
      />

      {/* Animated Beams */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={node1Ref}
        toRef={node2Ref}
        curvature={0}
        duration={6}
        pathColor="rgba(53, 55, 57, 0.8)"
        pathWidth={2}
        gradientStartColor="#A07CFE"
        gradientStopColor="#FE8FB5"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={node2Ref}
        toRef={node3Ref}
        curvature={0}
        duration={6}
        pathColor="rgba(53, 55, 57, 0.8)"
        pathWidth={2}
        gradientStartColor="#FE8FB5"
        gradientStopColor="#FFBE7B"
      />
    </>
  );
}