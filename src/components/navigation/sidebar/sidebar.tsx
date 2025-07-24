import { Globe } from "lucide-react";
import { navigationItems } from "@/constants/index";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { SidebarTrigger } from "./sidebar-trigger";

export function Sidebar() {
  return (
    <Dialog>
      <SidebarTrigger />
      <DialogContent className="sm:w-[320px] md:hidden cursor-glass-effect">
        <DialogHeader>
          <DialogTitle className="text-lg font-heading">
            Navigation
          </DialogTitle>
        </DialogHeader>
        
        <nav className="flex flex-col gap-2 mt-6">
          {navigationItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-foreground rounded-lg transition-all hover:bg-accent/50 hover:text-accent-foreground focus:bg-accent/50 focus:text-accent-foreground focus:outline-none"
            >
              {item.name === "Contact" && <Globe className="w-4 h-4" />}
              <span>{item.name}</span>
            </a>
          ))}
        </nav>
      </DialogContent>
    </Dialog>
  );
}