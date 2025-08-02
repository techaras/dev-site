import { useState } from "react";
import { Copy, Check, ArrowRight } from "lucide-react";

export function HeroInfoGrid() {
  const [copied, setCopied] = useState(false);

  // Original email for copy functionality
  const originalEmail = "info@stavrossymeonidis.dev";
  
  // Email with invisible characters to prevent mobile auto-detection
  const emailDisplay = "info" + String.fromCharCode(8203) + "@" + String.fromCharCode(8203) + "stavrossymeonidis.dev";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(originalEmail);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-12 lg:px-16 items-center">
      {/* Description - First on mobile, Right column on desktop */}
      <div className="flex items-center justify-center md:justify-end md:order-2">
        <p className="font-body font-light text-[18px] text-[#b3b3b3] leading-relaxed text-center md:text-left">
          {/* 767px to 507px - 2 lines */}
          <span className="hero-info-grid-text-medium text-[16px]">
            Patent-winning full-stack developer who combines<br />technical expertise with deep business understanding.
          </span>
          {/* 562px and lower - 3 lines */}
          <span className="hero-info-grid-text-small whitespace-nowrap text-[14px]">
            Patent-winning full-stack developer<br />who combines technical expertise<br />with deep business understanding.
          </span>
        </p>
      </div>
      
      {/* Contact Info - Second on mobile, Left column on desktop */}
      <div className="flex flex-col gap-3 justify-center items-center md:items-start md:order-1">
        <div className="flex flex-col gap-8 md:gap-3 w-fit">
          <button className="glass-texture font-heading z-10 cursor-pointer text-sm pl-6 rounded-full text-foreground hover:opacity-80 transition-opacity flex items-center justify-between gap-3">
            <span className="mt-1 max-[562px]:text-[14px]">let's connect</span>
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
            <span className="font-body font-light text-base max-[562px]:text-[14px] text-[#b3b3b3]">
              {emailDisplay}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}