import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { ArrowButton } from "@/components/ui/arrow-button";

export function HomeInfoGrid() {
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
    <div className="grid grid-cols-2 gap-8 px-16 items-center">
      {/* Description - Right column */}
      <div className="flex items-center justify-end order-2">
        <p className="font-body font-light text-[18px] text-[#b3b3b3] leading-relaxed text-left">
          Patent-winning full-stack developer<br />who combines technical expertise<br />with deep business understanding.
        </p>
      </div>
      
      {/* Contact Info - Left column */}
      <div className="flex flex-col gap-3 justify-center items-start order-1">
        <div className="flex flex-col gap-3 w-fit">
          <ArrowButton>let's connect</ArrowButton>
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
              {emailDisplay}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}