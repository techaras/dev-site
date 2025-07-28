import { useMemo } from 'react'
import { useThree } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'

export function HeroSphere() {
  const { size } = useThree()
  
  // Calculate responsive size based on screen dimensions
  const baseSize = Math.min(size.width, size.height) * 0.8
  const sphereRadius = baseSize / 200
  
  // Generate particles in a sphere formation
  const particlePositions = useMemo(() => {
    const positions = new Float32Array(10000 * 3) // 10000 particles, 3 coords each
    
    for (let i = 0; i < 10000; i++) {
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
  }, [sphereRadius])
  
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
