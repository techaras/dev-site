import { ArrowRight } from "lucide-react";
import { ServiceCard } from "@/sections/how-i-work/services/service-card";
import { services } from "@/sections/how-i-work/services/constants";
import { Marquee } from "@/components/ui/marquee";
import { useDrawerStore } from "@/stores/drawerStore";

export function ServicesMobile() {
  const { open: openDrawer } = useDrawerStore();

  const handleRequestServiceClick = () => {
    console.log('🎯 Opening contact drawer from mobile services section');
    openDrawer();
  };

  return (
    <div className="w-full h-full text-[#f2f2f2] flex flex-col">
      {/* Header */}
      <button
        type="button"
        onClick={handleRequestServiceClick}
        className="font-heading text-lg mb-8 text-[#f2f2f2] hover:opacity-80 transition-opacity flex items-center gap-2 cursor-pointer"
        aria-label="Request Service"
      >
        Request Service
        <ArrowRight className="w-7 h-7 mb-1" aria-hidden="true" />
      </button>

      {/* Marquee container with scroll shadows - full height minus header */}
      <div className="flex-1 min-h-0 edge-to-edge relative">
        {/* Left scroll shadow */}
        <div className="absolute top-0 left-0 bottom-0 w-8 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
        
        <Marquee
          pauseOnHover
          className="[--duration:60s] h-full"
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
        </Marquee>

        {/* Right scroll shadow */}
        <div className="absolute top-0 right-0 bottom-0 w-8 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
      </div>
    </div>
  );
}