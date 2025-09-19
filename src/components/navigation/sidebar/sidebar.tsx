import { 
  Globe, 
  Home, 
  Cog, 
  FolderOpen, 
  Zap, 
  User,
  Menu 
} from "lucide-react";
import { navigationItems } from "@/constants/index";
import {
  MorphingPopover,
  MorphingPopoverContent,
  MorphingPopoverTrigger,
} from "@/components/ui/morphing-popover";

// Icon mapping for navigation items
const getIconForItem = (itemName: string) => {
  switch (itemName) {
    case "Home":
      return <Home className="w-4 h-4" />;
    case "How I Work":
      return <Cog className="w-4 h-4" />;
    case "Case Studies":
      return <FolderOpen className="w-4 h-4" />;
    case "Skills":
      return <Zap className="w-4 h-4" />;
    case "About me":
      return <User className="w-4 h-4" />;
    case "Contact":
      return <Globe className="w-4 h-4" />;
    default:
      return null;
  }
};

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
          className="fixed cursor-glass-effect bg-background/95 backdrop-blur-md border border-border rounded-2xl shadow-xl flex flex-col"
          style={{
            top: '10px',
            left: '10px',
            right: '10px'
          }}
        >
          {/* Header */}
          <div className="p-6 border-b border-border">
            <h2 className="text-lg font-heading text-foreground">
              Navigation
            </h2>
          </div>
          
          {/* Navigation Links */}
          <nav className="flex flex-col gap-2 flex-1 p-6">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-foreground rounded-lg transition-all hover:bg-accent/50 hover:text-accent-foreground focus:bg-accent/50 focus:text-accent-foreground focus:outline-none"
              >
                {getIconForItem(item.name)}
                <span>{item.name}</span>
              </a>
            ))}
          </nav>
        </MorphingPopoverContent>
      </MorphingPopover>
    </div>
  );
}