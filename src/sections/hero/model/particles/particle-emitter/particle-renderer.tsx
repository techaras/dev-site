import { Points, PointMaterial, useTexture } from '@react-three/drei'

type ParticleRendererProps = {
  positions: Float32Array
}

/**
 * Pure rendering component for particles with dot blur texture
 * Handles the visual representation using drei's Points and PointMaterial
 */
export function ParticleRenderer({ positions }: ParticleRendererProps) {
  // Load the dot blur texture
  const dotTexture = useTexture('/src/assets/dot-blur.png')
  
  return (
    <Points 
      positions={positions} 
      stride={3} 
      frustumCulled={false}
    >
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        vertexColors={false}
        opacity={0.8}
        map={dotTexture}
        alphaTest={0.01}
      />
    </Points>
  )
}