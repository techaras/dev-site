import { ArrowRight } from "lucide-react";
import { ServiceCard } from "./service-card";
import { services } from "./constants";

export function Services() {
  return (
    <div className="w-full h-full text-[#f2f2f2] flex flex-col">
      {/* Header */}
      <button className="font-heading text-xl mb-8 text-[#f2f2f2] hover:opacity-80 transition-opacity flex items-center gap-2 cursor-pointer">
        Request Service
        <ArrowRight className="w-7 h-7 mb-1" />
      </button>
      
      {/* Card container with defined height */}
      <div className="flex-1 min-h-0">
        {/* Infinite scrolling cards */}
        <div className="services-carousel edge-to-edge h-full">
          <div className="services-group">
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
          <div className="services-group" aria-hidden="true">
            {services.map((service, index) => (
              <ServiceCard
                key={`duplicate-${index}`}
                icon={service.icon}
                iconBg={service.iconBg}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}