import * as THREE from 'three'
import type { ParticleData } from './types'

/**
 * Manages a pool of particle objects for performance optimization
 * Reuses objects instead of creating/destroying them constantly
 */
export class ParticlePool {
  private pool: ParticleData[] = []
  private sphereRadius: number
  private lifetime: number

  constructor(poolSize: number, sphereRadius: number, lifetime: number) {
    this.sphereRadius = sphereRadius
    this.lifetime = lifetime
    this.initializePool(poolSize)
  }

  /**
   * Initialize the pool with pre-created particles
   */
  private initializePool(poolSize: number) {
    this.pool = []
    for (let i = 0; i < poolSize; i++) {
      this.pool.push(this.createParticle())
    }
  }

  /**
   * Create a new particle with default properties
   */
  private createParticle(): ParticleData {
    return {
      position: this.generateSpherePosition(),
      age: 0,
      maxAge: this.lifetime,
      alpha: 0,
      size: 0.01,
      currentSize: 0
    }
  }

  /**
   * Generate random position on sphere surface using uniform distribution
   */
  private generateSpherePosition(): THREE.Vector3 {
    const theta = Math.random() * Math.PI * 2 // Azimuthal angle
    const phi = Math.acos(2 * Math.random() - 1) // Polar angle for uniform distribution
    
    return new THREE.Vector3(
      this.sphereRadius * Math.sin(phi) * Math.cos(theta),
      this.sphereRadius * Math.sin(phi) * Math.sin(theta),
      this.sphereRadius * Math.cos(phi)
    )
  }

  /**
   * Get a particle from the pool or create a new one if pool is empty
   */
  getParticle(): ParticleData {
    if (this.pool.length > 0) {
      const particle = this.pool.pop()!
      // Reset particle properties
      particle.position.copy(this.generateSpherePosition())
      particle.age = 0
      particle.alpha = 0
      particle.currentSize = 0
      return particle
    }
    return this.createParticle()
  }

  /**
   * Return a particle to the pool for reuse
   */
  returnParticle(particle: ParticleData) {
    this.pool.push(particle)
  }

  /**
   * Update pool configuration when props change
   */
  updateConfig(sphereRadius: number, lifetime: number) {
    this.sphereRadius = sphereRadius
    this.lifetime = lifetime
  }
}