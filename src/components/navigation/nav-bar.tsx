import { useState } from "react";
import { Globe } from "lucide-react";
import { navigationItems } from "@/constants/index";
import { Tab } from "./tab";
import { Cursor } from "./cursor";
import type { Position } from "./types";

export function NavBar() {
  const [position, setPosition] = useState<Position>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <nav className="fixed top-7 left-1/2 -translate-x-1/2 z-50">
      <ul
        onMouseLeave={() => {
          setPosition((pv) => ({
            ...pv,
            opacity: 0,
          }));
        }}
        className="glass-texture rounded-full flex items-center justify-center gap-2 px-2 py-2 relative"
      >
        {navigationItems.map((item) => (
          <Tab key={item.name} setPosition={setPosition} href={item.link}>
            {item.name === "Contact" && <Globe className="w-4 h-4" />}
            {item.name}
          </Tab>
        ))}
        
        <Cursor position={position} />
      </ul>
    </nav>
  );
}