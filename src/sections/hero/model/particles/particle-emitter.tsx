import { useRef, useMemo, useCallback, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

// Spline utility for smooth curves
function getLinearSpline(lerp: (t: number, a: number, b: number) => number) {
  const points: [number, number][] = []
  
  function addPoint(t: number, d: number) {
    points.push([t, d])
  }
  
  function getValueAt(t: number): number {
    let p1 = 0
    
    for (let i = 0; i < points.length; i++) {
      if (points[i][0] >= t) {
        break
      }
      p1 = i
    }
    
    const p2 = Math.min(points.length - 1, p1 + 1)
    
    if (p1 === p2) {
      return points[p1][1]
    }
    
    return lerp(
      (t - points[p1][0]) / (points[p2][0] - points[p1][0]),
      points[p1][1], 
      points[p2][1]
    )
  }
  
  return { addPoint, getValueAt }
}

type ParticleData = {
  position: THREE.Vector3
  age: number
  maxAge: number
  alpha: number
  size: number
  currentSize: number
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
  
  // Create splines for smooth particle lifecycle
  const alphaSpline = useMemo(() => {
    const spline = getLinearSpline((t, a, b) => a + t * (b - a))
    spline.addPoint(0.0, 0.0)   // Start invisible
    spline.addPoint(0.2, 0.8)   // Quick fade in
    spline.addPoint(0.5, 1.0)   // Peak visibility 
    spline.addPoint(0.8, 0.6)   // Gradual fade
    spline.addPoint(1.0, 0.0)   // Fade to invisible
    return spline
  }, [])
  
  const sizeSpline = useMemo(() => {
    const spline = getLinearSpline((t, a, b) => a + t * (b - a))
    spline.addPoint(0.0, 0.0)   // Start small
    spline.addPoint(0.3, 0.6)   // Quick initial growth
    spline.addPoint(0.7, 0.9)   // Slow to full size
    spline.addPoint(1.0, 1.0)   // Full size
    return spline
  }, [])
  
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
      alpha: 0,
      size: 0.01,
      currentSize: 0
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
      particle.alpha = 0
      particle.currentSize = 0
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
      
      // Calculate normalized time (0 to 1)
      const t = particle.age / particle.maxAge
      
      // Apply smooth spline curves
      particle.alpha = alphaSpline.getValueAt(t)
      particle.currentSize = particle.size * sizeSpline.getValueAt(t)
      
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
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        vertexColors={false}
        opacity={0.8}
      />
    </Points>
  )
}
