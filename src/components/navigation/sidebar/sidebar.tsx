import { 
  Menu 
} from "lucide-react";
import { navigationItems } from "@/constants/index";
import {
  MorphingPopover,
  MorphingPopoverContent,
  MorphingPopoverTrigger,
} from "@/components/ui/morphing-popover";

export function Sidebar() {
  return (
    <div className="fixed top-7 right-6 z-50 md:hidden">
      <MorphingPopover>
        {/* Trigger - Hamburger Menu */}
        <MorphingPopoverTrigger 
          className="flex items-center justify-center p-2 transition-all duration-300 hover:scale-105 active:scale-95 rounded-full border border-border hover:border-ring"
          aria-label="Open navigation menu"
        >
          <Menu className="w-6 h-6 text-foreground" />
        </MorphingPopoverTrigger>
        {/* Content - Sidebar */}
        <MorphingPopoverContent 
          className="fixed rounded-2xl shadow-xl flex flex-col"
          style={{
            top: '10px',
            left: '10px',
            right: '10px'
          }}
        >
          {/* Header */}
          <div className="p-4">
            <h2 className="text-xs font-heading text-[#b3b3b3]">
              MENU
            </h2>
          </div>
          
          {/* Navigation Links */}
          <nav className="flex flex-col gap-2 flex-1 p-4">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                className="flex items-center gap-3 py-3 text-xl font-heading text-foreground rounded-lg transition-all hover:bg-accent/50 hover:text-accent-foreground focus:bg-accent/50 focus:text-accent-foreground focus:outline-none"
              >
                <span>{item.name}</span>
              </a>
            ))}
          </nav>
        </MorphingPopoverContent>
      </MorphingPopover>
    </div>
  );
}