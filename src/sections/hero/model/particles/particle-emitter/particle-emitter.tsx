import { useParticleLifecycle } from './use-particle-lifecycle'
import { ParticleRenderer } from './particle-renderer'
import type { ParticleEmitterProps } from './types'

/**
 * Main particle emitter component that orchestrates the particle system
 * This component combines the lifecycle management with rendering
 */
export function ParticleEmitter({ 
  sphereRadius, 
  particleCount = 5000,
  birthRate = 500,
  lifetime = 10
}: ParticleEmitterProps) {
  
  // Use the particle lifecycle hook to manage spawning and updates
  const { positionsArray } = useParticleLifecycle({
    sphereRadius,
    particleCount,
    birthRate,
    lifetime
  })
  
  // Render the particles using the renderer component
  return (
    <ParticleRenderer 
      positions={positionsArray}
    />
  )
}