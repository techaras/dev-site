export function RightBar() {
  return (
    <div className="w-full h-full flex flex-col overflow-y-auto">
      {/* Header */}
      <div className="mb-6">
        <h3 className="font-heading text-2xl text-foreground mb-2">
          Design Platform
        </h3>
        <p className="font-body text-sm text-muted-foreground leading-relaxed">
          Built in 6 months | Patent-winning innovation | AI Forge validated
        </p>
      </div>

      {/* Problem Section */}
      <div className="mb-6">
        <h4 className="font-heading text-lg text-foreground mb-2">
          Problem
        </h4>
        <ul className="space-y-2">
          <li className="font-body text-sm text-muted-foreground leading-relaxed">
            • Small T-shirt brands don't know what to design or who to design for
          </li>
          <li className="font-body text-sm text-muted-foreground leading-relaxed">
            • Traditional design process lacks market research and customer insights
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
            • AI research engine analyses brands, owners, and target markets using LLMs
          </li>
          <li className="font-body text-sm text-muted-foreground leading-relaxed">
            • Generates visual designs displayed on interactive 3D T-shirts
          </li>
          <li className="font-body text-sm text-muted-foreground leading-relaxed">
            • Advanced editing tools with edge detection and shape segmentation
          </li>
        </ul>
      </div>

      {/* Achievements Section */}
      <div className="flex-1">
        <h4 className="font-heading text-lg text-foreground mb-2">
          Achievements
        </h4>
        <ul className="space-y-2">
          <li className="font-body text-sm text-muted-foreground leading-relaxed">
            • Won U.S. Patent #US10324916B2
          </li>
          <li className="font-body text-sm text-muted-foreground leading-relaxed">
            • Secured elite AI Forge accelerator placement (12 of 500+ applicants)
          </li>
        </ul>
      </div>
    </div>
  )
}