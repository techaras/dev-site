import { ResultsIcon } from "@/components/icons/focus/results-icon";
import { SecureIcon } from "@/components/icons/focus/secure-icon";
import { FastIcon } from "@/components/icons/focus/fast-icon";

export function Focus() {
  return (
    <div className="w-full h-full flex flex-col gap-4">
      {/* First Row - Single wide box spanning full width with Results icon */}
      <div className="bg-black border border-[#353739] rounded-3xl p-4 flex-[1] flex flex-row items-center gap-4 text-left transition-all duration-300 hover:border-[#555759] hover:transform hover:-translate-y-1">
        <ResultsIcon className="w-26 h-26 flex-shrink-0" />
        <div className="flex flex-col">
          <h4 className="font-heading text-[#f2f2f2] text-xl mb-2">Results</h4>
          <p className="text-[#b3b3b3] font-light text-sm">Enterprise solutions that<br />drive measurable results</p>
        </div>
      </div>
      
      {/* Second Row - Two horizontal boxes */}
      <div className="flex flex-row gap-4 flex-[2]">
        {/* Left box - Secure */}
        <div className="bg-black border border-[#353739] rounded-3xl p-4 flex-1 flex flex-col items-center justify-center text-center transition-all duration-300 hover:border-[#555759] hover:transform hover:-translate-y-1">
          <SecureIcon className="w-14 h-14 mb-6" />
          <h4 className="font-heading text-[#f2f2f2] text-lg mb-2">Secure</h4>
          <p className="text-[#b3b3b3] font-light text-sm">Enterprise-grade<br />authentication in<br />every integration</p>
        </div>
        
        {/* Right box - Fast */}
        <div className="bg-black border border-[#353739] rounded-3xl p-4 flex-1 flex flex-col items-center justify-center text-center transition-all duration-300 hover:border-[#555759] hover:transform hover:-translate-y-1">
          <FastIcon className="w-14 h-14 mb-6" />
          <h4 className="font-heading text-[#f2f2f2] text-lg mb-2">Fast</h4>
          <p className="text-[#b3b3b3] font-light text-sm">6 to 12 week turn<br />around that ship<br />quality solutions</p>
        </div>
      </div>
    </div>
  );
}