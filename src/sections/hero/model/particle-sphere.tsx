import { useEffect, useState } from 'react'
import Spline from '@splinetool/react-spline'
import type { Application } from '@splinetool/runtime'

export function ParticleSphere() {
  const [splineApp, setSplineApp] = useState<Application | null>(null)
  const [shouldRender3D, setShouldRender3D] = useState<boolean>(false)

  // Check if screen is large enough for 3D rendering
  const checkScreenSize = () => {
    return window.innerWidth >= 768
  }

  // Function to get appropriate zoom level based on screen size
  const getZoomLevel = () => {
    const width = window.innerWidth
    if (width < 768) { // Mobile (sm breakpoint)
      return 1
    } else if (width < 1024) { // Tablet (lg breakpoint)
      return 1.2
    } else { // Desktop
      return 1.6
    }
  }

  function onLoad(spline: Application) {
    console.log('Spline loaded, trying setZoom...')
    setSplineApp(spline)
    
    // Set initial zoom based on current screen size
    const zoomLevel = getZoomLevel()
    spline.setZoom(zoomLevel)
    console.log(`setZoom(${zoomLevel}) called for screen width: ${window.innerWidth}px`)
  }

  // Initialize screen size check and handle resize
  useEffect(() => {
    // Set initial render state
    setShouldRender3D(checkScreenSize())

    const handleResize = () => {
      const shouldRender = checkScreenSize()
      setShouldRender3D(shouldRender)

      // Only adjust zoom if we have a spline app and should render
      if (splineApp && shouldRender) {
        const zoomLevel = getZoomLevel()
        splineApp.setZoom(zoomLevel)
        console.log(`Zoom adjusted to ${zoomLevel} for screen width: ${window.innerWidth}px`)
      }
    }

    window.addEventListener('resize', handleResize)
    
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [splineApp])

  // Don't render 3D model on mobile screens
  if (!shouldRender3D) {
    return null
  }

  return (
    <Spline 
      scene="/scene-f0f0f0.splinecode" 
      onLoad={onLoad}
      style={{ width: '100%', height: '100%' }}
    />
  )
}
