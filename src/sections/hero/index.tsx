import { ParticleSphere } from './model/particle-sphere'

export function Hero() {
  return (
    <section 
      id="home" 
      className="relative h-screen w-full overflow-hidden"
    >
      <div className="absolute inset-0 bg-background">
        <ParticleSphere />
      </div>
    </section>
  )
}
