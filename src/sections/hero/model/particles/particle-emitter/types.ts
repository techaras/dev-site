import * as THREE from 'three'

export type ParticleData = {
  position: THREE.Vector3
  age: number
  maxAge: number
  alpha: number
  size: number
  currentSize: number
}

export type ParticleEmitterProps = {
  sphereRadius: number
  particleCount?: number
  birthRate: number        // ✅ Required, no default
  lifetime?: number
}

export type SplineFunction = {
  addPoint: (t: number, d: number) => void
  getValueAt: (t: number) => number
}