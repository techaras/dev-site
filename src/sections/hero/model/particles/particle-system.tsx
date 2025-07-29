import { useThree } from '@react-three/fiber'
import { ParticleEmitter } from './particle-emitter'

export function ParticleSystem() {
  const { size } = useThree()
  
  // Calculate responsive size based on screen dimensions
  const baseSize = Math.min(size.width, size.height) * 0.8
  const sphereRadius = baseSize / 200
  
  return (
    <ParticleEmitter 
      sphereRadius={sphereRadius}
      particleCount={10000}
    />
  )
}