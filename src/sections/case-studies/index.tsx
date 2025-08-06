import { DesignPlatform } from './design-platform'
import { AdvertisingPlatform } from './advertising-platform'

export function CaseStudies() {
  return (
    <section 
      id="case-studies" 
      className="py-20 px-6 md:px-12 lg:px-16"
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="mb-12 text-center">
          <h2 className="font-body text-lg font-light text-foreground mb-4">
            CASE STUDIES
          </h2>
          <p className="font-heading text-5xl text-foreground">
            Curated Work
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="flex flex-col gap-16">
          {/* Design Platform */}
          <DesignPlatform />
          
          {/* Advertising Platform */}
          <AdvertisingPlatform />
        </div>
      </div>
    </section>
  )
}