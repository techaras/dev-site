import type { ServiceCardProps } from "./types";

export function ServiceCard({ icon, iconBg, title, description }: ServiceCardProps) {
  return (
    <div className="flex-shrink-0 w-80 relative h-full">
      {/* Main card content */}
      <div className="bg-black border border-[#353739] rounded-3xl p-6">
        {/* Icon with circular background */}
        <div className={`w-12 h-12 ${iconBg} rounded-full flex items-center justify-center mb-6`}>
          {icon}
        </div>
        
        {/* Title */}
        <h4 className="font-body font-medium text-[#f2f2f2] text-xl mb-4 leading-tight">
          {title}
        </h4>
        
        {/* Description */}
        <p className="text-[#b3b3b3] font-body font-light text-sm leading-relaxed mb-17 whitespace-pre-line">
          {description}
        </p>
      </div>
    </div>
  );
}