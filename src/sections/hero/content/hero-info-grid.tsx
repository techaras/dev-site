import { useState } from "react";
import { Copy, Check, ArrowRight } from "lucide-react";

export function HeroInfoGrid() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("info@stavrossymeonidis.dev");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="grid grid-cols-2 gap-8 px-6 md:px-12 lg:px-16 items-center">
      {/* Left Column */}
      <div className="flex flex-col gap-3 justify-center">
        <div className="flex flex-col gap-3 w-fit">
          <button className="glass-texture font-heading z-10 cursor-pointer text-sm pl-6 rounded-full text-foreground hover:opacity-80 transition-opacity flex items-center justify-between gap-3">
            <span className="mt-1">let's connect</span>
            <div className="glass-texture rounded-full p-1 m-1">
              <ArrowRight className="w-6 h-6" />
            </div>
          </button>
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="transition-opacity p-1 hover:bg-accent rounded z-10 cursor-pointer"
              aria-label="Copy email address"
            >
              {copied ? (
                <Check className="w-4 h-4 text-green-500" />
              ) : (
                <Copy className="w-4 h-4 text-[#b3b3b3] hover:text-foreground" />
              )}
            </button>
            <span className="font-body font-light text-base text-[#b3b3b3]">
              info@stavrossymeonidis.dev
            </span>
          </div>
        </div>
      </div>
      
      {/* Right Column */}
      <div className="flex items-center justify-end">
        <p className="font-body font-light text-[18px] text-[#b3b3b3] leading-relaxed text-left">
          Patent-winning full-stack developer<br />who combines technical expertise<br />with deep business understanding.
        </p>
      </div>
    </div>
  );
}
