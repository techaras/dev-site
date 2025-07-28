export function Hero() {
    return (
      <section 
        id="home" 
        className="relative h-screen w-full overflow-hidden"
      >
        {/* 3D Model will go here later */}
        <div className="absolute inset-0 bg-background">
          {/* Placeholder for the 3D scene */}
          <div className="flex h-full items-center justify-center">
            <p className="text-sm text-muted-foreground">
              3D Model will be rendered here
            </p>
          </div>
        </div>
      </section>
    );
  }