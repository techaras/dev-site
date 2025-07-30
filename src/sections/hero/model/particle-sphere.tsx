import Spline from '@splinetool/react-spline'
import type { Application } from '@splinetool/runtime'

export function ParticleSphere() {
  function onLoad(spline: Application) {
    console.log('Spline loaded, trying setZoom...');
    // Use the proper public API method
    spline.setZoom(1.6);
    console.log('setZoom(1.6) called');
  }

  return (
    <Spline 
      scene="/scene-f0f0f0.splinecode" 
      onLoad={onLoad}
      style={{ width: '100%', height: '100%' }}
    />
  )
}
