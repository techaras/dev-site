import { useEffect, useRef } from 'react';
import { useNavigationStore, type SectionId } from '@/stores/navigationStore';

const SECTIONS = [
  'home',
  'how-i-work', 
  'case-studies',
  'skills',
  'about-me',
  'footer'
] as const;

export function useSectionTracker() {
  const setActiveSection = useNavigationStore(state => state.setActiveSection);
  const isNavigating = useNavigationStore(state => state.isNavigating);
  
  // Use ref to ensure callback always has current navigation state
  const isNavigatingRef = useRef(isNavigating);

  // Update ref whenever navigation state changes
  useEffect(() => {
    isNavigatingRef.current = isNavigating;
  }, [isNavigating]);

  useEffect(() => {
    // Wait for DOM to be ready and GSAP to initialize
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          // Use ref to get current navigation state (avoids stale closure)
          if (isNavigatingRef.current) {
            console.log('🚫 Skipping section updates during navigation');
            return;
          }

          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const sectionId = entry.target.id;
              
              console.log(`📍 Section in viewport: ${sectionId}`);
              
              // Only update store for sections we track in navigation (not footer)
              if (sectionId !== 'footer') {
                setActiveSection(sectionId as SectionId);
              }
            }
          });
        },
        {
          threshold: 0.1, // Lower threshold - log when 10% is visible
          rootMargin: '-10% 0px -10% 0px' // Smaller detection area
        }
      );

      // Observe all sections
      SECTIONS.forEach(sectionId => {
        const element = document.getElementById(sectionId);
        if (element) {
          observer.observe(element);
          console.log(`🔍 Observing section: ${sectionId}`);
        } else {
          console.warn(`⚠️ Section not found: ${sectionId}`);
        }
      });

      // Cleanup function
      return () => {
        console.log('🧹 Cleaning up section observer');
        observer.disconnect();
      };
    }, 1000); // Wait 1 second for GSAP to initialize

    return () => clearTimeout(timer);
  }, [setActiveSection]); // Removed isNavigating dependency since we use ref
}