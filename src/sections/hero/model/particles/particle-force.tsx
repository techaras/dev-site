type ParticleForceProps = {
    gravity?: number
    elasticity?: number
    damping?: number
  }
  
  export function ParticleForce(props: ParticleForceProps) {
    // TODO: Implement physics forces
    // - Gravity simulation
    // - Cursor following with damping
    // - Collision detection with elasticity
    // - Curl noise for organic movement
    // Props: gravity=20, elasticity=1, damping=10
    
    console.log('ParticleForce props:', props) // Temporary to use props
    
    return null // Forces will be applied via hooks/context
  }