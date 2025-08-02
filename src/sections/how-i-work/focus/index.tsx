export function Focus() {
  return (
    <div className="w-full h-full flex flex-col gap-4">
      {/* First Row - Single wide box spanning full width */}
      <div className="bg-black border border-[#353739] rounded-3xl p-4 flex-[1] flex flex-col items-start justify-center text-left transition-all duration-300 hover:border-[#555759] hover:transform hover:-translate-y-1">
        <h4 className="font-heading text-white text-xl mb-2">Results</h4>
        <p className="text-[#b3b3b3] font-light text-sm">Enterprise solutions that<br />drive measurable results</p>
      </div>
      
      {/* Second Row - Two horizontal boxes */}
      <div className="flex flex-row gap-4 flex-[2]">
        {/* Left box */}
        <div className="bg-black border border-[#353739] rounded-3xl p-4 flex-1 flex flex-col items-center justify-center text-center transition-all duration-300 hover:border-[#555759] hover:transform hover:-translate-y-1">
          <h4 className="font-heading text-white text-lg mb-2">Secure</h4>
          <p className="text-[#b3b3b3] font-light text-sm">Enterprise-grade<br />authentication in<br />every integration</p>
        </div>
        
        {/* Right box */}
        <div className="bg-black border border-[#353739] rounded-3xl p-4 flex-1 flex flex-col items-center justify-center text-center transition-all duration-300 hover:border-[#555759] hover:transform hover:-translate-y-1">
          <h4 className="font-heading text-white text-lg mb-2">Fast</h4>
          <p className="text-[#b3b3b3] font-light text-sm">6 to 12 week turn<br />around that ship<br />quality solutions</p>
        </div>
      </div>
    </div>
  );
}