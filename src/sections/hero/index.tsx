import { ParticleSphere } from './model/particle-sphere'
import { HeroTitle } from './content/hero-title'
import { HeroInfoGrid } from './content/hero-info-grid'
import { AvailabilityStatus } from './content/availability-status'

export function Hero() {
  return (
    <section 
      id="home" 
      className="relative h-screen w-full overflow-hidden"
    >
      <div className="absolute inset-0 bg-background">
        <ParticleSphere />
      </div>

      {/* Mobile Layout: Top-aligned vertical stack (default, under 768px) */}
      <div className="relative z-10 h-full flex flex-col pt-24 px-6 md:hidden mt-32">
          <HeroTitle />
        <div className="max-[562px]:-mt-6 mt-8">
          <HeroInfoGrid />
        </div>
        <div className="mt-8">
          <AvailabilityStatus />
        </div>
      </div>

      {/* Desktop Layout: Centered with absolute positioning (768px and above) */}
      <div className="absolute inset-0 z-10 flex-col hidden md:flex">
        <div className="flex-1 flex items-center">
          <HeroTitle />
        </div>
        <div className="flex-1 flex items-center mt-16">
          <div className="w-full">
            <HeroInfoGrid />
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <AvailabilityStatus />
        </div>
      </div>
    </section>
  )
}
