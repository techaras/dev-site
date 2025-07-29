import { useMemo } from 'react'
import { Points, PointMaterial } from '@react-three/drei'

type ParticleEmitterProps = {
  sphereRadius: number
  particleCount: number
}

export function ParticleEmitter({ sphereRadius, particleCount }: ParticleEmitterProps) {
  // Generate particles in a sphere formation
  const particlePositions = useMemo(() => {
    const positions = new Float32Array(particleCount * 3) // 3 coords each
    
    for (let i = 0; i < particleCount; i++) {
      // Generate random points on sphere surface using spherical coordinates
      const theta = Math.random() * Math.PI * 2 // Azimuthal angle
      const phi = Math.acos(2 * Math.random() - 1) // Polar angle for uniform distribution
      
      const x = sphereRadius * Math.sin(phi) * Math.cos(theta)
      const y = sphereRadius * Math.sin(phi) * Math.sin(theta)
      const z = sphereRadius * Math.cos(phi)
      
      positions[i * 3] = x
      positions[i * 3 + 1] = y
      positions[i * 3 + 2] = z
    }
    
    return positions
  }, [sphereRadius, particleCount])
  
  return (
    <Points positions={particlePositions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#828282"
        size={0.01}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={1}
      />
    </Points>
  )
}