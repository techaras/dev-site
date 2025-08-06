export function BottomBar() {
    return (
      <div className="w-full h-full flex flex-col justify-between p-2">
        {/* Top content */}
        <div>
          <h4 className="font-heading text-lg text-foreground mb-3">
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs font-body text-foreground">
              React
            </span>
            <span className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs font-body text-foreground">
              TypeScript
            </span>
            <span className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs font-body text-foreground">
              Python
            </span>
            <span className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs font-body text-foreground">
              FastAPI
            </span>
          </div>
        </div>
  
        {/* Bottom content */}
        <div className="flex justify-between items-center">
          <span className="font-body text-xs text-muted-foreground">Timeline</span>
          <span className="font-body text-xs font-medium text-foreground">8 weeks</span>
        </div>
      </div>
    )
  }