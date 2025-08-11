import { ArrowRight } from "lucide-react";
import { ServiceCard } from "./service-card";
import { services } from "./constants";
import { useHorizontalScroll } from "./useHorizontalScroll";

export function Services() {
  const { trackRef, viewportRef } = useHorizontalScroll();

  return (
    <div className="w-full h-full text-[#f2f2f2] flex flex-col">
      {/* Header */}
      <button
        type="button"
        className="font-heading text-xl mb-8 text-[#f2f2f2] hover:opacity-80 transition-opacity flex items-center gap-2 cursor-pointer"
        aria-label="Request Service"
      >
        Request Service
        <ArrowRight className="w-7 h-7 mb-1" aria-hidden="true" />
      </button>

      {/* Card container viewport (mask) */}
      <div ref={viewportRef} className="flex-1 min-h-0 overflow-hidden edge-to-edge">
        {/* Horizontal track */}
        <div
          ref={trackRef}
          className="flex gap-6 h-full w-max will-change-transform"
        >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              iconBg={service.iconBg}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
