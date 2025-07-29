import { useRef, useMemo, useCallback, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

type ParticleData = {
  position: THREE.Vector3
  age: number
  maxAge: number
  alpha: number
}

type ParticleEmitterProps = {
  sphereRadius: number
  particleCount?: number
  birthRate?: number
  lifetime?: number
}

export function ParticleEmitter({ 
  sphereRadius, 
  particleCount = 5000, // Reduced for debugging
  birthRate = 500, // Reduced for debugging
  lifetime = 10 // Seconds
}: ParticleEmitterProps) {
  
  // Particle data storage
  const particles = useRef<ParticleData[]>([])
  const particlePool = useRef<ParticleData[]>([])
  
  // State to trigger re-renders when particles update
  const [positionsArray, setPositionsArray] = useState<Float32Array>(new Float32Array(particleCount * 3))
  
  // Timing refs
  const spawnAccumulator = useRef(0)
  
  // Generate random position on sphere surface
  const generateSpherePosition = useCallback(() => {
    const theta = Math.random() * Math.PI * 2 // Azimuthal angle
    const phi = Math.acos(2 * Math.random() - 1) // Polar angle for uniform distribution
    
    return new THREE.Vector3(
      sphereRadius * Math.sin(phi) * Math.cos(theta),
      sphereRadius * Math.sin(phi) * Math.sin(theta),
      sphereRadius * Math.cos(phi)
    )
  }, [sphereRadius])
  
  // Create a new particle
  const createParticle = useCallback((): ParticleData => {
    return {
      position: generateSpherePosition(),
      age: 0,
      maxAge: lifetime,
      alpha: 1
    }
  }, [generateSpherePosition, lifetime])
  
  // Initialize particle pool for object reuse (performance optimization)
  const initializePool = useCallback(() => {
    particlePool.current = []
    for (let i = 0; i < particleCount; i++) {
      particlePool.current.push(createParticle())
    }
  }, [particleCount, createParticle])
  
  // Get particle from pool or create new one
  const getParticle = useCallback((): ParticleData => {
    if (particlePool.current.length > 0) {
      const particle = particlePool.current.pop()!
      // Reset particle properties
      particle.position.copy(generateSpherePosition())
      particle.age = 0
      particle.alpha = 1
      return particle
    }
    return createParticle()
  }, [generateSpherePosition, createParticle])
  
  // Return particle to pool
  const returnParticle = useCallback((particle: ParticleData) => {
    particlePool.current.push(particle)
  }, [])
  
  // Initialize pool
  useMemo(() => {
    initializePool()
  }, [initializePool])
  
  // Main update loop
  useFrame((_state, delta) => {
    // Calculate how many particles to spawn this frame
    spawnAccumulator.current += delta * birthRate
    const particlesToSpawn = Math.floor(spawnAccumulator.current)
    spawnAccumulator.current -= particlesToSpawn
    
    // Spawn new particles
    for (let i = 0; i < particlesToSpawn; i++) {
      if (particles.current.length < particleCount) {
        particles.current.push(getParticle())
      }
    }
    
    // Update existing particles
    for (let i = particles.current.length - 1; i >= 0; i--) {
      const particle = particles.current[i]
      particle.age += delta
      
      // Calculate linear fade out
      particle.alpha = Math.max(0, 1 - (particle.age / particle.maxAge))
      
      // Remove expired particles
      if (particle.age >= particle.maxAge) {
        returnParticle(particle)
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
  
  return (
    <Points 
      positions={positionsArray} 
      stride={3} 
      frustumCulled={false}
    >
      <PointMaterial
        transparent
        color="#828282"
        size={0.01}
        sizeAttenuation={true}
        depthWrite={false}
        vertexColors={false}
        opacity={1}
      />
    </Points>
  )
}
