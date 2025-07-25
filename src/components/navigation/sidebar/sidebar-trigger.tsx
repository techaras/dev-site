import { Menu } from "lucide-react";
import { DialogTrigger } from "@/components/ui/dialog";

export function SidebarTrigger() {
  return (
    <DialogTrigger asChild>
      <button
        className="fixed top-7 right-6 z-50 md:hidden flex items-center justify-center p-2 transition-all duration-300 hover:scale-105 active:scale-95 rounded-sm data-[state=open]:opacity-0 data-[state=open]:pointer-events-none"
        aria-label="Open navigation menu"
      >
        <Menu className="w-6 h-6 text-foreground" />
      </button>
    </DialogTrigger>
  );
}