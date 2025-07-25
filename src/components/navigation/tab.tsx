import { useRef } from "react";
import type { TabProps } from "./types";

export const Tab = ({ children, setPosition, href }: TabProps) => {
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
        className="relative z-10 block cursor-pointer px-4 py-2 text-sm font-medium text-foreground mix-blend-difference transition-colors whitespace-nowrap"
      >
        <span className="flex items-center gap-2">
          {children}
        </span>
      </a>
    </li>
  );
};