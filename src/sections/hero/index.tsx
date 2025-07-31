import { ParticleSphere } from './model/particle-sphere'
import { HeroTitle } from './content/hero-title'
import { HeroInfoGrid } from './content/hero-info-grid'

export function Hero() {
  return (
    <section 
      id="home" 
      className="relative h-screen w-full overflow-hidden"
    >
      <div className="absolute inset-0 bg-background">
        <ParticleSphere />
      </div>
      <div className="absolute inset-0 z-10 flex flex-col justify-between">
        <div className="flex-1 flex items-center">
          <HeroTitle />
        </div>
        <div className="flex-1 flex items-center">
          <div className="w-full">
            <HeroInfoGrid />
          </div>
        </div>
      </div>
    </section>
  )
}
