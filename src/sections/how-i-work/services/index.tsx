import { ArrowRight } from "lucide-react";

export function Services() {
  return (
    <div className="w-full h-full text-[#f2f2f2]">
      <button className="font-heading text-xl mb-4 text-[#f2f2f2] hover:opacity-80 transition-opacity flex items-center gap-2 cursor-pointer">
        Request Service
        <ArrowRight className="w-7 h-7 mb-1" />
      </button>
    </div>
  );
}