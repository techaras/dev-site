import { 
  Globe, 
  Home, 
  Cog, 
  FolderOpen, 
  Zap, 
  User 
} from "lucide-react";
import { navigationItems } from "@/constants/index";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { SidebarTrigger } from "./sidebar-trigger";

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
    <Dialog>
      <SidebarTrigger />
      <DialogContent 
        variant="sidebar" 
        className="md:hidden cursor-glass-effect"
        showCloseButton={true}
      >
        <DialogHeader>
          <DialogTitle className="text-lg font-heading">
            Navigation
          </DialogTitle>
        </DialogHeader>
        
        <nav className="flex flex-col gap-2 mt-6 flex-1">
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
      </DialogContent>
    </Dialog>
  );
}