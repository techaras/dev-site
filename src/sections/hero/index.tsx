import { HeroCanvas } from './model/canvas'

export function Hero() {
  return (
    <section 
      id="home" 
      className="relative h-screen w-full overflow-hidden"
    >
      <div className="absolute inset-0 bg-background">
        <HeroCanvas />
      </div>
    </section>
  )
}
