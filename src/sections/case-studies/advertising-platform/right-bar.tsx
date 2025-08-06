export function RightBar() {
  return (
    <div className="w-full h-full flex flex-col overflow-y-auto">
      {/* Header */}
      <div className="mb-6">
        <h3 className="font-heading text-2xl text-foreground mb-2">
          Advertising Platform
        </h3>
        <p className="font-body text-sm text-muted-foreground leading-relaxed">
          Built in 6 weeks | Solo development
        </p>
      </div>

      {/* Problem Section */}
      <div className="mb-6">
        <h4 className="font-heading text-lg text-foreground mb-2">
          Problem
        </h4>
        <ul className="space-y-2">
          <li className="font-body text-sm text-muted-foreground leading-relaxed">
            • Manual campaign creation takes weeks and introduces human error
          </li>
          <li className="font-body text-sm text-muted-foreground leading-relaxed">
            • Time-intensive processes delay campaign launches and reduce efficiency
          </li>
        </ul>
      </div>

      {/* Solution Section */}
      <div className="mb-6">
        <h4 className="font-heading text-lg text-foreground mb-2">
          Solution
        </h4>
        <ul className="space-y-2">
          <li className="font-body text-sm text-muted-foreground leading-relaxed">
            • Intelligent form-to-email-to-campaign creation automation
          </li>
          <li className="font-body text-sm text-muted-foreground leading-relaxed">
            • Multi-tenant architecture with automatic form routing
          </li>
          <li className="font-body text-sm text-muted-foreground leading-relaxed">
            • Zero-touch campaign configuration eliminates manual setup
          </li>
        </ul>
      </div>

      {/* Impact Section */}
      <div className="flex-1">
        <h4 className="font-heading text-lg text-foreground mb-2">
          Impact
        </h4>
        <ul className="space-y-2">
          <li className="font-body text-sm text-muted-foreground leading-relaxed">
            • Eliminates human error in campaign creation process
          </li>
          <li className="font-body text-sm text-muted-foreground leading-relaxed">
            • Reduces setup time
          </li>
        </ul>
      </div>
    </div>
  )
}