export function DesignPlatformVideo() {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-center">
          <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
            <svg 
              className="w-8 h-8 text-primary" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
          <h4 className="font-heading text-xl text-foreground mb-2">
            Design Platform Demo
          </h4>
          <p className="font-body text-sm text-muted-foreground">
            Interactive video demonstration
          </p>
        </div>
      </div>
    );
  }