export function RightBar() {
    return (
      <div className="w-full h-full flex flex-col justify-between p-2">
        {/* Top content */}
        <div>
          <h4 className="font-heading text-lg text-foreground mb-3">
            Campaign Results
          </h4>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="font-body text-sm text-muted-foreground">ROAS</span>
              <span className="font-body text-sm font-medium text-foreground">340%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-body text-sm text-muted-foreground">CTR Improvement</span>
              <span className="font-body text-sm font-medium text-foreground">67% higher</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-body text-sm text-muted-foreground">Cost per Lead</span>
              <span className="font-body text-sm font-medium text-foreground">48% lower</span>
            </div>
          </div>
        </div>
  
        {/* Bottom content */}
        <div className="text-center">
          <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
          </div>
          <span className="font-body text-xs text-muted-foreground">Active Campaigns</span>
        </div>
      </div>
    )
  }