import { Canvas } from '@react-three/fiber'
import { HeroSphere } from './sphere'
import { Lights } from './lights'

export function HeroCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 75 }}
      style={{ width: '100%', height: '100%' }}
    >
      <Lights />
      <HeroSphere />
    </Canvas>
  )
}
