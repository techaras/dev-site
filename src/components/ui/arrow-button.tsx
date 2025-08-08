import { ArrowRight } from "lucide-react";

interface ArrowButtonProps {
  children: React.ReactNode;
}

export function ArrowButton({ children }: ArrowButtonProps) {
  return (
    <button className="glass-texture font-heading z-10 cursor-pointer text-sm pl-6 rounded-full text-foreground hover:opacity-80 transition-opacity flex items-center justify-between gap-3">
      <span className="mt-1">{children}</span>
      <div className="cursor-glass-effect rounded-full p-1 m-1">
        <ArrowRight className="w-6 h-6" />
      </div>
    </button>
  );
}