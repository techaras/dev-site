import { ArrowRight } from "lucide-react";

export function Capabilities() {
  return (
    <div className="w-full h-full text-[#f2f2f2] flex flex-col">
      <h3 className="font-heading text-xl mb-4">Capabilities</h3>
      
      {/* Spacer to push content to bottom */}
      <div className="flex-1" />
      
      {/* Bottom left content */}
      <div>
        <p className="font-body font-light text-sm text-[#b3b3b3] mb-2">
          Don't see your stack?
        </p>
        <button className="font-heading text-[#f2f2f2] hover:opacity-80 transition-opacity flex items-center gap-2 cursor-pointer">
          Let's Talk
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
