import { useEffect, useRef } from 'react';
import Matter from 'matter-js';

const skills = [
  "ML Pipelines",
  "Multi-platform Integrations", 
  "RAG Systems",
  "LangChain",
  "Multi-tenant SaaS",
  "Enterprise Data Governance",
  "Full-stack Dev",
  "ML Algorithms", 
  "Payment Processing",
  "System Architecture"
];

export function ExperienceSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!canvasRef.current || !boxRef.current) return;

    const canvas = canvasRef.current;
    const container = boxRef.current; // Now observing the entire bento box
    let engine: Matter.Engine;
    let render: Matter.Render;
    let runner: Matter.Runner;

    const setupPhysics = (width: number, height: number) => {
      console.log('Setting up physics with dimensions:', width, height);

      // Create engine
      engine = Matter.Engine.create();
      const world = engine.world;

      // Create renderer
      render = Matter.Render.create({
        canvas: canvas,
        engine: engine,
        options: {
          width: width,
          height: height,
          wireframes: false,
          background: 'transparent',
        }
      });

      // Create walls
      const walls = [
        Matter.Bodies.rectangle(width / 2, -5, width, 10, { 
          isStatic: true,
          render: { visible: false }
        }),
        Matter.Bodies.rectangle(width / 2, height + 5, width, 10, { 
          isStatic: true,
          render: { visible: false }
        }),
        Matter.Bodies.rectangle(-5, height / 2, 10, height, { 
          isStatic: true,
          render: { visible: false }
        }),
        Matter.Bodies.rectangle(width + 5, height / 2, 10, height, { 
          isStatic: true,
          render: { visible: false }
        })
      ];

      // Create simple circles for skills
      const skillBodies = skills.slice(0, 5).map((_, index) => {
        return Matter.Bodies.circle(
          50 + index * 40, 
          30, 
          15, 
          { 
            restitution: 0.8,
            render: { fillStyle: '#353739' }
          }
        );
      });

      // Add to world
      Matter.Composite.add(world, [...walls, ...skillBodies]);

      // Add mouse control
      const mouse = Matter.Mouse.create(canvas);
      const mouseConstraint = Matter.MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: { stiffness: 0.2 }
      });
      Matter.Composite.add(world, mouseConstraint);

      // Run
      runner = Matter.Runner.create();
      Matter.Render.run(render);
      Matter.Runner.run(runner, engine);
    };

    // ResizeObserver to track container dimensions
    const observer = new ResizeObserver(entries => {
      const { width, height } = entries[0].contentRect;
      
      // Clean up existing physics world
      if (render) Matter.Render.stop(render);
      if (runner) Matter.Runner.stop(runner);
      if (engine) Matter.Engine.clear(engine);
      
      // Set canvas size
      canvas.width = width;
      canvas.height = height;
      
      // Setup new physics world with correct dimensions
      setupPhysics(width, height);
    });

    observer.observe(container);

    return () => {
      observer.disconnect();
      if (render) Matter.Render.stop(render);
      if (runner) Matter.Runner.stop(runner);
      if (engine) Matter.Engine.clear(engine);
    };
  }, []);

  return (
    <div 
      ref={boxRef}
      className="bg-black border border-[#353739] rounded-3xl p-8 transition-all duration-300 ease hover:border-[#555759] hover:transform hover:-translate-y-1 row-span-4 flex flex-col relative"
    >
      {/* Canvas covering entire box */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full rounded-3xl pointer-events-auto"
      />
      
      {/* Static overlay text */}
      <div className="relative z-10 pointer-events-none">
        <h3 className="font-heading text-xl text-foreground mb-2">
          Experience
        </h3>
        <p className="font-body text-sm text-muted-foreground font-light mb-4 leading-relaxed">
          From startup MVP to enterprise scale
        </p>
      </div>
      
      <div className="flex-1 relative z-10 pointer-events-none">
        {/* Content spacer */}
      </div>
    </div>
  );
}