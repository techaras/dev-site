import { useRef, useMemo, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { ParticlePool } from './particle-pool'
import { createAlphaSpline, createSizeSpline } from './spline-config'
import type { ParticleData, ParticleEmitterProps } from './types'

/**
 * Hook that manages particle lifecycle, spawning, and updates
 */
export function useParticleLifecycle({
  sphereRadius,
  particleCount = 5000,
  birthRate = 500,
  lifetime = 10
}: ParticleEmitterProps) {
  
  // Particle data storage
  const particles = useRef<ParticleData[]>([])
  
  // Timing refs
  const spawnAccumulator = useRef(0)
  
  // State to trigger re-renders when particles update
  const [positionsArray, setPositionsArray] = useState<Float32Array>(
    new Float32Array(particleCount * 3)
  )
  
  // Initialize particle pool
  const particlePool = useMemo(() => 
    new ParticlePool(particleCount, sphereRadius, lifetime), 
    [particleCount, sphereRadius, lifetime]
  )
  
  // Create splines for smooth particle lifecycle
  const alphaSpline = useMemo(() => createAlphaSpline(), [])
  const sizeSpline = useMemo(() => createSizeSpline(), [])
  
  // Update pool configuration when props change
  useMemo(() => {
    particlePool.updateConfig(sphereRadius, lifetime)
  }, [particlePool, sphereRadius, lifetime])
  
  // Main update loop
  useFrame((_state, delta) => {
    // Calculate how many particles to spawn this frame
    spawnAccumulator.current += delta * birthRate
    const particlesToSpawn = Math.floor(spawnAccumulator.current)
    spawnAccumulator.current -= particlesToSpawn
    
    // Spawn new particles
    for (let i = 0; i < particlesToSpawn; i++) {
      if (particles.current.length < particleCount) {
        particles.current.push(particlePool.getParticle())
      }
    }
    
    // Update existing particles
    for (let i = particles.current.length - 1; i >= 0; i--) {
      const particle = particles.current[i]
      particle.age += delta
      
      // Calculate normalized time (0 to 1)
      const t = particle.age / particle.maxAge
      
      // Apply smooth spline curves
      particle.alpha = alphaSpline.getValueAt(t)
      particle.currentSize = particle.size * sizeSpline.getValueAt(t)
      
      // Remove expired particles
      if (particle.age >= particle.maxAge) {
        particlePool.returnParticle(particle)
        particles.current.splice(i, 1)
      }
    }
    
    // Update positions array and trigger re-render
    const newPositions = new Float32Array(particleCount * 3)
    
    // Fill with active particles
    for (let i = 0; i < particles.current.length && i < particleCount; i++) {
      const particle = particles.current[i]
      newPositions[i * 3] = particle.position.x
      newPositions[i * 3 + 1] = particle.position.y
      newPositions[i * 3 + 2] = particle.position.z
    }
    
    // Fill remaining with inactive particles at origin
    for (let i = particles.current.length; i < particleCount; i++) {
      newPositions[i * 3] = 0
      newPositions[i * 3 + 1] = 0
      newPositions[i * 3 + 2] = 0
    }
    
    setPositionsArray(newPositions)
  })
  
  return {
    positionsArray
  }
}