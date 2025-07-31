import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";

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
    <div className="grid grid-cols-2 gap-8 px-6 md:px-12 lg:px-16">
      {/* Left Column */}
      <div className="flex flex-col gap-3">
        <Button 
          variant="outline" 
          className="font-heading text-sm w-fit"
        >
          let's connect
        </Button>
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
      {/* Right Column */}
      <div className="text-start">
        <p className="font-body font-light text-[#b3b3b3] leading-relaxed">
          Patent-winning full-stack developer<br />who combines technical expertise<br />with deep business understanding.
        </p>
      </div>
    </div>
  );
}
