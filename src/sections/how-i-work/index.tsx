import { useRef, useLayoutEffect } from 'react'
import { Methodology } from './methodology'
import { Focus } from './focus'
import { Capabilities } from './capabilities'
import { ResponseTime } from './response-time'
import { Contact } from './contact'
import { Services } from './services'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function HowIWork() {
  const sectionRef = useRef<HTMLElement>(null);

  // Track = the long flex row we translate; Viewport = the overflow-hidden wrapper we subtract
  const servicesTrackRef = useRef<HTMLDivElement | null>(null);
  const servicesViewportRef = useRef<HTMLDivElement | null>(null);  

  useLayoutEffect(() => {
    if (!sectionRef.current || !servicesTrackRef.current || !servicesViewportRef.current) return;

    const section = sectionRef.current;
    const track = servicesTrackRef.current;
    const viewport = servicesViewportRef.current;

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

  return (
    <section 
      ref={sectionRef}
      id="how-i-work" 
      className="py-20 px-6 md:px-12 lg:px-16"
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
          <div className="bento-square">
            <Methodology />
          </div>
          <div className="">
            <Focus />
          </div>
          <div className="bento-square">
            <Capabilities />
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <ResponseTime />
            </div>
            <div className="bento-square">
              <Contact />
            </div>
          </div>

          {/* Services - Spans 2 columns */}
          <div className="bento-square md:col-span-2">
            <Services
              servicesScrollRef={servicesTrackRef}
              servicesViewportRef={servicesViewportRef}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
