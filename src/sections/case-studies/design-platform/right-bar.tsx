export function RightBar() {
    return (
      <div className="w-full h-full flex flex-col justify-between p-2">
        {/* Top content */}
        <div>
          <h4 className="font-heading text-lg text-foreground mb-3">
            Key Metrics
          </h4>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="font-body text-sm text-muted-foreground">Processing Speed</span>
              <span className="font-body text-sm font-medium text-foreground">85% faster</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-body text-sm text-muted-foreground">Error Reduction</span>
              <span className="font-body text-sm font-medium text-foreground">92% less</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-body text-sm text-muted-foreground">User Satisfaction</span>
              <span className="font-body text-sm font-medium text-foreground">4.8/5</span>
            </div>
          </div>
        </div>
  
        {/* Bottom content */}
        <div className="text-center">
          <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          </div>
          <span className="font-body text-xs text-muted-foreground">Live Production</span>
        </div>
      </div>
    )
  }