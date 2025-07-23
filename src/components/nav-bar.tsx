import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { navigationItems } from "@/constants/index";
import { Globe } from "lucide-react";

type Position = {
  left: number;
  width: number;
  opacity: number;
};

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

type TabProps = {
  children: React.ReactNode;
  setPosition: React.Dispatch<React.SetStateAction<Position>>;
  href: string;
};

const Tab = ({ children, setPosition, href }: TabProps) => {
  const ref = useRef<HTMLLIElement>(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10"
    >
      <a
        href={href}
        className="relative z-10 block cursor-pointer px-4 py-2 text-sm font-medium text-foreground mix-blend-difference transition-colors"
      >
        <span className="flex items-center gap-2">
          {children}
        </span>
      </a>
    </li>
  );
};

type CursorProps = {
  position: Position;
};

const Cursor = ({ position }: CursorProps) => {
  return (
    <motion.li
      initial={false}
      animate={{
        ...position,
      }}
      transition={{
        type: "spring",
        stiffness: 350,
        damping: 25,
      }}
      className="absolute z-0 h-[calc(100%-16px)] rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
      style={{
        backdropFilter: "blur(10px)",
      }}
    />
  );
};