import { useEffect, useRef, useState } from 'react'
import { ParticleSphere } from './model/particle-sphere'
import { HeroTitle } from './content/hero-title'
import { HeroInfoGrid } from './content/hero-info-grid'
import { AvailabilityStatus } from './content/availability-status'

export function Hero() {
  const heroTitleRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [dynamicMargin, setDynamicMargin] = useState(80)

  useEffect(() => {
    const calculateDynamicMargin = () => {
      const width = window.innerWidth
      
      if (width < 768) { // Only for mobile screens
        const heroTitleElement = heroTitleRef.current?.querySelector('h1')
        
        if (heroTitleElement) {
          const titleHeight = heroTitleElement.getBoundingClientRect().height
          const computedStyle = window.getComputedStyle(heroTitleElement)
          const fontSize = computedStyle.fontSize
          const lineHeight = computedStyle.lineHeight
          
          // Calculate margin as 60% of title height to maintain consistent ratio
          const newMargin = titleHeight * 0.6
          setDynamicMargin(newMargin)
          
          const marginTitleRatio = (newMargin / titleHeight).toFixed(2)
          
          console.log('=== HERO SPACING ANALYSIS ===')
          console.log(`Screen Width: ${width}px`)
          console.log(`Title Font Size: ${fontSize}`)
          console.log(`Title Line Height: ${lineHeight}`)
          console.log(`Title Actual Height: ${titleHeight.toFixed(1)}px`)
          console.log(`Dynamic Margin: ${newMargin.toFixed(1)}px`)
          console.log(`Margin-to-Title Ratio: ${marginTitleRatio} (should be consistent ~0.60)`)
          console.log(`Visual Impact: Margin scales proportionally with title`)
          console.log('================================')
        }
      }
    }

    // Calculate on mount
    setTimeout(calculateDynamicMargin, 100)

    // Calculate on resize
    const handleResize = () => {
      setTimeout(calculateDynamicMargin, 100)
    }

    window.addEventListener('resize', handleResize)
    
    // Also calculate after fonts are loaded
    setTimeout(calculateDynamicMargin, 1000)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <section 
      id="home" 
      className="relative h-screen w-full overflow-hidden"
    >
      <div className="absolute inset-0 bg-background">
        <ParticleSphere />
      </div>
      
      {/* Mobile Layout: Top-aligned vertical stack (default, under 768px) */}
      <div 
        ref={containerRef}
        className="relative z-10 h-full flex flex-col pt-24 px-6 md:hidden mt-36"
      >
        <div ref={heroTitleRef}>
          <HeroTitle />
        </div>
        <div 
          className="hero-spacing-div" 
          style={{ marginTop: `${dynamicMargin}px` }}
        >
          <HeroInfoGrid />
        </div>
        <div className="mt-8">
          <AvailabilityStatus />
        </div>
      </div>

      {/* Desktop Layout: Centered with absolute positioning (768px and above) */}
      <div className="absolute inset-0 z-10 flex-col hidden md:flex">
        <div className="flex-1 flex items-center">
          <HeroTitle />
        </div>
        <div className="flex-1 flex items-center mt-16">
          <div className="w-full">
            <HeroInfoGrid />
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <AvailabilityStatus />
        </div>
      </div>
    </section>
  )
}
