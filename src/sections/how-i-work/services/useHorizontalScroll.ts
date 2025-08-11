import { useRef, useLayoutEffect } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useHorizontalScroll() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const viewportRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!trackRef.current || !viewportRef.current) return;

    const track = trackRef.current;
    const viewport = viewportRef.current;
    
    // Find the parent section (how-i-work section) to use as trigger
    const section = track.closest('section');
    if (!section) return;

    const getDistance = () => {
      const total = track.scrollWidth;          // full width of all cards + gaps
      const visible = viewport.clientWidth;     // the actual masked visible area
      return Math.max(0, total - visible);
    };

    const tween = gsap.to(track, {
      x: () => -getDistance(),
      ease: "none",
      duration: 1, // ignored with scrub; ok to keep simple
    });

    const st = ScrollTrigger.create({
      trigger: section,
      start: "bottom bottom",            // keep your original behavior
      end: () => `+=${getDistance()}`,   // scrub exactly the distance
      pin: true,
      animation: tween,
      scrub: 1,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      // markers: true,
    });

    // Respect users with reduced motion
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: reduce)", () => {
      st.disable(true);
      tween.progress(0).kill();
    });

    // If images/fonts shift size later, refresh distances
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    window.addEventListener("resize", refresh);

    return () => {
      window.removeEventListener("load", refresh);
      window.removeEventListener("resize", refresh);
      mm.kill();
      st.kill();
      tween.kill();
    };
  }, []);

  return { trackRef, viewportRef };
}
