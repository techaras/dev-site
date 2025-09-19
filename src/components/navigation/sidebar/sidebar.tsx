import { 
  Menu,
  X
} from "lucide-react";
import { navigationItems } from "@/constants/index";
import {
  MorphingPopover,
  MorphingPopoverContent,
  MorphingPopoverTrigger,
} from "@/components/ui/morphing-popover";
import { useState } from "react";
import RainbowButton from '@/components/magicui/rainbow-button';
import { useDrawerStore } from "@/stores/drawerStore";

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const { open: openDrawer } = useDrawerStore();

  const handleContactClick = () => {
    openDrawer();
    setIsOpen(false); // Close the sidebar when contact is clicked
  };

  return (
    <div className="fixed top-7 right-6 z-50 md:hidden">
      <MorphingPopover open={isOpen} onOpenChange={setIsOpen}>
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
          <div className="p-4 flex items-center justify-between">
            <h2 className="text-xs font-heading text-[#b3b3b3] mt-0.5 flex items-center gap-2">
              <span className="w-1 h-1 bg-[#b3b3b3] rounded-full"></span>
              MENU
            </h2>
            
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 px-3 py-1.5 bg-black border border-border rounded-md hover:bg-gray-900 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-4 h-4" style={{ color: '#b3b3b3' }} />
              <span className="text-sm font-body" style={{ color: '#b3b3b3' }}>
                Close
              </span>
            </button>
          </div>
          
          {/* Navigation Links */}
          <nav className="flex flex-col gap-2 flex-1 p-4">
            {navigationItems.map((item) => {
              // Special handling for Contact item
              if (item.name === "Contact") {
                return (
                  <RainbowButton
                    key={item.name}
                    onClick={handleContactClick}
                    size="lg"
                    className="w-full font-heading pt-0.5 text-md mt-4"
                    variant="outline"
                  >
                    {item.name}
                  </RainbowButton>
                );
              }

              // Regular navigation items
              return (
                <a
                  key={item.name}
                  href={item.link}
                  className="flex items-center gap-3 py-3 text-xl font-heading text-foreground rounded-lg transition-all hover:bg-accent/50 hover:text-accent-foreground focus:bg-accent/50 focus:text-accent-foreground focus:outline-none border-b rounded-s-none rounded-e-none"
                >
                  <span>{item.name}</span>
                </a>
              );
            })}
          </nav>
        </MorphingPopoverContent>
      </MorphingPopover>
    </div>
  );
}