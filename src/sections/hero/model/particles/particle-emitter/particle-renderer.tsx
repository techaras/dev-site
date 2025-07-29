import { Points, PointMaterial } from '@react-three/drei'

type ParticleRendererProps = {
  positions: Float32Array
}

/**
 * Pure rendering component for particles
 * Handles the visual representation using drei's Points and PointMaterial
 */
export function ParticleRenderer({ positions }: ParticleRendererProps) {
  return (
    <Points 
      positions={positions} 
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