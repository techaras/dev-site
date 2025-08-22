import { useEffect } from 'react';

const SECTIONS = [
  'home',
  'how-i-work', 
  'case-studies',
  'skills',
  'about-me',
  'footer'
] as const;

export function useSectionTracker() {
  useEffect(() => {
    // Wait for DOM to be ready and GSAP to initialize
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              console.log(`📍 Section in viewport: ${entry.target.id}`);
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
  }, []);
}