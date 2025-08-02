import { useEffect, useState } from 'react'
import Spline from '@splinetool/react-spline'
import type { Application } from '@splinetool/runtime'

export function ParticleSphere() {
  const [splineApp, setSplineApp] = useState<Application | null>(null)
  const [isDesktop, setIsDesktop] = useState<boolean>(false)

  // Check if screen is desktop size (768px and above)
  const checkScreenSize = () => {
    return window.innerWidth >= 768
  }

  // Function to get appropriate zoom level based on screen size
  const getZoomLevel = () => {
    const width = window.innerWidth
    if (width < 1024) { // Tablet (md to lg breakpoint)
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
    // Set initial screen size state
    setIsDesktop(checkScreenSize())

    const handleResize = () => {
      const isDesktopSize = checkScreenSize()
      setIsDesktop(isDesktopSize)

      // Only adjust zoom if we have a spline app and it's desktop
      if (splineApp && isDesktopSize) {
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

  // Determine which scene to render based on screen size
  const sceneUrl = isDesktop ? "/scene-f0f0f0.splinecode" : "/scene-earth.splinecode"

  return (
    <Spline 
      scene={sceneUrl}
      onLoad={onLoad}
      style={{ width: '100%', height: '100%' }}
    />
  )
}
