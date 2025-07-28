import { useThree } from '@react-three/fiber'
import { Sphere } from '@react-three/drei'

export function HeroSphere() {
  const { size } = useThree()
  
  // Calculate responsive sphere size based on actual screen dimensions
  // This ensures 80% coverage regardless of screen size
  const baseSize = Math.min(size.width, size.height) * 0.8
  const sphereSize = baseSize / 200 // Convert pixels to Three.js units
  
  return (
    <Sphere args={[sphereSize, 64, 64]} position={[0, 0, 0]}>
      <meshBasicMaterial
        color="#ffffff"
        wireframe
        transparent
        opacity={0.1}
      />
    </Sphere>
  )
}
